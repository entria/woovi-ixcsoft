# woovi-ixcsoft

Microservice to integrate **IXC Soft** (Brazil's leading ISP ERP) with **Woovi** PIX payments.

IXC Soft is used by thousands of Brazilian internet providers (ISPs). This service bridges their billing system with Woovi's PIX infrastructure, enabling automatic invoice generation, QR code delivery, and payment reconciliation.

---

## How it works

```
IXC Soft (ERP)                  Microservice                    Woovi
──────────────                  ────────────                    ──────
Open invoices (fn_areceber) ──► Poll every hour            
                                Create PIX charge ──────────► POST /charge
                                Store correlationID ────────► pix_txid field in IXC
                                                              (paid by customer)
                                Receive webhook ◄───────────  charge:completed
                                Do baixa ───────────────────► POST /fn_areceber_recebimentos_baixas_novo
                                                              Invoice marked as paid ✓
```

**No database required on the MVP.** The Woovi `correlationID` is stored directly in IXC's `pix_txid` field, making the system stateless and idempotent.

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
Authorization: Appid {woovi_appid}
```

```json
{
  "correlationID": "ixc-{invoice_id}-{timestamp}",
  "value": 10000,
  "comment": "Fatura #{invoice_id} - {customer_name}",
  "expiresIn": 86400
}
```

Use `ixc-{invoice_id}` as the correlationID prefix for easy lookup on webhook receipt.

### Webhook payload (`charge:completed`)

```json
{
  "event": "OPENPIX:CHARGE_COMPLETED",
  "charge": {
    "correlationID": "ixc-145723-...",
    "value": 12333,
    "status": "COMPLETED"
  }
}
```

On receipt:
1. Extract `invoice_id` from `correlationID`
2. Call `POST /fn_areceber_recebimentos_baixas_novo`

---

## Environment variables

```env
# IXC Soft
IXC_BASE_URL=https://your-domain.ixcsoft.com.br/webservice/v1
IXC_TOKEN=102:c460359...          # user_id:token
IXC_FILIAL_ID=1
IXC_CONTA_ID=1

# Woovi
WOOVI_APP_ID=your-app-id
WOOVI_WEBHOOK_SECRET=your-secret

# Config
POLL_INTERVAL_MINUTES=60
```

---

## Architecture

```
┌─────────────────────────────────────────────────────┐
│                    Microservice                      │
│                                                      │
│  ┌──────────┐    ┌──────────────┐   ┌────────────┐  │
│  │  Cron    │───►│ IXC Poller   │──►│Woovi Client│  │
│  │ (hourly) │    │ fn_areceber  │   │ /charge    │  │
│  └──────────┘    └──────────────┘   └────────────┘  │
│                                                      │
│  ┌──────────────────────────────────────────────┐   │
│  │  Webhook Handler (/webhook/woovi)             │   │
│  │  charge:completed → baixa em fn_areceber      │   │
│  └──────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
         │                          │
         ▼                          ▼
   IXC Soft API              Woovi API
```

### Multi-tenant

Each ISP configures their own credentials. The microservice can support multiple ISPs by storing per-tenant config:

```
tenants/
  isp-abc/
    IXC_BASE_URL
    IXC_TOKEN
    WOOVI_APP_ID
  isp-xyz/
    ...
```

---

## Limitations & known issues

- **IP whitelist required:** Production IXC instances restrict API access by IP. Each ISP must whitelist the microservice's outbound IP.
- **No IXC outbound webhooks:** IXC does not push events when new invoices are created. The microservice polls periodically (recommended: every 60 minutes).
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
