# IXC Provedor + Woovi PIX Integration

## Arquivos de referência

| Arquivo | Uso |
|---------|-----|
| `ixc-api.md` | Documentação completa — todos os 1066 endpoints com bodies e campos |
| `ixc-postman.json` | Fonte original Postman — consulta muito específica |

---

## IXC Provedor API

**Base URL:** `https://{{meudominio.com.br}}/webservice/v1/`  
**Auth:** Basic Auth (usuário + token webservice)  
**Header obrigatório em GET:** `ixcsoft: listar`

### Estrutura padrão GET

```json
{
  "qtype": "tabela.campo",
  "query": "valor",
  "oper": "=",
  "page": "1",
  "rp": "20",
  "sortname": "tabela.campo",
  "sortorder": "asc",
  "grid_param": "[{\"TB\":\"tabela.campo\", \"OP\": \"=\", \"P\": \"valor\"}]"
}
```

### Operadores

| Op | Significado |
|----|-------------|
| `=` / `!=` | Igual / Diferente |
| `>` / `<` / `>=` / `<=` | Comparações numéricas/data |
| `L` / `NL` | Contém / Não contém (string) |
| `IN` / `NI` | Contido / Não contido (lista separada por vírgula) |
| `BE` / `NBE` | Entre / Não entre (intervalo) |

> API não suporta `OR`. Use `grid_param` para múltiplos filtros simultâneos.

### Regras dos métodos

- **PUT** — enviar TODOS os campos (não só os alterados)
- **DELETE** — pode falhar se houver dependências; apagar dependências primeiro
- **GET** — sempre requer header `ixcsoft: listar`

---

## Módulos e endpoints (1066 total)

| Módulo | Endpoints | Tabelas principais |
|--------|-----------|--------------------|
| Cadastros | 227 | `cliente`, `cliente_contrato`, `vd_contratos`, `vd_contratos_produtos`, `produtos`, `fornecedor` |
| Provedor | 133 | `radusuarios`, `radgrupos`, `radauth_nas`, `auth_usuarios`, `radpop_radio` |
| Suporte | 117 | `su_oss_chamado`, `su_ticket_setor` |
| Botões | 104 | Ações de interface (bloqueio, liberação, impressão, etc.) |
| Fluxos | 49 | Processos multi-step (renegociação, autorizar ONU, transferência) |
| Integrações | 51 | `tv_usuarios`, `sva_usuarios`, `voip_sippeers` |
| InMap | 46 | `df_elemento`, `df_projeto`, `elemento_arquivos` |
| Entradas | 37 | Compras, requisições, pedidos |
| Estoque | 30 | `estoque_produtos_almox_filial`, `patrimonio`, `almoxarifado` |
| Receber | 24 | `fn_areceber`, `fn_areceber_baixas`, `fn_renegociacao` |
| Saídas | 22 | Vendas, notas fiscais |
| CRM | 21 | `contato` (leads), negociações, prospecções |
| Plataforma VoIP | 21 | `voip_sippeers`, registros de chamadas, tarifação |
| Folha de pagamento | 20 | Adiantamentos, colaboradores |
| Pagar | 13 | `fn_apagar`, `fn_apagar_baixas`, `fn_apagar_arquivos` |
| Planejamento | 12 | Planejamento gerencial, classe financeira |
| Frota | 12 | Veículos, despesas, rastreamento |
| Processos | 12 | `wfl_processo`, `wfl_tarefa`, `wfl_interacoes` |
| Usuários | 11 | Usuários do sistema, grupos |
| Empresa | 8 | Configurações da empresa, filiais |
| Fiscal | 4 | Notas fiscais |
| Contabilidade | 4 | Lançamentos contábeis |
| MVNO | 6 | Telefonia móvel |

---

## Erros comuns

| Código | Causa | Solução |
|--------|-------|---------|
| 400 | SSL inválido ou auth não-Basic | Verificar certificado; usar Basic Auth |
| 401 | Token inválido / usuário inativo | Recriar token; verificar usuário |
| 403 | Token de servidor migrado | Recriar token webservice |
| 404 | Faltando header `ixcsoft: listar` | Adicionar header no GET |
| 500 | Endpoint errado ou formato `tabela.campo` ausente | Corrigir nome e formato |
| 504 | Timeout / sobrecarga | Reduzir volume da requisição |
| — | "Recurso não disponível" | URL incorreta ou endpoint não liberado |
| — | "IP não liberado" | Liberar IP em Configurações > Usuários > Grupo > Redes Permitidas |
