# woovi-ixcsoft

Microservice to integrate **IXC Soft** (Brazil's leading ISP ERP) with **Woovi** PIX payments.

IXC Soft is used by thousands of Brazilian internet providers (ISPs). This service bridges their billing system with Woovi's PIX infrastructure, enabling automatic invoice generation, QR code delivery, and payment reconciliation.

---

## How it works

```
IXC Soft (ERP)              Microservice (per-tenant)              Woovi
──────────────              ─────────────────────────              ──────
                            ┌─ ApplicationModel ──────────┐
                            │  wooviAppId + ixcsoft creds │
                            └─────────────────────────────┘
                                        │
Open invoices (fn_areceber) ──► Poll (cron, per tenant)
                                Create PIX charge ──────────────► POST /charge
                                Store correlationID ────────────► pix_txid field in IXC
                                                                  (paid by customer)
                                Receive signed webhook ◄──────── charge:completed
                                Verify x-webhook-signature
                                Do baixa ─────────────────────► POST /fn_areceber_recebimentos_baixas_novo
                                                                  Invoice marked as paid ✓
```

**Multi-tenant by design.** Each ISP is an `ApplicationModel` document in MongoDB, carrying its own Woovi appId and IXC credentials. Charge-completed webhooks from Woovi are validated against the Woovi public key before being processed.

---

## Tenant registration

```http
POST /service-ixcsoft/v1/applications
Content-Type: application/json
```

**Body:**
```json
{
  "wooviAppId": "Q2xpZW50X0lkXzE6Q2xpZW50X1NlY3JldF8x",
  "ixcsoft": {
    "baseUrl": "https://demo.ixcsoft.com.br/webservice/v1",
    "token": "102:c46..."
  }
}
```

The service:
1. Calls Woovi to register an `OPENPIX:CHARGE_COMPLETED` webhook pointing at `{PUBLIC_BASE_URL}/service-ixcsoft/v1/webhooks/charges/completed/:applicationId`.
2. Only persists the application if the webhook registration succeeds (no orphan records).

**Responses:**
- `201 Created` — `{ applicationId, webhookId }`
- `400 Bad Request` — missing fields
- `409 Conflict` — `wooviAppId` already registered

---

## Charge completed webhook

```http
POST /service-ixcsoft/v1/webhooks/charges/completed/:applicationId
```

Fired by Woovi when a charge is paid. Must include `x-webhook-signature` (RSA or ECDSA, `sha256`), signed with Woovi's private key. The raw body is verified against `WOOVI_WEBHOOK_PUBLIC_KEY` (base64-encoded PEM) — requests with missing or invalid signatures return `401`.

Signed test pings (`{ evento: "teste_webhook" }`) that Woovi sends when registering the webhook are acknowledged with `200` without further processing.

---

## IXC Soft API

### Authentication

All requests require HTTP Basic Auth. The token follows the format `{user_id}:{token}`, base64-encoded.

```
Authorization: Basic base64("{user_id}:{token}")
```

The `ixcsoft` header controls the operation type:

| Header value | Used for |
|---|---|
| `ixcsoft: listar` | GET (list/query) |
| `ixcsoft: Provedor` | POST / PUT / DELETE |

### Base URL

```
https://{your-ixcsoft-domain}/webservice/v1
```

### Sandbox

```
https://demo.ixcsoft.com.br/webservice/v1
```

> **Note:** Production access requires IP whitelisting on the IXC Soft admin panel.

---

## Endpoints

### List open invoices

```http
GET /fn_areceber
ixcsoft: listar
```

**Body:**
```json
{
  "qtype": "fn_areceber.status",
  "query": "A",
  "oper": "=",
  "page": "1",
  "rp": "100",
  "sortname": "fn_areceber.data_vencimento",
  "sortorder": "asc",
  "grid_param": "[{\"TB\":\"fn_areceber.pix_txid\", \"OP\": \"=\", \"P\": \"\"}]"
}
```

Filter `status=A` (Aberto) and empty `pix_txid` to find invoices that haven't been linked to a Woovi charge yet.

**Key response fields:**

| Field | Description |
|---|---|
| `id` | Invoice ID |
| `id_cliente` | Customer ID |
| `id_contrato` | Contract ID |
| `valor` | Total amount |
| `valor_aberto` | Outstanding amount |
| `data_vencimento` | Due date (`YYYY-MM-DD`) |
| `status` | `A` = open, `R` = received, `C` = cancelled |
| `pix_txid` | Woovi correlationID (stored here) |
| `recebido_via_pix` | `S` if paid via PIX |
| `tipo_recebimento` | Payment type (`Pix`, `Boleto`, `Gateway`, etc.) |

---

### Store Woovi correlationID in invoice

```http
PUT /fn_areceber/{id}
ixcsoft: Provedor
```

**Body:**
```json
{
  "pix_txid": "{woovi_correlationID}",
  "tipo_recebimento": "Pix",
  "liberado": "S"
}
```

Call this right after creating the Woovi charge. This is what links the two systems.

---

### Register payment (baixa manual)

```http
POST /fn_areceber_recebimentos_baixas_novo
ixcsoft: Provedor
```

**Body:**
```json
{
  "filial_id": "1",
  "id_receber": "{invoice_id}",
  "conta_": "1",
  "id_conta": "1",
  "tipo_recebimento": "Pix",
  "data": "16/04/2026",
  "valor_parcela": "100.00",
  "valor_total_recebido": "100.00",
  "previsao": "N",
  "historico": "Pagamento via Woovi PIX"
}
```

> **Important:** `data` must be in `dd/mm/yyyy` format.

Called when Woovi fires the `charge:completed` webhook. Marks the invoice as paid in IXC.

---

### List invoices by contract

```http
GET /fn_areceber
ixcsoft: listar
```

```json
{
  "qtype": "fn_areceber.id_contrato",
  "query": "{contract_id}",
  "oper": "=",
  "rp": "200000",
  "sortname": "fn_areceber.data_vencimento",
  "sortorder": "asc",
  "grid_param": "[{\"TB\":\"fn_areceber.liberado\", \"OP\": \"=\", \"P\": \"S\"}, {\"TB\":\"fn_areceber.status\", \"OP\": \"!=\", \"P\": \"C\"}, {\"TB\":\"fn_areceber.status\", \"OP\": \"!=\", \"P\": \"R\"}]"
}
```

### Get customer data

```http
GET /cliente
ixcsoft: listar
```

```json
{
  "qtype": "cliente.id",
  "query": "{customer_id}",
  "oper": "=",
  "page": "1",
  "rp": "1",
  "sortname": "cliente.id",
  "sortorder": "asc"
}
```

Useful fields: `razao`, `cnpj_cpf`, `email`, `telefone_celular`, `whatsapp`.

---

## Query operators

| Operator | Meaning |
|---|---|
| `=` | Equal |
| `!=` | Not equal |
| `>` | Greater than |
| `>=` | Greater or equal |
| `<` | Less than |
| `<=` | Less or equal |
| `L` | LIKE |
| `NL` | NOT LIKE |
| `IN` | IN list |
| `NI` | NOT IN list |
| `BE` | BETWEEN |

### Multiple filters (grid_param)

```json
"grid_param": "[{\"TB\":\"fn_areceber.status\", \"OP\": \"!=\", \"P\": \"C\"}, {\"TB\":\"fn_areceber.status\", \"OP\": \"!=\", \"P\": \"R\"}]"
```

---

## Woovi integration

### Create PIX charge

```http
POST https://api.woovi.com.br/api/v1/charge
Authorization: {woovi_appid}
```

```json
{
  "correlationID": "ixc-{invoice_id}",
  "value": 10000,
  "comment": "Fatura #{invoice_id}",
  "expiresIn": 86400
}
```

The `correlationID` follows the pattern `ixc-{invoice_id}` for easy lookup on webhook receipt.

### Webhook payload (`charge:completed`)

```json
{
  "event": "OPENPIX:CHARGE_COMPLETED",
  "charge": {
    "correlationID": "ixc-145723",
    "value": 12333,
    "status": "COMPLETED"
  }
}
```

On receipt:
1. Verify the `x-webhook-signature` header against `WOOVI_WEBHOOK_PUBLIC_KEY`
2. Load the tenant's `ApplicationModel` using the `applicationId` in the URL path
3. Look up the IXC invoice by `correlationID` (stored in `pix_txid`)
4. Call `POST /fn_areceber_recebimentos_baixas_novo` with the tenant's IXC credentials

---

## Environment variables

```env
APP_ENV=development
PORT=7777
REDIS_HOST=redis://localhost:6379
MONGO_URI=mongodb://localhost:27017/woovi-ixcsoft

# Woovi
WOOVI_API_URL=https://api.woovi.com.br
# Base64-encoded PEM of Woovi's webhook public key (cat public-key.pem | base64 -w 0)
WOOVI_WEBHOOK_PUBLIC_KEY=

# Public URL (used to register webhooks on Woovi per tenant)
PUBLIC_BASE_URL=https://service-ixcsoft.example.com

# Cron schedule (default: every hour)
POLL_INTERVAL_CRON=0 * * * *
```

Per-tenant IXC credentials (`baseUrl`, `token`) and `wooviAppId` are sent on the `POST /service-ixcsoft/v1/applications` body — not via env. `filial_id` and `id_conta` come from each invoice directly at baixa time.

---

## Development

```bash
pnpm install
pnpm dev          # next dev — auto-loads .env, runs instrumentation.ts on boot
pnpm build        # next build (output: standalone)
pnpm start        # next start
pnpm test         # vitest run
pnpm typecheck    # tsc --noEmit
```

`instrumentation.ts` is the Next.js boot hook: it connects Mongo, starts the BullMQ workers, and registers the cron. Route handlers live under `src/app/service-ixcsoft/v1/`.

---

## Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│                     service-ixcsoft (Next.js)                     │
│                                                                    │
│  POST /applications ──► registers tenant, creates Woovi webhook   │
│  POST /webhooks/charges/completed/:id ──► signature-checked       │
│                                                                    │
│  ┌─────────────┐   ┌───────────────────────┐   ┌──────────────┐  │
│  │ Cron        │──►│ Poll invoices per     │──►│ Woovi client │  │
│  │ (BullMQ)    │   │ ApplicationModel      │   │ (per-tenant) │  │
│  └─────────────┘   └───────────────────────┘   └──────────────┘  │
│                                                                    │
│  ┌───────────────────────────────────────────────────────────┐   │
│  │ Charge process job: resolves credentials from Mongo,       │   │
│  │ does baixa in the tenant's IXC                              │   │
│  └───────────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────┘
       │            │                  │
       ▼            ▼                  ▼
   MongoDB       Redis             IXC Soft / Woovi
  (tenants)    (BullMQ)                APIs
```

### Multi-tenant

Each ISP is an `ApplicationModel` document with:

- `type`: `IXCSOFT`
- `wooviAppId`: the Woovi Bearer token used when calling the Woovi API for this tenant
- `ixcsoft`: `{ baseUrl, token }`
- `isActive`, `removedAt`: activation/soft-delete flags

A new tenant is onboarded by calling `POST /service-ixcsoft/v1/applications`. Polling iterates all active applications and dispatches one BullMQ job per tenant. The charge-completed webhook carries the `applicationId` in the URL so the process job always resolves the right tenant's IXC credentials.

---

## Limitations & known issues

- **IP whitelist required:** Production IXC instances restrict API access by IP. Each ISP must whitelist the microservice's outbound IP.
- **No IXC outbound webhooks:** IXC does not push events when new invoices are created. The microservice polls periodically (default: every 60 minutes, configurable via `POLL_INTERVAL_CRON`).
- **Date format:** The baixa endpoint requires `dd/mm/yyyy`. ISO 8601 is not accepted.
- **`fn_areceber_altera` broken:** The `PUT /fn_areceber_altera/{id}` endpoint returns HTTP 500. Use `PUT /fn_areceber/{id}` instead.
- **Closed fiscal period in demo:** The sandbox demo has its financial period closed at 31/12/2015. Baixa operations register but do not change invoice `status` to `R`. This is a demo limitation only.

---

## References

- [IXC Soft API — Postman docs](https://docs.doc-api-provedor.com/)
- [IXC Soft API — Official wiki](https://wikiapiprovedor.ixcsoft.com.br/index.php)
- [Woovi API docs](https://developers.woovi.com)
- [IXC Soft support (WhatsApp)](https://api.whatsapp.com/send?phone=554933446001)
- Internal issue: [entria/woovi-issues#1525](https://github.com/entria/woovi-issues/issues/1525)
