# service-ixcsoft — handoff

> Pausado em 2026-04-28. Este documento existe como input para sessões futuras (humanas ou de IA).

## Em uma frase

Microsserviço que faz a ponte entre o ERP **IXC Soft** (usado por milhares de ISPs brasileiras) e a **Woovi** para Pix: cron polla `fn_areceber` em aberto, cria charge na Woovi, grava `correlationID` no `pix_txid` do IXC, e na chegada do webhook `charge:completed` registra a baixa de volta no IXC. Multi-tenant — cada ISP é um `ApplicationModel` no Mongo com suas credenciais.

## Estado funcional

Tudo verde end-to-end em ambiente de desenvolvimento:

- `pnpm dev` boota Mongo + workers BullMQ + cron via `instrumentation.ts`
- Cron de polling faz `success=24, errors=0` numa única passada (após os 3 fixes encadeados)
- Tela de reconciliação `/reconciliation?appId=...` lista IXC × Woovi mergeado por correlationID
- Container standalone do Next.js sobe e roda — incluindo o workaround do `.next/server/` no Dockerfile
- `pnpm test` 30/30, `pnpm typecheck` ✓, `pnpm build` ✓

## Linha do tempo (PRs mergeados em `main`)

| PR | O que entrega |
|---|---|
| #22 | Migra de Koa+esbuild para Next.js 16 (App Router, Turbopack, standalone). Route handlers em `src/app/service-ixcsoft/v1/`. Boot via `instrumentation.ts`. Workaround crítico no Dockerfile copiando `.next/server/` por cima do standalone (tracing do Next 16 não inclui `instrumentation.js`). |
| #23 | Drop `PORT=7777` legado — Next.js usa 3000 default; `PORT` em `.env` não é honrado mesmo. |
| #24 | Renomeia rotas de `/service-ixcsoft/v1/` para `/api/v1/` (subdomínio dedicado torna o prefixo redundante). |
| #25 | Reconciliação: home `/` com input `wooviAppId` (pré-preenchido por `DEFAULT_WOOVI_APP_ID`), lista `/reconciliation?appId=...` (header + tabela MUI), detalhe `/reconciliation/[correlationID]?appId=...`. Endpoints `/api/v1/reconciliation`. Status: `matched`, `ixc_only`, `paid_outside_woovi`. `woovi_only` orphans descartados. |
| #26 | `scripts/triggerPoll.ts` — enfileira o cron manualmente. |
| #27 | Estende o trigger para aceitar `wooviAppId` ou `applicationId` — dispara só pra um tenant. |
| #28 | **Fix Woovi**: `?return_existing=true` no POST `/charge`. Sem isso, qualquer falha intermediária (ex.: Woovi cria charge mas PUT no IXC falha) trava o cron eternamente com 400 "Já existe". |
| #29 | **Fix HTML**: IXC retorna HTTP 200 com `<div>Ocorreu um erro ao processar...</div>` em algumas falhas; antes virava `Error: response was not JSON`, agora vira `IxcsoftRequestError` com a mensagem real. Adicionada classe `IxcsoftRequestError` (e `WooviRequestError` correspondente). |
| #30 | **Fix root cause**: `PUT /fn_areceber/{id}` exige payload completo. Antes mandávamos só 3 campos e os outros 23/24 PUTs falhavam. Agora passamos a invoice inteira via spread. |

PRs fechados sem merge:
- #31 — sondagem de `id_cobranca` como substituto de `pix_txid`. Verdict: campo não writable nem queryable. Mantemos `pix_txid`.

## Arquitetura

```
IXC Soft (ERP)              service-ixcsoft (per-tenant)              Woovi
──────────────              ────────────────────────────              ──────

fn_areceber abertas ─► Cron (BullMQ) ───► POST /charge?return_existing=true
                                          (idempotente)
                                          recebe correlationID
                                          PUT /fn_areceber/{id}
                                          (full payload + pix_txid)

                                          POST /api/v1/webhooks/charges/completed/{appId}
                                          ◄── (signed) charge:completed
                                          GET /fn_areceber qtype=pix_txid
                                          POST /fn_areceber_recebimentos_baixas_novo
fatura marcada paga ◄─────────────────── baixa registrada
```

Ponteiro cruzado: **`correlationID = "ixc-{invoice.id}"` armazenado em `fn_areceber.pix_txid`.** Esse é o único elo entre os dois sistemas.

## Pontas soltas (priorizadas)

### Críticas pra produção

1. **Auth nas telas** — `/reconciliation` é pública. Qualquer um com um `wooviAppId` válido (ou que adivinhe) lê dados financeiros do tenant. Opções: Cloudflare Access no domínio (zero-trust), ou token simples no header.
2. **Ingress `ixcsoft.woovi.dev`** — domínio responde 404 do Cloudflare. Falta adicionar regra de hostname no Cloudflare Tunnel ou no Ingress k8s no repo `woovi-k8s-dev`.

### Funcionais

3. **Entrega do `paymentLinkUrl`/`brCode` pro cliente final** — atualmente Woovi cria a charge, recebemos `brCode`/`paymentLinkUrl`/QR mas **não propagamos pra IXC**. Provei 3 campos candidatos no IXC (`id_cobranca`, `gateway_link`, `linha_digitavel`) — todos silently drop no PUT. IXC só aceita escrita em ~15 campos do whitelist; nenhum deles é semanticamente apropriado para link de pagamento externo. Caminho recomendado: **proxy no nosso serviço** — `/pay/[appId]/ixc-{invoiceId}` que resolve pro `paymentLinkUrl` da Woovi sob demanda. ISP só precisa do pattern de URL pra colar nos templates dele.
4. **Reconciliação reversa** — se a Woovi recebeu pagamento mas o webhook nunca chegou (rede, retry esgotado), não há cron que detecta. Adicionar job que compara charges Woovi `COMPLETED` × invoices IXC com `status='R'` periodicamente.
5. **`pix_txid` semanticamente abusado** — campo é spec do BCB (TXID 26-35 chars alfanumérico). Gravamos `ixc-{id}` ali. Funciona porque o tenant escolheu Woovi como PSP e ninguém mais lê o campo, mas se ISP migrar de PSP, coluna fica suja. Em sondagem, nenhum campo alternativo se mostrou viável.

### Boas práticas

6. **Sem testes do `processChargeWebhook` e `getStatus`** — `registerApplication` tem 20 specs; o resto não. Adicionar.
7. **Acoplamento esquisito de `HandlerResult`** — exportado de `registerApplicationHandler.ts`, importado por `getStatus`/`processChargeWebhook`. Mover para `src/common/HandlerResult.ts`.
8. **Workaround do Dockerfile** — copiamos `.next/server/` por cima do standalone porque o tracing do Next 16 não inclui `instrumentation.js`. Quando upstream consertar (issue não foi rastreada), pode remover.
9. **Sem dashboard BullMQ** — todo debug é via redis-cli ou log. Plug `@bull-board/nextjs` em `/admin/queues` se virar dor.

## Sondagens descartadas

Durante a investigação de "onde gravar o correlationID e os payment artifacts", foram criados localmente (e descartados):

- `scripts/probeField.ts` — sondagem genérica de qualquer campo do `fn_areceber` (write + filter)
- Fix das parameter properties em `IxcsoftRequestError` e `WooviRequestError` (`public readonly` no constructor → declaração explícita), pré-requisito para `--experimental-strip-types` do Node 22

A sondagem confirmou que **nenhum dos campos candidatos (`id_cobranca`, `gateway_link`, `linha_digitavel`) é writable** via PUT — IXC silenciosamente descarta. O whitelist documentado no `PUT /fn_areceber_altera/{id}` reflete a realidade. Caso alguém queira retomar essa exploração, o pattern do script foi: GET → PUT sentinel → GET back → query filter → PUT restore. Reescrever do histórico do git ou da PR #31 fechada.

## Como subir e operar

```bash
# Dev
pnpm install
pnpm dev                          # localhost:3000, env auto-loaded
pnpm dev | tee /tmp/dev.log       # com log persistido

# Build / start
pnpm build                        # gera .next/standalone/
pnpm start

# Quality
pnpm typecheck
pnpm test

# Triggerar polling manualmente (precisa pnpm dev rodando para consumir)
node --env-file=.env --experimental-strip-types scripts/triggerPoll.ts                # todos os tenants
node --env-file=.env --experimental-strip-types scripts/triggerPoll.ts <wooviAppId>   # só um

# Mongo
mongosh mongodb://localhost:27017/woovi-ixcsoft
db.applications.find().pretty()

# Redis (BullMQ)
redis-cli LRANGE bull:IXCSOFT:wait 0 -1
redis-cli HGETALL bull:IXCSOFT:<jobId>
```

## Variáveis de ambiente relevantes

```env
APP_ENV=development
REDIS_HOST=redis://localhost:6379
MONGO_URI=mongodb://localhost:27017/woovi-ixcsoft
WOOVI_API_URL=https://api.woovi.com.br
WOOVI_WEBHOOK_PUBLIC_KEY=          # base64 do PEM da Woovi (validação de assinatura do webhook)
PUBLIC_BASE_URL=                   # domínio público — usado para registrar webhook na Woovi
DEFAULT_WOOVI_APP_ID=              # pré-preenche o input da home
POLL_INTERVAL_CRON=0 * * * *       # cron do polling (default: a cada hora)
ELASTIC_APM_SERVICE_NAME=service-ixcsoft
```

## Referências internas

- `CLAUDE.md` — referência rápida da API IXC (operadores, módulos, erros)
- `ixc-api.md` — doc completa do IXC (~1066 endpoints, 500KB markdown)
- `ixc-postman.json` — collection original do Postman (2.4MB)
- `README.md` — overview do projeto, fluxo, env vars, arquitetura
