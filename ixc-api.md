# IXC Provedor API — Documentação Completa

> Gerado a partir da collection Postman `ixc-postman.json`  
> Base URL: `https://{{meudominio.com.br}}/webservice/v1/`  
> Auth: **Basic Auth** | GET requer header: `ixcsoft: listar`

---

## CRM

### Leads

#### `GET` Leads (listar)
```
GET /webservice/v1/contato
```

**Body:**
```json
{
"qtype": "contato.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "contato.id",
"sortorder": "desc"
}
```

#### `POST` Leads (inserir)
```
POST /webservice/v1/contato
```

**Body:**
```json
{//Fora os campos obrigatórios, ele obriga pelo menos um dos telefones ou e-mail deve ser informado!
  "principal": "",
  "id_cliente": "",
  "nome": "API Ferreira",//Obrigatório
  "tipo_pessoa": "",
  "cnpj_cpf": "",
  "data_nascimento": "",
  "razao": "",
  "id_filial": "",
  "id_contato_tipo": "",
  "id_candidato_tipo": "",
  "id_campanha": "",
  "id_concorrente": "",
  "id_responsavel": "",
  "indicado_por": "",
  "data_cadastro": "24/06/2024",//Obrigatório
  "data": "",
  "id_vd_contrato": "",
  "id_tipo_elemento": "",
  "velocidade_calculada": "",
  "id_fornecedor": "",
  "lead": "",
  "ativo": "",
  "id_caixa_ftth": "",
  "distancia_caixa_mais_proxima": "",
  "id_prospeccao": "",
  "id_estagio": "",
  "ordem_kanban": "",
  "fone_residencial": "",
  "fone_comercial": "",
  "fone_celular": "49999999999",//Obrigatório
  "fone_whatsapp": "",
  "email": "",
  "skype": "",
  "facebook": "",
  "website": "",
  "cep": "",
  "endereco": "",
  "numero": "",
  "bairro": "",
  "complemento": "",
  "cidade": "",
  "uf": "",
  "referencia": "",
  "moradia": "",
  "tipo_localidade": "",
  "latitude": "",
  "longitude": "",
  "external_id": "",
  "external_system": "",
  "pipe_id_pessoa": "",
  "cadastro_site": "",
  "status_viabilidade": "",
  "tipo_rede": "",
  "operador_neutro": "",
  "data_ult_verificacao_viab": "",
  "caixa_mais_proxima": "",
  "data_cadastro_lead": "",
  "velocidade_calculada_lead": "",
  "quantidade_pessoas_lead": "",
  "quantidade_smart_lead": "",
  "frequencia_smart_lead": "",
  "quantidade_celular_lead": "",
  "frequencia_celular_lead": "",
  "quantidade_computador_lead": "",
  "frequencia_computador_lead": "",
  "quantidade_console_lead": "",
  "frequencia_console_lead": "",
  "obs": "",
  "alerta": "",
  "identificador": "",
  "origem_medium": "",
  "origem_campaing": "",
  "origem_source": "",
  "identificador_ultima_conversao": "",
  "conversao_duplicada_marketing": ""
}
```

#### `PUT` Leads (editar)
```
PUT /webservice/v1/contato/32
```

**Body:**
```json
{
  "principal": "",
  "id_cliente": "",
  "nome": "API Alterado",//Alterando esse campo
  "tipo_pessoa": "",
  "cnpj_cpf": "",
  "data_nascimento": "",
  "razao": "",
  "id_filial": "",
  "id_contato_tipo": "",
  "id_candidato_tipo": "",
  "id_campanha": "",
  "id_concorrente": "",
  "id_responsavel": "",
  "indicado_por": "",
  "data_cadastro": "24/06/2024",
  "data": "",
  "id_vd_contrato": "",
  "id_tipo_elemento": "",
  "velocidade_calculada": "",
  "id_fornecedor": "",
  "lead": "",
  "ativo": "",
  "id_caixa_ftth": "",
  "distancia_caixa_mais_proxima": "",
  "id_prospeccao": "",
  "id_estagio": "",
  "ordem_kanban": "",
  "fone_residencial": "",
  "fone_comercial": "",
  "fone_celular": "49999999999",
  "fone_whatsapp": "",
  "email": "",
  "skype": "",
  "facebook": "",
  "website": "",
  "cep": "",
  "endereco": "",
  "numero": "",
  "bairro": "",
  "complemento": "",
  "cidade": "",
  "uf": "",
  "referencia": "",
  "moradia": "",
  "tipo_localidade": "",
  "latitude": "",
  "longitude": "",
  "external_id": "",
  "external_system": "",
  "pipe_id_pessoa": "",
  "cadastro_site": "",
  "status_viabilidade": "",
  "tipo_rede": "",
  "operador_neutro": "",
  "data_ult_verificacao_viab": "",
  "caixa_mais_proxima": "",
  "data_cadastro_lead": "",
  "velocidade_calculada_lead": "",
  "quantidade_pessoas_lead": "",
  "quantidade_smart_lead": "",
  "frequencia_smart_lead": "",
  "quantidade_celular_lead": "",
  "frequencia_celular_lead": "",
  "quantidade_computador_lead": "",
  "frequencia_computador_lead": "",
  "quantidade_console_lead": "",
  "frequencia_console_lead": "",
  "obs": "",
  "alerta": "",
  "identificador": "",
  "origem_medium": "",
  "origem_campaing": "",
  "origem_source": "",
  "identificador_ultima_conversao": "",
  "conversao_duplicada_marketing": ""
}
```

#### `DELETE` Leads (deletar)
```
DELETE /webservice/v1/contato/32
```

### Negociações

#### `GET` Negociações (listar)
```
GET /webservice/v1/crm_negociacoes
```

**Body:**
```json
{
"qtype": "crm_negociacoes.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "crm_negociacoes.id",
"sortorder": "desc"
}
```

#### `POST` Negociações (inserir)
```
POST /webservice/v1/crm_negociacoes
```

**Body:**
```json
{
  "id_cliente": "2223",//Obrigatório
  "id_plano_negocio": "",
  "descricao": "Negociando a API",//Obrigatório
  "id_contato": "",
  "id_canal_origem": "",
  "id_concorrente": "",
  "id_campanha": "",
  "id_funil": "",
  "id_estagio": "2",//Obrigatório
  "id_responsavel": "",
  "criado_por": "",
  "id_filial": "",
  "valor_mensal": "",
  "valor_fixo": "",
  "previsao_fechamento": "",
  "substatus": "",
  "status": "N",//Obrigatório
  "status_reserva_rede_neutra": "",
  "id_oss_chamado": "",
  "auto_viabilidade": "",
  "data_perdemos": "",
  "data_vencemos": "",
  "obs": "",
  "alerta": "",
  "data_pausado_em": "",
  "data_pausado_ate": "",
  "origem": "",
  "id_plano": "",
  "id_tipo_cobranca": "",
  "id_modelo_contrato": "",
  "id_contrato": "",
  "id_login": "",
  "inserir_tarefa": "",
  "inserir_atendimento": "",
  "inserir_acesso": "",
  "inserir_contrato": "",
  "fidelidade": "",
  "autenticacao": "",
  "tipo_conexao_mapa": "",
  "id_integracao": "",
  "id_grupo": "",
  "login": "",
  "senha": "",
  "id_caixa_ftth": "",
  "porta_ftth": "",
  "operador_neutro": "",
  "prioridade": "",
  "id_assunto": "",
  "id_wfl_processo": "",
  "data_reservada": "",
  "melhor_horario_reserva": "",
  "menssagem": "",
  "id_tipo_agendamento": "",
  "hora_inicio": ""
}
```

#### `PUT` Negociações (editar)
```
PUT /webservice/v1/crm_negociacoes/125
```

**Body:**
```json
{
  "id_cliente": "2223",
  "id_plano_negocio": "",
  "descricao": "Alterando a API",//Alterando esse campo
  "id_contato": "",
  "id_canal_origem": "",
  "id_concorrente": "",
  "id_campanha": "",
  "id_funil": "",
  "id_estagio": "2",
  "id_responsavel": "",
  "criado_por": "",
  "id_filial": "",
  "valor_mensal": "",
  "valor_fixo": "",
  "previsao_fechamento": "",
  "substatus": "",
  "status": "N",
  "status_reserva_rede_neutra": "",
  "id_oss_chamado": "",
  "auto_viabilidade": "",
  "data_perdemos": "",
  "data_vencemos": "",
  "obs": "",
  "alerta": "",
  "data_pausado_em": "",
  "data_pausado_ate": "",
  "origem": "",
  "id_plano": "",
  "id_tipo_cobranca": "",
  "id_modelo_contrato": "",
  "id_contrato": "",
  "id_login": "",
  "inserir_tarefa": "",
  "inserir_atendimento": "",
  "inserir_acesso": "",
  "inserir_contrato": "",
  "fidelidade": "",
  "autenticacao": "",
  "tipo_conexao_mapa": "",
  "id_integracao": "",
  "id_grupo": "",
  "login": "",
  "senha": "",
  "id_caixa_ftth": "",
  "porta_ftth": "",
  "operador_neutro": "",
  "prioridade": "",
  "id_assunto": "",
  "id_wfl_processo": "",
  "data_reservada": "",
  "melhor_horario_reserva": "",
  "menssagem": "",
  "id_tipo_agendamento": "",
  "hora_inicio": ""
}
```

#### `DELETE` Negociações (deletar)
```
DELETE /webservice/v1/crm_negociacoes/125
```

#### `PUT` Vencemos Simplificado
```
PUT /webservice/v1/crm_negociacoes_simplificado/6
```

**Body:**
```json
{
    "data_vencemos":"19/12/2024",
    "id_responsavel":"1",//ID o Responsável (funcionarios)
    "id_cliente":"7",//ID do Cliente (cliente)
    "id":"6"//ID da Negociação
}
```

#### `PUT` Perdemos
```
PUT /webservice/v1/crm_negociacoes_perdemos_data/7
```

**Body:**
```json
{
    "data_perdemos":"19/12/2024",
    "id_responsavel":"1",//ID de responsável (funcionarios)
    "id_cliente":"5",//ID de Cliente (cliente)
    "id":"7"//ID da Negociação (crm_negociacoes)
}
```

### Prospecções

#### `GET` Arquivos do Cliente (listar)
```
GET /webservice/v1/cliente_arquivos
```

**Body:**
```json
{
"qtype": "cliente_arquivos.id_cliente",
"query": "2252",
"oper": "=",
"page": "1",
"rp": "1000",
"sortname": "cliente_arquivos.id",
"sortorder": "desc"
}
```

#### `POST` Arquivos do Cliente (inserir)
```
POST /webservice/v1/cliente_arquivos
```

**Body:**
```json
  descricao = Teste  // Nome do Arquivo
  local_arquivo =   // Diretório do arquivo
  id_cliente = 2252  // ID do Cliente
```

#### `DELETE` Arquivos do Cliente (deletar)
```
DELETE /webservice/v1/cliente_arquivos/1851
```

#### `GET` Prospecções (listar)
```
GET /webservice/v1/crm_canditados
```

**Body:**
```json
{
"qtype": "cliente.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "100",
"sortname": "cliente.id",
"sortorder": "desc"
}
```

#### `POST` Prospecções (inserir)
```
POST /webservice/v1/crm_canditados
```

**Body:**
```json
{//Pelo menos um dos telefones ou e-mail devem ser informados na aba contato
  "razao": "API",//Obrigatório
  "fantasia": "",
  "id_candato_tipo": "",
  "id_campanha": "",
  "id_concorrente": "",
  "id_perfil": "",
  "responsavel": "",
  "indicado_por": "",
  "status_prospeccao": "N",//Obrigatório
  "tipo_pessoa": "F",//Obrigatório
  "cnpj_cpf": "",
  "ie_identidade": "",
  "data_nascimento": "",
  "filial_id": "",
  "ativo": "S",//Obrigatório
  "data_cadastro": "",
  "prospeccao_ultimo_contato": "",
  "prospeccao_proximo_contato": "",
  "id_vendedor": "",
  "id_conta": "",
  "id_vd_contrato_desejado": "",
  "cadastrado_via_viabilidade": "",
  "id_contato_principal": "",
  "fone": "",
  "telefone_comercial": "",
  "telefone_celular": "49999999999",//Obrigatório
  "whatsapp": "",
  "ramal": "",
  "email": "",
  "contato": "",
  "website": "",
  "skype": "",
  "facebook": "",
  "id_condominio": "",
  "bloco": "",
  "apartamento": "",
  "cep": "",
  "endereco": "",
  "numero": "",
  "bairro": "",
  "cidade": "1",//Obrigatório
  "complemento": "",
  "referencia": "",
  "uf": "",
  "moradia": "",
  "tipo_localidade": "",
  "latitude": "",
  "longitude": "",
  "external_id": "",
  "external_system": "",
  "crm": "S",//Obrigatório o valor ser S
  "pipe_id_organizacao": "",
  "idx": "",
  "crm_data_novo": "",
  "crm_data_sondagem": "",
  "crm_data_apresentando": "",
  "crm_data_negociando": "",
  "crm_data_vencemos": "",
  "crm_data_perdemos": "",
  "crm_data_abortamos": "",
  "crm_data_sem_viabilidade": "",
  "crm_data_sem_porta_disponivel": "",
  "obs": "",
  "alerta": "",
  "status_viabilidade": "",
  "tipo_rede": "",
  "rede_ativacao": "",
  "operador_neutro": "",
  "resultado_calc_vel": "",
  "qtd_pessoas_calc_vel": "",
  "qtd_smart_calc_vel": "",
  "qtd_celular_calc_vel": "",
  "qtd_computador_calc_vel": "",
  "qtd_console_calc_vel": "",
  "plano_negociacao_auto_viab": "",
  "tipo_cobranca_auto_viab": "",
  "data_reserva_auto_viab": ""
}
```

#### `PUT` Prospecções (editar)
```
PUT /webservice/v1/crm_canditados/3532
```

**Body:**
```json
{
  "razao": "API alterando",//Alterando esse ca,po
  "fantasia": "",
  "id_candato_tipo": "",
  "id_campanha": "",
  "id_concorrente": "",
  "id_perfil": "",
  "responsavel": "",
  "indicado_por": "",
  "status_prospeccao": "N",
  "tipo_pessoa": "F",
  "cnpj_cpf": "",
  "ie_identidade": "",
  "data_nascimento": "",
  "filial_id": "",
  "ativo": "S",
  "data_cadastro": "",
  "prospeccao_ultimo_contato": "",
  "prospeccao_proximo_contato": "",
  "id_vendedor": "",
  "id_conta": "",
  "id_vd_contrato_desejado": "",
  "cadastrado_via_viabilidade": "",
  "id_contato_principal": "",
  "fone": "",
  "telefone_comercial": "",
  "telefone_celular": "49999999999",
  "whatsapp": "",
  "ramal": "",
  "email": "",
  "contato": "",
  "website": "",
  "skype": "",
  "facebook": "",
  "id_condominio": "",
  "bloco": "",
  "apartamento": "",
  "cep": "",
  "endereco": "",
  "numero": "",
  "bairro": "",
  "cidade": "1",
  "complemento": "",
  "referencia": "",
  "uf": "",
  "moradia": "",
  "tipo_localidade": "",
  "latitude": "",
  "longitude": "",
  "external_id": "",
  "external_system": "",
  "crm": "S",
  "pipe_id_organizacao": "",
  "idx": "",
  "crm_data_novo": "",
  "crm_data_sondagem": "",
  "crm_data_apresentando": "",
  "crm_data_negociando": "",
  "crm_data_vencemos": "",
  "crm_data_perdemos": "",
  "crm_data_abortamos": "",
  "crm_data_sem_viabilidade": "",
  "crm_data_sem_porta_disponivel": "",
  "obs": "",
  "alerta": "",
  "status_viabilidade": "",
  "tipo_rede": "",
  "rede_ativacao": "",
  "operador_neutro": "",
  "resultado_calc_vel": "",
  "qtd_pessoas_calc_vel": "",
  "qtd_smart_calc_vel": "",
  "qtd_celular_calc_vel": "",
  "qtd_computador_calc_vel": "",
  "qtd_console_calc_vel": "",
  "plano_negociacao_auto_viab": "",
  "tipo_cobranca_auto_viab": "",
  "data_reserva_auto_viab": ""
}
```

#### `DELETE` Prospecções (deletar)
```
DELETE /webservice/v1/crm_canditados/3532
```

### 📁 Cadastros

#### `GET` Planos de negociações (listar)
```
GET /webservice/v1/crm_planos_negociacoes
```

**Body:**
```json
{
    "qtype": "crm_planos_negociacoes.id",
    "query": "1",
    "oper": ">=",
    "page": "1",
    "rp": "100",
    "sortname": "crm_planos_negociacoes.id",
    "sortorder": "desc"
}
```

#### `POST` Planos de negociações (inserir)
```
POST /webservice/v1/crm_planos_negociacoes
```

**Body:**
```json
{
  "descricao": "teste",//Obrigatório
  "id_campanha": 0,
  "id_filial": "",
  "id_funil": "",
  "id_estagio": "",
  "modelo_email": "",
  "valor_mensal": "",
  "valor_fixo": "",
  "desconto_fidelidade": "",
  "cor_mapa": "#ffffff",
  "ativo": "S",
  "ultima_atualizacao": "00/00/0000 00:00:00",
  "velocidade": 200,//Obrigatório
  "nao_contem_no_plano": "",
  "contem_no_plano": "",
  "ordem": 1,
  "inserir_contrato": "S",
  "id_plano": "",
  "id_tipo_cobranca": "",
  "fidelidade": "",
  "id_modelo_contrato": "",
  "inserir_acesso": "S",
  "autenticacao": "L",
  "tipo_conexao_mapa": "F",
  "id_grupo": "",
  "inserir_atendimento": "S",
  "prioridade": "M",
  "id_assunto": "",
  "id_wfl_processo": "",
  "menssagem": "",
  "inserir_tarefa": "S",
  "id_tipo_agendamento": ""
}
```

#### `PUT` Planos de negociações (editar)
```
PUT /webservice/v1/crm_planos_negociacoes/3532
```

**Body:**
```json
{
  "descricao": "teste",
  "id_campanha": 0,
  "id_filial": "",
  "id_funil": "",
  "id_estagio": "",
  "modelo_email": "",
  "valor_mensal": "",
  "valor_fixo": "",
  "desconto_fidelidade": "",
  "cor_mapa": "#ffffff",
  "ativo": "S",
  "ultima_atualizacao": "00/00/0000 00:00:00",
  "velocidade": 200,
  "nao_contem_no_plano": "",
  "contem_no_plano": "",
  "ordem": 1,
  "inserir_contrato": "S",
  "id_plano": "",
  "id_tipo_cobranca": "",
  "fidelidade": "",
  "id_modelo_contrato": "",
  "inserir_acesso": "S",
  "autenticacao": "L",
  "tipo_conexao_mapa": "F",
  "id_grupo": "",
  "inserir_atendimento": "S",
  "prioridade": "M",
  "id_assunto": "",
  "id_wfl_processo": "",
  "menssagem": "",
  "inserir_tarefa": "S",
  "id_tipo_agendamento": ""
}
```

#### `DELETE` Planos de negociações (deletar)
```
DELETE /webservice/v1/crm_planos_negociacoes/3532
```

## Cadastros

### Clientes

#### `GET` Cliente (listar)
```
GET /webservice/v1/cliente
```

**Body:**
```json
{
    "qtype": "cliente.id",
    "query": "1",
    "oper": ">=",
    "page": "1",
    "rp": "19",
    "sortname": "cliente.id",
    "sortorder": "desc"
}
```

#### `POST` Cliente (inserir)
```
POST /webservice/v1/cliente
```

**Body:**
```json
{
  "ativo": "S",//Obrigatório
  "id_tipo_cliente": "",
  "tipo_cliente_scm": "",
  "tipo_pessoa": "F",//Obrigatório
  "razao": "Cliente 01",
  "fantasia": "",
  "cnpj_cpf": "175.181.720-20",//Obrigatório
  "ie_identidade": "",
  "contribuinte_icms": "I",//Obrigatório
  "rg_orgao_emissor": "",
  "nacionalidade": "",
  "cidade_naturalidade": "",
  "estado_nascimento": "",
  "data_nascimento": "",
  "profissao": "",
  "estado_civil": "",
  "inscricao_municipal": "",
  "isuf": "",
  "tipo_assinante": "1",//Obrigatório
  "filial_id": "",
  "filtra_filial": "",
  "idx": "",
  "ativo_serasa": "",
  "convert_cliente_forn": "",
  "atualizar_cadastro_galaxPay": "",
  "id_condominio": "",
  "bloco": "",
  "apartamento": "",
  "cep": "83215-210",//Obrigatório
  "cif": "",
  "endereco": "Rua Teste",//Obrigatório
  "numero": "1200",//Obrigatório
  "complemento": "",
  "bairro": "Teste",//Obrigatório
  "cidade": "1",//Obrigatório
  "referencia": "",
  "uf": "",
  "tipo_localidade": "U",//Obrigatório
  "latitude": "",
  "longitude": "",
  "cep_cob": "",
  "endereco_cob": "",
  "numero_cob": "",
  "bairro_cob": "",
  "cidade_cob": "",
  "complemento_cob": "",
  "referencia_cob": "",
  "uf_cob": "",
  "fone": "",
  "telefone_comercial": "",
  "ramal": "",
  "id_operadora_celular": "",
  "telefone_celular": "",
  "whatsapp": "",
  "email": "",
  "contato": "",
  "website": "",
  "skype": "",
  "facebook": "",
  "hotsite_email": "",
  "senha": "",
  "acesso_automatico_central": "",
  "alterar_senha_primeiro_acesso": "",
  "senha_hotsite_md5": "",
  "hotsite_acesso": "",
  "crm": "",
  "id_candato_tipo": "",
  "id_campanha": "",
  "id_concorrente": "",
  "id_perfil": "",
  "responsavel": "",
  "indicado_por": "",
  "cadastrado_via_viabilidade": "",
  "status_prospeccao": "",
  "crm_data_novo": "",
  "crm_data_sondagem": "",
  "crm_data_apresentando": "",
  "crm_data_negociando": "",
  "crm_data_vencemos": "",
  "crm_data_perdemos": "",
  "crm_data_abortamos": "",
  "crm_data_sem_porta_disponivel": "",
  "crm_data_sem_viabilidade": "",
  "foto_cartao": "",
  "participa_cobranca": "",
  "num_dias_cob": "",
  "participa_pre_cobranca": "",
  "cob_envia_email": "",//Obrigatório
  "cob_envia_sms": "",//Obrigatório
  "id_conta": "",
  "cond_pagamento": "",
  "id_vendedor": "",
  "tabela_preco": "",
  "deb_automatico": "",
  "deb_agencia": "",
  "deb_conta": "",
  "codigo_operacao": "",
  "tipo_pessoa_titular_conta": "",
  "cnpj_cpf_titular_conta": "",
  "nome_pai": "",
  "cpf_pai": "",
  "identidade_pai": "",
  "nascimento_pai": "",
  "nome_mae": "",
  "cpf_mae": "",
  "identidade_mae": "",
  "nascimento_mae": "",
  "quantidade_dependentes": "",
  "nome_conjuge": "",
  "fone_conjuge": "",
  "cpf_conjuge": "",
  "rg_conjuge": "",
  "data_nascimento_conjuge": "",
  "nome_contador": "",
  "telefone_contador": "",
  "orgao_publico": "",
  "im": "",
  "nome_representante_1": "",
  "cpf_representante_1": "",
  "identidade_representante_1": "",
  "nome_representante_2": "",
  "cpf_representante_2": "",
  "identidade_representante_2": "",
  "iss_classificacao_padrao": "00",//Obrigatório
  "desconto_irrf_valor_inferior": "",
  "ref_com_empresa1": "",
  "ref_com_fone1": "",
  "ref_com_empresa2": "",
  "ref_com_fone2": "",
  "ref_pes_nome1": "",
  "ref_pes_fone1": "",
  "ref_pes_nome2": "",
  "ref_pes_fone2": "",
  "obs": "",
  "alerta": ""
}
```

#### `PUT` Cliente (editar)
```
PUT /webservice/v1/cliente/2253
```

**Body:**
```json
//URL: ID 2253 do cliente para alterar o cadastro
// É necessário trazer todos os campos (não necessáriamente preenchidos)
{
  "ativo": "S",
  "id_tipo_cliente": "",
  "tipo_cliente_scm": "",
  "tipo_pessoa": "F",
  "razao": "Cliente 02",//Alterado o nome
  "fantasia": "",
  "cnpj_cpf": "175.181.720-20",
  "ie_identidade": "",
  "contribuinte_icms": "I",
  "rg_orgao_emissor": "",
  "nacionalidade": "",
  "cidade_naturalidade": "",
  "estado_nascimento": "",
  "data_nascimento": "",
  "profissao": "",
  "estado_civil": "",
  "inscricao_municipal": "",
  "isuf": "",
  "tipo_assinante": "1",
  "filial_id": "",
  "filtra_filial": "",
  "idx": "",
  "ativo_serasa": "",
  "convert_cliente_forn": "",
  "atualizar_cadastro_galaxPay": "",
  "id_condominio": "",
  "bloco": "",
  "apartamento": "",
  "cep": "83215-210",
  "cif": "",
  "endereco": "Rua Teste",
  "numero": "1200",
  "complemento": "",
  "bairro": "Teste",
  "cidade": "1",
  "referencia": "",
  "uf": "",
  "tipo_localidade": "U",
  "latitude": "",
  "longitude": "",
  "cep_cob": "",
  "endereco_cob": "",
  "numero_cob": "",
  "bairro_cob": "",
  "cidade_cob": "",
  "complemento_cob": "",
  "referencia_cob": "",
  "uf_cob": "",
  "fone": "",
  "telefone_comercial": "",
  "ramal": "",
  "id_operadora_celular": "",
  "telefone_celular": "",
  "whatsapp": "",
  "email": "",
  "contato": "",
  "website": "",
  "skype": "",
  "facebook": "",
  "hotsite_email": "",
  "senha": "",
  "acesso_automatico_central": "",
  "alterar_senha_primeiro_acesso": "",
  "senha_hotsite_md5": "",
  "hotsite_acesso": "",
  "crm": "",
  "id_candato_tipo": "",
  "id_campanha": "",
  "id_concorrente": "",
  "id_perfil": "",
  "responsavel": "",
  "indicado_por": "",
  "cadastrado_via_viabilidade": "",
  "status_prospeccao": "",
  "crm_data_novo": "",
  "crm_data_sondagem": "",
  "crm_data_apresentando": "",
  "crm_data_negociando": "",
  "crm_data_vencemos": "",
  "crm_data_perdemos": "",
  "crm_data_abortamos": "",
  "crm_data_sem_porta_disponivel": "",
  "crm_data_sem_viabilidade": "",
  "foto_cartao": "",
  "participa_cobranca": "",
  "num_dias_cob": "",
  "participa_pre_cobranca": "",
  "cob_envia_email": "",
  "cob_envia_sms": "",
  "id_conta": "",
  "cond_pagamento": "",
  "id_vendedor": "",
  "tabela_preco": "",
  "deb_automatico": "",
  "deb_agencia": "",
  "deb_conta": "",
  "codigo_operacao": "",
  "tipo_pessoa_titular_conta": "",
  "cnpj_cpf_titular_conta": "",
  "nome_pai": "",
  "cpf_pai": "",
  "identidade_pai": "",
  "nascimento_pai": "",
  "nome_mae": "",
  "cpf_mae": "",
  "identidade_mae": "",
  "nascimento_mae": "",
  "quantidade_dependentes": "",
  "nome_conjuge": "",
  "fone_conjuge": "",
  "cpf_conjuge": "",
  "rg_conjuge": "",
  "data_nascimento_conjuge": "",
  "nome_contador": "",
  "telefone_contador": "",
  "orgao_publico": "",
  "im": "",
  "nome_representante_1": "",
  "cpf_representante_1": "",
  "identidade_representante_1": "",
  "nome_representante_2": "",
  "cpf_representante_2": "",
  "identidade_representante_2": "",
  "iss_classificacao_padrao": "00",
  "desconto_irrf_valor_inferior": "",
  "ref_com_empresa1": "",
  "ref_com_fone1": "",
  "ref_com_empresa2": "",
  "ref_com_fone2": "",
  "ref_pes_nome1": "",
  "ref_pes_fone1": "",
  "ref_pes_nome2": "",
  "ref_pes_fone2": "",
  "obs": "",
  "alerta": ""
}
```

#### `DELETE` Cliente (deletar)
```
DELETE /webservice/v1/cliente/2253
```

#### `GET` Arquivos do Cliente (listar)
```
GET /webservice/v1/cliente_arquivos
```

**Body:**
```json
{
"qtype": "cliente_arquivos.id_cliente",
"query": "2252",
"oper": "=",
"page": "1",
"rp": "1000",
"sortname": "cliente_arquivos.id",
"sortorder": "desc"
}
```

#### `POST` Arquivos do Cliente (inserir)
```
POST /webservice/v1/cliente_arquivos
```

**Body:**
```json
  descricao = Teste  // Nome do Arquivo
  local_arquivo =   // Diretório do arquivo
  id_cliente = 2252  // ID do Cliente
```

#### `DELETE` Arquivos do Cliente (deletar)
```
DELETE /webservice/v1/cliente_arquivos/1851
```

#### `POST` Enviar SMS (botaoAjax_22282)
```
POST /webservice/v1/botaoAjax_22282
```

**Body:**
```json
{
    "tipo_envio_mensagem": "sms",
    "celular": "(49) 99999-9999",
    "id_gateway": "3",
    "mensagem": "Teste API",
    "remetente": "",
    "id_cliente": "7149"
}
```

#### `POST` Enviar Omnichannel (botaoAjax_22282)
```
POST /webservice/v1/botaoAjax_22282
```

**Body:**
```json
{
  "tipo_envio_mensagem": "omnichannel",//Padrão: omnichannel
  "celular": "4911115555",//Telefone Celular
  "id_cliente": "1",//ID do cliente
  "msg_omnichannel": "24",//ID da Mensagem Omnichannel
  "msg_omnichannel_label": "Teste"// Nome da mensagem
}
```

#### `POST` Enviar push (rel_26658)
```
POST /webservice/v1/botao_rel_26658
```

**Body:**
```json
{
  "titulo": "",
  "mensagem": "",
  "id_cliente": ""
}
```

#### `POST` Visualizar Arquivo (base64)
```
POST /webservice/v1/cliente_arquivo
```

**Body:**
```json
{
    "id":"291"
}
```

#### `GET` Consulta de crédito
```
GET /webservice/v1/consulta_spc_serasa
```

**Body:**
```json
{
    "qtype": "consulta_spc_serasa.id_cliente",
    "query": "3560",
    "oper": "=",
    "page": "1",
    "rp": "20",
    "sortname": "consulta_spc_serasa.id",
    "sortorder": "asc"
}
```

**Response — Exemplo:**
```json
{
    "id": "80",
    "data_hora_consulta": "2024-09-02 00:00:00",
    "id_cliente": "3560",
    "total_ocorrencias": "0",
    "valor_total": "0.00",
    "tipo_consulta": "Pessoa Fisica",
    "id_lead": "0"
}
```

#### `POST` Bloquear/Desbloquear linha SIP
```
POST /webservice/v1/bloquear_desbloquear_sip
```

**Body:**
```json
{
    "get_id": "22"//ID Linha SIP
}
```

### Contratos

#### `GET` Contratos (listar)
```
GET /webservice/v1/cliente_contrato
```

**Body:**
```json
{
"qtype": "cliente_contrato.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "20",
"sortname": "cliente_contrato.id",
"sortorder": "desc"
}
```

#### `POST` Contratos (inserir)
```
POST /webservice/v1/cliente_contrato
```

**Body:**
```json
{
  "tipo": "I",//Obrigatório
  "id_cliente": "2",//Obrigatório
  "id_vd_contrato": "1",//Obrigatório
  "descricao_aux_plano_venda": "",
  "contrato": "Plano Teste",//Obrigatório
  "id_tipo_contrato": "10",//Obrigatório
  "id_modelo": "1",//Obrigatório
  "assinatura_digital": "",
  "integracao_assinatura_digital": "",
  "liberacao_bloqueio_manual": "",
  "id_filial": "1",//Obrigatório
  "indicacao_contrato_id": "",
  "data_assinatura": "",
  "data_ativacao": "",
  "data": "18/06/2024",//Obrigatório
  "data_renovacao": "",
  "pago_ate_data": "",
  "status": "",
  "status_internet": "",
  "status_velocidade": "",
  "tipo_produtos_plano": "",
  "motivo_inclusao": "",
  "id_indexador_reajuste": "",
  "url_assinatura_digital": "",
  "token_assinatura_digital": "",
  "id_tipo_documento": "502",//Obrigatório
  "id_carteira_cobranca": "1",//Obrigatório
  "id_vendedor": "1",//Obrigatório
  "comissao": "",
  "cc_previsao": "M",//Obrigatório
  "tipo_cobranca": "P",//Obrigatório
  "renovacao_automatica": "S",//Obrigatório
  "gerar_finan_assin_digital_contrato": "",
  "base_geracao_tipo_doc": "P",//Obrigatório
  "id_contrato_principal": "",
  "num_parcelas_atraso": "",
  "nf_info_adicionais": "",
  "credit_card_recorrente_bandeira_cartao": "",
  "credit_card_recorrente_token": "",
  "ids_contratos_recorrencia": "",
  "tipo_doc_opc": "",
  "tipo_doc_opc2": "",
  "tipo_doc_opc3": "",
  "tipo_doc_opc4": "",
  "id_tipo_doc_ativ": "",
  "id_produto_ativ": "",
  "taxa_instalacao": "",
  "id_cond_pag_ativ": "",
  "id_responsavel": "",
  "id_vendedor_ativ": "",
  "ativacao_numero_parcelas": "",
  "ativacao_vencimentos": "",
  "ativacao_valor_parcela": "",
  "fidelidade": "",
  "data_expiracao": "",
  "desconto_fidelidade": "",
  "id_instalador": "",
  "taxa_improdutiva": "",
  "venc_personalizado": "",
  "com_entrada": "",
  "dia_fixo_vencimento": "",
  "tipo_condicao_pag": "",
  "bloqueio_automatico": "S",//Obrigatório
  "nao_bloquear_ate": "",
  "aviso_atraso": "S",//Obrigatório
  "nao_avisar_ate": "",
  "desbloqueio_confianca": "",
  "desbloqueio_confianca_ativo": "",
  "restricao_auto_desbloqueio": "",
  "obs": "",
  "nao_susp_parc_ate": "",
  "liberacao_suspensao_parcial": "",
  "utilizando_auto_libera_susp_parc": "",
  "restricao_auto_libera_susp_parcial": "",
  "motivo_restri_auto_libera_parc": "",
  "contrato_suspenso": "",
  "data_inicial_suspensao": "",
  "data_final_suspensao": "",
  "data_acesso_desativado": "",
  "id_responsavel_cancelamento": "",
  "motivo_cancelamento": "",
  "obs_cancelamento": "",
  "data_negativacao": "",
  "id_responsavel_negativacao": "",
  "protocolo_negativacao": "",
  "id_motivo_negativacao": "",
  "obs_negativacao": "",
  "data_desistencia": "",
  "id_responsavel_desistencia": "",
  "motivo_desistencia": "",
  "obs_desistencia": "",
  "obs_contrato": "",
  "alerta_contrato": "",
  "dt_ult_bloq_auto": "",
  "dt_ult_bloq_manual": "",
  "dt_ult_finan_atraso": "",
  "dt_ult_des_bloq_conf": "",
  "dt_ult_liberacao_susp_parc": "",
  "dt_ult_ativacao": "",
  "dt_utl_negativacao": "",
  "dt_ult_desiste": "",
  "data_cadastro_sistema": "",
  "ultima_atualizacao": "",
  "data_retomada_contrato": "",
  "endereco_padrao_cliente": "S",//Obrigatório
  "id_condominio": "",
  "condominio_novo": "",
  "bloco": "",
  "bloco_novo": "",
  "apartamento": "",
  "apartamento_novo": "",
  "cep": "",
  "cep_novo": "",
  "endereco": "",
  "endereco_novo": "",
  "numero": "",
  "numero_novo": "",
  "bairro": "",
  "bairro_novo": "",
  "cidade": "",
  "cidade_novo": "",
  "complemento": "",
  "complemento_novo": "",
  "referencia": "",
  "referencia_novo": "",
  "latitude": "",
  "latitude_novo": "",
  "longitude": "",
  "longitude_novo": "",
  "avalista_1": "",
  "avalista_2": "",
  "testemunha_assinatura_digital": "",
  "document_photo": "",
  "selfie_photo": ""
}
```

#### `PUT` Contratos (editar)
```
PUT /webservice/v1/cliente_contrato/2299
```

**Body:**
```json
{
  "tipo": "I",
  "id_cliente": "2",
  "id_vd_contrato": "1",
  "descricao_aux_plano_venda": "",
  "contrato": "Plano 2",//Alterando esse campo
  "id_tipo_contrato": "10",
  "id_modelo": "1",
  "assinatura_digital": "",
  "integracao_assinatura_digital": "",
  "liberacao_bloqueio_manual": "",
  "id_filial": "1",
  "indicacao_contrato_id": "",
  "data_assinatura": "",
  "data_ativacao": "",
  "data": "18/06/2024",
  "data_renovacao": "",
  "pago_ate_data": "",
  "status": "",
  "status_internet": "",
  "status_velocidade": "",
  "tipo_produtos_plano": "",
  "motivo_inclusao": "",
  "id_indexador_reajuste": "",
  "url_assinatura_digital": "",
  "token_assinatura_digital": "",
  "id_tipo_documento": "502",
  "id_carteira_cobranca": "1",
  "id_vendedor": "1",
  "comissao": "",
  "cc_previsao": "M",
  "tipo_cobranca": "P",
  "renovacao_automatica": "S",
  "gerar_finan_assin_digital_contrato": "",
  "base_geracao_tipo_doc": "P",
  "id_contrato_principal": "",
  "num_parcelas_atraso": "",
  "nf_info_adicionais": "",
  "credit_card_recorrente_bandeira_cartao": "",
  "credit_card_recorrente_token": "",
  "ids_contratos_recorrencia": "",
  "tipo_doc_opc": "",
  "tipo_doc_opc2": "",
  "tipo_doc_opc3": "",
  "tipo_doc_opc4": "",
  "id_tipo_doc_ativ": "",
  "id_produto_ativ": "",
  "taxa_instalacao": "",
  "id_cond_pag_ativ": "",
  "id_responsavel": "",
  "id_vendedor_ativ": "",
  "ativacao_numero_parcelas": "",
  "ativacao_vencimentos": "",
  "ativacao_valor_parcela": "",
  "fidelidade": "",
  "data_expiracao": "",
  "desconto_fidelidade": "",
  "id_instalador": "",
  "taxa_improdutiva": "",
  "venc_personalizado": "",
  "com_entrada": "",
  "dia_fixo_vencimento": "",
  "tipo_condicao_pag": "",
  "bloqueio_automatico": "S",
  "nao_bloquear_ate": "",
  "aviso_atraso": "S",
  "nao_avisar_ate": "",
  "desbloqueio_confianca": "",
  "desbloqueio_confianca_ativo": "",
  "restricao_auto_desbloqueio": "",
  "obs": "",
  "nao_susp_parc_ate": "",
  "liberacao_suspensao_parcial": "",
  "utilizando_auto_libera_susp_parc": "",
  "restricao_auto_libera_susp_parcial": "",
  "motivo_restri_auto_libera_parc": "",
  "contrato_suspenso": "",
  "data_inicial_suspensao": "",
  "data_final_suspensao": "",
  "data_acesso_desativado": "",
  "id_responsavel_cancelamento": "",
  "motivo_cancelamento": "",
  "obs_cancelamento": "",
  "data_negativacao": "",
  "id_responsavel_negativacao": "",
  "protocolo_negativacao": "",
  "id_motivo_negativacao": "",
  "obs_negativacao": "",
  "data_desistencia": "",
  "id_responsavel_desistencia": "",
  "motivo_desistencia": "",
  "obs_desistencia": "",
  "obs_contrato": "",
  "alerta_contrato": "",
  "dt_ult_bloq_auto": "",
  "dt_ult_bloq_manual": "",
  "dt_ult_finan_atraso": "",
  "dt_ult_des_bloq_conf": "",
  "dt_ult_liberacao_susp_parc": "",
  "dt_ult_ativacao": "",
  "dt_utl_negativacao": "",
  "dt_ult_desiste": "",
  "data_cadastro_sistema": "",
  "ultima_atualizacao": "",
  "data_retomada_contrato": "",
  "endereco_padrao_cliente": "S",
  "id_condominio": "",
  "condominio_novo": "",
  "bloco": "",
  "bloco_novo": "",
  "apartamento": "",
  "apartamento_novo": "",
  "cep": "",
  "cep_novo": "",
  "endereco": "",
  "endereco_novo": "",
  "numero": "",
  "numero_novo": "",
  "bairro": "",
  "bairro_novo": "",
  "cidade": "",
  "cidade_novo": "",
  "complemento": "",
  "complemento_novo": "",
  "referencia": "",
  "referencia_novo": "",
  "latitude": "",
  "latitude_novo": "",
  "longitude": "",
  "longitude_novo": "",
  "avalista_1": "",
  "avalista_2": "",
  "testemunha_assinatura_digital": "",
  "document_photo": "",
  "selfie_photo": ""
}
```

#### `DELETE` Contratos (deletar)
```
DELETE /webservice/v1/cliente_contrato/2299
```

#### `POST` Ativar contrato
```
POST /webservice/v1/cliente_contrato_ativar_cliente
```

**Body:**
```json
{
"id_contrato":"12"
}
```

#### `POST` Cancelar contrato e financeiro não vencido
```
POST /webservice/v1/desativar_cancelar_financeiro_nao_vencido
```

**Body:**
```json
{
  "id_contrato": "",
  "data_cancelamento": "",
  "motivo_cancelamento": "",
  "obs_cancelamento": ""
}
```

#### `POST` Negativar o Contrato
```
POST /webservice/v1/negativar_bloquear
```

**Body:**
```json
{
    "id": "2294",//Contrato
    "id_cliente": "3"//Cliente
}
```

#### `POST` Aguardando Assinatura (AA)
```
POST /webservice/v1/cliente_contrato_23529
```

**Body:**
```json
{
"id_contrato" : "10"
}
```

#### `POST` Liberar Manualmente (A)
```
POST /webservice/v1/cliente_contrato_15464
```

**Body:**
```json
{
"id_contrato" : "10"
}
```

#### `POST` Desbloqueio confiança
```
POST /webservice/v1/desbloqueio_confianca
```

**Body:**
```json
{
"id" : "1"
}
```

#### `POST` Financeiro em atraso (FA)
```
POST /webservice/v1/cliente_contrato_15463
```

**Body:**
```json
{
"id_contrato" : "10"
}
```

#### `POST` Bloqueio Manual (CM)
```
POST /webservice/v1/cliente_contrato_15300
```

**Body:**
```json
{
"id_contrato" : "10"
}
```

#### `POST` Liberar temporariamente
```
POST /webservice/v1/cliente_contrato_btn_lib_temp_24722
```

**Body:**
```json
{
"get_id" : ""
}
```

#### `POST` Liberar da redução de velocidade
```
POST /webservice/v1/liberacao_reducao_contrato_29157
```

**Body:**
```json
{
"get_id" : ""
}
```

#### `POST` Gerar Financeiro
```
POST /webservice/v1/gerar_financeiro_contrato_15314
```

**Body:**
```json
{
    "id_contrato" : "",
    "tipo" : "",
    "id_cliente" : "",
    "id_tipo_documento":""
}
```

#### `POST` Imprimir Contrato
```
POST /webservice/v1/cliente_contrato_imprimir_contrato_17678
```

**Body:**
```json
{
    "id" : ""//ID do Contrato
}
```

#### `POST` Imprimir termo
```
POST /webservice/v1/botao_rel_28088
```

**Body:**
```json
{
    "id" : ""//ID do Termo
}
```

#### `POST` Comodato > Baixar > Outros Almoxarifados
```
POST /webservice/v1/baixar_comodato_23069
```

**Body:**
```json
{
  "id": "",//ID do Comodato
  "id_almox": "",//ID do Almoxarifado
  "id_almox_label": "",//Nome do Almoxarifado
  "id_filial_baixa": "",//ID da Filial
  "id_filial_baixa_label": ""//Nome da Filial
}
```

#### `POST` Gerar documento de assinatura digital
```
POST /webservice/v1/gerar_documento_assinatura_digital
```

**Body:**
```json
{
    "id_contrato":"20" // ID do contrato
}
```

#### `POST` Reenviar link de assinatura digital
```
POST /webservice/v1/reenviar_link_assnatura_digital
```

**Body:**
```json
{
    "id_contrato":"20" // ID do contrato
}
```

#### `GET` Produtos do contrato (listar)
```
GET /webservice/v1/vd_contratos_produtos
```

**Body:**
```json
{
"qtype": "vd_contratos_produtos.id_contrato",
"query": "2298",
"oper": "=",
"page": "1",
"rp": "1000",
"sortname": "vd_contratos_produtos.id",
"sortorder": "desc"
}
```

#### `POST` Produtos do contrato (inserir)
```
POST /webservice/v1/vd_contratos_produtos
```

**Body:**
```json
{
  "tipo": "I",//Obrigatório
  "id_plano": "1",//Obrigatório
  "id_produto": "",
  "descricao": "",
  "qtde": "1",//Obrigatório
  "valor_unit": "103.00",//Obrigatório
  "id_vd_contrato": "",
  "id_contrato": "2296",//Obrigatório
  "obs": "",
  "valor_ate_vencimento": "",
  "id_tipo_documento": "",
  "id_contrato_produto_plano": "",
  "descricao_plano_valor_1": "",
  "descricao_plano_valor_2": "",
  "fixar_ip": "0",//Obrigatório
  "tipo_desconto": "",
  "desconto_percentual": "",
  "repetir": "",
  "qtde_repeticoes_desconto_produto": "",
  "valor_desconto_produto": "",
  "ultima_atualizacao": ""
}
```

#### `PUT` Produtos do contrato (editar)
```
PUT /webservice/v1/vd_contratos_produtos/223
```

**Body:**
```json
{
  "tipo": "I",
  "id_plano": "1",
  "id_produto": "",
  "descricao": "Teste",//Alterando esse campo
  "qtde": "1",
  "valor_unit": "103.00",
  "id_vd_contrato": "",
  "id_contrato": "2296",
  "obs": "",
  "valor_ate_vencimento": "",
  "id_tipo_documento": "",
  "id_contrato_produto_plano": "",
  "descricao_plano_valor_1": "",
  "descricao_plano_valor_2": "",
  "fixar_ip": "0",
  "tipo_desconto": "",
  "desconto_percentual": "",
  "repetir": "",
  "qtde_repeticoes_desconto_produto": "",
  "valor_desconto_produto": "",
  "ultima_atualizacao": ""
}
```

#### `DELETE` Produtos do contrato (deletar)
```
DELETE /webservice/v1/vd_contratos_produtos/223
```

#### `GET` Descontos (listar)
```
GET /webservice/v1/cliente_contrato_descontos
```

**Body:**
```json
{
    "qtype": "cliente_contrato_descontos.id_contrato",
    "query": "2306",
    "oper": "=",
    "page": "1",
    "rp": "20",
    "sortname": "cliente_contrato_descontos.id",
    "sortorder": "desc"
}
```

#### `POST` Descontos (inserir)
```
POST /webservice/v1/cliente_contrato_descontos
```

**Body:**
```json
{
    "id_contrato": "2306", //ID do Contrato
    "id_vd_contrato_produtos": "7", //ID do Produto dentro do Contrato
    "descricao": "Desconto Teste", //Descrição
    "valor": "1.12", //Valor
    "data_validade": "", //Data de validade do desconto
    "percentual": "1.5857142857142859" //Percentual
}
```

#### `PUT` Descontos (editar)
```
PUT /webservice/v1/cliente_contrato_descontos/10
```

**Body:**
```json
{
    "id_contrato": "2306", //ID do Contrato
    "id_vd_contrato_produtos": "7", //ID do Produto dentro do Contrato
    "descricao": "Desconto Teste", //Descrição
    "valor": "1.12", //Valor
    "data_validade": "", //Data de validade do desconto
    "percentual": "1.5857142857142859" //Percentual
}
```

#### `DELETE` Descontos (deletar)
```
DELETE /webservice/v1/cliente_contrato_descontos/10
```

#### `GET` Acréscimos (listar)
```
GET /webservice/v1/cliente_contrato_acrescimos
```

**Body:**
```json
{
    "qtype": "cliente_contrato_descontos.id_contrato",
    "query": "2306",
    "oper": "=",
    "page": "1",
    "rp": "20",
    "sortname": "cliente_contrato_descontos.id",
    "sortorder": "desc"
}
```

#### `POST` Acréscimos (inserir)
```
POST /webservice/v1/cliente_contrato_acrescimos
```

**Body:**
```json
{
    "id_contrato": "2306", //ID do Contrato
    "id_vd_contrato_produtos": "7", //ID do Produto dentro do Contrato
    "descricao": "Acresc. Teste", //Descrição
    "valor": "1.12", //Valor
    "data_validade": "", //Data de validade do desconto
    "percentual": "1.5857142857142859" //Percentual
}
```

#### `PUT` Acréscimos (editar)
```
PUT /webservice/v1/cliente_contrato_acrescimos/289
```

**Body:**
```json
{
    "id_contrato": "2306", //ID do Contrato
    "id_vd_contrato_produtos": "7", //ID do Produto dentro do Contrato
    "descricao": "Acresc. Teste", //Descrição
    "valor": "1.12", //Valor
    "data_validade": "", //Data de validade do desconto
    "percentual": "1.5857142857142859" //Percentual
}
```

#### `DELETE` Acréscimos (deletar)
```
DELETE /webservice/v1/cliente_contrato_acrescimos/289
```

#### `GET` Serviços Adicionais (listar)
```
GET /webservice/v1/cliente_contrato_servicos
```

**Body:**
```json
{
"qtype": "cliente_contrato_servicos.tipo_acres_desc",
"query": "A",
"oper": "=",
"page": "1",
"rp": "1000",
"sortname": "cliente_contrato_servicos.id",
"sortorder": "desc"
}
```

#### `POST` Serviços Adicionais (inserir)
```
POST /webservice/v1/cliente_contrato_servicos
```

**Body:**
```json
{
  "tipo": "I",//Obrigatório
  "id_login_tv": "",
  "id_produto": "1",//Obrigatório
  "descricao": "Produto adicional",//Obrigatório
  "id_unidade": "13",//Obrigatório
  "quantidade": "1",//Obrigatório
  "valor_unitario": "10.00",//Obrigatório
  "valor_total": "10.00",//Obrigatório
  "valor_total2": "",
  "repetir": "S",//Obrigatório
  "repetir_qtde": "",
  "data": "18/06/2024",//Obrigatório
  "status": "A",//Obrigatório
  "execucoes": "",
  "ultima_execucao": "",
  "status_nf21": "A",//Obrigatório
  "execucoes_nf21": "",
  "ultima_execucao_nf21": "",
  "id_contrato": "2296",//Obrigatório
  "pdesconto": "",
  "vdesconto": "",
  "id_sip": "",
  "id_oss_chamado": "",
  "id_oss_mensagem": "",
  "id_contrato_aluguel": "",
  "id_im_lanc_mensal": "",
  "id_im_imovel": "",
  "id_vd_contrato_produtos": "",
  "id_areceber": "",
  "tipo_acres_desc": "A",//Obrigatório ser A, para Serviçõs Adicionais
  "tipo_produto": "",
  "incluido_por_prorata": "",
  "id_tipo_documento": "",
  "id_lote_rotina": ""
}
```

#### `PUT` Serviços Adicionais (editar)
```
PUT /webservice/v1/cliente_contrato_servicos/2296
```

**Body:**
```json
{
  "tipo": "I",
  "id_login_tv": "",
  "id_produto": "1",
  "descricao": "Produto 2",//Alterando esse campo
  "id_unidade": "13",
  "quantidade": "1",
  "valor_unitario": "10.00",
  "valor_total": "10.00",
  "valor_total2": "",
  "repetir": "S",
  "repetir_qtde": "",
  "data": "18/06/2024",
  "status": "A",
  "execucoes": "",
  "ultima_execucao": "",
  "status_nf21": "A",
  "execucoes_nf21": "",
  "ultima_execucao_nf21": "",
  "id_contrato": "2296",
  "pdesconto": "",
  "vdesconto": "",
  "id_sip": "",
  "id_oss_chamado": "",
  "id_oss_mensagem": "",
  "id_contrato_aluguel": "",
  "id_im_lanc_mensal": "",
  "id_im_imovel": "",
  "id_vd_contrato_produtos": "",
  "id_areceber": "",
  "tipo_acres_desc": "A",
  "tipo_produto": "",
  "incluido_por_prorata": "",
  "id_tipo_documento": "",
  "id_lote_rotina": ""
}
```

#### `DELETE` Serviços Adicionais (deletar)
```
DELETE /webservice/v1/cliente_contrato_servicos/17
```

#### `GET` Descontos Adicionais (listar)
```
GET /webservice/v1/cliente_contrato_servicos
```

**Body:**
```json
{
"qtype": "cliente_contrato_servicos.tipo_acres_desc",
"query": "D",
"oper": "=",
"page": "1",
"rp": "1000",
"sortname": "cliente_contrato_servicos.id",
"sortorder": "desc"
}
```

#### `POST` Descontos Adicionais (inserir)
```
POST /webservice/v1/cliente_contrato_servicos
```

**Body:**
```json
{
  "tipo": "",
  "id_login_tv": "",
  "id_produto": "1",//Obrigatório
  "descricao": "Produto Desconto",//Obrigatório
  "id_produto_contrato_vinc":"151",//Obrigatório
  "id_unidade": "13",//Obrigatório
  "quantidade": "1",//Obrigatório
  "valor_unitario": "10.00",//Obrigatório
  "valor_total": "10.00",//Obrigatório
  "valor_total2": "",
  "repetir": "S",//Obrigatório
  "repetir_qtde": "",
  "data": "18/06/2024",//Obrigatório
  "status": "A",//Obrigatório
  "execucoes": "",
  "ultima_execucao": "",
  "status_nf21": "A",//Obrigatório
  "execucoes_nf21": "",
  "ultima_execucao_nf21": "",
  "id_contrato": "2296",//Obrigatório
  "pdesconto": "",
  "vdesconto": "",
  "id_sip": "",
  "id_oss_chamado": "",
  "id_oss_mensagem": "",
  "id_contrato_aluguel": "",
  "id_im_lanc_mensal": "",
  "id_im_imovel": "",
  "id_vd_contrato_produtos": "",
  "id_areceber": "",
  "tipo_acres_desc": "D",//Obrigatório o valor ser D
  "tipo_produto": "",
  "incluido_por_prorata": "",
  "id_tipo_documento": "",
  "id_lote_rotina": ""
}
```

#### `PUT` Descontos Adicionais (editar)
```
PUT /webservice/v1/cliente_contrato_servicos/18
```

**Body:**
```json
{
  "tipo": "",
  "id_login_tv": "",
  "id_produto": "1",
  "descricao": "Desconto 2",//Alterando esse campo
  "id_produto_contrato_vinc":"151",
  "id_unidade": "13",
  "quantidade": "1",
  "valor_unitario": "10.00",
  "valor_total": "10.00",
  "valor_total2": "",
  "repetir": "S",
  "repetir_qtde": "",
  "data": "18/06/2024",
  "status": "A",
  "execucoes": "",
  "ultima_execucao": "",
  "status_nf21": "A",
  "execucoes_nf21": "",
  "ultima_execucao_nf21": "",
  "id_contrato": "2296",
  "pdesconto": "",
  "vdesconto": "",
  "id_sip": "",
  "id_oss_chamado": "",
  "id_oss_mensagem": "",
  "id_contrato_aluguel": "",
  "id_im_lanc_mensal": "",
  "id_im_imovel": "",
  "id_vd_contrato_produtos": "",
  "id_areceber": "",
  "tipo_acres_desc": "D",
  "tipo_produto": "",
  "incluido_por_prorata": "",
  "id_tipo_documento": "",
  "id_lote_rotina": ""
}
```

#### `DELETE` Descontos Adicionais (deletar)
```
DELETE /webservice/v1/cliente_contrato_servicos/18
```

#### `GET` Financeiro do cliente
```
GET /webservice/v1/fn_areceber
```

**Body:**
```json
{
  "qtype": "fn_areceber.id_contrato",
  "query": "2",//ID do Contrato
  "oper": "=",
  "rp": "200000",
  "sortname": "fn_areceber.data_vencimento",
  "sortorder": "asc",
  "grid_param": "[{\"TB\":\"fn_areceber.liberado\", \"OP\" : \"=\", \"P\" : \"S\"}, {\"TB\":\"fn_areceber.status\", \"OP\" : \"!=\", \"P\" : \"C\"},{\"TB\":\"fn_areceber.status\", \"OP\" : \"!=\", \"P\" : \"R\"}]"
}
```

**Response — Retorno:**
```json
{
    "page": "1",
    "total": "1",
    "registros": [
        {
            "id_remessa": "0",
            "gateway_link": "",
            "nn_boleto": "",
            "boleto": "",
            "data_inicial": "2024-11-08",
            "data_final": "2024-11-19",
            "estornado": "N",
            "id": "145535",
            "liberado": "S",
            "filial_id": "1",
            "status": "A",
            "data_emissao": "2024-11-08",
            "data_vencimento": "2024-11-21",
            "valor": "26.00",
            "obs": "de 08/11/2024 até 19/11/2024",
            "valor_recebido": "0.00",
            "valor_aberto": "26.00",
            "id_cliente": "2",
            "pagamento_valor": "",
            "pagamento_data": "",
            "id_carteira_cobranca": "5",
            "credito_data": "",
            "baixa_data": "",
            "numero_parcela_recorrente": "",
            "documento": "72006",
            "id_saida": "72006",
            "tipo_recebimento": "Gateway",
            "tipo_renegociacao": "",
            "valor_cancelado": "0.00",
            "data_cancelamento": "",
            "id_mot_cancelamento": "",
            "id_renegociacao": "",
            "id_cobranca": "",
            "previsao": "S",
            "id_renegociacao_novo": "",
            "libera_periodo": "N",
            "impresso": "N",
            "forma_recebimento": "",
            "arquivo_remessa_baixado": "",
            "nparcela": "1",
            "id_nota_gerada_opc4": "",
            "status_cobranca": "",
            "tipo_cobranca": "I",
            "id_contrato_principal": "0",
            "id_contrato_avulso": "2309",
            "id_contrato": "",
            "id_nota_gerada": "0",
            "id_im_imovel": "",
            "parcela_proporcional": "S",
            "linha_digitavel": "",
            "duplicata": "",
            "tipo_pagamento_cartao": "",
            "id_sip": "",
            "titulo_protestado": "N",
            "desconto_condicional_valor": "",
            "gerencianet_token": "",
            "validade_desconto_condicional": "",
            "id_conta": "2758",
            "motivo_alteracao": "",
            "id_remessa_alteracao": "",
            "cancelamento_id_operador": "",
            "baixa_id_operador": "",
            "titulo_importado": "N",
            "origem_importacao": "",
            "ultima_atualizacao": "2024-11-08 13:53:41",
            "aguardando_confirmacao_pagamento": "N",
            "parcelado_cartao": "N",
            "pix_txid": "",
            "id_nota_gerada_opc2": "",
            "id_nota_gerada_opc3": "",
            "recebido_via_pix": "N",
            "id_lote_geracao_financeiro_fatura": ""
        }
    ]
}
```

#### `POST` Receber Boleto (baixa manual)
```
POST /webservice/v1/fn_areceber_recebimentos_baixas_novo
```

**Body:**
```json
{
    "filial_id": "",
    "id_receber": "",
    "conta_": "",
    "id_conta": "",
    "tipo_recebimento": "",
    "data": "",
    "documento":"",
    "pdesconto":"",
    "vdesconto":"",
    "id_motivo_desconto":"",
    "pacrescimo":"",
    "vacrescimo": "",
    "valor_parcela": "",
    "credito": "",
    "debito": "",
    "valor_total_recebido": "",
    "historico": "",
    "tipo_r":"", 
    "previsao": "",
    "tipo_lanc": ""
}
```

#### `PUT` Alterar Boleto
```
PUT /webservice/v1/fn_areceber_altera/id_do_boleto
```

**Body:**
```json
{
  "documento": "",
  "data_emissao": "",
  "data_vencimento": "",
  "id_carteira_cobranca": "",
  "obs": "",
  "tipo_recebimento": "",
  "status": "",
  "aguardando_confirmacao_pagamento": "",
  "nn_boleto": "",
  "pix_txid": "",
  "libera_periodo": "",
  "liberado": "S",//Obrigatório ser S, se não, a fatura fica oculta;
  "titulo_protestado": "",
  "id_remessa_alteracao": "",
  "motivo_alteracao": ""
}
```

#### `POST` Segunda via/Download do Boleto
```
POST /webservice/v1/get_boleto
```

**Body:**
```json
{
    "boletos": "",
    "juro": "",
    "multa": "",
    "atualiza_boleto": "",
    "tipo_boleto": "arquivo",
    "base64" : "S",
    "layout_impressao":""
}
```

#### `POST` Enviar boleto por e-mail
```
POST /webservice/v1/get_boleto
```

**Body:**
```json
{
    "boletos": "",
    "juro": "",
    "multa": "",
    "atualiza_boleto": "",
    "tipo_boleto": "mail"
}
```

#### `POST` Enviar boleto por sms
```
POST /webservice/v1/get_boleto
```

**Body:**
```json
{
    "boletos": "",
    "juro": "",
    "multa": "",
    "atualiza_boleto": "",
    "tipo_boleto": "sms"
}
```

#### `POST` Get Pix
```
POST /webservice/v1/get_pix
```

**Body:**
```json
{
    "id_areceber":""
}
```

#### `GET` Histórico (listar)
```
GET /webservice/v1/cliente_contrato_historico
```

**Body:**
```json
{
"qtype": "cliente_contrato_historico.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "cliente_contrato_historico.id",
"sortorder": "desc"
}
```

#### `POST` Histórico (inserir)
```
POST /webservice/v1/cliente_contrato_historico
```

**Body:**
```json
{
"tipo":"Atualiza assinatura",//Obrigatório
"data":"18/06/2024",//Obrigatório
"historico":"Assinatura atualizada",//Obrigatório
"id_cliente":"2241",//Obrigatório
"id_contrato":""
}
```

#### `PUT` Histórico (editar)
```
PUT /webservice/v1/cliente_contrato_historico/72947
```

**Body:**
```json
{
"tipo":"Atualiza assinatura",
"data":"18/06/2024",
"historico":"Assinatura",//Alterando esse campo
"id_cliente":"2241",
"id_contrato":""
}
```

#### `DELETE` Histórico (deletar)
```
DELETE /webservice/v1/cliente_contrato_historico/72947
```

#### `GET` Comodato - Produto (listar)
```
GET /webservice/v1/cliente_contrato_comodato
```

**Body:**
```json
{
"qtype": "movimento_produtos.id_produto",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "movimento_produtos.id",
"sortorder": "desc",
"grid_param":"[{\"TB\":\"movimento_produtos.status_comodato\", \"OP\" : \"=\", \"P\" : \"E\"}]"
}
```

#### `GET` Comodato - Patrimônio (listar)
```
GET /webservice/v1/cliente_contrato_comodato
```

**Body:**
```json
{
"qtype": "movimento_produtos.id_patrimonio",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "movimento_produtos.id",
"sortorder": "desc",
"grid_param":"[{\"TB\":\"movimento_produtos.status_comodato\", \"OP\" : \"=\", \"P\" : \"E\"}]"
}
```

#### `POST` Comodato - Produto (inserir)
```
POST /webservice/v1/cliente_contrato_comodato
```

**Body:**
```json
{
  "id_patrimonio": "",
  "id_produto": "36",//Obrigatório
  "mac": "",
  "numero_serie": "",
  "numero_patrimonial": "",
  "descricao": "",
  "data": "19/06/2024",//Obrigatório
  "id_unidade": "2",//Obrigatório
  "id_almox": "1",//Obrigatório
  "filial_id": "1",//Obrigatório
  "id_login": "",
  "qtde_saida": "1",//Obrigatório
  "valor_unitario": "0.10",//Obrigatório
  "pcomissao": "",
  "pdesconto": "",
  "vdesconto": "",
  "valor_total": "0.10",//Obrigatório
  "status_comodato": "E",//Obrigatório
  "id_devolucao": "",
  "quantidade": "",
  "patrimonio": "",
  "id_classificacao_tributaria": "1",//Obrigatório
  "tipo": "S",//Obrigatório
  "estoque": "S",//Obrigatório
  "unidade_sigla": "MC",//Obrigatório
  "fator_conversao": "1.000000000",//Obrigatório
  "id_contrato": "2294",//Obrigatório
  "id_equipamento_tv": "",
  "tipo_produto": ""
}
```

#### `POST` Comodato - Patrimônio (inserir)
```
POST /webservice/v1/cliente_contrato_comodato
```

**Body:**
```json
{
  "id_patrimonio": "9",//Obrigatório
  "id_produto": "34",//Obrigatório
  "mac": "",
  "numero_serie": "",
  "numero_patrimonial": "SAFB0",//Obrigatório
  "descricao": "",
  "data": "19/06/2024",//Obrigatório
  "id_unidade": "1",//Obrigatório
  "id_almox": "1",//Obrigatório
  "filial_id": "1",//Obrigatório
  "id_login": "",
  "qtde_saida": "1",//Obrigatório
  "valor_unitario": "0.10",//Obrigatório
  "pcomissao": "",
  "pdesconto": "",
  "vdesconto": "",
  "valor_total": "0.10",//Obrigatório
  "status_comodato": "E",//Obrigatório
  "id_devolucao": "",
  "quantidade": "",
  "patrimonio": "",
  "id_classificacao_tributaria": "1",//Obrigatório
  "tipo": "E",//Obrigatório
  "estoque": "S",//Obrigatório
  "unidade_sigla": "UND",//Obrigatório
  "fator_conversao": "1.000000000",//Obrigatório
  "id_contrato": "2294",//Obrigatório
  "id_equipamento_tv": "",
  "tipo_produto": ""
}
```

#### `PUT` Comodato - Produto (editar)
```
PUT /webservice/v1/cliente_contrato_comodato/62578
```

**Body:**
```json
{
  "id_patrimonio": "",
  "id_produto": "36",
  "mac": "",
  "numero_serie": "",
  "numero_patrimonial": "",
  "descricao": "Produto com descrição",//Alterando esse campo
  "data": "19/06/2024",
  "id_unidade": "2",
  "id_almox": "1",
  "filial_id": "1",
  "id_login": "",
  "qtde_saida": "1",
  "valor_unitario": "0.10",
  "pcomissao": "",
  "pdesconto": "",
  "vdesconto": "",
  "valor_total": "0.10",
  "status_comodato": "E",
  "id_devolucao": "",
  "quantidade": "",
  "patrimonio": "",
  "id_classificacao_tributaria": "1",
  "tipo": "S",
  "estoque": "S",
  "unidade_sigla": "MC",
  "fator_conversao": "1.000000000",
  "id_contrato": "2294",
  "id_equipamento_tv": "",
  "tipo_produto": ""
}
```

#### `POST` Comodato - Produto (baixar)
```
POST /webservice/v1/baixar_comodato_23069
```

**Body:**
```json
{
  "id": "58992",
  "id_almox": "1",
  "id_almox_label": "Almoxarifado Principal",
  "id_filial_baixa": "1",
  "id_filial_baixa_label": "F1"
}
```

#### `POST` Comodato - Patrimônio (baixar)
```
POST /webservice/v1/baixar_comodato_23069
```

**Body:**
```json
{
  "id": "59195",
  "id_almox": "1",
  "id_almox_label": "Almoxarifado Principal",
  "id_filial_baixa": "1",
  "id_filial_baixa_label": "F1"
}
```

#### `GET` Termos (listar)
```
GET /webservice/v1/cliente_contrato_assinatura_termo
```

**Body:**
```json
{
"qtype": "cliente_contrato_assinatura_termo.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "20",
"sortname": "cliente_contrato_assinatura_termo.id",
"sortorder": "desc"
}
```

#### `POST` Termos (inserir)
```
POST /webservice/v1/cliente_contrato_assinatura_termo
```

**Body:**
```json
{
    "id_termo":"3",//Obrigatório
    "assinado":"N",//Obrigatório
    "id_cliente_contrato_modelo":"1",//Obrigatório
    "id_contrato":"2298",//Obrigatório
    "token_assinatura_digital":"",//Obrigatório, apenas se for a integração IXC Assina
    "url_assinatura_digital":""//Obrigatório, apenas se for a integração IXC Assina
}
```

#### `PUT` Termo (editar)
```
PUT /webservice/v1/cliente_contrato_assinatura_termo/2298
```

**Body:**
```json
{
    "id_termo":"3",
    "assinado":"S",//alterando esse campo
    "id_cliente_contrato_modelo":"1",
    "id_contrato":"2298",
    "token_assinatura_digital":"",
    "url_assinatura_digital":""
}
```

#### `DELETE` Termo (deletar)
```
DELETE /webservice/v1/cliente_contrato_assinatura_termo/4
```

#### `GET` Arquivos do Contrato (listar)
```
GET /webservice/v1/cliente_arquivos
```

**Body:**
```json
{
"qtype": "cliente_arquivos.id_contrato",
"query": "2252",
"oper": "=",
"page": "1",
"rp": "1000",
"sortname": "cliente_arquivos.id",
"sortorder": "desc"
}
```

#### `POST` Arquivos do Contrato (inserir)
```
POST /webservice/v1/cliente_arquivos
```

**Body:**
```json
  descricao = Teste  // Nome do Arquivo
  local_arquivo =   // Diretório do arquivo
  id_cliente = 2252  // ID do Cliente
  id_contrato = 2232  // ID do Contrato
```

#### `DELETE` Arquivos do Contrato (deletar)
```
DELETE /webservice/v1/cliente_arquivos/1851
```

#### `GET` Ramal SIP (listar)
```
GET /webservice/v1/voip_sippeers
```

**Body:**
```json
{
"qtype": "voip_sippeers.id_contrato",
"query": "2252",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "voip_sippeers.id",
"sortorder": "desc"
}
```

### Produtos

#### `GET` Produtos (listar)
```
GET /webservice/v1/produtos
```

**Body:**
```json
{
  "qtype" : "produtos.id",
  "query" : "1",
  "oper" : ">=",
  "page" : "1",
  "rp" : "2000",
  "sortname" : "produtos.id",
  "sortorder" : "desc"
}
```

#### `POST` Produtos (inserir)
```
POST /webservice/v1/produtos
```

**Body:**
```json
{
  "ativo": "S",//Obrigatório
  "subgrupo_tipo": "",
  "id_sub_grupo": "3",//Obrigatório
  "descricao": "Produto 01",//Obrigatório
  "descricao_alt": "",
  "codigo_barras": "",
  "codigo_tecido": "",
  "qtde_min": "",
  "qtde_max": "",
  "tipo": "C",//Obrigatório
  "controla_estoque": "S",//Obrigatório
  "movimentacao": "A",//Obrigatório
  "unidade": "1",//Obrigatório
  "vencimento_garantia": "",
  "id_categoria_patrimonio": "",
  "preco_base": "0.01",//Obrigatório
  "margem_lucro": "",
  "aceita_valor": "P",//Obrigatório o valor ser P
  "pcomissao": "",
  "codigo": "",
  "ultima_atualizacao": "",
  "id_tipo_documento_servico": "",
  "id_fr_faturamento_classificacoes": "",
  "icms_issqn": "ICMS",//Obrigatório
  "id_class_fiscal": "1",//Obrigatório
  "id_class_fiscal_entrada": "",
  "ncm": "0101",//Obrigatório
  "id_produtos_ncm_cest": "",
  "cod_servico": "",
  "cod_classificacao_servico": "",
  "id_conta_estoque": "",
  "id_conta_despesa": "",
  "id_conta_receita": "",
  "id_conta_comodato": "",
  "id_classe_financeira": "",
  "vICMSSTRet": "",
  "iss_natureza_operacao": "",
  "controle_impressao_etiqueta": "",
  "ecommerce": "",
  "ecommerce_pg_inicial": "",
  "mostra_valor_ecommerce": "P",//Obrigatório
  "tipo_ecommerce": "P",//Obrigatório
  "ecommerce_prioridade": "1",//Obrigatório o valor ser 1
  "valor_prefixo": "",
  "valor_sufixo": "",
  "descricao_completa": "",
  "imagem": "",
  "saldo": "",
  "valor": "",
  "valor_custo": "",
  "custo_medio": "",
  "custo_medio_total": "",
  "pesob": "",
  "pesol": "",
  "altura": "",
  "largura": "",
  "profundidade": "",
  "plataforma": "",
  "tv_id_plataforma": "",
  "tv_LineUp": "",
  "tv_data_inicial": "",
  "tv_data_final": "",
  "id_integracao_tv": "",
  "tv_id_pacote_servicos": "",
  "tv_id_pacote_servicos_watch": "",
  "descricao_pacote_watch": "",
  "total_tickets_watch": "",
  "tv_id_pacotes": "",
  "tv_id_pacote_temporario": "",
  "tv_dias_expiracao_pacote_temporario": "",
  "search": "",
  "produto_playhub": "",
  "tariff_plan": "",
  "tv_id_pacotes_adicionais": "",
  "id_sva_integracao": "",
  "id_sva_pacote": "",
  "id_sva_pacote_adicional": "",
  "tipo_produto_integracao": "",
  "id_assinatura_integracao": "",
  "plataforma_integracao": ""
}
```

#### `PUT` Produtos (editar)
```
PUT /webservice/v1/produtos/36
```

**Body:**
```json
{
  "ativo": "S",
  "subgrupo_tipo": "",
  "id_sub_grupo": "3",
  "descricao": "Produto 02",//Alterando esse campo
  "descricao_alt": "",
  "codigo_barras": "",
  "codigo_tecido": "",
  "qtde_min": "",
  "qtde_max": "",
  "tipo": "C",
  "controla_estoque": "S",
  "movimentacao": "A",
  "unidade": "1",
  "vencimento_garantia": "",
  "id_categoria_patrimonio": "",
  "preco_base": "0.01",
  "margem_lucro": "",
  "aceita_valor": "P",
  "pcomissao": "",
  "codigo": "",
  "ultima_atualizacao": "",
  "id_tipo_documento_servico": "",
  "id_fr_faturamento_classificacoes": "",
  "icms_issqn": "ICMS",
  "id_class_fiscal": "1",
  "id_class_fiscal_entrada": "",
  "ncm": "0101",
  "id_produtos_ncm_cest": "",
  "cod_servico": "",
  "cod_classificacao_servico": "",
  "id_conta_estoque": "",
  "id_conta_despesa": "",
  "id_conta_receita": "",
  "id_conta_comodato": "",
  "id_classe_financeira": "",
  "vICMSSTRet": "",
  "iss_natureza_operacao": "",
  "controle_impressao_etiqueta": "",
  "ecommerce": "",
  "ecommerce_pg_inicial": "",
  "mostra_valor_ecommerce": "P",
  "tipo_ecommerce": "P",
  "ecommerce_prioridade": "1",
  "valor_prefixo": "",
  "valor_sufixo": "",
  "descricao_completa": "",
  "imagem": "",
  "saldo": "",
  "valor": "",
  "valor_custo": "",
  "custo_medio": "",
  "custo_medio_total": "",
  "pesob": "",
  "pesol": "",
  "altura": "",
  "largura": "",
  "profundidade": "",
  "plataforma": "",
  "tv_id_plataforma": "",
  "tv_LineUp": "",
  "tv_data_inicial": "",
  "tv_data_final": "",
  "id_integracao_tv": "",
  "tv_id_pacote_servicos": "",
  "tv_id_pacote_servicos_watch": "",
  "descricao_pacote_watch": "",
  "total_tickets_watch": "",
  "tv_id_pacotes": "",
  "tv_id_pacote_temporario": "",
  "tv_dias_expiracao_pacote_temporario": "",
  "search": "",
  "produto_playhub": "",
  "tariff_plan": "",
  "tv_id_pacotes_adicionais": "",
  "id_sva_integracao": "",
  "id_sva_pacote": "",
  "id_sva_pacote_adicional": "",
  "tipo_produto_integracao": "",
  "id_assinatura_integracao": "",
  "plataforma_integracao": ""
}
```

#### `DELETE` Produtos (deletar)
```
DELETE /webservice/v1/produtos/36
```

#### `GET` Estoque (listar)
```
GET /webservice/v1/estoque_produtos_almox_filial
```

**Body:**
```json
{
    "qtype": "estoque_produtos_almox_filial.id",
    "query": "1",
    "oper": ">=",
    "page": "1",
    "rp": "1000",
    "sortname": "estoque_produtos_almox_filial.id",
    "sortorder": "desc"
}
```

#### `GET` Estoque Max/Min (listar)
```
GET /webservice/v1/estoque_min_max_almox
```

**Body:**
```json
{
    "qtype": "estoque_min_max.id",
    "query": "1",
    "oper": ">=",
    "page": "1",
    "rp": "1000",
    "sortname": "estoque_min_max.id",
    "sortorder": "desc"
}
```

#### `POST` Estoque Max/Min (inserir)
```
POST /webservice/v1/estoque_min_max_almox
```

**Body:**
```json
{
            "id_produto": "50",//ID produto
            "status": "0",//Oculto
            "qtd_min": "1.00",//Mínimo
            "qtd_max": "5.00",//Máximo
            "id_almox": "1",//ID almoxarifado
            "requisitar_mutiplo_de": "0.00"//Quantidade Fixa
        }
```

#### `PUT` Estoque Max/Min (editar)
```
PUT /webservice/v1/estoque_min_max_almox/2
```

**Body:**
```json
{
            "id_produto": "50",
            "status": "0",
            "qtd_min": "1.00",
            "qtd_max": "6.00",
            "id_almox": "1",
            "requisitar_mutiplo_de": "0.00"
        }
```

#### `DELETE` Estoque Max/Min (deletar)
```
DELETE /webservice/v1/estoque_min_max_almox/2
```

#### `GET` Unidades por Produto (listar)
```
GET /webservice/v1/produtos_unidades
```

**Body:**
```json
{
"qtype": "produtos_unidades.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "20",
"sortname": "produtos_unidades.id",
"sortorder": "desc"
}
```

#### `POST` Unidades por Produto (inserir)
```
POST /webservice/v1/produtos_unidades
```

**Body:**
```json
{//Todos os campos são obrigatórios
"id_produto":"1",
"id_unidade":"13",
"fator_conversao":"1.000000000",
"sigla":"SER",
"ativo":"S"
}
```

#### `PUT` Unidades por Produto (editar)
```
PUT /webservice/v1/produtos_unidades/37
```

**Body:**
```json
{
"id_produto":"1",
"id_unidade":"14",//Alterando esse campo
"fator_conversao":"1.000000000",
"sigla":"SER",
"ativo":"S"
}
```

#### `DELETE` Unidades por Produto (deletar)
```
DELETE /webservice/v1/produtos_unidades/37
```

### Fornecedores

#### `GET` Fornecedor (listar)
```
GET /webservice/v1/fornecedor
```

**Body:**
```json
{
  "qtype" : "fornecedor.id",
  "query" : "1",
  "oper" : ">=",
  "page" : "1",
  "rp" : "2000",
  "sortname" : "fornecedor.id",
  "sortorder" : "desc"
}
```

#### `POST` Fornecedor (inserir)
```
POST /webservice/v1/fornecedor
```

**Body:**
```json
{//Os campos obrigatórios aqui, ignoram, o que estiver configurado em Menu configurações > Parâmetros > Parâmetros gerais > Aba Cadastros > Seção Fornecedor.
  "ativo": "S",//Obrigatório
  "tipo": "",
  "tipo_pessoa": "J",//Obrigatório
  "razao": "Fornecedor 01",//Obrigatório
  "fantasia": "",
  "cpf_cnpj": "",
  "ie_identidade": "",
  "contribuinte_icms": "",
  "data": "19/06/2024",//Obrigatório
  "data_nascimento": "",
  "obs": "",
  "id_conta": "",
  "ultima_atualizacao": "",
  "representante": "",
  "telefone_representante": "",
  "tipo_plano_id": "",
  "rg_orgao_emissor": "",
  "duplicata": "",
  "lote": "",
  "cep": "",
  "cidade": "1",//Obrigatório
  "bairro": "",
  "endereco": "",
  "numero": "",
  "referencia": "",
  "telefone": "",
  "id_operadora_celular": "",
  "celular": "",
  "email": "",
  "site": ""
}
```

#### `PUT` Fornecedor (editar)
```
PUT /webservice/v1/fornecedor/6
```

**Body:**
```json
{
  "ativo": "S",
  "tipo": "",
  "tipo_pessoa": "J",
  "razao": "Fornecedor 02",//Alterando esse campo
  "fantasia": "",
  "cpf_cnpj": "",
  "ie_identidade": "",
  "contribuinte_icms": "",
  "data": "19/06/2024",
  "data_nascimento": "",
  "obs": "",
  "id_conta": "",
  "ultima_atualizacao": "",
  "representante": "",
  "telefone_representante": "",
  "tipo_plano_id": "",
  "rg_orgao_emissor": "",
  "duplicata": "",
  "lote": "",
  "cep": "",
  "cidade": "1",
  "bairro": "",
  "endereco": "",
  "numero": "",
  "referencia": "",
  "telefone": "",
  "id_operadora_celular": "",
  "celular": "",
  "email": "",
  "site": ""
}
```

#### `DELETE` Fornecedor (deletar)
```
DELETE /webservice/v1/fornecedor/6
```

#### `GET` Vendedor (listar)
```
GET /webservice/v1/vendedor
```

**Body:**
```json
{
  "qtype" : "vendedor.id",
  "query" : "1",
  "oper" : ">=",
  "page" : "1",
  "rp" : "2000",
  "sortname" : "vendedor.id",
  "sortorder" : "desc"
}
```

#### `POST` Vendedor (inserir)
```
POST /webservice/v1/vendedor
```

**Body:**
```json
{
  "nome": "Sergio Fonseca",//Obrigatório
  "comissao": "3.00",//Obrigatório
  "comissao_perc_recebimento": "",
  "comissao_v": "",
  "endereco": "",
  "bairro": "",
  "id_cidade": "1",//Obrigatório
  "telefone": "",
  "celular": "",
  "cnpj_cpf": "",
  "ie_rg": "",
  "email": "",
  "pipe_id_usuario": "",
  "status": "A",//Obrigatório
  "ultima_atualizacao": ""
}
```

#### `PUT` Vendedor (editar)
```
PUT /webservice/v1/vendedor/16
```

**Body:**
```json
{
  "nome": "Sergio Bernardo",//Alterando esse campo
  "comissao": "3.00",
  "comissao_perc_recebimento": "",
  "comissao_v": "",
  "endereco": "",
  "bairro": "",
  "id_cidade": "1",
  "telefone": "",
  "celular": "",
  "cnpj_cpf": "",
  "ie_rg": "",
  "email": "",
  "pipe_id_usuario": "",
  "status": "A",
  "ultima_atualizacao": ""
}
```

#### `DELETE` Vendedor (deletar)
```
DELETE /webservice/v1/vendedor/16
```

### Estruturas

#### `GET` Estruturas (listar)
```
GET /webservice/v1/estrutura
```

**Body:**
```json
{
    "qtype" : "estrutura.id",
    "query" : "1",
    "oper" : ">=",
    "page" : "1",
    "rp" : "2000",
    "sortname" : "estrutura.id",
    "sortorder" : "desc"
}
```

#### `POST` Estruturas (inserir)
```
POST /webservice/v1/estrutura
```

**Body:**
```json
{
  "ativo": "S",//Obrigatório
  "id_filial": "1",//Obrigatório
  "id_planejamento_analitico": "",
  "descricao": "Estrutura Padrão",//Obrigatório
  "cep": "",
  "endereco": "",
  "numero": "",
  "complemento": "",
  "bairro": "",
  "id_cidade": "1",//Obrigatório
  "referencia": "",
  "observacao": "",
  "latitude": "",
  "longitude": ""
}
```

#### `PUT` Estruturas (editar)
```
PUT /webservice/v1/estrutura/3
```

**Body:**
```json
{
  "ativo": "S",
  "id_filial": "1",
  "id_planejamento_analitico": "",
  "descricao": "Estrutura 01",//Alterando esse campo
  "cep": "",
  "endereco": "",
  "numero": "",
  "complemento": "",
  "bairro": "",
  "id_cidade": "1",
  "referencia": "",
  "observacao": "",
  "latitude": "",
  "longitude": ""
}
```

#### `DELETE` Estruturas (deletar)
```
DELETE /webservice/v1/estrutura/3
```

#### `GET` Listar Patrimônios de Estruturas
```
GET /webservice/v1/su_oss_mov_produto_estrutura
```

**Body:**
```json
{
"qtype": "movimento_produtos.id_estrutura",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "20",
"sortname": "movimento_produtos.id",
"sortorder": "desc",
"grid_param":"[{\"TB\":\"movimento_produtos.imobilizado\", \"OP\" : \"=\", \"P\" : \"S\"},{\"TB\":\"movimento_produtos.patrimonio\", \"OP\" : \">=\", \"P\" : \"1\"}]"
}
```

#### `POST` Inserir um patrimônio no Patrimônio
```
POST /webservice/v1/su_oss_mov_produto_estrutura
```

**Body:**
```json
{
  "patrimonio": "10",//Obrigatório
  "id_oss_mensagem": "",
  "id_saida": "",
  "id_oss_chamado": "",
  "id_produto": "34",//Obrigatório
  "descricao": "",
  "data": "08/07/2024",//Obrigatório
  "id_unidade": "1",//Obrigatório
  "id_almox": "1",//Obrigatório
  "qtde_saida": "1",//Obrigatório
  "valor_unitario": "100",//Obrigatório
  "pcomissao": "",
  "pdesconto": "",
  "vdesconto": "",
  "valor_total": "100",//Obrigatório
  "garantia_oss": "",
  "id_su_oss_kit_equipamento": "",
  "id_classificacao_tributaria": "1",//Obrigatório
  "tipo": "S",//Obrigatório
  "estoque": "S",//Obrigatório
  "unidade_sigla": "UND",//Obrigatório
  "fator_conversao": "1.000000000",//Obrigatório
  "tipo_produto": "",
  "saldo_produto": "",
  "imobilizado": "S",//S para Patrimonio
  "id_estrutura": "1"//Obrigatório
}
```

#### `GET` Listar um produto no Patrimônio
```
GET /webservice/v1/su_oss_mov_produto_estrutura_consumo
```

**Body:**
```json
{
"qtype": "movimento_produtos.id_estrutura",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "20",
"sortname": "movimento_produtos.id",
"sortorder": "desc",
"grid_param":"[{\"TB\":\"movimento_produtos.imobilizado\", \"OP\" : \"=\", \"P\" : \"S\"},{\"TB\":\"movimento_produtos.patrimonio\", \"OP\" : \">=\", \"P\" : \"1\"}]"
}
```

#### `POST` Inserir um produto no Patrimônio
```
POST /webservice/v1/su_oss_mov_produto_estrutura_consumo
```

**Body:**
```json
{
  "id_oss_mensagem": "",
  "id_saida": "",
  "id_oss_chamado": "",
  "id_produto": "36",//Obrigatório
  "descricao": "",
  "data": "08/07/2024",//Obrigatório
  "id_unidade": "2",//Obrigatório
  "id_almox": "1",//Obrigatório
  "qtde_saida": "1",//Obrigatório
  "valor_unitario": "100",//Obrigatório
  "pcomissao": "",
  "pdesconto": "",
  "vdesconto": "",
  "valor_total": "100",//Obrigatório
  "garantia_oss": "",
  "id_su_oss_kit_equipamento": "",
  "id_classificacao_tributaria": "1",//Obrigatório
  "tipo": "S",//Obrigatório
  "estoque": "S",//Obrigatório
  "unidade_sigla": "MC",//Obrigatório
  "fator_conversao": "1.000000000",//Obrigatório
  "tipo_produto": "",
  "saldo_produto": "",
  "imobilizado": "S",//S para Patrimonio
  "id_estrutura": "1",//Obrigatório
  "descartado":""
}
```

#### `GET` Listar um produto em Outros Produtos
```
GET /webservice/v1/su_oss_mov_produto_estrutura_consumo
```

**Body:**
```json
{
"qtype": "movimento_produtos.id_estrutura",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "20",
"sortname": "movimento_produtos.id",
"sortorder": "desc",
"grid_param":"[{\"TB\":\"movimento_produtos.imobilizado\", \"OP\" : \"=\", \"P\" : \"N\"}]"
}
```

#### `POST` Inserir um produto em Outros Produtos
```
POST /webservice/v1/su_oss_mov_produto_estrutura_consumo
```

**Body:**
```json
{
  "patrimonio": "",
  "id_oss_mensagem": "",
  "id_saida": "",
  "id_oss_chamado": "",
  "id_produto": "36",//Obrigatório
  "descricao": "",
  "data": "08/07/2024",//Obrigatório
  "id_unidade": "2",//Obrigatório
  "id_almox": "1",//Obrigatório
  "qtde_saida": "1",//Obrigatório
  "valor_unitario": "100",//Obrigatório
  "pcomissao": "",
  "pdesconto": "",
  "vdesconto": "",
  "valor_total": "100",//Obrigatório
  "garantia_oss": "",
  "id_su_oss_kit_equipamento": "",
  "id_classificacao_tributaria": "1",//Obrigatório
  "tipo": "S",//Obrigatório
  "estoque": "S",//Obrigatório
  "unidade_sigla": "MC",//Obrigatório
  "fator_conversao": "1.000000000",//Obrigatório
  "tipo_produto": "",
  "saldo_produto": "",
  "imobilizado": "N",//N para Outros Produtos
  "id_estrutura": "1"//Obrigatório
}
```

#### `POST` Patrimônio > Baixar > Meu Almoxarifado
```
POST /webservice/v1/baixar_produto_imobilizado
```

**Body:**
```json
{
  "get_id": "62599"//ID do Comodato
}
```

#### `POST` Patrimônio> Baixar > Outro almoxarifado
```
POST /webservice/v1/baixar_produto_imobilizado_outro_almox
```

**Body:**
```json
{
  "id": "62595",//ID do Comodato
  "id_almox":"1"//ID do Almoxarifado, que receberá o produto
}
```

### 📁 Clientes

#### `GET` Condomínios (listar)
```
GET /webservice/v1/cliente_condominio
```

**Body:**
```json
{
    "qtype" : "cliente_condominio.id",
    "query" : "1",
    "oper" : ">=",
    "page" : "1",
    "rp" : "2000",
    "sortname" : "cliente_condominio.id",
    "sortorder" : "desc"
}
```

#### `POST` Condomínios (inserir)
```
POST /webservice/v1/cliente_condominio
```

**Body:**
```json
{
  "condominio": "Edifício Teste",//Obrigatório
  "cnpj": "",
  "cep": "",
  "endereco": "Rua teste",//Obrigatório
  "numero": "1500",//Obrigatório
  "bairro": "Bairro teste",//Obrigatório
  "id_cidade": "1",//Obrigatório
  "sindico": "",
  "celular_sindico": "",
  "data_cadastro": "",
  "obs": ""
}
```

#### `PUT` Condomínios (editar)
```
PUT /webservice/v1/cliente_condominio/2
```

**Body:**
```json
{
  "condominio": "Edifício 01",//Alterando esse campo
  "cnpj": "",
  "cep": "",
  "endereco": "Rua teste",
  "numero": "1500",
  "bairro": "Bairro teste",
  "id_cidade": "1",
  "sindico": "",
  "celular_sindico": "",
  "data_cadastro": "",
  "obs": ""
}
```

#### `DELETE` Condomínios (deletar)
```
DELETE /webservice/v1/cliente_condominio/2
```

#### `GET` Tipo de clientes (listar)
```
GET /webservice/v1/tipo_cliente
```

**Body:**
```json
{
    "qtype" : "tipo_cliente.id",
    "query" : "1",
    "oper" : ">=",
    "page" : "1",
    "rp" : "2000",
    "sortname" : "tipo_cliente.id",
    "sortorder" : "desc"
}
```

#### `POST` Tipo de clientes (inserir)
```
POST /webservice/v1/tipo_cliente
```

**Body:**
```json
{//Todos os campos são obrigatórios
  "tipo_cliente": "Cliente Financeiro",
  "tipo_assinante": "1",
  "contribuinte_icms": "N",
  "tipo_cliente_scm": "01"
}
```

#### `PUT` Tipo de clientes (editar)
```
PUT /webservice/v1/tipo_cliente/5
```

**Body:**
```json
{
  "tipo_cliente": "Cliente Teste",//Alterando esse campo
  "tipo_assinante": "1",
  "contribuinte_icms": "N",
  "tipo_cliente_scm": "01"
}
```

#### `DELETE` Tipo de clientes (deletar)
```
DELETE /webservice/v1/tipo_cliente/5
```

### 📁 Contratos

#### `GET` Tipo de cobrança (listar)
```
GET /webservice/v1/cliente_contrato_tipo
```

**Body:**
```json
{
    "qtype" : "cliente_contrato_tipo.id",
    "query" : "1",
    "oper" : ">=",
    "page" : "1",
    "rp" : "2000",
    "sortname" : "cliente_contrato_tipo.id",
    "sortorder" : "desc"
}
```

#### `POST` Tipo de cobrança (inserir)
```
POST /webservice/v1/cliente_contrato_tipo
```

**Body:**
```json
{
  "ativo": "",
  "tipo_contrato": "Teste Pre",//Obrigatório
  "tipo_pagamento": "Pre",//Obrigatório
  "base_periodo_prestacao": "V",//Obrigatório
  "id_condicoes_pagamento": "1",//Obrigatório
  "avisar_dias": "5",//Obrigatório
  "bloquear_dias": "5",//Obrigatório
  "bloqueio_renegociado_n_dias": "",
  "periodo": "M",//Obrigatório
  "qtd_periodos": "1",//Obrigatório
  "ordem": "",
  "ultima_atualizacao": "",
  "parcela_cobrar_proporcional": "",
  "dias_proporcional_cob_mes": "",
  "parcelas_cob_adicional": "",
  "max_titulos_abertos_gerar_contrato": "",
  "dias_carencia_pre": ""
}
```

#### `PUT` Tipo de cobrança (editar)
```
PUT /webservice/v1/cliente_contrato_tipo/67
```

**Body:**
```json
{
  "ativo": "",
  "tipo_contrato": "Teste Pre",//Alterando esse campo
  "tipo_pagamento": "Pre",
  "base_periodo_prestacao": "V",
  "id_condicoes_pagamento": "1",
  "avisar_dias": "5",
  "bloquear_dias": "5",
  "bloqueio_renegociado_n_dias": "",
  "periodo": "M",
  "qtd_periodos": "1",
  "ordem": "",
  "ultima_atualizacao": "",
  "parcela_cobrar_proporcional": "",
  "dias_proporcional_cob_mes": "",
  "parcelas_cob_adicional": "",
  "max_titulos_abertos_gerar_contrato": "",
  "dias_carencia_pre": ""
}
```

#### `DELETE` Tipo de cobrança (deletar)
```
DELETE /webservice/v1/cliente_contrato_tipo/67
```

#### `GET` Planos de vendas (listar)
```
GET /webservice/v1/vd_contratos
```

**Body:**
```json
{
    "qtype" : "vd_contratos.id",
    "query" : "1",
    "oper" : ">=",
    "page" : "1",
    "rp" : "2000",
    "sortname" : "vd_contratos.id",
    "sortorder" : "desc"
}
```

#### `POST` Planos de vendas (inserir)
```
POST /webservice/v1/vd_contratos
```

**Body:**
```json
{
  "tipo": "I",//Obrigatório
  "nome": "Plano Teste 1200",//Obrigatório
  "descricao": "",
  "moeda": "",
  "id_tipo_documento": "",
  "id_modelo": "",
  "id_carteira_cobranca": "",
  "id_vendedor": "",
  "id_filial": "",
  "comissao": "",
  "valor_contrato": "",
  "limitar_n_logins": "",
  "logins_simultaneos": "",
  "ativo": "",
  "base_geracao_por_tipo_doc": "",
  "tipo_doc_opc": "",
  "tipo_doc_opc2": "",
  "tipo_doc_opc3": "",
  "tipo_doc_opc4": "",
  "ultima_atualizacao": "",
  "tel_franquia_segundos": "",
  "tel_franquia_prefix": "",
  "id_cidade": "",
  "id_tipo_doc_ativ": "",
  "id_produto_ativ": "",
  "id_cond_pag_ativ": "",
  "id_vendedor_ativ": "",
  "fidelidade": "",
  "utilizar_desconto_ate_vencimento": "",
  "utilizar_desconto_por_repeticao": "",
  "utilizar_desconto_no_produto_plano": "",
  "qtde_repeticoes_desconto": "",
  "id_produto_ate_vencimento": "",
  "id_produto_contrato_vinc": "",
  "valor_desconto": ""
}
```

#### `PUT` Planos de vendas  (editar)
```
PUT /webservice/v1/vd_contratos/39
```

**Body:**
```json
{
  "tipo": "I",
  "nome": "Plano 2024",//Alterando esse campo
  "descricao": "",
  "moeda": "",
  "id_tipo_documento": "",
  "id_modelo": "",
  "id_carteira_cobranca": "",
  "id_vendedor": "",
  "id_filial": "",
  "comissao": "",
  "valor_contrato": "",
  "limitar_n_logins": "",
  "logins_simultaneos": "",
  "ativo": "",
  "base_geracao_por_tipo_doc": "",
  "tipo_doc_opc": "",
  "tipo_doc_opc2": "",
  "tipo_doc_opc3": "",
  "tipo_doc_opc4": "",
  "ultima_atualizacao": "",
  "tel_franquia_segundos": "",
  "tel_franquia_prefix": "",
  "id_cidade": "",
  "id_tipo_doc_ativ": "",
  "id_produto_ativ": "",
  "id_cond_pag_ativ": "",
  "id_vendedor_ativ": "",
  "fidelidade": "",
  "utilizar_desconto_ate_vencimento": "",
  "utilizar_desconto_por_repeticao": "",
  "utilizar_desconto_no_produto_plano": "",
  "qtde_repeticoes_desconto": "",
  "id_produto_ate_vencimento": "",
  "id_produto_contrato_vinc": "",
  "valor_desconto": ""
}
```

#### `DELETE` Planos de vendas (deletar)
```
DELETE /webservice/v1/vd_contratos/39
```

#### `GET` Reajuste de valor (listar)
```
GET /webservice/v1/cliente_contrato_produtos_reajuste_valor
```

**Body:**
```json
{
    "qtype" : "cliente_contrato_produtos_reajuste_valor.id",
    "query" : "1",
    "oper" : ">=",
    "page" : "1",
    "rp" : "2000",
    "sortname" : "cliente_contrato_produtos_reajuste_valor.id",
    "sortorder" : "desc"
}
```

#### `POST` Reajuste de valor (inserir)
```
POST /webservice/v1/cliente_contrato_produtos_reajuste_valor
```

**Body:**
```json
{
  "descricao": "Teste de reajuste",//Obrigatório
  "percentual": "2.0000",//Obrigatório
  "data_validade": "",
  "status": "A",//Obrigatório
  "status_internet": "A",//Obrigatório
  "data_base_inicial": "",
  "data_base_final": "",
  "data_ativacao_inicial": "",
  "data_ativacao_final": "",
  "data_expiracao_ini": "",
  "data_expiracao_fin": "",
  "data_renovacao_inicial": "",
  "data_renovacao_final": "",
  "id_filial": "",
  "cliente": "",
  "contrato": "",
  "tipo_cobranca": "",
  "carteira_cobranca": "",
  "cidade": "",
  "condominio": "",
  "plano_venda": "",
  "tipo_servico": "I"//Obrigatório
}
```

#### `PUT` Reajuste de valor (editar)
```
PUT /webservice/v1/cliente_contrato_produtos_reajuste_valor/12
```

**Body:**
```json
{
  "descricao": "Reajuste",//Alterando esse campo
  "percentual": "2.0000",
  "data_validade": "",
  "status": "A",
  "status_internet": "A",
  "data_base_inicial": "",
  "data_base_final": "",
  "data_ativacao_inicial": "",
  "data_ativacao_final": "",
  "data_expiracao_ini": "",
  "data_expiracao_fin": "",
  "data_renovacao_inicial": "",
  "data_renovacao_final": "",
  "id_filial": "",
  "cliente": "",
  "contrato": "",
  "tipo_cobranca": "",
  "carteira_cobranca": "",
  "cidade": "",
  "condominio": "",
  "plano_venda": "",
  "tipo_servico": "I"
}
```

#### `DELETE` Reajuste de valor (deletar)
```
DELETE /webservice/v1/cliente_contrato_produtos_reajuste_valor/12
```

#### `POST` Gerar acréscimos
```
POST /webservice/v1/gerar_acrescimo_25243
```

**Body:**
```json
{
"id" : "1"
}
```

#### `GET` Modelos de contrato (listar)
```
GET /webservice/v1/cliente_contrato_modelo
```

**Body:**
```json
{
    "qtype" : "cliente_contrato_modelo.id",
    "query" : "1",
    "oper" : ">=",
    "page" : "1",
    "rp" : "2000",
    "sortname" : "cliente_contrato_modelo.id",
    "sortorder" : "desc"
}
```

#### `POST` Modelos de contrato (inserir)
```
POST /webservice/v1/cliente_contrato_modelo
```

**Body:**
```json
{
  "status": "",//Obrigatório
  "nome": "Modelo de contrato 01",//Obrigatório
  "eh_modelo_termo": "",
  "cabecalho_padrao": "",
  "texto": "",
  "id_contrato_testes": "",
  "ultima_atualizacao": "",
  "cabecalho": "",
  "adesao_arquivo": "",
  "imprimir_comodatos": "",
  "imprimir_login_assinante": "",
  "imprimir_pppoe": "",
  "imprimi_roteador": "",
  "prazo": "",
  "fidelidade": "",
  "cliente_contrato_comodato": "",
  "comodato_arquivo": "",
  "cliente_contrato_de_permanencia": "",
  "permanencia_arquivo": "",
  "termo_personalizado": "",
  "personalizado_arquivo": ""
}
```

#### `PUT` Modelos de contrato (editar)
```
PUT /webservice/v1/cliente_contrato_modelo/3
```

**Body:**
```json
{
  "status": "A",//alterando esse campo
  "nome": "Teste",//alterando esse campo
  "eh_modelo_termo": "",
  "cabecalho_padrao": "",
  "texto": "",
  "id_contrato_testes": "",
  "ultima_atualizacao": "",
  "cabecalho": "",
  "adesao_arquivo": "",
  "imprimir_comodatos": "",
  "imprimir_login_assinante": "",
  "imprimir_pppoe": "",
  "imprimi_roteador": "",
  "prazo": "",
  "fidelidade": "",
  "cliente_contrato_comodato": "",
  "comodato_arquivo": "",
  "cliente_contrato_de_permanencia": "",
  "permanencia_arquivo": "",
  "termo_personalizado": "",
  "personalizado_arquivo": ""
}
```

#### `DELETE` Modelos de contrato (deletar)
```
DELETE /webservice/v1/cliente_contrato_modelo/3
```

### 📁 Produtos

#### `GET` Grupo de produtos (listar)
```
GET /webservice/v1/grupo_produtos
```

**Body:**
```json
{
    "qtype" : "grupo_produtos.id",
    "query" : "1",
    "oper" : ">=",
    "page" : "1",
    "rp" : "2000",
    "sortname" : "grupo_produtos.id",
    "sortorder" : "desc"
}
```

#### `POST` Grupo de produtos (inserir)
```
POST /webservice/v1/grupo_produtos
```

**Body:**
```json
{//Todos os campos são obrgatórios
  "grupo": "Colections",
  "codigo_alternativo": "230"
}
```

#### `PUT` Grupo de produtos (editar)
```
PUT /webservice/v1/grupo_produtos/6
```

**Body:**
```json
{
  "grupo": "V2 Produtos",//Alterando esse campo
  "codigo_alternativo": "230"
}
```

#### `DELETE` Grupo de produtos (deletar)
```
DELETE /webservice/v1/grupo_produtos/6
```

#### `GET` Subgrupos de produtos (listar)
```
GET /webservice/v1/sub_grupo_produdos
```

**Body:**
```json
{
    "qtype" : "sub_grupo_produdos.id",
    "query" : "1",
    "oper" : ">=",
    "page" : "1",
    "rp" : "2000",
    "sortname" : "sub_grupo_produdos.id",
    "sortorder" : "desc"
}
```

#### `POST` Subgrupos de produtos (inserir)
```
POST /webservice/v1/sub_grupo_produdos
```

**Body:**
```json
{
  "id_grupo": "3",//Obrigatórios
  "sub_grupo": "Subgrupo Teste",//Obrigatórios
  "codigo_alternativo": "",
  "id_conta_estoque": "2",//Obrigatórios
  "id_conta_despesa": "2",//Obrigatórios
  "id_conta_receita2": "2",//Obrigatórios
  "id_conta_receita": "",
  "id_classe_financeira": "",
  "id_conta_comodato": "",
  "tipo_produto": "",
  "ecommerce": "",
  "margem_lucro": ""
}
```

#### `PUT` Subgrupos de produtos (editar)
```
PUT /webservice/v1/sub_grupo_produdos/5
```

**Body:**
```json
{
  "id_grupo": "3",
  "sub_grupo": "Subgrupo V2",//Alterando esse campo
  "codigo_alternativo": "",
  "id_conta_estoque": "2",
  "id_conta_despesa": "2",
  "id_conta_receita2": "2",
  "id_conta_receita": "",
  "id_classe_financeira": "",
  "id_conta_comodato": "",
  "tipo_produto": "",
  "ecommerce": "",
  "margem_lucro": ""
}
```

#### `DELETE` Subgrupos de produtos (deletar)
```
DELETE /webservice/v1/sub_grupo_produdos/5
```

#### `GET` Unidades (listar)
```
GET /webservice/v1/unidades
```

**Body:**
```json
{
    "qtype" : "unidades.id",
    "query" : "1",
    "oper" : ">=",
    "page" : "1",
    "rp" : "2000",
    "sortname" : "unidades.id",
    "sortorder" : "desc"
}
```

#### `POST` Unidades (inserir)
```
POST /webservice/v1/unidades
```

**Body:**
```json
{
  "descricao": "Polegadas",
  "sigla": "Pol"
}
```

#### `PUT` Unidades (editar)
```
PUT /webservice/v1/unidades/15
```

**Body:**
```json
{
  "descricao": "metros",//Alterando esse campo
  "sigla": "Pol"
}
```

#### `DELETE` Unidades (deletar)
```
DELETE /webservice/v1/unidades/15
```

#### `GET` Classificação Produtos Franquia (listar)
```
GET /webservice/v1/fr_faturamento_classificacoes
```

**Body:**
```json
{
    "qtype" : "fr_faturamento_classificacoes.id",
    "query" : "1",
    "oper" : ">=",
    "page" : "1",
    "rp" : "2000",
    "sortname" : "fr_faturamento_classificacoes.id",
    "sortorder" : "desc"
}
```

#### `POST` Classificação Produtos Franquia (inserir)
```
POST /webservice/v1/fr_faturamento_classificacoes
```

**Body:**
```json
{
  "descricao": "Brisa Music",//Obrigatório
  "porcentagem": "",
  "ativo": "S",//Obrigatório
  "ultima_atualizacao": ""
}
```

#### `PUT` Classificação Produtos Franquia (editar)
```
PUT /webservice/v1/fr_faturamento_classificacoes/1
```

**Body:**
```json
{
  "descricao": "Link",//Alterando esse campo
  "porcentagem": "",
  "ativo": "S",
  "ultima_atualizacao": ""
}
```

#### `DELETE` Classificação Produtos Franquia (deletar)
```
DELETE /webservice/v1/fr_faturamento_classificacoes/1
```

### 📁 Financeiro

#### `GET` Carteira de cobrança (listar)
```
GET /webservice/v1/fn_carteira_cobranca
```

**Body:**
```json
{
    "qtype" : "fn_carteira_cobranca.id",
    "query" : "1",
    "oper" : ">=",
    "page" : "1",
    "rp" : "2000",
    "sortname" : "fn_carteira_cobranca.id",
    "sortorder" : "desc"
}
```

#### `POST` Carteira de cobrança (inserir)
```
POST /webservice/v1/fn_carteira_cobranca
```

**Body:**
```json
{
  "descricao": "Carteira de Cobrança Padrão",//Obrigatório
  "id_conta": "1",//Obrigatório
  "tipo_recebimento": "---",
  "envia_email_ao_gerar_finan": "",
  "envia_push_ao_gerar_finan": "",
  "registrado": "N",//Obrigatório
  "ativo": "S",//Obrigatório
  "filial_id": "",
  "id_config_alt_pagamento": "",
  "planejamento_tarifa": "",
  "lancamento_tarifa": "L",//Obrigatório
  "reseller_authorization_code": "",
  "dias_vencimento_fatura": "",
  "carteira_padrao_fatura": "",
  "ultima_atualizacao": "",
  "pedido_baixa_automatico_recorencia_cartao": "S",//Obrigatório
  "aceite": "",
  "especie": "",
  "especie_doc": "",
  "taxa": "",
  "quem_emite": "",
  "quem_distribui": "",
  "endereco_envio_cobranca": "",
  "boleto_local_atualiza": "",
  "local_pagamento": "",
  "contador_nn": "",
  "classe_funcoes": "",
  "versao_integracao_banrisul": "",
  "n_convenio": "",
  "c_cedente": "",
  "codigo_edi7": "",
  "carteira": "",
  "sigla_arquivo_remessa": "",
  "variacao_carteira": "",
  "modalidade_cobranca": "",
  "sicredi_byte": "",
  "sicredi_posto": "",
  "inicio_nosso_numero": "",
  "nosso_numero_const1": "",
  "nosso_numero_const2": "",
  "nosso_numero1": "",
  "nosso_numero2": "",
  "conta_cosmos": "",
  "tipo_carteira": "",
  "tipo": "",
  "utliza_numero_parcela_fixo": "",
  "pedido_baixa_automatico": "",
  "enviar_pedido_baixa_renegociados": "",
  "pedido_baixa_automatico_rec_manual": "",
  "pedido_baixa_automatico_rec_cartao": "",
  "pedido_baixa_automatico_rec_pix": "",
  "adiciona_remessa_auto_alt_data": "",
  "remessa_com_mensagem": "",
  "validar_vencidos_remessa": "",
  "validar_recebidos_remessa": "",
  "validar_clientes_bloqueados": "",
  "validar_clientes_negativados_remessa": "",
  "l_remessa": "",
  "l_retorno": "",
  "codigo_flash": "",
  "contabiliza_retorno_filial_emissao": "",
  "filtra_inicio_nn": "1",//Obrigatório
  "baixa_automatica": "",
  "baixa_automatica_dias": "",
  "utilizar_baixa_apos_vencimento": "",
  "enviar_pedido_baixa_vencimento": "",
  "gateway_nome": "",
  "versao_api": "",
  "importado_gateway": "",
  "nova_api": "",
  "ambiente_homologacao_gateway": "",
  "utiliza_carne": "",
  "gerencia_client_id": "",
  "gerencia_client_secret": "",
  "developer_application_key": "",
  "gerencia_ip_callback": "",
  "gerencia_identificador_conta": "",
  "nova_int_fortunus": "",
  "gateway_token": "",
  "carteira_widepay": "",
  "gateway_tipo_impressao": "",
  "gateway_retorno": "",
  "adiciona_obs_descricao": "",
  "adiciona_venc_descricao": "",
  "dias_limite_pagamento_apos_vencimento": "",
  "envia_email_gerencia": "",
  "numero_conta_f2b": "",
  "n_convenio_credisis": "",
  "url_callback": "",
  "use_webhook_url_callback": "N",//Obrigatório
  "webhook_url_callback": "",
  "data_ultima_atualizacao": "",
  "galaxPayId": "",
  "galaxPayHash": "",
  "gera_pix_gateway": "",
  "recebimento_parcial_gateway": "",
  "finalizar_cob_bf": "",
  "especie_documento_gerencianet": "",
  "lanca_tarifa_gateway": "",
  "valor_tarifa_gateway": "",
  "lanca_tarifa_pix": "",
  "valor_tarifa_pix": "",
  "timeout": "",
  "creditcard_gateway": "",
  "creditCard_ambiente": "",
  "habilitar_recorrencia_cartao": "",
  "creditcard_user": "",
  "creditcard_senha": "",
  "creditcard_senhassl": "",
  "creditCard_loja": "",
  "creditCard_chave": "",
  "gerencia_identificador_conta_card": "",
  "gerencia_client_id_card": "",
  "gerencia_client_secret_card": "",
  "gerencia_ip_callback_card": "",
  "id_plano_vindi": "",
  "galaxPayIdCard": "",
  "galaxPayHashCard": "",
  "galaxpay_ip_callback_card": "",
  "timeoutCreditCard": "",
  "creditcard_sslcert": "",
  "creditcard_sslkey": "",
  "creditCard_local": "",
  "creditCard_capturar": "",
  "creditCard_autorizar": "",
  "credit_card_tipo": "",
  "creditCard_parcelamento": "",
  "creditCard_Nparcelas": "",
  "creditCard_juro": "",
  "creditcard_banceira_vi": "",
  "creditcard_banceira_ma": "",
  "creditcard_banceira_am": "",
  "creditcard_banceira_el": "",
  "creditcard_banceira_dn": "",
  "creditcard_banceira_dc": "",
  "creditcard_banceira_jc": "",
  "creditcard_banceira_au": "",
  "creditcard_banceira_ca": "",
  "debito_convenio": "",
  "debito_carteira_vinculada": "",
  "debito_classe": "",
  "validar_vencidos_remessa_D": "",
  "valor_tarifa": "",
  "substrair_tarifa": "",
  "pix_gateway": "",
  "pix_ambiente": "",
  "pix_chave": "",
  "pix_client_id": "",
  "pix_client_secret": "",
  "pix_tempo_validade": "",
  "pix_certificado": "",
  "pix_gerencia_ip_callback": "",
  "pix_modalidade": "",
  "lanca_tarifa_pix_modobank": "",
  "valor_tarifa_pix_modobank": "",
  "jurop_mes": "",
  "juros_boleto_juno": "",
  "jurop": "",
  "jurov": "",
  "multap": "",
  "multav": "",
  "desconto_v": "",
  "desconto_p": "",
  "desconto_condicional_valor": "",
  "desconto_condicional_percentual": "",
  "data_validade_condicional": "",
  "atraso": "",
  "calcular_juros": "",
  "permite_atualizar_boleto_apos_data_ixc": "",
  "instrucao1": "",
  "instrucao2": "",
  "instrucao3": "",
  "instrucao4": "",
  "instrucao5": "",
  "instrucao6": "",
  "instrucao7": "",
  "instrucao8": "",
  "imp_inst_vencido": "",
  "imp_inst_proporcional": "",
  "obs_fn_areceber": "",
  "obs_anterior": "",
  "obs_posterior": "",
  "l_impressao": "",
  "cor_fatura": "",
  "informative_text": "",
  "imprimir_filial_venda": "",
  "considerar_modelo_nao_fiscal": "",
  "imprime_endereco_boleto": "",
  "imprime_fone_fatura_d": "",
  "imp_nome_sacador_avalista": "",
  "imprimir_filial_conta": "",
  "imprime_prod_val_zero": "",
  "imprime_tipo_resolucao_anatel": "",
  "mask_cpf_cnpj_impressao_boleto": "",
  "mostra_cep_beneficiario_impressao": "",
  "imprimir_beneficiario_gateway": "",
  "obs_adicional_boleto": "",
  "imp_nome_beneficiario": "Teste",
  "imp_nome_beneficiario_recibo": "",
  "boletos_capa_contratos": "",
  "boleto_capa_local": "",
  "boleto_capa_imagem": "",
  "boleto_capa_x": "",
  "boleto_capa_y": "",
  "tamanho_quadro_endereco_x": "",
  "tamanho_quadro_endereco_y": "",
  "tipo_baixa": "",
  "validar_juros_multa": "",
  "id_produto_cob_adicional": "",
  "id_fn_areceber_modelo": ""
}
```

#### `PUT` Carteira de cobrança (editar)
```
PUT /webservice/v1/fn_carteira_cobranca/8
```

**Body:**
```json
{
  "descricao": "Carteira Teste",//Alterando esse campo
  "id_conta": "1",
  "tipo_recebimento": "---",
  "envia_email_ao_gerar_finan": "",
  "envia_push_ao_gerar_finan": "",
  "registrado": "N",
  "ativo": "S",
  "filial_id": "",
  "id_config_alt_pagamento": "",
  "planejamento_tarifa": "",
  "lancamento_tarifa": "L",
  "reseller_authorization_code": "",
  "dias_vencimento_fatura": "",
  "carteira_padrao_fatura": "",
  "ultima_atualizacao": "",
  "pedido_baixa_automatico_recorencia_cartao": "S",
  "aceite": "",
  "especie": "",
  "especie_doc": "",
  "taxa": "",
  "quem_emite": "",
  "quem_distribui": "",
  "endereco_envio_cobranca": "",
  "boleto_local_atualiza": "",
  "local_pagamento": "",
  "contador_nn": "",
  "classe_funcoes": "",
  "versao_integracao_banrisul": "",
  "n_convenio": "",
  "c_cedente": "",
  "codigo_edi7": "",
  "carteira": "",
  "sigla_arquivo_remessa": "",
  "variacao_carteira": "",
  "modalidade_cobranca": "",
  "sicredi_byte": "",
  "sicredi_posto": "",
  "inicio_nosso_numero": "",
  "nosso_numero_const1": "",
  "nosso_numero_const2": "",
  "nosso_numero1": "",
  "nosso_numero2": "",
  "conta_cosmos": "",
  "tipo_carteira": "",
  "tipo": "",
  "utliza_numero_parcela_fixo": "",
  "pedido_baixa_automatico": "",
  "enviar_pedido_baixa_renegociados": "",
  "pedido_baixa_automatico_rec_manual": "",
  "pedido_baixa_automatico_rec_cartao": "",
  "pedido_baixa_automatico_rec_pix": "",
  "adiciona_remessa_auto_alt_data": "",
  "remessa_com_mensagem": "",
  "validar_vencidos_remessa": "",
  "validar_recebidos_remessa": "",
  "validar_clientes_bloqueados": "",
  "validar_clientes_negativados_remessa": "",
  "l_remessa": "",
  "l_retorno": "",
  "codigo_flash": "",
  "contabiliza_retorno_filial_emissao": "",
  "filtra_inicio_nn": "1",
  "baixa_automatica": "",
  "baixa_automatica_dias": "",
  "utilizar_baixa_apos_vencimento": "",
  "enviar_pedido_baixa_vencimento": "",
  "gateway_nome": "",
  "versao_api": "",
  "importado_gateway": "",
  "nova_api": "",
  "ambiente_homologacao_gateway": "",
  "utiliza_carne": "",
  "gerencia_client_id": "",
  "gerencia_client_secret": "",
  "developer_application_key": "",
  "gerencia_ip_callback": "",
  "gerencia_identificador_conta": "",
  "nova_int_fortunus": "",
  "gateway_token": "",
  "carteira_widepay": "",
  "gateway_tipo_impressao": "",
  "gateway_retorno": "",
  "adiciona_obs_descricao": "",
  "adiciona_venc_descricao": "",
  "dias_limite_pagamento_apos_vencimento": "",
  "envia_email_gerencia": "",
  "numero_conta_f2b": "",
  "n_convenio_credisis": "",
  "url_callback": "",
  "use_webhook_url_callback": "N",
  "webhook_url_callback": "",
  "data_ultima_atualizacao": "",
  "galaxPayId": "",
  "galaxPayHash": "",
  "gera_pix_gateway": "",
  "recebimento_parcial_gateway": "",
  "finalizar_cob_bf": "",
  "especie_documento_gerencianet": "",
  "lanca_tarifa_gateway": "",
  "valor_tarifa_gateway": "",
  "lanca_tarifa_pix": "",
  "valor_tarifa_pix": "",
  "timeout": "",
  "creditcard_gateway": "",
  "creditCard_ambiente": "",
  "habilitar_recorrencia_cartao": "",
  "creditcard_user": "",
  "creditcard_senha": "",
  "creditcard_senhassl": "",
  "creditCard_loja": "",
  "creditCard_chave": "",
  "gerencia_identificador_conta_card": "",
  "gerencia_client_id_card": "",
  "gerencia_client_secret_card": "",
  "gerencia_ip_callback_card": "",
  "id_plano_vindi": "",
  "galaxPayIdCard": "",
  "galaxPayHashCard": "",
  "galaxpay_ip_callback_card": "",
  "timeoutCreditCard": "",
  "creditcard_sslcert": "",
  "creditcard_sslkey": "",
  "creditCard_local": "",
  "creditCard_capturar": "",
  "creditCard_autorizar": "",
  "credit_card_tipo": "",
  "creditCard_parcelamento": "",
  "creditCard_Nparcelas": "",
  "creditCard_juro": "",
  "creditcard_banceira_vi": "",
  "creditcard_banceira_ma": "",
  "creditcard_banceira_am": "",
  "creditcard_banceira_el": "",
  "creditcard_banceira_dn": "",
  "creditcard_banceira_dc": "",
  "creditcard_banceira_jc": "",
  "creditcard_banceira_au": "",
  "creditcard_banceira_ca": "",
  "debito_convenio": "",
  "debito_carteira_vinculada": "",
  "debito_classe": "",
  "validar_vencidos_remessa_D": "",
  "valor_tarifa": "",
  "substrair_tarifa": "",
  "pix_gateway": "",
  "pix_ambiente": "",
  "pix_chave": "",
  "pix_client_id": "",
  "pix_client_secret": "",
  "pix_tempo_validade": "",
  "pix_certificado": "",
  "pix_gerencia_ip_callback": "",
  "pix_modalidade": "",
  "lanca_tarifa_pix_modobank": "",
  "valor_tarifa_pix_modobank": "",
  "jurop_mes": "",
  "juros_boleto_juno": "",
  "jurop": "",
  "jurov": "",
  "multap": "",
  "multav": "",
  "desconto_v": "",
  "desconto_p": "",
  "desconto_condicional_valor": "",
  "desconto_condicional_percentual": "",
  "data_validade_condicional": "",
  "atraso": "",
  "calcular_juros": "",
  "permite_atualizar_boleto_apos_data_ixc": "",
  "instrucao1": "",
  "instrucao2": "",
  "instrucao3": "",
  "instrucao4": "",
  "instrucao5": "",
  "instrucao6": "",
  "instrucao7": "",
  "instrucao8": "",
  "imp_inst_vencido": "",
  "imp_inst_proporcional": "",
  "obs_fn_areceber": "",
  "obs_anterior": "",
  "obs_posterior": "",
  "l_impressao": "",
  "cor_fatura": "",
  "informative_text": "",
  "imprimir_filial_venda": "",
  "considerar_modelo_nao_fiscal": "",
  "imprime_endereco_boleto": "",
  "imprime_fone_fatura_d": "",
  "imp_nome_sacador_avalista": "",
  "imprimir_filial_conta": "",
  "imprime_prod_val_zero": "",
  "imprime_tipo_resolucao_anatel": "",
  "mask_cpf_cnpj_impressao_boleto": "",
  "mostra_cep_beneficiario_impressao": "",
  "imprimir_beneficiario_gateway": "",
  "obs_adicional_boleto": "",
  "imp_nome_beneficiario": "Teste",
  "imp_nome_beneficiario_recibo": "",
  "boletos_capa_contratos": "",
  "boleto_capa_local": "",
  "boleto_capa_imagem": "",
  "boleto_capa_x": "",
  "boleto_capa_y": "",
  "tamanho_quadro_endereco_x": "",
  "tamanho_quadro_endereco_y": "",
  "tipo_baixa": "",
  "validar_juros_multa": "",
  "id_produto_cob_adicional": "",
  "id_fn_areceber_modelo": ""
}
```

#### `DELETE` Carteira de cobrança (deletar)
```
DELETE /webservice/v1/fn_carteira_cobranca/8
```

#### `GET` Contas (listar)
```
GET /webservice/v1/contas
```

**Body:**
```json
{
    "qtype" : "contas.id",
    "query" : "1",
    "oper" : ">=",
    "page" : "1",
    "rp" : "2000",
    "sortname" : "contas.id",
    "sortorder" : "desc"
}
```

#### `POST` Contas (inserir)
```
POST /webservice/v1/contas
```

**Body:**
```json
{
  "conta": "Brasil",//Obrigatório
  "tipo_conta": "C",//Obrigatório
  "data_abertura": "19/06/2024",//Obrigatório
  "saldo_abertura": "",
  "id_planejamento": "1",//Obrigatório
  "filial_padrao": "1",//Obrigatório
  "permitir_pag_saldo_negativo": "N",//Obrigatório
  "ativo": "S",//Obrigatório
  "id_planejamento_antigo": "",
  "cod_banco": "",
  "agencia": "",
  "agencia_dv": "",
  "numero_conta": "",
  "numero_conta_dv": "",
  "razao_banco": "",
  "cnpj": "",
  "suframa": "",
  "cep": "",
  "logradouro": "",
  "numero_residencia": "",
  "complemento": "",
  "bairro": "",
  "cidade": "",
  "operacao": "",
  "layout_conciliacao": "",
  "numero_cooperativa": "",
  "parametro_troca_eletronica": "",
  "intermediary_name": "",
  "intermediary_cnpj": "",
  "intermediary_city_id": "",
  "intermediary_street": "",
  "intermediary_number": "",
  "intermediary_complement": "",
  "intermediary_neighborhood": "",
  "integration_name": "",
  "integration_environment": "H",//Obrigatório
  "integration_client_id": "",
  "integration_client_secret": ""
}
```

#### `PUT` Contas (editar)
```
PUT /webservice/v1/contas/7
```

**Body:**
```json
{
  "conta": "Teste",//Alterando esse campo
  "tipo_conta": "C",
  "data_abertura": "19/06/2024",
  "saldo_abertura": "",
  "id_planejamento": "1",
  "filial_padrao": "1",
  "permitir_pag_saldo_negativo": "N",
  "ativo": "S",
  "id_planejamento_antigo": "",
  "cod_banco": "",
  "agencia": "",
  "agencia_dv": "",
  "numero_conta": "",
  "numero_conta_dv": "",
  "razao_banco": "",
  "cnpj": "",
  "suframa": "",
  "cep": "",
  "logradouro": "",
  "numero_residencia": "",
  "complemento": "",
  "bairro": "",
  "cidade": "",
  "operacao": "",
  "layout_conciliacao": "",
  "numero_cooperativa": "",
  "parametro_troca_eletronica": "",
  "intermediary_name": "",
  "intermediary_cnpj": "",
  "intermediary_city_id": "",
  "intermediary_street": "",
  "intermediary_number": "",
  "intermediary_complement": "",
  "intermediary_neighborhood": "",
  "integration_name": "",
  "integration_environment": "H",
  "integration_client_id": "",
  "integration_client_secret": ""
}
```

#### `DELETE` Contas (deletar)
```
DELETE /webservice/v1/contas/7
```

#### `GET` Condições de pagamento (listar)
```
GET /webservice/v1/condicoes_pagamento
```

**Body:**
```json
{
    "qtype" : "condicoes_pagamento.id",
    "query" : "1",
    "oper" : ">=",
    "page" : "1",
    "rp" : "2000",
    "sortname" : "condicoes_pagamento.id",
    "sortorder" : "desc"
}
```

#### `POST` Condições de pagamento (inserir)
```
POST /webservice/v1/condicoes_pagamento
```

**Body:**
```json
{
  "ativo": "S",//Obrigatório
  "nome": "Fiado",//Obrigatório
  "compra_venda": "A",//Obrigatório
  "tipo_pagamento": "",
  "ind_pag": "2",//Obrigatório
  "n_parcelas": "12",//Obrigatório
  "com_entrada": "N",//Obrigatório
  "tipo": "M",//Obrigatório
  "dia_fixo": "",
  "vencimento_personalizado": "",
  "desconto_max": "100.00",//Obrigatório
  "qtde_repeticoes_venda": "",
  "baixa_primeira": "",
  "ultima_atualizacao": ""
}
```

#### `PUT` Condições de pagamento (editar)
```
PUT /webservice/v1/condicoes_pagamento/49
```

**Body:**
```json
{
  "ativo": "S",
  "nome": "Fiado a mais",//alterando esse campo
  "compra_venda": "A",
  "tipo_pagamento": "",
  "ind_pag": "2",
  "n_parcelas": "12",
  "com_entrada": "N",
  "tipo": "M",
  "dia_fixo": "",
  "vencimento_personalizado": "",
  "desconto_max": "100.00",
  "qtde_repeticoes_venda": "",
  "baixa_primeira": "",
  "ultima_atualizacao": ""
}
```

#### `DELETE` Condições de pagamento (deletar)
```
DELETE /webservice/v1/condicoes_pagamento/49
```

#### `GET` Feriados (listar)
```
GET /webservice/v1/fn_feriados
```

**Body:**
```json
{
    "qtype" : "fn_feriados.id",
    "query" : "1",
    "oper" : ">=",
    "page" : "1",
    "rp" : "2000",
    "sortname" : "fn_feriados.id",
    "sortorder" : "desc"
}
```

#### `POST` Feriados (inserir)
```
POST /webservice/v1/fn_feriados
```

**Body:**
```json
{//Todos os campos são obrigatórios
  "descricao": "Dia do Trabalhador",
  "data": "19/06/2024"
}
```

#### `PUT` Feriados (editar)
```
PUT /webservice/v1/fn_feriados/69
```

**Body:**
```json
{
  "descricao": "Dia do TT",//Alterando esse campo
  "data": "19/06/2024"
}
```

#### `DELETE` Feriados (deletar)
```
DELETE /webservice/v1/fn_feriados/69
```

#### `GET` Motivos de cancelamento (listar)
```
GET /webservice/v1/fn_areceber_mot_cancelamento
```

**Body:**
```json
{
    "qtype" : "fn_areceber_mot_cancelamento.id",
    "query" : "1",
    "oper" : ">=",
    "page" : "1",
    "rp" : "2000",
    "sortname" : "fn_areceber_mot_cancelamento.id",
    "sortorder" : "desc"
}
```

#### `POST` Motivos de cancelamento (inserir)
```
POST /webservice/v1/fn_areceber_mot_cancelamento
```

**Body:**
```json
{
  "ativo": "",
  "motivo": "Cancelamento de Teste",//Obrigatório
  "id_conta": "1",//Obrigatório
  "libera_periodo": "S",//Obrigatório
  "inadimplencia": "",
  "nao_vencidos_inadimplencia": "",
  "finalidade": ""
}
```

#### `PUT` Motivos de cancelamento (editar)
```
PUT /webservice/v1/fn_areceber_mot_cancelamento/3
```

**Body:**
```json
{
  "ativo": "",
  "motivo": "Cancelamento 01",//Alterando esse campo
  "id_conta": "1",
  "libera_periodo": "S",
  "inadimplencia": "",
  "nao_vencidos_inadimplencia": "",
  "finalidade": ""
}
```

#### `DELETE` Motivos de cancelamento (deletar)
```
DELETE /webservice/v1/fn_areceber_mot_cancelamento/3
```

### 📁 Locais

#### `GET` Cidade (listar)
```
GET /webservice/v1/cidade
```

**Body:**
```json
{
    "qtype" : "cidade.id",
    "query" : "1",
    "oper" : ">=",
    "page" : "1",
    "rp" : "2000",
    "sortname" : "cidade.id",
    "sortorder" : "desc"
}
```

#### `DELETE` Cidade (deletar)
```
DELETE /webservice/v1/cidade/1
```

#### `GET` UF (listar)
```
GET /webservice/v1/uf
```

**Body:**
```json
{
    "qtype" : "uf.id",
    "query" : "1",
    "oper" : ">=",
    "page" : "1",
    "rp" : "2000",
    "sortname" : "uf.id",
    "sortorder" : "desc"
}
```

#### `DELETE` UF (deletar)
```
DELETE /webservice/v1/uf/69
```

#### `GET` País (listar)
```
GET /webservice/v1/pais
```

**Body:**
```json
{
    "qtype" : "pais.id",
    "query" : "1",
    "oper" : ">=",
    "page" : "1",
    "rp" : "2000",
    "sortname" : "pais.id",
    "sortorder" : "desc"
}
```

#### `DELETE` País (deletar)
```
DELETE /webservice/v1/pais/69
```

### 📁 TV/SVA

#### `GET` Login TV (listar)
```
GET /webservice/v1/tv_usuarios
```

**Body:**
```json
{
    "qtype" : "tv_usuarios.id",
    "query" : "1",
    "oper" : ">=",
    "page" : "1",
    "rp" : "2000",
    "sortname" : "tv_usuarios.id",
    "sortorder" : "desc"
}
```

#### `DELETE` Login TV (deletar)
```
DELETE /webservice/v1/tv_usuarios/69
```

#### `POST` Apptec (inserir)
```
POST /webservice/v1/tv_usuarios
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"apptec",
    "connection_type_tv":"",
    "account_id":"",
    "id_login_plataforma":""
}
```

#### `PUT` Apptec (editar)
```
PUT /webservice/v1/tv_usuarios/69
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"apptec",
    "connection_type_tv":"",
    "account_id":"",
    "id_login_plataforma":""
}
```

#### `POST` EiTV (inserir)
```
POST /webservice/v1/tv_usuarios
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"eiTv",
    "connection_type_tv":"",
    "id_vd_contratos_produtos":"",
    "usar_email_principal":"",
    "login":"",
    "senha":"",
    "account_number":"",
    "online":""
}
```

#### `PUT` EiTV (editar)
```
PUT /webservice/v1/tv_usuarios/69
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"eiTv",
    "connection_type_tv":"",
    "id_vd_contratos_produtos":"",
    "usar_email_principal":"",
    "login":"",
    "senha":"",
    "account_number":"",
    "online":""
}
```

#### `POST` GloboPlay (inserir)
```
POST /webservice/v1/tv_usuarios
```

**Body:**
```json
{
    "plataforma":"globoplay",
    "connection_type_tv":""
}
```

#### `PUT` GloboPlay (editar)
```
PUT /webservice/v1/tv_usuarios/69
```

**Body:**
```json
{
    "plataforma":"globoplay",
    "connection_type_tv":""
}
```

#### `POST` Hub Neo (inserir)
```
POST /webservice/v1/tv_usuarios
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"hubNeo",
    "connection_type_tv":"",
    "account_id":"",
    "usar_email_principal":"",
    "login":"",
    "senha":"",
}
```

#### `PUT` Hub Neo (editar)
```
PUT /webservice/v1/tv_usuarios/69
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"hubNeo",
    "connection_type_tv":"",
    "account_id":"",
    "usar_email_principal":"",
    "login":"",
    "senha":"",
}
```

#### `POST` Hub Neo - DirectTvGo (inserir)
```
POST /webservice/v1/tv_usuarios
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"hubNeoDirectvGo",
    "connection_type_tv":"",
    "id_vd_contratos_produtos":"",
    "id_login_plataforma":"",
    "account_number":"",
    "online":""
}
```

#### `PUT` Hub Neo - DirectTvGo (editar)
```
PUT /webservice/v1/tv_usuarios/69
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"hubNeoDirectvGo",
    "connection_type_tv":"",
    "id_vd_contratos_produtos":"",
    "id_login_plataforma":"",
    "account_number":"",
    "online":""
}
```

#### `POST` ITTV (inserir)
```
POST /webservice/v1/tv_usuarios
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"ITTV",
    "connection_type_tv":"",

    "id_vd_contratos_produtos":"",
    "usar_email_principal":"",
    "login":"",
    "senha":""
}
```

#### `PUT` ITTV (editar)
```
PUT /webservice/v1/tv_usuarios/69
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"ITTV",
    "connection_type_tv":"",

    "id_vd_contratos_produtos":"",
    "usar_email_principal":"",
    "login":"",
    "senha":""
}
```

#### `POST` Minerva (inserir)
```
POST /webservice/v1/tv_usuarios
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"minerva",
    "connection_type_tv":"",

    "account_id":"",
    "id_login_plataforma":""
}
```

#### `PUT` Minerva (editar)
```
PUT /webservice/v1/tv_usuarios/69
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"minerva",
    "connection_type_tv":"",

    "account_id":"",
    "id_login_plataforma":""
}
```

#### `POST` Ministra (inserir)
```
POST /webservice/v1/tv_usuarios
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"ministra",
    "connection_type_tv":"",

    "id_vd_contratos_produtos":"",
    "login":"",
    "senha":"",
    "mac_devices":"",
    "id_dealer":"",
    "version":"",
    "ip":"",
    "online":""
}
```

#### `PUT` Ministra (editar)
```
PUT /webservice/v1/tv_usuarios/69
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"ministra",
    "connection_type_tv":"",

    "id_vd_contratos_produtos":"",
    "login":"",
    "senha":"",
    "mac_devices":"",
    "id_dealer":"",
    "version":"",
    "ip":"",
    "online":""
}
```

#### `POST` Ministra - novo (inserir)
```
POST /webservice/v1/tv_usuarios
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"ministrav2",
    "connection_type_tv":"",
    "api":"A",

    "id_vd_contratos_produtos":"",
    "login":"",
    "senha":"",
    "account_number":"",
    "online":""
}
```

#### `PUT` Ministra - novo (editar)
```
PUT /webservice/v1/tv_usuarios/69
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"ministrav2",
    "connection_type_tv":"",
    "api":"A",

    "id_vd_contratos_produtos":"",
    "login":"",
    "senha":"",
    "account_number":"",
    "online":""
}
```

#### `POST` MultTV (inserir)
```
POST /webservice/v1/tv_usuarios
```

**Body:**
```json
{
    "plataforma":"multTv",
    "connection_type_tv":"",

    "id_vd_contratos_produtos":"",
    "pin":"",
    "login":"",
    "senha":"",
    "account_number":"",
    "online":""
}
```

#### `PUT` MultTV (editar)
```
PUT /webservice/v1/tv_usuarios/69
```

**Body:**
```json
{
    "plataforma":"multTv",
    "connection_type_tv":"",

    "id_vd_contratos_produtos":"",
    "pin":"",
    "login":"",
    "senha":"",
    "account_number":"",
    "online":""
}
```

#### `POST` NxPlay (inserir)
```
POST /webservice/v1/tv_usuarios
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"NxPlay",
    "connection_type_tv":"",

    "id_vd_contratos_produtos":"",
    "usar_email_principal":"",
    "login":"",
    "senha":""
}
```

#### `PUT` NxPlay (editar)
```
PUT /webservice/v1/tv_usuarios/69
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"NxPlay",
    "connection_type_tv":"",

    "id_vd_contratos_produtos":"",
    "usar_email_principal":"",
    "login":"",
    "senha":""
}
```

#### `POST` Olé TV (inserir)
```
POST /webservice/v1/tv_usuarios
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"oletv",
    "connection_type_tv":"",

    "id_vd_contratos_produtos":"",
    "usar_email_principal":"",
    "login":"",
    "mac_devices":"",
    "account_number":"",
    "id_equipamentos":"",
    "online":""
}
```

#### `PUT` Olé TV (editar)
```
PUT /webservice/v1/tv_usuarios/69
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"oletv",
    "connection_type_tv":"",

    "id_vd_contratos_produtos":"",
    "usar_email_principal":"",
    "login":"",
    "mac_devices":"",
    "account_number":"",
    "id_equipamentos":"",
    "online":""
}
```

#### `POST` Panacess (inserir)
```
POST /webservice/v1/tv_usuarios
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"panaccess",
    "connection_type_tv":"",

    "id_integracao":"",
    "account_id":""
}
```

#### `PUT` Panacess (editar)
```
PUT /webservice/v1/tv_usuarios/69
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"panaccess",
    "connection_type_tv":"",

    "id_integracao":"",
    "account_id":""
}
```

#### `POST` Ativar usuário Playhub
```
POST /webservice/v1/ativar_usuario_playhub
```

**Body:**
```json
{
    "get_id": "22"//ID Usuário TV
}
```

#### `POST` Desativar usuário Playhub
```
POST /webservice/v1/desativar_usuario_playhub
```

**Body:**
```json
{
    "get_id": "22"//ID Usuário TV
}
```

#### `POST` PlayHub (inserir)
```
POST /webservice/v1/tv_usuarios
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"playhub",
    "api":"",
    "connection_type_tv":"",

    "login":"",
    "senha":"",
    "status_assinante_watch":""
}
```

#### `PUT` PlayHub (editar)
```
PUT /webservice/v1/tv_usuarios/69
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"playhub",
    "api":"",
    "connection_type_tv":"",

    "login":"",
    "senha":"",
    "status_assinante_watch":""
}
```

#### `POST` Smart Tube (inserir)
```
POST /webservice/v1/tv_usuarios
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"SmartTUBE",
    "connection_type_tv":"",

    "account_id":"",
    "pin":"",
    "login":"",
    "senha":"",
    "status_assinante_watch":"",
    "device_limit_id":""
}
```

#### `PUT` Smart Tube (editar)
```
PUT /webservice/v1/tv_usuarios/69
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"SmartTUBE",
    "connection_type_tv":"",

    "account_id":"",
    "pin":"",
    "login":"",
    "senha":"",
    "status_assinante_watch":"",
    "device_limit_id":""
}
```

#### `POST` TelecinePlay (inserir)
```
POST /webservice/v1/tv_usuarios
```

**Body:**
```json
{
    "plataforma":"telecineplay",
    "connection_type_tv":""
}
```

#### `PUT` TelecinePlay (editar)
```
PUT /webservice/v1/tv_usuarios/69
```

**Body:**
```json
{
    "plataforma":"telecineplay",
    "connection_type_tv":""
}
```

#### `POST` Watch (inserir)
```
POST /webservice/v1/tv_usuarios
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"watch",
    "api":"A",
    "connection_type_tv":"",

    "id_vd_contratos_produtos":"",
    "usar_email_principal":"",
    "login":"",
    "token_assinante_watch":"",
    "status_assinante_watch":""
}
```

#### `PUT` Watch (editar)
```
PUT /webservice/v1/tv_usuarios/69
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"watch",
    "api":"A",
    "connection_type_tv":"",

    "id_vd_contratos_produtos":"",
    "usar_email_principal":"",
    "login":"",
    "token_assinante_watch":"",
    "status_assinante_watch":""
}
```

#### `POST` Watch/Espn (inserir)
```
POST /webservice/v1/tv_usuarios
```

**Body:**
```json
{
    "plataforma":"watchespn",
    "connection_type_tv":""
}
```

#### `PUT` Watch/Espn (editar)
```
PUT /webservice/v1/tv_usuarios/69
```

**Body:**
```json
{
    "plataforma":"watchespn",
    "connection_type_tv":""
}
```

#### `POST` YouCast (inserir)
```
POST /webservice/v1/tv_usuarios
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"youCast",
    "api":"A",
    "connection_type_tv":"",

    "account_id":"",
    "usar_email_principal":"",
    "profile_name":"",
    "pin":"",
    "birthday":"",
    "login":"",
    "senha":"",
    "status_assinante_watch":"",
    "id_portal":"",
    "mac_devices":"",
    "id_dealer":""
}
```

#### `PUT` YouCast (editar)
```
PUT /webservice/v1/tv_usuarios/69
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"youCast",
    "api":"A",
    "connection_type_tv":"",

    "account_id":"",
    "usar_email_principal":"",
    "profile_name":"",
    "pin":"",
    "birthday":"",
    "login":"",
    "senha":"",
    "status_assinante_watch":"",
    "id_portal":"",
    "mac_devices":"",
    "id_dealer":""
}
```

#### `GET` Login SVA (listar)
```
GET /webservice/v1/sva_usuarios
```

**Body:**
```json
{
    "qtype" : "sva_usuarios.id",
    "query" : "1",
    "oper" : ">=",
    "page" : "1",
    "rp" : "2000",
    "sortname" : "sva_usuarios.id",
    "sortorder" : "desc"
}
```

#### `POST` Campsoft (inserir)
```
POST /webservice/v1/sva_usuarios
```

**Body:**
```json
{
    "id_contrato":"",//ID do Contrato
    "id_integracao":"",//ID da Integração
    "usar_email":"S",//Usar dados cadastro? S=sim e N=não
    "user":"",//Usuário
    "senha":"",//Senha
    "status_integracao":"",//Status Integração - A=ativo, B=bloqueado, D=desativado
    "user_id":"",//Usuário Integração - Não preencher
    "subscription_id":""//Subscription ID - Não preencher
}
```

#### `POST` GugoTv (inserir)
```
POST /webservice/v1/sva_usuarios
```

**Body:**
```json
{
    "id_contrato": "", //ID do Contrato
    "id_integracao": "", //ID da Integração
    "id_produto_contrato": "", //ID do Produto do Contrato
    "usar_email": "S", //Usar dados cadastro? S=sim e N=não
    "user": "", //Usuário
    "user_id": "" //Usuário Integração - Não preencher
}
```

#### `POST` Hexa (inserir)
```
POST /webservice/v1/sva_usuarios
```

**Body:**
```json
{
    "id_contrato": "", //ID do Contrato
    "id_integracao": "", //ID da Integração
    "id_produto_contrato": "", //ID do Produto do Contrato
    "usar_email": "S", //Usar dados cadastro? S=sim e N=não
    "cnpj_cpf": "", //CNPJ/CPF
    "user": "", //Usuário
    "status_integracao": "", //Status Integração - A=ativo, B=bloqueado, D=desativado
    "msisdn": "" //Telefone
}
```

#### `POST` Music (inserir)
```
POST /webservice/v1/sva_usuarios
```

**Body:**
```json
{
    "id_contrato": "", //ID do Contrato
    "id_integracao": "", //ID da Integração
    "id_produto_contrato": "", //ID do Produto do Contrato
    "usar_email": "S", //Usar dados cadastro? S=sim e N=não
    "user": "", //Usuário
    "msisdn": "", //Telefone
    "senha": "", //Senha
    "user_id": "" //Usuário Integração - Não preencher
}
```

#### `POST` Skeelo (inserir)
```
POST /webservice/v1/sva_usuarios
```

**Body:**
```json
{
    "id_contrato": "", //ID do Contrato
    "id_integracao": "", //ID da Integração
    "id_produto_contrato": "", //ID do Produto do Contrato
    "usar_email": "S", //Usar dados cadastro? S=sim e N=não
    "cnpj_cpf": "", //CNPJ/CPF - Com pontos e hífen
    "status_integracao": "", //Status Integração - A=ativo, B=bloqueado, D=desativado
    "user_id": "" //Usuário Integração - Não preencher
}
```

## Contabilidade

#### `GET` Contabilidade (listar)
```
GET /webservice/v1/fn_movim_finan
```

**Body:**
```json
{
    "qtype" : "fn_movim_finan.id",
    "query" : "1",
    "oper" : ">=",
    "page" : "1",
    "rp" : "2000",
    "sortname" : "fn_movim_finan.id",
    "sortorder" : "desc"
}
```

#### `POST` Contabilidade (inserir)
```
POST /webservice/v1/fn_movim_finan
```

**Body:**
```json
{
  "id_conta": "364",//Obrigatório
  "data": "21/06/2024",//Obrigatório
  "data2": "",
  "documento": "",
  "debito": "",
  "credito": "",
  "historico": "Pagamentos adendos API",//Obrigatório
  "historico2": "",
  "tipo_lanc": "",
  "id_movim_finan": "",
  "id_entrada": "",
  "id_saida": "",
  "ultima_atualizacao": ""
}
```

#### `PUT` Contabilidade (editar)
```
PUT /webservice/v1/fn_movim_finan/2
```

**Body:**
```json
{
  "id_conta": "364",
  "data": "21/06/2024",
  "data2": "",
  "documento": "",
  "debito": "",
  "credito": "",
  "historico": "API",//Alterando esse campo
  "historico2": "",
  "tipo_lanc": "",
  "id_movim_finan": "",
  "id_entrada": "",
  "id_saida": "",
  "ultima_atualizacao": ""
}
```

#### `DELETE` Contabilidade (deletar)
```
DELETE /webservice/v1/fn_movim_finan/2
```

## Empresa

### Empresa

#### `GET` Empresa (listar)
```
GET /webservice/v1/empresa
```

**Body:**
```json
{
    "qtype": "empresa.id",
    "query": "1",
    "oper": ">=",
    "page": "1",
    "rp": "1000",
    "sortname": "empresa.id",
    "sortorder": "desc"
}
```

#### `POST` Empresa (inserir)
```
POST /webservice/v1/empresa
```

**Body:**
```json
{
  "razao": "Teste API",//Obrigatório
  "logomarca": "",
  "logo_docs": "",
  "logo_recibo": "",
  "logo_autenticacao_tv": "",
  "sped_indicador_natureza_pessoa_juridica":""
}
```

#### `PUT` Empresa (editar)
```
PUT /webservice/v1/empresa/11
```

**Body:**
```json
{
  "razao": "Teste alterando API",//Alterando esse campo
  "logomarca": "",
  "logo_docs": "",
  "logo_recibo": "",
  "logo_autenticacao_tv": "",
  "sped_indicador_natureza_pessoa_juridica":""
}
```

#### `DELETE` Empresa (deletar)
```
DELETE /webservice/v1/empresa/11
```

### Filiais

#### `GET` Filial (listar)
```
GET /webservice/v1/filial
```

**Body:**
```json
{
    "qtype": "filial.id",
    "query": "1",
    "oper": ">=",
    "page": "1",
    "rp": "1000",
    "sortname": "filial.id",
    "sortorder": "desc"
}
```

#### `POST` Filial (inserir)
```
POST /webservice/v1/filial
```

**Body:**
```json
{
    "ativo": "",
    "id_empresa": "",
    "razao": "",
    "fantasia": "",
    "logo": "",
    "email": "",
    "site": "",
    "tipo_pessoa": "",
    "cnpj": "",
    "ie": "",
    "iest": "",
    "im": "",
    "cnae": "",
    "cnae_complementar": "",
    "id_cnae": "",
    "rt": "",
    "ato_anatel": "",
    "sici_numero_fistel": "",
    "contato": "",
    "numero_eot": "",
    "identificador_na_febraban": "",
    "cor_mapa": "",
    "cidade": "",
    "bairro": "",
    "endereco": "",
    "numero": "",
    "cep": "",
    "complemento": "",
    "latitude": "",
    "longitude": "",
    "telefone": "",
    "telefone1": "",
    "ramal": "",
    "whatsapp": "",
    "fax": "",
    "desc_auxiliar_fone_os": "",
    "facebook": "",
    "nfe_ambiente": "",
    "nfe_formato_imp": "",
    "nfe_canhoto": "",
    "nfe_certificado": "",
    "nfe_chave": "",
    "nfe_inf_complementar": "",
    "importar_dfe_automaticamente": "",
    "nfce_id_token": "",
    "nfce_csc": "",
    "nfe_id_email_envio_cliente": "",
    "nfe_id_envio_email_fornecedor": "",
    "nfe_envia_pdf_email": "",
    "nfe_envia_xml_email": "",
    "nfe_email": "",
    "nfe_email_senha": "",
    "nfse_padrao": "",
    "nfse_url_servico": "",
    "usuario_nfse": "",
    "nfse_senha_acesso": "",
    "token": "",
    "nfse_client_id": "",
    "nfse_client_secret": "",
    "nfse_cod_cidade": "",
    "nfse_aedf": "",
    "nfse_cfps": "",
    "id_rps_modelo_impressao": "",
    "opcao_simples": "",
    "rt_especial": "",
    "id_filial_isss_exig": "",
    "insentivo_cultural": "",
    "insentivo_fiscal": "",
    "inserir_inf_adic_contrato_descricao_servico": "",
    "background_cor": "",
    "logo_docs": "",
    "img_assinatura": "",
    "email_suporte": "",
    "enviar_email_suporte": "",
    "id_filial_doc_opcional": "",
    "id_filial_doc_opc2": "",
    "id_filial_doc_opc3": "",
    "id_filial_doc_opc4": "",
    "envia_email_assinatura_digital_contrato": "",
    "smtp_envio_email_assinatura_contrato_digital": "",
    "email_envio_contrato_assinado_filial": "",
    "contador_nome": "",
    "contador_cnpj": "",
    "contador_cpf": "",
    "contador_crc": "",
    "contador_uf": "",
    "contador_cep": "",
    "contador_cidade": "",
    "contador_endereco": "",
    "contador_numero": "",
    "contador_complemento": "",
    "contador_bairro": "",
    "contador_telefone": "",
    "contador_fax": "",
    "contador_email": "",
    "envia_anexo_pdf": "",
    "id_envio_email_personalizado": "",
    "id_integracao_serasa": "",
    "integracao_assinatura_digital": "",
    "tv_id_regiao": "",
    "id_canal_venda_marketing": "",
    "token_rdstation": ""
}
```

#### `PUT` Filial (editar)
```
PUT /webservice/v1/filial/11
```

**Body:**
```json
{
    "ativo": "",
    "id_empresa": "",
    "razao": "",
    "fantasia": "",
    "logo": "",
    "email": "",
    "site": "",
    "tipo_pessoa": "",
    "cnpj": "",
    "ie": "",
    "iest": "",
    "im": "",
    "cnae": "",
    "cnae_complementar": "",
    "id_cnae": "",
    "rt": "",
    "ato_anatel": "",
    "sici_numero_fistel": "",
    "contato": "",
    "numero_eot": "",
    "identificador_na_febraban": "",
    "cor_mapa": "",
    "cidade": "",
    "bairro": "",
    "endereco": "",
    "numero": "",
    "cep": "",
    "complemento": "",
    "latitude": "",
    "longitude": "",
    "telefone": "",
    "telefone1": "",
    "ramal": "",
    "whatsapp": "",
    "fax": "",
    "desc_auxiliar_fone_os": "",
    "facebook": "",
    "nfe_ambiente": "",
    "nfe_formato_imp": "",
    "nfe_canhoto": "",
    "nfe_certificado": "",
    "nfe_chave": "",
    "nfe_inf_complementar": "",
    "importar_dfe_automaticamente": "",
    "nfce_id_token": "",
    "nfce_csc": "",
    "nfe_id_email_envio_cliente": "",
    "nfe_id_envio_email_fornecedor": "",
    "nfe_envia_pdf_email": "",
    "nfe_envia_xml_email": "",
    "nfe_email": "",
    "nfe_email_senha": "",
    "nfse_padrao": "",
    "nfse_url_servico": "",
    "usuario_nfse": "",
    "nfse_senha_acesso": "",
    "token": "",
    "nfse_client_id": "",
    "nfse_client_secret": "",
    "nfse_cod_cidade": "",
    "nfse_aedf": "",
    "nfse_cfps": "",
    "id_rps_modelo_impressao": "",
    "opcao_simples": "",
    "rt_especial": "",
    "id_filial_isss_exig": "",
    "insentivo_cultural": "",
    "insentivo_fiscal": "",
    "inserir_inf_adic_contrato_descricao_servico": "",
    "background_cor": "",
    "logo_docs": "",
    "img_assinatura": "",
    "email_suporte": "",
    "enviar_email_suporte": "",
    "id_filial_doc_opcional": "",
    "id_filial_doc_opc2": "",
    "id_filial_doc_opc3": "",
    "id_filial_doc_opc4": "",
    "envia_email_assinatura_digital_contrato": "",
    "smtp_envio_email_assinatura_contrato_digital": "",
    "email_envio_contrato_assinado_filial": "",
    "contador_nome": "",
    "contador_cnpj": "",
    "contador_cpf": "",
    "contador_crc": "",
    "contador_uf": "",
    "contador_cep": "",
    "contador_cidade": "",
    "contador_endereco": "",
    "contador_numero": "",
    "contador_complemento": "",
    "contador_bairro": "",
    "contador_telefone": "",
    "contador_fax": "",
    "contador_email": "",
    "envia_anexo_pdf": "",
    "id_envio_email_personalizado": "",
    "id_integracao_serasa": "",
    "integracao_assinatura_digital": "",
    "tv_id_regiao": "",
    "id_canal_venda_marketing": "",
    "token_rdstation": ""
}
```

#### `DELETE` Filial (deletar)
```
DELETE /webservice/v1/filial/11
```

## Entradas

### Compras

#### `GET` Compra (listar)
```
GET /webservice/v1/entrada
```

**Body:**
```json
{
"qtype": "entrada.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "entrada.id",
"sortorder": "desc"
}
```

#### `POST` Compra (inserir)
```
POST /webservice/v1/entrada
```

**Body:**
```json
{
  "tipo_documento": "201",//Obrigatório
  "id_fornecedor": "1",//Obrigatório
  "arquivo_xml": "",
  "condicoes_pagamento": "1",//Obrigatório
  "documento": "",
  "filial_id": "1",//Obrigatório
  "data_emissao": "20/06/2024",//Obrigatório
  "data_entrada": "20/06/2024",//Obrigatório
  "valor_total": "",
  "numero_nf": "",
  "modelo_nf": "",
  "serie": "",
  "gera_estoque": "N",//Obrigatório
  "status": "A",//Obrigatório
  "id_almox_padrao_tipo_doc": "",
  "tipo_calculo_tributacao": "",
  "tipo_entrada_compra": "",
  "nfe_emitida": "N",//Obrigatório
  "tipo_frete": "9",//Obrigatório
  "transportadora": "",
  "vipi_frete": "",
  "frete_volumes": "",
  "frete_especie": "",
  "frete_peso_bruto": "",
  "frete_peso_liquido": "",
  "vfrete": "",
  "icms_bc": "",
  "icms_valor": "",
  "icms_bc_st": "",
  "icms_valor_st": "",
  "fcp_bc_st": "",
  "fcp_valor_st": "",
  "ipi_valor": "",
  "vpis": "",
  "vcofins": "",
  "realizar_rateio_outras_despesas": "",
  "voutro": "",
  "nfe_chave": ""
}
```

#### `PUT` Compra (editar)
```
PUT /webservice/v1/entrada/9
```

**Body:**
```json
{
  "tipo_documento": "201",
  "id_fornecedor": "1",
  "arquivo_xml": "",
  "condicoes_pagamento": "1",
  "documento": "teste2024",//Alterando esse campo
  "filial_id": "1",
  "data_emissao": "20/06/2024",
  "data_entrada": "20/06/2024",
  "valor_total": "",
  "numero_nf": "",
  "modelo_nf": "",
  "serie": "",
  "gera_estoque": "N",
  "status": "A",
  "id_almox_padrao_tipo_doc": "",
  "tipo_calculo_tributacao": "",
  "tipo_entrada_compra": "",
  "nfe_emitida": "N",
  "tipo_frete": "9",
  "transportadora": "",
  "vipi_frete": "",
  "frete_volumes": "",
  "frete_especie": "",
  "frete_peso_bruto": "",
  "frete_peso_liquido": "",
  "vfrete": "",
  "icms_bc": "",
  "icms_valor": "",
  "icms_bc_st": "",
  "icms_valor_st": "",
  "fcp_bc_st": "",
  "fcp_valor_st": "",
  "ipi_valor": "",
  "vpis": "",
  "vcofins": "",
  "realizar_rateio_outras_despesas": "",
  "voutro": "",
  "nfe_chave": ""
}
```

#### `DELETE` Compra (deletar)
```
DELETE /webservice/v1/entrada/9
```

#### `GET` Pedido (listar)
```
GET /webservice/v1/entrada_pedido
```

**Body:**
```json
{
    "qtype" : "entrada_pedido.id",
    "query" : "1",
    "oper" : ">=",
    "page" : "1",
    "rp" : "2000",
    "sortname" : "entrada_pedido.id",
    "sortorder" : "desc"
}
```

#### `POST` Pedido (inserir)
```
POST /webservice/v1/entrada_pedido
```

**Body:**
```json
{
  "id_entrada": "9",
  "id_pedido": "1"
}
```

#### `GET` Produtos (listar)
```
GET /webservice/v1/movimento_produtos
```

**Body:**
```json
{
    "qtype" : "movimento_produtos.id_entrada",
    "query" : "1",
    "oper" : ">=",
    "page" : "1",
    "rp" : "2000",
    "sortname" : "movimento_produtos.id",
    "sortorder" : "desc"
}
```

#### `POST` Produtos (inserir)
```
POST /webservice/v1/movimento_produtos
```

**Body:**
```json
{
  "tipo_preenchimento_tributacao": "",
  "codigo_fornecedor": "",
  "descricao_fornecedor": "",
  "id_produto": "36",//Obrigatório
  "descricao": "",
  "id_unidade": "2",//Obrigatório
  "id_almox": "1",//Obrigatório
  "quantidade": "",//Obrigatório
  "valor_unitario": "100",//Obrigatório
  "pdesconto": "",
  "valor_frete": "",
  "vdesconto": "",
  "valor_total": "100",//Obrigatório
  "id_itens_pedido": "",
  "estoque": "S",//Obrigatório
  "id_entrada": "9",//Obrigatório
  "id_pedido_compra": "",
  "id_pedido_compra_itens": "",
  "tipo": "E",//Obrigatório
  "qtde_saida": "",
  "id_inventario": "",
  "data": "",
  "filial_id": "",
  "fator_conversao": "",
  "unidade_sigla": "MC",//Obrigatório
  "id_negociacao": "",
  "tipo_produto": "",
  "id_transf_almox_item": "",
  "id_moeda": "",
  "id_estrutura": "",
  "imobilizado": "",
  "eh_importacao_xml": "",
  "ultima_atualizacao": "",
  "id_saida": "",
  "id_class_fiscal": "",
  "cfop": "",
  "ncm": "",
  "valor_icm": "",
  "valor_ipi": "",
  "iss_valor": "",
  "valor_icms_st": "",
  "valor_fcp_st": "",
  "valor_outros": ""
}
```

#### `PUT` Produtos (editar)
```
PUT /webservice/v1/movimento_produtos/9
```

**Body:**
```json
{
  "tipo_preenchimento_tributacao": "",
  "codigo_fornecedor": "",
  "descricao_fornecedor": "",
  "id_produto": "36",
  "descricao": "teste produto",//Alterando esse campo
  "id_unidade": "2",
  "id_almox": "1",
  "quantidade": "",
  "valor_unitario": "100",
  "pdesconto": "",
  "valor_frete": "",
  "vdesconto": "",
  "valor_total": "100",
  "id_itens_pedido": "",
  "estoque": "S",
  "id_entrada": "9",
  "id_pedido_compra": "",
  "id_pedido_compra_itens": "",
  "tipo": "E",
  "qtde_saida": "",
  "id_inventario": "",
  "data": "",
  "filial_id": "",
  "fator_conversao": "",
  "unidade_sigla": "MC",
  "id_negociacao": "",
  "tipo_produto": "",
  "id_transf_almox_item": "",
  "id_moeda": "",
  "id_estrutura": "",
  "imobilizado": "",
  "eh_importacao_xml": "",
  "ultima_atualizacao": "",
  "id_saida": "",
  "id_class_fiscal": "",
  "cfop": "",
  "ncm": "",
  "valor_icm": "",
  "valor_ipi": "",
  "iss_valor": "",
  "valor_icms_st": "",
  "valor_fcp_st": "",
  "valor_outros": ""
}
```

#### `DELETE` Produtos (deletar)
```
DELETE /webservice/v1/movimento_produtos/9
```

#### `GET` Contabilidade (listar)
```
GET /webservice/v1/fn_movim_finan
```

**Body:**
```json
{
    "qtype" : "fn_movim_finan.id_entrada",
    "query" : "1",
    "oper" : ">=",
    "page" : "1",
    "rp" : "2000",
    "sortname" : "fn_movim_finan.id",
    "sortorder" : "desc"
}
```

#### `POST` Contabilidade (inserir)
```
POST /webservice/v1/fn_movim_finan
```

**Body:**
```json
{
  "id_conta": "1",//Obrigatório
  "data": "20/06/2024",//Obrigatório
  "data2": "",
  "documento": "",
  "debito": "",
  "credito": "",
  "historico": "Teste",//Obrigatório
  "historico2": "",
  "tipo_lanc": "",
  "id_movim_finan": "",
  "id_entrada": "9",//Obrigatório
  "id_saida": "",
  "ultima_atualizacao": ""
}
```

#### `PUT` Contabilidade (editar)
```
PUT /webservice/v1/fn_movim_finan/44241
```

**Body:**
```json
{
  "id_conta": "1",
  "data": "20/06/2024",
  "data2": "",
  "documento": "",
  "debito": "",
  "credito": "",
  "historico": "2024 Fiann",//Alterando esse campo
  "historico2": "",
  "tipo_lanc": "",
  "id_movim_finan": "",
  "id_entrada": "9",
  "id_saida": "",
  "ultima_atualizacao": ""
}
```

#### `DELETE` Contabilidade (deletar)
```
DELETE /webservice/v1/fn_movim_finan/44241
```

### Requisição de compra

#### `GET` Requisição (listar)
```
GET /webservice/v1/requisicao_compra
```

**Body:**
```json
{
"qtype": "requisicao_compra.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "requisicao_compra.id",
"sortorder": "desc"
}
```

#### `POST` Requisição (inserir)
```
POST /webservice/v1/requisicao_compra
```

**Body:**
```json
{
  "filial_id": "1",//Obrigatório
  "data": "20/06/2024",//Obrigatório
  "necessito_ate": "",
  "descricao": "Teste",//Obrigatório
  "funcionario": "1",//Obrigatório
  "id_setor": "",
  "status": "",
  "status_liberacao_compra": "",
  "obs": "",
  "descricao_cancelamento": ""
}
```

#### `PUT` Requisição (editar)
```
PUT /webservice/v1/requisicao_compra/3
```

**Body:**
```json
{
  "filial_id": "1",
  "data": "20/06/2024",
  "necessito_ate": "",
  "descricao": "Teste Requisicao de compra teste",//Alterando esse campo
  "funcionario": "1",
  "id_setor": "",
  "status": "",
  "status_liberacao_compra": "",
  "obs": "",
  "descricao_cancelamento": ""
}
```

#### `DELETE` Requisição (deletar)
```
DELETE /webservice/v1/requisicao_compra/3
```

#### `GET` Produtos (listar)
```
GET /webservice/v1/requisicao_compra_itens
```

**Body:**
```json
{
"qtype": "requisicao_compra_itens.id",
"query": "19",
"oper": "=",
"page": "1",
"rp": "1000",
"sortname": "requisicao_compra_itens.id",
"sortorder": "desc"
}
```

#### `POST` Produtos (inserir)
```
POST /webservice/v1/requisicao_compra_itens
```

**Body:**
```json
{
  "id_produto": "531",//Obrigatório
  "descricao_produto": "",
  "id_unidade": "2",//Obrigatório
  "qtde": "1.000000000",//Obrigatório
  "id_pedido": "",
  "id_requisicao": "19",//Obrigatório
  "id_requisicao_material_item": ""
}
```

#### `PUT` Produtos (editar)
```
PUT /webservice/v1/requisicao_compra_itens/28
```

**Body:**
```json
{
  "id_produto": "531",
  "descricao_produto": "Teste de API",//Alterando esse campo
  "id_unidade": "2",
  "qtde": "1.000000000",
  "id_pedido": "",
  "id_requisicao": "19",
  "id_requisicao_material_item": ""
}
```

#### `DELETE` Produtos (deletar)
```
DELETE /webservice/v1/requisicao_compra_itens/22
```

#### `POST` Liberar requisição
```
POST /webservice/v1/liberar_requisicao_compra
```

**Body:**
```json
{
    "get_id":"20" // ID da requisição
}
```

#### `PUT` Cancelar requisição
```
PUT /webservice/v1/requisicao_compra_cancelar/123
```

**Body:**
```json
{
    "descricao_cancelamento": "Cancelamento teste API"
}

//ID 123 é o id da Requisicao de compra
```

### Pedido de compra

#### `GET` Pedido (listar)
```
GET /webservice/v1/pedido_compra
```

**Body:**
```json
{
"qtype": "pedido_compra.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "pedido_compra.id",
"sortorder": "desc"
}
```

#### `POST` Pedido (inserir)
```
POST /webservice/v1/pedido_compra
```

**Body:**
```json
{
  "data": "20/06/2024",//Obrigatório
  "id_fornecedor": "1",//Obrigatório
  "filial_id": "",
  "previsao_entrega": "",
  "status": "",
  "id_condicoes_pagamento": "1",//Obrigatório
  "previsao_faturamento": "",
  "tipo_desconto": "",
  "valor_desconto": "",
  "valor_negociado": "",
  "tipo_frete": "",
  "valor_frete": "",
  "obs": "",
  "status_liberado": "",
  "cancelamento_descricao": "",
  "data_liberacao": "",
  "id_colaborador": ""
}
```

#### `PUT` Pedido (editar)
```
PUT /webservice/v1/pedido_compra/2
```

**Body:**
```json
{
  "data": "20/06/2024",
  "id_fornecedor": "1",
  "filial_id": "",
  "previsao_entrega": "",
  "status": "A",//Alterando esse campo
  "id_condicoes_pagamento": "1",
  "previsao_faturamento": "",
  "tipo_desconto": "",
  "valor_desconto": "",
  "valor_negociado": "",
  "tipo_frete": "",
  "valor_frete": "",
  "obs": "Testes de API",//Alterando esse campo
  "status_liberado": "A",//Alterando esse campo
  "cancelamento_descricao": "",
  "data_liberacao": "",
  "id_colaborador": ""
}
```

#### `DELETE` Pedido (deletar)
```
DELETE /webservice/v1/pedido_compra/3
```

#### `GET` Produtos (listar)
```
GET /webservice/v1/pedido_compra_itens
```

**Body:**
```json
{
"qtype": "pedido_compra_itens.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "pedido_compra_itens.id",
"sortorder": "desc"
}
```

#### `POST` Produtos (inserir)
```
POST /webservice/v1/pedido_compra_itens
```

**Body:**
```json
{
  "id_produto": "1",//Obrigatório
  "descricao_alt": "",
  "id_unidade": "1",//Obrigatório
  "quantidade": "1",//Obrigatório
  "valor_unitario": "1.000000000",//Obrigatório
  "valor_total": "1.00",//Obrigatório
  "id_pedido_compra": "1",//Obrigatório
  "status": "A",//Obrigatório
  "observacao": "",
  "id_entrada": "",
  "tipo": "E",//Obrigatório
  "unidade_sigla": ""
}
```

#### `PUT` Produtos (editar)
```
PUT /webservice/v1/pedido_compra_itens/2
```

**Body:**
```json
{
  "id_produto": 49,
  "descricao_alt": "Samsung Galaxy",
  "id_unidade": 14,
  "quantidade": 1.00,
  "valor_unitario": 1.000000000,
  "valor_total": 1.00,
  "id_pedido_compra": 1,
  "status": "A",
  "observacao": "Teste",
  "id_entrada": "",
  "tipo": "E",
  "unidade_sigla": "UND"
}
```

#### `DELETE` Produtos (deletar)
```
DELETE /webservice/v1/pedido_compra_itens/3
```

#### `POST` Enviar pedido
```
POST /webservice/v1/enviar_pedido_fornecedor
```

**Body:**
```json
{
    "id":"11" // ID do pedido
}
```

#### `POST` Liberar Pedido
```
POST /webservice/v1/liberar_pedido
```

**Body:**
```json
{
    "get_id":"41"//ID de Pedido de Compra
}
```

#### `POST` Cancelar Pedido
```
POST /webservice/v1/pedido_compra_cancelar
```

**Body:**
```json
{
    "id": "2", //ID de Pedido de Compra
    "cancelamento_descricao": "Cancelamento de pedido"//Descrição do cancelamento
}
```

#### `GET` Imprimir
```
GET /webservice/v1/imprimir_pedido_compra
```

**Body:**
```json
{
    "id": "1" // ID do Pedido
}
```

#### `GET` Enviar pedido
```
GET /webservice/v1/enviar_pedido_fornecedor
```

**Body:**
```json
{
    "id": "1" // ID do Pedido
}
```

## Estoque

### Patrimônios

#### `GET` Patrimônios (listar)
```
GET /webservice/v1/patrimonio
```

**Body:**
```json
{
"qtype": "patrimonio.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "patrimonio.id",
"sortorder": "desc"
}
```

### Meu estoque

#### `GET` Saldo do estoque (listar)
```
GET /webservice/v1/estoque_produtos_almox_filial
```

**Body:**
```json
{
"qtype": "estoque_produtos_almox_filial.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "estoque_produtos_almox_filial.id",
"sortorder": "desc"
}
```

### Almoxarifados

#### `GET` Almoxarifados (listar)
```
GET /webservice/v1/almox
```

**Body:**
```json
{
"qtype": "almox.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "almox.id",
"sortorder": "desc"
}
```

#### `POST` Almoxarifados (inserir)
```
POST /webservice/v1/almox
```

**Body:**
```json
{//Todos os campos são obrigatórios
  "descricao": "almoxarifado API",
  "id_filial": "1",
  "ativo": "S",
  "requisitar_preferencialmente_de": "1"
}
```

#### `PUT` Almoxarifados (editar)
```
PUT /webservice/v1/almox/51
```

**Body:**
```json
{
  "descricao": "Almoxarifado API Teste de Alteração",//Alternado esse campo
  "id_filial": "1",
  "ativo": "S",
  "requisitar_preferencialmente_de": "1"
}
```

#### `DELETE` Almoxarifados (deletar)
```
DELETE /webservice/v1/almox/51
```

#### `GET` Estoque Max/Min (listar)
```
GET /webservice/v1/estoque_min_max_almox
```

**Body:**
```json
{
    "qtype": "estoque_min_max.id",
    "query": "1",
    "oper": ">=",
    "page": "1",
    "rp": "1000",
    "sortname": "estoque_min_max.id",
    "sortorder": "desc"
}
```

#### `POST` Estoque Max/Min (inserir)
```
POST /webservice/v1/estoque_min_max_almox
```

**Body:**
```json
{
            "id_produto": "50",//ID produto
            "status": "0",//Oculto
            "qtd_min": "1.00",//Mínimo
            "qtd_max": "5.00",//Máximo
            "id_almox": "1",//ID almoxarifado
            "requisitar_mutiplo_de": "0.00"//Quantidade Fixa
        }
```

#### `PUT` Estoque Max/Min (editar)
```
PUT /webservice/v1/estoque_min_max_almox/2
```

**Body:**
```json
{
            "id_produto": "50",
            "status": "0",
            "qtd_min": "1.00",
            "qtd_max": "6.00",
            "id_almox": "1",
            "requisitar_mutiplo_de": "0.00"
        }
```

#### `DELETE` Estoque Max/Min (deletar)
```
DELETE /webservice/v1/estoque_min_max_almox/2
```

### Requisitar materiais

#### `GET` Requisição (listar)
```
GET /webservice/v1/requisicao_material
```

**Body:**
```json
{
"qtype": "requisicao_material.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "requisicao_material.id",
"sortorder": "desc"
}
```

#### `POST` Requisição (inserir)
```
POST /webservice/v1/requisicao_material
```

**Body:**
```json
{
  "id_filial": "1",//Obrigatório
  "id_tecnico": "2",//Obrigatório
  "id_almox": "1",//Obrigatório
  "data": "26/06/2024",//Obrigatório
  "obs": "",
  "status": "",
  "pref_almox": "",
  "tipo": "",
  "id_mot_cancelamento": ""
}
```

#### `PUT` Requisição (editar)
```
PUT /webservice/v1/requisicao_material/5
```

**Body:**
```json
{
  "id_filial": "1",
  "id_tecnico": "2",
  "id_almox": "1",
  "data": "26/06/2024",
  "obs": "Teste de API",//Alterando esse campo
  "status": "",
  "pref_almox": "",
  "tipo": "",
  "id_mot_cancelamento": ""
}
```

#### `DELETE` Requisição (deletar)
```
DELETE /webservice/v1/requisicao_material/5
```

#### `GET` Produtos (listar)
```
GET /webservice/v1/requisicao_material_item
```

**Body:**
```json
{
"qtype": "requisicao_material_item.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "requisicao_material_item.id",
"sortorder": "desc"
}
```

#### `POST` Produtos (inserir)
```
POST /webservice/v1/requisicao_material_item
```

**Body:**
```json
{
  "id_requisicao": "3",//Obrigatório
  "id_produto": "5",//Obrigatório
  "descricao": "",
  "qtde": "1",//Obrigatório
  "status": "",
  "saldo_almox_solicitante": "",
  "id_usuario": ""
}
```

#### `PUT` Produtos (editar)
```
PUT /webservice/v1/requisicao_material_item/5
```

**Body:**
```json
{
  "id_filial": "1",
  "id_tecnico": "2",
  "id_almox": "1",
  "data": "26/06/2024",
  "obs": "Teste de API",//Alterando esse campo
  "status": "",
  "pref_almox": "",
  "tipo": "",
  "id_mot_cancelamento": ""
}
```

#### `DELETE` Produtos (deletar)
```
DELETE /webservice/v1/requisicao_material_item/5
```

#### `PUT` Cancelar requisição material
```
PUT /webservice/v1/cancelar_requisicao_material/{id_requisicao_material}
```

**Body:**
```json
{
    "data_cancelamento": "14/11/2024", //Data do cancelamento
    "id_mot_cancelamento": "1", //ID do Motivo de cancelamento
    "status": "C", //Status C=Cancelado
    "id_usuario_cancelamento": "1", //ID do Usuario (usuarios)
    "tipo_cancelamento": "API" //Valor padrão = API
}
```

### 📁 Transferências

#### `POST` 1. Retornar os almoxarifados do usuário
```
POST /webservice/v1/requisicao_devolucao_material_29200
```

**Body:**
```json
{
    "id_patrimonio": "9",//ID do Patrimônio
    "id_produto": "34",//ID do Produto
    "id_unidade": "1",//ID da Unidade
    "unidade_sigla": "UND",//Sigla da Unidade
    "qtde": "1.00000",//Quantidade
    "fator_conversao": "1.000000000",//Fator conversão
    "id_transf_almox": "5",//ID da Nova Transferência
    "tipo_produto":"P"
}

/* Após cadastrar, já é feito a transferência*/
```

#### `POST` 2. Nova transferência com confirmação
```
POST /webservice/v1/requisicao_devolucao_material
```

**Body:**
```json
{
    "id_funcionario": "1",//ID do Funcionário (funcionarios)
    "id_almox_origem": "1",//ID do Almoxarifado de Origem (almox)
    "id_filial_origem": "",//ID da Filial de Origem (filial)
    "id_funcionario_destino": "2",//ID do Funcionário (funcionarios)
    "id_almox_destino": "3",//ID do Almoxarifado de Origem (almox)
    "id_filial_destino": "",//ID da Filial de Origem (filial)
    "data": "01/11/2024",//Data da criação
    "data_confirmacao": "",//Data da confirmação (não preencher)
    "observacao": "",//Observação
    "status": "1"//Status da Transferência (Pro padrão 1, Valores: 1=Aberta, 2=Aguardando Confirmação, 3=Confirmada, 4=Cancelado)
}
```

#### `POST` 3. Inserir produto na transferência com conf.
```
POST /webservice/v1/itens_requisicao_devolucao_material
```

**Body:**
```json
{
    "id_requisicao_devolucao_material": "2",//ID da Transferência
    "id_produto": "35",//ID do Produto que não é patrimônio (produtos)
    "id_unidade": "1",//ID de Unidades do produto (produtos_unidades)
    "qtd": "1",//Quantidade de saída do produto
    "fator_conversao": "1.000000000",//Fator conversão do produto
    "tipo_produto": "P"//Tipo do Produto (oculto) - Consumo,Comercio e etc...
}
```

#### `POST` 3. Inserir patrimônio na transferência com conf.
```
POST /webservice/v1/itens_requisicao_devolucao_material
```

**Body:**
```json
{
    "id_requisicao_devolucao_material": "2",//ID da Transferência
    "id_patrimonio": "1",//ID de Patrimônio
    "id_produto": "35",//ID do Produto que não é patrimônio (produtos)
    "id_unidade": "1",//ID de Unidades do produto (produtos_unidades)
    "qtd": "1",//Quantidade de saída do produto
    "fator_conversao": "1.000000000",//Fator conversão do produto
    "tipo_produto": "P"//Tipo do Produto (oculto) - Consumo,Comercio e etc...
}
```

#### `POST` 4. Encaminhar transferência para confirmação
```
POST /webservice/v1/botaoAjax_29158
```

**Body:**
```json
{
    "get_id":"3"//ID da Transferência com confirmação.
}
```

#### `POST` 5. Confirmar transferência para confirmação
```
POST /webservice/v1/botaoAjax_29160
```

**Body:**
```json
{
    "get_id":"3"//ID da Transferência com confirmação.
}

/*
Para confirmar a Transferência, é necessário o colaborador de destino
*/
```

#### `POST` 1. Nova transferência
```
POST /webservice/v1/transf_almox_top
```

**Body:**
```json
{
    "id_almox_saida": "1",//Almoxarifado origem
    "id_filial": "1",//Filial origem
    "id_almox_entrada": "2",//Almoxarifado destino
    "id_filial_entrada": "1",//Filial destino
    "data": "28/11/2024",//Data da abertura da transferência
    "operador": "",//ID Técnico da Operação
    "obs": "Teste"//Observação
}
```

**Response — Exemplo:**
```json
{
    "type": "success",
    "message": "Record successfully inserted!",
    "id": "5",
    "atualiza_campos": [
        {
            "tipo": "i",
            "campo": "id_filial_entrada",
            "valor": "1"
        }
    ]
}
```

#### `POST` 2. Inserir produto na transferência
```
POST /webservice/v1/transf_almox_item
```

**Body:**
```json
{
    "id_patrimonio": "",//ID do Patrimônio
    "id_produto": "43",//ID do Produto
    "id_unidade": "1",//ID da Unidade
    "unidade_sigla": "UND",//Sigla da Unidade
    "qtde": "1.00000",//Quantidade
    "fator_conversao": "1.000000000",//Fator conversão
    "id_transf_almox": "5",//ID da Nova Transferência
    "tipo_produto":"C"//Tipo do produto
}

/* Após cadastrar, já é feito a transferência*/
```

**Response — Exemplo:**
```json
{
    "type": "success",
    "message": "Record successfully inserted!",
    "id": "5"
}
```

#### `POST` 3. Inserir patrimônio na transferência
```
POST /webservice/v1/transf_almox_item
```

**Body:**
```json
{
    "id_patrimonio": "9",//ID do Patrimônio
    "id_produto": "34",//ID do Produto
    "id_unidade": "1",//ID da Unidade
    "unidade_sigla": "UND",//Sigla da Unidade
    "qtde": "1.00000",//Quantidade
    "fator_conversao": "1.000000000",//Fator conversão
    "id_transf_almox": "5",//ID da Nova Transferência
    "tipo_produto":"P"
}

/* Após cadastrar, já é feito a transferência*/
```

**Response — Exemplo:**
```json
{
    "type": "success",
    "message": "Record successfully inserted!",
    "id": "6"
}
```

#### `GET` Transferências automáticas
```
GET /webservice/v1/transf_automatica
```

**Body:**
```json
{
    "qtype": "transf_almox.id",
    "query": "",
    "oper": "=",
    "page": "1",
    "rp": "1700",
    "sortname": "transf_almox.id",
    "sortorder": "desc"
}
/*
Campos:
{
    "id": "",
    "data": "",
    "operador": "",
    "id_almox_saida": "",
    "id_filial": "",
    "id_almox_entrada": "",
    "id_filial_entrada": "",
    "documento": "",
    "obs": "",
    "id_oss_chamado": "",
    "id_produto": ""
}
*/
```

**Response — Exemplo:**
```json
{
    "page": "1",
    "total": "3",
    "registros": [
        {
            "id": "4",
            "data": "2023-07-04",
            "operador": "",
            "id_almox_saida": "1",
            "id_filial": "1",
            "id_almox_entrada": "3",
            "id_filial_entrada": "1",
            "documento": "REQ4",
            "obs": "Transf. via req. materiais [ID: 4].",
            "id_oss_chamado": "",
            "id_produto": "0"
        },
        {
            "id": "3",
            "data": "2022-11-28",
            "operador": "",
            "id_almox_saida": "1",
            "id_filial": "1",
            "id_almox_entrada": "1",
            "id_filial_entrada": "1",
            "documento": "REQ1",
            "obs": "Transf. via req. materiais [ID: 1].",
            "id_oss_chamado": "",
            "id_produto": "0"
        },
        {
            "id": "2",
            "data": "2022-11-28",
            "operador": "",
            "id_almox_saida": "1",
            "id_filial": "1",
            "id_almox_entrada": "1",
            "id_filial_entrada": "1",
            "documento": "REQ2",
            "obs": "Transf. via req. materiais [ID: 2].",
            "id_oss_chamado": "",
            "id_produto": "0"
        }
    ]
}
```

#### `GET` Produtos da Transferência Automática
```
GET /webservice/v1/transf_automatica_produtos
```

**Body:**
```json
{
    "qtype": "transf_almox_item.id",
    "query": "",
    "oper": "=",
    "page": "1",
    "rp": "1700",
    "sortname": "transf_almox_item.id",
    "sortorder": "desc"
}

/*
Campos:
{
    "id": "",
    "id_produto": "",
    "qtde": "",
    "id_patrimonio": "",
    "fator_conversao": "",
    "id_transf_almox": ""
}
*/
```

**Response — Exemplo:**
```json
{
    "page": "1",
    "total": "6",
    "registros": [
        {
            "id": "7",
            "id_produto": "34",
            "qtde": "1.00000",
            "id_patrimonio": "4",
            "fator_conversao": "1.000000000",
            "id_transf_almox": "4"
        },
        {
            "id": "6",
            "id_produto": "34",
            "qtde": "1.00000",
            "id_patrimonio": "3",
            "fator_conversao": "1.000000000",
            "id_transf_almox": "4"
        },
        {
            "id": "5",
            "id_produto": "34",
            "qtde": "1.00000",
            "id_patrimonio": "1",
            "fator_conversao": "1.000000000",
            "id_transf_almox": "4"
        },
        {
            "id": "3",
            "id_produto": "37",
            "qtde": "2.00000",
            "id_patrimonio": "0",
            "fator_conversao": "1.000000000",
            "id_transf_almox": "3"
        },
        {
            "id": "2",
            "id_produto": "8",
            "qtde": "10.00000",
            "id_patrimonio": "0",
            "fator_conversao": "1.000000000",
            "id_transf_almox": "2"
        },
        {
            "id": "1",
            "id_produto": "37",
            "qtde": "3.00000",
            "id_patrimonio": "0",
            "fator_conversao": "1.000000000",
            "id_transf_almox": "1"
        }
    ]
}
```

## Fiscal

#### `GET` Classificação Tributária (listar)
```
GET /webservice/v1/cnf_classificacao_tributaria
```

**Body:**
```json
{
  "qtype" : "cnf_classificacao_tributaria.id",
  "query" : "1",
  "oper" : ">=",
  "page" : "1",
  "rp" : "2000",
  "sortname" : "cnf_classificacao_tributaria.id",
  "sortorder" : "asc"
}
```

#### `POST` Classificação Tributária (inserir)
```
POST /webservice/v1/cnf_classificacao_tributaria
```

**Body:**
```json
{
  "descricao": "Simples Teste",//Obrigatório
  "tipo_operacao": "",
  "cf_tipo_tributacao": "ICMS",//Obrigatório
  "cf_cfop": "",
  "cf_cfop_f": "",
  "cf_ncm": "",
  "cf_ex_tipi": "",
  "cf_id_fiscal": "",
  "nat_bc_cred": "",
  "codigo_classificacao_sped": "",
  "icms_sn_stributaria": "",
  "icms_sn_origem": "",
  "modBC": "",
  "cf_aliquota_icms": "",
  "cf_porcentagem_deferimento": "",
  "cf_aliquota_fcp": "",
  "icms_predbc": "",
  "icms_motdesicms": "",
  "icms_pbcop": "",
  "icms_pcredsn": "",
  "icms_modbcst": "",
  "icms_pmvast": "",
  "icms_predbcst": "",
  "icms_picmsst": "",
  "icms_vicmsst": "",
  "icms_vbcstret": "",
  "icms_ufst": "",
  "icms_vbcstdest": "",
  "icms_fcp_aliquota_st": "",
  "cf_ipi_sit_tributaria": "",
  "cf_ipi_codigo_enquadramento": "",
  "cf_ipi_classe_enquadramento": "",
  "cf_ipi_codigo_selo_controle": "",
  "cf_ipi_cnpj_produtor": "",
  "cf_aliquota_ipi": "",
  "pis_situacao_tributaria": "",
  "cf_pis_bc": "",
  "cf_pis_alq": "",
  "cf_pis_valor": "",
  "descontar_icms_base_calculo": "N",//Obrigatório
  "cofins_situacao_tributaria": "",
  "cf_cofins_bc": "",
  "cf_cofins_alq": "",
  "cf_cofins_valor": "",
  "descontar_icms_base_calculo_cofins": "N",//Obrigatório
  "iss_tributacao": "",
  "iss_lista_servico": "",
  "iss_incidencia": "",
  "local_prestacao": "",
  "cf_iss_aliquota": "",
  "cf_iss_aliquota_retido": "",
  "cf_iss_municipio_ocorencia": "",
  "id_natureza_operacao": "",
  "cod_tributacao_municipio": "",
  "cf_ii_bc": "",
  "cf_ii_alq": "",
  "cf_ii_valor": "",
  "cf_ii_iof": "",
  "cf_ii_desp_aduaneira": "",
  "cf_ii_di_adicao": "",
  "cf_ii_di_seqadicao": "",
  "cf_ii_di_cod_fabricante": "",
  "irrf_tipo_retencao": "CX",//Obrigatório
  "irrf_aliquota": "",
  "irrf_valor_minimo": "",
  "csll_aliquota": "",
  "p_fust": "",
  "p_funttel": "",
  "excessao_st_reducao_fust_funttel": "",
  "excessao_st_isentos_fust_funttel": ""
}
```

#### `PUT` Classificação Tributária (editar)
```
PUT /webservice/v1/cnf_classificacao_tributaria/2
```

**Body:**
```json
{
  "descricao": "Simples Estadual",//alterando esse campo
  "tipo_operacao": "",
  "cf_tipo_tributacao": "ICMS",
  "cf_cfop": "",
  "cf_cfop_f": "",
  "cf_ncm": "",
  "cf_ex_tipi": "",
  "cf_id_fiscal": "",
  "nat_bc_cred": "",
  "codigo_classificacao_sped": "",
  "icms_sn_stributaria": "",
  "icms_sn_origem": "",
  "modBC": "",
  "cf_aliquota_icms": "",
  "cf_porcentagem_deferimento": "",
  "cf_aliquota_fcp": "",
  "icms_predbc": "",
  "icms_motdesicms": "",
  "icms_pbcop": "",
  "icms_pcredsn": "",
  "icms_modbcst": "",
  "icms_pmvast": "",
  "icms_predbcst": "",
  "icms_picmsst": "",
  "icms_vicmsst": "",
  "icms_vbcstret": "",
  "icms_ufst": "",
  "icms_vbcstdest": "",
  "icms_fcp_aliquota_st": "",
  "cf_ipi_sit_tributaria": "",
  "cf_ipi_codigo_enquadramento": "",
  "cf_ipi_classe_enquadramento": "",
  "cf_ipi_codigo_selo_controle": "",
  "cf_ipi_cnpj_produtor": "",
  "cf_aliquota_ipi": "",
  "pis_situacao_tributaria": "",
  "cf_pis_bc": "",
  "cf_pis_alq": "",
  "cf_pis_valor": "",
  "descontar_icms_base_calculo": "N",
  "cofins_situacao_tributaria": "",
  "cf_cofins_bc": "",
  "cf_cofins_alq": "",
  "cf_cofins_valor": "",
  "descontar_icms_base_calculo_cofins": "N",
  "iss_tributacao": "",
  "iss_lista_servico": "",
  "iss_incidencia": "",
  "local_prestacao": "",
  "cf_iss_aliquota": "",
  "cf_iss_aliquota_retido": "",
  "cf_iss_municipio_ocorencia": "",
  "id_natureza_operacao": "",
  "cod_tributacao_municipio": "",
  "cf_ii_bc": "",
  "cf_ii_alq": "",
  "cf_ii_valor": "",
  "cf_ii_iof": "",
  "cf_ii_desp_aduaneira": "",
  "cf_ii_di_adicao": "",
  "cf_ii_di_seqadicao": "",
  "cf_ii_di_cod_fabricante": "",
  "irrf_tipo_retencao": "CX",
  "irrf_aliquota": "",
  "irrf_valor_minimo": "",
  "csll_aliquota": "",
  "p_fust": "",
  "p_funttel": "",
  "excessao_st_reducao_fust_funttel": "",
  "excessao_st_isentos_fust_funttel": ""
}
```

#### `DELETE` Classificação Tributária (deletar)
```
DELETE /webservice/v1/cnf_classificacao_tributaria/2
```

## Folha de pagamento

### Colaboradores

#### `GET` Colaboradores (listar)
```
GET /webservice/v1/funcionarios
```

**Body:**
```json
{
"qtype": "funcionarios.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "funcionarios.id",
"sortorder": "desc"
}
```

#### `POST` Colaboradores (inserir)
```
POST /webservice/v1/funcionarios
```

**Body:**
```json
{
  "funcionario": "Asafe",//Obrigatório
  "filial_id": "1",//Obrigatório
  "id_funcao": "",
  "id_departamento": "",
  "id_conta": "1",//Obrigatório
  "id_conta_decimo": "",
  "ramal": "",
  "coeficiente": "",
  "ativo": "S",//Obrigatório
  "cor_mapa": "",
  "data_admissao": "",
  "data_demissao": "",
  "obs": "",
  "percen_max_desc_areceber": "",
  "ctps_numero": "",
  "ctps_serie": "",
  "ctps_data_emissao": "",
  "ctps_cidade_emissao": "",
  "cpf_cnpj": "",
  "pis_numero": "",
  "pis_data": "",
  "ie_identidade": "",
  "rg_orgao_emissor": "",
  "rg_data_emissao": "",
  "nacionalidade": "",
  "data_nascimento": "",
  "cnh_numero": "",
  "search": "",
  "cnh_vencimento": "",
  "titulo_numero": "",
  "titulo_zona": "",
  "titulo_secao": "",
  "rastreador": "",
  "ultima_atualizacao": "",
  "cep": "",
  "endereco": "",
  "numero": "",
  "cidade": "1",//Obrigatório
  "bairro": "",
  "complemento": "",
  "uf": "",
  "referencia": "",
  "nome_pai": "",
  "nome_mae": "",
  "estado_civil": "",
  "nome_conjuge": "",
  "cpf_conjuge": "",
  "rg_conjuge": "",
  "dependentes_ir": "",
  "num_dependentes": "",
  "dep_um_nome": "",
  "dep_um_rg": "",
  "dep_um_cpf": "",
  "dep_dois_nome": "",
  "dep_dois_rg": "",
  "dep_dois_cpf": "",
  "dep_tres_nome": "",
  "dep_tres_rg": "",
  "dep_tres_cpf": "",
  "cor_raca": "",
  "num_manequim": "",
  "camiseta": "",
  "possui_deficiencia": "",
  "fone": "",
  "fone_celular": "",
  "fone_emergencia": "",
  "falar_com": "",
  "telefone_comercial": "",
  "email": "",
  "id_email_smtp": "",
  "assinatura_email": "",
  "salario": "",
  "id_conta_salario": "",
  "banco": "",
  "agencia": "",
  "agencia_dv": "",
  "conta": "",
  "numero_conta_dv": "",
  "chave_pix": "",
  "camara_centralizadora": "",
  "envia_email_os": "N",//Obrigatório
  "envia_sms_os": "N",//Obrigatório
  "integracao_calendario": "",
  "id_chat_telegram_funcionario": "",
  "id_setor_padrao": "",
  "img_assinatura": "",
  "id_perfil_jornada_trabalho": ""
}
```

#### `PUT` Colaboradores (editar)
```
PUT /webservice/v1/funcionarios/1
```

**Body:**
```json
{
  "funcionario": "Teste",//alterando esse campo
  "filial_id": "1",
  "id_funcao": "",
  "id_departamento": "",
  "id_conta": "1",
  "id_conta_decimo": "",
  "ramal": "",
  "coeficiente": "",
  "ativo": "S",
  "cor_mapa": "",
  "data_admissao": "",
  "data_demissao": "",
  "obs": "",
  "percen_max_desc_areceber": "",
  "ctps_numero": "",
  "ctps_serie": "",
  "ctps_data_emissao": "",
  "ctps_cidade_emissao": "",
  "cpf_cnpj": "",
  "pis_numero": "",
  "pis_data": "",
  "ie_identidade": "",
  "rg_orgao_emissor": "",
  "rg_data_emissao": "",
  "nacionalidade": "",
  "data_nascimento": "",
  "cnh_numero": "",
  "search": "",
  "cnh_vencimento": "",
  "titulo_numero": "",
  "titulo_zona": "",
  "titulo_secao": "",
  "rastreador": "",
  "ultima_atualizacao": "",
  "cep": "",
  "endereco": "",
  "numero": "",
  "cidade": "1",
  "bairro": "",
  "complemento": "",
  "uf": "",
  "referencia": "",
  "nome_pai": "",
  "nome_mae": "",
  "estado_civil": "",
  "nome_conjuge": "",
  "cpf_conjuge": "",
  "rg_conjuge": "",
  "dependentes_ir": "",
  "num_dependentes": "",
  "dep_um_nome": "",
  "dep_um_rg": "",
  "dep_um_cpf": "",
  "dep_dois_nome": "",
  "dep_dois_rg": "",
  "dep_dois_cpf": "",
  "dep_tres_nome": "",
  "dep_tres_rg": "",
  "dep_tres_cpf": "",
  "cor_raca": "",
  "num_manequim": "",
  "camiseta": "",
  "possui_deficiencia": "",
  "fone": "",
  "fone_celular": "",
  "fone_emergencia": "",
  "falar_com": "",
  "telefone_comercial": "",
  "email": "",
  "id_email_smtp": "",
  "assinatura_email": "",
  "salario": "",
  "id_conta_salario": "",
  "banco": "",
  "agencia": "",
  "agencia_dv": "",
  "conta": "",
  "numero_conta_dv": "",
  "chave_pix": "",
  "camara_centralizadora": "",
  "envia_email_os": "N",
  "envia_sms_os": "N",
  "integracao_calendario": "",
  "id_chat_telegram_funcionario": "",
  "id_setor_padrao": "",
  "img_assinatura": "",
  "id_perfil_jornada_trabalho": ""
}
```

#### `DELETE` Colaboradores (deletar)
```
DELETE /webservice/v1/funcionarios/1
```

#### `GET` Setor do Colaborador (listar)
```
GET /webservice/v1/funcionario_setores
```

**Body:**
```json
{
"qtype": "funcionario_setores.usuario",
"query": "9",
"oper": "=",
"page": "1",
"rp": "1000",
"sortname": "funcionario_setores.id",
"sortorder": "desc"
}
```

#### `POST` Setor do Colaborador (inserir)
```
POST /webservice/v1/funcionario_setores
```

**Body:**
```json
{
    "setor": "2",
    "usuario": "9",
    "listar_agenda": "S",
    "ativo": "S"
}
```

#### `PUT` Setor do Colaborador (editar)
```
PUT /webservice/v1/funcionario_setores/1
```

**Body:**
```json
{
    "setor": "2",
    "usuario": "9",
    "listar_agenda": "S",
    "ativo": "S"
}
```

#### `DELETE` Setor do Colaborador (deletar)
```
DELETE /webservice/v1/funcionario_setores/1
```

### Adiantamento de salários

#### `GET` Adiantamento (listar)
```
GET /webservice/v1/fl_adto_salario
```

**Body:**
```json
{
"qtype": "fl_adto_salario.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "fl_adto_salario.id",
"sortorder": "desc"
}
```

#### `POST` Adiantamento (inserir)
```
POST /webservice/v1/fl_adto_salario
```

**Body:**
```json
{
  "id_funcionario": "2",//Obrigatório
  "descricao": "Contas pendentes",//Obrigatório
  "data": "21/06/2024",//Obrigatório
  "tipo_pagamento": "D",//Obrigatório
  "valor": "200",//Obrigatório
  "documento": "",
  "conta_": "1",//Obrigatório
  "id_conta": ""
}
```

#### `PUT` Adiantamento (editar)
```
PUT /webservice/v1/fl_adto_salario/1
```

**Body:**
```json
{
  "id_funcionario": "2",
  "descricao": "Contas pendentes",
  "data": "21/06/2024",
  "tipo_pagamento": "D",
  "valor": "200",
  "documento": "Adiantamento Teste",//Alterando esse campo
  "conta_": "1",
  "id_conta": "1"
}
```

#### `DELETE` Adiantamento (deletar)
```
DELETE /webservice/v1/fl_adto_salario/1
```

### 📁 Cadastros

#### `GET` Departamentos (listar)
```
GET /webservice/v1/su_ticket_setor
```

**Body:**
```json
{
"qtype": "su_ticket_setor.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "su_ticket_setor.id",
"sortorder": "desc"
}
```

#### `POST` Departamentos (inserir)
```
POST /webservice/v1/su_ticket_setor
```

**Body:**
```json
{
  "setor": "Técnico instrucional",//Obrigatório
  "email": "",
  "presta_atendimento": "",
  "mostra_hotsite": "",
  "ordem": "1",//Obrigatório
  "ativo": "S"//Obrigatório
}
```

#### `PUT` Departamentos (editar)
```
PUT /webservice/v1/su_ticket_setor/2
```

**Body:**
```json
{
  "setor": "Técnico",
  "email": "",
  "presta_atendimento": "",
  "mostra_hotsite": "",
  "ordem": "1",
  "ativo": "S"
}
```

#### `DELETE` Departamentos (deletar)
```
DELETE /webservice/v1/su_ticket_setor/2
```

#### `GET` Setor (listar)
```
GET /webservice/v1/empresa_setor
```

**Body:**
```json
{
"qtype": "empresa_setor.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "empresa_setor.id",
"sortorder": "desc"
}
```

#### `POST` Setor (inserir)
```
POST /webservice/v1/empresa_setor
```

**Body:**
```json
{
  "setor": "Departamento API",//Obrigatório
  "id_depto": "",
  "empresa_setor_chatid_telegram": "",
  "ativo": "S",//Obrigatório
  "cor": "",
  "recebe_telegram_setor":"",
  "token_bot_telegram_setor":""
}
```

#### `PUT` Setor (editar)
```
PUT /webservice/v1/empresa_setor/2
```

**Body:**
```json
{
  "setor": "Departamento Teste",//Alterando esse campo
  "id_depto": "",
  "empresa_setor_chatid_telegram": "",
  "ativo": "S",
  "cor": "",
  "recebe_telegram_setor":"N",
  "token_bot_telegram_setor":""
}
```

#### `DELETE` Setor (deletar)
```
DELETE /webservice/v1/empresa_setor/2
```

## Frota

### Veículos

#### `GET` Veículos (listar)
```
GET /webservice/v1/veiculos
```

**Body:**
```json
{
"qtype": "veiculos.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "veiculos.id",
"sortorder": "desc"
}
```

#### `POST` Veículos (inserir)
```
POST /webservice/v1/veiculos
```

**Body:**
```json
{
  "placa": "23GT23",//Obrigatório
  "descricao": "Carro Sedan Turbo",//Obrigatório
  "reastreador": "",
  "oleo": "200",//Obrigatório
  "id_filial": "",
  "status": "",
  "status_veiculos": "",
  "tara": "",
  "capacidade_kg": "",
  "capacidade_m3": "",
  "tipo_rodado": "03",//Obrigatório
  "tipo_carroceria": "02",//Obrigatório
  "uf_veiculo": "30",//Obrigatório
  "data_aquisicao": ""
}
```

#### `PUT` Veículos (editar)
```
PUT /webservice/v1/veiculos/11
```

**Body:**
```json
{
  "placa": "23GT23",
  "descricao": "Fiat Uno Turbo com Escada",//Alterando esse campo
  "reastreador": "",
  "oleo": "200",
  "id_filial": "",
  "status": "",
  "status_veiculos": "",
  "tara": "",
  "capacidade_kg": "",
  "capacidade_m3": "",
  "tipo_rodado": "03",
  "tipo_carroceria": "02",
  "uf_veiculo": "30",
  "data_aquisicao": ""
}
```

#### `DELETE` Veículos (deletar)
```
DELETE /webservice/v1/veiculos/11
```

### Veículos despesas

#### `GET` Despesas (listar)
```
GET /webservice/v1/veiculos_despesas
```

**Body:**
```json
{
"qtype": "veiculos_despesas.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "veiculos_despesas.id",
"sortorder": "desc"
}
```

#### `POST` Despesas (inserir)
```
POST /webservice/v1/veiculos_despesas
```

**Body:**
```json
{
  "id_veiculo": "2",//Obrigatório
  "id_condutor": "",
  "id_apagar": "",
  "id_filial": "",
  "tipo": "T",//Obrigatório
  "descricao": "",
  "data": "24/06/2024",//Obrigatório
  "quantidade_litros": "50",//Obrigatório
  "valor_litro": "4.5",//Obrigatório
  "valor": "300",//Obrigatório
  "kilometragem": "150"//Obrigatório
}
```

#### `PUT` Despesas (editar)
```
PUT /webservice/v1/veiculos_despesas/36
```

**Body:**
```json
{
  "id_veiculo": "2",
  "id_condutor": "",
  "id_apagar": "",
  "id_filial": "",
  "tipo": "T",
  "descricao": "Teste despesas",//Alterando esse campo
  "data": "24/06/2024",
  "quantidade_litros": "50",
  "valor_litro": "4.5",
  "valor": "300",
  "kilometragem": "150"
}
```

#### `DELETE` Despesas (deletar)
```
DELETE /webservice/v1/veiculos_despesas/36
```

### Veículos - Rastreamento

#### `GET` Rastreamento (listar)
```
GET /webservice/v1/veiculos_tracker
```

**Body:**
```json
{
"qtype": "veiculos_tracker.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "veiculos_tracker.id",
"sortorder": "desc"
}
```

#### `POST` Rastreamento (inserir)
```
POST /webservice/v1/veiculos_tracker
```

**Body:**
```json
{
  "rastreador": "Sexta-feira Rota 01",//Obrigatório
  "latitude": "",
  "longitude": "",
  "speed": "",
  "gps_time": "",
  "lastupdate": "24/06/2024 17:07:33"//Obrigatório
}
```

#### `PUT` Rastreamento (editar)
```
PUT /webservice/v1/veiculos_tracker/15
```

**Body:**
```json
{
  "rastreador": "Registro 01",//Alterando esse campo
  "latitude": "",
  "longitude": "",
  "speed": "",
  "gps_time": "",
  "lastupdate": "24/06/2024 17:07:33"
}
```

#### `DELETE` Rastreamento (deletar)
```
DELETE /webservice/v1/veiculos_tracker/15
```

## InMap

### 📁 Elementos

#### `GET` Caixas (listar)
```
GET /webservice/v1/rad_caixa_ftth
```

**Body:**
```json
{
"qtype": "rad_caixa_ftth.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "rad_caixa_ftth.id",
"sortorder": "desc"
}
```

#### `POST` Caixas (inserir)
```
POST /webservice/v1/rad_caixa_ftth
```

**Body:**
```json
{
  "descricao": "Teste API",//Obrigatório
  "tipo": "",
  "id_projeto": "1",//Obrigatório
  "id_transmissor": "1",//Obrigatório
  "id_interface": "",
  "id_tecnologia": "",
  "capacidade": "",
  "latitude": "",
  "longitude": "",
  "codigo_estilo_caixa": "7eTTWpDR",//Obrigatório
  "obs_caixa_ftth": "",
  "status": "",
  "idx": "",
  "ultima_atualizacao": "",
  "cep": "",
  "endereco": "",
  "numero": "",
  "bairro": "",
  "id_cidade": ""
}
```

#### `PUT` Caixas (editar)
```
PUT /webservice/v1/rad_caixa_ftth/2
```

**Body:**
```json
{
  "descricao": "Alteração de API",//Alterando esse campo
  "tipo": "",
  "id_projeto": "1",
  "id_transmissor": "1",
  "id_interface": "",
  "id_tecnologia": "",
  "capacidade": "",
  "latitude": "",
  "longitude": "",
  "codigo_estilo_caixa": "7eTTWpDR",
  "obs_caixa_ftth": "",
  "status": "",
  "idx": "",
  "ultima_atualizacao": "",
  "cep": "",
  "endereco": "",
  "numero": "",
  "bairro": "",
  "id_cidade": ""
}
```

#### `DELETE` Caixas (deletar)
```
DELETE /webservice/v1/rad_caixa_ftth/2
```

#### `GET` Imagens (listar)
```
GET /webservice/v1/elemento_arquivos
```

**Body:**
```json
{
"qtype": "elemento_arquivos.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "elemento_arquivos.id",
"sortorder": "desc"
}
```

#### `POST` Imagens (inserir)
```
POST /webservice/v1/elemento_arquivos
```

**Body:**
```json
  descricao = Teste API  // Descrição do arquivo - Obrigatório
  local_arquivo =   // Arquivo (binário) - Opcional
  id_elemento = 1  // ID da caixa - Obrigatório
  tabela = rad_caixa_ftth  // Tabela a ser inserido - Obrigatório
```

#### `DELETE` Imagens (deletar)
```
DELETE /webservice/v1/elemento_arquivos/2
```

#### `GET` Emenda (listar)
```
GET /webservice/v1/df_elemento
```

**Body:**
```json
{
    "qtype": "df_elemento.tipo",
    "query": "CA",
    "oper": "=",
    "page": "1",
    "rp": "1000",
    "sortname": "df_elemento.id",
    "sortorder": "desc"
}
```

#### `POST` Emenda (inserir)
```
POST /webservice/v1/df_elemento
```

**Body:**
```json
{
    "id_projeto": "1",//Obrigatório
    "codigo_identificador": "",
    "descricao": "Teste da API",//Obrigatório
    "preco_unidade": "1.00",//Obrigatório
    "observacao": "Realizando apenas um teste!",//Obrigatório
    "id_diretorio": "",
    "tipo": "CA",//Obrigatório
    "id_tipo_elemento": "5"//Obrigatório
}
```

#### `PUT` Emenda (editar)
```
PUT /webservice/v1/df_elemento/2
```

**Body:**
```json
{
    "id_projeto": "1",
    "codigo_identificador": "",
    "descricao": "Teste da API",
    "preco_unidade": "1.00",
    "observacao": "Alterando",
    "id_diretorio": "",
    "tipo": "CA",
    "id_tipo_elemento": "5"
}
```

#### `DELETE` Emenda (deletar)
```
DELETE /webservice/v1/df_elemento/2
```

#### `GET` Imagens (listar)
```
GET /webservice/v1/elemento_arquivos
```

**Body:**
```json
{
"qtype": "elemento_arquivos.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "elemento_arquivos.id",
"sortorder": "desc"
}
```

#### `POST` Imagens (inserir)
```
POST /webservice/v1/elemento_arquivos
```

**Body:**
```json
  descricao = Teste API  // Descrição do arquivo - Obrigatório
  local_arquivo =   // Arquivo (binário) - Opcional
  id_elemento = 1  // ID da caixa - Obrigatório
  tabela = rad_caixa_ftth  // Tabela a ser inserido - Obrigatório
```

#### `DELETE` Imagens (deletar)
```
DELETE /webservice/v1/elemento_arquivos/2
```

#### `GET` Subterrâneas (listar)
```
GET /webservice/v1/df_elemento
```

**Body:**
```json
{
    "qtype": "df_elemento.tipo",
    "query": "CS",
    "oper": "=",
    "page": "1",
    "rp": "1000",
    "sortname": "df_elemento.id",
    "sortorder": "desc"
}
```

#### `POST` Subterrâneas (inserir)
```
POST /webservice/v1/df_elemento
```

**Body:**
```json
{
    "id_projeto": "1",//Obrigatório
    "descricao": "Teste da API",//Obrigatório
    "preco_unidade": "0.00",//Obrigatório
    "observacao": "Realizando apenas um teste!",//Obrigatório
    "tipo": "CS",//Obrigatório
    "id_tipo_elemento": "5",//Obrigatório
    "latitude":"",
    "longitude":""
}
```

#### `PUT` Subterrâneas (editar)
```
PUT /webservice/v1/df_elemento/2
```

**Body:**
```json
{
    "id_projeto": "1",
    "descricao": "Teste da API",
    "preco_unidade": "0.00",
    "observacao": "Realizando apenas um teste!",
    "tipo": "CS",
    "id_tipo_elemento": "5",
    "latitude":"",
    "longitude":""
}
```

#### `DELETE` Subterrâneas (deletar)
```
DELETE /webservice/v1/df_elemento/2
```

#### `GET` Imagens (listar)
```
GET /webservice/v1/elemento_arquivos
```

**Body:**
```json
{
"qtype": "elemento_arquivos.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "elemento_arquivos.id",
"sortorder": "desc"
}
```

#### `POST` Imagens (inserir)
```
POST /webservice/v1/elemento_arquivos
```

**Body:**
```json
  descricao = Teste API  // Descrição do arquivo - Obrigatório
  local_arquivo =   // Arquivo (binário) - Opcional
  id_elemento = 1  // ID da caixa - Obrigatório
  tabela = rad_caixa_ftth  // Tabela a ser inserido - Obrigatório
```

#### `DELETE` Imagens (deletar)
```
DELETE /webservice/v1/elemento_arquivos/2
```

#### `GET` Cabos (listar)
```
GET /webservice/v1/df_elemento
```

**Body:**
```json
{
    "qtype": "df_elemento.tipo",
    "query": "CB",
    "oper": "=",
    "page": "1",
    "rp": "1000",
    "sortname": "df_elemento.id",
    "sortorder": "desc"
}
```

#### `POST` Cabos (inserir)
```
POST /webservice/v1/df_elemento
```

**Body:**
```json
{
    "id_projeto": "1",//Obrigatório
    "id_tipo_elemento": "77",//Obrigatório
    "descricao": "Teste da API",//Obrigatório
    "comprimento":"0.00 m",
    "observacao": "Realizando apenas um teste!",//Obrigatório
    "ativo":"S",
    "tipo": "CB",//Obrigatório
    "preco_unidade": "0.00"//Obrigatório
}
```

#### `PUT` Cabos (editar)
```
PUT /webservice/v1/df_elemento/2
```

**Body:**
```json
{
    "id_projeto": "1",
    "id_tipo_elemento": "77",
    "descricao": "Teste da API",
    "comprimento":"0.00 m",
    "observacao": "Alterando",
    "ativo":"S",
    "tipo": "CB",
    "preco_unidade": "0.00"
}
```

#### `DELETE` Cabos (deletar)
```
DELETE /webservice/v1/df_elemento/2
```

#### `GET` Postes (listar)
```
GET /webservice/v1/df_elemento
```

**Body:**
```json
{
    "qtype": "df_elemento.tipo",
    "query": "PT",
    "oper": "=",
    "page": "1",
    "rp": "1000",
    "sortname": "df_elemento.id",
    "sortorder": "desc"
}
```

#### `POST` Postes (inserir)
```
POST /webservice/v1/df_elemento
```

**Body:**
```json
{
    "id_projeto": "1",//Obrigatório
    "id_tipo_elemento": "5",//Obrigatório
    "descricao": "Teste da API",//Obrigatório
    "observacao": "Realizando apenas um teste!",//Obrigatório
    "latitude":"",
    "longitude":"",
    "tipo": "PT",//Obrigatório
    "preco_unidade": "0.00"//Obrigatório
}
```

#### `PUT` Postes (editar)
```
PUT /webservice/v1/df_elemento/2
```

**Body:**
```json
{
    "id_projeto": "1",//Obrigatório
    "id_tipo_elemento": "5",//Obrigatório
    "descricao": "Teste da API",//Obrigatório
    "observacao": "Realizando apenas um teste!",//Obrigatório
    "latitude":"",
    "longitude":"",
    "tipo": "PT",//Obrigatório
    "preco_unidade": "0.00"//Obrigatório
}
```

#### `DELETE` Postes (deletar)
```
DELETE /webservice/v1/df_elemento/2
```

#### `GET` Cobertura (listar)
```
GET /webservice/v1/df_elemento
```

**Body:**
```json
{
    "qtype": "df_elemento.tipo",
    "query": "AR",
    "oper": "=",
    "page": "1",
    "rp": "1000",
    "sortname": "df_elemento.id",
    "sortorder": "desc"
}
```

#### `POST` Cobertura (inserir)
```
POST /webservice/v1/df_elemento
```

**Body:**
```json
{
    "id_projeto": "1",//Obrigatório
    "id_tipo_elemento": "5",//Obrigatório
    "descricao": "Teste da API",//Obrigatório
    "observacao": "Realizando apenas um teste!",//Obrigatório
    "tipo": "AR",//Obrigatório
    "preco_unidade": "0.00"//Obrigatório
}
```

#### `PUT` Cobertura (editar)
```
PUT /webservice/v1/df_elemento/2
```

**Body:**
```json
{
    "id_projeto": "1",
    "id_tipo_elemento": "5",
    "descricao": "Teste da API",
    "observacao": "Alterando!",
    "tipo": "AR",
    "preco_unidade": "0.00"
}
```

#### `DELETE` Cobertura (deletar)
```
DELETE /webservice/v1/df_elemento/2
```

#### `GET` Rede neutra (listar)
```
GET /webservice/v1/df_elemento
```

**Body:**
```json
{
    "qtype": "df_elemento.tipo",
    "query": "RN",
    "oper": "=",
    "page": "1",
    "rp": "1000",
    "sortname": "df_elemento.id",
    "sortorder": "desc"
}
```

#### `POST` Rede neutra (inserir)
```
POST /webservice/v1/df_elemento
```

**Body:**
```json
{
    "ativo":"S",
    "descricao": "Teste da API",//Obrigatório
    "id_tipo_elemento": "5",//Obrigatório
    "total_caixas":"1",
    "observacao": "Realizando apenas um teste!",//Obrigatório
    "tipo": "AR",//Obrigatório
    "id_projeto": "1",//Obrigatório
    "preco_unidade": "0.00"//Obrigatório
}
```

#### `PUT` Rede neutra (editar)
```
PUT /webservice/v1/df_elemento/2
```

**Body:**
```json
{
    "ativo":"S",
    "descricao": "Teste da API",
    "id_tipo_elemento": "5",
    "total_caixas":"1",
    "observacao": "Alterando!",
    "tipo": "AR",
    "id_projeto": "1",
    "preco_unidade": "0.00"
}
```

#### `DELETE` Rede neutra (deletar)
```
DELETE /webservice/v1/df_elemento/2
```

#### `GET` Projetos (listar)
```
GET /webservice/v1/df_projeto
```

**Body:**
```json
{
"qtype": "df_projeto.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "df_projeto.id",
"sortorder": "desc"
}
```

#### `POST` Projetos (inserir)
```
POST /webservice/v1/df_projeto
```

**Body:**
```json
{
  "nome": "Teste API",//Obrigatório
  "id_filial": "",
  "latitude": "1.000000",//Obrigatório
  "longitude": "1.000000",//Obrigatório
  "zoom": "16",//Obrigatório
  "status": "A",//Obrigatório
  "cor_mapa": ""
}
```

#### `PUT` Projetos (editar)
```
PUT /webservice/v1/df_projeto/2
```

**Body:**
```json
{
  "nome": "Alteração de API",//Alterando esse campo
  "id_filial": "",
  "latitude": "1.000000",
  "longitude": "1.000000",
  "zoom": "16",
  "status": "A",
  "cor_mapa": ""
}
```

#### `DELETE` Projetos (deletar)
```
DELETE /webservice/v1/df_projeto/12
```

#### `GET` Coordenadas (listar)
```
GET /webservice/v1/df_elemento_coordenada
```

**Body:**
```json
{
    "qtype": "df_elemento_coordenada.id",
    "query": "",
    "oper": "=",
    "page": "1",
    "rp": "1000",
    "sortname": "df_elemento_coordenada.id",
    "sortorder": "desc"
}
```

#### `GET` Tipo elemento (listar)
```
GET /webservice/v1/df_tipo_elemento
```

**Body:**
```json
{
    "qtype": "df_tipo_elemento.id",
    "query": "1",
    "oper": ">=",
    "page": "1",
    "rp": "1000",
    "sortname": "df_tipo_elemento.id",
    "sortorder": "desc"
}
```

### Botões

#### `POST` Viabilidade Técnica por CEP
```
POST /webservice/v1/viabilidade_tecnica
```

**Body:**
```json
{
   "endereco" : "",
   "numero" : "",
   "bairro" : "",
   "cidade" : "",
   "estado" : "",//obrigatório, estado (SIGLA) do local
   "cep" : ""// CEP do local
}
```

#### `POST` Viabilidade Técnica por Coordenadas
```
POST /webservice/v1/viabilidade_tecnica
```

**Body:**
```json
{
   "latitude" : "-16.302805",//obrigatório, latitude do ponto
   "longitude" : "-39.024840"//obrigatório, longitude do ponto
}
```

#### `POST` Consultar Região de Manutenção
```
POST /webservice/v1/consultar_regiao_manutencao
```

**Body:**
```json
{
   "latitude" : "-16.302805",//obrigatório, latitude do ponto
   "longitude" : "-39.024840"//obrigatório, longitude do ponto
}
```

## Integrações

### E-mail SMTP

#### `GET` SMTP (listar)
```
GET /webservice/v1/smtp
```

**Body:**
```json
{
"qtype": "wfl_processo.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "wfl_processo.id",
"sortorder": "desc"
}
```

#### `POST` SMTP (inserir)
```
POST /webservice/v1/smtp
```

**Body:**
```json
{
    "servidor_saida": "",
    "remetente": "",
    "usuario": "",
    "senha": "",
    "porta": "",
    "autenticacao": "",
    "conexao_ssl": "",
    "codificacao_utf8": "",
    "forcar_codificacao": "",
    "destino_envio": "",
    "limite_hora": "",
    "limite_dia": "",
    "responsavel_envio": "",
    "assunto_envio": "",
    "texto_envio": ""
}
```

#### `PUT` SMTP (editar)
```
PUT /webservice/v1/smtp/45
```

**Body:**
```json
{
    "servidor_saida": "",
    "remetente": "",
    "usuario": "",
    "senha": "",
    "porta": "",
    "autenticacao": "",
    "conexao_ssl": "",
    "codificacao_utf8": "",
    "forcar_codificacao": "",
    "destino_envio": "",
    "limite_hora": "",
    "limite_dia": "",
    "responsavel_envio": "",
    "assunto_envio": "",
    "texto_envio": ""
}
```

#### `DELETE` SMTP (deletar)
```
DELETE /webservice/v1/smtp/45
```

## Logs

### Logs dos usuários

#### `GET` Logs dos usuários (listar)
```
GET /webservice/v1/ixc_logs
```

**Body:**
```json
{
"qtype": "ixc_logs.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "ixc_logs.id",
"sortorder": "desc"
}
```

### Logs gateway

#### `GET` Logs gateway (listar)
```
GET /webservice/v1/log_tarefa_gateway
```

**Body:**
```json
{
"qtype": "log_tarefa_gateway.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "log_tarefa_gateway.id",
"sortorder": "desc"
}
```

### Logs de e-mails

#### `GET` Logs de e-mails (listar)
```
GET /webservice/v1/crm_email_log
```

**Body:**
```json
{
"qtype": "crm_email_log.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "crm_email_log.id",
"sortorder": "desc"
}
```

### Logs SMS

#### `GET` Log SMS (listar)
```
GET /webservice/v1/crm_sms_log
```

**Body:**
```json
{
"qtype": "crm_sms_log.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "crm_sms_log.id",
"sortorder": "desc"
}
```

### Logs Backup

#### `GET` Logs de backup (listar)
```
GET /webservice/v1/log_backup
```

**Body:**
```json
{
"qtype": "log_backup.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "log_backup.id",
"sortorder": "desc"
}
```

## MVNO/Telefonia móvel

### Assinantes

#### `GET` Assinantes (listar)
```
GET /webservice/v1/linha_mvno
```

**Body:**
```json
{
    "qtype": "linha_mvno.id",
    "query": "1",
    "oper": ">=",
    "page": "1",
    "rp": "1000",
    "sortname": "linha_mvno.id",
    "sortorder": "desc"
}
```

**Response — 200:**
```json
{
    "page": "1",
    "total": "1",
    "registros": [
        {
            "id": "1",
            "id_contrato": "2299",
            "status_linha": "A",
            "simcard": "89550000000000000043",
            "esim": "N",
            "portabilidade": "N",
            "status_portabilidade": "",
            "ddd_telefone": "11",
            "numero_telefone": "999985018",
            "id_prod_ixc_mvno": "1",
            "id_contrato_integracao": "",
            "id_integracao": "1",
            "msisdn": "",
            "id_linha_integracao": "0522490f-e543-45e8-8f80-cd0d796affc0",
            "api": "A",
            "id_customer_mvno": "dc6932a5-48a0-4f05-94cb-3cb8c802252c",
            "id_account_mvno": "",
            "tipo_numero": "",
            "profile_mvno": "",
            "data_agendamento": "0000-00-00",
            "token_validacao": "",
            "dia_recorrencia": "0",
            "numero_temporario": "",
            "operadora_origem": "1",
            "link_esim": "",
            "senha": "LiT5.HJQ&cI4",
            "login": "teste.teste@teste.com.br",
            "id_portabilidade_integracao": "",
            "id_plano_integracao": "352c55b5-bfd9-40d1-acd3-bbe1ac2f71e1"
        }
    ]
}
```

#### `POST` BrázMóvel (inserir)
```
POST /webservice/v1/linha_mvno
```

**Body:**
```json
{
    "id_contrato": "2299",
    "status_linha": "A",
    "simcard": "89550000000000000044",
    "esim": "N",
    "portabilidade": "N",
    "status_portabilidade": "",
    "ddd_telefone": "11",
    "numero_telefone": "999985088",
    "id_prod_ixc_mvno": "1",
    "id_contrato_integracao": "",
    "id_integracao": "1",
    "msisdn": "",
    "api": "A",
    "id_account_mvno": "",
    "tipo_numero": "",
    "profile_mvno": "",
    "token_validacao": "",
    "dia_recorrencia": "0",
    "numero_temporario": "",
    "operadora_origem": "1",
    "link_esim": "",
    "senha": "LiT5.HJQ&cI4",
    "login": "teste.teste@teste.com.br",
    "id_portabilidade_integracao": ""
}
```

**Response — 200:**
```json
{
    "type": "success",
    "message": "Registro inserido com sucesso!",
    "id": 2,
    "atualiza_campos": [
        {
            "tipo": "s",
            "campo": "status_linha",
            "valor": "A"
        },
        {
            "tipo": "i",
            "campo": "simcard",
            "valor": "89550000000000000044"
        },
        {
            "tipo": "s",
            "campo": "status_portabilidade",
            "valor": ""
        },
        {
            "tipo": "i",
            "campo": "numero_telefone",
            "valor": "996934588"
        },
        {
            "tipo": "i",
            "campo": "id_contrato_integracao",
            "valor": ""
        },
        {
            "tipo": "i",
            "campo": "msisdn",
            "valor": ""
        },
        {
            "tipo": "i",
            "campo": "id_linha_integracao",
            "valor": "93504b87-64b7-4569-8d9b-4635848bfb0e"
        },
        {
            "tipo": "i",
            "campo": "id_customer_mvno",
            "valor": "dc6932a5-48a0-4f05-94cb-3cb8c802252c"
        },
        {
            "tipo": "i",
            "campo": "numero_temporario",
            "valor": ""
        },
        {
            "tipo": "i",
            "campo": "link_esim",
            "valor": ""
        }
    ]
}
```

### Produtos IXC/MVNO

#### `GET` MVNO (listar)
```
GET /webservice/v1/produtos_ixc_mvno
```

**Body:**
```json
{
"qtype": "produtos_ixc_mvno.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "produtos_ixc_mvno.id",
"sortorder": "desc"
}
```

#### `POST` MVNO (inserir)
```
POST /webservice/v1/produtos_ixc_mvno
```

**Body:**
```json
{
  "id_assinatura_integracao": "",
  "id_integracao": "",
  "id_plano_integracao": "1",//Obrigatório
  "id_produto_ixc": "1",//Obrigatório
  "ativo": "",
  "tipo_referencia": "S"//Obrigatório
}
```

#### `PUT` MVNO (editar)
```
PUT /webservice/v1/produtos_ixc_mvno/1
```

**Body:**
```json
{
  "id_assinatura_integracao": "",
  "id_integracao": "",
  "id_plano_integracao": "1",
  "id_produto_ixc": "1",
  "ativo": "",
  "tipo_referencia": "N"//Alterando esse campo
}
```

#### `DELETE` MVNO (deletar)
```
DELETE /webservice/v1/produtos_ixc_mvno/1
```

## Pagar

### Contas a pagar

#### `GET` Contas a Pagar (listar)
```
GET /webservice/v1/fn_apagar
```

**Body:**
```json
{
"qtype": "fn_apagar.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "fn_apagar.id",
"sortorder": "desc"
}
```

#### `POST` Contas a Pagar (inserir)
```
POST /webservice/v1/fn_apagar
```

**Body:**
```json
{
  "id_fornecedor": "1",//Obrigatórios
  "data_emissao": "20/06/2024",//Obrigatórios
  "data_vencimento": "20/06/2024",//Obrigatórios
  "valor": "10",//Obrigatórios
  "id_contas": "1",//Obrigatórios - Conta de pagamento
  "tipo_pagamento": "Dinheiro",//Obrigatórios
  "id_dado_bancario": "",
  "chave_pix": "",
  "codigo_barras": "",
  "documento": "",
  "numero_nota": "",
  "id_conta": "",//Obrigatórios - Planejamento analítico
  "filial_id": "1",//Obrigatórios
  "previsao": "N",//Obrigatórios
  "eh_despesa_veiculo": "",
  "obs": "",
  "id_entrada": "",
  "status": "",
  "status_auditoria": "",
  "liberado": "S",//Obrigatório o valor S
  "tipo_conta": "",
  "duplicata": "",
  "lote": "",
  "previsao_conta_despesa": "",
  "id_lote_importacao": "",
  "id_conta_class_finan_a": "",
  "comunicado": "",
  "valor_aberto": "",
  "valor_pago": "",
  "data_pagamento": "",
  "debito_data": "",
  "valor_total_pago": "",
  "valor_cancelado": "",
  "data_cancelamento": "",
  "id_mot_cancelamento": "",
  "id_lote_pagamento": "",
  "id_conta_class_finan": "",
  "valor_class_finan": "",
  "json_class_finan": ""
}
```

#### `PUT` Contas a Pagar (editar)
```
PUT /webservice/v1/fn_apagar/3
```

**Body:**
```json
{
  "id_fornecedor": "1",//Obrigatórios
  "data_emissao": "20/06/2024",//Obrigatórios
  "data_vencimento": "20/06/2024",//Obrigatórios
  "valor": "10",//Obrigatórios
  "id_contas": "1",//Obrigatórios - Conta de pagamento
  "tipo_pagamento": "Dinheiro",//Obrigatórios
  "id_dado_bancario": "",
  "chave_pix": "",
  "codigo_barras": "",
  "documento": "",
  "numero_nota": "",
  "id_conta": "",//Obrigatórios - Planejamento analítico
  "filial_id": "1",//Obrigatórios
  "previsao": "N",//Obrigatórios
  "eh_despesa_veiculo": "",
  "obs": "",
  "id_entrada": "",
  "status": "",
  "status_auditoria": "",
  "liberado": "S",//Obrigatório o valor S
  "tipo_conta": "",
  "duplicata": "",
  "lote": "",
  "previsao_conta_despesa": "",
  "id_lote_importacao": "",
  "id_conta_class_finan_a": "",
  "comunicado": "",
  "valor_aberto": "",
  "valor_pago": "",
  "data_pagamento": "",
  "debito_data": "",
  "valor_total_pago": "",
  "valor_cancelado": "",
  "data_cancelamento": "",
  "id_mot_cancelamento": "",
  "id_lote_pagamento": "",
  "id_conta_class_finan": "",
  "valor_class_finan": "",
  "json_class_finan": ""
}
```

#### `DELETE` Contas a Pagar (deletar)
```
DELETE /webservice/v1/fn_apagar/3
```

### Arquivos

#### `GET` Arquivos Pagar (listar)
```
GET /webservice/v1/fn_apagar_arquivos
```

**Body:**
```json
{
    "qtype": "fn_apagar_arquivos.id_apagar",
    "query": "1234",
    "oper": "=",
    "page": "1",
    "rp": "10",
    "sortname": "fn_apagar_arquivos.id",
    "sortorder": "desc"
}
```

#### `POST` Arquivos Pagar (inserir)
```
POST /webservice/v1/fn_apagar_arquivos
```

**Body:**
```json
  arquivo =   // Arquivo
  id_apagar = 2345  // ID do Contas a Pagar
  descricao = Teste  // Descrição
```

#### `DELETE` Arquivos Pagar (deletar)
```
DELETE /webservice/v1/fn_apagar_arquivos/id_contas_apagar
```

### Botões

#### `POST` Pagar boleto (baixa manual)
```
POST /webservice/v1/botao_pagar_26409
```

**Body:**
```json
{
  "id_pagar": 3,
  "id_pagar_label": "3",
  "filial": 1,
  "filial_label": "Filial (Alterar)",
  "conta_": 1,
  "conta__label": "Caixa 1",
  "tipo_pagamento": "D",
  "chave_pix": "",
  "cheque_banco": "",
  "cheque_numero": "",
  "cheque_nome": "",
  "cheque_predatado": "",
  "id_conta_class_finan_a": "",
  "id_conta_class_finan_a_label": "",
  "id_conta": 1,
  "data": "19/08/2025",
  "documento": "ddsdas",
  "pdesconto": "",
  "vdesconto": "",
  "pacrescimo": "",
  "vacrescimo": "",
  "valor_parcela": "0,20",
  "debito": "0,20",
  "valor_total_pago": "0,20",
  "historico": "Pag. Salários à pagar - doc.: 1",
  "tipo_p": "T",
  "tipo_lanc": "P",
  "filial_id": 1,
  "id_operador": ""
}
```

**Response — 200:**
```json
{
    "type": "success",
    "success": "Ação executada com sucesso",
    "message": "Registro inserido com sucesso!",
    "id_pagar": "3",
    "id_pagar_label": "3",
    "filial": "1",
    "filial_label": "Filial (Alterar)",
    "conta_": "1",
    "conta__label": "Caixa 1",
    "tipo_pagamento": "D",
    "chave_pix": "",
    "cheque_banco": "",
    "cheque_numero": "",
    "cheque_nome": "",
    "cheque_predatado": "",
    "id_conta_class_finan_a": "",
    "id_conta_class_finan_a_label": "",
    "id_conta": "1",
    "data": "19/08/2025",
    "documento": "ddsdas",
    "pdesconto": "",
    "vdesconto": "",
    "pacrescimo": "",
    "vacrescimo": "",
    "valor_parcela": "0,20",
    "debito": "0,20",
    "valor_total_pago": "0.20",
    "historico": "Pag. Salários à pagar - doc.: 1",
    "tipo_p": "T",
    "tipo_lanc": "P",
    "filial_id": "1",
    "id_operador": "",
    "action": "botaoAjax_26409",
    "id": "44270"
}
```

#### `POST` Estornar pagamento cancelado
```
POST /webservice/v1/botao_estornar_cancelamento_26200
```

**Body:**
```json
{
    "get_id":"2"//ID do Contas a Pagar
}
```

#### `DELETE` Estornar pagamento recebido
```
DELETE /webservice/v1/fn_apagar_baixas/{id_movim_finan}
```

#### `POST` Aprovar com comentário
```
POST /webservice/v1/fn_apagar_auditoria
```

**Body:**
```json
{
    "status": "A", // Opcional - mas deveria ser obrigatório, status da auditoria, deve aceitar apenas os valores A = Aprovado; R = Reprovado; C = Corrigido;
    "id_fn_apagar": "3000", // Obrigatório - ID do contas a receber
    "tipo": "E", // Opcional - mas deveria ser obrigatório, define o Tipo, deve aceitar apenas os valores I = Interno E = Externo
    "motivo": "INSERIDO VIA API",
    "operador": "", // Opcional - usuário realizando a aprovação/reprovação
    "data_hora": "" // Opcional - data/hora em que a aprovação/reprovação foi realizada
}
```

#### `POST` Reprovar com comentário
```
POST /webservice/v1/fn_apagar_auditoria
```

**Body:**
```json
{
    "status": "R", // Opcional - mas deveria ser obrigatório, status da auditoria, deve aceitar apenas os valores A = Aprovado; R = Reprovado; C = Corrigido;
    "id_fn_apagar": "3000", // Obrigatório - ID do contas a receber
    "tipo": "E", // Opcional - mas deveria ser obrigatório, define o Tipo, deve aceitar apenas os valores I = Interno E = Externo
    "motivo": "INSERIDO VIA API",
    "operador": "", // Opcional - usuário realizando a aprovação/reprovação
    "data_hora": "" // Opcional - data/hora em que a aprovação/reprovação foi realizada
}
```

#### `POST` Baixar Arquivo Pagar
```
POST /webservice/v1/fn_apagar_arquivos_download
```

**Body:**
```json
{
    "id":"{{id_apagar}}"
}
```

## Planejamento

### Planejamento gerencial

#### `GET` Gerencial (listar)
```
GET /webservice/v1/planejamento
```

**Body:**
```json
{
  "qtype" : "planejamento.id",
  "query" : "1",
  "oper" : ">=",
  "page" : "1",
  "rp" : "2000",
  "sortname" : "planejamento.id",
  "sortorder" : "asc"
}
```

#### `POST` Gerencial (inserir)
```
POST /webservice/v1/planejamento
```

**Body:**
```json
{
  "nivel_superior": "",
  "tipo": "A",//Obrigatório
  "cod_planejamento": "",
  "planejamento": "Conta 12",//Obrigatório
  "conta_dominio": "",
  "contador": "",
  "plan_aux": "",
  "tipo_aux": ""
}
```

#### `PUT` Gerencial (editar)
```
PUT /webservice/v1/planejamento/94
```

**Body:**
```json
{
  "nivel_superior": "",
  "tipo": "A",
  "cod_planejamento": "",
  "planejamento": "Conta 1",//Alterando esse campo
  "conta_dominio": "",
  "contador": "",
  "plan_aux": "",
  "tipo_aux": ""
}
```

#### `DELETE` Gerencial (deletar)
```
DELETE /webservice/v1/planejamento/94
```

### Planejamento gerencial analítico

#### `GET` Analítico (listar)
```
GET /webservice/v1/planejamento_analitico
```

**Body:**
```json
{
  "qtype" : "planejamento_analitico.id",
  "query" : "1",
  "oper" : ">=",
  "page" : "1",
  "rp" : "2000",
  "sortname" : "planejamento_analitico.id",
  "sortorder" : "asc"
}
```

#### `POST` Analítico (inserir)
```
POST /webservice/v1/planejamento_analitico
```

**Body:**
```json
{
  "id_planejamento": "1",//Obrigatório
  "id_planejamento_analitico_finan": "",
  "planejamento_analitico": "Teste Analítico",//Obrigatório
  "conta_dominio": "",
  "previsao": "",
  "ativo": "S",//Obrigatório
  "classificacao": "",
  "conta": "",
  "tipo": "",
  "auxiliar": "",
  "contador": "",
  "sequencia_planejamento_analitico": ""
}
```

#### `PUT` Analítico (editar)
```
PUT /webservice/v1/planejamento_analitico/2799
```

**Body:**
```json
{
  "id_planejamento": "1",
  "id_planejamento_analitico_finan": "",
  "planejamento_analitico": "1 Analítico",//Alterando esse campo
  "conta_dominio": "",
  "previsao": "",
  "ativo": "S",
  "classificacao": "",
  "conta": "",
  "tipo": "",
  "auxiliar": "",
  "contador": "",
  "sequencia_planejamento_analitico": ""
}
```

#### `DELETE` Analítico (deletar)
```
DELETE /webservice/v1/planejamento_analitico/2799
```

### Classe financeira analítica gerencial

#### `GET` Analítico (listar)
```
GET /webservice/v1/planejamento_analitico_finan
```

**Body:**
```json
{
  "qtype" : "planejamento_analitico_finan.id",
  "query" : "1",
  "oper" : ">=",
  "page" : "1",
  "rp" : "2000",
  "sortname" : "planejamento_analitico_finan.id",
  "sortorder" : "asc"
}
```

#### `POST` Analítico (inserir)
```
POST /webservice/v1/planejamento_analitico_finan
```

**Body:**
```json
{
  "id_planejamento_finan": "1",//Obrigatório
  "planejamento_analitico": "Classe teste",//Obrigatório
  "classificacao": "",
  "conta": "",
  "tipo": "",
  "auxiliar": "",
  "contador": "",
  "tipo_aux": "",
  "plan_aux": ""
}
```

#### `PUT` Analítico (editar)
```
PUT /webservice/v1/planejamento_analitico_finan/1
```

**Body:**
```json
{
  "id_planejamento_finan": "1",
  "planejamento_analitico": "teste",//Alterando esse campo
  "classificacao": "",
  "conta": "",
  "tipo": "",
  "auxiliar": "",
  "contador": "",
  "tipo_aux": "",
  "plan_aux": ""
}
```

#### `DELETE` Analítico (deletar)
```
DELETE /webservice/v1/planejamento_analitico_finan/1
```

## Plataforma Voip

### Ramais

#### `GET` Ramais (listar)
```
GET /webservice/v1/voip_sippeers
```

**Body:**
```json
{
    "qtype": "voip_sippeers.id",
    "query": "1",
    "oper": ">=",
    "page": "1",
    "rp": "1000",
    "sortname": "voip_sippeers.id",
    "sortorder": "desc"
}
```

#### `POST` Flux (inserir)
```
POST /webservice/v1/voip_sippeers
```

**Body:**
```json
{
    "tarifa":"",//Plano de cobrança
    "id_contrato": "169",//ID do Contrato (Obrigatório)
    "id_integracao": "1",//ID da Integração no IXC (Obrigatório)
    "callerid": "",//Número para binagem
    "name": "014FF",//Ramal
    "secret": "voip@1000",//Senha
    "ativo": "S",//Ativo S=Sim, N=Não (Obrigatório)
    "id_plano_sip": "",//Planos (planos_voip)
    "use_area_code": "N",//Use Area Code S=Sim, N=Não (Obrigatório)

    // Ocultos - Opcionais
    "id_subscriber_integration": "",// ID do Cliente na Integração
    "id_sip": "",//Identificador da linha na plataforma

    // Esses Ocultos se não preencher, retorna 'Erro ao processar'
    "tipo_linha_sip": "N",
    "recharge_settings": "N",
    "dia_fechamento": "0"
}
```

#### `POST` Magnus Billing (inserir)
```
POST /webservice/v1/voip_sippeers
```

**Body:**
```json
{
    "tarifa":"",//Plano de cobrança
    "id_contrato": "169",//ID do Contrato (Obrigatório)
    "id_integracao": "58",//ID da Integração no IXC (Obrigatório)
    "descricao": "",//Descrição
    "accountcode":"",//Código da conta
    "callerid": "",//Número para binagem
    "secret": "voip@1000",//Senha
    "ativo": "S",//Ativo S=Sim, N=Não (Obrigatório)
    "plano_magnus": "",//Plano Magnus (planos_voip)

    // Esses Ocultos se não preencher, retorna 'Erro ao processar'
    "recharge_settings": "N",
    "tipo_linha_sip": "N",
    "use_area_code": "N",
    "dia_fechamento": "0"
}
```

#### `POST` SaperX (inserir)
```
POST /webservice/v1/voip_sippeers
```

**Body:**
```json
{
    "tarifa":"",//Plano de cobrança (tarifas_grupos)
    "id_contrato": "169",//ID do Contrato (Obrigatório)
    "id_integracao": "58",//ID da Integração no IXC (Obrigatório)
    "accountcode":"",//Código da conta
    "name":"",//Ramal (oculto)
    "tipo_linha_sip": "N",//Tipo linha SIP - N=Normal, P=Portabilidade entrada, S=Portabilidade saída (Obrigatório)
    "secret": "voip@1000",//Senha
    "id_perfis_voip":"",//ID do Perfil VOIP (perfis_voip) 
    "ativo": "S",//Ativo S=Sim, N=Não (Obrigatório)
    "use_area_code": "N",//Use Area Code S=Sim, N=Não (Obrigatório - oculto)
    "calllimit":"",//Limite de ligações simultâneas
    "saperx_plano": "0",//Plano id (planos_voip)
    "saperx_plano_inter": "0",//Plano internacional (planos_voip)
    "dia_fechamento": "0",//Dia do fechamento da fatura
    "saperx_plano_desc": "",//Plano descrição
    "saperx_tipo": "0",//Tipo 1=Pré-pago, 0=Pós-pago
    "sapex_plano_tipo": "scm",//Plano tipo, Valores: scm, stfc, customroute
    "rota_personalizada":"",//Rota personalizada (rota_personalizada)
    "saperx_bina": "0",//Bina, 1=Ativa, 0=Inativa
    "saperx_lc": "0",//LC, 1=Sim, 0=Não
    "saperx_ldn": "0",//LDN 1=Sim, 0=Não
    "saperx_ldi":"",//LDI  1=Sim, 0=Não
    "saperx_vc1": "0",//Libera ramal VC1  1=Sim, 0=Não
    "saperx_vc2": "0",//Libera ramal VC2  1=Sim, 0=Não
    "saperx_vc3": "0",//Libera ramal VC3  1=Sim, 0=Não
    "saperx_ativo": "0",//Status (oculto) 1=Ativa, 0=Inativa

    // Esses Ocultos se não preencher, retorna 'Erro ao processar'
    "id_plano_sip": "",//Planos (planos_voip)
    "recharge_settings": "N"
    
}
```

#### `POST` Zeus (inserir)
```
POST /webservice/v1/voip_sippeers
```

**Body:**
```json
{
    "tarifa":"",//Plano de cobrança
    "id_contrato": "169",//ID do Contrato (Obrigatório)
    "id_integracao": "58",//ID da Integração no IXC (Obrigatório)
    "summit_bid_type":"TERMINAL",//Bid Type Valor padrão: TERMINAL 
    "descricao": "",//Descrição
    "callerid": "",//Número para binagem
    "tipo_linha_sip": "N",//Tipo linha SIP - N=Normal, P=Portabilidade entrada, S=Portabilidade saída (Obrigatório)
    "secret": "voip@1000",//Senha
    "id_sip":"4",//ID da Linha na Integração (oculto)
    "id_perfis_voip":"",//ID do Perfil VOIP (perfis_voip) 
    "ativo": "S",//Ativo S=Sim, N=Não (Obrigatório)
    "use_area_code": "N",//Use Area Code S=Sim, N=Não (Obrigatório)
    "plano_zeus": "",//ID do Plano Zeus (planos_voip_zeus)
    "grupo_plano_zeus": "",//ID do Grupo (grupos_voip_zeus)
    "data_ativacao_zeus": "23/05/2024",//Data Ativação
    "vencimento_zeus": "10",//Vencimento (Zeus)
    "limite_creditos_zeus": "0",//Limite de Créditos Ex:(200)
    "tech_prefix_zeus": "",//Tech Prefix, 1111=Não realizar chamadas ao atingir o limite de crédito, 2222=Bloquear chamada em caso de cliente desativado/portado, 5555=Bloquear IP do cliente que por algum motivo entrou na blacklist, 7777=Bloquear o cliente quando o número de tentativas de chamadas LDI ultrapassa o limite de 10 tentativas em um ciclo (30 segundos), 0=Nehuma ação
    "bloquear_ligacoes_vc1_zeus": "N",//Bloquear ligações vc1 zeus, S=Sim, N=Não
    "bloquear_ligacoes_cobrar_zeus": "N",//Bloquear ligações cobrar zeus, S=Sim, N=Não
    "bloquear_ligacoes_ldn_zeus": "N",//Bloquear ligações ldn zeus, S=Sim, N=Não
    "bloquear_ligacoes_ldi_zeus": "N",//Bloquear ligações ldi zeus, S=Sim, N=Não
    "nao_perturbe_zeus": "0",//Não perturbe, S=Sim, N=Não
    "fullcontact":"",//Registro
    "ipaddr":"",//Endereço IP
    "port":"",//Porta
    "regseconds":"",//Tempo de registro
    "useragent":"",//Equipamento
    "nat":"",//Nat, S=Sim, N=Não
    "host":"",//IP
    "contactpermit":"",//ACL Ips permitidos
    "contactdeny":"",//ACL Ips bloqueados

    // Esses Ocultos se não preencher, retorna 'Erro ao processar'
    "id_plano_sip": "",//Planos (planos_voip)
    "recharge_settings": "N",
    "dia_fechamento": "0"
}
```

#### `POST` Summit Networks (inserir)
```
POST /webservice/v1/voip_sippeers
```

**Body:**
```json
{
    "tarifa":"",//Plano de cobrança (tarifas_grupos)
    "id_contrato": "169",//ID do Contrato (Obrigatório)
    "id_integracao": "58",//ID da Integração no IXC (Obrigatório)
    "summit_bid_type":"TERMINAL",//Bid Type Valores: ---,TERMINAL, TRUNK,
    "trunk_summit": "",//TRUNK(s) (oculto)  
    "descricao": "",//Descrição
    "accountcode":"",//Código da conta
    "callerid": "",//Número para binagem
    "name":"",//Ramal
    "comments_summit":"",//Comentário
    "id_perfis_voip":"",//ID do Perfil VOIP (perfis_voip) 
    "ativo": "S",//Ativo S=Sim, N=Não (Obrigatório)
    "particao_assinante_summit": "",//Participação do assinante, Valore: ---, 1=Petropolis (21214), 2=Teresopolis (21303)
    "categoria_summit": "",//Categoria, Valores: ---, TOTAL, NENHUMA, SIPEXTERNO, FIXO
    "plano_summit": "",//ID Plano (planos_voip_summit)
    "data_ativacao_summit": "22/05/2019",//Data ativação
    "vencimento_summit": "",//Vencimento, Valores: 1=Dia 01, 2=Dia 02. 3=Dia 03, 4=Dia 04...até 25=Dia 25
    "centro_custo_summit": "",//Centro custo summit (centro_custo_summit)
    "limite_chamadas_summit": "",//Limite de chamadas
    "licenca_summit": "",//Licensa, Valores: ---, SIP Trunk, Residential/business basic extension
    "terminal_summit": "",//Terminal
    "credential_summit": "",//Credencial
    
    // Esses Ocultos se não preencher, retorna 'Erro ao processar'
    "id_plano_sip": "0",//Planos (planos_voip)
    "recharge_settings": "N",
    "dia_fechamento": "0",
    "tipo_linha_sip": "N",//Tipo linha SIP - N=Normal, P=Portabilidade entrada, S=Portabilidade saída (Obrigatório)
    "use_area_code": "N"//Use Area Code S=Sim, N=Não (Obrigatório)
}
```

#### `POST` Sippulse (inserir)
```
POST /webservice/v1/voip_sippeers
```

**Body:**
```json
{
    "tarifa":"",//Plano de cobrança (tarifas_grupos)
    "id_contrato": "169",//ID do Contrato (Obrigatório)
    "id_integracao": "58",//ID da Integração no IXC (Obrigatório) 
    "descricao": "",//Descrição
    "callerid": "",//Número para binagem
    "name":"",//Ramal
    "tipo_linha_sip": "N",//Tipo linha SIP - N=Normal, P=Portabilidade entrada, S=Portabilidade saída (Obrigatório)
    "id_perfis_voip":"",//ID do Perfil VOIP (perfis_voip) 
    "ativo": "S",//Ativo S=Sim, N=Não (Obrigatório)
    "gravacao_chamada":"",//Gravação de chamada,S=Sim, N=Não
    "calllimit":"",//Limite de ligações simultâneas
    "rtptimeout":"",//RTP Timeout
    "rtpholdtimeout":"",//RTP hold timeout
    "sippulse_dominio": "",//Domínios (sippulse_dominio)
    "profile":"",//Profiles (sippulse_profile)
    "id_revenda_sip_pulse": "",//Revenda (buscar_revendas_sip_pulse)
    "sippulse_rateplanid": "",//ID plano de tarifas (sippulse_rateplan)
    "ddd":"",//DDD
    "ddi":"",//DDI
    "sippulse_city_code": "",//Código da Localidade
    "sippulse_local_area": "",//Sigla da Localidade
    "sippulse_lowCreditNotification": "false",//Notificação saldo baixo (true, false)
    "sippulse_activeIncomingCalls": "false",//Recebimentos de Chamadas (true, false)
    "sippulse_activeOutgoingCalls": "false",//Execução de Chamadas (true, false)
    "sippulse_activatedailystatistics": "false",//Estatísticas do Dia (true, false)
    "sippulse_callsOnlyByIp": "false",//Execução de chamadas somente por IP (true, false)
    "sippulse_daily_quota": "false",//Cota de consumo diário (true, false)
    "sippulse_daily_quota_tipo": "",//Tipo, M=Minutos, V=Valor
    "sippulse_dailyQuotaConsumed": "",//Cota diária consumida (true, false)
    "sippulse_dailyQuotaLimit": "",//Limite de cota diária (true, false)
    
    // Esses Ocultos se não preencher, retorna 'Erro ao processar'
    "summit_bid_type":"TERMINAL",//Bid Type Valores: ---,TERMINAL, TRUNK,
    "id_plano_sip": "0",//Planos (planos_voip)
    "recharge_settings": "N",
    "dia_fechamento": "0",
    "use_area_code": "N"//Use Area Code S=Sim, N=Não (Obrigatório)
}
```

#### `POST` VSC (inserir)
```
POST /webservice/v1/voip_sippeers
```

**Body:**
```json
{
    "tarifa":"",//Plano de cobrança (tarifas_grupos)
    "id_contrato": "169",//ID do Contrato (Obrigatório)
    "id_integracao": "58",//ID da Integração no IXC (Obrigatório) 
    "tipo_linha_sip": "N",//Tipo linha SIP - N=Normal, P=Portabilidade entrada, S=Portabilidade saída (Obrigatório)
    "id_perfis_voip":"",//ID do Perfil VOIP (perfis_voip) 
    "ativo": "S",//Ativo S=Sim, N=Não (Obrigatório)
    "use_area_code": "N",//Use Area Code S=Sim, N=Não (Obrigatório)
    "vsc_id_batch": "",//ID batch
    "vsc_batch": "",//Batch (vsc_batch)
    "vsc_allowcollectcalls": "false",//Allow collect calls
    "vsc_dontuseccforauth": "false",//Remove country code
    "ddi_vsc": "",//DDI
    "ddd_vsc": "",//DDD
    "vsc_idd_prefix": "",//IDD Prefix
    "vsc_ndd_prefix": "",//NDD Prefix
    "vsc_inboundcallslimit": "1",//Inbound Calls limit
    "vsc_outboundcallslimit": "1",//Outbound Calls limit
    "user_code":"",//User code (range_terminais_lista)
    "billing":"",//Billing, Valores: ---, C=Credit, D=Debit, L=Limited
    "recharge_settings": "N",//Recharge Settings, S=Sim, N=Não
    "dia_recarga_padrao":"",//Dia da recarga padrão
    
    // Esses Ocultos se não preencher, retorna 'Erro ao processar'
    "summit_bid_type":"TERMINAL",//Bid Type Valores: ---,TERMINAL, TRUNK,
    "id_plano_sip": "0",//Planos (planos_voip)
    "dia_fechamento": "0" 
}
```

#### `GET` Planos voip (listar)
```
GET /webservice/v1/planos_voip
```

**Body:**
```json
{
    "qtype": "planos_voip.id",
    "query": "1",
    "oper": ">=",
    "page": "1",
    "rp": "1000",
    "sortname": "planos_voip.id",
    "sortorder": "desc"
}
```

#### `POST` Planos voip (inserir)
```
POST /webservice/v1/planos_voip
```

**Body:**
```json
{
    "descricao": "Padrao",//Obrigatório
    "id_plataforma": "4"//Obrigatório
}
```

#### `PUT` Planos voip (editar)
```
PUT /webservice/v1/planos_voip/10
```

**Body:**
```json
{
    "descricao": "Padrao", 
    "id_plataforma": "4"
}
```

#### `DELETE` Planos voip (deletar)
```
DELETE /webservice/v1/planos_voip/10
```

### Registros de Chamadas

#### `GET` CDR (listar)
```
GET /webservice/v1/cdr
```

**Body:**
```json
{
"qtype": "cdr.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "cdr.id",
"sortorder": "desc"
}
```

#### `POST` CDR (inserir)
```
POST /webservice/v1/cdr
```

**Body:**
```json
{
  "id_sip": "",
  "clid": "",
  "calldate": "",
  "src": "",
  "dst": "",
  "destino": "",
  "duration": "",
  "billsec": "",
  "id_tarifa": "",
  "tp_chamada": "",
  "custo": "",
  "valor_user": "",
  "tarifado": "",
  "lastapp": "",
  "disposition": "",
  "importado": "N",
  "id_iax":""
}
```

#### `PUT` CDR (editar)
```
PUT /webservice/v1/cdr/10
```

**Body:**
```json
{
  "id_sip": "",
  "clid": "Teste API",//Alterando esse campo
  "calldate": "",
  "src": "",
  "dst": "",
  "destino": "",
  "duration": "",
  "billsec": "",
  "id_tarifa": "",
  "tp_chamada": "",
  "custo": "",
  "valor_user": "",
  "tarifado": "",
  "lastapp": "",
  "disposition": "",
  "importado": "N",
  "id_iax":""
}
```

#### `DELETE` CDR (deletar)
```
DELETE /webservice/v1/cdr/10
```

### Range de números cadastrados

#### `GET` Range (listar)
```
GET /webservice/v1/visualizar_range_numeros
```

**Body:**
```json
{
"qtype": "visualizar_range_numeros.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "visualizar_range_numeros.id",
"sortorder": "desc"
}
```

### Tarifação

#### `GET` Plano de tarifas (listar)
```
GET /webservice/v1/tarifas_grupos
```

**Body:**
```json
{
"qtype": "tarifas_grupos.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "tarifas_grupos.id",
"sortorder": "desc"
}
```

#### `POST` Plano de tarifas (inserir)
```
POST /webservice/v1/tarifas_grupos
```

**Body:**
```json
{
  "nome": "Teste API",//Obrigatório
  "id_produto_ligacoes": "1",//Obrigatório
  "ddd": "",
  "ddi": "",
  "dt_ini_vigencia": "",
  "dt_fin_vigencia": "",
  "id_produto_franquia": "",
  "franquia_valor": "",
  "franquia_tempo_segundos": "",
  "id_tarifa_franquia": "",
  "franquia_mascara": ""
}
```

#### `PUT` Plano de tarifas (editar)
```
PUT /webservice/v1/tarifas_grupos/2
```

**Body:**
```json
{
  "nome": "Teste alterando API",//Alterando esse campo
  "id_produto_ligacoes": "1",
  "ddd": "",
  "ddi": "",
  "dt_ini_vigencia": "",
  "dt_fin_vigencia": "",
  "id_produto_franquia": "",
  "franquia_valor": "",
  "franquia_tempo_segundos": "",
  "id_tarifa_franquia": "",
  "franquia_mascara": ""
}
```

#### `DELETE` Plano de tarifas (deletar)
```
DELETE /webservice/v1/tarifas_grupos/2
```

## Processos

### Processo

#### `GET` Processos (listar)
```
GET /webservice/v1/wfl_processo
```

**Body:**
```json
{
"qtype": "wfl_processo.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "wfl_processo.id",
"sortorder": "desc"
}
```

#### `POST` Processos (inserir)
```
POST /webservice/v1/wfl_processo
```

**Body:**
```json
{
  "id_depto": "1",//Obrigatório
  "descricao": "Teste Processos",//Obrigatório
  "ativo": "S",//Obrigatório
  "ultima_atualizacao": "",
  "operador_ultima_atualizacao": ""
}
```

#### `PUT` Processos (editar)
```
PUT /webservice/v1/wfl_processo/45
```

**Body:**
```json
{
  "id_depto": "1",
  "descricao": "Teste Processos de API 2024",//Alterando esse campo
  "ativo": "S",
  "ultima_atualizacao": "",
  "operador_ultima_atualizacao": ""
}
```

#### `DELETE` Processos (deletar)
```
DELETE /webservice/v1/wfl_processo/45
```

### Tarefas

#### `GET` Tarefa (listar)
```
GET /webservice/v1/wfl_tarefa
```

**Body:**
```json
{
  "qtype": "wfl_tarefa.id_processo",
  "query": "1",//ID do Processo
  "oper": "=",
  "rp": "2",
  "sortname": "wfl_tarefa.id",
  "sortorder": "asc"
}
```

#### `POST` Tarefa (inserir)
```
POST /webservice/v1/wfl_tarefa
```

**Body:**
```json
{
  "id_processo": "",//Obrigatório
  "id_setor": "",//Obrigatório
  "descricao": "",//Obrigatório
  "sequencia": "",//Obrigatório
  "prazo_minutos": "",
  "ativo": "",
  "ultima_atualizacao": "",
  "operador_ultima_atualizacao": "",
  "permite_finalizar": "",
  "finaliza_processo": "",
  "gera_comissao": "",
  "origem_prioridade_os": "",
  "decisao": "",
  "obrigatorio": "",
  "id_tarefa_anterior": "",
  "id_proxima_tarefa": ""//Obrigatório
}
```

#### `PUT` Tarefa (editar)
```
PUT /webservice/v1/wfl_tarefa/1
```

**Body:**
```json
{
  "id_processo": "1",
  "id_setor": "1",
  "descricao": "Tarefa 2",//Alterando esse campo
  "sequencia": "",
  "prazo_minutos": "",
  "ativo": "S",
  "ultima_atualizacao": "00/00/0000 00:00:00",
  "operador_ultima_atualizacao": "",
  "permite_finalizar": "S",
  "finaliza_processo": "N",
  "gera_comissao": "ROS",
  "origem_prioridade_os": "OS",
  "decisao": "N",
  "obrigatorio": "S",
  "id_tarefa_anterior": "",
  "id_proxima_tarefa": "1"
}
```

#### `DELETE` Tarefa (deletar)
```
DELETE /webservice/v1/wfl_tarefa/1
```

### Interações

#### `GET` Interação (listar)
```
GET /webservice/v1/wfl_interacoes
```

**Body:**
```json
{
  "qtype": "wfl_interacoes.id_tarefa",
  "query": "1",
  "oper": "=",
  "rp": "2",
  "sortname": "wfl_interacoes.id",
  "sortorder": "asc"
}
```

#### `POST` Interação (inserir)
```
POST /webservice/v1/wfl_tarefa
```

**Body:**
```json
{
  "id_tarefa": "1",
  "id_wfl_param_os": "",
  "id_email": "",
  "id_sms": "",
  "su_status_evento": "",
  "ativa_contrato": "N",
  "destinatario_email": "C",
  "email_destino": "",
  "dispara_proxima": "S",
  "gatilho": "Conclusao",
  "ativo": "S"
}
```

#### `PUT` Interação (editar)
```
PUT /webservice/v1/wfl_tarefa/1
```

**Body:**
```json
{
  "id_tarefa": "1",
  "id_wfl_param_os": "",
  "id_email": "",
  "id_sms": "",
  "su_status_evento": "",
  "ativa_contrato": "N",
  "destinatario_email": "C",
  "email_destino": "",
  "dispara_proxima": "S",
  "gatilho": "Conclusao",
  "ativo": "S"
}
```

#### `DELETE` Interação (deletar)
```
DELETE /webservice/v1/wfl_interacoes/1
```

## Provedor

### Autorizar ONU

#### `GET` Transmissores - OLT (listar)
```
GET /webservice/v1/radpop_radio
```

**Body:**
```json
{
"qtype" : "radpop_radio.id",
"query" : "",
"oper" : "=",
"page" : "1",
"rp" : "2000",
"sortname" : "radpop_radio.id",
"sortorder" : "desc"
}

// Gravar o ID
```

#### `GET` Perfil (listar)
```
GET /webservice/v1/radpop_radio_cliente_fibra_perfil
```

**Body:**
```json
{
    "qtype" : "radpop_radio_cliente_fibra_perfil.id",
    "query" : "1",
    "oper" : ">=",
    "page" : "1",
    "rp" : "2000",
    "sortname" : "radpop_radio_cliente_fibra_perfil.id",
    "sortorder" : "desc"
}

// Gravar o ID
```

#### `GET` ONU não autorizada (listar)
```
GET /webservice/v1/fh_onu_nao_autorizadas
```

**Body:**
```json
{
    "grid_param": "[{\"TB\": \"id_olt\",\"P\": \"{{ID_OLT}}\"}]"  
}

// Gravar o ID
```

#### `POST` Autorizar ONU (inserir)
```
POST /webservice/v1/fh_onu_nao_autorizadas_22396
```

**Body:**
```json
{
    "get_id":"1"//Insira o ID de ONU não autorizada
}
```

#### `PUT` Cliente Fibra (editar)
```
PUT /webservice/v1/radpop_radio_cliente_fibra/id_cliente_fibra
```

**Body:**
```json
// Insira os valores gravado de Perfil e Transmissores no PUT do ID do cliente fibra gravado
// ID de Perfil => id_perfil
// ID de Transmissores  => id_transmissor
{
            "id_projeto": "",
            "id_contrato": "",
            "gemport": "",
            "ip_gerencia": "",
            "login_onu_cliente": "",
            "senha_onu_cliente": "",
            "porta_telnet_onu_cliente": "",
            "perfil_onu_cliente": "",
            "script_onu_cliente": "",
            "senorid": "",
            "latitude": "",
            "longitude": "",
            "endereco_padrao_cliente": "",
            "id_condominio": "",
            "bloco": "",
            "apartamento": "",
            "cep": "",
            "endereco": "",
            "numero": "",
            "bairro": "",
            "cidade": "",
            "referencia": "",
            "complemento": "",
            "distancia_onu": "",
            "vlan_dhcp": "",
            "vlan_tr69": "",
            "vlan_iptv": "",
            "vlan_voip": "",
            "vlan_pppoe": "",
            "vlan_outros": "",
            "id_ramal": "",
            "id_onu_unms": "",
            "id_activity": "",
            "radpop_estrutura": "",
            "porta_web_onu_cliente": "",
            "tipo_operacao": "",
            "id_transmissor": "",
            "nome": "",
            "id_caixa_ftth": "",
            "porta_ftth": "",
            "id_login": "",
            "onu_numero": "",
            "service_port": "",
            "onu_tipo": "",
            "ponid": "",
            "mac": "",
            "comandos": "",
            "sinal_rx": "",
            "sinal_tx": "",
            "temperatura": "",
            "voltagem": "",
            "data_sinal": "",
            "id_perfil": "",
            "slotno": "",
            "ponno": "",
            "tipo_autenticacao": "",
            "versao": "",
            "vlan": "",
            "causa_ultima_queda": "",
            "id_hardware": ""
        }
```

#### `POST` Gravar dispositivo (inserir)
```
POST /webservice/v1/botao_gravar_dispositivo_22408
```

**Body:**
```json
{
"id" : "4"//ID de Cliente fibra
}
```

### Login

#### `GET` Login (listar)
```
GET /webservice/v1/radusuarios
```

**Body:**
```json
{
    "qtype": "radusuarios.id",
    "query": "1",
    "oper": ">=",
    "page": "1",
    "rp": "20",
    "sortname": "radusuarios.id",
    "sortorder": "desc"
}
```

#### `POST` Login (inserir)
```
POST /webservice/v1/radusuarios
```

**Body:**
```json
{
    "autenticacao_por_mac": "P",
    "relacionar_concentrador_ao_login": "H",
    "agent_circuit_id": "",
    "pool_radius": "0",
    "id_rad_dns": "0",
    "modelo_tranmissor": "",
    "auto_preencher_ipv6": "H",
    "fixar_ipv6": "H",
    "relacionar_ipv6_ao_login": "H",
    "ip_aux": "",
    "porta_aux": "0",
    "id_radgrupos_pools": "0",
    "service_tag_vlan": "N",
    "acct_session_id": "",
    "senha_rede_sem_fio_5ghz": "",
    "ssid_router_wifi_5ghz": "",
    "mtu": "1500",
    "onu_compartilhada": "",
    "id_reserva_rede_neutra": "0",
    "tipo_acesso": "http",
    "usuario_wpa2aes": "",
    "senha_wpa2aes": "",
    "pacote_lte": "",
    "id": "4709",
    "ativo": "S",
    "online": "SS",
    "tipo_conexao_mapa": "58",
    "id_contrato": "2302",
    "id_grupo": "20",
    "id_cliente": "2246",
    "login": "joaotreinamento",
    "obs": "",
    "senha": "123456",
    "auto_preencher_ip": "H",
    "ip": "",
    "auto_preencher_mac": "H",
    "pd_ipv6": "",
    "mac": "",
    "endereco": "",
    "numero": "",
    "complemento": "",
    "relacionar_ip_ao_login": "H",
    "bairro": "",
    "relacionar_mac_ao_login": "H",
    "conexao": "",
    "id_concentrador": "0",
    "latitude": "",
    "longitude": "",
    "concentrador": "",
    "tipo_conexao": "",
    "ultima_conexao_inicial": "0000-00-00 00:00:00",
    "ultima_conexao_final": "0000-00-00 00:00:00",
    "interface": "0",
    "tempo_conectado": "0",
    "franquia_maximo": "0",
    "franquia_consumo": "0.00000",
    "autenticacao": "L",
    "login_simultaneo": "1",
    "senha_md5": "N",
    "fixar_ip": "H",
    "ip_aviso": "",
    "porta_http": "80",
    "porta_router2": "8080",
    "id_transmissor": "0",
    "id_caixa_ftth": "0",
    "ftth_porta": "0",
    "senha_router1": "",
    "senha_router2": "",
    "senha_rede_sem_fio": "",
    "id_porta_transmissor": "0",
    "cliente_tem_a_senha": "N",
    "franquia_atingida": "N",
    "autenticacao_wps": "N",
    "id_df_projeto": "0",
    "autenticacao_mac": "N",
    "motivo_desconexao": "",
    "autenticacao_wpa": "",
    "tempo_conexao": "0",
    "tipo_vinculo_plano": "D",
    "count_desconexao": "0",
    "onu_mac": "",
    "vlan": "0",
    "vlan_ip_rede": "",
    "id_hardware": "0",
    "id_condominio": "0",
    "tipo_equipamento": "",
    "metragem_interna": "0",
    "metragem_externa": "0",
    "tronco": "",
    "splitter": "0",
    "sinal_ultimo_atendimento": "",
    "interface_transmissao": "0",
    "franquia_consumo_up": "0.00000",
    "endereco_padrao_cliente": "S",
    "cidade": "0",
    "cep": "",
    "referencia": "",
    "ssid_router_wifi": "",
    "bloco": "",
    "apartamento": "0",
    "usuario_router1": "",
    "upload_atual": "0",
    "download_atual": "0",
    "gw_vlan": "",
    "id_filial": "1",
    "ponta": "",
    "ultima_atualizacao": "0000-00-00 00:00:00",
    "framed_fixar_ipv6": "H",
    "framed_autopreencher_ipv6": "H",
    "framed_relacionar_ipv6_ao_login": "H",
    "framed_pd_ipv6": "",
    "lte_id": "",
    "id_integracao": "0"
}
```

#### `PUT` Login (editar)
```
PUT /webservice/v1/radusuarios/4709
```

**Body:**
```json
{
    "autenticacao_por_mac": "P",
    "relacionar_concentrador_ao_login": "H",
    "agent_circuit_id": "",
    "pool_radius": "0",
    "id_rad_dns": "0",
    "modelo_tranmissor": "",
    "auto_preencher_ipv6": "H",
    "fixar_ipv6": "H",
    "relacionar_ipv6_ao_login": "H",
    "ip_aux": "",
    "porta_aux": "0",
    "id_radgrupos_pools": "0",
    "service_tag_vlan": "N",
    "acct_session_id": "",
    "senha_rede_sem_fio_5ghz": "",
    "ssid_router_wifi_5ghz": "",
    "mtu": "1500",
    "onu_compartilhada": "",
    "id_reserva_rede_neutra": "0",
    "tipo_acesso": "http",
    "usuario_wpa2aes": "",
    "senha_wpa2aes": "",
    "pacote_lte": "",
    "id": "4709",
    "ativo": "S",
    "online": "SS",
    "tipo_conexao_mapa": "58",
    "id_contrato": "2302",
    "id_grupo": "20",
    "id_cliente": "2246",
    "login": "joaotreinamento",
    "obs": "",
    "senha": "123456",
    "auto_preencher_ip": "H",
    "ip": "",
    "auto_preencher_mac": "H",
    "pd_ipv6": "",
    "mac": "",
    "endereco": "",
    "numero": "",
    "complemento": "",
    "relacionar_ip_ao_login": "H",
    "bairro": "",
    "relacionar_mac_ao_login": "H",
    "conexao": "",
    "id_concentrador": "0",
    "latitude": "",
    "longitude": "",
    "concentrador": "",
    "tipo_conexao": "",
    "ultima_conexao_inicial": "0000-00-00 00:00:00",
    "ultima_conexao_final": "0000-00-00 00:00:00",
    "interface": "0",
    "tempo_conectado": "0",
    "franquia_maximo": "0",
    "franquia_consumo": "0.00000",
    "autenticacao": "L",
    "login_simultaneo": "1",
    "senha_md5": "N",
    "fixar_ip": "H",
    "ip_aviso": "",
    "porta_http": "80",
    "porta_router2": "8080",
    "id_transmissor": "0",
    "id_caixa_ftth": "0",
    "ftth_porta": "0",
    "senha_router1": "",
    "senha_router2": "",
    "senha_rede_sem_fio": "",
    "id_porta_transmissor": "0",
    "cliente_tem_a_senha": "N",
    "franquia_atingida": "N",
    "autenticacao_wps": "N",
    "id_df_projeto": "0",
    "autenticacao_mac": "N",
    "motivo_desconexao": "",
    "autenticacao_wpa": "",
    "tempo_conexao": "0",
    "tipo_vinculo_plano": "D",
    "count_desconexao": "0",
    "onu_mac": "",
    "vlan": "0",
    "vlan_ip_rede": "",
    "id_hardware": "0",
    "id_condominio": "0",
    "tipo_equipamento": "",
    "metragem_interna": "0",
    "metragem_externa": "0",
    "tronco": "",
    "splitter": "0",
    "sinal_ultimo_atendimento": "",
    "interface_transmissao": "0",
    "franquia_consumo_up": "0.00000",
    "endereco_padrao_cliente": "S",
    "cidade": "0",
    "cep": "",
    "referencia": "",
    "ssid_router_wifi": "",
    "bloco": "",
    "apartamento": "0",
    "usuario_router1": "",
    "upload_atual": "0",
    "download_atual": "0",
    "gw_vlan": "",
    "id_filial": "1",
    "ponta": "",
    "ultima_atualizacao": "0000-00-00 00:00:00",
    "framed_fixar_ipv6": "H",
    "framed_autopreencher_ipv6": "H",
    "framed_relacionar_ipv6_ao_login": "H",
    "framed_pd_ipv6": "",
    "lte_id": "",
    "id_integracao": "0"
}
```

#### `DELETE` Login (deletar)
```
DELETE /webservice/v1/radusuarios/4709
```

#### `GET` PPPoe (listar)
```
GET /webservice/v1/radusuarios
```

**Body:**
```json
{
    "qtype" : "radusuarios.autenticacao",
    "query" : "L",
    "oper" : "=",
    "page" : "1",
    "rp" : "20",
    "sortname" : "radusuarios.id",
    "sortorder" : "desc"
}
```

#### `POST` PPPoE (inserir)
```
POST /webservice/v1/radusuarios
```

**Body:**
```json
{//Todos os campos são obrigatórios
  "autenticacao":"L",

  "tipo_conexao_mapa":"58",
  "id_cliente":"2246",
  "id_contrato":"2300",
  "id_grupo":"9",
  "login":"teste_pppoe",
  "senha_md5":"N",
  "senha":"skejdfviver323",
  "login_simultaneo":"1",
  "ativo":"S",
  "auto_preencher_ip":"S",
  "fixar_ip":"N",
  "relacionar_ip_ao_login":"N",
  "autenticacao_por_mac":"N",
  "auto_preencher_mac":"S",
  "relacionar_mac_ao_login":"S",
  "tipo_vinculo_plano":"D"
 }
```

#### `PUT` PPPoE (editar)
```
PUT /webservice/v1/radusuarios/4708
```

**Body:**
```json
{
  "autenticacao":"L",

  "tipo_conexao_mapa":"F",//Alterando esse campo
  "id_cliente":"2246",
  "id_contrato":"2300",
  "id_grupo":"9",
  "login":"teste_pppoe",
  "senha_md5":"N",
  "senha":"skejdfviver323",
  "login_simultaneo":"1",
  "ativo":"S",
  "auto_preencher_ip":"S",
  "fixar_ip":"N",
  "relacionar_ip_ao_login":"N",
  "autenticacao_por_mac":"N",
  "auto_preencher_mac":"S",
  "relacionar_mac_ao_login":"S",
  "tipo_vinculo_plano":"D"
 }
```

#### `DELETE` PPPoE (deletar)
```
DELETE /webservice/v1/radusuarios/4708
```

#### `GET` Hotspot (listar)
```
GET /webservice/v1/radusuarios
```

**Body:**
```json
{
    "qtype" : "radusuarios.autenticacao",
    "query" : "H",
    "oper" : "=",
    "page" : "1",
    "rp" : "20",
    "sortname" : "radusuarios.id",
    "sortorder" : "desc"
}
```

#### `POST` Hotspot (inserir)
```
POST /webservice/v1/radusuarios
```

**Body:**
```json
{//Todos os campos são obrigatórios
  "autenticacao": "H",

  "tipo_conexao_mapa": "58",
  "id_cliente": "2246",
  "id_contrato": "2300",
  "id_grupo": "9",
  "login": "teste_hotspot",
  "agent_circuit_id": "",
  "senha_md5": "N",
  "senha": "rfu23423jkfg",
  "login_simultaneo": "1",
  "ativo": "S",
  "ip": "0.0.0.1",
  "auto_preencher_ip": "S",
  "fixar_ip": "S",
  "relacionar_ip_ao_login":"H",
  "autenticacao_por_mac": "N",
  "auto_preencher_mac": "S",
  "relacionar_mac_ao_login": "S",
  "tipo_vinculo_plano": "D"
}
```

#### `PUT` Hotspot (editar)
```
PUT /webservice/v1/radusuarios/4709
```

**Body:**
```json
{
  "autenticacao": "H",

  "tipo_conexao_mapa": "F",//Alterando esse campo
  "id_cliente": "2246",
  "id_contrato": "2300",
  "id_grupo": "9",
  "login": "teste_hotspot",
  "agent_circuit_id": "",
  "senha_md5": "N",
  "senha": "rfu23423jkfg",
  "login_simultaneo": "1",
  "ativo": "S",
  "ip": "0.0.0.1",
  "auto_preencher_ip": "S",
  "fixar_ip": "S",
  "relacionar_ip_ao_login":"H",
  "autenticacao_por_mac": "N",
  "auto_preencher_mac": "S",
  "relacionar_mac_ao_login": "S",
  "tipo_vinculo_plano": "D"
}
```

#### `DELETE` Hotspot (deletar)
```
DELETE /webservice/v1/radusuarios/4709
```

#### `GET` IP X MAC (listar)
```
GET /webservice/v1/radusuarios
```

**Body:**
```json
{
    "qtype" : "radusuarios.autenticacao",
    "query" : "M",
    "oper" : "=",
    "page" : "1",
    "rp" : "20",
    "sortname" : "radusuarios.id",
    "sortorder" : "desc"
}
```

#### `POST` IP X MAC (inserir)
```
POST /webservice/v1/radusuarios
```

**Body:**
```json
{//Todos os campos são obrigatórios
  "autenticacao":"M",

  "tipo_conexao_mapa":"58",
  "id_cliente":"2246",
  "id_contrato":"2300",
  "id_grupo":"9",
  "login":"teste_ipxmac",
  "senha_md5":"N",
  "senha":"rfefverfw234",
  "login_simultaneo":"1",
  "ativo":"S",
  "auto_preencher_ip":"S",
  "fixar_ip":"N",
  "ip":"0.0.0.0",
  "relacionar_ip_ao_login":"H",
  "autenticacao_por_mac":"P",
  "mac":"1C:1C:1C:1C",
  "auto_preencher_mac":"S",
  "relacionar_mac_ao_login":"S",
  "tipo_vinculo_plano":"P"
 }
```

#### `PUT` IP X MAC (editar)
```
PUT /webservice/v1/radusuarios/4708
```

**Body:**
```json
{
  "autenticacao":"M",

  "tipo_conexao_mapa":"F",//Alterando esse campo
  "id_cliente":"2246",
  "id_contrato":"2300",
  "id_grupo":"9",
  "login":"teste_ipxmac",
  "senha_md5":"N",
  "senha":"rfefverfw234",
  "login_simultaneo":"1",
  "ativo":"S",
  "auto_preencher_ip":"S",
  "fixar_ip":"N",
  "ip":"0.0.0.0",
  "relacionar_ip_ao_login":"H",
  "autenticacao_por_mac":"P",
  "mac":"1C:1C:1C:1C",
  "auto_preencher_mac":"S",
  "relacionar_mac_ao_login":"S",
  "tipo_vinculo_plano":"P"
 }
```

#### `DELETE` IP X MAC (deletar)
```
DELETE /webservice/v1/radusuarios/4708
```

#### `GET` VLan (listar)
```
GET /webservice/v1/radusuarios
```

**Body:**
```json
{
    "qtype" : "radusuarios.autenticacao",
    "query" : "V",
    "oper" : "=",
    "page" : "1",
    "rp" : "20",
    "sortname" : "radusuarios.id",
    "sortorder" : "desc"
}
```

#### `POST` VLan (inserir)
```
POST /webservice/v1/radusuarios
```

**Body:**
```json
{//Todos os campos são obrigatórios
  "autenticacao":"V",

  "tipo_conexao_mapa":"58",
  "id_cliente":"2246",
  "id_contrato":"2300",
  "id_grupo":"9",
  "login":"teste_vlan",
  "senha_md5":"N",
  "senha":"fsd8f67s",
  "login_simultaneo":"1",
  "ativo":"S",
  "auto_preencher_ip":"S",
  "fixar_ip":"N",
  "autenticacao_por_mac":"N",
  "auto_preencher_mac":"S",
  "relacionar_mac_ao_login":"N",
  "tipo_vinculo_plano":"D",

  "id_concentrador":"1",
  "interface":"1",
  "relacionar_ip_ao_login": "N",
  "vlan":"324",
  "vlan_ip_rede": "0.0.0.2"
}
```

#### `PUT` VLan (editar)
```
PUT /webservice/v1/radusuarios/4708
```

**Body:**
```json
{
  "autenticacao":"V",

  "tipo_conexao_mapa":"58",//alterando esse campo
  "id_cliente":"2246",
  "id_contrato":"2300",
  "id_grupo":"9",
  "login":"teste_vlan",
  "senha_md5":"N",
  "senha":"fsd8f67s",
  "login_simultaneo":"1",
  "ativo":"S",
  "auto_preencher_ip":"S",
  "fixar_ip":"N",
  "autenticacao_por_mac":"N",
  "auto_preencher_mac":"S",
  "relacionar_mac_ao_login":"N",
  "tipo_vinculo_plano":"D",

  "id_concentrador":"1",
  "interface":"1",
  "relacionar_ip_ao_login": "N",
  "vlan":"324",
  "vlan_ip_rede": "0.0.0.2"
}
```

#### `DELETE` VLan (deletar)
```
DELETE /webservice/v1/radusuarios/4708
```

#### `GET` IPoE (listar)
```
GET /webservice/v1/radusuarios
```

**Body:**
```json
{
    "qtype" : "radusuarios.autenticacao",
    "query" : "D",
    "oper" : "=",
    "page" : "1",
    "rp" : "20",
    "sortname" : "radusuarios.id",
    "sortorder" : "desc"
}
```

#### `POST` IPoE (inserir)
```
POST /webservice/v1/radusuarios
```

**Body:**
```json
{//Todos os campos são obrigatórios
  "autenticacao":"D",

  "tipo_conexao_mapa":"58",
  "id_cliente":"2246",
  "id_contrato":"2300",
  "id_grupo":"9",
  "login":"teste_ipoe",
  "senha_md5":"N",
  "login_simultaneo":"1",
  "ativo":"S",
  "auto_preencher_ip":"S",
  "fixar_ip":"N",
  "autenticacao_por_mac":"N",
  "auto_preencher_mac":"S",
  "relacionar_mac_ao_login":"N",
  "tipo_vinculo_plano":"D",

  "id_concentrador":"1",
  "interface":"1",
  "relacionar_ip_ao_login": "N",
  "vlan":"324",
  "vlan_ip_rede": "0.0.0.2"
}
```

#### `PUT` IPoE (editar)
```
PUT /webservice/v1/radusuarios/4711
```

**Body:**
```json
{
  "autenticacao":"D",

  "tipo_conexao_mapa":"F",//Alterando esse campo
  "id_cliente":"2246",
  "id_contrato":"2300",
  "id_grupo":"9",
  "login":"teste_ipoe",
  "senha_md5":"N",
  "login_simultaneo":"1",
  "ativo":"S",
  "auto_preencher_ip":"S",
  "fixar_ip":"N",
  "autenticacao_por_mac":"N",
  "auto_preencher_mac":"S",
  "relacionar_mac_ao_login":"N",
  "tipo_vinculo_plano":"D",

  "id_concentrador":"1",
  "interface":"1",
  "relacionar_ip_ao_login": "N",
  "vlan":"324",
  "vlan_ip_rede": "0.0.0.2"
}
```

#### `DELETE` IPoE (deletar)
```
DELETE /webservice/v1/radusuarios/4711
```

#### `GET` Integração (listar)
```
GET /webservice/v1/radusuarios
```

**Body:**
```json
{
    "qtype" : "radusuarios.autenticacao",
    "query" : "I",
    "oper" : "=",
    "page" : "1",
    "rp" : "20",
    "sortname" : "radusuarios.id",
    "sortorder" : "desc"
}
```

#### `POST` Integração (inserir)
```
POST /webservice/v1/radusuarios
```

**Body:**
```json
{//Todos os campos são obrigatórios
  "autenticacao":"I",

  "tipo_conexao_mapa":"58",
  "id_integracao":"",
  "id_cliente":"2246",
  "id_contrato":"2300",
  "id_grupo":"9",
  "login":"teste_integracao",
  "senha_md5":"N",
  "login_simultaneo":"1",
  "ativo":"S",
  "auto_preencher_ip":"S",
  "fixar_ip":"N",
  "autenticacao_por_mac":"N",
  "auto_preencher_mac":"S",
  "relacionar_mac_ao_login":"N",
  "tipo_vinculo_plano":"D",

  "id_concentrador":"1",
  "interface":"1",
  "relacionar_ip_ao_login": "N",
  "vlan":"324",
  "vlan_ip_rede": "0.0.0.2"
}
```

#### `PUT` Integração (editar)
```
PUT /webservice/v1/radusuarios/4712
```

**Body:**
```json
{//Todos os campos são obrigatórios
  "autenticacao":"I",

  "tipo_conexao_mapa":"F",//Alterando esse campo
  "id_integracao":"",
  "id_cliente":"2246",
  "id_contrato":"2300",
  "id_grupo":"9",
  "login":"teste_integracao",
  "senha_md5":"N",
  "login_simultaneo":"1",
  "ativo":"S",
  "auto_preencher_ip":"S",
  "fixar_ip":"N",
  "autenticacao_por_mac":"N",
  "auto_preencher_mac":"S",
  "relacionar_mac_ao_login":"N",
  "tipo_vinculo_plano":"D",

  "id_concentrador":"1",
  "interface":"1",
  "relacionar_ip_ao_login": "N",
  "vlan":"324",
  "vlan_ip_rede": "0.0.0.2"
}
```

#### `DELETE` Integração (deletar)
```
DELETE /webservice/v1/radusuarios/4712
```

#### `GET` Externa (listar)
```
GET /webservice/v1/radusuarios
```

**Body:**
```json
{
    "qtype" : "radusuarios.autenticacao",
    "query" : "E",
    "oper" : "=",
    "page" : "1",
    "rp" : "20",
    "sortname" : "radusuarios.id",
    "sortorder" : "desc"
}
```

#### `POST` Externa (inserir)
```
POST /webservice/v1/radusuarios
```

**Body:**
```json
{//Todos os campos são obrigatórios
  "autenticacao":"E",

  "tipo_conexao_mapa":"58",
  "id_cliente":"2246",
  "id_contrato":"2300",
  "id_grupo":"9",
  "login":"teste_externa",
  "senha_md5":"N",
  "login_simultaneo":"1",
  "ativo":"S",
  "auto_preencher_ip":"S",
  "fixar_ip":"N",
  "autenticacao_por_mac":"N",
  "auto_preencher_mac":"S",
  "relacionar_mac_ao_login":"N",
  "tipo_vinculo_plano":"D",

  "id_concentrador":"1",
  "interface":"1",
  "relacionar_ip_ao_login": "N",
  "vlan":"324",
  "vlan_ip_rede": "0.0.0.2"
}
```

#### `PUT` Externa (editar)
```
PUT /webservice/v1/radusuarios/4712
```

**Body:**
```json
{//Todos os campos são obrigatórios
  "autenticacao":"E",

  "tipo_conexao_mapa":"F",//Alterando esse campo
  "id_cliente":"2246",
  "id_contrato":"2300",
  "id_grupo":"9",
  "login":"teste_externa",
  "senha_md5":"N",
  "login_simultaneo":"1",
  "ativo":"S",
  "auto_preencher_ip":"S",
  "fixar_ip":"N",
  "autenticacao_por_mac":"N",
  "auto_preencher_mac":"S",
  "relacionar_mac_ao_login":"N",
  "tipo_vinculo_plano":"D",

  "id_concentrador":"1",
  "interface":"1",
  "relacionar_ip_ao_login": "N",
  "vlan":"324",
  "vlan_ip_rede": "0.0.0.2"
}
```

#### `DELETE` Externa (deletar)
```
DELETE /webservice/v1/radusuarios/4712
```

#### `GET` Consumo (listar)
```
GET /webservice/v1/radusuarios_consumo
```

**Body:**
```json
{
"qtype": "radusuarios_consumo.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "radusuarios_consumo.id",
"sortorder": "desc"
}
```

#### `POST` Consumo (inserir)
```
POST /webservice/v1/radusuarios_consumo
```

**Body:**
```json
{
  "id_login": "4710",
  "data": "20/06/2024",
  "consumo": "200",
  "consumo_upload": "200"
}
```

#### `PUT` Consumo (editar)
```
PUT /webservice/v1/radusuarios_consumo/49165
```

**Body:**
```json
{
  "id_login": "4710",
  "data": "20/06/2025",//Alterando esse campo
  "consumo": "200",
  "consumo_upload": "200"
}
```

#### `DELETE` Consumo (deletar)
```
DELETE /webservice/v1/radusuarios_consumo/49165
```

#### `GET` Consumo Diário (listar)
```
GET /webservice/v1/radusuarios_consumo_d
```

**Body:**
```json
{
"qtype": "radusuarios_consumo_d.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "radusuarios_consumo_d.id",
"sortorder": "desc"
}
```

#### `POST` Consumo Diário (inserir)
```
POST /webservice/v1/radusuarios_consumo_d
```

**Body:**
```json
{
  "id_login": "4710",
  "data": "20/06/2024",
  "consumo": "200",
  "consumo_upload": "200"
}
```

#### `PUT` Consumo Diário (editar)
```
PUT /webservice/v1/radusuarios_consumo_d/49165
```

**Body:**
```json
{
  "id_login": "4710",
  "data": "20/06/2025",//Alterando esse campo
  "consumo": "200",
  "consumo_upload": "200"
}
```

#### `DELETE` Consumo Diário (deletar)
```
DELETE /webservice/v1/radusuarios_consumo_d/49165
```

#### `GET` Consumo Mensal (listar)
```
GET /webservice/v1/radusuarios_consumo_m
```

**Body:**
```json
{
"qtype": "radusuarios_consumo_m.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "radusuarios_consumo_m.id",
"sortorder": "desc"
}
```

#### `POST` Consumo Mensal (inserir)
```
POST /webservice/v1/radusuarios_consumo_m
```

**Body:**
```json
{
  "id_login": "4710",
  "data": "20/06/2024",
  "consumo": "200",
  "consumo_upload": "200"
}
```

#### `PUT` Consumo Mensal (editar)
```
PUT /webservice/v1/radusuarios_consumo_m/49165
```

**Body:**
```json
{
  "id_login": "4710",
  "data": "20/06/2025",//Alterando esse campo
  "consumo": "200",
  "consumo_upload": "200"
}
```

#### `DELETE` Consumo Mensal (deletar)
```
DELETE /webservice/v1/radusuarios_consumo_m/49165
```

#### `POST` Desconectar Login
```
POST /webservice/v1/desconectar_clientes
```

**Body:**
```json
{
    "id":""
}
```

#### `POST` Limpar MAC
```
POST /webservice/v1/radusuarios_25452
```

**Body:**
```json
{
    "get_id":""
}
```

### Planos de velocidades

#### `GET` Plano de velocidades (listar)
```
GET /webservice/v1/radgrupos
```

**Body:**
```json
{
"qtype": "radgrupos.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "radgrupos.id",
"sortorder": "desc"
}
```

#### `POST` Plano de velocidades (inserir)
```
POST /webservice/v1/radgrupos
```

**Body:**
```json
{
  "tipo": "I",//Obrigatório
  "id_produto": "1",//Obrigatório
  "grupo": "Plano_Teste",//Obrigatório
  "id_pool": "",
  "id_rad_dns": "",
  "address_list": "",
  "address_list_ipv6": "",
  "valor_produto": "",
  "cor_mapa": "",
  "ultima_atualizacao": "",
  "tipo_integracao_neutra": "",
  "operador_neutro": "",
  "plano_velocidade_neutro": "",
  "pacote_integracao": "",
  "service_type": "",
  "qos_ativo": "",//Caso o qos estiver preenchido com S, preencha os campos download e upload
  "alteracao_velocidade": "S",//Obrigatório
  "ativo_normal": "N",//Obrigatório
  "horas_normal": "",
  "upload": "",
  "upload_busrt": "",
  "upload_busrt_th": "",
  "upload_busrt_time": "",
  "download": "",
  "download_busrt": "",
  "download_busrt_th": "",
  "download_busrt_time": "",
  "prioridade": "1",//Obrigatório
  "garantia_upload": "",
  "garantia_download": "",
  "red_ativo": "",
  "horas_reduzido": "",
  "id_plano_reduzir": "",
  "red_upload": "",
  "red_upload_busrt": "",
  "red_upload_busrt_th": "",
  "red_upload_busrt_time": "",
  "red_download": "",
  "red_download_busrt": "",
  "red_download_busrt_th": "",
  "red_download_busrt_time": "",
  "red_prioridade": "",
  "red_garantia_upload": "",
  "red_garantia_download": "",
  "tur_ativo": "",
  "horas_turbinado": "",
  "id_plano_turbinar": "",
  "tur_upload": "",
  "tur_upload_busrt": "",
  "tur_upload_busrt_th": "",
  "tur_upload_busrt_time": "",
  "tur_download": "",
  "tur_download_busrt": "",
  "tur_download_busrt_th": "",
  "tur_download_busrt_time": "",
  "tur_prioridade": "",
  "tur_garantia_upload": "",
  "tur_garantia_download": "",
  "franquia_mensal": "1",//Obrigatório
  "tipo_franquia": "M",//Obrigatório
  "id_plano_franquia": "",
  "reduzir_dias_atraso": "",
  "id_plano_atraso": "",
  "sici_tecnologia": "M",//Obrigatório
  "dici_download": "",
  "dici_tipo_conexao_mapa": "",
  "type_band_control": "",
  "ingress_juniper_policy_l2": "",
  "egress_juniper_policy_l2": "",
  "juniper_static_policy": "",
  "ingress_juniper_policy_ipv4": "",
  "egress_juniper_policy_ipv4": "",
  "ingress_juniper_policy_ipv6": "",
  "egress_juniper_policy_ipv6": "",
  "nome_perfil_router": "",
  "perfil_juniper_ipv6": "",
  "usa_perfil_huawei_dinamico": "",
  "nome_perfil_router_huawei": "",
  "cisco_police_in": "",
  "cisco_police_out": "",
  "ingress_cisco_policy_ipv6": "",
  "egress_cisco_policy_ipv6": "",
  "usa_perfil_nokia_dinamico": "",
  "usa_perfil_nokia": "",
  "usar_perfil_nokia_e": "",
  "nome_perfil_router_nokia": "",
  "olt_hw_download": "",
  "olt_hw_upload": "",
  "perfil_fiberhome": ""
}
```

#### `PUT` Plano de velocidades (editar)
```
PUT /webservice/v1/radgrupos/21
```

**Body:**
```json
{
  "tipo": "I",
  "id_produto": "1",
  "grupo": "Plano_Teste2",//Alterando esse campo
  "id_pool": "",
  "id_rad_dns": "",
  "address_list": "",
  "address_list_ipv6": "",
  "valor_produto": "",
  "cor_mapa": "",
  "ultima_atualizacao": "",
  "tipo_integracao_neutra": "",
  "operador_neutro": "",
  "plano_velocidade_neutro": "",
  "pacote_integracao": "",
  "service_type": "",
  "qos_ativo": "",
  "alteracao_velocidade": "S",
  "ativo_normal": "N",
  "horas_normal": "",
  "upload": "",
  "upload_busrt": "",
  "upload_busrt_th": "",
  "upload_busrt_time": "",
  "download": "",
  "download_busrt": "",
  "download_busrt_th": "",
  "download_busrt_time": "",
  "prioridade": "1",
  "garantia_upload": "",
  "garantia_download": "",
  "red_ativo": "",
  "horas_reduzido": "",
  "id_plano_reduzir": "",
  "red_upload": "",
  "red_upload_busrt": "",
  "red_upload_busrt_th": "",
  "red_upload_busrt_time": "",
  "red_download": "",
  "red_download_busrt": "",
  "red_download_busrt_th": "",
  "red_download_busrt_time": "",
  "red_prioridade": "",
  "red_garantia_upload": "",
  "red_garantia_download": "",
  "tur_ativo": "",
  "horas_turbinado": "",
  "id_plano_turbinar": "",
  "tur_upload": "",
  "tur_upload_busrt": "",
  "tur_upload_busrt_th": "",
  "tur_upload_busrt_time": "",
  "tur_download": "",
  "tur_download_busrt": "",
  "tur_download_busrt_th": "",
  "tur_download_busrt_time": "",
  "tur_prioridade": "",
  "tur_garantia_upload": "",
  "tur_garantia_download": "",
  "franquia_mensal": "1",
  "tipo_franquia": "M",
  "id_plano_franquia": "",
  "reduzir_dias_atraso": "",
  "id_plano_atraso": "",
  "sici_tecnologia": "M",
  "dici_download": "",
  "dici_tipo_conexao_mapa": "",
  "type_band_control": "",
  "ingress_juniper_policy_l2": "",
  "egress_juniper_policy_l2": "",
  "juniper_static_policy": "",
  "ingress_juniper_policy_ipv4": "",
  "egress_juniper_policy_ipv4": "",
  "ingress_juniper_policy_ipv6": "",
  "egress_juniper_policy_ipv6": "",
  "nome_perfil_router": "",
  "perfil_juniper_ipv6": "",
  "usa_perfil_huawei_dinamico": "",
  "nome_perfil_router_huawei": "",
  "cisco_police_in": "",
  "cisco_police_out": "",
  "ingress_cisco_policy_ipv6": "",
  "egress_cisco_policy_ipv6": "",
  "usa_perfil_nokia_dinamico": "",
  "usa_perfil_nokia": "",
  "usar_perfil_nokia_e": "",
  "nome_perfil_router_nokia": "",
  "olt_hw_download": "",
  "olt_hw_upload": "",
  "perfil_fiberhome": ""
}
```

#### `DELETE` Plano de velocidades (deletar)
```
DELETE /webservice/v1/radgrupos/21
```

### Transmissores (OLT)

#### `GET` Transmissores (listar)
```
GET /webservice/v1/radpop_radio
```

**Body:**
```json
{
"qtype": "radpop_radio.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "radpop_radio.id",
"sortorder": "desc"
}
```

#### `POST` Transmissores (inserir)
```
POST /webservice/v1/radpop_radio
```

**Body:**
```json
{//OBS: Para cada tipo de fabricante os campos obrigatórios mudam, esse aqui é só um exemplo.
  "fabricante_modelo": "U",//Obrigatório
  "descricao": "Transmissor 01",//Obrigatório
  "id_pop": "1",//Obrigatório
  "ip": "0.0.0.0",//Obrigatório
  "login": "login_transmissor",//Obrigatório
  "senha": "dsf#2#e3d3@dDD",//Obrigatório
  "perfil_fibra_padrao": "",
  "porta_ssh": "",
  "porta_telnet": "",
  "httpd_port": "",
  "id_prov_snmp": "",
  "porta_api": "",
  "timeout": "",
  "ativo": "S",//Obrigatório
  "cor_mapa": "",
  "id_padrao_cores": "",
  "ip_anm": "",
  "login_anm": "",
  "senha_anm": "",
  "porta_telnet_tl1": "",
  "gabinete": "",
  "subrack": "",
  "id_servidor_unms": "",
  "id_olt_unms": "",
  "id_olt_conscius": "",
  "id_olt_externo": "",
  "conexoes_ulltima_data": "",
  "conexoes_ultima": "",
  "fwversion": "",
  "uptime": "",
  "time": "",
  "modelo": "",
  "cpu_load": "",
  "total_memory": "",
  "free_memory": "",
  "temperatura": "",
  "voltagem": "",
  "current_firmware": "",
  "upgrade_firmware": "",
  "id_olt": "",
  "autosave": "",
  "speed_lan": "",
  "speed_wlan": "",
  "rxrate": "",
  "txrate": "",
  "usa_vpn": "N",//Obrigatório
  "busca_potencia": "N",//Obrigatório
  "perfil_neutro_bridge": "",
  "perfil_neutro_router": "",
  "id_pv_grupo_backup": "",
  "operador_neutro": ""
}
```

#### `PUT` Transmissores (editar)
```
PUT /webservice/v1/radpop_radio/21
```

**Body:**
```json
{
  "fabricante_modelo": "U",
  "descricao": "Transmissor 02",//Alterando esse campo
  "id_pop": "1",
  "ip": "0.0.0.0",
  "login": "login_transmissor",
  "senha": "dsf#2#e3d3@dDD",
  "perfil_fibra_padrao": "",
  "porta_ssh": "",
  "porta_telnet": "",
  "httpd_port": "",
  "id_prov_snmp": "",
  "porta_api": "",
  "timeout": "",
  "ativo": "S",
  "cor_mapa": "",
  "id_padrao_cores": "",
  "ip_anm": "",
  "login_anm": "",
  "senha_anm": "",
  "porta_telnet_tl1": "",
  "gabinete": "",
  "subrack": "",
  "id_servidor_unms": "",
  "id_olt_unms": "",
  "id_olt_conscius": "",
  "id_olt_externo": "",
  "conexoes_ulltima_data": "",
  "conexoes_ultima": "",
  "fwversion": "",
  "uptime": "",
  "time": "",
  "modelo": "",
  "cpu_load": "",
  "total_memory": "",
  "free_memory": "",
  "temperatura": "",
  "voltagem": "",
  "current_firmware": "",
  "upgrade_firmware": "",
  "id_olt": "",
  "autosave": "",
  "speed_lan": "",
  "speed_wlan": "",
  "rxrate": "",
  "txrate": "",
  "usa_vpn": "N",
  "busca_potencia": "N",
  "perfil_neutro_bridge": "",
  "perfil_neutro_router": "",
  "id_pv_grupo_backup": "",
  "operador_neutro": ""
}
```

#### `DELETE` Transmissores (deletar)
```
DELETE /webservice/v1/radpop_radio/21
```

### Cliente Fibra (ONU)

#### `GET` Cliente Fibra (listar)
```
GET /webservice/v1/radpop_radio_cliente_fibra
```

**Body:**
```json
{
"qtype": "radpop_radio_cliente_fibra.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "radpop_radio_cliente_fibra.id",
"sortorder": "desc"
}
```

#### `POST` Cliente Fibra (inserir)
```
POST /webservice/v1/radpop_radio_cliente_fibra
```

**Body:**
```json
{
  "radpop_estrutura": "N",//Obrigatório
  "id_projeto": "",
  "id_caixa_ftth": "",
  "porta_ftth": "",
  "id_transmissor": "1",//Obrigatório
  "id_hardware": "",
  "id_contrato": "",
  "id_login": "",
  "id_ramal": "",
  "nome": "Cliente Fibra 01",//Obrigatório
  "mac": "",
  "id_perfil": "",
  "ponid": "",
  "vlan": "",
  "onu_numero": "",
  "gemport": "",
  "service_port": "",
  "comandos": "",
  "id_chamado_radpop": "",
  "vlan_pppoe": "",
  "vlan_dhcp": "",
  "vlan_tr69": "",
  "vlan_iptv": "",
  "vlan_voip": "",
  "vlan_outros": "",
  "ip_gerencia": "",
  "login_onu_cliente": "",
  "senha_onu_cliente": "",
  "porta_telnet_onu_cliente": "",
  "porta_web_onu_cliente": "",
  "perfil_onu_cliente": "",
  "script_onu_cliente": "",
  "onu_tipo": "",
  "slotno": "",
  "ponno": "",
  "tipo_autenticacao": "",
  "versao": "",
  "sinal_rx": "",
  "sinal_tx": "",
  "temperatura": "",
  "voltagem": "",
  "data_sinal": "",
  "causa_ultima_queda": "",
  "senorid": "",
  "distancia_onu": "",
  "id_onu_unms": "",
  "id_condominio": "",
  "bloco": "",
  "apartamento": "",
  "cep": "",
  "endereco": "",
  "numero": "",
  "bairro": "",
  "cidade": "",
  "referencia": "",
  "complemento": "",
  "latitude": "",
  "longitude": ""
}
```

#### `PUT` Cliente Fibra (editar)
```
PUT /webservice/v1/radpop_radio_cliente_fibra/2380
```

**Body:**
```json
{
  "radpop_estrutura": "N",
  "id_projeto": "",
  "id_caixa_ftth": "",
  "porta_ftth": "",
  "id_transmissor": "1",
  "id_hardware": "",
  "id_contrato": "",
  "id_login": "",
  "id_ramal": "",
  "nome": "Cliente 03",//Alterando esse campo
  "mac": "",
  "id_perfil": "",
  "ponid": "",
  "vlan": "",
  "onu_numero": "",
  "gemport": "",
  "service_port": "",
  "comandos": "",
  "id_chamado_radpop": "",
  "vlan_pppoe": "",
  "vlan_dhcp": "",
  "vlan_tr69": "",
  "vlan_iptv": "",
  "vlan_voip": "",
  "vlan_outros": "",
  "ip_gerencia": "",
  "login_onu_cliente": "",
  "senha_onu_cliente": "",
  "porta_telnet_onu_cliente": "",
  "porta_web_onu_cliente": "",
  "perfil_onu_cliente": "",
  "script_onu_cliente": "",
  "onu_tipo": "",
  "slotno": "",
  "ponno": "",
  "tipo_autenticacao": "",
  "versao": "",
  "sinal_rx": "",
  "sinal_tx": "",
  "temperatura": "",
  "voltagem": "",
  "data_sinal": "",
  "causa_ultima_queda": "",
  "senorid": "",
  "distancia_onu": "",
  "id_onu_unms": "",
  "id_condominio": "",
  "bloco": "",
  "apartamento": "",
  "cep": "",
  "endereco": "",
  "numero": "",
  "bairro": "",
  "cidade": "",
  "referencia": "",
  "complemento": "",
  "latitude": "",
  "longitude": ""
}
```

#### `DELETE` Cliente Fibra (deletar)
```
DELETE /webservice/v1/radpop_radio_cliente_fibra/2380
```

#### `GET` Histórico de potenciação
```
GET /webservice/v1/radpop_radio_cliente_fibra_historico
```

**Body:**
```json
{
"qtype": "radpop_radio_cliente_fibra_historico.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "radpop_radio_cliente_fibra_historico.id",
"sortorder": "desc"
}
```

#### `DELETE` Transmissores (deletar) Copy
```
DELETE /webservice/v1/radpop_radio_cliente_fibra_historico/3092603
```

#### `POST` Gravar no Dispositivo
```
POST /webservice/v1/botao_gravar_dispositivo_22408
```

**Body:**
```json
{
    "id":""
}
```

#### `POST` Visualizar Script
```
POST /webservice/v1/radpop_radio_cliente_fibra_22407
```

**Body:**
```json
{
    "id":""
}
```

#### `POST` Excluir Dispositivo
```
POST /webservice/v1/botao_excluir_dispositivo_22434
```

**Body:**
```json
{
    "id":""//ID do Cliente Fibra (ONU)
}
```

#### `POST` Gravar na ONU
```
POST /webservice/v1/radpop_radio_cliente_fibra_24700
```

**Body:**
```json
{
    "id":""
}
```

#### `POST` Alterar credenciais no dispositivo
```
POST /webservice/v1/radpop_radio_cliente_fibra_22952
```

**Body:**
```json
{
    "id":""
}
```

#### `POST` Resetar ONU
```
POST /webservice/v1/radpop_radio_cliente_fibra_24699
```

**Body:**
```json
{
    "id":""
}
```

#### `POST` Visualizar Script ONU
```
POST /webservice/v1/radpop_radio_cliente_fibra_24701
```

**Body:**
```json
{
    "id":""
}
```

#### `POST` Reboot ONU
```
POST /webservice/v1/radpop_radio_cliente_fibra_26379
```

**Body:**
```json
{
    "id":""
}
```

#### `POST` Libera acesso web
```
POST /webservice/v1/radpop_radio_cliente_fibra_28120
```

**Body:**
```json
{
    "id":""
}
```

#### `POST` Potência/Resumo ONU
```
POST /webservice/v1/botao_rel_22991
```

**Body:**
```json
{
    "id":""
}
```

### 📁 Transmissores

#### `GET` POP (listar)
```
GET /webservice/v1/radpop
```

**Body:**
```json
{
"qtype": "radpop.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "radpop.id",
"sortorder": "desc"
}
```

#### `POST` POP (inserir)
```
POST /webservice/v1/radpop
```

**Body:**
```json
{
  "pop": "Teste API",//Obrigatório
  "id_projeto": "",
  "cep": "",
  "endereco": "",
  "numero": "",
  "bairro": "",
  "id_cidade": "1",//Obrigatório
  "latitude": "",
  "longitude": "",
  "observacoes": "",
  "abertura": "",
  "numestacao_anatel": "",
  "id_fornecedor": ""
}
```

#### `PUT` POP (editar)
```
PUT /webservice/v1/radpop/8
```

**Body:**
```json
{
  "pop": "Teste API",
  "id_projeto": "",
  "cep": "",
  "endereco": "Rua teste api",//Alterando esse campo
  "numero": "",
  "bairro": "",
  "id_cidade": "1",
  "latitude": "",
  "longitude": "",
  "observacoes": "",
  "abertura": "",
  "numestacao_anatel": "",
  "id_fornecedor": ""
}
```

#### `DELETE` POP (deletar)
```
DELETE /webservice/v1/radpop/8
```

#### `GET` Rádio (listar)
```
GET /webservice/v1/radpop_radio_cliente
```

**Body:**
```json
{
"qtype": "radpop_radio_cliente.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "radpop_radio_cliente.id",
"sortorder": "desc"
}
```

#### `POST` Rádio (inserir)
```
POST /webservice/v1/radpop_radio_cliente
```

**Body:**
```json
{
  "id_pop_radio": "1",//Obrigatório
  "id_pop_radio_porta": "1",//Obrigatório
  "id_hardware": "",
  "id_radusuarios": "",
  "interface": "",
  "mac": "MAC",//Obrigatório
  "name": "",
  "id_pop": "",
  "ultima_atualizacao": "",
  "airmax_priority": "",
  "airmax_quality": "",
  "airmax_sinal": "",
  "airmax_capacity": "",
  "ap": "",
  "wds": "",
  "sinal": "",
  "ccq": "",
  "tx": "",
  "rx": "",
  "noise": "",
  "lastip": "",
  "bytes": "",
  "uptime": "",
  "distance": "",
  "ack": "",
  "signal_to_noise": "",
  "signal_strength_ch0": "",
  "signal_strength_ch1": "",
  "tx_ccq": "",
  "rx_ccq": "",
  "nstreme": "",
  "routeros_version": ""
}
```

#### `PUT` Rádio (editar) -pendente
```
PUT /webservice/v1/radpop_radio_cliente/1
```

**Body:**
```json
{
  "id_pop_radio": "1",
  "id_pop_radio_porta": "1",
  "id_hardware": "1",
  "id_radusuarios": "",
  "interface": "",
  "mac": "MAC",
  "name": "",
  "id_pop": "",
  "ultima_atualizacao": "",
  "airmax_priority": "",
  "airmax_quality": "",
  "airmax_sinal": "",
  "airmax_capacity": "",
  "ap": "",
  "wds": "",
  "sinal": "",
  "ccq": "",
  "tx": "",
  "rx": "",
  "noise": "",
  "lastip": "",
  "bytes": "",
  "uptime": "",
  "distance": "",
  "ack": "",
  "signal_to_noise": "",
  "signal_strength_ch0": "",
  "signal_strength_ch1": "",
  "tx_ccq": "",
  "rx_ccq": "",
  "nstreme": "",
  "routeros_version": ""
}
```

#### `DELETE` Rádio (deletar)
```
DELETE /webservice/v1/radpop_radio_cliente/2
```

#### `GET` Perfis (listar)
```
GET /webservice/v1/radpop_radio_cliente_fibra_perfil
```

**Body:**
```json
{
"qtype": "radpop_radio_cliente_fibra_perfil.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "radpop_radio_cliente_fibra_perfil.id",
"sortorder": "desc"
}
```

#### `POST` Perfis (inserir)
```
POST /webservice/v1/radpop_radio_cliente_fibra_perfil
```

**Body:**
```json
{//Todos os campos são obrigatórios
  "fabricante_modelo": "SMARTOLT",
  "nome": "Teste",
  "comando": "#pon_id#"
}
```

#### `PUT` Perfis (editar)
```
PUT /webservice/v1/radpop_radio_cliente_fibra_perfil/17
```

**Body:**
```json
{//Todos os campos são obrigatórios
  "fabricante_modelo": "SMARTOLT",
  "nome": "Teste alteração",//Alterando esse campo
  "comando": "#pon_id#"
}
```

#### `DELETE` Perfis (deletar)
```
DELETE /webservice/v1/radpop_radio_cliente_fibra_perfil/17
```

#### `GET` Interface Slot (listar)
```
GET /webservice/v1/radpop_olt_slot
```

**Body:**
```json
{
"qtype": "radpop_olt_slot.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "radpop_olt_slot.id",
"sortorder": "desc"
}
```

#### `POST` Interface Slot (inserir)
```
POST /webservice/v1/radpop_olt_slot
```

**Body:**
```json
{
  "id_transmissor": "1",//Obrigatório
  "descricao": "",
  "numero_slot": "123",//Obrigatório
  "portas": "48"//Obrigatório
}
```

#### `PUT` Interface Slot (editar)
```
PUT /webservice/v1/radpop_olt_slot/8
```

**Body:**
```json
{
  "id_transmissor": "1",
  "descricao": "Teste de API",//Alterando esse campo
  "numero_slot": "123",
  "portas": "48"
}
```

#### `DELETE` Interface Slot (deletar)
```
DELETE /webservice/v1/radpop_olt_slot/8
```

#### `GET` Interface Fibra (listar)
```
GET /webservice/v1/radpop_radio_porta_fibra
```

**Body:**
```json
{
"qtype": "radpop_radio_porta.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "radpop_radio_porta.id",
"sortorder": "desc"
}
```

#### `POST` Interface Fibra (inserir)
```
POST /webservice/v1/radpop_radio_porta_fibra
```

**Body:**
```json
{
  "id_pop_radio": 2,//Obrigatório (Transmissor)
  "id_slot": 1,//Obrigatório (Slot)
  "numero_pon": 1,//Obrigatório (Numero PON)
  "interface": 1,
  "fabricante": "OLTNEUTRA",
  "potencia_pon": 4,
  "potencia_limite": 0.01,
  "descricao": 1,
  "vlan_uplink": "",
  "vlan_pppoe": "",
  "vlan_dhcp": "",
  "vlan_iptv": "",
  "vlan_voip": "",
  "vlan_tr69": "",
  "vlan_outros": ""
}
```

#### `PUT` Interface Fibra (editar)
```
PUT /webservice/v1/radpop_radio_porta_fibra/8
```

**Body:**
```json
{
  "id_pop_radio": 2,
  "id_slot": 1,
  "numero_pon": 1,
  "interface": 1,
  "fabricante": "OLTNEUTRA",
  "potencia_pon": 4,
  "potencia_limite": 0.01,
  "descricao": 1,
  "vlan_uplink": "",
  "vlan_pppoe": "",
  "vlan_dhcp": "",
  "vlan_iptv": "",
  "vlan_voip": "",
  "vlan_tr69": "",
  "vlan_outros": ""
}
```

#### `DELETE` Interface Fibra (deletar)
```
DELETE /webservice/v1/radpop_radio_porta_fibra/8
```

### 📁 Pool IP

#### `GET` Radius (listar)
```
GET /webservice/v1/radgrupos_pools
```

**Body:**
```json
{
"qtype": "radgrupos_pools.tipo",
"query": "RAD",
"oper": "=",
"page": "1",
"rp": "1000",
"sortname": "radgrupos_pools.id",
"sortorder": "desc"
}
```

#### `POST` Radius (inserir)
```
POST /webservice/v1/radgrupos_pools
```

**Body:**
```json
{
  "descricao": "Radius API Teste",//Obrigatório
  "tipo": "RAD",//Obrigatório
  "nome": "",
  "nomepoolipv6": "",
  "id_rad_pool": "1"//Obrigatório
}
```

#### `PUT` Radius (editar)
```
PUT /webservice/v1/radgrupos_pools/2
```

**Body:**
```json
{
  "descricao": "Radius Alteração API",//Alterando esse campo
  "tipo": "RAD",
  "nome": "",
  "nomepoolipv6": "",
  "id_rad_pool": "1"
}
```

#### `DELETE` Radius (deletar)
```
DELETE /webservice/v1/radgrupos_pools/2
```

#### `GET` IPV4 (listar)
```
GET /webservice/v1/radgrupos_pools
```

**Body:**
```json
{
"qtype": "radgrupos_pools.tipo",
"query": "CON",
"oper": "=",
"page": "1",
"rp": "1000",
"sortname": "radgrupos_pools.id",
"sortorder": "desc"
}
```

#### `POST` IPV4 (inserir)
```
POST /webservice/v1/radgrupos_pools
```

**Body:**
```json
{
  "descricao": "IPV4 API Teste",//Obrigatório
  "tipo": "CON",//Obrigatório
  "nome": "1",//Obrigatório
  "nomepoolipv6": "",
  "id_rad_pool": ""
}
```

#### `PUT` IPV4 (editar)
```
PUT /webservice/v1/radgrupos_pools/4
```

**Body:**
```json
{
  "descricao": "IPV4 Alteração API",//Alternado esse campo
  "tipo": "CON",
  "nome": "1",
  "nomepoolipv6": "",
  "id_rad_pool": ""
}
```

#### `DELETE` IPV4 (deletar)
```
DELETE /webservice/v1/radgrupos_pools/4
```

#### `GET` IPV6 (listar)
```
GET /webservice/v1/radgrupos_pools
```

**Body:**
```json
{
"qtype": "radgrupos_pools.tipo",
"query": "CONV6",
"oper": "=",
"page": "1",
"rp": "1000",
"sortname": "radgrupos_pools.id",
"sortorder": "desc"
}
```

#### `POST` IPV6 (inserir)
```
POST /webservice/v1/radgrupos_pools
```

**Body:**
```json
{
  "descricao": "IPV6 API Teste",//Obrigatório
  "tipo": "CONV6",//Obrigatório
  "nome": "",
  "nomepoolipv6": "1",//Obrigatório
  "id_rad_pool": ""
}
```

#### `PUT` IPV6 (editar)
```
PUT /webservice/v1/radgrupos_pools/5
```

**Body:**
```json
{
  "descricao": "IPV6 Alteração API",//Alternado esse campo
  "tipo": "CONV6",
  "nome": "",
  "nomepoolipv6": "1",
  "id_rad_pool": ""
}
```

#### `DELETE` IPV6 (deletar)
```
DELETE /webservice/v1/radgrupos_pools/5
```

#### `GET` Dual stack (listar)
```
GET /webservice/v1/radgrupos_pools
```

**Body:**
```json
{
"qtype": "radgrupos_pools.tipo",
"query": "DUALSTACK",
"oper": "=",
"page": "1",
"rp": "1000",
"sortname": "radgrupos_pools.id",
"sortorder": "desc"
}
```

#### `POST` Dual stack (inserir)
```
POST /webservice/v1/radgrupos_pools
```

**Body:**
```json
{
  "descricao": "Dual stack API Teste",//Obrigatório
  "tipo": "DUALSTACK",//Obrigatório
  "nome": "1",//Obrigatório
  "nomepoolipv6": "1",//Obrigatório
  "id_rad_pool": ""
}
```

#### `PUT` Dual stack (editar)
```
PUT /webservice/v1/radgrupos_pools/6
```

**Body:**
```json
{
  "descricao": "Dual stack Alteração API",//Alterando esse campo
  "tipo": "DUALSTACK",
  "nome": "1",
  "nomepoolipv6": "1",
  "id_rad_pool": ""
}
```

#### `DELETE` Dual stack (deletar)
```
DELETE /webservice/v1/radgrupos_pools/6
```

### 📁 Radius

#### `GET` Resposta (listar)
```
GET /webservice/v1/radgroupreply
```

**Body:**
```json
{
"qtype": "radgroupreply.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "radgroupreply.id",
"sortorder": "desc"
}
```

#### `POST` Resposta (inserir)
```
POST /webservice/v1/radgroupreply
```

**Body:**
```json
{
  "groupname": "Teste Resposta API",//Obrigatório
  "attribute": "Atributo API",//Obrigatório
  "op": "=",//Obrigatório
  "value": "123",//Obrigatório
  "prio": "",
  "id_plano": ""
}
```

#### `PUT` Resposta (editar)
```
PUT /webservice/v1/radgroupreply/1169
```

**Body:**
```json
{
  "groupname": "Alteração API",//Alterando esse campo
  "attribute": "Atributo API",
  "op": "=",
  "value": "123",
  "prio": "",
  "id_plano": ""
}
```

#### `DELETE` Resposta (deletar)
```
DELETE /webservice/v1/radgroupreply/1169
```

#### `GET` Planos x Logins (listar)
```
GET /webservice/v1/radusergroup
```

**Body:**
```json
{
"qtype": "radusergroup.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "radusergroup.id",
"sortorder": "desc"
}
```

#### `DELETE` Planos x Logins (deletar)
```
DELETE /webservice/v1/radusergroup/2
```

#### `GET` Radacct (listar)
```
GET /webservice/v1/radacct
```

**Body:**
```json
{
    "qtype": "radacct.framedipaddress",
    "query": "172.16.0.23", //Valor de IP aqui
    "oper": "=",
    "page": "1",
    "rp": "1000",
    "sortname": "radacct.radacctid",
    "sortorder": "desc",
    "grid_param":"[{\"TB\":\"radacct.acctstarttime\", \"OP\" : \">=\", \"P\" : \"2020-11-13 00:00:00\"},{\"TB\":\"radacct.acctstarttime\", \"OP\" : \"<=\", \"P\" : \"2020-11-13 23:59:59\"}]"
}
```

**Response — Exemplo:**
```json
{
    "page": "1",
    "rows": [
        {
            "id": "2076372",
            "autoincrement": {
                "campo": "radacctid",
                "valor": "2076372"
            },
            "cell": [
                "2076372",
                "modomarlo1",
                "50:12:00:02:00:00",
                "172.16.0.23",
                "192.168.30.6",
                "PPPoE_1",
                "13/11/2020 13:35:02",
                "",
                "504002",
                "",
                "2001:db8:1000:5::/64",
                ""
            ]
        }
    ],
    "total": 1,
    "tot": []
}
```

### 📁 Autenticação Radius

#### `GET` Nas (listar)
```
GET /webservice/v1/radauth_nas
```

**Body:**
```json
{
"qtype": "radauth_nas.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "radauth_nas.id",
"sortorder": "desc"
}
```

#### `POST` Nas (inserir)
```
POST /webservice/v1/radauth_nas
```

**Body:**
```json
{//Nenhum campo obrigatório, é recomendado preencher com algum informação, os campos.
  "shortname": "",
  "nasname": "",
  "secret": "",
  "ports": "",
  "type": "",
  "server": "",
  "community": "",
  "description": ""
}
```

#### `PUT` Nas (editar)
```
PUT /webservice/v1/radauth_nas/1
```

**Body:**
```json
{
  "shortname": "Alteração API",//Alterando esse campo
  "nasname": "",
  "secret": "",
  "ports": "",
  "type": "",
  "server": "",
  "community": "",
  "description": ""
}
```

#### `DELETE` Nas (deletar)
```
DELETE /webservice/v1/radauth_nas/1
```

#### `GET` Usuários Auth (listar)
```
GET /webservice/v1/auth_usuarios
```

**Body:**
```json
{
"qtype": "auth_usuarios.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "auth_usuarios.id",
"sortorder": "desc"
}
```

#### `POST` Usuários Auth (inserir)
```
POST /webservice/v1/auth_usuarios
```

**Body:**
```json
{//Nenhum campo é obrigatório, é recomendado preencher com algum informação, os campos.
  "descricao": "",
  "login": "",
  "senha": "",
  "opcao": "",
  "grupo_usuarios": ""
}
```

#### `PUT` Usuários Auth (editar)
```
PUT /webservice/v1/auth_usuarios/2
```

**Body:**
```json
{
  "descricao": "Alteração API",//Alterando esse campo
  "login": "",
  "senha": "",
  "opcao": "",
  "grupo_usuarios": ""
}
```

#### `DELETE` Usuários Auth (deletar)
```
DELETE /webservice/v1/auth_usuarios/2
```

### 📁 Configurações

#### `GET` Ocorrências/Soluções (listar)
```
GET /webservice/v1/radpop_ocorrencias
```

**Body:**
```json
{
"qtype": "radpop_ocorrencias.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "radpop_ocorrencias.id",
"sortorder": "desc"
}
```

#### `POST` Ocorrências/Soluções (inserir)
```
POST /webservice/v1/radpop_ocorrencias
```

**Body:**
```json
{
  "transmissor": "1",//Obrigatório
  "data": "24/06/2024",//Obrigatório
  "problema": "Teste de API",//Obrigatório
  "solucao": ""
}
```

#### `PUT` Ocorrências/Soluções (editar)
```
PUT /webservice/v1/radpop_ocorrencias/2
```

**Body:**
```json
{
  "transmissor": "1",
  "data": "24/06/2024",
  "problema": "Alteração API",//alterando esse campo
  "solucao": ""
}
```

#### `DELETE` Ocorrências/Soluções (deletar)
```
DELETE /webservice/v1/radpop_ocorrencias/2
```

### 📁 ACS

#### `GET` Dispositivos acs (listar)
```
GET /webservice/v1/acs_device_grid
```

**Body:**
```json
{
"qtype": "acs_device.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "acs_device.id",
"sortorder": "desc"
}
```

#### `POST` Enviar dados acs wifi - Wifi
```
POST /webservice/v1/botaoAjax_30774
```

**Body:**
```json
{
    "id":"1"
}
```

## Receber

### Contas a Receber

#### `GET` Contas a Receber (listar)
```
GET /webservice/v1/fn_areceber
```

**Body:**
```json
{
"qtype": "fn_areceber.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "20",
"sortname": "fn_areceber.id",
"sortorder": "desc"
}
```

#### `POST` Contas a Receber (inserir)
```
POST /webservice/v1/fn_areceber
```

**Body:**
```json
{
  "id_cliente": "2",//Obrigatório
  "id_conta": "1",//Obrigatório
  "id_conta_class_finan_a": "",
  "filial_id": "1",//Obrigatório
  "documento": "",
  "data_emissao": "21/06/2024",//Obrigatório
  "data_vencimento": "21/06/2024",//Obrigatório
  "valor": "30",//Obrigatório
  "previsao": "M",//Obrigatório
  "tipo_recebimento": "Pix",//Obrigatório
  "id_carteira_cobranca": "1",//Obrigatório
  "obs": "",
  "status": "",
  "id_saida": "",
  "liberado": "S",//Obrigatório o valor se S
  "gerencianet_token": "",
  "tipo_conta": "",
  "id_cobranca": "",
  "status_cobranca": "",
  "id_nota_gerada": "",
  "id_im_imovel": "",
  "impresso": "",
  "arquivo_remessa_baixado": "",
  "duplicata": "",
  "id_sip": "",
  "tipo_renegociacao": "",
  "id_renegociacao": "",
  "id_renegociacao_novo": "",
  "forma_recebimento": "",
  "credito_data": "",
  "baixa_data": "",
  "baixa_id_operador": "",
  "cancelamento_id_operador": "",
  "numero_parcela_recorrente": "",
  "nparcela": "",
  "id_contrato_principal": "",
  "previsao_conta_receita": "",
  "tipo_cobranca": "",
  "parcela_proporcional": "",
  "tipo_pagamento_cartao": "",
  "titulo_protestado": "",
  "desconto_condicional_valor": "",
  "validade_desconto_condicional": "",
  "id_nota_gerada_opc2": "",
  "id_nota_gerada_opc3": "",
  "id_nota_gerada_opc4": "",
  "id_lote_geracao_financeiro_fatura": "",
  "valor_aberto": "",
  "valor_recebido": "",
  "pagamento_valor": "",
  "pagamento_data": "",
  "valor_cancelado": "",
  "data_cancelamento": "",
  "titulo_importado": "",
  "aguardando_confirmacao_pagamento": "",
  "parcelado_cartao": "",
  "recebido_via_pix": "",
  "id_remessa": "",
  "nn_boleto": "",
  "boleto": "",
  "gateway_link": "",
  "linha_digitavel": "",
  "id_remessa_alteracao": "",
  "motivo_alteracao": "",
  "pix_txid": "",
  "libera_periodo": "",
  "id_mot_cancelamento": "",
  "id_contrato": "",
  "id_contrato_avulso": "",
  "ultima_atualizacao": "",
  "id_conta_class_finan": "",
  "valor_class_finan": "",
  "json_class_finan": "",
  "id_nf_gerada": "",
  "id_nf_opcional2": "",
  "id_nf_opcional3": "",
  "id_nf_opcional4": ""
}
```

#### `PUT` Contas a Receber (editar)
```
PUT /webservice/v1/fn_areceber/145371
```

**Body:**
```json
{
  "id_cliente": "2",
  "id_conta": "1",
  "id_conta_class_finan_a": "",
  "filial_id": "1",
  "documento": "Teste de Boletos API",//Alterando esse campo
  "data_emissao": "21/06/2024",
  "data_vencimento": "21/06/2024",
  "valor": "30",
  "previsao": "M",
  "tipo_recebimento": "Pix",
  "id_carteira_cobranca": "1",
  "obs": "",
  "status": "",
  "id_saida": "",
  "liberado": "S",
  "gerencianet_token": "",
  "tipo_conta": "",
  "id_cobranca": "",
  "status_cobranca": "",
  "id_nota_gerada": "",
  "id_im_imovel": "",
  "impresso": "",
  "arquivo_remessa_baixado": "",
  "duplicata": "",
  "id_sip": "",
  "tipo_renegociacao": "",
  "id_renegociacao": "",
  "id_renegociacao_novo": "",
  "forma_recebimento": "",
  "credito_data": "",
  "baixa_data": "",
  "baixa_id_operador": "",
  "cancelamento_id_operador": "",
  "numero_parcela_recorrente": "",
  "nparcela": "",
  "id_contrato_principal": "",
  "previsao_conta_receita": "",
  "tipo_cobranca": "",
  "parcela_proporcional": "",
  "tipo_pagamento_cartao": "",
  "titulo_protestado": "",
  "desconto_condicional_valor": "",
  "validade_desconto_condicional": "",
  "id_nota_gerada_opc2": "",
  "id_nota_gerada_opc3": "",
  "id_nota_gerada_opc4": "",
  "id_lote_geracao_financeiro_fatura": "",
  "valor_aberto": "",
  "valor_recebido": "",
  "pagamento_valor": "",
  "pagamento_data": "",
  "valor_cancelado": "",
  "data_cancelamento": "",
  "titulo_importado": "",
  "aguardando_confirmacao_pagamento": "",
  "parcelado_cartao": "",
  "recebido_via_pix": "",
  "id_remessa": "",
  "nn_boleto": "",
  "boleto": "",
  "gateway_link": "",
  "linha_digitavel": "",
  "id_remessa_alteracao": "",
  "motivo_alteracao": "",
  "pix_txid": "",
  "libera_periodo": "",
  "id_mot_cancelamento": "",
  "id_contrato": "",
  "id_contrato_avulso": "",
  "ultima_atualizacao": "",
  "id_conta_class_finan": "",
  "valor_class_finan": "",
  "json_class_finan": "",
  "id_nf_gerada": "",
  "id_nf_opcional2": "",
  "id_nf_opcional3": "",
  "id_nf_opcional4": ""
}
```

#### `DELETE` Contas a Receber (deletar)
```
DELETE /webservice/v1/fn_areceber/145371
```

#### `PUT` Alterar Boleto
```
PUT /webservice/v1/fn_areceber_altera/id_do_boleto
```

**Body:**
```json
{
  "documento": "",
  "data_emissao": "",
  "data_vencimento": "",
  "id_carteira_cobranca": "",
  "obs": "",
  "tipo_recebimento": "",
  "status": "",
  "aguardando_confirmacao_pagamento": "",
  "nn_boleto": "",
  "pix_txid": "",
  "libera_periodo": "",
  "liberado": "S",//Obrigatório ser S, se não, a fatura fica oculta;
  "titulo_protestado": "",
  "id_remessa_alteracao": "",
  "motivo_alteracao": ""
}
```

#### `POST` Receber Boleto (baixa manual)
```
POST /webservice/v1/fn_areceber_recebimentos_baixas_novo
```

**Body:**
```json
{
    "filial_id": "",
    "id_receber": "",
    "conta_": "",
    "id_conta": "",
    "tipo_recebimento": "",
    "data": "",
    "documento":"",
    "pdesconto":"",
    "vdesconto":"",
    "id_motivo_desconto":"",
    "pacrescimo":"",
    "vacrescimo": "",
    "valor_parcela": "",
    "credito": "",
    "debito": "",
    "valor_total_recebido": "",
    "historico": "",
    "tipo_r":"", 
    "previsao": "",
    "tipo_lanc": ""
}
```

#### `DELETE` Estornar boleto cancelado
```
DELETE /webservice/v1/estornar_cancelamento
```

**Body:**
```json
{
    "get_id": "55" // ID do boleto a ter o cancelamento estornado
}
```

#### `POST` Get Pix
```
POST /webservice/v1/get_pix
```

**Body:**
```json
{
    "id_areceber":""
}
```

**Response — Sucesso:**
```json
{
    "pix": {
        "dadosPix": {
            "expiracaoPix": "31/12/1969 21:00:00"
        },
        "qrCode": {
            "qrcode": "",
            "imagemQrcode": "",
            "imagemSrc": "https://demo.ixcsoft.com.br/api-module/webhook-pagamentos/pix/get-qr-code?code="
        }
    },
    "gateway": {
        "gatewayNome": "MB"
    },
    "type": "success"
}
```

#### `POST` Segunda via/Download do Boleto
```
POST /webservice/v1/get_boleto
```

**Body:**
```json
{
    "boletos": "",//ID dos Boletos separado por vírgula
    "juro": "",//Juros: S=sim,N=Não
    "multa": "",//Multa: S=Sim, N=Não
    "atualiza_boleto": "S",//Padrão "S"
    "tipo_boleto": "arquivo",//Padrão "arquivo"
    "base64" : "S",//S=Sim (retorna em base64), N=Não (retorna em binário)
    "layout_impressao":""//Layout personalizado de impressão
}
```

#### `POST` Dados da Fatura
```
POST /webservice/v1/get_boleto
```

**Body:**
```json
{
    "boletos": "",
    "juro": "",
    "multa": "",
    "atualiza_boleto": "",
    "tipo_boleto": "dados",
    "base64" : "S",
    "layout_impressao":""
}
```

#### `POST` Enviar boleto por e-mail
```
POST /webservice/v1/get_boleto
```

**Body:**
```json
{
    "boletos": "",
    "juro": "",
    "multa": "",
    "atualiza_boleto": "",
    "tipo_boleto": "mail"
}
```

#### `POST` Enviar boleto por sms
```
POST /webservice/v1/get_boleto
```

**Body:**
```json
{
    "boletos": "",
    "juro": "",
    "multa": "",
    "atualiza_boleto": "",
    "tipo_boleto": "sms"
}
```

#### `POST` Cancelar boleto (cancelar_financeiro)
```
POST /webservice/v1/cancelar_financeiro
```

**Body:**
```json
{
    "id": "730",
    "id_mot_cancelamento": "1",
    "data_cancelamento": "18/08/2025"
}
```

**Response — 200:**
```json
{
    "dadosCancelamento": {
        "success": false,
        "idVenda": null
    },
    "message": "Contas à receber 730 cancelados com sucesso!<br />",
    "type": "success"
}
```

### Recebimentos

#### `GET` Recebimentos (listar)
```
GET /webservice/v1/fn_areceber_baixas
```

**Body:**
```json
{
"qtype": "fn_movim_finan.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "20",
"sortname": "fn_movim_finan.id",
"sortorder": "desc"
}
```

#### `DELETE` Estornar
```
DELETE /webservice/v1/fn_areceber_baixas/id_recebimento
```

### Alterar a Receber

#### `GET` Alterar a receber (listar)
```
GET /webservice/v1/fn_areceber_altera
```

**Body:**
```json
{
"qtype": "fn_areceber.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "20",
"sortname": "fn_areceber.id",
"sortorder": "desc"
}
```

#### `PUT` Alterar a receber (editar)
```
PUT /webservice/v1/fn_areceber_altera/145371
```

**Body:**
```json
{
  "documento": "71804",
  "data_emissao": "19/06/2024",
  "data_vencimento": "10/07/2024",
  "id_carteira_cobranca": "1",
  "obs": "de 10/06/2024 até 09/07/2024",
  "tipo_recebimento": "Gateway",
  "status": "A",
  "aguardando_confirmacao_pagamento": "N",
  "nn_boleto": "32034923820",//Alterando esse campo
  "pix_txid": "",
  "libera_periodo": "N",
  "liberado": "S",
  "titulo_protestado": "N",
  "id_remessa_alteracao": "",
  "motivo_alteracao": ""
}
```

#### `DELETE` Alterar a receber (deletar)
```
DELETE /webservice/v1/fn_areceber_altera/145370
```

### Renegociação

#### `POST` 1. Renegociar selecionados
```
POST /webservice/v1/renegociar_selecionados
```

**Body:**
```json
{
    "get_id":"145367,145366"//IDs das Faturas (fn_areceber)
}
```

**Response — Sucesso:**
```json
{
    "id_renegociacao": 643,
    "message": "Renegociação incluída com sucesso!<br />",
    "type": "success"
}
```

**Response — Falha:**
```json
{
    "id_renegociacao": 643,
    "message": "",
    "type": "success"
}
```

#### `PUT` 2. Renegociação Wizard (preencher dados obrigatórios)
```
PUT /webservice/v1/fn_renegociacao_wiz/643
```

**Body:**
```json
{
  "id_filial": "1",//Obrigatório
  "id_conta": "174",//Obrigatório
  "id_cliente": "2215",//Obrigatório
  "data_emissao": "11/10/2024",//Obrigatório
  "previsao": "S",//Obrigatório
  "id_carteira_cobranca": "1",//Obrigatório
  "id_condicao_pagamento": "1",//Obrigatório
  "vendedor_renegociacao": "",
  "contrato_renegociacao": "2",//Obrigatório
  "data_vencimento": "11/10/2024",
  "valor_parcelas": "150.00",//Obrigatório
  "valor_acrescimos": "0,00",
  "valor_descontos": "0,00",
  "valor_total": "150.00",//Obrigatório
  "valor_renegociado": "150.00",//Obrigatório
  "acre_juros_multa": "",
  "valor_total_pagar": "150.00",//Obrigatório
  "status": "A",//Obrigatório
  "data_finalizada": "",
  "finalizar": "N"//Obrigatório
}

//Atenção: ele irá abrir uma renegociação tendo títulos ou não
//Utilize, somente para Editação
```

**Response — Sucesso:**
```json
{
    "type": "success",
    "message": "Registro atualizado com sucesso!",
    "id": "643"
}
```

#### `POST` 3. Adicionar título a renegociação
```
POST /webservice/v1/adicionar_titulo_renegociacao
```

**Body:**
```json
{
    "id_renegociacao_aux":"3",//ID da Renegociação
    "get_id":"3"//ID da Fatura (fn_areceber)
}
```

#### `POST` 3. Remover título da renegociação
```
POST /webservice/v1/remover_titulo_renegociacao
```

**Body:**
```json
{
    "id_renegociacao":"3",//ID da Renegociação
    "get_id":"3"//ID da Fatura (fn_areceber)
}
```

#### `POST` 4. Calcula multa/juros dos títulos da renegociação
```
POST /webservice/v1/calcula_juros_multa
```

**Body:**
```json
{
    "id_carteira_cobranca":"1",//Carteira de cobrança (fn_carteira_cobranca)
    "id_condicao_pagamento":"1",//Condições de pagamento (condicoes_pagamento)
    "id":"643"//ID da Renegociação (fn_renegociacao_wiz)
}

//Execute novamente, caso tenha adicionado ou removido títulos da renegociação.
```

**Response — Sucesso:**
```json
{
    "totalFineAndFess": "0,00",
    "dateExpiration": "2024-10-11",
    "message": "",
    "type": "success"
}
```

#### `PUT` 5. Finalizar Renegociação
```
PUT /webservice/v1/fn_renegociacao_wiz/643
```

**Body:**
```json
{
  "id_filial": "1",
  "id_conta": "174",
  "id_cliente": "2215",
  "data_emissao": "11/10/2024",
  "previsao": "S",
  "id_carteira_cobranca": "1",
  "id_condicao_pagamento": "1",
  "vendedor_renegociacao": "",
  "contrato_renegociacao": "2",
  "data_vencimento": "11/10/2024",
  "valor_parcelas": "150.00",
  "valor_acrescimos": "0,00",
  "valor_descontos": "0,00",
  "valor_total": "150.00",
  "valor_renegociado": "150.00",
  "acre_juros_multa": "",
  "valor_total_pagar": "150.00",
  "status": "A",//Mantenha como A
  "data_finalizada": "11/10/2024",//Preencha com a data atual da finalização
  "finalizar": "S"//Altere esse valor para S
}

//Atenção: ele irá abrir uma renegociação tendo títulos ou não
//Utilize, somente para Editação
```

**Response — Sucesso:**
```json
{
    "type": "success",
    "message": "Registro atualizado com sucesso!",
    "id": "643"
}
```

## Relatórios de cadastros

#### `GET` Relatório de clientes
```
GET /webservice/v1/rfn_cliente
```

**Body:**
```json
{
    "qtype": "cliente.filial_id",
    "query": "2",
    "oper": "=",
    "page": "1",
    "rp": "1",
    "sortname": "cliente.id",
    "sortorder": "desc"
}
```

## Relatórios de estoque

### Relatório de produtos

#### `GET` Imprimir
```
GET /webservice/v1/rcp_produtos_imprimir_23072
```

**Body:**
```json
{
  "id_produto": "36",//ID do Produto (produtos)
  "sub_grupo_produtos": "",//ID do Subgrupo do produto (sub_grupo_produdos)
  "almoxarifado": "",//ID do Almoxarifado (almox)
  "id_filial": "",//ID da Filial (filial)
  "controla_estoque": "S",//S=sim, N=não, T=todos
  "tipo": "",//Em branco é todos, C=comércio, O=consumo, F=fabricação, M=matéria prima, P=patrimônio, S=serviço
  "ativo": "T",//S=sim, N=não, T=todos
  "estoque": "TD",//POS=positivo, NEG=negativo, TD=todos
  "numero_cest": "T"//T=todos, P=Preenchido, V=vazio
}
```

#### `GET` Imprimir Agrupado por filial
```
GET /webservice/v1/rcp_produtos_imprimir_agrupado_filial_12688
```

**Body:**
```json
{
  "id_produto": "36",//ID do Produto (produtos)
  "sub_grupo_produtos": "",//ID do Subgrupo do produto (sub_grupo_produdos)
  "almoxarifado": "",//ID do Almoxarifado (almox)
  "id_filial": "",//ID da Filial (filial)
  "controla_estoque": "S",//S=sim, N=não, T=todos
  "tipo": "",//Em branco é todos, C=comércio, O=consumo, F=fabricação, M=matéria prima, P=patrimônio, S=serviço
  "ativo": "T",//S=sim, N=não, T=todos
  "estoque": "TD",//POS=positivo, NEG=negativo, TD=todos
  "numero_cest": "T"//T=todos, P=Preenchido, V=vazio
}


//Retorno vem em base64, transforme para PDF
```

#### `GET` Imprimir Agrupado por subgrupo
```
GET /webservice/v1/rcp_produtos_imprimir_agrupado_grupo_12708
```

**Body:**
```json
{
  "id_produto": "36",//ID do Produto (produtos)
  "sub_grupo_produtos": "",//ID do Subgrupo do produto (sub_grupo_produdos)
  "almoxarifado": "",//ID do Almoxarifado (almox)
  "id_filial": "",//ID da Filial (filial)
  "controla_estoque": "S",//S=sim, N=não, T=todos
  "tipo": "",//Em branco é todos, C=comércio, O=consumo, F=fabricação, M=matéria prima, P=patrimônio, S=serviço
  "ativo": "T",//S=sim, N=não, T=todos
  "estoque": "TD",//POS=positivo, NEG=negativo, TD=todos
  "numero_cest": "T"//T=todos, P=Preenchido, V=vazio
}


//Retorno vem em base64, transforme para PDF
```

#### `GET` Imprimir Agrupado por almoxarifado
```
GET /webservice/v1/rcp_produtos_imprimir_agrupado_amox_22890
```

**Body:**
```json
{
  "id_produto": "36",//ID do Produto (produtos)
  "sub_grupo_produtos": "",//ID do Subgrupo do produto (sub_grupo_produdos)
  "almoxarifado": "",//ID do Almoxarifado (almox)
  "id_filial": "",//ID da Filial (filial)
  "controla_estoque": "S",//S=sim, N=não, T=todos
  "tipo": "",//Em branco é todos, C=comércio, O=consumo, F=fabricação, M=matéria prima, P=patrimônio, S=serviço
  "ativo": "T",//S=sim, N=não, T=todos
  "estoque": "TD",//POS=positivo, NEG=negativo, TD=todos
  "numero_cest": "T"//T=todos, P=Preenchido, V=vazio
}


//Retorno vem em base64, transforme para PDF
```

### Relatório de Inventário de Estoque por Colaborador

#### `GET` Imprimir agrupado por almoxarifado
```
GET /webservice/v1/rcp_produtos_imprimir_23072
```

**Body:**
```json
{
  "id_produto": "24",//ID do Produto (produto)
  "sub_grupo_produtos": "",//ID do Subgrupo (sub_grupo_produdos)
  "almoxarifado": "",//ID do Almoxarifado (almox)
  "id_filial": "",//ID da Filial (filial)
  "id_tecnico": "",//ID do Colaborador (funcionarios)
  "ativo": "T",//S=sim, N=não, T=todos
  "ordenar": "id"//Ordenação por | Valores disponíveis: alfabetica, id
}
```

## Relatórios fiscais

### Relatórios notas modelo 21

#### `GET` Imprimir NF 21/22 (Imprimir NF 21/22)
```
GET /webservice/v1/botao_rel_19314
```

**Body:**
```json
{
  "id_filial": "",
  "mes": "",
  "ano": "",
  "data_emissao": "",
  "tipo_contrato": "X",
  "produto": "",
  "cidade": "",
  "tipo_pessoa": "T",
  "modelo": "T",
  "finalidade": "N",
  "id_vd_inicial": "",
  "id_vd_final": "",
  "num_nf_inicial": "",
  "num_nf_final": "",
  "serie_nota": "",
  "identificacao_estrutura": "N",
  "base_geracao_tipo_doc": "P",
  "lucro_presumido": "S",
  "gerar_convenio_segundo_plano": "S",
  "id_cliente": "",
  "id_mensagem": ""
}
```

#### `GET` Imprimir NF 21/22 (Imprimir do modelo personalizado)
```
GET /webservice/v1/botao_rel_25740
```

**Body:**
```json
{
  "id_filial": "",
  "mes": "",
  "ano": "",
  "data_emissao": "",
  "tipo_contrato": "X",
  "produto": "",
  "cidade": "",
  "tipo_pessoa": "T",
  "modelo": "T",
  "finalidade": "N",
  "id_vd_inicial": "",
  "id_vd_final": "",
  "num_nf_inicial": "",
  "num_nf_final": "",
  "serie_nota": "",
  "identificacao_estrutura": "N",
  "base_geracao_tipo_doc": "P",
  "lucro_presumido": "S",
  "gerar_convenio_segundo_plano": "S",
  "id_cliente": "",
  "id_mensagem": ""
}
```

## Relatórios provedor

### Relatórios contratos

#### `GET` Relatórios contratos (Comodatos)
```
GET /webservice/v1/rfn_bloqueio_cliente_comodatos_21558
```

**Body:**
```json
{
  "contrato": "T",
  "status": "T",
  "di": "",
  "df": "",
  "diativacao": "",
  "dfativacao": "",
  "data_ini_renovacao": "",
  "data_fin_renovacao": "",
  "data_expiracao_ini": "",
  "data_expiracao_fin": "",
  "dfvi": "",
  "dfvf": "",
  "cliente_inicial": "",
  "cliente_final": "",
  "id_filial": "",
  "id_filial_label": "",
  "id_contrato": "",
  "id_tipo_contrato": "",
  "carteira_cobranca": "",
  "tipo_cliente": "",
  "cep": "",
  "id_cidade": "",
  "id_condominio": "",
  "condominio_bloco": "",
  "condominio_apartamento": "",
  "bairro": "",
  "endereco": "",
  "id_vd_contrato": "",
  "tipo_conexao_mapa": "T",
  "tipo_contrato": "T",
  "tipo_de_contrato": "T",
  "ordem": "P",
  "tipo_pessoa": "T",
  "desbloqueio_confianca_ativo": "T",
  "ativo": "T",
  "id_vendedor": "",
  "id_vendedor_ativ": "",
  "id_tipo_documento": "",
  "tipo_doc_opc": "",
  "id_instalador": "",
  "motivo_inclusao": "",
  "dt_bloqueio_inicial": "",
  "dt_bloqueio_final": "",
  "data_inicial_cadastro": "",
  "data_final_cadastro": "",
  "indicado_atraves": "",
  "id_email_marketing": "",
  "id_sms_marketing": "",
  "id_motivo_cancelamento": "",
  "motivo_cancelamento": "T",
  "data_cancelamento_i": "",
  "data_cancelamento_f": "",
  "motivo_desistencia": "",
  "di_desistencia": "",
  "df_desistencia": "",
  "status_comodato": "E",
  "produto_id": "",
  "subgrupo_id": "",
  "di_comodato": "",
  "df_comodato": "",
  "id_modelo": "",
  "tipo_produto": "",
  "nova_carteira": "",
  "novo_tipo_cobranca": "",
  "novo_tipo_cobranca_label": "",
  "tipo_doc_opcional_substituir": "tipo_doc_opc",
  "tipo_doc_opcional_novo": "",
  "tipo_doc_opcional_novo_label": "",
  "tipo_doc_opcional_removido": "tipo_doc_opc",
  "tipo_doc_produtos_novo": "",
  "produto_id_contrato": "",
  "subgrupo_id_produtos": "",
  "mostra_consulta": "N",
  "data_ativacao_base_inicial": "",
  "data_ativacao_base_final": "",
  "indexador_reajuste": "",
}
```

## Saídas

### Vendas

#### `GET` Venda (listar)
```
GET /webservice/v1/vd_saida
```

**Body:**
```json
{
"qtype": "vd_saida.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "vd_saida.id",
"sortorder": "desc"
}
```

#### `POST` Venda (inserir)
```
POST /webservice/v1/vd_saida
```

**Body:**
```json
{
  "id_tipo_documento": "501",//Obrigatório
  "id_cliente": "2",//Obrigatório
  "id_condicao_pagamento": "21",//Obrigatório
  "filial_id": "1",//Obrigatório
  "data_emissao": "20/06/2024",//Obrigatório
  "data_saida": "20/06/2024",//Obrigatório
  "valor_total": "",
  "indFinal": "",
  "indPres": "",
  "documento": "",
  "obs": "",
  "status": "",
  "impresso": "",
  "criada_contrato_taxa_ativacao": "",
  "gera_estoque": "N",//Obrigatório
  "numero_nf": "",
  "modelo_nf": "",
  "serie": "",
  "previsao": "",
  "id_contrato": "",
  "id_contrato_avulso": "",
  "alerta_cliente": "",
  "status_fat_os": "",
  "id_produto_ativacao": "",
  "data_cancelamento": "",
  "valor_produto_ativacao": "",
  "difal_vFCPUFDest": "",
  "difal_vICMSUFDest": "",
  "difal_vICMSUFRemet": "",
  "id_im_imovel": "",
  "nfse_lote": "",
  "nfse_prot": "",
  "nfse_status": "",
  "id_almox_padrao_tipo_doc": "",
  "id_lote_geracao_financeiro": "",
  "numeracao_lote_ixc": "",
  "id_geracao_lote": "",
  "id_geracao_lote_assinaturas": "",
  "origem": "",
  "consumidor_final_razao": "",
  "consumidor_final_cpf": "",
  "modalidade_frete": "9",//Obrigatório
  "id_transportadora": "",
  "placa": "",
  "placa_uf": "",
  "placa_rntc": "",
  "valor_frete": "",
  "id_comissionado": "5",//Obrigatório
  "pcomissao": "",
  "comissao_perc_recebimento": ""
}
```

#### `PUT` Venda (editar)
```
PUT /webservice/v1/vd_saida/71805
```

**Body:**
```json
{
  "id_tipo_documento": "501",
  "id_cliente": "2",
  "id_condicao_pagamento": "21",
  "filial_id": "1",
  "data_emissao": "20/06/2024",
  "data_saida": "20/06/2024",
  "valor_total": "",
  "indFinal": "",
  "indPres": "",
  "documento": "Teste de API de alteracao",//alterando esse campo
  "obs": "",
  "status": "",
  "impresso": "",
  "criada_contrato_taxa_ativacao": "",
  "gera_estoque": "N",
  "numero_nf": "",
  "modelo_nf": "",
  "serie": "",
  "previsao": "",
  "id_contrato": "",
  "id_contrato_avulso": "",
  "alerta_cliente": "",
  "status_fat_os": "",
  "id_produto_ativacao": "",
  "data_cancelamento": "",
  "valor_produto_ativacao": "",
  "difal_vFCPUFDest": "",
  "difal_vICMSUFDest": "",
  "difal_vICMSUFRemet": "",
  "id_im_imovel": "",
  "nfse_lote": "",
  "nfse_prot": "",
  "nfse_status": "",
  "id_almox_padrao_tipo_doc": "",
  "id_lote_geracao_financeiro": "",
  "numeracao_lote_ixc": "",
  "id_geracao_lote": "",
  "id_geracao_lote_assinaturas": "",
  "origem": "",
  "consumidor_final_razao": "",
  "consumidor_final_cpf": "",
  "modalidade_frete": "9",
  "id_transportadora": "",
  "placa": "",
  "placa_uf": "",
  "placa_rntc": "",
  "valor_frete": "",
  "id_comissionado": "5",
  "pcomissao": "",
  "comissao_perc_recebimento": ""
}
```

#### `DELETE` Venda (deletar)
```
DELETE /webservice/v1/vd_saida/71805
```

#### `GET` Produtos (listar)
```
GET /webservice/v1/vd_saida_produtos
```

**Body:**
```json
{
    "qtype" : "movimento_produtos.id_saida",
    "query" : "1",
    "oper" : ">=",
    "page" : "1",
    "rp" : "2000",
    "sortname" : "movimento_produtos.id",
    "sortorder" : "desc"
}
```

#### `POST` Produtos (inserir)
```
POST /webservice/v1/vd_saida_produtos
```

**Body:**
```json
{
  "tipo_preenchimento_tributacao": "",
  "codigo_fornecedor": "",
  "descricao_fornecedor": "",
  "id_produto": "36",//Obrigatório
  "descricao": "",
  "id_unidade": "2",//Obrigatório
  "id_almox": "1",//Obrigatório
  "quantidade": "1",//Obrigatório
  "valor_unitario": "100",//Obrigatório
  "pdesconto": "",
  "valor_frete": "",
  "vdesconto": "",
  "valor_total": "100",//Obrigatório
  "id_itens_pedido": "",
  "estoque": "S",//Obrigatório
  "id_entrada": "",
  "id_pedido_compra": "",
  "id_pedido_compra_itens": "",
  "tipo": "S",//Obrigatório
  "qtde_saida": "1",//Obrigatório
  "id_inventario": "",
  "data": "",
  "filial_id": "",
  "fator_conversao": "1.000000000",//Obrigatório
  "unidade_sigla": "MC",//Obrigatório
  "id_negociacao": "",
  "tipo_produto": "",
  "id_transf_almox_item": "",
  "id_moeda": "",
  "id_estrutura": "",
  "imobilizado": "",
  "eh_importacao_xml": "",
  "ultima_atualizacao": "",
  "id_saida": "71771",//Obrigatório
  "id_class_fiscal": "",
  "cfop": "",
  "ncm": "",
  "valor_icm": "",
  "valor_ipi": "",
  "iss_valor": "",
  "valor_icms_st": "",
  "valor_fcp_st": "",
  "valor_outros": "",
  "movimento_cancelamento_venda":"N"//Obrigatório o valor ser N
}
```

#### `PUT` Produtos (editar)
```
PUT /webservice/v1/vd_saida_produtos/71805
```

**Body:**
```json
{
  "tipo_preenchimento_tributacao": "",
  "codigo_fornecedor": "",
  "descricao_fornecedor": "21 Fornece 2",//Alterando esse campo
  "id_produto": "36",
  "descricao": "",
  "id_unidade": "2",
  "id_almox": "1",
  "quantidade": "1",
  "valor_unitario": "100",
  "pdesconto": "",
  "valor_frete": "",
  "vdesconto": "",
  "valor_total": "100",
  "id_itens_pedido": "",
  "estoque": "S",
  "id_entrada": "",
  "id_pedido_compra": "",
  "id_pedido_compra_itens": "",
  "tipo": "S",
  "qtde_saida": "1",
  "id_inventario": "",
  "data": "",
  "filial_id": "",
  "fator_conversao": "1.000000000",
  "unidade_sigla": "MC",
  "id_negociacao": "",
  "tipo_produto": "",
  "id_transf_almox_item": "",
  "id_moeda": "",
  "id_estrutura": "",
  "imobilizado": "",
  "eh_importacao_xml": "",
  "ultima_atualizacao": "",
  "id_saida": "71771",
  "id_class_fiscal": "",
  "cfop": "",
  "ncm": "",
  "valor_icm": "",
  "valor_ipi": "",
  "iss_valor": "",
  "valor_icms_st": "",
  "valor_fcp_st": "",
  "valor_outros": "",
  "movimento_cancelamento_venda":"N"
}
```

#### `DELETE` Produtos (deletar)
```
DELETE /webservice/v1/vd_saida_produtos/71805
```

#### `GET` Contabilidade (listar)
```
GET /webservice/v1/fn_movim_finan
```

**Body:**
```json
{
    "qtype" : "fn_movim_finan.id_saida",
    "query" : "1",
    "oper" : ">=",
    "page" : "1",
    "rp" : "2000",
    "sortname" : "fn_movim_finan.id",
    "sortorder" : "desc"
}
```

#### `POST` Contabilidade (inserir)
```
POST /webservice/v1/fn_movim_finan
```

**Body:**
```json
{
  "id_conta": "1",//Obrigatório
  "data": "20/06/2024",//Obrigatório
  "data2": "",
  "documento": "",
  "debito": "",
  "credito": "",
  "historico": "Teste",//Obrigatório
  "historico2": "",
  "tipo_lanc": "",
  "id_movim_finan": "",
  "id_entrada": "",
  "id_saida": "71771",//Obrigatório
  "ultima_atualizacao": ""
}
```

#### `PUT` Contabilidade (editar)
```
PUT /webservice/v1/fn_movim_finan/44243
```

**Body:**
```json
{
  "id_conta": "1",
  "data": "20/06/2024",
  "data2": "",
  "documento": "",
  "debito": "",
  "credito": "",
  "historico": "Teste de API alteracao",//Alterando esse campo
  "historico2": "",
  "tipo_lanc": "",
  "id_movim_finan": "",
  "id_entrada": "",
  "id_saida": "71771",
  "ultima_atualizacao": ""
}
```

#### `DELETE` Contabilidade (deletar)
```
DELETE /webservice/v1/fn_movim_finan/44243
```

#### `POST` Imprimir Venda
```
POST /webservice/v1/imprimir_venda
```

**Body:**
```json
{
    "id": ""
}
```

#### `POST` Imprimir Nota
```
POST /webservice/v1/imprimir_nota
```

**Body:**
```json
{
    "id":"2",
    "base64":"S"
}
```

#### `POST` Imprimir modelo personalizado
```
POST /webservice/v1/vd_saida_25738
```

**Body:**
```json
{
    "id":"23",
    "base64":"S"
}
```

#### `GET` Validar e finalizar
```
GET /webservice/v1/validar_finalizar_saida
```

**Body:**
```json
{
    "id_saida": "71887",
    "carteira_cobranca": "7"
}
```

**Response — Sucesso:**
```json
{
    "type": "success",
    "messageReturn": "Ação executada com sucesso",
    "message": "Saida finalizada com sucesso!\n",
    "id_saida": "71887",
    "carteira_cobranca": "7",
    "action": "botaoAjax_24476",
    "fiscal": "N"
}
```

**Response — Falha:**
```json
{
    "type": "error",
    "message": "Saida já está finalizada!"
}
```

### 📁 Pedidos

#### `GET` Pedido (listar)
```
GET /webservice/v1/vd_pedido_venda
```

**Body:**
```json
{
"qtype": "pedido.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "pedido.id",
"sortorder": "desc"
}
```

#### `POST` Pedido (inserir)
```
POST /webservice/v1/vd_pedido_venda
```

**Body:**
```json
{
  "cliente": "2",//Obrigatorio
  "forma_pagamento": "48",//Obrigatorio
  "vendedor": "1",//Obrigatorio
  "vendedor_comissao": "",
  "modalidade_frete": "",
  "comprador": "",
  "data": "20/06/2024",//Obrigatorio
  "data_entrega": "20/06/2024",//Obrigatorio
  "percentual_desconto": "",
  "outra_forma_pgto": "",
  "obs": "",
  "status": "6",//Obrigatorio
  "tipo": "",
  "id_fornecedor": "",
  "forma_entrega": "",
  "condicao_pagamento": ""
}
```

#### `PUT` Pedido (editar)
```
PUT /webservice/v1/vd_pedido_venda/3
```

**Body:**
```json
{
  "cliente": "2",
  "forma_pagamento": "48",
  "vendedor": "1",
  "vendedor_comissao": "",
  "modalidade_frete": "",
  "comprador": "",
  "data": "20/06/2024",
  "data_entrega": "20/06/2024",
  "percentual_desconto": "",
  "outra_forma_pgto": "",
  "obs": "",//Alterando esse campo
  "status": "6",
  "tipo": "",
  "id_fornecedor": "",
  "forma_entrega": "",
  "condicao_pagamento": ""
}
```

#### `DELETE` Pedido (deletar)
```
DELETE /webservice/v1/vd_pedido_venda/3
```

#### `GET` Faturar
```
GET /webservice/v1/faturar_pedido_os
```

**Body:**
```json
{
    "get_id":"{{id_pedido}}"//ID do Pedido de venda via O.S
}
```

#### `PUT` Reabrir venda
```
PUT /webservice/v1/vd_saida_alterar/{id_saida}
```

**Body:**
```json
{
    "status": "A",//Status da Venda: A=Aberto, F=Fechado
    "aprova_desconto": "N",//S=Sim, N=Não
    "previsao": ""//S=Sim, N=Não
}
```

## Suporte

### Ordem de serviço

#### `GET` Cliente (listar)
```
GET /webservice/v1/su_oss_chamado
```

**Body:**
```json
{
"qtype": "su_oss_chamado.tipo",
"query": "C",
"oper": "=",
"page": "1",
"rp": "1000",
"sortname": "su_oss_chamado.id",
"sortorder": "desc"
}
```

#### `POST` Cliente (inserir)
```
POST /webservice/v1/su_oss_chamado
```

**Body:**
```json
{
  "tipo": "C",//Obrigatório
  "id_ticket": "",
  "protocolo": "",
  "id_assunto": "1",//Obrigatório
  "id_cliente": "2",//Obrigatório
  "id_estrutura": "",
  "id_filial": "1",//Obrigatório
  "id_login": "",
  "id_contrato_kit": "",
  "origem_endereco": "M",//Obrigatório
  "origem_endereco_estrutura": "",
  "latitude": "",
  "longitude": "",
  "prioridade": "1",//Obrigatório
  "melhor_horario_agenda": "",
  "setor": "1",//Obrigatório
  "id_tecnico": "",
  "mensagem": "",
  "idx": "",
  "status": "A",//Obrigatório
  "gera_comissao": "",
  "liberado": "",
  "impresso": "",
  "preview": "",
  "id_wfl_param_os": "",
  "id_wfl_tarefa": "",
  "id_su_diagnostico": "",
  "regiao_manutencao": "",
  "origem_cadastro": "",
  "origem_change_endereco": "",
  "status_sla": "",
  "ultima_atualizacao": "",
  "id_cidade": "",
  "bairro": "",
  "endereco": "",
  "complemento": "",
  "referencia": "",
  "id_condominio": "",
  "bloco": "",
  "apartamento": "",
  "data_abertura": "",
  "data_inicio": "",
  "data_hora_analise": "",
  "data_agenda": "",
  "data_agenda_final": "",
  "data_hora_encaminhado": "",
  "data_hora_assumido": "",
  "data_hora_execucao": "",
  "data_final": "",
  "data_fechamento": "",
  "data_prazo_limite": "",
  "data_reservada": "",
  "data_reagendar": "",
  "data_prev_final": "",
  "mensagem_resposta": "",
  "justificativa_sla_atrasado": "",
  "valor_unit_comissao": "",
  "valor_total_comissao": ""
}
```

#### `PUT` Cliente (editar)
```
PUT /webservice/v1/su_oss_chamado/2
```

**Body:**
```json
{
  "tipo": "C",
  "id_ticket": "",
  "protocolo": "",
  "id_assunto": "1",
  "id_cliente": "2",
  "id_estrutura": "",
  "id_filial": "1",
  "id_login": "",
  "id_contrato_kit": "",
  "origem_endereco": "M",
  "origem_endereco_estrutura": "E",
  "latitude": "",
  "longitude": "",
  "prioridade": "1",
  "melhor_horario_agenda": "",
  "setor": "1",
  "id_tecnico": "",
  "mensagem": "Teste de API",//Alterando esse campo
  "idx": "",
  "status": "A",
  "gera_comissao": "",
  "liberado": "",
  "impresso": "",
  "preview": "",
  "id_wfl_param_os": "",
  "id_wfl_tarefa": "",
  "id_su_diagnostico": "",
  "regiao_manutencao": "",
  "origem_cadastro": "",
  "origem_change_endereco": "",
  "status_sla": "",
  "ultima_atualizacao": "",
  "id_cidade": "",
  "bairro": "",
  "endereco": "",
  "complemento": "",
  "referencia": "",
  "id_condominio": "",
  "bloco": "",
  "apartamento": "",
  "data_abertura": "",
  "data_inicio": "",
  "data_hora_analise": "",
  "data_agenda": "",
  "data_agenda_final": "",
  "data_hora_encaminhado": "",
  "data_hora_assumido": "",
  "data_hora_execucao": "",
  "data_final": "",
  "data_fechamento": "",
  "data_prazo_limite": "",
  "data_reservada": "",
  "data_reagendar": "",
  "data_prev_final": "",
  "mensagem_resposta": "",
  "justificativa_sla_atrasado": "",
  "valor_unit_comissao": "",
  "valor_total_comissao": ""
}
```

#### `DELETE` Cliente (deletar)
```
DELETE /webservice/v1/su_oss_chamado/2
```

#### `GET` Estrutura (listar)
```
GET /webservice/v1/su_oss_chamado
```

**Body:**
```json
{
"qtype": "su_oss_chamado.tipo",
"query": "E",
"oper": "=",
"page": "1",
"rp": "1000",
"sortname": "su_oss_chamado.id",
"sortorder": "desc"
}
```

#### `POST` Estrutura (inserir)
```
POST /webservice/v1/su_oss_chamado
```

**Body:**
```json
{
  "tipo": "E",//Obrigatório
  "id_ticket": "",
  "protocolo": "",
  "id_assunto": "1",//Obrigatório
  "id_cliente": "",
  "id_estrutura": "2",//Obrigatório
  "id_filial": "1",//Obrigatório
  "id_login": "",
  "id_contrato_kit": "",
  "origem_endereco": "M",//Obrigatório
  "origem_endereco_estrutura": "E",//Obrigatório
  "latitude": "",
  "longitude": "",
  "prioridade": "1",//Obrigatório
  "melhor_horario_agenda": "",
  "setor": "1",//Obrigatório
  "id_tecnico": "",
  "mensagem": "",
  "idx": "",
  "status": "A",//Obrigatório
  "gera_comissao": "",
  "liberado": "",
  "impresso": "",
  "preview": "",
  "id_wfl_param_os": "",
  "id_wfl_tarefa": "",
  "id_su_diagnostico": "",
  "regiao_manutencao": "",
  "origem_cadastro": "",
  "origem_change_endereco": "",
  "status_sla": "",
  "ultima_atualizacao": "",
  "id_cidade": "",
  "bairro": "",
  "endereco": "",
  "complemento": "",
  "referencia": "",
  "id_condominio": "",
  "bloco": "",
  "apartamento": "",
  "data_abertura": "",
  "data_inicio": "",
  "data_hora_analise": "",
  "data_agenda": "",
  "data_agenda_final": "",
  "data_hora_encaminhado": "",
  "data_hora_assumido": "",
  "data_hora_execucao": "",
  "data_final": "",
  "data_fechamento": "",
  "data_prazo_limite": "",
  "data_reservada": "",
  "data_reagendar": "",
  "data_prev_final": "",
  "mensagem_resposta": "",
  "justificativa_sla_atrasado": "",
  "valor_unit_comissao": "",
  "valor_total_comissao": ""
}
```

#### `PUT` Estrutura (editar)
```
PUT /webservice/v1/su_oss_chamado/3
```

**Body:**
```json
{
  "tipo": "E",
  "id_ticket": "",
  "protocolo": "",
  "id_assunto": "1",
  "id_cliente": "",
  "id_estrutura": "2",
  "id_filial": "1",
  "id_login": "",
  "id_contrato_kit": "",
  "origem_endereco": "M",
  "origem_endereco_estrutura": "E",
  "latitude": "",
  "longitude": "",
  "prioridade": "1",
  "melhor_horario_agenda": "",
  "setor": "1",
  "id_tecnico": "",
  "mensagem": "Teste de Estrtura",//Alterando esse camnpo
  "idx": "",
  "status": "A",
  "gera_comissao": "",
  "liberado": "",
  "impresso": "",
  "preview": "",
  "id_wfl_param_os": "",
  "id_wfl_tarefa": "",
  "id_su_diagnostico": "",
  "regiao_manutencao": "",
  "origem_cadastro": "",
  "origem_change_endereco": "",
  "status_sla": "",
  "ultima_atualizacao": "",
  "id_cidade": "",
  "bairro": "",
  "endereco": "",
  "complemento": "",
  "referencia": "",
  "id_condominio": "",
  "bloco": "",
  "apartamento": "",
  "data_abertura": "",
  "data_inicio": "",
  "data_hora_analise": "",
  "data_agenda": "",
  "data_agenda_final": "",
  "data_hora_encaminhado": "",
  "data_hora_assumido": "",
  "data_hora_execucao": "",
  "data_final": "",
  "data_fechamento": "",
  "data_prazo_limite": "",
  "data_reservada": "",
  "data_reagendar": "",
  "data_prev_final": "",
  "mensagem_resposta": "",
  "justificativa_sla_atrasado": "",
  "valor_unit_comissao": "",
  "valor_total_comissao": ""
}
```

#### `DELETE` Estrutura (deletar)
```
DELETE /webservice/v1/su_oss_chamado/3
```

#### `POST` Gerar Protocolo (oculto)
```
POST /webservice/v1/gerar_protocolo_ordem_servico
```

#### `POST` Analisar
```
POST /webservice/v1/su_oss_chamado_analisar
```

**Body:**
```json
{
  "id_chamado": "",
  "id_setor": "",
  "id_tecnico": "",
  "mensagem": "",
  "data_inicio": "",
  "data_final": "",
  "status": "AN",
  "data": "",
  "id_evento": "",
  "latitude": "",
  "longitude": "",
  "gps_time": ""
}
```

#### `POST` Encaminhar (alterar setor)
```
POST /webservice/v1/su_oss_chamado_alterar_setor
```

**Body:**
```json
{
  "id_chamado": "",
  "id_setor": "",
  "id_tecnico": "",
  "id_assunto": "",
  "mensagem": "",
  "status": "EN",
  "data": "",
  "id_evento": "",
  "latitude": "",
  "longitude": "",
  "gps_time": ""
}
```

#### `POST` Encaminhar
```
POST /webservice/v1/su_oss_chamado_alterar_setor
```

**Body:**
```json
{
  "id_chamado": "",
  "id_setor": "",
  "id_tecnico": "",
  "id_assunto": "",
  "mensagem": "",
  "status": "EN",
  "data": "",
  "id_evento": "",
  "latitude": "",
  "longitude": "",
  "gps_time": ""
}
```

#### `POST` Agendar
```
POST /webservice/v1/su_oss_chamado_reagendar
```

**Body:**
```json
{
  "id_chamado": "",
  "data_agendamento": "",
  "data_agendamento_final": "",
  "id_resposta": "",
  "mensagem": "",
  "id_tecnico": "",
  "id_equipe": "",
  "status": "AG",
  "data": "",
  "id_evento": "",
  "id_compromisso": "",
  "latitude": "",
  "longitude": "",
  "gps_time": ""
}
```

#### `POST` Reagendar
```
POST /webservice/v1/su_oss_chamado_reagendar
```

**Body:**
```json
{
  "id_chamado": "",
  "data_agendamento": "",
  "data_agendamento_final": "",
  "id_resposta": "",
  "mensagem": "",
  "id_tecnico": "",
  "id_equipe": "",
  "status": "RAG",
  "data": "",
  "id_evento": "",
  "id_compromisso": "",
  "latitude": "",
  "longitude": "",
  "gps_time": ""
}
```

#### `POST` Registrar mensagem
```
POST /webservice/v1/su_oss_chamado_mensagem
```

**Body:**
```json
{
   "id_chamado": "",
   "id_evento": "",
   "id_resposta": "",
   "mensagem": "",
   "data_inicio": "",
   "data_final": "",
   "id_tecnico": "",
   "status": "",
   "tipo_cobranca": "",
   "id_evento_status": "",
   "data": "",
   "id_equipe": "",
   "id_proxima_tarefa": "",
   "finaliza_processo": "",
   "latitude": "",
   "longitude": "",
   "gps_time": ""
}
```

#### `POST` Executar
```
POST /webservice/v1/su_oss_chamado_executar
```

**Body:**
```json
{
   "id_chamado": "",
   "id_tarefa_atual": "",
   "eh_tarefa_decisao": "",
   "sequencia_atual": "",
   "proxima_sequencia_forcada": "",
   "finaliza_processo_aux": "",
   "gera_comissao_aux": "",
   "id_processo": "",
   "data_inicio": "",
   "data_final": "",
   "id_resposta": "",
   "mensagem": "",
   "id_tecnico": "",
   "id_equipe": "",
   "gera_comissao": "",
   "status": "EX",
   "data": "",
   "id_evento": "",
   "id_su_diagnostico": "",
   "justificativa_sla_atrasado": "",
   "id_evento_status": "",
   "id_proxima_tarefa": "",
   "id_proxima_tarefa_aux": "",
   "latitude": "",
   "longitude": "",
   "gps_time": ""
}
```

#### `POST` Finalizar
```
POST /webservice/v1/su_oss_chamado_fechar
```

**Body:**
```json
{
   "id_chamado": "",
   "id_tarefa_atual": "",
   "eh_tarefa_decisao": "",
   "sequencia_atual": "",
   "proxima_sequencia_forcada": "",
   "finaliza_processo_aux": "",
   "gera_comissao_aux": "",
   "id_processo": "",
   "data_inicio": "",
   "data_final": "",
   "id_resposta": "",
   "mensagem": "",
   "id_tecnico": "",
   "id_equipe": "",
   "gera_comissao": "",
   "status": "F",
   "data": "",
   "id_evento": "",
   "id_su_diagnostico": "",
   "justificativa_sla_atrasado": "",
   "id_evento_status": "",
   "id_proxima_tarefa": "",
   "id_proxima_tarefa_aux": "",
   "latitude": "",
   "longitude": "",
   "gps_time": ""
}
```

#### `POST` Finalizar com tarefa
```
POST /webservice/v1/su_oss_chamado_fechar
```

**Body:**
```json
{
    //Informações da finalização de OS
    "id_chamado": "",
    "gera_comissao_aux": "",
    "data_inicio": "",
    "data_final": "",
    "id_resposta": "",
    "mensagem": "",
    "id_tecnico": "",
    "id_equipe": "",
    "gera_comissao": "",
    "status": "F",
    "data": "",
    "id_evento": "",
    "id_su_diagnostico": "",
    "justificativa_sla_atrasado": "",
    "latitude": "",
    "longitude": "",
    "gps_time": "",

    //Informações acerca da tarefa (deve estar de acordo com o endpoint wfl_tarefa)
    "id_processo": "",
    "id_tarefa_atual": "",
    "eh_tarefa_decisao": "",
    "sequencia_atual": "",
    "proxima_sequencia_forcada": "",
    "finaliza_processo_aux": "",
    "id_evento_status": "",
    "id_proxima_tarefa": "",
    "id_proxima_tarefa_aux": ""
}
```

#### `POST` Marcar para reagendamento
```
POST /webservice/v1/su_oss_chamado_reagendamento
```

**Body:**
```json
{
  "id_chamado": 13230,
  "id_resposta": "",
  "mensagem": "Teste",
  "status": "RAG",
  "data": "",
  "id_evento": "",
  "id_compromisso": "",
  "latitude": "",
  "longitude": "",
  "gps_time": "",
  "id_setor": 10,
  "id_tecnico": ""
}
```

#### `GET` Mensagens OS (listar)
```
GET /webservice/v1/su_oss_chamado_mensagem
```

**Body:**
```json
{
"qtype": "su_oss_chamado_mensagem.id_chamado",
"query": "1234",
"oper": "=",
"page": "1",
"rp": "1000",
"sortname": "su_oss_chamado_mensagem.id",
"sortorder": "desc"
}
```

#### `POST` Mensagens OS (inserir)
```
POST /webservice/v1/su_oss_chamado_mensagem
```

**Body:**
```json
{
  "id_chamado": "2",//Obrigatório
  "id_evento": "8",//Obrigatório
  "id_resposta": "",
  "mensagem": "Teste",//Obrigatório
  "data_inicio": "",
  "data_final": "",
  "id_tecnico": "",
  "status": "A",//Obrigatório
  "tipo_cobranca": "NENHUM",//Obrigatório
  "id_evento_status": "",
  "data": "",
  "id_equipe": "",
  "id_proxima_tarefa": "",
  "finaliza_processo": "N",//Obrigatório
  "latitude": "",
  "longitude": "",
  "gps_time": ""
}
```

#### `PUT` Mensagens OS (editar)
```
PUT /webservice/v1/su_oss_chamado_mensagem/2
```

**Body:**
```json
{
  "id_chamado": "2",
  "id_evento": "8",
  "id_resposta": "",
  "mensagem": "Editado esse campo",
  "data_inicio": "",
  "data_final": "",
  "id_tecnico": "",
  "status": "A",
  "tipo_cobranca": "NENHUM",
  "id_evento_status": "",
  "data": "",
  "id_equipe": "",
  "id_proxima_tarefa": "",
  "finaliza_processo": "N",
  "latitude": "",
  "longitude": "",
  "gps_time": ""
}
```

#### `DELETE` Mensagens OS (deletar)
```
DELETE /webservice/v1/su_oss_chamado_mensagem/2
```

#### `GET` Arquivos (listar)
```
GET /webservice/v1/su_oss_chamado_arquivos
```

**Body:**
```json
{
"qtype": "su_oss_chamado_arquivos.id_oss_chamado",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "su_oss_chamado_arquivos.id",
"sortorder": "desc"
}
```

#### `POST` Arquivos (inserir)
```
POST /webservice/v1/su_oss_chamado_arquivos
```

**Body:**
```json
  descricao = Teste  // Nome do Arquivo
  local_arquivo =   // Diretório do arquivo
  id_oss_chamado = 2252  // ID da OS
  classificacao_arquivo = P  // P=Padrão
```

#### `DELETE` Arquivos (deletar)
```
DELETE /webservice/v1/su_oss_chamado_arquivos/200
```

#### `GET` Listar
```
GET /webservice/v1/visualizar_arquivo_os
```

**Body:**
```json
{
    "id": "1"//ID do arquivo
}
```

#### `GET` Produtos (listar)
```
GET /webservice/v1/su_oss_mov_produto
```

**Body:**
```json
{
"qtype": "movimento_produtos.id_oss_chamado",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "movimento_produtos.id",
"sortorder": "desc",
"grid_param":"[{\"TB\":\"movimento_produtos.id_produto\", \"OP\" : \">=\", \"P\" : \"1\"}]"
}
```

#### `POST` Produtos (inserir)
```
POST /webservice/v1/su_oss_mov_produto
```

**Body:**
```json
{
  "id_oss_mensagem":"",
  "id_saida":"",
  "id_oss_chamado":"4",//Obrigatório
  "id_patrimonio":"",
  "id_produto":"5",//Obrigatório
  "descricao":"",
  "data":"21/06/2024",//Obrigatório
  "id_unidade":"1",//Obrigatório
  "id_almox":"1",//Obrigatório
  "qtde_saida":"1",//Obrigatório
  "valor_unitario":"0.10",//Obrigatório
  "pcomissao":"",
  "pdesconto":"",
  "vdesconto":"",
  "valor_total":"0.10",//Obrigatório
  "valor_total2":"",
  "patrimonio":"",
  "numero_serie":"",
  "numero_patrimonial":"",
  "garantia_oss":"",
  "id_terceiro_oss":"",
  "id_su_oss_kit_equipamento":"",
  "id_classificacao_tributaria":"1",//Obrigatório
  "tipo":"C",//Obrigatório
  "estoque":"S",//Obrigatório
  "unidade_sigla":"UND",//Obrigatório
  "fator_conversao":"1.000000000",//Obrigatório
  "tipo_produto":"",
  "saldo_produto":"",
  "id_estrutura":"",
  "ultima_situacao_patrimonio":"",
  "id_pedido_os":""
}
```

#### `PUT` Produtos (editar)
```
PUT /webservice/v1/su_oss_mov_produto/2
```

**Body:**
```json
{
  "id_oss_mensagem":"",
  "id_saida":"",
  "id_oss_chamado":"4",
  "id_patrimonio":"",
  "id_produto":"5",
  "descricao":"Teste API",//Alterando esse campo
  "data":"21/06/2024",
  "id_unidade":"1",
  "id_almox":"1",
  "qtde_saida":"1",
  "valor_unitario":"0.10",
  "pcomissao":"",
  "pdesconto":"",
  "vdesconto":"",
  "valor_total":"0.10",
  "valor_total2":"",
  "patrimonio":"",
  "numero_serie":"",
  "numero_patrimonial":"",
  "garantia_oss":"",
  "id_terceiro_oss":"",
  "id_su_oss_kit_equipamento":"",
  "id_classificacao_tributaria":"1",
  "tipo":"C",
  "estoque":"S",
  "unidade_sigla":"UND",
  "fator_conversao":"1.000000000",
  "tipo_produto":"",
  "saldo_produto":"",
  "id_estrutura":"",
  "ultima_situacao_patrimonio":"",
  "id_pedido_os":""
}
```

#### `DELETE` Produtos (deletar)
```
DELETE /webservice/v1/su_oss_mov_produto/2
```

#### `GET` Patrimônio (listar)
```
GET /webservice/v1/su_oss_mov_produto
```

**Body:**
```json
{
"qtype": "movimento_produtos.id_oss_chamado",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "movimento_produtos.id",
"sortorder": "desc",
"grid_param":"[{\"TB\":\"movimento_produtos.id_patrimonio\", \"OP\" : \">=\", \"P\" : \"1\"}]"
}
```

#### `POST` Patrimônio (inserir)
```
POST /webservice/v1/su_oss_mov_produto
```

**Body:**
```json
{
  "id_oss_mensagem":"",
  "id_saida":"",
  "id_oss_chamado":"4",//Obrigatório
  "id_patrimonio":"2001",//Obrigatório
  "id_produto":"6",//Obrigatório
  "descricao":"",
  "data":"21/06/2024",//Obrigatório
  "id_unidade":"1",//Obrigatório
  "id_almox":"1",//Obrigatório
  "qtde_saida":"1",//Obrigatório
  "valor_unitario":"0.10",//Obrigatório
  "pcomissao":"",
  "pdesconto":"",
  "vdesconto":"",
  "valor_total":"0.10",//Obrigatório
  "valor_total2":"",
  "patrimonio":"JONH9",
  "numero_serie":"",
  "numero_patrimonial":"JONH9",//Obrigatório
  "garantia_oss":"",
  "id_terceiro_oss":"",
  "id_su_oss_kit_equipamento":"",
  "id_classificacao_tributaria":"1",//Obrigatório
  "tipo":"C",//Obrigatório
  "estoque":"S",//Obrigatório
  "unidade_sigla":"UND",//Obrigatório
  "fator_conversao":"1.000000000",//Obrigatório
  "tipo_produto":"",
  "saldo_produto":"",
  "id_estrutura":"",
  "ultima_situacao_patrimonio":"",
  "id_pedido_os":""
}
```

#### `PUT` Patrimônio (inserir) Copy
```
PUT /webservice/v1/su_oss_mov_produto/22
```

**Body:**
```json
{
  "id_oss_mensagem":"",
  "id_saida":"",
  "id_oss_chamado":"4",
  "id_patrimonio":"",
  "id_produto":"5",
  "descricao":"Teste API",//Alterando esse campo
  "data":"21/06/2024",
  "id_unidade":"1",
  "id_almox":"1",
  "qtde_saida":"1",
  "valor_unitario":"0.10",
  "pcomissao":"",
  "pdesconto":"",
  "vdesconto":"",
  "valor_total":"0.10",
  "valor_total2":"",
  "patrimonio":"",
  "numero_serie":"",
  "numero_patrimonial":"",
  "garantia_oss":"",
  "id_terceiro_oss":"",
  "id_su_oss_kit_equipamento":"",
  "id_classificacao_tributaria":"1",
  "tipo":"C",
  "estoque":"S",
  "unidade_sigla":"UND",
  "fator_conversao":"1.000000000",
  "tipo_produto":"",
  "saldo_produto":"",
  "id_estrutura":"",
  "ultima_situacao_patrimonio":"",
  "id_pedido_os":""
}
```

#### `DELETE` Patrimônio (deletar)
```
DELETE /webservice/v1/su_oss_mov_produto/22
```

#### `GET` Produto (listar)
```
GET /webservice/v1/su_oss_mov_comodato_wiz
```

**Body:**
```json
{
"qtype": "movimento_produtos.id_oss_chamado",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "movimento_produtos.id",
"sortorder": "desc",
"grid_param":"[{\"TB\":\"movimento_produtos.status_comodato\", \"OP\" : \"=\", \"P\" : \"E\"},{\"TB\":\"movimento_produtos.id_produto\", \"OP\" : \"=\", \">=\" : \"1\"}]"
}
```

#### `POST` Produto (inserir)
```
POST /webservice/v1/su_oss_mov_comodato_wiz
```

**Body:**
```json
{
  "id_oss_mensagem": "",
  "id_saida": "",
  "id_oss_chamado": "4",//Obrigatório
  "id_contrato": "1",//Obrigatório
  "id_login": "",
  "id_patrimonio": "",
  "id_produto": "5",//Obrigatório
  "descricao": "",
  "data": "21/06/2024",//Obrigatório
  "id_unidade": "1",//Obrigatório
  "id_almox": "1",//Obrigatório
  "filial_id": "1",//Obrigatório
  "qtde_saida": "1",//Obrigatório
  "valor_unitario": "0.10",//Obrigatório
  "pcomissao": "",
  "pdesconto": "",
  "vdesconto": "",
  "valor_total": "0.10",//Obrigatório
  "patrimonio": "",
  "mac": "",
  "numero_serie": "",
  "numero_patrimonial": "",
  "garantia_oss": "",
  "id_terceiro_oss": "",
  "id_su_oss_kit_equipamento": "",
  "id_classificacao_tributaria": "1",//Obrigatório
  "tipo": "C",//Obrigatório
  "estoque": "S",//Obrigatório
  "unidade_sigla": "UND",//Obrigatório
  "fator_conversao": "1",//Obrigatório
  "tipo_produto": "",
  "status_comodato": "E",//Obrigatório
  "status_patrimonio": "",
  "ultima_situacao_patrimonio": "",
  "id_pedido_os": ""
}
```

#### `PUT` Produto (inserir)
```
PUT /webservice/v1/su_oss_mov_produto/24
```

**Body:**
```json
{
  "id_oss_mensagem": "",
  "id_saida": "",
  "id_oss_chamado": "4",
  "id_contrato": "1",
  "id_login": "",
  "id_patrimonio": "",
  "id_produto": "5",
  "descricao": "Teste",//Alterando esse campo
  "data": "21/06/2024",
  "id_unidade": "1",
  "id_almox": "1",
  "filial_id": "1",
  "qtde_saida": "1",
  "valor_unitario": "0.10",
  "pcomissao": "",
  "pdesconto": "",
  "vdesconto": "",
  "valor_total": "0.10",
  "patrimonio": "",
  "mac": "",
  "numero_serie": "",
  "numero_patrimonial": "",
  "garantia_oss": "",
  "id_terceiro_oss": "",
  "id_su_oss_kit_equipamento": "",
  "id_classificacao_tributaria": "1",
  "tipo": "C",
  "estoque": "S",
  "unidade_sigla": "UND",
  "fator_conversao": "1",
  "tipo_produto": "",
  "status_comodato": "E",
  "status_patrimonio": "",
  "ultima_situacao_patrimonio": "",
  "id_pedido_os": ""
}
```

#### `DELETE` Produto (deletar)
```
DELETE /webservice/v1/su_oss_mov_produto/24
```

#### `GET` Patrimônio (listar)
```
GET /webservice/v1/su_oss_mov_comodato_wiz
```

**Body:**
```json
{
"qtype": "movimento_produtos.id_oss_chamado",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "movimento_produtos.id",
"sortorder": "desc",
"grid_param":"[{\"TB\":\"movimento_produtos.status_comodato\", \"OP\" : \"=\", \"P\" : \"E\"},{\"TB\":\"movimento_produtos.id_patrimonio\", \"OP\" : \"=\", \">=\" : \"1\"}]"
}
```

#### `POST` Patrimônio (inserir)
```
POST /webservice/v1/su_oss_mov_comodato_wiz
```

**Body:**
```json
{
  "id_oss_mensagem": "",
  "id_saida": "",
  "id_oss_chamado": "4",//Obrigatório
  "id_contrato": "1",//Obrigatório
  "id_login": "",
  "id_patrimonio": "",//Obrigatório
  "id_produto": "5",//Obrigatório
  "descricao": "",
  "data": "21/06/2024",//Obrigatório
  "id_unidade": "1",//Obrigatório
  "id_almox": "1",//Obrigatório
  "filial_id": "1",//Obrigatório
  "qtde_saida": "1",//Obrigatório
  "valor_unitario": "0.10",//Obrigatório
  "pcomissao": "",
  "pdesconto": "",
  "vdesconto": "",
  "valor_total": "0.10",//Obrigatório
  "patrimonio": "",//Obrigatório
  "mac": "",//Obrigatório - Caso não inserir, ficara oculto na interface
  "numero_serie": "",
  "numero_patrimonial": "",//Obrigatório
  "garantia_oss": "",
  "id_terceiro_oss": "",
  "id_su_oss_kit_equipamento": "",
  "id_classificacao_tributaria": "1",//Obrigatório
  "tipo": "C",//Obrigatório
  "estoque": "S",//Obrigatório
  "unidade_sigla": "UND",//Obrigatório
  "fator_conversao": "1",//Obrigatório
  "tipo_produto": "",//Obrigatório - Caso não inserir, ficara oculto na interface
  "status_comodato": "E",//Obrigatório
  "status_patrimonio": "",//Obrigatório
  "ultima_situacao_patrimonio": "",
  "id_pedido_os": ""
}
```

#### `PUT` Patrimônio (inserir)
```
PUT /webservice/v1/su_oss_mov_comodato_wiz/22
```

**Body:**
```json
{
  "id_oss_mensagem": "",
  "id_saida": "",
  "id_oss_chamado": "4",
  "id_contrato": "1",
  "id_login": "",
  "id_patrimonio": "",
  "id_produto": "5",
  "descricao": "Teste API",//Alterando esse campo
  "data": "21/06/2024",
  "id_unidade": "1",
  "id_almox": "1",
  "filial_id": "1",
  "qtde_saida": "1",
  "valor_unitario": "0.10",
  "pcomissao": "",
  "pdesconto": "",
  "vdesconto": "",
  "valor_total": "0.10",
  "patrimonio": "",
  "mac": "",
  "numero_serie": "",
  "numero_patrimonial": "",
  "garantia_oss": "",
  "id_terceiro_oss": "",
  "id_su_oss_kit_equipamento": "",
  "id_classificacao_tributaria": "1",
  "tipo": "C",
  "estoque": "S",
  "unidade_sigla": "UND",
  "fator_conversao": "1",
  "tipo_produto": "",
  "status_comodato": "E",
  "status_patrimonio": "",
  "ultima_situacao_patrimonio": "",
  "id_pedido_os": ""
}
```

#### `DELETE` Patrimônio (deletar)
```
DELETE /webservice/v1/su_oss_mov_comodato_wiz/22
```

#### `GET` Logins afetados (listar)
```
GET /webservice/v1/su_oss_chamado_regiao_manutencao_radusuarios
```

**Body:**
```json
{
"qtype": "su_oss_chamado_regiao_manutencao_radusuarios.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "su_oss_chamado_regiao_manutencao_radusuarios.id",
"sortorder": "desc"
}
```

#### `POST` Logins afetados (inserir)
```
POST /webservice/v1/su_oss_chamado_regiao_manutencao_radusuarios
```

**Body:**
```json
{//Todos os campols são obrigatórios
"id_radusuarios": "1",
"id_su_oss_chamado": "1",
"id_su_oss_chamado_regiao_manutencao": "1"
}
```

#### `DELETE` Logins afetados (deletar)
```
DELETE /webservice/v1/su_oss_chamado_regiao_manutencao_radusuarios/29
```

#### `POST` Finalizar com tarefa
```
POST /webservice/v1/su_oss_chamado_fechar
```

**Body:**
```json
{
    //Informações da finalização de OS
    "id_chamado": "",
    "gera_comissao_aux": "",
    "data_inicio": "",
    "data_final": "",
    "id_resposta": "",
    "mensagem": "",
    "id_tecnico": "",
    "id_equipe": "",
    "gera_comissao": "",
    "status": "F",
    "data": "",
    "id_evento": "",
    "id_su_diagnostico": "",
    "justificativa_sla_atrasado": "",
    "latitude": "",
    "longitude": "",
    "gps_time": "",

    //Informações acerca da tarefa (deve estar de acordo com o endpoint wfl_tarefa)
    "id_processo": "",
    "id_tarefa_atual": "",
    "eh_tarefa_decisao": "",
    "sequencia_atual": "",
    "proxima_sequencia_forcada": "",
    "finaliza_processo_aux": "",
    "id_evento_status": "",
    "id_proxima_tarefa": "",
    "id_proxima_tarefa_aux": ""
}
```

#### `GET` Visualizar arquivo (OS)
```
GET /webservice/v1/visualizar_arquivo_os
```

**Body:**
```json
{
    "id": "1"//ID do arquivo
}
```

#### `POST` Gerar Protocolo (oculto)
```
POST /webservice/v1/gerar_protocolo_ordem_servico
```

#### `POST` Analisar
```
POST /webservice/v1/su_oss_chamado_analisar
```

**Body:**
```json
{
  "id_chamado": "",
  "id_setor": "",
  "id_tecnico": "",
  "mensagem": "",
  "data_inicio": "",
  "data_final": "",
  "status": "AN",
  "data": "",
  "id_evento": "",
  "latitude": "",
  "longitude": "",
  "gps_time": ""
}
```

#### `POST` Encaminhar (alterar setor)
```
POST /webservice/v1/su_oss_chamado_alterar_setor
```

**Body:**
```json
{
  "id_chamado": "",
  "id_setor": "",
  "id_tecnico": "",
  "id_assunto": "",
  "mensagem": "",
  "status": "EN",
  "data": "",
  "id_evento": "",
  "latitude": "",
  "longitude": "",
  "gps_time": ""
}
```

#### `POST` Encaminhar
```
POST /webservice/v1/su_oss_chamado_alterar_setor
```

**Body:**
```json
{
  "id_chamado": "",
  "id_setor": "",
  "id_tecnico": "",
  "id_assunto": "",
  "mensagem": "",
  "status": "EN",
  "data": "",
  "id_evento": "",
  "latitude": "",
  "longitude": "",
  "gps_time": ""
}
```

#### `POST` Agendar
```
POST /webservice/v1/su_oss_chamado_reagendar
```

**Body:**
```json
{
  "id_chamado": "",
  "data_agendamento": "",
  "data_agendamento_final": "",
  "id_resposta": "",
  "mensagem": "",
  "id_tecnico": "",
  "id_equipe": "",
  "status": "AG",
  "data": "",
  "id_evento": "",
  "id_compromisso": "",
  "latitude": "",
  "longitude": "",
  "gps_time": ""
}
```

#### `POST` Reagendar
```
POST /webservice/v1/su_oss_chamado_reagendar
```

**Body:**
```json
{
  "id_chamado": "",
  "data_agendamento": "",
  "data_agendamento_final": "",
  "id_resposta": "",
  "mensagem": "",
  "id_tecnico": "",
  "id_equipe": "",
  "status": "RAG",
  "data": "",
  "id_evento": "",
  "id_compromisso": "",
  "latitude": "",
  "longitude": "",
  "gps_time": ""
}
```

#### `POST` Registrar mensagem
```
POST /webservice/v1/su_oss_chamado_mensagem
```

**Body:**
```json
{
   "id_chamado": "",
   "id_evento": "",
   "id_resposta": "",
   "mensagem": "",
   "data_inicio": "",
   "data_final": "",
   "id_tecnico": "",
   "status": "",
   "tipo_cobranca": "",
   "id_evento_status": "",
   "data": "",
   "id_equipe": "",
   "id_proxima_tarefa": "",
   "finaliza_processo": "",
   "latitude": "",
   "longitude": "",
   "gps_time": ""
}
```

#### `POST` Executar
```
POST /webservice/v1/su_oss_chamado_executar
```

**Body:**
```json
{
   "id_chamado": "",
   "id_tarefa_atual": "",
   "eh_tarefa_decisao": "",
   "sequencia_atual": "",
   "proxima_sequencia_forcada": "",
   "finaliza_processo_aux": "",
   "gera_comissao_aux": "",
   "id_processo": "",
   "data_inicio": "",
   "data_final": "",
   "id_resposta": "",
   "mensagem": "",
   "id_tecnico": "",
   "id_equipe": "",
   "gera_comissao": "",
   "status": "EX",
   "data": "",
   "id_evento": "",
   "id_su_diagnostico": "",
   "justificativa_sla_atrasado": "",
   "id_evento_status": "",
   "id_proxima_tarefa": "",
   "id_proxima_tarefa_aux": "",
   "latitude": "",
   "longitude": "",
   "gps_time": ""
}
```

#### `POST` Finalizar
```
POST /webservice/v1/su_oss_chamado_fechar
```

**Body:**
```json
{
   "id_chamado": "",
   "id_tarefa_atual": "",
   "eh_tarefa_decisao": "",
   "sequencia_atual": "",
   "proxima_sequencia_forcada": "",
   "finaliza_processo_aux": "",
   "gera_comissao_aux": "",
   "id_processo": "",
   "data_inicio": "",
   "data_final": "",
   "id_resposta": "",
   "mensagem": "",
   "id_tecnico": "",
   "id_equipe": "",
   "gera_comissao": "",
   "status": "F",
   "data": "",
   "id_evento": "",
   "id_su_diagnostico": "",
   "justificativa_sla_atrasado": "",
   "id_evento_status": "",
   "id_proxima_tarefa": "",
   "id_proxima_tarefa_aux": "",
   "latitude": "",
   "longitude": "",
   "gps_time": ""
}
```

#### `POST` Marcar para reagendamento
```
POST /webservice/v1/su_oss_chamado_reagendamento
```

**Body:**
```json
{
  "id_chamado": 13230,
  "id_resposta": "",
  "mensagem": "Teste",
  "status": "RAG",
  "data": "",
  "id_evento": "",
  "id_compromisso": "",
  "latitude": "",
  "longitude": "",
  "gps_time": "",
  "id_setor": 10,
  "id_tecnico": ""
}
```

#### `POST` Reabrir
```
POST /webservice/v1/su_oss_chamado_reabrir
```

**Body:**
```json
{
    "id_chamado":"13198",//Obrigatório
    "id_operador": "",
    "data": "",
    "id_evento": "",
    "id": "",
    "status": "A",//Obrigatório ser A=Aberto
    "id_tecnico": "",
    "mensagem": ""//Obrigatório
}
```

### Atendimentos

#### `GET` Cliente (listar)
```
GET /webservice/v1/su_ticket
```

**Body:**
```json
{
"qtype": "su_ticket.tipo",
"query": "C",
"oper": "=",
"page": "1",
"rp": "1000",
"sortname": "su_ticket.id",
"sortorder": "desc"
}
```

#### `POST` Cliente (inserir)
```
POST /webservice/v1/su_ticket
```

**Body:**
```json
{
  "tipo": "C",//Obrigatório
  "id_estrutura": "",
  "protocolo": "",
  "id_circuito": "",
  "id_cliente": "1",//Obrigatório
  "id_login": "",
  "id_contrato": "",
  "id_filial": "",
  "id_assunto": "1",//Obrigatório
  "titulo": "Teste API",//Obrigatório
  "origem_endereco": "",
  "origem_endereco_estrutura": "",
  "endereco": "",
  "latitude": "",
  "longitude": "",
  "id_wfl_processo": "",
  "id_ticket_setor": "2",//Obrigatório
  "id_responsavel_tecnico": "",
  "data_criacao": "",
  "data_ultima_alteracao": "",
  "prioridade": "B",//Obrigatório
  "data_reservada": "",
  "melhor_horario_reserva": "",
  "id_ticket_origem": "",
  "id_usuarios": "",
  "id_resposta": "",
  "menssagem": "Teste de API",//Obrigatório
  "interacao_pendente": "",
  "su_status": "N",//Obrigatório
  "id_evento_status_processo": "",
  "id_canal_atendimento": "",
  "status": "",
  "mensagens_nao_lida_cli": "",
  "mensagens_nao_lida_sup": "",
  "token": "",
  "finalizar_atendimento": "",
  "id_su_diagnostico": "",
  "status_sla": "",
  "origem_cadastro": "",
  "ultima_atualizacao": "",
  "cliente_fone": "",
  "cliente_telefone_comercial": "",
  "cliente_id_operadora_celular": "",
  "cliente_telefone_celular": "",
  "cliente_whatsapp": "",
  "cliente_ramal": "",
  "cliente_email": "",
  "cliente_contato": "",
  "cliente_website": "",
  "cliente_skype": "",
  "cliente_facebook": "",
  "latitude_cli": "",
  "longitude_cli": "",
  "latitude_login": "",
  "longitude_login": ""
}
```

#### `PUT` Cliente (editar)
```
PUT /webservice/v1/su_ticket/591
```

**Body:**
```json
{
  "tipo": "C",
  "id_estrutura": "",
  "protocolo": "",
  "id_circuito": "",
  "id_cliente": "1",
  "id_login": "",
  "id_contrato": "",
  "id_filial": "",
  "id_assunto": "1",
  "titulo": "Teste API",
  "origem_endereco": "",
  "origem_endereco_estrutura": "",
  "endereco": "",
  "latitude": "",
  "longitude": "",
  "id_wfl_processo": "",
  "id_ticket_setor": "2",
  "id_responsavel_tecnico": "",
  "data_criacao": "",
  "data_ultima_alteracao": "",
  "prioridade": "B",
  "data_reservada": "",
  "melhor_horario_reserva": "",
  "id_ticket_origem": "",
  "id_usuarios": "",
  "id_resposta": "",
  "menssagem": "Alteração de API",//Alterando esse campo
  "interacao_pendente": "",
  "su_status": "N",
  "id_evento_status_processo": "",
  "id_canal_atendimento": "",
  "status": "",
  "mensagens_nao_lida_cli": "",
  "mensagens_nao_lida_sup": "",
  "token": "",
  "finalizar_atendimento": "",
  "id_su_diagnostico": "",
  "status_sla": "",
  "origem_cadastro": "",
  "ultima_atualizacao": "",
  "cliente_fone": "",
  "cliente_telefone_comercial": "",
  "cliente_id_operadora_celular": "",
  "cliente_telefone_celular": "",
  "cliente_whatsapp": "",
  "cliente_ramal": "",
  "cliente_email": "",
  "cliente_contato": "",
  "cliente_website": "",
  "cliente_skype": "",
  "cliente_facebook": "",
  "latitude_cli": "",
  "longitude_cli": "",
  "latitude_login": "",
  "longitude_login": ""
}
```

#### `DELETE` Cliente (deletar)
```
DELETE /webservice/v1/su_ticket/2
```

#### `GET` Estruturas (listar)
```
GET /webservice/v1/su_ticket
```

**Body:**
```json
{
"qtype": "su_ticket.tipo",
"query": "E",
"oper": "=",
"page": "1",
"rp": "1000",
"sortname": "su_ticket.id",
"sortorder": "desc"
}
```

#### `POST` Estruturas (inserir)
```
POST /webservice/v1/su_ticket
```

**Body:**
```json
{
  "tipo": "E",//Obrigatório
  "id_estrutura": "1",//Obrigatório
  "protocolo": "",
  "id_circuito": "",
  "id_cliente": "1",//Obrigatório
  "id_login": "",
  "id_contrato": "",
  "id_filial": "",
  "id_assunto": "1",//Obrigatório
  "titulo": "Teste API",//Obrigatório
  "origem_endereco": "",
  "origem_endereco_estrutura": "",
  "endereco": "",
  "latitude": "",
  "longitude": "",
  "id_wfl_processo": "",
  "id_ticket_setor": "2",//Obrigatório
  "id_responsavel_tecnico": "",
  "data_criacao": "",
  "data_ultima_alteracao": "",
  "prioridade": "B",//Obrigatório
  "data_reservada": "",
  "melhor_horario_reserva": "",
  "id_ticket_origem": "",
  "id_usuarios": "",
  "id_resposta": "",
  "menssagem": "Teste de API",//Obrigatório
  "interacao_pendente": "",
  "su_status": "N",//Obrigatório
  "id_evento_status_processo": "",
  "id_canal_atendimento": "",
  "status": "",
  "mensagens_nao_lida_cli": "",
  "mensagens_nao_lida_sup": "",
  "token": "",
  "finalizar_atendimento": "",
  "id_su_diagnostico": "",
  "status_sla": "",
  "origem_cadastro": "",
  "ultima_atualizacao": "",
  "cliente_fone": "",
  "cliente_telefone_comercial": "",
  "cliente_id_operadora_celular": "",
  "cliente_telefone_celular": "",
  "cliente_whatsapp": "",
  "cliente_ramal": "",
  "cliente_email": "",
  "cliente_contato": "",
  "cliente_website": "",
  "cliente_skype": "",
  "cliente_facebook": "",
  "latitude_cli": "",
  "longitude_cli": "",
  "latitude_login": "",
  "longitude_login": ""
}
```

#### `PUT` Estruturas (editar)
```
PUT /webservice/v1/su_ticket/593
```

**Body:**
```json
{
  "tipo": "E",
  "id_estrutura": "1",
  "protocolo": "",
  "id_circuito": "",
  "id_cliente": "1",
  "id_login": "",
  "id_contrato": "",
  "id_filial": "",
  "id_assunto": "1",
  "titulo": "Teste de alteracao de API",//Alterando esse campo
  "origem_endereco": "",
  "origem_endereco_estrutura": "",
  "endereco": "",
  "latitude": "",
  "longitude": "",
  "id_wfl_processo": "",
  "id_ticket_setor": "2",
  "id_responsavel_tecnico": "",
  "data_criacao": "",
  "data_ultima_alteracao": "",
  "prioridade": "B",
  "data_reservada": "",
  "melhor_horario_reserva": "",
  "id_ticket_origem": "",
  "id_usuarios": "",
  "id_resposta": "",
  "menssagem": "Teste de API",
  "interacao_pendente": "",
  "su_status": "N",
  "id_evento_status_processo": "",
  "id_canal_atendimento": "",
  "status": "",
  "mensagens_nao_lida_cli": "",
  "mensagens_nao_lida_sup": "",
  "token": "",
  "finalizar_atendimento": "",
  "id_su_diagnostico": "",
  "status_sla": "",
  "origem_cadastro": "",
  "ultima_atualizacao": "",
  "cliente_fone": "",
  "cliente_telefone_comercial": "",
  "cliente_id_operadora_celular": "",
  "cliente_telefone_celular": "",
  "cliente_whatsapp": "",
  "cliente_ramal": "",
  "cliente_email": "",
  "cliente_contato": "",
  "cliente_website": "",
  "cliente_skype": "",
  "cliente_facebook": "",
  "latitude_cli": "",
  "longitude_cli": "",
  "latitude_login": "",
  "longitude_login": ""
}
```

#### `DELETE` Estruturas (deletar)
```
DELETE /webservice/v1/su_ticket/593
```

#### `POST` Transferir atendimento
```
POST /webservice/v1/su_transf_atendimento_26466
```

**Body:**
```json
{
    "id_atendimento": "",//ID do Atendimento (su_ticket)
    "data_transferencia": "",//Data DD/MM/AAAA hh:mm:ss
    "id_departamento_origem": "",//ID do Departamento Origem
    "id_departamento_destino": "",//ID do Departamento Destino
    "id_responsavel_tecnico": ""//ID do Colaborador/Técnico responsável
}
```

#### `POST` Gerar Protocolo (oculto)
```
POST /webservice/v1/gerar_protocolo_atendimento
```

#### `POST` Novo
```
POST /webservice/v1/su_mensagens
```

**Body:**
```json
{
   "id_cliente": "",
   "assunto_ticket": "",
   "mensagem_ticket": "",
   "titulo": "",
   "data": "",
   "id_resposta": "",
   "mensagem": "",
   "visibilidade_mensagens": "",
   "operador": "",
   "su_status": "N",
   "id_evento_status": "",
   "id_ticket": "",
   "existe_pendencia_externa": "",
   "id_su_diagnostico": "",
   "ultima_atualizacao": ""
}
```

#### `POST` Pendente
```
POST /webservice/v1/su_mensagens
```

**Body:**
```json
{
   "id_cliente": "",
   "assunto_ticket": "",
   "mensagem_ticket": "",
   "titulo": "",
   "data": "",
   "id_resposta": "",
   "mensagem": "",
   "visibilidade_mensagens": "",
   "operador": "",
   "su_status": "P",
   "id_evento_status": "",
   "id_ticket": "",
   "existe_pendencia_externa": "",
   "id_su_diagnostico": "",
   "ultima_atualizacao": ""
}
```

#### `POST` Em Progresso
```
POST /webservice/v1/su_mensagens
```

**Body:**
```json
{
   "id_cliente": "",
   "assunto_ticket": "",
   "mensagem_ticket": "",
   "titulo": "",
   "data": "",
   "id_resposta": "",
   "mensagem": "",
   "visibilidade_mensagens": "",
   "operador": "",
   "su_status": "EP",
   "id_evento_status": "",
   "id_ticket": "",
   "existe_pendencia_externa": "",
   "id_su_diagnostico": "",
   "ultima_atualizacao": ""
}
```

#### `POST` Solucionado
```
POST /webservice/v1/su_mensagens
```

**Body:**
```json
{
   "id_cliente": "",
   "assunto_ticket": "",
   "mensagem_ticket": "",
   "titulo": "",
   "data": "",
   "id_resposta": "",
   "mensagem": "",
   "visibilidade_mensagens": "",
   "operador": "",
   "su_status": "S",
   "id_evento_status": "",
   "id_ticket": "",
   "existe_pendencia_externa": "",
   "id_su_diagnostico": "",
   "ultima_atualizacao": ""
}
```

#### `POST` Cancelado
```
POST /webservice/v1/su_mensagens
```

**Body:**
```json
{
   "id_cliente": "",
   "assunto_ticket": "",
   "mensagem_ticket": "",
   "titulo": "",
   "data": "",
   "id_resposta": "",
   "mensagem": "",
   "visibilidade_mensagens": "",
   "operador": "",
   "su_status": "C",
   "id_evento_status": "",
   "id_ticket": "",
   "existe_pendencia_externa": "",
   "id_su_diagnostico": "",
   "ultima_atualizacao": ""
}
```

#### `GET` Movimentações/Histórico (listar)
```
GET /webservice/v1/su_transf_atendimento
```

**Body:**
```json
{
"qtype": "su_transf_atendimento.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "100",
"sortname": "su_transf_atendimento.id",
"sortorder": "desc"
}
```

#### `GET` Mensagens (listar)
```
GET /webservice/v1/su_mensagens
```

**Body:**
```json
{
"qtype": "su_mensagens.id_ticket",
"query": "1234",
"oper": "=",
"page": "1",
"rp": "1000",
"sortname": "su_mensagens.id",
"sortorder": "desc"
}
```

#### `POST` Mensagens (inserir)
```
POST /webservice/v1/su_mensagens
```

**Body:**
```json
{
  "id_cliente": "",//Obrigatório
  "assunto_ticket": "",
  "mensagem_ticket": "Teste",//Obrigatório
  "titulo": "",
  "data": "",
  "id_resposta": "",
  "mensagem": "Teste",//Obrigatório
  "visibilidade_mensagens": "P",//Obrigatório
  "operador": "",
  "su_status": "P",//Obrigatório
  "id_evento_status": "",
  "id_ticket": "1",//Obrigatório
  "existe_pendencia_externa": "E",//Obrigatório
  "id_su_diagnostico": "",
  "ultima_atualizacao": ""
}
```

#### `PUT` Mensagens (editar)
```
PUT /webservice/v1/su_mensagens/2
```

**Body:**
```json
{
  "id_cliente": "",
  "assunto_ticket": "",
  "mensagem_ticket": "Editando esse campo",
  "titulo": "",
  "data": "",
  "id_resposta": "",
  "mensagem": "Teste",
  "visibilidade_mensagens": "P",
  "operador": "",
  "su_status": "P",
  "id_evento_status": "",
  "id_ticket": "1",
  "existe_pendencia_externa": "E",
  "id_su_diagnostico": "",
  "ultima_atualizacao": ""
}
```

#### `DELETE` Mensagens (deletar)
```
DELETE /webservice/v1/su_mensagens/2
```

#### `GET` Arquivos (listar)
```
GET /webservice/v1/su_ticket_arquivos
```

**Body:**
```json
{
"qtype": "su_ticket_arquivos.id_ticket",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "su_ticket_arquivos.id",
"sortorder": "desc"
}
```

#### `POST` Arquivos (inserir)
```
POST /webservice/v1/su_ticket_arquivos
```

**Body:**
```json
  descricao = Teste  // Nome do Arquivo
  local_arquivo =   // Diretório do arquivo
  id_ticket = 592  // ID do Atendimento
```

#### `DELETE` Arquivos (deletar)
```
DELETE /webservice/v1/su_ticket_arquivos/24
```

#### `POST` Transferir atendimento
```
POST /webservice/v1/su_transf_atendimento_26466
```

**Body:**
```json
{
    "id_atendimento": "",//ID do Atendimento (su_ticket)
    "data_transferencia": "",//Data DD/MM/AAAA hh:mm:ss
    "id_departamento_origem": "",//ID do Departamento Origem
    "id_departamento_destino": "",//ID do Departamento Destino
    "id_responsavel_tecnico": ""//ID do Colaborador/Técnico responsável
}
```

#### `POST` Gerar Protocolo (oculto)
```
POST /webservice/v1/gerar_protocolo_atendimento
```

#### `POST` Novo
```
POST /webservice/v1/su_mensagens
```

**Body:**
```json
{
   "id_cliente": "",
   "assunto_ticket": "",
   "mensagem_ticket": "",
   "titulo": "",
   "data": "",
   "id_resposta": "",
   "mensagem": "",
   "visibilidade_mensagens": "",
   "operador": "",
   "su_status": "N",
   "id_evento_status": "",
   "id_ticket": "",
   "existe_pendencia_externa": "",
   "id_su_diagnostico": "",
   "ultima_atualizacao": ""
}
```

#### `POST` Pendente
```
POST /webservice/v1/su_mensagens
```

**Body:**
```json
{
   "id_cliente": "",
   "assunto_ticket": "",
   "mensagem_ticket": "",
   "titulo": "",
   "data": "",
   "id_resposta": "",
   "mensagem": "",
   "visibilidade_mensagens": "",
   "operador": "",
   "su_status": "P",
   "id_evento_status": "",
   "id_ticket": "",
   "existe_pendencia_externa": "",
   "id_su_diagnostico": "",
   "ultima_atualizacao": ""
}
```

#### `POST` Em Progresso
```
POST /webservice/v1/su_mensagens
```

**Body:**
```json
{
   "id_cliente": "",
   "assunto_ticket": "",
   "mensagem_ticket": "",
   "titulo": "",
   "data": "",
   "id_resposta": "",
   "mensagem": "",
   "visibilidade_mensagens": "",
   "operador": "",
   "su_status": "EP",
   "id_evento_status": "",
   "id_ticket": "",
   "existe_pendencia_externa": "",
   "id_su_diagnostico": "",
   "ultima_atualizacao": ""
}
```

#### `POST` Solucionado
```
POST /webservice/v1/su_mensagens
```

**Body:**
```json
{
   "id_cliente": "",
   "assunto_ticket": "",
   "mensagem_ticket": "",
   "titulo": "",
   "data": "",
   "id_resposta": "",
   "mensagem": "",
   "visibilidade_mensagens": "",
   "operador": "",
   "su_status": "S",
   "id_evento_status": "",
   "id_ticket": "",
   "existe_pendencia_externa": "",
   "id_su_diagnostico": "",
   "ultima_atualizacao": ""
}
```

#### `POST` Cancelado
```
POST /webservice/v1/su_mensagens
```

**Body:**
```json
{
   "id_cliente": "",
   "assunto_ticket": "",
   "mensagem_ticket": "",
   "titulo": "",
   "data": "",
   "id_resposta": "",
   "mensagem": "",
   "visibilidade_mensagens": "",
   "operador": "",
   "su_status": "C",
   "id_evento_status": "",
   "id_ticket": "",
   "existe_pendencia_externa": "",
   "id_su_diagnostico": "",
   "ultima_atualizacao": ""
}
```

### 📁 Cadastros

#### `GET` Diagnóstico (listar)
```
GET /webservice/v1/su_diagnostico
```

**Body:**
```json
{
"qtype": "su_diagnostico.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "su_diagnostico.id",
"sortorder": "desc"
}
```

#### `POST` Diagnóstico (inserir)
```
POST /webservice/v1/su_diagnostico
```

**Body:**
```json
{
  "descricao": "Teste API",//Obrigatório
  "ativo": "S",//Obrigatório
  "id_setor": "",
  "ultima_atualizacao": ""
}
```

#### `PUT` Diagnóstico (editar)
```
PUT /webservice/v1/su_diagnostico/6
```

**Body:**
```json
{
  "descricao": "Teste de alteracao api",//Alterando esse campo
  "ativo": "S",
  "id_setor": "",
  "ultima_atualizacao": ""
}
```

#### `DELETE` Diagnóstico (deletar)
```
DELETE /webservice/v1/su_diagnostico/6
```

#### `GET` OS modelos (listar)
```
GET /webservice/v1/su_oss_modelo_impressao
```

**Body:**
```json
{
"qtype": "su_oss_modelo_impressao.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "su_oss_modelo_impressao.id",
"sortorder": "desc"
}
```

#### `POST` OS modelos (inserir)
```
POST /webservice/v1/su_oss_modelo_impressao
```

**Body:**
```json
{//Todos os campos são obrigatórios
  "nome": "Teste API",
  "texto": "Descrição de Modelo de OS"
}
```

#### `PUT` OS modelos (editar)
```
PUT /webservice/v1/su_oss_modelo_impressao/23
```

**Body:**
```json
{
  "nome": "Alteração de API",//Alterando esse campo
  "texto": "Descrição de Modelo de OS"
}
```

#### `DELETE` OS modelos (deletar)
```
DELETE /webservice/v1/su_oss_modelo_impressao/23
```

#### `GET` Respostas (listar)
```
GET /webservice/v1/su_oss_respostas
```

**Body:**
```json
{
    "qtype": "su_oss_respostas.id",
    "query": "1",
    "oper": ">=",
    "page": "1",
    "rp": "1000",
    "sortname": "su_oss_respostas.id",
    "sortorder": "desc"
}
```

#### `POST` Respostas (inserir)
```
POST /webservice/v1/su_oss_respostas
```

**Body:**
```json
{
  "ativo": "S",//Obrigatório
  "setor": "",
  "titulo": "Teste de API",//Obrigatório
  "resposta": "Isso e um teste",//Obrigatório
  "su_status": "N",//Obrigatório
  "id_evento_status_processo": "",
  "interacao_pendente": "A"//Obrigatório
}
```

#### `PUT` Respostas (editar)
```
PUT /webservice/v1/su_oss_respostas/4
```

**Body:**
```json
{
  "ativo": "S",
  "setor": "",
  "titulo": "Teste de alteração de API",//Alterando esse campo
  "resposta": "Isso e um teste",
  "su_status": "N",
  "id_evento_status_processo": "",
  "interacao_pendente": "A"
}
```

#### `DELETE` Respostas (deletar)
```
DELETE /webservice/v1/su_oss_respostas/4
```

#### `GET` Equipe (listar)
```
GET /webservice/v1/su_equipe
```

**Body:**
```json
{
"qtype": "su_equipe.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "su_equipe.id",
"sortorder": "desc"
}
```

#### `POST` Equipe (inserir)
```
POST /webservice/v1/su_equipe
```

**Body:**
```json
{
  "descricao": "Equipe API"
}
```

#### `PUT` Equipe (editar)
```
PUT /webservice/v1/su_equipe/5
```

**Body:**
```json
{
  "descricao": "Equipe de Testes API"//Alterando esse campo
}
```

#### `DELETE` Equipe (deletar)
```
DELETE /webservice/v1/su_equipe/5
```

#### `GET` Colaboradores (listar)
```
GET /webservice/v1/funcionarios_equipes
```

**Body:**
```json
{
"qtype": "funcionarios_equipes.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "funcionarios_equipes.id",
"sortorder": "desc"
}
```

#### `POST` Colaboradores (inserir)
```
POST /webservice/v1/funcionarios_equipes
```

**Body:**
```json
{//Todos os campos são obrigatórios
    "id_equipe":"3",
    "id_funcionario":"2",
    "percentual_comissao":"1.0"
}
```

#### `PUT` Colaboradores (editar)
```
PUT /webservice/v1/funcionarios_equipes/9
```

**Body:**
```json
{
    "id_equipe":"3",
    "id_funcionario":"2",
    "percentual_comissao":"1.5"//Alterando esse campo
}
```

#### `DELETE` Colaboradores (deletar)
```
DELETE /webservice/v1/funcionarios_equipes/9
```

#### `GET` Assunto (listar)
```
GET /webservice/v1/su_oss_assunto
```

**Body:**
```json
{
"qtype": "su_oss_assunto.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "su_oss_assunto.id",
"sortorder": "desc"
}
```

#### `POST` Assunto (inserir)
```
POST /webservice/v1/su_oss_assunto
```

**Body:**
```json
{
  "assunto": "Teste API Assunto",//Obrigatório
  "finalidade": "",
  "mostra_hotsite": "",
  "tipo": "",
  "endereco_padrao": "",
  "integracao_assinatura_digital": "",
  "id_resposta_padrao": "",
  "id_resposta_padrao_finalizacao": "",
  "ativo": "S",//Obrigatório
  "cor_marcador": "",
  "msg_regiao_manutencao": "",
  "ultima_atualizacao": "",
  "id_vendedor_faturamento": "",
  "obrigar_processo_atendimento": "",
  "id_processo": "",
  "login_obrigatorio": "",
  "layout_impressao": "1",//Obrigatório
  "imprimir_prod_serv": "",
  "numero_de_vias": "1",//Obrigatório
  "su_oss_modelo_impressao": "",
  "modelo_email": "",
  "permite_abrir_cliente_atraso": "",
  "setor_su_oss_chamado": "",
  "descricao": "",
  "mostrar_no_service": "",
  "exige_fotos_finalizacao_os": "",
  "quantidade_fotos_finalizacao_os": "",
  "exige_comodato_finalizar_os": "N",//Obrigatório
  "quantidade_equipamentos": "",//Obrigatório somente se exige_comodato_finalizar_os for S
  "exige_produto_finalizar_os": "N",//Obrigatório
  "quantidade_produtos": "",//Obrigatório somente se exige_produto_finalizar_os for S
  "diagnostico_obrigatorio_finalizacao_os": "",
  "localizacao_obrigatoria_cliente_finalizacao_os": "",
  "contrato_obrigatorio": "",
  "localizacao_obrigatoria_login_finalizacao_os": "",
  "id_tipo_doc_comodato": "",
  "id_tipo_doc_pedido": "",
  "id_cond_pag_produto": "",
  "id_tipo_doc_servico": "",
  "id_cond_pag_servico": "",
  "id_tipo_doc_patrimonio_venda": "",
  "id_cond_pag_patrimonio_venda": "",
  "tipo_cobranca": "",
  "fat_somente_finalizada": "",
  "id_oss_kit": "",
  "tipo_comissao": "F",//Obrigatório
  "valor_comissao": "",
  "equipe_obrigatoria_finalizacao_os": "",
  "horario_tempo_assunto": "",
  "formato_endereco": "",
  "card_data_reservada": "",
  "validar_choque_horarios_agendamento_os": "",
  "sla_apenas_dias_uteis": "",
  "meta_horas_abertura": "",
  "meta_horas_agendamento": "",
  "considerar_sla": "AB",//Obrigatório
  "metas_horas_abertura_ticket": "72",//Obrigatório
  "wiz_comodato": "",
  "wiz_produtos": "",
  "wiz_mensalidade": "",
  "wiz_autorizar_ONU": "",
  "wiz_localizacao": "",
  "wiz_arquivos": "",
  "wiz_resumo_os": "",
  "wiz_servico": "",
  "wiz_assinatura_obrig": "",
  "id_checklist": "",
  "service_mobile_max_parc_adic_serv": "",
  "wiz_service_mobile_adicionais": "",
  "wiz_service_mobile_onu": "",
  "wiz_service_mobile_config_dispositivo": "",
  "wiz_service_mobile_loc": "",
  "wiz_service_mobile_anexos": "",
  "wiz_service_mobile_checklist": "",
  "wiz_service_mobile_enviar_sms_deslocamento": "",
  "id_sms_deslocamento": "",
  "id_msg_omnichannel_deslocamento": ""
}
```

#### `PUT` Assunto (editar)
```
PUT /webservice/v1/su_oss_assunto/57
```

**Body:**
```json
{
  "assunto": "Alteração de API Assunto",//Alterando esse campo
  "finalidade": "",
  "mostra_hotsite": "",
  "tipo": "",
  "endereco_padrao": "",
  "integracao_assinatura_digital": "",
  "id_resposta_padrao": "",
  "id_resposta_padrao_finalizacao": "",
  "ativo": "S",
  "cor_marcador": "",
  "msg_regiao_manutencao": "",
  "ultima_atualizacao": "",
  "id_vendedor_faturamento": "",
  "obrigar_processo_atendimento": "",
  "id_processo": "",
  "login_obrigatorio": "",
  "layout_impressao": "1",
  "imprimir_prod_serv": "",
  "numero_de_vias": "1",
  "su_oss_modelo_impressao": "",
  "modelo_email": "",
  "permite_abrir_cliente_atraso": "",
  "setor_su_oss_chamado": "",
  "descricao": "",
  "mostrar_no_service": "",
  "exige_fotos_finalizacao_os": "",
  "quantidade_fotos_finalizacao_os": "",
  "exige_comodato_finalizar_os": "N",
  "quantidade_equipamentos": "",
  "exige_produto_finalizar_os": "N",
  "quantidade_produtos": "",
  "diagnostico_obrigatorio_finalizacao_os": "",
  "localizacao_obrigatoria_cliente_finalizacao_os": "",
  "contrato_obrigatorio": "",
  "localizacao_obrigatoria_login_finalizacao_os": "",
  "id_tipo_doc_comodato": "",
  "id_tipo_doc_pedido": "",
  "id_cond_pag_produto": "",
  "id_tipo_doc_servico": "",
  "id_cond_pag_servico": "",
  "id_tipo_doc_patrimonio_venda": "",
  "id_cond_pag_patrimonio_venda": "",
  "tipo_cobranca": "",
  "fat_somente_finalizada": "",
  "id_oss_kit": "",
  "tipo_comissao": "F",
  "valor_comissao": "",
  "equipe_obrigatoria_finalizacao_os": "",
  "horario_tempo_assunto": "",
  "formato_endereco": "",
  "card_data_reservada": "",
  "validar_choque_horarios_agendamento_os": "",
  "sla_apenas_dias_uteis": "",
  "meta_horas_abertura": "",
  "meta_horas_agendamento": "",
  "considerar_sla": "AB",
  "metas_horas_abertura_ticket": "72",
  "wiz_comodato": "",
  "wiz_produtos": "",
  "wiz_mensalidade": "",
  "wiz_autorizar_ONU": "",
  "wiz_localizacao": "",
  "wiz_arquivos": "",
  "wiz_resumo_os": "",
  "wiz_servico": "",
  "wiz_assinatura_obrig": "",
  "id_checklist": "",
  "service_mobile_max_parc_adic_serv": "",
  "wiz_service_mobile_adicionais": "",
  "wiz_service_mobile_onu": "",
  "wiz_service_mobile_config_dispositivo": "",
  "wiz_service_mobile_loc": "",
  "wiz_service_mobile_anexos": "",
  "wiz_service_mobile_checklist": "",
  "wiz_service_mobile_enviar_sms_deslocamento": "",
  "id_sms_deslocamento": "",
  "id_msg_omnichannel_deslocamento": ""
}
```

#### `DELETE` Assunto (deletar)
```
DELETE /webservice/v1/su_oss_assunto/57
```

#### `GET` Eventos (listar)
```
GET /webservice/v1/su_oss_evento
```

**Body:**
```json
{
"qtype": "su_oss_evento.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "su_oss_evento.id",
"sortorder": "desc"
}
```

#### `POST` Eventos (inserir)
```
POST /webservice/v1/su_oss_evento
```

**Body:**
```json
{
  "descricao": "Teste de API"
}
```

#### `PUT` Eventos (editar)
```
PUT /webservice/v1/su_oss_evento/10
```

**Body:**
```json
{
  "descricao": "Teste de alteração API"
}
```

#### `DELETE` Eventos (deletar)
```
DELETE /webservice/v1/su_oss_evento/10
```

## Usuários

### Usuário

#### `GET` Usuários (listar)
```
GET /webservice/v1/usuarios
```

**Body:**
```json
{
    "qtype": "usuarios.id",
    "query": "1",
    "oper": ">=",
    "page": "1",
    "rp": "1000",
    "sortname": "usuarios.id",
    "sortorder": "desc"
}
```

#### `POST` Usuários (inserir)
```
POST /webservice/v1/usuarios
```

**Body:**
```json
{
  "id_grupo": "2",//Obrigatório
  "tipo_alcada": "",
  "nome": "Teste API",//Obrigatório
  "email": "teste234@teste",//Obrigatório
  "senha": "Mudar@123",//Obrigatório
  "status":"A",//Obrigatório
  "permite_acesso_ixc_mobile":"",
  "template":"",
  "imagem":"",
  "acesso_webservice":"",
  "acesso_token":"",
  "user_callcenter":"",
  "callcenter":"",
  "alter_passwd_date":"",
  "language":"Pt-Br",//Obrigatório
  "caixa_fn_receber":"",
  "id_caixa":"",
  "vendedor_padrao":"",
  "recebimentos_dia_atual":"S",//Obrigatório
  "pagamentos_dia_atual":"S",//Obrigatório
  "lancamentos_dia_atual":"S",//Obrigatório
  "filtrar_plano_venda_filial_contrato":"",
  "desc_max_recebimento":"",
  "desc_max_renegociacao":"",
  "funcionario":"",
  "filtra_departamento_ticket":"",
  "filtra_funcionario_ticket":"",
  "mostrar_ticket_sem_funcionario":"",
  "filtra_setor":"",
  "filtra_funcionario":"",
  "mostrar_os_sem_funcionario":"",
  "administrador_kanban":"",
  "crm_filtra_vendedor":"",
  "inmap_filtra_vendedor":"",
  "enviar_monitoramento_host":"",
  "enviar_notificacao_backup":"",
  "permite_inutilizar_patrimonio":"",
  "permite_ver_diferenca":""
}
```

#### `PUT` Usuários (editar)
```
PUT /webservice/v1/usuarios/419
```

**Body:**
```json
{
  "id_grupo": "2",
  "tipo_alcada": "",
  "nome": "Teste de alteração API",//Alterando esse campo
  "email": "teste234@teste",
  "senha": "Mudar@123",
  "status":"A",
  "permite_acesso_ixc_mobile":"",
  "template":"",
  "imagem":"",
  "acesso_webservice":"",
  "acesso_token":"",
  "user_callcenter":"",
  "callcenter":"",
  "alter_passwd_date":"",
  "language":"Pt-Br",
  "caixa_fn_receber":"",
  "id_caixa":"",
  "vendedor_padrao":"",
  "recebimentos_dia_atual":"S",
  "pagamentos_dia_atual":"S",
  "lancamentos_dia_atual":"S",
  "filtrar_plano_venda_filial_contrato":"",
  "desc_max_recebimento":"",
  "desc_max_renegociacao":"",
  "funcionario":"",
  "filtra_departamento_ticket":"",
  "filtra_funcionario_ticket":"",
  "mostrar_ticket_sem_funcionario":"",
  "filtra_setor":"",
  "filtra_funcionario":"",
  "mostrar_os_sem_funcionario":"",
  "administrador_kanban":"",
  "crm_filtra_vendedor":"",
  "inmap_filtra_vendedor":"",
  "enviar_monitoramento_host":"",
  "enviar_notificacao_backup":"",
  "permite_inutilizar_patrimonio":"",
  "permite_ver_diferenca":""
}
```

### Filiais do Usuário

#### `GET` Filiais (listar)
```
GET /webservice/v1/filial_usuario
```

**Body:**
```json
{
    "qtype": "filial_usuario.usuario_id",
    "query": "41",
    "oper": "=",
    "page": "1",
    "rp": "1000",
    "sortname": "filial_usuario.id",
    "sortorder": "desc"
}
```

#### `POST` Filiais (inserir)
```
POST /webservice/v1/filial_usuario
```

**Body:**
```json
{
    "filial_id": "1",
    "usuario_id": "41",
    "filial_padrao": "S",
    "ativo": "S"
}
```

#### `PUT` Filiais (editar)
```
PUT /webservice/v1/filial_usuario/11
```

**Body:**
```json
{
    "filial_id": "1",
    "usuario_id": "41",
    "filial_padrao": "",//Editando esse campo
    "ativo": "S"
}
```

#### `DELETE` Filiais (deletar)
```
DELETE /webservice/v1/filial_usuario/11
```

### Almoxarifados do Usuário

#### `GET` Almoxarifados (listar)
```
GET /webservice/v1/almox_usuario
```

**Body:**
```json
{
    "qtype": "almox_usuario.id_usuario",
    "query": "41",
    "oper": "=",
    "page": "1",
    "rp": "1000",
    "sortname": "almox_usuario.id",
    "sortorder": "desc"
}
```

#### `POST` Almoxarifados (inserir)
```
POST /webservice/v1/almox_usuario
```

**Body:**
```json
{
    "id_usuario": "41",
    "id_almox": "4",
    "padrao_usuario": "N"
}
```

#### `PUT` Almoxarifados (editar)
```
PUT /webservice/v1/almox_usuario/11
```

**Body:**
```json
{
    "id_usuario": "41",
    "id_almox": "4",
    "padrao_usuario": "S"//Editando esse campo
}
```

#### `DELETE` Almoxarifados (deletar)
```
DELETE /webservice/v1/almox_usuario/11
```

## 📐 Grid Param

### Operadores

#### `GET` Igual (=)
```
GET /webservice/v1/cliente
```

**Body:**
```json
// Clientes ativos por CPF
{
    "qtype": "cliente.ativo",
    "query": "S",//S=Sim
    "oper": "=",
    "page": "1",
    "rp": "1000",
    "sortname": "cliente.id",
    "sortorder": "desc",
    "grid_param":"[{\"TB\":\"cliente.cnpj_cpf\", \"OP\" : \"=\", \"P\" : \"627.105.245-20\"}]"
}
```

#### `GET` Diferente (!=)
```
GET /webservice/v1/vd_contratos_produtos
```

**Body:**
```json
// Listar os contratos que não tem o produto ID 36
{
    "qtype": "vd_contratos_produtos.id_contrato",
    "query": "0",
    "oper": "!=",
    "page": "1",
    "rp": "1000",
    "sortname": "vd_contratos_produtos.id",
    "sortorder": "desc",
    "grid_param":"[{\"TB\":\"vd_contratos_produtos.id_produto\", \"OP\" : \"!=\", \"P\" : \"36\"}]"
}
```

#### `GET` Maior (>)
```
GET /webservice/v1/cliente
```

**Body:**
```json
// Listar os clientes ativos e cadastrados depois de 31/12/2023
{
    "qtype": "cliente.ativo",
    "query": "S",
    "oper": "=",
    "page": "1",
    "rp": "1000",
    "sortname": "cliente.id",
    "sortorder": "desc",
    "grid_param":"[{\"TB\":\"cliente.data_cadastro\", \"OP\" : \">\", \"P\" : \"31/12/2023\"}]"
}
```

#### `GET` Menor (>)
```
GET /webservice/v1/cliente
```

**Body:**
```json
// Listar listar os clientes ativos e cadastrados antes de 01/01/2025
{
    "qtype": "cliente.ativo",
    "query": "S",
    "oper": "=",
    "page": "1",
    "rp": "1000",
    "sortname": "cliente.id",
    "sortorder": "desc",
    "grid_param":"[{\"TB\":\"cliente.data_cadastro\", \"OP\" : \"<\", \"P\" : \"01/01/2025\"}]"
}
```

#### `GET` Maior e Menor (>,<)
```
GET /webservice/v1/cliente
```

**Body:**
```json
// Listar os clientes ativos e cadastrados após 31/12/2023 e antes de 01/01/2025
{
    "qtype": "cliente.ativo",
    "query": "S",
    "oper": "=",
    "page": "1",
    "rp": "1000",
    "sortname": "cliente.id",
    "sortorder": "desc",
    "grid_param":"[{\"TB\":\"cliente.data_cadastro\", \"OP\" : \">\", \"P\" : \"31/12/2023\"},{\"TB\":\"cliente.data_cadastro\", \"OP\" : \"<\", \"P\" : \"01/01/2025\"}]"
}
```

#### `GET` Maior ou igual (>=)
```
GET /webservice/v1/fn_areceber
```

**Body:**
```json
// Listar os boletos abertos e com vencimento superior a 01/01/2024
{
    "qtype": "fn_areceber.status",
    "query": "A",
    "oper": "=",
    "page": "1",
    "rp": "1000",
    "sortname": "fn_areceber.id",
    "sortorder": "desc",
    "grid_param":"[{\"TB\":\"fn_areceber.data_vencimento\", \"OP\" : \">=\", \"P\" : \"01/01/2024\"}]"
}
```

#### `GET` Menor ou igual (<=)
```
GET /webservice/v1/fn_areceber
```

**Body:**
```json
// Listar os boletos abertos com vencimento anterior a 31/12/2024
{
    "qtype": "fn_areceber.status",
    "query": "A",
    "oper": "=",
    "page": "1",
    "rp": "1000",
    "sortname": "fn_areceber.id",
    "sortorder": "desc",
    "grid_param":"[{\"TB\":\"fn_areceber.data_vencimento\", \"OP\" : \">=\", \"P\" : \"01/01/2024\"}]"
}
```

#### `GET` Maior ou igual e menor ou igual (>=,<=)
```
GET /webservice/v1/fn_areceber
```

**Body:**
```json
// Listar os boletos abertos que tem o vencimento entre as datas de 01/01/2024 e 31/12/2024.
{
    "qtype": "fn_areceber.status",
    "query": "A",
    "oper": "=",
    "page": "1",
    "rp": "1000",
    "sortname": "fn_areceber.id",
    "sortorder": "desc",
    "grid_param":"[{\"TB\":\"fn_areceber.data_vencimento\", \"OP\" : \">=\", \"P\" : \"01/01/2024\"},{\"TB\":\"fn_areceber.data_vencimento\", \"OP\" : \"<=\", \"P\" : \"31/12/2024\"}]"
}
```

#### `GET` Contém (L)
```
GET /webservice/v1/vd_contratos
```

**Body:**
```json
// Listar os planos de venda ativos que tem o nome 01_Mega
{
    "qtype": "vd_contratos.Ativo",
    "query": "S",
    "oper": "=",
    "page": "1",
    "rp": "1000",
    "sortname": "vd_contratos.id",
    "sortorder": "desc",
    "grid_param": "[{\"TB\":\"vd_contratos.nome\", \"OP\" : \"L\", \"P\" : \"01_Mega\"}]"
}
```

#### `GET` Não Contém (NL)
```
GET /webservice/v1/vd_contratos
```

**Body:**
```json
// Listar os planos de venda ativos que não tem o nome 15_Megas.
{
    "qtype": "vd_contratos.Ativo",
    "query": "S",
    "oper": "=",
    "page": "1",
    "rp": "1000",
    "sortname": "vd_contratos.id",
    "sortorder": "desc",
    "grid_param": "[{\"TB\":\"vd_contratos.nome\", \"OP\" : \"NL\", \"P\" : \"15_Megas\"}]"
}
```

#### `GET` Contido (IN)
```
GET /webservice/v1/su_oss_chamado
```

**Body:**
```json
// Listar apenas as Ordens de Serviço abertas, com status Finalizado e que tenha os ids de assuntos 1,3 e 5.
{
    "qtype": "su_oss_chamado.status",
    "query": "A",
    "oper": "=",
    "page": "1",
    "rp": "1000",
    "sortname": "su_oss_chamado.id",
    "sortorder": "desc",
    "grid_param": "[{\"TB\":\"su_oss_chamado.id_assunto\", \"OP\" : \"IN\", \"P\" : \"1,3,5\"}]"
}
```

#### `GET` Não está Contido (NI)
```
GET /webservice/v1/cliente_contrato
```

**Body:**
```json
// Listar os contratos, que foram cancelados, mas que não utilizaram os motivos de cancelamento ID 3 e 1
{
    "qtype": "cliente_contrato.status",
    "query": "I",
    "oper": "=",
    "page": "1",
    "rp": "1000",
    "sortname": "cliente_contrato.id",
    "sortorder": "desc",
    "grid_param": "[{\"TB\":\"cliente_contrato.motivo_cancelamento\", \"OP\" : \"NI\", \"P\" : \"3,1\"}]"
}
```

#### `GET` Entre (BE)
```
GET /webservice/v1/radacct
```

**Body:**
```json
// Listar as conexões iniciais radius entre 18/12/2023 00:00:00 ás 18/12/2023 23:59:59
{
    "qtype" : "radacct.radacctid",
    "query" : "1",
    "oper" : ">=",
    "page" : "1",
    "rp" : "1000",
    "sortname" : "radacct.radacctid",
    "sortorder" : "asc",
    "grid_param": "[{\"TB\":\"radacct.acctstarttime\", \"OP\" : \"BE\", \"P\" : \"2023-12-18 00:00:00\", \"P2\" : \"2023-12-18 23:59:59\"}]"
}
```

#### `GET` Não está Entre (NBE)
```
GET /webservice/v1/fn_areceber
```

**Body:**
```json
// Listar somente os boletos que não estejam entre Junho e Julho de 2023
{
    "qtype": "fn_areceber.id",
    "query": "1",
    "oper": ">=",
    "page": "1",
    "rp": "1000",
    "sortname": "fn_areceber.data_vencimento",
    "sortorder": "asc",
    "grid_param": "[{\"TB\":\"fn_areceber.data_vencimento\", \"OP\" : \"NBE\", \"P\" : \"01/06/2023\", \"P2\" : \"31/07/2023\"}]"
}
```

### Exemplos Comuns

#### `GET` Clientes ativos
```
GET /webservice/v1/cliente
```

**Body:**
```json
{
    "qtype": "cliente.id",
    "query": "",
    "oper": "=",
    "page": "1",
    "rp": "1000",
    "sortname": "cliente.id",
    "sortorder": "desc",
    "grid_param":"[{\"TB\":\"cliente.ativo\", \"OP\" : \"=\", \"P\" : \"S\"}]"
}
```

#### `GET` Clientes ativos por CPF/CNPJ
```
GET /webservice/v1/cliente
```

**Body:**
```json
{
    "qtype": "cliente.ativo",
    "query": "S",
    "oper": "=",
    "page": "1",
    "rp": "1000",
    "sortname": "cliente.id",
    "sortorder": "desc",
    "grid_param":"[{\"TB\":\"cliente.cnpj_cpf\", \"OP\" : \"=\", \"P\" : \"627.105.245-20\"}]"
}
```

#### `GET` Clientes cadastrados no mês
```
GET /webservice/v1/cliente
```

**Body:**
```json
{
    "qtype": "cliente.id",
    "query": "",
    "oper": "=",
    "page": "1",
    "rp": "1000",
    "sortname": "cliente.id",
    "sortorder": "desc",
    "grid_param":"[{\"TB\":\"cliente.data_cadastro\", \"OP\" : \"BE\", \"P\" : \"01/04/2016\", \"P2\" : \"30/04/2016\"}]"
}
```

#### `GET` Contratos ativados no mês
```
GET /webservice/v1/cliente_contrato
```

**Body:**
```json
{
    "qtype": "cliente_contrato.id",
    "query": "1",
    "oper": ">=",
    "page": "1",
    "rp": "1000",
    "sortname": "cliente_contrato.id",
    "sortorder": "desc",
    "grid_param": "[{\"TB\":\"cliente_contrato.data_ativacao\", \"OP\" : \"BE\", \"P\" : \"01/07/2023\", \"P2\" : \"31/07/2023\"}]"
}
```

#### `GET` Contratos ativados no mês por vendedor
```
GET /webservice/v1/cliente_contrato
```

**Body:**
```json
{
    "qtype": "cliente_contrato.id_vendedor",
    "query": "5",
    "oper": "=",
    "page": "1",
    "rp": "1000",
    "sortname": "cliente_contrato.id",
    "sortorder": "desc",
    "grid_param": "[{\"TB\":\"cliente_contrato.data_ativacao\", \"OP\" : \"BE\", \"P\" : \"01/07/2023\", \"P2\" : \"31/07/2023\"}]"
}
```

#### `GET` Contratos bloqueados
```
GET /webservice/v1/cliente_contrato
```

**Body:**
```json
{
    "qtype": "cliente_contrato.id",
    "query": "1",
    "oper": ">=",
    "page": "1",
    "rp": "1000",
    "sortname": "cliente_contrato.id",
    "sortorder": "desc",
    "grid_param": "[{\"TB\":\"cliente_contrato.status_internet\", \"OP\" : \"L\", \"P\" : \"CA\", \"P2\" : \"CM\"}]"
}
```

#### `GET` Contratos perdidos
```
GET /webservice/v1/cliente_contrato
```

**Body:**
```json
{
    "qtype": "cliente_contrato.id",
    "query": "1",
    "oper": ">=",
    "page": "1",
    "rp": "1000",
    "sortname": "cliente_contrato.id",
    "sortorder": "desc",
    "grid_param": "[{\"TB\":\"cliente_contrato.status\", \"OP\" : \"L\", \"P\" : \"D\", \"P2\" : \"I\"}]"
}
```

#### `GET` Contratos em bloqueio automatico
```
GET /webservice/v1/cliente_contrato
```

**Body:**
```json
{
    "qtype": "cliente_contrato.id",
    "query": "1",
    "oper": ">=",
    "page": "1",
    "rp": "1000",
    "sortname": "cliente_contrato.id",
    "sortorder": "desc",
    "grid_param": "[{\"TB\":\"cliente_contrato.status_internet\", \"OP\" : \"IN\", \"P\" : \"CA\"}]"
}
```

#### `GET` Produtos com estoque
```
GET /webservice/v1/produtos
```

**Body:**
```json
{
  "qtype": "produtos.saldo",
  "query": "1",
  "oper": ">=",
  "page":"1",
  "rp": "20",
  "sortname": "produtos.id",
  "sortorder": "asc"
}
```

#### `GET` Produtos vinc. plano
```
GET /webservice/v1/vd_contratos_produtos
```

**Body:**
```json
{
  "qtype" : "vd_contratos_produtos.id_vd_contrato",
  "query" : "210",//ID do Plano de Venda que vem do contrato
  "oper" : "=",
  "page" : "1",
  "rp" : "20"
}
```

**Response — Exemplo:**
```json
{
    "page": "1",
    "total": "2",
    "registros": [
        {
            "descricao_plano_valor_1": "0.00",
            "descricao_plano_valor_2": "0.00",
            "fixar_ip": "0",
            "tipo_desconto": "V",
            "desconto_percentual": "0.00",
            "repetir": "V",
            "id": "1316",
            "tipo": "I",
            "id_plano": "108",
            "id_vd_contrato": "210",
            "id_produto": "0",
            "qtde": "1",
            "valor_unit": "69.900000000",
            "descricao": "",
            "id_contrato": "0",
            "obs": "",
            "valor_ate_vencimento": "0.00",
            "qtde_repeticoes_desconto_produto": "0",
            "valor_desconto_produto": "0.00",
            "ultima_atualizacao": "0000-00-00 00:00:00",
            "id_tipo_documento": "0"
        },
        {
            "descricao_plano_valor_1": "0.00",
            "descricao_plano_valor_2": "0.00",
            "fixar_ip": "0",
            "tipo_desconto": "V",
            "desconto_percentual": "0.00",
            "repetir": "V",
            "id": "666",
            "tipo": "I",
            "id_plano": "116",
            "id_vd_contrato": "210",
            "id_produto": "0",
            "qtde": "1",
            "valor_unit": "120.000000000",
            "descricao": "",
            "id_contrato": "0",
            "obs": "",
            "valor_ate_vencimento": "110.00",
            "qtde_repeticoes_desconto_produto": "0",
            "valor_desconto_produto": "0.00",
            "ultima_atualizacao": "2024-01-19 17:57:19",
            "id_tipo_documento": "603"
        }
    ]
}
```

#### `GET` Produtos vinc. contrato
```
GET /webservice/v1/vd_contratos_produtos
```

**Body:**
```json
{
  "qtype" : "vd_contratos_produtos.id_contrato",
  "query" : "4409",//ID do Contrato
  "oper" : "=",
  "page" : "1",
  "rp" : "20"
}
```

**Response — Exemplo:**
```json
{
    "page": "1",
    "total": "1",
    "registros": [
        {
            "descricao_plano_valor_1": "",
            "descricao_plano_valor_2": "",
            "fixar_ip": "0",
            "tipo_desconto": "V",
            "desconto_percentual": "",
            "repetir": "V",
            "id": "1367",
            "tipo": "I",
            "id_plano": "44",
            "id_vd_contrato": "0",
            "id_produto": "0",
            "qtde": "1",
            "valor_unit": "139.900000000",
            "descricao": "",
            "id_contrato": "4409",
            "obs": "",
            "valor_ate_vencimento": "0.00",
            "qtde_repeticoes_desconto_produto": "",
            "valor_desconto_produto": "",
            "ultima_atualizacao": "2024-06-24 16:42:41",
            "id_tipo_documento": "0"
        }
    ]
}
```

#### `GET` Produtos do contrato
```
GET /webservice/v1/view_vd_contratos_produtos_gen
```

**Body:**
```json
{
	"qtype": "view_vd_contratos_produtos_gen.cliente_contrato_id",
	"query": "2233",//ID do Contrato
	"oper": "=",
	"page": "1",
	"rp": "17",
	"sortname": "view_vd_contratos_produtos_gen.id",
	"sortorder": "desc"
}
```

**Response — Exemplo:**
```json
{
    "page": "1",
    "total": "3",
    "rows": [
        {
            "id": "30",
            "cell": [
                "30",
                "Locação ONU",
                "",
                "Cabo RJ45 Azul",
                "1",
                "20,00",
                "20,00",
                "",
                "",
                "20,00",
                "20,00",
                "Plano",
                "2233",
                "",
                "0"
            ]
        },
        {
            "id": "29",
            "cell": [
                "29",
                "Fibra__300_Megas (SVA)",
                "",
                "Roteador 2023",
                "1",
                "39,00",
                "39,00",
                "",
                "",
                "39,00",
                "39,00",
                "Plano",
                "2233",
                "",
                "0"
            ]
        },
        {
            "id": "13",
            "cell": [
                "13",
                "Fibra__300_Megas (SCM)",
                "150_MEGA_FIBRA",
                "",
                "1",
                "91,00",
                "91,00",
                "",
                "",
                "91,00",
                "91,00",
                "Plano",
                "2233",
                "",
                "0"
            ]
        }
    ],
    "tot": [
        "150,00",
        false,
        false,
        "150,00"
    ]
}
```

#### `GET` Vendas finalizadas por vendedor
```
GET /webservice/v1/vd_saida
```

**Body:**
```json
{
  "qtype": "vd_saida.id_comissionado",
  "query": "12",
  "oper": "=",
  "page":"1",
  "rp": "20",
  "sortname": "vd_saida.id",
  "sortorder": "asc",
  "grid_param": "[{\"TB\":\"vd_saida.status\", \"OP\" : \"=\", \"P\" : \"F\"}]"
}
```

#### `GET` Vendas com NF
```
GET /webservice/v1/vd_saida
```

**Body:**
```json
{
  "qtype": "vd_saida.id",
  "query": "",
  "oper": "=",
  "page":"1",
  "rp": "20",
  "sortname": "vd_saida.id",
  "sortorder": "asc",
  "grid_param": "[{\"TB\":\"vd_saida.modelo_nf\", \"OP\" : \"IN\", \"P\" : \"22,21,55,13\"}]"
}
```

#### `GET` Vendas com NF 21/22
```
GET /webservice/v1/vd_saida
```

**Body:**
```json
{
  "qtype": "vd_saida.id",
  "query": "",
  "oper": "=",
  "page":"1",
  "rp": "20",
  "sortname": "vd_saida.id",
  "sortorder": "asc",
  "grid_param": "[{\"TB\":\"vd_saida.modelo_nf\", \"OP\" : \"IN\", \"P\" : \"22,21\"}]"
}
```

#### `GET` Vendas com NF 13
```
GET /webservice/v1/vd_saida
```

**Body:**
```json
{
  "qtype": "vd_saida.id",
  "query": "",
  "oper": "=",
  "page":"1",
  "rp": "20",
  "sortname": "vd_saida.id",
  "sortorder": "asc",
  "grid_param": "[{\"TB\":\"vd_saida.modelo_nf\", \"OP\" : \"=\", \"P\" : \"13\"}]"
}
```

#### `GET` Vendas com NF 55
```
GET /webservice/v1/vd_saida
```

**Body:**
```json
{
  "qtype": "vd_saida.id",
  "query": "",
  "oper": "=",
  "page":"1",
  "rp": "20",
  "sortname": "vd_saida.id",
  "sortorder": "asc",
  "grid_param": "[{\"TB\":\"vd_saida.modelo_nf\", \"OP\" : \"=\", \"P\" : \"55\"}]"
}
```

#### `GET` Vendas finalizadas por mês
```
GET /webservice/v1/vd_saida
```

**Body:**
```json
{
  "qtype": "vd_saida.id",
  "query": "",
  "oper": "=",
  "page":"1",
  "rp": "20",
  "sortname": "vd_saida.id",
  "sortorder": "asc",
  "grid_param": "[{\"TB\":\"vd_saida.status\", \"OP\" : \"=\", \"P\" : \"F\"},{\"TB\":\"vd_saida.data_saida\", \"OP\" : \"BE\", \"P\" : \"01/08/2023\", \"P2\" : \"30/08/2023\"}]"
}
```

#### `GET` Faturas abertas
```
GET /webservice/v1/fn_areceber
```

**Body:**
```json
{
  "qtype": "fn_areceber.id",
  "query": "",
  "oper": "=",
  "page":"1",
  "rp": "20",
  "sortname": "fn_areceber.data_vencimento",
  "sortorder": "asc",
  "grid_param": "[{\"TB\":\"fn_areceber.liberado\", \"OP\" : \"=\", \"P\" : \"S\"},{\"TB\":\"fn_areceber.status\", \"OP\" : \"L\", \"P\" : \"P\", \"P2\" : \"A\"}]"
}
```

#### `GET` Faturas abertas por venc.
```
GET /webservice/v1/fn_areceber
```

**Body:**
```json
{
  "qtype": "fn_areceber.id",
  "query": "",
  "oper": "=",
  "page":"1",
  "rp": "20",
  "sortname": "fn_areceber.data_vencimento",
  "sortorder": "asc",
  "grid_param": "[{\"TB\":\"fn_areceber.liberado\", \"OP\" : \"=\", \"P\" : \"S\"},{\"TB\":\"fn_areceber.status\", \"OP\" : \"L\", \"P\" : \"P\", \"P2\" : \"A\"},{\"TB\":\"fn_areceber.data_vencimento\", \"OP\" : \"BE\", \"P\" : \"01/01/2020\", \"P2\" : \"31/12/2020\"}]"
}
```

#### `GET` Faturas abertas por contrato
```
GET /webservice/v1/fn_areceber
```

**Body:**
```json
{
  "qtype": "fn_areceber.id_contrato",
  "query": "11",//ID do Contrato
  "oper": "=",
  "page":"1",
  "rp": "20",
  "sortname": "fn_areceber.data_vencimento",
  "sortorder": "asc",
  "grid_param": "[{\"TB\":\"fn_areceber.liberado\", \"OP\" : \"=\", \"P\" : \"S\"},{\"TB\":\"fn_areceber.status\", \"OP\" : \"L\", \"P\" : \"P\", \"P2\" : \"A\"},{\"TB\":\"fn_areceber.data_vencimento\", \"OP\" : \"BE\", \"P\" : \"01/01/2020\", \"P2\" : \"31/12/2020\"}]"
}
```

#### `GET` Faturas abertas por cliente
```
GET /webservice/v1/fn_areceber
```

**Body:**
```json
{
  "qtype": "fn_areceber.id_cliente",
  "query": "11",//ID do Cliente
  "oper": "=",
  "page":"1",
  "rp": "20",
  "sortname": "fn_areceber.data_vencimento",
  "sortorder": "asc",
  "grid_param": "[{\"TB\":\"fn_areceber.liberado\", \"OP\" : \"=\", \"P\" : \"S\"},{\"TB\":\"fn_areceber.status\", \"OP\" : \"L\", \"P\" : \"P\", \"P2\" : \"A\"},{\"TB\":\"fn_areceber.data_vencimento\", \"OP\" : \"BE\", \"P\" : \"01/01/2020\", \"P2\" : \"31/12/2020\"}]"
}
```

#### `GET` Faturas ocultas
```
GET /webservice/v1/fn_areceber
```

**Body:**
```json
{
  "qtype": "fn_areceber.id",
  "query": "",
  "oper": "=",
  "page":"1",
  "rp": "20",
  "sortname": "fn_areceber.data_vencimento",
  "sortorder": "asc",
  "grid_param": "[{\"TB\":\"fn_areceber.liberado\", \"OP\" : \"=\", \"P\" : \"N\"}]"
}
```

#### `GET` Atendimentos abertos
```
GET /webservice/v1/su_ticket
```

**Body:**
```json
{
    "qtype": "su_ticket.id",
    "query": "",
    "oper": "=",
    "rp": "200000",
    "sortname": "su_ticket.id",
    "sortorder": "asc",
    "grid_param": "[{\"TB\":\"su_ticket.su_status\", \"OP\" : \"=\", \"P\" : \"N\"}]"
}
```

#### `GET` Atendimentos abertos por cliente
```
GET /webservice/v1/su_ticket
```

**Body:**
```json
{
    "qtype": "su_ticket.id_cliente",
    "query": "1866",
    "oper": "=",
    "rp": "200000",
    "sortname": "su_ticket.id",
    "sortorder": "asc",
    "grid_param": "[{\"TB\":\"su_ticket.su_status\", \"OP\" : \"=\", \"P\" : \"N\"}]"
}
```

#### `GET` Atendimentos abertos por assunto
```
GET /webservice/v1/su_ticket
```

**Body:**
```json
{
    "qtype": "su_ticket.su_status",
    "query": "N",
    "oper": "=",
    "page":"1",
    "rp": "1000",
    "sortname": "su_ticket.id",
    "sortorder": "asc",
    "grid_param": "[{\"TB\":\"su_ticket.id_assunto\", \"OP\" : \"IN\", \"P\" : \"13,15\"}]"
}
```

#### `GET` Atendimentos abertos por técnico
```
GET /webservice/v1/su_ticket
```

**Body:**
```json
{
    "qtype": "su_ticket.su_status",
    "query": "N",
    "oper": "=",
    "page":"1",
    "rp": "1000",
    "sortname": "su_ticket.id",
    "sortorder": "asc",
    "grid_param": "[{\"TB\":\"su_ticket.id_assunto\", \"OP\" : \"IN\", \"P\" : \"13,15\"},{\"TB\":\"su_ticket.id_responsavel_tecnico\", \"OP\" : \"=\", \"P\" : \"256\"}]"
}
```

#### `GET` Atendimentos finalizados e cancelados
```
GET /webservice/v1/su_ticket
```

**Body:**
```json
{
    "qtype": "su_ticket.id",
    "query": "",
    "oper": "=",
    "page":"1",
    "rp": "1000",
    "sortname": "su_ticket.id",
    "sortorder": "asc",
    "grid_param": "[{\"TB\":\"su_ticket.su_status\", \"OP\" : \"L\", \"P\" : \"N\", \"P2\" : \"C\"}]"
}
```

#### `GET` OS abertas
```
GET /webservice/v1/su_oss_chamado
```

**Body:**
```json
{
    "qtype": "su_oss_chamado.id",
    "query": "",
    "oper": "=",
    "page":"1",
    "rp": "200000",
    "sortname": "su_oss_chamado.id",
    "sortorder": "asc",
    "grid_param": "[{\"TB\":\"su_oss_chamado.status\", \"OP\" : \"=\", \"P\" : \"A\"}]"
}
```

#### `GET` OS abertas por cliente
```
GET /webservice/v1/su_oss_chamado
```

**Body:**
```json
{
    "qtype": "su_oss_chamado.id_cliente",
    "query": "2",
    "oper": "=",
    "rp": "200000",
    "sortname": "su_oss_chamado.id",
    "sortorder": "asc",
    "grid_param": "[{\"TB\":\"su_oss_chamado.status\", \"OP\" : \"=\", \"P\" : \"A\"}]"
}
```

#### `GET` OS abertas por contrato
```
GET /webservice/v1/su_oss_chamado
```

**Body:**
```json
{
    "qtype": "su_oss_chamado.id_contrato_kit",
    "query": "2",//ID do Contrato
    "oper": "=",
    "rp": "200000",
    "sortname": "su_oss_chamado.id",
    "sortorder": "asc",
    "grid_param": "[{\"TB\":\"su_oss_chamado.status\", \"OP\" : \"=\", \"P\" : \"A\"}]"
}
```

#### `GET` OS abertas por vários assuntos
```
GET /webservice/v1/su_oss_chamado
```

**Body:**
```json
{
    "qtype": "su_oss_chamado.status",
    "query": "A",
    "oper": "=",
    "rp": "200000",
    "sortname": "su_oss_chamado.id",
    "sortorder": "asc",
    "grid_param": "[{\"TB\":\"su_oss_chamado.id_assunto\", \"OP\" : \"IN\", \"P\" : \"1,234,56,23\"}]"
}
```

#### `GET` OS abertas por técnico
```
GET /webservice/v1/su_oss_chamado
```

**Body:**
```json
{
    "qtype": "su_oss_chamado.status",
    "query": "A",
    "oper": "=",
    "page":"1",
    "rp": "200000",
    "sortname": "su_oss_chamado.id",
    "sortorder": "asc",
    "grid_param": "[{\"TB\":\"su_oss_chamado.id_tecnico\", \"OP\" : \"=\", \"P\" : \"123\"}]"
}
```

#### `GET` OS abertas por técnico/mês
```
GET /webservice/v1/su_oss_chamado
```

**Body:**
```json
{
    "qtype": "su_oss_chamado.status",
    "query": "A",
    "oper": "=",
    "page":"1",
    "rp": "200000",
    "sortname": "su_oss_chamado.id",
    "sortorder": "asc",
    "grid_param": "[{\"TB\":\"su_oss_chamado.id_tecnico\", \"OP\" : \"=\", \"P\" : \"123\"},{\"TB\":\"su_oss_chamado.data_abertura\", \"OP\" : \"BE\", \"P\" : \"01/01/2025 00:00:00\", \"P2\" : \"31/01/2025 23:59:59\"}]"
}
```

#### `GET` OS finalizadas
```
GET /webservice/v1/su_oss_chamado
```

**Body:**
```json
{
    "qtype": "su_oss_chamado.id",
    "query": "",
    "oper": "=",
    "page":"1",
    "rp": "200000",
    "sortname": "su_oss_chamado.id",
    "sortorder": "asc",
    "grid_param": "[{\"TB\":\"su_oss_chamado.status\", \"OP\" : \"=\", \"P\" : \"F\"}]"
}
```

#### `GET` OS finalizadas por técnico/mês
```
GET /webservice/v1/su_oss_chamado
```

**Body:**
```json
{
    "qtype": "su_oss_chamado.status",
    "query": "F",
    "oper": "=",
    "page":"1",
    "rp": "200000",
    "sortname": "su_oss_chamado.id",
    "sortorder": "asc",
    "grid_param": "[{\"TB\":\"su_oss_chamado.id_tecnico\", \"OP\" : \"=\", \"P\" : \"123\"},{\"TB\":\"su_oss_chamado.data_fechamento\", \"OP\" : \"BE\", \"P\" : \"01/01/2025 00:00:00\", \"P2\" : \"31/01/2025 23:59:59\"}]"
}
```

#### `GET` OS agendadas no mês
```
GET /webservice/v1/su_oss_chamado
```

**Body:**
```json
{
    "qtype": "su_oss_chamado.id",
    "query": "",
    "oper": "=",
    "page":"1",
    "rp": "200000",
    "sortname": "su_oss_chamado.id",
    "sortorder": "asc",
    "grid_param": "[{\"TB\":\"su_oss_chamado.status\", \"OP\" : \"=\", \"P\" : \"AG\"},{\"TB\":\"su_oss_chamado.data_agenda\", \"OP\" : \"BE\", \"P\" : \"01/01/2025 00:00:00\", \"P2\" : \"31/01/2025 23:59:59\"}]"
}
```

#### `GET` Saldo do Produto por Filial e Almoxarifado
```
GET /webservice/v1/estoque_produtos_almox_filial
```

**Body:**
```json
{
    "qtype": "estoque_produtos_almox_filial.id_produto",
    "query": "51",
    "oper": "=",
    "page": "1",
    "rp": "1000",
    "sortname": "estoque_produtos_almox_filial.id",
    "sortorder": "desc",
    "grid_param": "[{\"TB\":\"estoque_produtos_almox_filial.id_filial\", \"OP\" : \"=\", \"P\" : \"1\"},{\"TB\":\"estoque_produtos_almox_filial.id_almox\", \"OP\" : \"=\", \"P\" : \"1\"}]"
}
```

#### `GET` Saldos dos Produtos Patrimônios
```
GET /webservice/v1/estoque_produtos_almox_filial
```

**Body:**
```json
{
    "qtype": "estoque_produtos_almox_filial.id_produto",
    "query": "51",
    "oper": "=",
    "page": "1",
    "rp": "1000",
    "sortname": "estoque_produtos_almox_filial.id",
    "sortorder": "desc",
    "grid_param": "[{\"TB\":\"estoque_produtos_almox_filial.produto_tipo\", \"OP\" : \"=\", \"P\" : \"P\"}]"
}
```

#### `GET` Logins ativos por cliente
```
GET /webservice/v1/radusuarios
```

**Body:**
```json
{
    "qtype": "radusuarios.id_cliente",
    "query": "1866",
    "oper": "=",
    "rp": "200000",
    "sortname": "radusuarios.id",
    "sortorder": "asc",
    "grid_param": "[{\"TB\":\"radusuarios.ativo\", \"OP\" : \"=\", \"P\" : \"S\"}]"
}
```

#### `GET` Logins ativos e onlines
```
GET /webservice/v1/radusuarios
```

**Body:**
```json
{
    "qtype": "radusuarios.online",
    "query": "S",
    "oper": "=",
    "rp": "200000",
    "sortname": "radusuarios.id",
    "sortorder": "asc",
    "grid_param": "[{\"TB\":\"radusuarios.ativo\", \"OP\" : \"=\", \"P\" : \"S\"}]"
}
```

#### `GET` Logins ativos por concentrador
```
GET /webservice/v1/radusuarios
```

**Body:**
```json
{
    "qtype": "radusuarios.ativo",
    "query": "S",
    "oper": "=",
    "page":"1",
    "rp": "200000",
    "sortname": "radusuarios.id",
    "sortorder": "asc",
    "grid_param": "[{\"TB\":\"radusuarios.id_concentrador\", \"OP\" : \"=\", \"P\" : \"145\"}]"
}
```

#### `GET` Logins por MAC
```
GET /webservice/v1/radusuarios
```

**Body:**
```json
{
    "qtype": "radusuarios.id",
    "query": "",
    "oper": "=",
    "page":"1",
    "rp": "200000",
    "sortname": "radusuarios.id",
    "sortorder": "asc",
    "grid_param": "[{\"TB\":\"radusuarios.mac\", \"OP\" : \"=\", \"P\" : \"F1:9C:D3:EB:61:30\"}]"
}
```

#### `GET` Logins por motivo de desconexão
```
GET /webservice/v1/radusuarios
```

**Body:**
```json
{
    "qtype": "radusuarios.id",
    "query": "",
    "oper": "=",
    "page":"1",
    "rp": "100",
    "sortname": "radusuarios.id",
    "sortorder": "asc",
    "grid_param": "[{\"TB\":\"radusuarios.motivo_desconexao\", \"OP\" : \"=\", \"P\" : \"NAS-Reboot\"}]"
}
```

#### `GET` Login Online
```
GET /webservice/v1/radusuarios
```

**Body:**
```json
{
"qtype": "radusuarios.login",
"query": "login4686",
"oper": "=",
"page": "1",
"rp": "20",
"grid_param": "[{\"TB\":\"radusuarios.online\", \"OP\" : \"=\", \"P\" : \"S\"}]"
}
```

#### `GET` IPV4 conectados por Data
```
GET /webservice/v1/radacct
```

**Body:**
```json
{
    "qtype": "radacct.framedipaddress",
    "query": "172.16.0.23", //Valor de IP aqui
    "oper": "=",
    "page": "1",
    "rp": "1000",
    "sortname": "radacct.radacctid",
    "sortorder": "desc",
    "grid_param":"[{\"TB\":\"radacct.acctstarttime\", \"OP\" : \">=\", \"P\" : \"2020-11-13 00:00:00\"},{\"TB\":\"radacct.acctstarttime\", \"OP\" : \"<=\", \"P\" : \"2020-11-13 23:59:59\"}]"
}

/* Mais informações sobre campos e valores em:
Sistema > Provedor > Pasta Radius > Conexões Radius
*/
```

#### `GET` IPV6 conectador por Data
```
GET /webservice/v1/radacct
```

**Body:**
```json
{
    "grid_param":"[{\"TB\":\"radacct.delegatedipv6prefix\", \"OP\" : \"L\", \"P\" : \"2804:788:515:5600::\"},{\"TB\":\"radacct.acctstarttime\", \"OP\" : \"<=\", \"P\" : \"2023-10-05 23:59:59\"}]"
}
```

#### `GET` Alterações feitas num login específico
```
GET /webservice/v1/ixc_logs
```

**Body:**
```json
{
    "qtype": "ixc_logs.id_tabela",
    "query": "4708",
    "oper": "=",
    "page": "1",
    "rp": "1000",
    "sortname": "ixc_logs.data",
    "sortorder": "asc",
    "grid_param": "[{\"TB\":\"ixc_logs.tabela\", \"OP\" : \"=\", \"P\" : \"radusuarios\"},{\"TB\":\"ixc_logs.tipo\", \"OP\" : \"=\", \"P\" : \"editou\"},{\"TB\":\"ixc_logs.data\", \"OP\" : \">=\", \"P\" : \"2024-11-29 09:10:00\"},{\"TB\":\"ixc_logs.data\", \"OP\" : \"<=\", \"P\" : \"2024-11-29 09:40:00\"},{\"TB\":\"ixc_logs.campos\", \"OP\" : \"L\", \"P\" : \"teste@\"}]"
}
/*
Nessa consulta, está sendo buscada, as alterações feitas no login ID 4708
Tipo = Editou
Tabela = Login
Data: 29/11/2024 09:10:00 á 29/11/2024 09:40:00
Campos: Procurando pelo campo teste@ em Login
*/
```

#### `GET` Falhas de envio de e-mail por data
```
GET /webservice/v1/crm_email_log
```

**Body:**
```json
{
    "qtype": "crm_email_log.destinatarios",
    "query": "",//E-mail do destinatário, se necessário
    "oper": "=",
    "page": "1",
    "rp": "1000",
    "sortname": "crm_email_log.data_hora",
    "sortorder": "asc",
    "grid_param": "[{\"TB\":\"crm_email_log.status\", \"OP\" : \"=\", \"P\" : \"F\"},{\"TB\":\"crm_email_log.data_hora\", \"OP\" : \">=\", \"P\" : \"2024-11-19 16:35:01\"},{\"TB\":\"crm_email_log.data_hora\", \"OP\" : \"<=\", \"P\" : \"2024-11-19 16:35:10\"}]"
}
```

#### `GET` Falhas de envio de sms por data
```
GET /webservice/v1/crm_sms_log
```

**Body:**
```json
{
    "qtype": "crm_sms_log.id_cliente",
    "query": "",//ID do Cliente, se necessário
    "oper": "=",
    "page": "1",
    "rp": "1000",
    "sortname": "crm_sms_log.data_hora",
    "sortorder": "asc",
    "grid_param": "[{\"TB\":\"crm_sms_log.status\", \"OP\" : \"=\", \"P\" : \"N\"},{\"TB\":\"crm_sms_log.data_hora\", \"OP\" : \">=\", \"P\" : \"2024-11-21 16:21:0\"},{\"TB\":\"crm_sms_log.data_hora\", \"OP\" : \"<=\", \"P\" : \"2024-11-21 16:22:00\"}]"
}
```

## 🔄 Fluxos

### Autorizar ONU

#### `GET` 1. Transmissores - OLT (listar)
```
GET /webservice/v1/radpop_radio
```

**Body:**
```json
{
"qtype" : "radpop_radio.id",
"query" : "",
"oper" : "=",
"page" : "1",
"rp" : "2000",
"sortname" : "radpop_radio.id",
"sortorder" : "desc"
}

// Gravar o ID
```

#### `GET` 2. Perfil (listar)
```
GET /webservice/v1/radpop_radio_cliente_fibra_perfil
```

**Body:**
```json
{
    "qtype" : "radpop_radio_cliente_fibra_perfil.id",
    "query" : "1",
    "oper" : ">=",
    "page" : "1",
    "rp" : "2000",
    "sortname" : "radpop_radio_cliente_fibra_perfil.id",
    "sortorder" : "desc"
}

// Gravar o ID
```

#### `GET` 3. ONU não autorizada por OLT (listar)
```
GET /webservice/v1/fh_onu_nao_autorizadas
```

**Body:**
```json
{
      "grid_param" : "[{\"TB\":\"id_olt\", \"OP\" : \"=\", \"P\" : \"2\"}]"
}
//Troque o 2 pelo id da olt (transmissor)
// Gravar o ID
```

#### `POST` 4. Autorizar ONU (inserir)
```
POST /webservice/v1/fh_onu_nao_autorizadas_22396
```

**Body:**
```json
{
    "get_id":"1"//Insira o ID de ONU não autorizada
}
```

#### `PUT` 5. Cliente Fibra (editar)
```
PUT /webservice/v1/radpop_radio_cliente_fibra/id_cliente_fibra
```

**Body:**
```json
// Insira os valores gravado de Perfil e Transmissores no PUT do ID do cliente fibra gravado
// ID de Perfil => id_perfil
// ID de Transmissores  => id_transmissor
{
            "id_projeto": "",
            "id_contrato": "",
            "gemport": "",
            "ip_gerencia": "",
            "login_onu_cliente": "",
            "senha_onu_cliente": "",
            "porta_telnet_onu_cliente": "",
            "perfil_onu_cliente": "",
            "script_onu_cliente": "",
            "senorid": "",
            "latitude": "",
            "longitude": "",
            "endereco_padrao_cliente": "",
            "id_condominio": "",
            "bloco": "",
            "apartamento": "",
            "cep": "",
            "endereco": "",
            "numero": "",
            "bairro": "",
            "cidade": "",
            "referencia": "",
            "complemento": "",
            "distancia_onu": "",
            "vlan_dhcp": "",
            "vlan_tr69": "",
            "vlan_iptv": "",
            "vlan_voip": "",
            "vlan_pppoe": "",
            "vlan_outros": "",
            "id_ramal": "",
            "id_onu_unms": "",
            "id_activity": "",
            "radpop_estrutura": "",
            "porta_web_onu_cliente": "",
            "tipo_operacao": "",
            "id_transmissor": "",
            "nome": "",
            "id_caixa_ftth": "",
            "porta_ftth": "",
            "id_login": "",
            "onu_numero": "",
            "service_port": "",
            "onu_tipo": "",
            "ponid": "",
            "mac": "",
            "comandos": "",
            "sinal_rx": "",
            "sinal_tx": "",
            "temperatura": "",
            "voltagem": "",
            "data_sinal": "",
            "id_perfil": "",
            "slotno": "",
            "ponno": "",
            "tipo_autenticacao": "",
            "versao": "",
            "vlan": "",
            "causa_ultima_queda": "",
            "id_hardware": ""
        }
```

#### `POST` 6. Gravar dispositivo (inserir)
```
POST /webservice/v1/botao_gravar_dispositivo_22408
```

**Body:**
```json
{
"id" : "4"//ID de Cliente fibra
}
```

### Boletos por CPF

#### `GET` 1. Buscar o ID do Cliente pelo CPF/CNPJ
```
GET /webservice/v1/cliente
```

**Body:**
```json
{
  "qtype" : "cliente.cnpj_cpf",
  "query" : "627.105.245-20",//cpf ou cnpj
  "oper" : "="
}
//Gravar o campo "id"
```

**Response — Retorno:**
```json
{
    "page": "1",
    "total": 1,
    "registros": [
        {
            "senha": "123",
            "acesso_automatico_central": "P",
            "alterar_senha_primeiro_acesso": "P",
            "senha_hotsite_md5": "N",
            "indicado_por": "0",
            "ativo": "S",
            "id": "2",
            "grau_satisfacao": "",
            "razao": "Cliente Teste",
            "fantasia": "Cliente 2",
            "cnpj_cpf": "627.105.245-20",
            "tipo_documento_identificacao": "13",
            "ie_identidade": "",
            "uf": "0",
            "data_cadastro": "2016-04-07",
            "crm": "N",
            "endereco": "Endereco 2",
            "cidade": "3828",
            "cond_pagamento": "1",
            "bairro": "Centro",
            "fone": "",
            "numero": "25",
            "cep": "89801-000",
            "filial_id": "1",
            "contato": "",
            "latitude": "-23.6893495",
            "longitude": "-46.7762918",
            "id_conta": "384",
            "obs": "\r\n\r\nContrato enviado na ZapSign em 2023-09-01T03:00:08.875536Z. Link assinatura: https://app.zapsign.com.br/verificar/ca56a139-c7ef-47ce-a922-6d3c5a478466",
            "hotsite_email": "email2@ixcsoft.com.br",
            "email": "charles.dcg@gmail.com",
            "id_tipo_cliente": "3",
            "id_candato_tipo": "0",
            "tipo_pessoa": "F",
            "telefone_comercial": "",
            "referencia": "",
            "telefone_celular": "",
            "complemento": "",
            "ramal": "",
            "id_condominio": "0",
            "data_nascimento": "1991-04-14",
            "participa_cobranca": "S",
            "id_vendedor": "0",
            "num_dias_cob": "0",
            "isuf": "",
            "tabela_preco": "0",
            "tipo_assinante": "3",
            "bloco": "",
            "apartamento": "0",
            "idx": "0",
            "skype": "",
            "whatsapp": "",
            "hotsite_acesso": "2",
            "id_perfil": "0",
            "id_concorrente": "0",
            "estado_civil": "",
            "responsavel": "0",
            "status_prospeccao": "V",
            "crm_data_vencemos": "0000-00-00",
            "ativo_serasa": "0",
            "iss_classificacao_padrao": "99",
            "rg_orgao_emissor": "",
            "nacionalidade": "Brasileiro",
            "deb_automatico": "",
            "ultima_atualizacao": "2024-11-12 01:02:08",
            "deb_agencia": "",
            "cadastrado_via_viabilidade": "",
            "deb_conta": "",
            "alerta": "",
            "endereco_cob": "",
            "numero_cob": "",
            "bairro_cob": "",
            "cidade_cob": "0",
            "uf_cob": "0",
            "cep_cob": "",
            "referencia_cob": "",
            "complemento_cob": "",
            "profissao": "",
            "id_operadora_celular": "0",
            "participa_pre_cobranca": "S",
            "cob_envia_email": "S",
            "cob_envia_sms": "S",
            "contribuinte_icms": "N",
            "Sexo": "",
            "nome_pai": "",
            "nome_mae": "",
            "quantidade_dependentes": "0",
            "nome_conjuge": "",
            "fone_conjuge": "",
            "cpf_conjuge": "",
            "rg_conjuge": "",
            "data_nascimento_conjuge": "0000-00-00",
            "moradia": "",
            "nome_contador": "",
            "telefone_contador": "",
            "ref_com_empresa1": "",
            "ref_com_empresa2": "",
            "ref_com_fone1": "",
            "ref_com_fone2": "",
            "ref_pes_nome1": "",
            "ref_pes_nome2": "",
            "ref_pes_fone1": "",
            "ref_pes_fone2": "",
            "emp_empresa": "",
            "emp_cnpj": "",
            "emp_cep": "",
            "emp_endereco": "",
            "emp_cidade": "0",
            "emp_fone": "",
            "emp_cargo": "",
            "emp_remuneracao": "0.00",
            "emp_data_admissao": "0000-00-00",
            "website": "",
            "orgao_publico": "N",
            "pipe_id_organizacao": "0",
            "im": "",
            "cif": "",
            "tipo_cliente_scm": "01",
            "pis_retem": "N",
            "cofins_retem": "N",
            "csll_retem": "N",
            "irrf_retem": "N",
            "nascimento_mae": "0000-00-00",
            "nascimento_pai": "0000-00-00",
            "identidade_mae": "",
            "identidade_pai": "",
            "cpf_mae": "",
            "cpf_pai": "",
            "inscricao_municipal": "",
            "nome_representante_1": "",
            "nome_representante_2": "",
            "cpf_representante_1": "",
            "cpf_representante_2": "",
            "identidade_representante_1": "",
            "identidade_representante_2": "",
            "codigo_operacao": "0",
            "convert_cliente_forn": "N",
            "tipo_pessoa_titular_conta": "F",
            "cnpj_cpf_titular_conta": "",
            "crm_data_perdemos": "0000-00-00",
            "crm_data_sem_viabilidade": "0000-00-00",
            "crm_data_sem_porta_disponivel": "0000-00-00",
            "crm_data_abortamos": "0000-00-00",
            "crm_data_negociando": "0000-00-00",
            "crm_data_apresentando": "0000-00-00",
            "crm_data_sondagem": "0000-00-00",
            "crm_data_novo": "0000-00-00",
            "atualizar_cadastro_galaxPay": "S",
            "foto_cartao": "",
            "cli_desconta_iss_retido_total": "N",
            "cidade_naturalidade": "0",
            "tipo_localidade": "U",
            "facebook": "",
            "id_campanha": "0",
            "desconto_irrf_valor_inferior": "S",
            "filtra_filial": "S",
            "regime_fiscal_col": ""
        }
    ]
}
```

#### `GET` 2. Boletos em Aberto pelo ID Cliente
```
GET /webservice/v1/fn_areceber
```

**Body:**
```json
{
  "qtype": "fn_areceber.id_cliente",
  "query": "2",//ID do Cliente
  "oper": "=",
  "rp": "200000",
  "sortname": "fn_areceber.data_vencimento",
  "sortorder": "asc",
  "grid_param": "[{\"TB\":\"fn_areceber.liberado\", \"OP\" : \"=\", \"P\" : \"S\"},{\"TB\":\"fn_areceber.status\", \"OP\" : \"!=\", \"P\" : \"R\", \"P2\" : \"C\"},{\"TB\":\"fn_areceber.data_vencimento\", \"OP\" : \"BE\", \"P\" : \"01/01/2020\", \"P2\" : \"31/12/2020\"}]"
}

/*
- Gravar o campo "id"
- Filtrar o boleto pelo campo "id" gravado
- No gridparam, estamos filtrando pelos boletos abertos e parciais, dentro de um período definido
- OBS: Haverá caso que o formato da data padrão, não funcione na filtragem, outra possibilidade é utilizar o formato americano, ex: 2024-11-30 
- O campo "nn_boleto", é o código de barras do boleto
- O campo "pix_txid", é o código pix do boleto
*/
```

**Response — Retorno:**
```json
{
    "page": "1",
    "total": "1",
    "registros": [
        {
            "id_remessa": "0",
            "gateway_link": "",
            "nn_boleto": "",
            "boleto": "",
            "data_inicial": "2024-11-08",
            "data_final": "2024-11-19",
            "estornado": "N",
            "id": "145535",
            "liberado": "S",
            "filial_id": "1",
            "status": "A",
            "data_emissao": "2024-11-08",
            "data_vencimento": "2024-11-21",
            "valor": "26.00",
            "obs": "de 08/11/2024 até 19/11/2024",
            "valor_recebido": "0.00",
            "valor_aberto": "26.00",
            "id_cliente": "2",
            "pagamento_valor": "",
            "pagamento_data": "",
            "id_carteira_cobranca": "5",
            "credito_data": "",
            "baixa_data": "",
            "numero_parcela_recorrente": "",
            "documento": "72006",
            "id_saida": "72006",
            "tipo_recebimento": "Gateway",
            "tipo_renegociacao": "",
            "valor_cancelado": "0.00",
            "data_cancelamento": "",
            "id_mot_cancelamento": "",
            "id_renegociacao": "",
            "id_cobranca": "",
            "previsao": "S",
            "id_renegociacao_novo": "",
            "libera_periodo": "N",
            "impresso": "N",
            "forma_recebimento": "",
            "arquivo_remessa_baixado": "",
            "nparcela": "1",
            "id_nota_gerada_opc4": "",
            "status_cobranca": "",
            "tipo_cobranca": "I",
            "id_contrato_principal": "0",
            "id_contrato_avulso": "2309",
            "id_contrato": "",
            "id_nota_gerada": "0",
            "id_im_imovel": "",
            "parcela_proporcional": "S",
            "linha_digitavel": "",
            "duplicata": "",
            "tipo_pagamento_cartao": "",
            "id_sip": "",
            "titulo_protestado": "N",
            "desconto_condicional_valor": "",
            "gerencianet_token": "",
            "validade_desconto_condicional": "",
            "id_conta": "2758",
            "motivo_alteracao": "",
            "id_remessa_alteracao": "",
            "cancelamento_id_operador": "",
            "baixa_id_operador": "",
            "titulo_importado": "N",
            "origem_importacao": "",
            "ultima_atualizacao": "2024-11-08 13:53:41",
            "aguardando_confirmacao_pagamento": "N",
            "parcelado_cartao": "N",
            "pix_txid": "",
            "id_nota_gerada_opc2": "",
            "id_nota_gerada_opc3": "",
            "recebido_via_pix": "N",
            "id_lote_geracao_financeiro_fatura": ""
        }
    ]
}
```

#### `GET` 3. Baixar arquivo do boleto
```
GET /webservice/v1/get_boleto
```

**Body:**
```json
{
    "boletos": "2233,3344",//IDs dos boletos
    "juro": "S",//Juros, S=sim e N=nao
    "multa": "S",//Multa, S=sim e N=nao
    "atualiza_boleto": "S",//Sempre como "S"
    "tipo_boleto": "arquivo",
    "base64" : "S"
}

/* Base 64: S=Retornar o boleto em base64 converter para PDF, N=Retornar o boleto em Binário, converter para PDF */
```

#### `GET` 4. Retornar Dados do Boleto
```
GET /webservice/v1/get_boleto
```

**Body:**
```json
{
    "boletos": "145535,145536",//IDs dos boletos
    "juro": "S",//Juros, S=sim e N=nao
    "multa": "S",//Multa, S=sim e N=nao
    "atualiza_boleto": "S",//Sempre como "S"
    "tipo_boleto": "dados",
    "base64" : "N"
}

/* 
Retornará os dados do boleto
OBS: Funciona somente se o boleto for do tipo de recebimento "Boleto"
*/
```

#### `GET` 5. Retornar o Pix do Boleto
```
GET /webservice/v1/get_pix
```

**Body:**
```json
{
    "id_areceber": "2233" //ID do Contas a Receber (fn_areceber)
}
```

**Response — Retorno:**
```json
{
    "pix": {
        "dadosPix": {
            "revisao": 0,
            "loc": {
                "id": 1994570617,
                "location": "",
                "tipoCob": "cobv",
                "criacao": "2024-08-22T12:03:01.636Z"
            },
            "calendario": {
                "criacao": "2024-08-22T12:03:01Z",
                "dataDeVencimento": "2024-10-14",
                "validadeAposVencimento": 90
            },
            "devedor": {
                "cpf": "12345678900",
                "nome": "Cliente TESTE"
            },
            "valor": {
                "original": "85.90",
                "abatimento": [],
                "desconto": {
                    "modalidade": 1,
                    "descontoDataFixa": [
                        {
                            "data": "2024-10-14T00:00:00.000Z",
                            "valorPerc": "11.00"
                        }
                    ]
                },
                "juros": {
                    "valorPerc": "0.03",
                    "modalidade": 2
                },
                "multa": {
                    "valorPerc": "2.00",
                    "modalidade": 2
                }
            },
            "chave": "",
            "txid": "",
            "status": "ATIVA",
            "solicitacaoPagador": "de 14/09/2024 ate 13/10/2024",
            "infoAdicionais": [],
            "pixCopiaECola": "",
            "expiracaoPix": "12/01/2025 00:00:00"
        },
        "qrCode": {
            "qrcode": "",
            "imagemQrcode": "",
            "imagemSrc": ""
        }
    },
    "gateway": {
        "gatewayNome": "MB"
    },
    "type": "success"
}
```

#### `GET` 6. Enviar boleto por e-mail
```
GET /webservice/v1/get_boleto
```

**Body:**
```json
{
    "boletos": "145535,145536",//IDs dos boletos
    "juro": "S",//Juros, S=sim e N=nao
    "multa": "S",//Multa, S=sim e N=nao
    "atualiza_boleto": "S",//Sempre como "S"
    "tipo_boleto": "mail"
}

/* 
Funcionará se tiver configurado a Mensagem de E-mail, em:
- Configurações > Parâmetros > Parâmetros financeiro > Geral > Servior de e-mail boletos e faturas

- Configurações > Parâmetros > Parâmetros financeiro > Geral > Servior de e-mail para vários boletos e faturas
*/
```

**Response — Retorno:**
```json
{"registros":[{"sucesso":true}]}
```

#### `GET` 7. Enviar boleto por sms
```
GET /webservice/v1/get_boleto
```

**Body:**
```json
{
    "boletos": "145535,145536",//IDs dos boletos
    "juro": "S",//Juros, S=sim e N=nao
    "multa": "S",//Multa, S=sim e N=nao
    "atualiza_boleto": "S",//Sempre como "S"
    "tipo_boleto": "sms"
}

/* 
Funcionará se tiver configurado a Mensagem de E-mail, em:
- Configurações > Parâmetros > Parâmetros financeiro > Geral > SMS para envio de boletos

- Necessário ter um Gateway SMS, configurado;
- Será enviado os dados do boleto, e não o arquivo;
*/
```

**Response — Retorno:**
```json
{"registros":[{"sucesso":true}]}
```

### Produtos do técnico

#### `GET` 1. Encontrar o Usuário do Técnico
```
GET /webservice/v1/usuarios
```

**Body:**
```json
{
  "qtype" : "usuarios.funcionario",
  "query" : "1",
  "oper" : "=",
  "page" : "1",
  "rp" : "2000",
  "sortname" : "usuarios.id"
}

//Gravar o ID do Usuário do Técnico
```

**Response — Exemplo:**
```json
{
    "page": "1",
    "total": "1",
    "registros": [
        {
            "pagamentos_dia_atual": "N",
            "enviar_monitoramento_host": "N",
            "tipo_alcada": "",
            "enviar_notificacao_backup": "N",
            "inmap_filtra_vendedor": "N",
            "imagem": "",
            "filtra_departamento_ticket": "N",
            "filtra_funcionario_ticket": "N",
            "mostrar_ticket_sem_funcionario": "S",
            "filtrar_plano_venda_filial_contrato": "",
            "id": "6",
            "id_grupo": "1",
            "nome": "Amanda Cirelli",
            "email": "amandacirelli@ixc.com",
            "status": "A",
            "senha": "f4ff83a28eac5a801a80b127e176607761678ed42ea515337b3710f39dc45800",
            "template": "d",
            "id_caixa": "0",
            "caixa_fn_receber": "0",
            "recebimentos_dia_atual": "N",
            "lancamentos_dia_atual": "S",
            "vendedor_padrao": "0",
            "funcionario": "1",
            "filtra_setor": "N",
            "filtra_funcionario": "N",
            "acesso_webservice": "S",
            "desc_max_recebimento": "0.00",
            "desc_max_venda": "0.00",
            "crm_filtra_vendedor": "N",
            "mostrar_os_sem_funcionario": "S",
            "callcenter": "",
            "user_callcenter": "N",
            "desc_max_renegociacao": "0.00",
            "permite_inutilizar_patrimonio": "N",
            "alter_passwd_date": "2022-11-28 16:28:53",
            "permite_acesso_ixc_mobile": "S",
            "language": "Pt-Br",
            "permite_ver_diferenca": "S",
            "administrador_kanban": "N"
        }
    ]
}
```

#### `GET` 2. Listar os Almoxarifados do Usuário
```
GET /webservice/v1/almox_usuario
```

**Body:**
```json
{
  "qtype" : "almox_usuario.id_usuario",
  "query" : "6",
  "oper" : "=",
  "page" : "1",
  "rp" : "2000",
  "sortname" : "almox_usuario.id"
}

/* Listando os almoxarifados do usuário pelo seu ID de Usuário e depois gravamos o valor  de id_almox */
```

**Response — Exemplo:**
```json
{
    "page": "1",
    "total": "1",
    "registros": [
        {
            "id": "13",
            "id_usuario": "6",
            "id_almox": "1",
            "padrao_usuario": "N"
        }
    ]
}
```

#### `GET` 3. Listar os produtos do Almoxarifado
```
GET /webservice/v1/estoque_produtos_almox_filial
```

**Body:**
```json
{
"qtype": "estoque_produtos_almox_filial.id_almox",
"query": "1",
"oper": "=",
"page": "1",
"rp": "1000",
"sortname": "estoque_produtos_almox_filial.id",
"sortorder": "desc"
}
```

**Response — Exemplo:**
```json
{
    "page": "1",
    "total": "16",
    "registros": [
        {
            "id": "18",
            "produto_descricao": "Samsung Galaxy S23 Ultra 5G Tela Infinita",
            "id_produto": "49",
            "id_filial": "2",
            "id_almox": "1",
            "almox_ativo": "S",
            "saldo": "4.000000000",
            "almox_descricao": "Estoque",
            "produto_unidade": "14",
            "produto_controla_estoque": "S",
            "produto_pcomissao": "0.00",
            "produto_preco_base": "7800.00",
            "produto_id_class_fiscal": "1",
            "produto_tipo": "C",
            "produto_ativo": "S"
        },
        {
            "id": "17",
            "produto_descricao": "Smartphone Samsung S23",
            "id_produto": "48",
            "id_filial": "2",
            "id_almox": "1",
            "almox_ativo": "S",
            "saldo": "4.000000000",
            "almox_descricao": "Estoque",
            "produto_unidade": "14",
            "produto_controla_estoque": "S",
            "produto_pcomissao": "0.00",
            "produto_preco_base": "3620.00",
            "produto_id_class_fiscal": "1",
            "produto_tipo": "C",
            "produto_ativo": "S"
        },
        {
            "id": "16",
            "produto_descricao": "Teclado Multilaser",
            "id_produto": "47",
            "id_filial": "2",
            "id_almox": "1",
            "almox_ativo": "S",
            "saldo": "8.000000000",
            "almox_descricao": "Estoque",
            "produto_unidade": "14",
            "produto_controla_estoque": "S",
            "produto_pcomissao": "0.00",
            "produto_preco_base": "42.00",
            "produto_id_class_fiscal": "1",
            "produto_tipo": "C",
            "produto_ativo": "S"
        },
        {
            "id": "15",
            "produto_descricao": "Mochila Executiva",
            "id_produto": "46",
            "id_filial": "2",
            "id_almox": "1",
            "almox_ativo": "S",
            "saldo": "6.000000000",
            "almox_descricao": "Estoque",
            "produto_unidade": "14",
            "produto_controla_estoque": "S",
            "produto_pcomissao": "0.00",
            "produto_preco_base": "146.50",
            "produto_id_class_fiscal": "1",
            "produto_tipo": "C",
            "produto_ativo": "S"
        },
        {
            "id": "14",
            "produto_descricao": "Capa para Notebook",
            "id_produto": "45",
            "id_filial": "2",
            "id_almox": "1",
            "almox_ativo": "S",
            "saldo": "15.000000000",
            "almox_descricao": "Estoque",
            "produto_unidade": "14",
            "produto_controla_estoque": "S",
            "produto_pcomissao": "0.00",
            "produto_preco_base": "65.25",
            "produto_id_class_fiscal": "1",
            "produto_tipo": "C",
            "produto_ativo": "S"
        },
        {
            "id": "13",
            "produto_descricao": "Mouse Optico",
            "id_produto": "44",
            "id_filial": "2",
            "id_almox": "1",
            "almox_ativo": "S",
            "saldo": "10.000000000",
            "almox_descricao": "Estoque",
            "produto_unidade": "14",
            "produto_controla_estoque": "S",
            "produto_pcomissao": "0.00",
            "produto_preco_base": "52.00",
            "produto_id_class_fiscal": "1",
            "produto_tipo": "C",
            "produto_ativo": "S"
        },
        {
            "id": "12",
            "produto_descricao": "Notebook",
            "id_produto": "43",
            "id_filial": "1",
            "id_almox": "1",
            "almox_ativo": "S",
            "saldo": "8.000000000",
            "almox_descricao": "Estoque",
            "produto_unidade": "14",
            "produto_controla_estoque": "S",
            "produto_pcomissao": "0.00",
            "produto_preco_base": "4800.00",
            "produto_id_class_fiscal": "1",
            "produto_tipo": "C",
            "produto_ativo": "S"
        },
        {
            "id": "11",
            "produto_descricao": "Cabo RJ45 Azul",
            "id_produto": "36",
            "id_filial": "1",
            "id_almox": "1",
            "almox_ativo": "S",
            "saldo": "2000.000000000",
            "almox_descricao": "Estoque",
            "produto_unidade": "2",
            "produto_controla_estoque": "S",
            "produto_pcomissao": "0.00",
            "produto_preco_base": "100.00",
            "produto_id_class_fiscal": "1",
            "produto_tipo": "C",
            "produto_ativo": "S"
        },
        {
            "id": "9",
            "produto_descricao": "Roteador Venda",
            "id_produto": "35",
            "id_filial": "1",
            "id_almox": "1",
            "almox_ativo": "S",
            "saldo": "63.000000000",
            "almox_descricao": "Estoque",
            "produto_unidade": "1",
            "produto_controla_estoque": "S",
            "produto_pcomissao": "0.00",
            "produto_preco_base": "100.00",
            "produto_id_class_fiscal": "1",
            "produto_tipo": "C",
            "produto_ativo": "S"
        },
        {
            "id": "7",
            "produto_descricao": "Roteador 2023",
            "id_produto": "34",
            "id_filial": "1",
            "id_almox": "1",
            "almox_ativo": "S",
            "saldo": "3.000000000",
            "almox_descricao": "Estoque",
            "produto_unidade": "1",
            "produto_controla_estoque": "S",
            "produto_pcomissao": "0.00",
            "produto_preco_base": "100.00",
            "produto_id_class_fiscal": "1",
            "produto_tipo": "P",
            "produto_ativo": "S"
        },
        {
            "id": "6",
            "produto_descricao": "Roteador Wireless Gigabit Dual Band AC 1200 Archer C5",
            "id_produto": "30",
            "id_filial": "1",
            "id_almox": "1",
            "almox_ativo": "S",
            "saldo": "1.000000000",
            "almox_descricao": "Estoque",
            "produto_unidade": "1",
            "produto_controla_estoque": "N",
            "produto_pcomissao": "0.00",
            "produto_preco_base": "255.72",
            "produto_id_class_fiscal": "1",
            "produto_tipo": "O",
            "produto_ativo": "S"
        },
        {
            "id": "5",
            "produto_descricao": "BOTINA FUJ BNF AMARR S/BICO BI DENSIDADE CA 28105 ",
            "id_produto": "24",
            "id_filial": "1",
            "id_almox": "1",
            "almox_ativo": "S",
            "saldo": "1.000000000",
            "almox_descricao": "Estoque",
            "produto_unidade": "1",
            "produto_controla_estoque": "S",
            "produto_pcomissao": "0.00",
            "produto_preco_base": "72.94",
            "produto_id_class_fiscal": "1",
            "produto_tipo": "O",
            "produto_ativo": "S"
        },
        {
            "id": "4",
            "produto_descricao": "Tp-link Onu Gpon ",
            "id_produto": "21",
            "id_filial": "1",
            "id_almox": "1",
            "almox_ativo": "S",
            "saldo": "-1570.000000000",
            "almox_descricao": "Estoque",
            "produto_unidade": "1",
            "produto_controla_estoque": "S",
            "produto_pcomissao": "0.00",
            "produto_preco_base": "153.00",
            "produto_id_class_fiscal": "1",
            "produto_tipo": "O",
            "produto_ativo": "S"
        },
        {
            "id": "3",
            "produto_descricao": "Instalação Na Fibra (Incluso o Roteador)",
            "id_produto": "13",
            "id_filial": "1",
            "id_almox": "1",
            "almox_ativo": "S",
            "saldo": "-1344.000000000",
            "almox_descricao": "Estoque",
            "produto_unidade": "13",
            "produto_controla_estoque": "S",
            "produto_pcomissao": "0.00",
            "produto_preco_base": "225.00",
            "produto_id_class_fiscal": "1",
            "produto_tipo": "S",
            "produto_ativo": "S"
        },
        {
            "id": "2",
            "produto_descricao": "Migração Cliente  UTP para Fibra",
            "id_produto": "12",
            "id_filial": "1",
            "id_almox": "1",
            "almox_ativo": "S",
            "saldo": "-424.000000000",
            "almox_descricao": "Estoque",
            "produto_unidade": "13",
            "produto_controla_estoque": "S",
            "produto_pcomissao": "0.00",
            "produto_preco_base": "160.00",
            "produto_id_class_fiscal": "1",
            "produto_tipo": "S",
            "produto_ativo": "S"
        },
        {
            "id": "1",
            "produto_descricao": "ROTEADOR TP-LINK 300MBPS",
            "id_produto": "8",
            "id_filial": "1",
            "id_almox": "1",
            "almox_ativo": "S",
            "saldo": "-1219.000000000",
            "almox_descricao": "Estoque",
            "produto_unidade": "1",
            "produto_controla_estoque": "S",
            "produto_pcomissao": "0.00",
            "produto_preco_base": "160.00",
            "produto_id_class_fiscal": "1",
            "produto_tipo": "O",
            "produto_ativo": "S"
        }
    ]
}
```

### Produtos do contrato

#### `GET` Produtos do plano
```
GET /webservice/v1/vd_contratos_produtos
```

**Body:**
```json
{
  "qtype" : "vd_contratos_produtos.id_vd_contrato",
  "query" : "210",//ID do Plano de Venda que vem do contrato
  "oper" : "=",
  "page" : "1",
  "rp" : "20"
}
```

**Response — Exemplo:**
```json
{
    "page": "1",
    "total": "2",
    "registros": [
        {
            "descricao_plano_valor_1": "0.00",
            "descricao_plano_valor_2": "0.00",
            "fixar_ip": "0",
            "tipo_desconto": "V",
            "desconto_percentual": "0.00",
            "repetir": "V",
            "id": "1316",
            "tipo": "I",
            "id_plano": "108",
            "id_vd_contrato": "210",
            "id_produto": "0",
            "qtde": "1",
            "valor_unit": "69.900000000",
            "descricao": "",
            "id_contrato": "0",
            "obs": "",
            "valor_ate_vencimento": "0.00",
            "qtde_repeticoes_desconto_produto": "0",
            "valor_desconto_produto": "0.00",
            "ultima_atualizacao": "0000-00-00 00:00:00",
            "id_tipo_documento": "0"
        },
        {
            "descricao_plano_valor_1": "0.00",
            "descricao_plano_valor_2": "0.00",
            "fixar_ip": "0",
            "tipo_desconto": "V",
            "desconto_percentual": "0.00",
            "repetir": "V",
            "id": "666",
            "tipo": "I",
            "id_plano": "116",
            "id_vd_contrato": "210",
            "id_produto": "0",
            "qtde": "1",
            "valor_unit": "120.000000000",
            "descricao": "",
            "id_contrato": "0",
            "obs": "",
            "valor_ate_vencimento": "110.00",
            "qtde_repeticoes_desconto_produto": "0",
            "valor_desconto_produto": "0.00",
            "ultima_atualizacao": "2024-01-19 17:57:19",
            "id_tipo_documento": "603"
        }
    ]
}
```

#### `GET` Produtos do contrato
```
GET /webservice/v1/vd_contratos_produtos
```

**Body:**
```json
{
  "qtype" : "vd_contratos_produtos.id_contrato",
  "query" : "4409",//ID do Contrato
  "oper" : "=",
  "page" : "1",
  "rp" : "20"
}
```

**Response — Exemplo:**
```json
{
    "page": "1",
    "total": "1",
    "registros": [
        {
            "descricao_plano_valor_1": "",
            "descricao_plano_valor_2": "",
            "fixar_ip": "0",
            "tipo_desconto": "V",
            "desconto_percentual": "",
            "repetir": "V",
            "id": "1367",
            "tipo": "I",
            "id_plano": "44",
            "id_vd_contrato": "0",
            "id_produto": "0",
            "qtde": "1",
            "valor_unit": "139.900000000",
            "descricao": "",
            "id_contrato": "4409",
            "obs": "",
            "valor_ate_vencimento": "0.00",
            "qtde_repeticoes_desconto_produto": "",
            "valor_desconto_produto": "",
            "ultima_atualizacao": "2024-06-24 16:42:41",
            "id_tipo_documento": "0"
        }
    ]
}
```

#### `GET` Produtos por Contrato 1
```
GET /webservice/v1/view_vd_contratos_produtos_gen
```

**Body:**
```json
{
	"qtype": "view_vd_contratos_produtos_gen.cliente_contrato_id",
	"query": "2233",//ID do Contrato
	"oper": "=",
	"page": "1",
	"rp": "17",
	"sortname": "view_vd_contratos_produtos_gen.id",
	"sortorder": "desc"
}
```

**Response — Exemplo:**
```json
{
    "page": "1",
    "total": "3",
    "rows": [
        {
            "id": "30",
            "cell": [
                "30",
                "Locação ONU",
                "",
                "Cabo RJ45 Azul",
                "1",
                "20,00",
                "20,00",
                "",
                "",
                "20,00",
                "20,00",
                "Plano",
                "2233",
                "",
                "0"
            ]
        },
        {
            "id": "29",
            "cell": [
                "29",
                "Fibra__300_Megas (SVA)",
                "",
                "Roteador 2023",
                "1",
                "39,00",
                "39,00",
                "",
                "",
                "39,00",
                "39,00",
                "Plano",
                "2233",
                "",
                "0"
            ]
        },
        {
            "id": "13",
            "cell": [
                "13",
                "Fibra__300_Megas (SCM)",
                "150_MEGA_FIBRA",
                "",
                "1",
                "91,00",
                "91,00",
                "",
                "",
                "91,00",
                "91,00",
                "Plano",
                "2233",
                "",
                "0"
            ]
        }
    ],
    "tot": [
        "150,00",
        false,
        false,
        "150,00"
    ]
}
```

### Renegociação Wizard

#### `POST` 1. Renegociar selecionados
```
POST /webservice/v1/renegociar_selecionados
```

**Body:**
```json
{
    "get_id":"145367,145366"//IDs das Faturas (fn_areceber)
}
```

**Response — Sucesso:**
```json
{
    "id_renegociacao": 643,
    "message": "Renegociação incluída com sucesso!<br />",
    "type": "success"
}
```

**Response — Falha:**
```json
{
    "id_renegociacao": 643,
    "message": "",
    "type": "success"
}
```

#### `PUT` 2. Renegociação Wizard (preencher dados obrigatórios)
```
PUT /webservice/v1/fn_renegociacao_wiz/643
```

**Body:**
```json
{
  "id_filial": "1",//Obrigatório
  "id_conta": "174",//Obrigatório
  "id_cliente": "2215",//Obrigatório
  "data_emissao": "11/10/2024",//Obrigatório
  "previsao": "S",//Obrigatório
  "id_carteira_cobranca": "1",//Obrigatório
  "id_condicao_pagamento": "1",//Obrigatório
  "vendedor_renegociacao": "",
  "contrato_renegociacao": "2",//Obrigatório
  "data_vencimento": "11/10/2024",
  "valor_parcelas": "150.00",//Obrigatório
  "valor_acrescimos": "0,00",
  "valor_descontos": "0,00",
  "valor_total": "150.00",//Obrigatório
  "valor_renegociado": "150.00",//Obrigatório
  "acre_juros_multa": "",
  "valor_total_pagar": "150.00",//Obrigatório
  "status": "A",//Obrigatório
  "data_finalizada": "",
  "finalizar": "N"//Obrigatório
}

//Atenção: ele irá abrir uma renegociação tendo títulos ou não
//Utilize, somente para Editação
```

**Response — Sucesso:**
```json
{
    "type": "success",
    "message": "Registro atualizado com sucesso!",
    "id": "643"
}
```

#### `POST` 3. Adicionar título a renegociação
```
POST /webservice/v1/adicionar_titulo_renegociacao
```

**Body:**
```json
{
    "id_renegociacao_aux":"3",//ID da Renegociação
    "get_id":"3"//ID da Fatura (fn_areceber)
}
```

#### `POST` 3. Remover título da renegociação
```
POST /webservice/v1/remover_titulo_renegociacao
```

**Body:**
```json
{
    "id_renegociacao":"3",//ID da Renegociação
    "get_id":"3"//ID da Fatura (fn_areceber)
}
```

#### `POST` 4. Calcula multa/juros dos títulos da renegociação
```
POST /webservice/v1/calcula_juros_multa
```

**Body:**
```json
{
    "id_carteira_cobranca":"1",//Carteira de cobrança (fn_carteira_cobranca)
    "id_condicao_pagamento":"1",//Condições de pagamento (condicoes_pagamento)
    "id":"643"//ID da Renegociação (fn_renegociacao_wiz)
}

//Execute novamente, caso tenha adicionado ou removido títulos da renegociação.
```

**Response — Sucesso:**
```json
{
    "totalFineAndFess": "0,00",
    "dateExpiration": "2024-10-11",
    "message": "",
    "type": "success"
}
```

#### `PUT` 5. Finalizar Renegociação
```
PUT /webservice/v1/fn_renegociacao_wiz/643
```

**Body:**
```json
{
  "id_filial": "1",
  "id_conta": "174",
  "id_cliente": "2215",
  "data_emissao": "11/10/2024",
  "previsao": "S",
  "id_carteira_cobranca": "1",
  "id_condicao_pagamento": "1",
  "vendedor_renegociacao": "",
  "contrato_renegociacao": "2",
  "data_vencimento": "11/10/2024",
  "valor_parcelas": "150.00",
  "valor_acrescimos": "0,00",
  "valor_descontos": "0,00",
  "valor_total": "150.00",
  "valor_renegociado": "150.00",
  "acre_juros_multa": "",
  "valor_total_pagar": "150.00",
  "status": "A",//Mantenha como A
  "data_finalizada": "11/10/2024",//Preencha com a data atual da finalização
  "finalizar": "S"//Altere esse valor para S
}

//Atenção: ele irá abrir uma renegociação tendo títulos ou não
//Utilize, somente para Editação
```

**Response — Sucesso:**
```json
{
    "type": "success",
    "message": "Registro atualizado com sucesso!",
    "id": "643"
}
```

### Transferência entre Almoxarifados

#### `POST` 1. Nova transferência
```
POST /webservice/v1/transf_almox_top
```

**Body:**
```json
{
    "id_almox_saida": "1",//Almoxarifado origem
    "id_filial": "1",//Filial origem
    "id_almox_entrada": "2",//Almoxarifado destino
    "id_filial_entrada": "1",//Filial destino
    "data": "28/11/2024",//Data da abertura da transferência
    "operador": "",//ID Técnico da Operação
    "obs": "Teste"//Observação
}
```

**Response — Exemplo:**
```json
{
    "type": "success",
    "message": "Record successfully inserted!",
    "id": "5",
    "atualiza_campos": [
        {
            "tipo": "i",
            "campo": "id_filial_entrada",
            "valor": "1"
        }
    ]
}
```

#### `POST` 2. Inserir produto na transferência
```
POST /webservice/v1/transf_almox_item
```

**Body:**
```json
{
    "id_patrimonio": "",//ID do Patrimônio
    "id_produto": "43",//ID do Produto
    "id_unidade": "1",//ID da Unidade
    "unidade_sigla": "UND",//Sigla da Unidade
    "qtde": "1.00000",//Quantidade
    "fator_conversao": "1.000000000",//Fator conversão
    "id_transf_almox": "5",//ID da Nova Transferência
    "tipo_produto":"C"//Tipo do produto
}

/* Após cadastrar, já é feito a transferência*/
```

**Response — Exemplo:**
```json
{
    "type": "success",
    "message": "Record successfully inserted!",
    "id": "5"
}
```

#### `POST` 3. Inserir patrimônio na transferência
```
POST /webservice/v1/transf_almox_item
```

**Body:**
```json
{
    "id_patrimonio": "9",//ID do Patrimônio
    "id_produto": "34",//ID do Produto
    "id_unidade": "1",//ID da Unidade
    "unidade_sigla": "UND",//Sigla da Unidade
    "qtde": "1.00000",//Quantidade
    "fator_conversao": "1.000000000",//Fator conversão
    "id_transf_almox": "5",//ID da Nova Transferência
    "tipo_produto":"P"
}

/* Após cadastrar, já é feito a transferência*/
```

**Response — Exemplo:**
```json
{
    "type": "success",
    "message": "Record successfully inserted!",
    "id": "6"
}
```

### Transferência com confirmação

#### `POST` 1. Retornar os almoxarifados do usuário
```
POST /webservice/v1/requisicao_devolucao_material_29200
```

**Body:**
```json
{
    "id_patrimonio": "9",//ID do Patrimônio
    "id_produto": "34",//ID do Produto
    "id_unidade": "1",//ID da Unidade
    "unidade_sigla": "UND",//Sigla da Unidade
    "qtde": "1.00000",//Quantidade
    "fator_conversao": "1.000000000",//Fator conversão
    "id_transf_almox": "5",//ID da Nova Transferência
    "tipo_produto":"P"
}

/* Após cadastrar, já é feito a transferência*/
```

#### `POST` 2. Nova transferência com confirmação
```
POST /webservice/v1/requisicao_devolucao_material
```

**Body:**
```json
{
    "id_funcionario": "1",//ID do Funcionário (funcionarios)
    "id_almox_origem": "1",//ID do Almoxarifado de Origem (almox)
    "id_filial_origem": "",//ID da Filial de Origem (filial)
    "id_funcionario_destino": "2",//ID do Funcionário (funcionarios)
    "id_almox_destino": "3",//ID do Almoxarifado de Origem (almox)
    "id_filial_destino": "",//ID da Filial de Origem (filial)
    "data": "01/11/2024",//Data da criação
    "data_confirmacao": "",//Data da confirmação (não preencher)
    "observacao": "",//Observação
    "status": "1"//Status da Transferência (Pro padrão 1, Valores: 1=Aberta, 2=Aguardando Confirmação, 3=Confirmada, 4=Cancelado)
}
```

#### `POST` 3. Inserir produto na transferência com conf.
```
POST /webservice/v1/itens_requisicao_devolucao_material
```

**Body:**
```json
{
    "id_requisicao_devolucao_material": "2",//ID da Transferência
    "id_produto": "35",//ID do Produto que não é patrimônio (produtos)
    "id_unidade": "1",//ID de Unidades do produto (produtos_unidades)
    "qtd": "1",//Quantidade de saída do produto
    "fator_conversao": "1.000000000",//Fator conversão do produto
    "tipo_produto": "P"//Tipo do Produto (oculto) - Consumo,Comercio e etc...
}
```

#### `POST` 3. Inserir patrimônio na transferência com conf.
```
POST /webservice/v1/itens_requisicao_devolucao_material
```

**Body:**
```json
{
    "id_requisicao_devolucao_material": "2",//ID da Transferência
    "id_patrimonio": "1",//ID de Patrimônio
    "id_produto": "35",//ID do Produto que não é patrimônio (produtos)
    "id_unidade": "1",//ID de Unidades do produto (produtos_unidades)
    "qtd": "1",//Quantidade de saída do produto
    "fator_conversao": "1.000000000",//Fator conversão do produto
    "tipo_produto": "P"//Tipo do Produto (oculto) - Consumo,Comercio e etc...
}
```

#### `POST` 4. Encaminhar transferência para confirmação
```
POST /webservice/v1/botaoAjax_29158
```

**Body:**
```json
{
    "get_id":"3"//ID da Transferência com confirmação.
}
```

#### `POST` 5. Confirmar transferência para confirmação
```
POST /webservice/v1/botaoAjax_29160
```

**Body:**
```json
{
    "get_id":"3"//ID da Transferência com confirmação.
}

/*
Para confirmar a Transferência, é necessário o colaborador de destino
*/
```

### Finalizar Wizard

#### `GET` Produto (listar)
```
GET /webservice/v1/su_oss_mov_comodato_wiz
```

**Body:**
```json
{
"qtype": "movimento_produtos.id_oss_chamado",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "movimento_produtos.id",
"sortorder": "desc",
"grid_param":"[{\"TB\":\"movimento_produtos.status_comodato\", \"OP\" : \"=\", \"P\" : \"E\"},{\"TB\":\"movimento_produtos.id_produto\", \"OP\" : \"=\", \">=\" : \"1\"}]"
}
```

#### `POST` Produto (inserir)
```
POST /webservice/v1/su_oss_mov_comodato_wiz
```

**Body:**
```json
{
  "id_oss_mensagem": "",
  "id_saida": "",
  "id_oss_chamado": "4",//Obrigatório
  "id_contrato": "1",//Obrigatório
  "id_login": "",
  "id_patrimonio": "",
  "id_produto": "5",//Obrigatório
  "descricao": "",
  "data": "21/06/2024",//Obrigatório
  "id_unidade": "1",//Obrigatório
  "id_almox": "1",//Obrigatório
  "filial_id": "1",//Obrigatório
  "qtde_saida": "1",//Obrigatório
  "valor_unitario": "0.10",//Obrigatório
  "pcomissao": "",
  "pdesconto": "",
  "vdesconto": "",
  "valor_total": "0.10",//Obrigatório
  "patrimonio": "",
  "mac": "",
  "numero_serie": "",
  "numero_patrimonial": "",
  "garantia_oss": "",
  "id_terceiro_oss": "",
  "id_su_oss_kit_equipamento": "",
  "id_classificacao_tributaria": "1",//Obrigatório
  "tipo": "C",//Obrigatório
  "estoque": "S",//Obrigatório
  "unidade_sigla": "UND",//Obrigatório
  "fator_conversao": "1",//Obrigatório
  "tipo_produto": "",
  "status_comodato": "E",//Obrigatório
  "status_patrimonio": "",
  "ultima_situacao_patrimonio": "",
  "id_pedido_os": ""
}
```

#### `PUT` Produto (inserir)
```
PUT /webservice/v1/su_oss_mov_produto/24
```

**Body:**
```json
{
  "id_oss_mensagem": "",
  "id_saida": "",
  "id_oss_chamado": "4",
  "id_contrato": "1",
  "id_login": "",
  "id_patrimonio": "",
  "id_produto": "5",
  "descricao": "Teste",//Alterando esse campo
  "data": "21/06/2024",
  "id_unidade": "1",
  "id_almox": "1",
  "filial_id": "1",
  "qtde_saida": "1",
  "valor_unitario": "0.10",
  "pcomissao": "",
  "pdesconto": "",
  "vdesconto": "",
  "valor_total": "0.10",
  "patrimonio": "",
  "mac": "",
  "numero_serie": "",
  "numero_patrimonial": "",
  "garantia_oss": "",
  "id_terceiro_oss": "",
  "id_su_oss_kit_equipamento": "",
  "id_classificacao_tributaria": "1",
  "tipo": "C",
  "estoque": "S",
  "unidade_sigla": "UND",
  "fator_conversao": "1",
  "tipo_produto": "",
  "status_comodato": "E",
  "status_patrimonio": "",
  "ultima_situacao_patrimonio": "",
  "id_pedido_os": ""
}
```

#### `DELETE` Produto (deletar)
```
DELETE /webservice/v1/su_oss_mov_produto/24
```

#### `GET` Patrimônio (listar)
```
GET /webservice/v1/su_oss_mov_comodato_wiz
```

**Body:**
```json
{
"qtype": "movimento_produtos.id_oss_chamado",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "movimento_produtos.id",
"sortorder": "desc",
"grid_param":"[{\"TB\":\"movimento_produtos.status_comodato\", \"OP\" : \"=\", \"P\" : \"E\"},{\"TB\":\"movimento_produtos.id_patrimonio\", \"OP\" : \"=\", \">=\" : \"1\"}]"
}
```

#### `POST` Patrimônio (inserir)
```
POST /webservice/v1/su_oss_mov_comodato_wiz
```

**Body:**
```json
{
  "id_oss_mensagem": "",
  "id_saida": "",
  "id_oss_chamado": "4",//Obrigatório
  "id_contrato": "1",//Obrigatório
  "id_login": "",
  "id_patrimonio": "",//Obrigatório
  "id_produto": "5",//Obrigatório
  "descricao": "",
  "data": "21/06/2024",//Obrigatório
  "id_unidade": "1",//Obrigatório
  "id_almox": "1",//Obrigatório
  "filial_id": "1",//Obrigatório
  "qtde_saida": "1",//Obrigatório
  "valor_unitario": "0.10",//Obrigatório
  "pcomissao": "",
  "pdesconto": "",
  "vdesconto": "",
  "valor_total": "0.10",//Obrigatório
  "patrimonio": "",//Obrigatório
  "mac": "",//Obrigatório - Caso não inserir, ficara oculto na interface
  "numero_serie": "",
  "numero_patrimonial": "",//Obrigatório
  "garantia_oss": "",
  "id_terceiro_oss": "",
  "id_su_oss_kit_equipamento": "",
  "id_classificacao_tributaria": "1",//Obrigatório
  "tipo": "C",//Obrigatório
  "estoque": "S",//Obrigatório
  "unidade_sigla": "UND",//Obrigatório
  "fator_conversao": "1",//Obrigatório
  "tipo_produto": "",//Obrigatório - Caso não inserir, ficara oculto na interface
  "status_comodato": "E",//Obrigatório
  "status_patrimonio": "",//Obrigatório
  "ultima_situacao_patrimonio": "",
  "id_pedido_os": ""
}
```

#### `PUT` Patrimônio (inserir)
```
PUT /webservice/v1/su_oss_mov_comodato_wiz/22
```

**Body:**
```json
{
  "id_oss_mensagem": "",
  "id_saida": "",
  "id_oss_chamado": "4",
  "id_contrato": "1",
  "id_login": "",
  "id_patrimonio": "",
  "id_produto": "5",
  "descricao": "Teste API",//Alterando esse campo
  "data": "21/06/2024",
  "id_unidade": "1",
  "id_almox": "1",
  "filial_id": "1",
  "qtde_saida": "1",
  "valor_unitario": "0.10",
  "pcomissao": "",
  "pdesconto": "",
  "vdesconto": "",
  "valor_total": "0.10",
  "patrimonio": "",
  "mac": "",
  "numero_serie": "",
  "numero_patrimonial": "",
  "garantia_oss": "",
  "id_terceiro_oss": "",
  "id_su_oss_kit_equipamento": "",
  "id_classificacao_tributaria": "1",
  "tipo": "C",
  "estoque": "S",
  "unidade_sigla": "UND",
  "fator_conversao": "1",
  "tipo_produto": "",
  "status_comodato": "E",
  "status_patrimonio": "",
  "ultima_situacao_patrimonio": "",
  "id_pedido_os": ""
}
```

#### `DELETE` Patrimônio (deletar)
```
DELETE /webservice/v1/su_oss_mov_comodato_wiz/22
```

#### `GET` Serviços (listar)
```
GET /webservice/v1/su_oss_mov_servico_wiz
```

**Body:**
```json
{
    "qtype": "movimento_produtos.id_oss_chamado",
    "query": "1",
    "oper": ">=",
    "page": "1",
    "rp": "1000",
    "sortname": "movimento_produtos.id",
    "sortorder": "desc"
}
```

#### `POST` Serviços (inserir)
```
POST /webservice/v1/su_oss_mov_servico_wiz
```

**Body:**
```json
{
    "id_oss_chamado": "3788",//ID da Ordem de Serviço *Obrigatório
    "descricao": "Instalação Na Fibra (Incluso o Roteador)",//Descrição serviço *Obrigatório
    "data": "15/04/2025",//Data do serviço *Obrigatório
    "id_unidade": "13",//ID da Unidade (produtos_unidades) *Obrigatório
    "qtde_saida": "1.000000000",//Quantidade de saída *Obrigatório
    "valor_unitario": "225.000000000",//Valor unitário *Obrigatório
    "valor_total": "225.00",//Valor total *Obrigatório
    "id_terceiro_oss": "",//ID do Terceiro (fornecedor)

// Canpos ocultos
// Campos do produto em Sistema>Cadastros>Produtos
    "id_produto": "13",//ID do Produto (produtos)
    "id_classificacao_tributaria": "1",//ID de Classificação Fiscal - Aba Planejamento>Classificação fiscal de saída *Obrigatório
    "tipo": "S",//Tipo: Valores: C=Comercio, S=Serviço, F=Fabricação, M=Matéria prima, P=Patrimônio, O=Consumo *Obrigatório
    "estoque": "S",//Controla estoque? S=Sim, N=Não *Obrigatório
    "filial_id": "1",//ID da Filial
    "unidade_sigla": "SER",//Sigla da Unidade (unidades)
    "fator_conversao": "1.000000000",//Fator de conversão *Obrigatório
    "garantia_oss": "N",
    "tipo_produto": "S"//Valor padrão S
}
```

#### `PUT` Serviços (inserir)
```
PUT /webservice/v1/su_oss_mov_servico_wiz/{id_do_su_oss_mov_servico_wiz}
```

**Body:**
```json
{
    "id_oss_chamado": "3788",
    "descricao": "Instalação Na Fibra (Incluso o Roteador)",
    "data": "15/04/2025",
    "id_unidade": "13",
    "qtde_saida": "1.000000000",
    "valor_unitario": "225.000000000",
    "valor_total": "225.00",
    "id_terceiro_oss": "",
    "id_produto": "13",
    "id_classificacao_tributaria": "1",
    "tipo": "S",
    "estoque": "S",
    "filial_id": "1",
    "unidade_sigla": "SER",
    "fator_conversao": "1.000000000",
    "garantia_oss": "N",
    "tipo_produto": "S"
}
```

#### `DELETE` Serviços (deletar)
```
DELETE /webservice/v1/su_oss_mov_servico_wiz/{id_do_su_oss_mov_servico_wiz}
```

#### `GET` Anexos (listar)
```
GET /webservice/v1/su_oss_chamado_arquivos_wiz
```

**Body:**
```json
{
    "qtype": "su_oss_chamado_arquivos.id_oss_chamado",
    "query": "13229",
    "oper": "=",
    "page": "1",
    "rp": "1000",
    "sortname": "su_oss_chamado_arquivos.id",
    "sortorder": "desc"
}
```

#### `POST` Anexos (inserir)
```
POST /webservice/v1/su_oss_chamado_arquivos_wiz
```

**Body:**
```json
  id_oss_chamado = 13229  // ID da OS
  descricao = Imagem teste  // Descrição da imagem
  local_arquivo =   // Destino do arquivo
  classificacao_arquivo = P  // Valor P=Padrão
```

#### `DELETE` Anexos (deletar)
```
DELETE /webservice/v1/su_oss_chamado_arquivos_wiz/{id_do_arquivo}
```

## 🔘 Botões

### Cadastros

#### `POST` Enviar SMS
```
POST /webservice/v1/botaoAjax_22282
```

**Body:**
```json
{
  "id_gateway": "",//ID Gateway
  "id_gateway_label": "",//Descricao Gateway
  "mensagem": "",//Mensagem
  "remetente": "",//Nome Remetente
  "celular": "",//Celular
  "id_cliente": ""//ID do Cliente (cliente)
}
```

#### `POST` Enviar notificação push
```
POST /webservice/v1/botao_rel_26658
```

**Body:**
```json
{
  "titulo": "",//Título da Mensagem
  "mensagem": "",//Descrição da Mensagem
  "id_cliente": ""//ID do Cliente (cliente)
}
```

#### `POST` Visualizar Arquivo (base64)
```
POST /webservice/v1/cliente_arquivo
```

**Body:**
```json
{
    "id":"291"//ID do Arquivo
}
```

#### `GET` Consulta de crédito
```
GET /webservice/v1/consulta_spc_serasa
```

**Body:**
```json
{
    "qtype": "consulta_spc_serasa.id_cliente",
    "query": "3560",
    "oper": "=",
    "page": "1",
    "rp": "20",
    "sortname": "consulta_spc_serasa.id",
    "sortorder": "asc"
}
/*
Obrigatório ter no mínio uma integração de crédito dos listados abaixo:

- Connect S.A
- Crédito na medida
- SOAWebService

Esse botão fica localizado no seguinte local:
1. Sistema
2. Cadastros
3. Clientes
4. Selecione um Cliente
5. Análise de crédito
6. Consulta de crédito
*/
```

**Response — Exemplo:**
```json
{
    "id": "80",
    "data_hora_consulta": "2024-09-02 00:00:00",
    "id_cliente": "3560",
    "total_ocorrencias": "0",
    "valor_total": "0.00",
    "tipo_consulta": "Pessoa Fisica",
    "id_lead": "0"
}
```

#### `POST` Ativar contrato
```
POST /webservice/v1/cliente_contrato_ativar_cliente
```

**Body:**
```json
{
    "id_contrato": "12"//ID do Contrato
}
```

#### `POST` Cancelar contrato e financeiro não vencido
```
POST /webservice/v1/desativar_cancelar_financeiro_nao_vencido
```

**Body:**
```json
{
  "id_contrato": "2341",//ID do Contrato
  "data_cancelamento": "01/01/2025",//Data do cancelamento
  "motivo_cancelamento": "1",//ID do Motivo de canc.
  "obs_cancelamento": "teste api"//Observação
}
```

#### `POST` Negativar o Contrato
```
POST /webservice/v1/negativar_bloquear
```

**Body:**
```json
{
    "id": "2294",//ID do Contrato
    "id_cliente": "3"//ID de Cliente
}
```

#### `POST` Aguardando Assinatura (AA)
```
POST /webservice/v1/cliente_contrato_23529
```

**Body:**
```json
{
"id_contrato" : "10"//ID do Contrato
}
```

#### `POST` Liberar Manualmente (A)
```
POST /webservice/v1/cliente_contrato_15464
```

**Body:**
```json
{
"id_contrato" : "10"//ID do Contrato
}
```

#### `POST` Desbloqueio confiança
```
POST /webservice/v1/desbloqueio_confianca
```

**Body:**
```json
{
"id" : "1"//ID do Contrato
}
```

#### `POST` Financeiro em atraso (FA)
```
POST /webservice/v1/cliente_contrato_15463
```

**Body:**
```json
{
"id_contrato" : "10"//ID do Contrato
}
```

#### `POST` Bloqueio Manual (CM)
```
POST /webservice/v1/cliente_contrato_15300
```

**Body:**
```json
{
    "id_contrato": "10" //ID do Contrato
}
```

#### `POST` Liberar temporariamente
```
POST /webservice/v1/cliente_contrato_btn_lib_temp_24722
```

**Body:**
```json
{
"get_id" : ""//ID do Contrato
}
```

#### `POST` Liberar da redução de velocidade
```
POST /webservice/v1/liberacao_reducao_contrato_29157
```

**Body:**
```json
{
"get_id" : ""//ID do Contrato
}
```

#### `POST` Gerar Financeiro
```
POST /webservice/v1/gerar_financeiro_contrato_15314
```

**Body:**
```json
{
    "id_contrato" : "",//ID do Contrato
    "tipo" : "",//ID do Tipo de cobranca
    "id_cliente" : "",//ID do Cliente
    "id_tipo_documento":""//ID do Tipo documento
}
```

#### `POST` Imprimir Contrato
```
POST /webservice/v1/cliente_contrato_imprimir_contrato_17678
```

**Body:**
```json
{
    "id" : ""//ID do Contrato
}
```

#### `POST` Imprimir termo
```
POST /webservice/v1/botao_rel_28088
```

**Body:**
```json
{
    "id" : ""//ID do Termo
}
```

#### `POST` Gerar documento de assinatura digital
```
POST /webservice/v1/gerar_documento_assinatura_digital
```

**Body:**
```json
{
    "id_contrato":"20" // ID do contrato
}
```

#### `POST` Reenviar link de assinatura digital
```
POST /webservice/v1/reenviar_link_assnatura_digital
```

**Body:**
```json
{
    "id_contrato":"20" // ID do contrato
}
```

#### `GET` Produtos do plano
```
GET /webservice/v1/vd_contratos_produtos
```

**Body:**
```json
{
  "qtype" : "vd_contratos_produtos.id_vd_contrato",
  "query" : "210",//ID do Plano de Venda que vem do contrato
  "oper" : "=",
  "page" : "1",
  "rp" : "20"
}
```

**Response — Exemplo:**
```json
{
    "page": "1",
    "total": "2",
    "registros": [
        {
            "descricao_plano_valor_1": "0.00",
            "descricao_plano_valor_2": "0.00",
            "fixar_ip": "0",
            "tipo_desconto": "V",
            "desconto_percentual": "0.00",
            "repetir": "V",
            "id": "1316",
            "tipo": "I",
            "id_plano": "108",
            "id_vd_contrato": "210",
            "id_produto": "0",
            "qtde": "1",
            "valor_unit": "69.900000000",
            "descricao": "",
            "id_contrato": "0",
            "obs": "",
            "valor_ate_vencimento": "0.00",
            "qtde_repeticoes_desconto_produto": "0",
            "valor_desconto_produto": "0.00",
            "ultima_atualizacao": "0000-00-00 00:00:00",
            "id_tipo_documento": "0"
        },
        {
            "descricao_plano_valor_1": "0.00",
            "descricao_plano_valor_2": "0.00",
            "fixar_ip": "0",
            "tipo_desconto": "V",
            "desconto_percentual": "0.00",
            "repetir": "V",
            "id": "666",
            "tipo": "I",
            "id_plano": "116",
            "id_vd_contrato": "210",
            "id_produto": "0",
            "qtde": "1",
            "valor_unit": "120.000000000",
            "descricao": "",
            "id_contrato": "0",
            "obs": "",
            "valor_ate_vencimento": "110.00",
            "qtde_repeticoes_desconto_produto": "0",
            "valor_desconto_produto": "0.00",
            "ultima_atualizacao": "2024-01-19 17:57:19",
            "id_tipo_documento": "603"
        }
    ]
}
```

#### `GET` Produtos do contrato
```
GET /webservice/v1/vd_contratos_produtos
```

**Body:**
```json
{
  "qtype" : "vd_contratos_produtos.id_contrato",
  "query" : "4409",//ID do Contrato
  "oper" : "=",
  "page" : "1",
  "rp" : "20"
}
```

**Response — Exemplo:**
```json
{
    "page": "1",
    "total": "1",
    "registros": [
        {
            "descricao_plano_valor_1": "",
            "descricao_plano_valor_2": "",
            "fixar_ip": "0",
            "tipo_desconto": "V",
            "desconto_percentual": "",
            "repetir": "V",
            "id": "1367",
            "tipo": "I",
            "id_plano": "44",
            "id_vd_contrato": "0",
            "id_produto": "0",
            "qtde": "1",
            "valor_unit": "139.900000000",
            "descricao": "",
            "id_contrato": "4409",
            "obs": "",
            "valor_ate_vencimento": "0.00",
            "qtde_repeticoes_desconto_produto": "",
            "valor_desconto_produto": "",
            "ultima_atualizacao": "2024-06-24 16:42:41",
            "id_tipo_documento": "0"
        }
    ]
}
```

#### `GET` Produtos por Contrato 1
```
GET /webservice/v1/view_vd_contratos_produtos_gen
```

**Body:**
```json
{
	"qtype": "view_vd_contratos_produtos_gen.cliente_contrato_id",
	"query": "2233",//ID do Contrato
	"oper": "=",
	"page": "1",
	"rp": "17",
	"sortname": "view_vd_contratos_produtos_gen.id",
	"sortorder": "desc"
}
```

**Response — Exemplo:**
```json
{
    "page": "1",
    "total": "3",
    "rows": [
        {
            "id": "30",
            "cell": [
                "30",
                "Locação ONU",
                "",
                "Cabo RJ45 Azul",
                "1",
                "20,00",
                "20,00",
                "",
                "",
                "20,00",
                "20,00",
                "Plano",
                "2233",
                "",
                "0"
            ]
        },
        {
            "id": "29",
            "cell": [
                "29",
                "Fibra__300_Megas (SVA)",
                "",
                "Roteador 2023",
                "1",
                "39,00",
                "39,00",
                "",
                "",
                "39,00",
                "39,00",
                "Plano",
                "2233",
                "",
                "0"
            ]
        },
        {
            "id": "13",
            "cell": [
                "13",
                "Fibra__300_Megas (SCM)",
                "150_MEGA_FIBRA",
                "",
                "1",
                "91,00",
                "91,00",
                "",
                "",
                "91,00",
                "91,00",
                "Plano",
                "2233",
                "",
                "0"
            ]
        }
    ],
    "tot": [
        "150,00",
        false,
        false,
        "150,00"
    ]
}
```

#### `POST` Devolver comodato > Outro almoxarifado
```
POST /webservice/v1/baixar_comodato_23069
```

**Body:**
```json
{
  "id": "",
  "id_almox": "",
  "id_almox_label": "",
  "id_filial_baixa": "",
  "id_filial_baixa_label": ""
}
```

#### `POST` Patrimônio > Devolver > Meu Almoxarifado
```
POST /webservice/v1/baixar_produto_imobilizado
```

**Body:**
```json
{
  "get_id": "62599"//ID do Comodato
}
```

#### `POST` Patrimônio > Devolver > Outro almoxarifado
```
POST /webservice/v1/baixar_produto_imobilizado_outro_almox
```

**Body:**
```json
{
  "id": "62595",//ID do Comodato
  "id_almox":"1"//ID do Almoxarifado, que receberá o produto
}
```

#### `POST` Gerar acréscimos
```
POST /webservice/v1/gerar_acrescimo_25243
```

**Body:**
```json
{
"id" : "1"
}
```

#### `POST` Ativar usuário Playhub
```
POST /webservice/v1/ativar_usuario_playhub
```

**Body:**
```json
{
    "get_id": "22"//ID Usuário TV
}
```

#### `POST` Desativar usuário Playhub
```
POST /webservice/v1/desativar_usuario_playhub
```

**Body:**
```json
{
    "get_id": "22"//ID Usuário TV
}
```

### Entradas

#### `POST` Enviar pedido
```
POST /webservice/v1/enviar_pedido_fornecedor
```

**Body:**
```json
{
    "id":"11" // ID do pedido
}
```

#### `POST` Liberar requisição
```
POST /webservice/v1/liberar_requisicao_compra
```

**Body:**
```json
{
    "get_id":"20" // ID da requisição
}
```

#### `PUT` Cancelar requisição
```
PUT /webservice/v1/requisicao_compra_cancelar/123
```

**Body:**
```json
{
    "descricao_cancelamento": "Cancelamento teste API"
}

//ID 123 é o id da Requisicao de compra
```

#### `POST` Liberar Pedido
```
POST /webservice/v1/liberar_pedido
```

**Body:**
```json
{
    "get_id":"41"//ID de Pedido de Compra
}
```

#### `POST` Cancelar Pedido
```
POST /webservice/v1/pedido_compra_cancelar
```

**Body:**
```json
{
    "id": "2", //ID de Pedido de Compra
    "cancelamento_descricao": "Cancelamento de pedido"//Descrição do cancelamento
}
```

#### `GET` Imprimir
```
GET /webservice/v1/imprimir_pedido_compra
```

**Body:**
```json
{
    "id": "1" // ID do Pedido
}
```

#### `PUT` Cancelar requisição material
```
PUT /webservice/v1/cancelar_requisicao_material/{id_requisicao_material}
```

**Body:**
```json
{
    "data_cancelamento": "14/11/2024", //Data do cancelamento
    "id_mot_cancelamento": "1", //ID do Motivo de cancelamento
    "status": "C", //Status C=Cancelado
    "id_usuario_cancelamento": "1", //ID do Usuario (usuarios)
    "tipo_cancelamento": "API" //Valor padrão = API
}
```

### Saídas

#### `POST` Imprimir Venda
```
POST /webservice/v1/imprimir_venda
```

**Body:**
```json
{
    "id": ""//ID da Venda
}
```

#### `POST` Imprimir Nota
```
POST /webservice/v1/imprimir_nota
```

**Body:**
```json
{
    "id":"2",//ID da Venda
    "base64":"S"
}
```

#### `POST` Imprimir modelo personalizado
```
POST /webservice/v1/vd_saida_25738
```

**Body:**
```json
{
    "id":"23",//ID da Venda
    "base64":"S"
}
```

#### `GET` Validar e finalizar
```
GET /webservice/v1/validar_finalizar_saida
```

**Body:**
```json
{
    "id_saida": "71887",
    "carteira_cobranca": "7"
}
```

**Response — Sucesso:**
```json
{
    "type": "success",
    "messageReturn": "Ação executada com sucesso",
    "message": "Saida finalizada com sucesso!\n",
    "id_saida": "71887",
    "carteira_cobranca": "7",
    "action": "botaoAjax_24476",
    "fiscal": "N"
}
```

**Response — Falha:**
```json
{
    "type": "error",
    "message": "Saida já está finalizada!"
}
```

#### `GET` Faturar
```
GET /webservice/v1/faturar_pedido_os
```

**Body:**
```json
{
    "get_id":"{{id_pedido}}"//ID do Pedido de venda via O.S
}
```

#### `PUT` Reabrir venda
```
PUT /webservice/v1/vd_saida_alterar/{id_saida}
```

**Body:**
```json
{
    "status": "A",//Status da Venda: A=Aberto, F=Fechado
    "aprova_desconto": "N",//S=Sim, N=Não
    "previsao": ""//S=Sim, N=Não
}
```

### Pagar

#### `POST` Pagar boleto (baixa manual)
```
POST /webservice/v1/fn_apagar_pagamentos_baixas
```

**Body:**
```json
{
  "id_pagar": 1,
  "id_pagar_label": "1",
  "filial": 1,
  "filial_label": "Filial (Alterar)",
  "conta_": 1,
  "conta__label": "Caixa 1",
  "tipo_pagamento": "D",
  "chave_pix": "",
  "cheque_banco": "",
  "cheque_numero": "",
  "cheque_nome": "",
  "cheque_predatado": "",
  "id_conta_class_finan_a": "",
  "id_conta_class_finan_a_label": "",
  "id_conta": 1,
  "data": "09/01/2025",
  "documento": "ddsdas",
  "pdesconto": "",
  "vdesconto": "",
  "pacrescimo": "",
  "vacrescimo": "",
  "valor_parcela": "0,20",
  "debito": "0,20",
  "valor_total_pago": "0,20",
  "historico": "Pag. Salários à pagar - doc.: 1",
  "tipo_p": "T",
  "tipo_lanc": "P",
  "filial_id": 1,
  "id_operador": ""
}
```

#### `POST` Estornar pagamento cancelado
```
POST /webservice/v1/botao_estornar_cancelamento_26200
```

**Body:**
```json
{
    "get_id":"2"//ID do Contas a Pagar
}
```

#### `POST` Aprovar com comentário
```
POST /webservice/v1/fn_apagar_auditoria
```

**Body:**
```json
{
    "status": "A", // Opcional - mas deveria ser obrigatório, status da auditoria, deve aceitar apenas os valores A = Aprovado; R = Reprovado; C = Corrigido;
    "id_fn_apagar": "3000", // Obrigatório - ID do contas a receber
    "tipo": "E", // Opcional - mas deveria ser obrigatório, define o Tipo, deve aceitar apenas os valores I = Interno E = Externo
    "motivo": "INSERIDO VIA API",
    "operador": "", // Opcional - usuário realizando a aprovação/reprovação
    "data_hora": "" // Opcional - data/hora em que a aprovação/reprovação foi realizada
}
```

#### `POST` Reprovar com comentário
```
POST /webservice/v1/fn_apagar_auditoria
```

**Body:**
```json
{
    "status": "R", // Opcional - mas deveria ser obrigatório, status da auditoria, deve aceitar apenas os valores A = Aprovado; R = Reprovado; C = Corrigido;
    "id_fn_apagar": "3000", // Obrigatório - ID do contas a receber
    "tipo": "E", // Opcional - mas deveria ser obrigatório, define o Tipo, deve aceitar apenas os valores I = Interno E = Externo
    "motivo": "INSERIDO VIA API",
    "operador": "", // Opcional - usuário realizando a aprovação/reprovação
    "data_hora": "" // Opcional - data/hora em que a aprovação/reprovação foi realizada
}
```

#### `POST` Baixar Arquivo Pagar
```
POST /webservice/v1/fn_apagar_arquivos_download
```

**Body:**
```json
{
    "id":"{{id_apagar}}"
}
```

#### `DELETE` Estornar pagamento recebido
```
DELETE /webservice/v1/fn_apagar_baixas/{id_movim_finan}
```

### Receber

#### `POST` Get Pix
```
POST /webservice/v1/get_pix
```

**Body:**
```json
{
    "id_areceber":""
}
```

#### `POST` Receber Boleto (baixa manual)
```
POST /webservice/v1/fn_areceber_recebimentos_baixas_novo
```

**Body:**
```json
{
    "filial_id": "",
    "id_receber": "",
    "conta_": "",
    "id_conta": "",
    "tipo_recebimento": "",
    "data": "",
    "documento":"",
    "pdesconto":"",
    "vdesconto":"",
    "id_motivo_desconto":"",
    "pacrescimo":"",
    "vacrescimo": "",
    "valor_parcela": "",
    "credito": "",
    "debito": "",
    "valor_total_recebido": "",
    "historico": "",
    "tipo_r":"", 
    "previsao": "",
    "tipo_lanc": ""
}
```

#### `POST` Enviar boleto por e-mail
```
POST /webservice/v1/get_boleto
```

**Body:**
```json
{
    "boletos": "",
    "juro": "",
    "multa": "",
    "atualiza_boleto": "",
    "tipo_boleto": "mail"
}
```

#### `POST` Enviar boleto por sms
```
POST /webservice/v1/get_boleto
```

**Body:**
```json
{
    "boletos": "",
    "juro": "",
    "multa": "",
    "atualiza_boleto": "",
    "tipo_boleto": "sms"
}
```

#### `POST` Segunda via/Download do Boleto
```
POST /webservice/v1/get_boleto
```

**Body:**
```json
{
    "boletos": "",//ID dos Boletos separado por vírgula
    "juro": "",//Juros: S=sim,N=Não
    "multa": "",//Multa: S=Sim, N=Não
    "atualiza_boleto": "S",//Padrão "S"
    "tipo_boleto": "arquivo",//Padrão "arquivo"
    "base64" : "S",//S=Sim (retorna em base64), N=Não (retorna em binário)
    "layout_impressao":""//Layout personalizado de impressão
}
```

#### `POST` Dados da Fatura
```
POST /webservice/v1/get_boleto
```

**Body:**
```json
{
    "boletos": "",
    "juro": "",
    "multa": "",
    "atualiza_boleto": "",
    "tipo_boleto": "dados",
    "base64" : "S",
    "layout_impressao":""
}
```

#### `DELETE` Estornar boleto
```
DELETE /webservice/v1/fn_areceber_baixas/id_recebimento
```

#### `DELETE` Estornar boleto cancelado
```
DELETE /webservice/v1/estornar_cancelamento
```

**Body:**
```json
{
    "get_id": "55" // ID do boleto a ter o cancelamento estornado
}
```

#### `PUT` Cancelar Boletos
```
PUT /webservice/v1/fn_areceber_recebimentos/id_receber
```

**Body:**
```json
{
    "valor_cancelado": "70.00",//Valor a ser cancelado *Obrigatório
    "id_cliente": "125",//ID do Cliente (cliente)*Obrigatório
    "id_mot_cancelamento": "1",//ID do Motivo de cancelamento (fn_areceber_mot_cancelamento) *Obrigatório
    "data_cancelamento": "01/04/2025",//Data do Cancelamento *Obrigatório
    "obs": "Cancelado pela API",//Observação *Opcional
    "status": "",//Status do Contas a Receber: A=Aberto, R=Recebido, P=Parcial, C=Cancelado *Obrigatório
    "cancelar_fatura": "",// (oculto)
    "id_conta": "",//ID da Conta da Receita (oculto) *Opcional
    "documento": "",// Documento (oculto) *Opcional
    "data_emissao": "06/08/2016",// Data de emissão (oculto) *Obrigatório
    "data_vencimento": "21/11/2016",//Data de vencimento (oculto) *Obrigatório
    "valor": "70.00",// Valor do Contas a Receber (oculto) *Obrigatório
    "tipo_recebimento": "Gateway",// Tipo do Recebimento do Contas a Receber (oculto) *Opcional
    "id_carteira_cobranca": "",// ID da Carteira de cobrança (oculto) *Opcional
    "id_saida": "",// ID da Venda (oculto) *Opcional
    "valor_recebido": "",// Valor recebido (oculto) *Opcional 
    "valor_aberto": "",// Valor aberto (oculto) *Opcional
    "liberado": "S",// Liberado? S=Sim, N=Não  (oculto) *Opcional, mas recomendado marcar como S, para não ficar oculto
    "libera_periodo": "",//Libera período? S=Sim, N=Não (oculto) *Opcional
    "cancelamento_id_operador": ""// ID do Usuario da Operacao (usuario) (oculto) *Opcional
}
```

**Response — Retorno Sucesso:**
```json
{
    "dadosCancelamento": {
        "success": false,
        "idVenda": null
    },
    "type": "success",
    "message": "Registro atualizado com sucesso!",
    "id": "372"
}
```

**Response — Retorno já cancelado:**
```json
{
    "type": "error",
    "message": "Parcela já está recebida ou cancelada!<br />"
}
```

#### `PUT` Alterar Boleto
```
PUT /webservice/v1/fn_areceber_altera/id_do_boleto
```

**Body:**
```json
{
  "documento": "",
  "data_emissao": "",
  "data_vencimento": "",
  "id_carteira_cobranca": "",
  "obs": "",
  "tipo_recebimento": "",
  "status": "",
  "aguardando_confirmacao_pagamento": "",
  "nn_boleto": "",
  "pix_txid": "",
  "libera_periodo": "",
  "liberado": "S",//Obrigatório ser S, se não, a fatura fica oculta;
  "titulo_protestado": "",
  "id_remessa_alteracao": "",
  "motivo_alteracao": ""
}
```

### Estoque

#### `GET` Saldo do estoque (listar)
```
GET /webservice/v1/estoque_produtos_almox_filial
```

**Body:**
```json
{
"qtype": "estoque_produtos_almox_filial.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "estoque_produtos_almox_filial.id",
"sortorder": "desc"
}

/* Campos para consulta
//ID
"id",

//Produto
"id_produto":"",

//Nome do Produto
"produto_descricao":"",

//Filial
"id_filial":"",

//Almoxarifado
"id_almox":"",

//Nome do Almoxarifado
"almox_descricao":"",

//Almoxarifado Ativo? S ou N
"almox_ativo":"",

//Saldo do Estoque desse Produto
"saldo":"",

//Tipo de UND do Produto
"produto_unidade":"",

//Controla Estoque?
"produto_controla_estoque":"S",//Sim
"produto_controla_estoque":"N",//Não

//Porcentagem de Comissão
"produto_pcomissao":"",

//Valor por produto
"produto_preco_base":"",

//Classificação fiscal do Produto
"produto_id_class_fiscal":"",

//Tipo do Produto
"produto_tipo":"",

//Produto Ativo?
"produto_ativo":"S",//Sim
"produto_ativo":"N"//Não
*/
```

### Provedor

#### `GET` Transmissores - OLT (listar)
```
GET /webservice/v1/radpop_radio
```

**Body:**
```json
{
"qtype" : "radpop_radio.id",
"query" : "",
"oper" : "=",
"page" : "1",
"rp" : "2000",
"sortname" : "radpop_radio.id",
"sortorder" : "desc"
}

// Gravar o ID
```

#### `GET` Perfil (listar)
```
GET /webservice/v1/radpop_radio_cliente_fibra_perfil
```

**Body:**
```json
{
    "qtype" : "radpop_radio_cliente_fibra_perfil.id",
    "query" : "1",
    "oper" : ">=",
    "page" : "1",
    "rp" : "2000",
    "sortname" : "radpop_radio_cliente_fibra_perfil.id",
    "sortorder" : "desc"
}

// Gravar o ID
```

#### `GET` ONU não autorizada (listar)
```
GET /webservice/v1/fh_onu_nao_autorizadas
```

**Body:**
```json
{
    "qtype" : "fh_onu_nao_autorizadas.id",
    "query" : "1",
    "oper" : ">=",
    "page" : "1",
    "rp" : "2000",
    "sortname" : "fh_onu_nao_autorizadas.id",
    "sortorder" : "desc"
}

// Gravar o ID
```

#### `POST` Autorizar ONU (inserir)
```
POST /webservice/v1/fh_onu_nao_autorizadas_22396
```

**Body:**
```json
{
    "get_id":"1"//Insira o ID de ONU não autorizada
}
```

#### `PUT` Cliente Fibra (editar)
```
PUT /webservice/v1/radpop_radio_cliente_fibra/id_cliente_fibra
```

**Body:**
```json
// Insira os valores gravado de Perfil e Transmissores no PUT do ID do cliente fibra gravado
// ID de Perfil => id_perfil
// ID de Transmissores  => id_transmissor
{
            "id_projeto": "",
            "id_contrato": "",
            "gemport": "",
            "ip_gerencia": "",
            "login_onu_cliente": "",
            "senha_onu_cliente": "",
            "porta_telnet_onu_cliente": "",
            "perfil_onu_cliente": "",
            "script_onu_cliente": "",
            "senorid": "",
            "latitude": "",
            "longitude": "",
            "endereco_padrao_cliente": "",
            "id_condominio": "",
            "bloco": "",
            "apartamento": "",
            "cep": "",
            "endereco": "",
            "numero": "",
            "bairro": "",
            "cidade": "",
            "referencia": "",
            "complemento": "",
            "distancia_onu": "",
            "vlan_dhcp": "",
            "vlan_tr69": "",
            "vlan_iptv": "",
            "vlan_voip": "",
            "vlan_pppoe": "",
            "vlan_outros": "",
            "id_ramal": "",
            "id_onu_unms": "",
            "id_activity": "",
            "radpop_estrutura": "",
            "porta_web_onu_cliente": "",
            "tipo_operacao": "",
            "id_transmissor": "",
            "nome": "",
            "id_caixa_ftth": "",
            "porta_ftth": "",
            "id_login": "",
            "onu_numero": "",
            "service_port": "",
            "onu_tipo": "",
            "ponid": "",
            "mac": "",
            "comandos": "",
            "sinal_rx": "",
            "sinal_tx": "",
            "temperatura": "",
            "voltagem": "",
            "data_sinal": "",
            "id_perfil": "",
            "slotno": "",
            "ponno": "",
            "tipo_autenticacao": "",
            "versao": "",
            "vlan": "",
            "causa_ultima_queda": "",
            "id_hardware": ""
        }
```

#### `POST` Gravar dispositivo (inserir)
```
POST /webservice/v1/botao_gravar_dispositivo_22408
```

**Body:**
```json
{
"id" : "4"//ID de Cliente fibra
}
```

#### `POST` Limpar MAC
```
POST /webservice/v1/radusuarios_25452
```

**Body:**
```json
{
    "get_id":""
}
```

#### `POST` Desconectar Login
```
POST /webservice/v1/desconectar_clientes
```

**Body:**
```json
{
    "id":""
}
```

#### `POST` Gravar no Dispositivo
```
POST /webservice/v1/botao_gravar_dispositivo_22408
```

**Body:**
```json
{
    "id":""
}
```

#### `POST` Visualizar Script
```
POST /webservice/v1/radpop_radio_cliente_fibra_22407
```

**Body:**
```json
{
    "id":""
}
```

#### `POST` Excluir Dispositivo
```
POST /webservice/v1/botao_excluir_dispositivo_22434
```

**Body:**
```json
{
    "id":""//ID do Cliente Fibra (ONU)
}
```

#### `POST` Sincronizar ONU
```
POST /webservice/v1/sincronizar_olt_22397
```

**Body:**
```json
{
    "transmissor":"2"//ID do Transmissor
}
```

#### `POST` Gravar na ONU
```
POST /webservice/v1/radpop_radio_cliente_fibra_24700
```

**Body:**
```json
{
    "id":""//ID Cliente Fibra
}
```

#### `POST` Alterar credenciais no dispositivo
```
POST /webservice/v1/radpop_radio_cliente_fibra_22952
```

**Body:**
```json
{
    "id":""//ID Cliente Fibra
}
```

#### `POST` Resetar ONU
```
POST /webservice/v1/radpop_radio_cliente_fibra_24699
```

**Body:**
```json
{
    "id":""//ID Cliente Fibra
}
```

#### `POST` Visualizar Script ONU
```
POST /webservice/v1/radpop_radio_cliente_fibra_24701
```

**Body:**
```json
{
    "id":""//ID Cliente Fibra
}
```

#### `POST` Reboot ONU
```
POST /webservice/v1/radpop_radio_cliente_fibra_26379
```

**Body:**
```json
{
    "id":""//ID Cliente Fibra
}
```

#### `POST` Libera acesso web
```
POST /webservice/v1/radpop_radio_cliente_fibra_28120
```

**Body:**
```json
{
    "id":""//ID Cliente Fibra
}
```

#### `POST` Potência/Resumo ONU
```
POST /webservice/v1/botao_rel_22991
```

**Body:**
```json
{
    "id":""
}
```

#### `POST` Enviar dados acs wifi - Wifi
```
POST /webservice/v1/botaoAjax_30774
```

**Body:**
```json
{
    "id":"1"
}
```

### InMap

#### `POST` Viabilidade Técnica por CEP
```
POST /webservice/v1/viabilidade_tecnica
```

**Body:**
```json
{
   "endereco" : "",
   "numero" : "",
   "bairro" : "",
   "cidade" : "",
   "estado" : "",//obrigatório, estado (SIGLA) do local
   "cep" : ""// CEP do local
}

/*
Para funcionar corretamente é necessário que tenha o módulo do InMap contratato e tenha habilitado a funcionalidade de "Autoviabilidade".
*/
```

#### `POST` Viabilidade Técnica por Coordenadas
```
POST /webservice/v1/viabilidade_tecnica
```

**Body:**
```json
{
   "latitude" : "-16.302805",//obrigatório, latitude do ponto
   "longitude" : "-39.024840"//obrigatório, longitude do ponto
}

/*
Para funcionar corretamente é necessário que tenha o módulo do InMap contratato e tenha habilitado a funcionalidade de "Autoviabilidade".
*/
```

#### `POST` Consultar Região de Manutenção
```
POST /webservice/v1/consultar_regiao_manutencao
```

**Body:**
```json
{
   "latitude" : "-16.302805",//obrigatório, latitude do ponto
   "longitude" : "-39.024840"//obrigatório, longitude do ponto
}
```

### Suporte

#### `POST` Gerar Protocolo
```
POST /webservice/v1/gerar_protocolo_ordem_servico
```

#### `POST` Finalizar com tarefa
```
POST /webservice/v1/su_oss_chamado_fechar
```

**Body:**
```json
{
    //Informações da finalização de OS
    "id_chamado": "",
    "gera_comissao_aux": "",
    "data_inicio": "",
    "data_final": "",
    "id_resposta": "",
    "mensagem": "",
    "id_tecnico": "",
    "id_equipe": "",
    "gera_comissao": "",
    "status": "F",
    "data": "",
    "id_evento": "",
    "id_su_diagnostico": "",
    "justificativa_sla_atrasado": "",
    "latitude": "",
    "longitude": "",
    "gps_time": "",

    //Informações acerca da tarefa (deve estar de acordo com o endpoint wfl_tarefa)
    "id_processo": "",
    "id_tarefa_atual": "",
    "eh_tarefa_decisao": "",
    "sequencia_atual": "",
    "proxima_sequencia_forcada": "",
    "finaliza_processo_aux": "",
    "id_evento_status": "",
    "id_proxima_tarefa": "",
    "id_proxima_tarefa_aux": ""
}
```

#### `GET` Visualizar arquivo
```
GET /webservice/v1/visualizar_arquivo_os
```

**Body:**
```json
{
    "id": "1"//ID do arquivo
}
```

#### `POST` Analisar
```
POST /webservice/v1/su_oss_chamado_analisar
```

**Body:**
```json
{
  "id_chamado": "",
  "id_setor": "",
  "id_tecnico": "",
  "mensagem": "",
  "data_inicio": "",
  "data_final": "",
  "status": "AN",
  "data": "",
  "id_evento": "",
  "latitude": "",
  "longitude": "",
  "gps_time": ""
}
```

#### `POST` Encaminhar
```
POST /webservice/v1/su_oss_chamado_alterar_setor
```

**Body:**
```json
{
  "id_chamado": "",
  "id_setor": "",
  "id_tecnico": "",
  "id_assunto": "",
  "mensagem": "",
  "status": "EN",
  "data": "",
  "id_evento": "",
  "latitude": "",
  "longitude": "",
  "gps_time": ""
}
```

#### `POST` Encaminhar (alterar setor)
```
POST /webservice/v1/su_oss_chamado_alterar_setor
```

**Body:**
```json
{
  "id_chamado": "",
  "id_setor": "",
  "id_tecnico": "",
  "id_assunto": "",
  "mensagem": "",
  "status": "EN",
  "data": "",
  "id_evento": "",
  "latitude": "",
  "longitude": "",
  "gps_time": ""
}
```

#### `POST` Agendar
```
POST /webservice/v1/su_oss_chamado_reagendar
```

**Body:**
```json
{
  "id_chamado": "",
  "data_agendamento": "",
  "data_agendamento_final": "",
  "id_resposta": "",
  "mensagem": "",
  "id_tecnico": "",
  "id_equipe": "",
  "status": "AG",
  "data": "",
  "id_evento": "",
  "id_compromisso": "",
  "latitude": "",
  "longitude": "",
  "gps_time": ""
}
```

#### `POST` Reagendar
```
POST /webservice/v1/su_oss_chamado_reagendar
```

**Body:**
```json
{
  "id_chamado": "",
  "data_agendamento": "",
  "data_agendamento_final": "",
  "id_resposta": "",
  "mensagem": "",
  "id_tecnico": "",
  "id_equipe": "",
  "status": "RAG",
  "data": "",
  "id_evento": "",
  "id_compromisso": "",
  "latitude": "",
  "longitude": "",
  "gps_time": ""
}
```

#### `POST` Registrar mensagem
```
POST /webservice/v1/su_oss_chamado_mensagem
```

**Body:**
```json
{
   "id_chamado": "",
   "id_evento": "",
   "id_resposta": "",
   "mensagem": "",
   "data_inicio": "",
   "data_final": "",
   "id_tecnico": "",
   "status": "",
   "tipo_cobranca": "",
   "id_evento_status": "",
   "data": "",
   "id_equipe": "",
   "id_proxima_tarefa": "",
   "finaliza_processo": "",
   "latitude": "",
   "longitude": "",
   "gps_time": ""
}
```

#### `POST` Executar
```
POST /webservice/v1/su_oss_chamado_executar
```

**Body:**
```json
{
   "id_chamado": "",
   "id_tarefa_atual": "",
   "eh_tarefa_decisao": "",
   "sequencia_atual": "",
   "proxima_sequencia_forcada": "",
   "finaliza_processo_aux": "",
   "gera_comissao_aux": "",
   "id_processo": "",
   "data_inicio": "",
   "data_final": "",
   "id_resposta": "",
   "mensagem": "",
   "id_tecnico": "",
   "id_equipe": "",
   "gera_comissao": "",
   "status": "EX",
   "data": "",
   "id_evento": "",
   "id_su_diagnostico": "",
   "justificativa_sla_atrasado": "",
   "id_evento_status": "",
   "id_proxima_tarefa": "",
   "id_proxima_tarefa_aux": "",
   "latitude": "",
   "longitude": "",
   "gps_time": ""
}
```

#### `POST` Finalizar
```
POST /webservice/v1/su_oss_chamado_fechar
```

**Body:**
```json
{
   "id_chamado": "",
   "id_tarefa_atual": "",
   "eh_tarefa_decisao": "",
   "sequencia_atual": "",
   "proxima_sequencia_forcada": "",
   "finaliza_processo_aux": "",
   "gera_comissao_aux": "",
   "id_processo": "",
   "data_inicio": "",
   "data_final": "",
   "id_resposta": "",
   "mensagem": "",
   "id_tecnico": "",
   "id_equipe": "",
   "gera_comissao": "",
   "status": "F",
   "data": "",
   "id_evento": "",
   "id_su_diagnostico": "",
   "justificativa_sla_atrasado": "",
   "id_evento_status": "",
   "id_proxima_tarefa": "",
   "id_proxima_tarefa_aux": "",
   "latitude": "",
   "longitude": "",
   "gps_time": ""
}
```

#### `POST` Marcar para reagendamento
```
POST /webservice/v1/su_oss_chamado_reagendamento
```

**Body:**
```json
{
  "id_chamado": 13230,
  "id_resposta": "",
  "mensagem": "Teste",
  "status": "RAG",
  "data": "",
  "id_evento": "",
  "id_compromisso": "",
  "latitude": "",
  "longitude": "",
  "gps_time": "",
  "id_setor": 10,
  "id_tecnico": ""
}
```

#### `POST` Reabrir
```
POST /webservice/v1/su_oss_chamado_reabrir/{id_chamado}
```

**Body:**
```json
{
    "id":"13198",//ID da OS - Obrigatório
    "id_operador": "",//ID do Operador
    "data": "",//Data atual de reabertura
    "id_evento": "",//ID do Evento
    "status": "A",//Obrigatório ser A=Aberto
    "id_tecnico": "",//ID do Técnico vinc. a OS
    "mensagem": ""//Obrigatório
}
```

#### `POST` Transferir atendimento
```
POST /webservice/v1/su_transf_atendimento_26466
```

**Body:**
```json
{
    "id_atendimento": "",//ID do Atendimento (su_ticket)
    "data_transferencia": "",//Data DD/MM/AAAA hh:mm:ss
    "id_departamento_origem": "",//ID do Departamento Origem
    "id_departamento_destino": "",//ID do Departamento Destino
    "id_responsavel_tecnico": ""//ID do Colaborador/Técnico responsável
}
```

#### `POST` Gerar Protocolo
```
POST /webservice/v1/gerar_protocolo_atendimento
```

#### `POST` Novo
```
POST /webservice/v1/su_mensagens
```

**Body:**
```json
{
   "id_cliente": "",
   "assunto_ticket": "",
   "mensagem_ticket": "",
   "titulo": "",
   "data": "",
   "id_resposta": "",
   "mensagem": "",
   "visibilidade_mensagens": "",
   "operador": "",
   "su_status": "N",
   "id_evento_status": "",
   "id_ticket": "",
   "existe_pendencia_externa": "",
   "id_su_diagnostico": "",
   "ultima_atualizacao": ""
}
```

#### `POST` Pendente
```
POST /webservice/v1/su_mensagens
```

**Body:**
```json
{
   "id_cliente": "",
   "assunto_ticket": "",
   "mensagem_ticket": "",
   "titulo": "",
   "data": "",
   "id_resposta": "",
   "mensagem": "",
   "visibilidade_mensagens": "",
   "operador": "",
   "su_status": "P",
   "id_evento_status": "",
   "id_ticket": "",
   "existe_pendencia_externa": "",
   "id_su_diagnostico": "",
   "ultima_atualizacao": ""
}
```

#### `POST` Em Progresso
```
POST /webservice/v1/su_mensagens
```

**Body:**
```json
{
   "id_cliente": "",
   "assunto_ticket": "",
   "mensagem_ticket": "",
   "titulo": "",
   "data": "",
   "id_resposta": "",
   "mensagem": "",
   "visibilidade_mensagens": "",
   "operador": "",
   "su_status": "EP",
   "id_evento_status": "",
   "id_ticket": "",
   "existe_pendencia_externa": "",
   "id_su_diagnostico": "",
   "ultima_atualizacao": ""
}
```

#### `POST` Solucionado
```
POST /webservice/v1/su_mensagens
```

**Body:**
```json
{
   "id_cliente": "",
   "assunto_ticket": "",
   "mensagem_ticket": "",
   "titulo": "",
   "data": "",
   "id_resposta": "",
   "mensagem": "",
   "visibilidade_mensagens": "",
   "operador": "",
   "su_status": "S",
   "id_evento_status": "",
   "id_ticket": "",
   "existe_pendencia_externa": "",
   "id_su_diagnostico": "",
   "ultima_atualizacao": ""
}
```

#### `POST` Cancelado
```
POST /webservice/v1/su_mensagens
```

**Body:**
```json
{
   "id_cliente": "",
   "assunto_ticket": "",
   "mensagem_ticket": "",
   "titulo": "",
   "data": "",
   "id_resposta": "",
   "mensagem": "",
   "visibilidade_mensagens": "",
   "operador": "",
   "su_status": "C",
   "id_evento_status": "",
   "id_ticket": "",
   "existe_pendencia_externa": "",
   "id_su_diagnostico": "",
   "ultima_atualizacao": ""
}
```

### CRM

#### `PUT` Vencemos Simplificado
```
PUT /webservice/v1/crm_negociacoes_simplificado/6
```

**Body:**
```json
{
    "data_vencemos":"19/12/2024",
    "id_responsavel":"1",//ID o Responsável (funcionarios)
    "id_cliente":"7",//ID do Cliente (cliente)
    "id":"6"//ID da Negociação
}
```

#### `PUT` Perdemos
```
PUT /webservice/v1/crm_negociacoes_perdemos_data/7
```

**Body:**
```json
{
    "data_perdemos":"19/12/2024",
    "id_responsavel":"1",//ID de responsável (funcionarios)
    "id_cliente":"5",//ID de Cliente (cliente)
    "id":"7"//ID da Negociação (crm_negociacoes)
}
```

### Ramal SIP

#### `POST` Bloquear/Desbloquear linha SIP
```
POST /webservice/v1/bloquear_desbloquear_sip
```

**Body:**
```json
{
    "get_id": "22"//ID Linha SIP
}
```

## 🧩 Integrações

### Análise de Crédito

#### `GET` Consulta de crédito
```
GET /webservice/v1/consulta_spc_serasa
```

**Body:**
```json
{
    "qtype": "consulta_spc_serasa.id_cliente",
    "query": "3560",
    "oper": "=",
    "page": "1",
    "rp": "20",
    "sortname": "consulta_spc_serasa.id",
    "sortorder": "asc"
}
```

**Response — Exemplo:**
```json
{
    "id": "80",
    "data_hora_consulta": "2024-09-02 00:00:00",
    "id_cliente": "3560",
    "total_ocorrencias": "0",
    "valor_total": "0.00",
    "tipo_consulta": "Pessoa Fisica",
    "id_lead": "0"
}
```

### Rastreador

#### `GET` Veículos (listar)
```
GET /webservice/v1/veiculos
```

**Body:**
```json
{
"qtype": "veiculos.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "veiculos.id",
"sortorder": "desc"
}
```

#### `POST` Veículos (inserir)
```
POST /webservice/v1/veiculos
```

**Body:**
```json
{
  "placa": "23GT23",//Obrigatório
  "descricao": "Carro Sedan Turbo",//Obrigatório
  "reastreador": "",
  "oleo": "200",//Obrigatório
  "id_filial": "",
  "status": "",
  "status_veiculos": "",
  "tara": "",
  "capacidade_kg": "",
  "capacidade_m3": "",
  "tipo_rodado": "03",//Obrigatório
  "tipo_carroceria": "02",//Obrigatório
  "uf_veiculo": "30",//Obrigatório
  "data_aquisicao": ""
}
```

#### `PUT` Veículos (editar)
```
PUT /webservice/v1/veiculos/11
```

**Body:**
```json
{
  "placa": "23GT23",
  "descricao": "Fiat Uno Turbo com Escada",//Alterando esse campo
  "reastreador": "",
  "oleo": "200",
  "id_filial": "",
  "status": "",
  "status_veiculos": "",
  "tara": "",
  "capacidade_kg": "",
  "capacidade_m3": "",
  "tipo_rodado": "03",
  "tipo_carroceria": "02",
  "uf_veiculo": "30",
  "data_aquisicao": ""
}
```

#### `DELETE` Veículos (deletar)
```
DELETE /webservice/v1/veiculos/11
```

#### `GET` Rastreamento (listar)
```
GET /webservice/v1/veiculos_tracker
```

**Body:**
```json
{
"qtype": "veiculos_tracker.id",
"query": "1",
"oper": ">=",
"page": "1",
"rp": "1000",
"sortname": "veiculos_tracker.id",
"sortorder": "desc"
}
```

#### `POST` Rastreamento (inserir)
```
POST /webservice/v1/veiculos_tracker
```

**Body:**
```json
{
  "rastreador": "Sexta-feira Rota 01",//Obrigatório
  "latitude": "",
  "longitude": "",
  "speed": "",
  "gps_time": "",
  "lastupdate": "24/06/2024 17:07:33"//Obrigatório
}
```

#### `PUT` Rastreamento (editar)
```
PUT /webservice/v1/veiculos_tracker/15
```

**Body:**
```json
{
  "rastreador": "Registro 01",//Alterando esse campo
  "latitude": "",
  "longitude": "",
  "speed": "",
  "gps_time": "",
  "lastupdate": "24/06/2024 17:07:33"
}
```

#### `DELETE` Rastreamento (deletar)
```
DELETE /webservice/v1/veiculos_tracker/15
```

### Assinatura Digital (IXC Assina)

#### `POST` Gerar documento de assinatura digital
```
POST /webservice/v1/gerar_documento_assinatura_digital
```

**Body:**
```json
{
    "id_contrato":"20" // ID do contrato
}
```

#### `POST` Reenviar link de assinatura digital
```
POST /webservice/v1/reenviar_link_assnatura_digital
```

**Body:**
```json
{
    "id_contrato":"20" // ID do contrato
}
```

### Notificações

#### `POST` Enviar SMS (botaoAjax_22282)
```
POST /webservice/v1/botaoAjax_22282
```

**Body:**
```json
{
  "id_gateway": "1",
  "id_gateway_label": "Chatmix",
  "mensagem": "Teste",
  "remetente": "",
  "celular": "49988008800",
  "id_cliente": "1"
}
```

#### `POST` Enviar Omnichannel (botaoAjax_22282)
```
POST /webservice/v1/botaoAjax_22282
```

**Body:**
```json
{
  "tipo_envio_mensagem": "omnichannel",//Padrão: omnichannel
  "celular": "4911115555",//Telefone Celular
  "id_cliente": "1",//ID do cliente
  "msg_omnichannel": "24",//ID da Mensagem Omnichannel
  "msg_omnichannel_label": "Teste"// Nome da mensagem
}
```

#### `POST` Enviar push (rel_26658)
```
POST /webservice/v1/botao_rel_26658
```

**Body:**
```json
{
  "titulo": "",
  "mensagem": "",
  "id_cliente": ""
}
```

#### `POST` Enviar boleto por e-mail
```
POST /webservice/v1/get_boleto
```

**Body:**
```json
{
    "boletos": "",
    "juro": "",
    "multa": "",
    "atualiza_boleto": "",
    "tipo_boleto": "mail"
}
```

#### `POST` Enviar boleto por sms
```
POST /webservice/v1/get_boleto
```

**Body:**
```json
{
    "boletos": "",
    "juro": "",
    "multa": "",
    "atualiza_boleto": "",
    "tipo_boleto": "sms"
}
```

### TV

#### `POST` Apptec (inserir)
```
POST /webservice/v1/tv_usuarios
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"apptec",
    "connection_type_tv":"",
    "account_id":"",
    "id_login_plataforma":""
}
```

#### `POST` EiTV (inserir)
```
POST /webservice/v1/tv_usuarios
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"eiTv",
    "connection_type_tv":"",
    "id_vd_contratos_produtos":"",
    "usar_email_principal":"",
    "login":"",
    "senha":"",
    "account_number":"",
    "online":""
}
```

#### `POST` GloboPlay (inserir)
```
POST /webservice/v1/tv_usuarios
```

**Body:**
```json
{
    "plataforma":"globoplay",
    "connection_type_tv":""
}
```

#### `POST` Hub Neo (inserir)
```
POST /webservice/v1/tv_usuarios
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"hubNeo",
    "connection_type_tv":"",
    "account_id":"",
    "usar_email_principal":"",
    "login":"",
    "senha":"",
}
```

#### `POST` Hub Neo - DirectTvGo (inserir)
```
POST /webservice/v1/tv_usuarios
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"hubNeoDirectvGo",
    "connection_type_tv":"",
    "id_vd_contratos_produtos":"",
    "id_login_plataforma":"",
    "account_number":"",
    "online":""
}
```

#### `POST` ITTV (inserir)
```
POST /webservice/v1/tv_usuarios
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"ITTV",
    "connection_type_tv":"",

    "id_vd_contratos_produtos":"",
    "usar_email_principal":"",
    "login":"",
    "senha":""
}
```

#### `POST` Minerva (inserir)
```
POST /webservice/v1/tv_usuarios
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"minerva",
    "connection_type_tv":"",

    "account_id":"",
    "id_login_plataforma":""
}
```

#### `POST` Ministra (inserir)
```
POST /webservice/v1/tv_usuarios
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"ministra",
    "connection_type_tv":"",

    "id_vd_contratos_produtos":"",
    "login":"",
    "senha":"",
    "mac_devices":"",
    "id_dealer":"",
    "version":"",
    "ip":"",
    "online":""
}
```

#### `POST` Ministra - novo (inserir)
```
POST /webservice/v1/tv_usuarios
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"ministrav2",
    "connection_type_tv":"",
    "api":"A",

    "id_vd_contratos_produtos":"",
    "login":"",
    "senha":"",
    "account_number":"",
    "online":""
}
```

#### `POST` MultTV (inserir)
```
POST /webservice/v1/tv_usuarios
```

**Body:**
```json
{
    "plataforma":"multTv",
    "connection_type_tv":"",

    "id_vd_contratos_produtos":"",
    "pin":"",
    "login":"",
    "senha":"",
    "account_number":"",
    "online":""
}
```

#### `POST` NxPlay (inserir)
```
POST /webservice/v1/tv_usuarios
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"NxPlay",
    "connection_type_tv":"",

    "id_vd_contratos_produtos":"",
    "usar_email_principal":"",
    "login":"",
    "senha":""
}
```

#### `POST` Olé TV (inserir)
```
POST /webservice/v1/tv_usuarios
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"oletv",
    "connection_type_tv":"",

    "id_vd_contratos_produtos":"",
    "usar_email_principal":"",
    "login":"",
    "mac_devices":"",
    "account_number":"",
    "id_equipamentos":"",
    "online":""
}
```

#### `POST` Panacess (inserir)
```
POST /webservice/v1/tv_usuarios
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"panaccess",
    "connection_type_tv":"",

    "id_integracao":"",
    "account_id":""
}
```

#### `POST` PlayHub (inserir)
```
POST /webservice/v1/tv_usuarios
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"playhub",
    "api":"",
    "connection_type_tv":"",

    "login":"",
    "senha":"",
    "status_assinante_watch":""
}
```

#### `POST` Smart Tube (inserir)
```
POST /webservice/v1/tv_usuarios
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"SmartTUBE",
    "connection_type_tv":"",

    "account_id":"",
    "pin":"",
    "login":"",
    "senha":"",
    "status_assinante_watch":"",
    "device_limit_id":""
}
```

#### `POST` TelecinePlay (inserir)
```
POST /webservice/v1/tv_usuarios
```

**Body:**
```json
{
    "plataforma":"telecineplay",
    "connection_type_tv":""
}
```

#### `POST` Watch (inserir)
```
POST /webservice/v1/tv_usuarios
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"watch",
    "api":"A",
    "connection_type_tv":"",

    "id_vd_contratos_produtos":"",
    "usar_email_principal":"",
    "login":"",
    "token_assinante_watch":"",
    "status_assinante_watch":""
}
```

#### `POST` Watch/Espn (inserir)
```
POST /webservice/v1/tv_usuarios
```

**Body:**
```json
{
    "plataforma":"watchespn",
    "connection_type_tv":""
}
```

#### `POST` YouCast (inserir)
```
POST /webservice/v1/tv_usuarios
```

**Body:**
```json
{
    "id_contrato":"",
    "plataforma":"youCast",
    "api":"A",
    "connection_type_tv":"",

    "account_id":"",
    "usar_email_principal":"",
    "profile_name":"",
    "pin":"",
    "birthday":"",
    "login":"",
    "senha":"",
    "status_assinante_watch":"",
    "id_portal":"",
    "mac_devices":"",
    "id_dealer":""
}
```

### SVA

#### `POST` Campsoft (inserir)
```
POST /webservice/v1/sva_usuarios
```

**Body:**
```json
{
    "id_contrato":"",//ID do Contrato
    "id_integracao":"",//ID da Integração
    "usar_email":"S",//Usar dados cadastro? S=sim e N=não
    "user":"",//Usuário
    "senha":"",//Senha
    "status_integracao":"",//Status Integração - A=ativo, B=bloqueado, D=desativado
    "user_id":"",//Usuário Integração - Não preencher
    "subscription_id":""//Subscription ID - Não preencher
}
```

#### `POST` GugoTv (inserir)
```
POST /webservice/v1/sva_usuarios
```

**Body:**
```json
{
    "id_contrato": "", //ID do Contrato
    "id_integracao": "", //ID da Integração
    "id_produto_contrato": "", //ID do Produto do Contrato
    "usar_email": "S", //Usar dados cadastro? S=sim e N=não
    "user": "", //Usuário
    "user_id": "" //Usuário Integração - Não preencher
}
```

#### `POST` Hexa (inserir)
```
POST /webservice/v1/sva_usuarios
```

**Body:**
```json
{
    "id_contrato": "", //ID do Contrato
    "id_integracao": "", //ID da Integração
    "id_produto_contrato": "", //ID do Produto do Contrato
    "usar_email": "S", //Usar dados cadastro? S=sim e N=não
    "cnpj_cpf": "", //CNPJ/CPF
    "user": "", //Usuário
    "status_integracao": "", //Status Integração - A=ativo, B=bloqueado, D=desativado
    "msisdn": "" //Telefone
}
```

#### `POST` Music (inserir)
```
POST /webservice/v1/sva_usuarios
```

**Body:**
```json
{
    "id_contrato": "", //ID do Contrato
    "id_integracao": "", //ID da Integração
    "id_produto_contrato": "", //ID do Produto do Contrato
    "usar_email": "S", //Usar dados cadastro? S=sim e N=não
    "user": "", //Usuário
    "msisdn": "", //Telefone
    "senha": "", //Senha
    "user_id": "" //Usuário Integração - Não preencher
}
```

#### `POST` Skeelo (inserir)
```
POST /webservice/v1/sva_usuarios
```

**Body:**
```json
{
    "id_contrato": "", //ID do Contrato
    "id_integracao": "", //ID da Integração
    "id_produto_contrato": "", //ID do Produto do Contrato
    "usar_email": "S", //Usar dados cadastro? S=sim e N=não
    "cnpj_cpf": "", //CNPJ/CPF - Com pontos e hífen
    "status_integracao": "", //Status Integração - A=ativo, B=bloqueado, D=desativado
    "user_id": "" //Usuário Integração - Não preencher
}
```

### VOIP

#### `POST` Flux (inserir)
```
POST /webservice/v1/voip_sippeers
```

**Body:**
```json
{
    "tarifa":"",//Plano de cobrança
    "id_contrato": "169",//ID do Contrato (Obrigatório)
    "id_integracao": "1",//ID da Integração no IXC (Obrigatório)
    "callerid": "",//Número para binagem
    "name": "014FF",//Ramal
    "secret": "voip@1000",//Senha
    "ativo": "S",//Ativo S=Sim, N=Não (Obrigatório)
    "id_plano_sip": "",//Planos (planos_voip)
    "use_area_code": "N",//Use Area Code S=Sim, N=Não (Obrigatório)

    // Ocultos - Opcionais
    "id_subscriber_integration": "",// ID do Cliente na Integração
    "id_sip": "",//Identificador da linha na plataforma

    // Esses Ocultos se não preencher, retorna 'Erro ao processar'
    "tipo_linha_sip": "N",
    "recharge_settings": "N",
    "dia_fechamento": "0"
}
```

#### `POST` Magnus Billing (inserir)
```
POST /webservice/v1/voip_sippeers
```

**Body:**
```json
{
    "tarifa":"",//Plano de cobrança
    "id_contrato": "169",//ID do Contrato (Obrigatório)
    "id_integracao": "58",//ID da Integração no IXC (Obrigatório)
    "descricao": "",//Descrição
    "accountcode":"",//Código da conta
    "callerid": "",//Número para binagem
    "secret": "voip@1000",//Senha
    "ativo": "S",//Ativo S=Sim, N=Não (Obrigatório)
    "plano_magnus": "",//Plano Magnus (planos_voip)

    // Esses Ocultos se não preencher, retorna 'Erro ao processar'
    "recharge_settings": "N",
    "tipo_linha_sip": "N",
    "use_area_code": "N",
    "dia_fechamento": "0"
}
```

#### `POST` SaperX (inserir)
```
POST /webservice/v1/voip_sippeers
```

**Body:**
```json
{
    "tarifa":"",//Plano de cobrança (tarifas_grupos)
    "id_contrato": "169",//ID do Contrato (Obrigatório)
    "id_integracao": "58",//ID da Integração no IXC (Obrigatório)
    "accountcode":"",//Código da conta
    "name":"",//Ramal (oculto)
    "tipo_linha_sip": "N",//Tipo linha SIP - N=Normal, P=Portabilidade entrada, S=Portabilidade saída (Obrigatório)
    "secret": "voip@1000",//Senha
    "id_perfis_voip":"",//ID do Perfil VOIP (perfis_voip) 
    "ativo": "S",//Ativo S=Sim, N=Não (Obrigatório)
    "use_area_code": "N",//Use Area Code S=Sim, N=Não (Obrigatório - oculto)
    "calllimit":"",//Limite de ligações simultâneas
    "saperx_plano": "0",//Plano id (planos_voip)
    "saperx_plano_inter": "0",//Plano internacional (planos_voip)
    "dia_fechamento": "0",//Dia do fechamento da fatura
    "saperx_plano_desc": "",//Plano descrição
    "saperx_tipo": "0",//Tipo 1=Pré-pago, 0=Pós-pago
    "sapex_plano_tipo": "scm",//Plano tipo, Valores: scm, stfc, customroute
    "rota_personalizada":"",//Rota personalizada (rota_personalizada)
    "saperx_bina": "0",//Bina, 1=Ativa, 0=Inativa
    "saperx_lc": "0",//LC, 1=Sim, 0=Não
    "saperx_ldn": "0",//LDN 1=Sim, 0=Não
    "saperx_ldi":"",//LDI  1=Sim, 0=Não
    "saperx_vc1": "0",//Libera ramal VC1  1=Sim, 0=Não
    "saperx_vc2": "0",//Libera ramal VC2  1=Sim, 0=Não
    "saperx_vc3": "0",//Libera ramal VC3  1=Sim, 0=Não
    "saperx_ativo": "0",//Status (oculto) 1=Ativa, 0=Inativa

    // Esses Ocultos se não preencher, retorna 'Erro ao processar'
    "id_plano_sip": "",//Planos (planos_voip)
    "recharge_settings": "N"
    
}
```

#### `POST` Zeus (inserir)
```
POST /webservice/v1/voip_sippeers
```

**Body:**
```json
{
    "tarifa":"",//Plano de cobrança
    "id_contrato": "169",//ID do Contrato (Obrigatório)
    "id_integracao": "58",//ID da Integração no IXC (Obrigatório)
    "summit_bid_type":"TERMINAL",//Bid Type Valor padrão: TERMINAL 
    "descricao": "",//Descrição
    "callerid": "",//Número para binagem
    "tipo_linha_sip": "N",//Tipo linha SIP - N=Normal, P=Portabilidade entrada, S=Portabilidade saída (Obrigatório)
    "secret": "voip@1000",//Senha
    "id_sip":"4",//ID da Linha na Integração (oculto)
    "id_perfis_voip":"",//ID do Perfil VOIP (perfis_voip) 
    "ativo": "S",//Ativo S=Sim, N=Não (Obrigatório)
    "use_area_code": "N",//Use Area Code S=Sim, N=Não (Obrigatório)
    "plano_zeus": "",//ID do Plano Zeus (planos_voip_zeus)
    "grupo_plano_zeus": "",//ID do Grupo (grupos_voip_zeus)
    "data_ativacao_zeus": "23/05/2024",//Data Ativação
    "vencimento_zeus": "10",//Vencimento (Zeus)
    "limite_creditos_zeus": "0",//Limite de Créditos Ex:(200)
    "tech_prefix_zeus": "",//Tech Prefix, 1111=Não realizar chamadas ao atingir o limite de crédito, 2222=Bloquear chamada em caso de cliente desativado/portado, 5555=Bloquear IP do cliente que por algum motivo entrou na blacklist, 7777=Bloquear o cliente quando o número de tentativas de chamadas LDI ultrapassa o limite de 10 tentativas em um ciclo (30 segundos), 0=Nehuma ação
    "bloquear_ligacoes_vc1_zeus": "N",//Bloquear ligações vc1 zeus, S=Sim, N=Não
    "bloquear_ligacoes_cobrar_zeus": "N",//Bloquear ligações cobrar zeus, S=Sim, N=Não
    "bloquear_ligacoes_ldn_zeus": "N",//Bloquear ligações ldn zeus, S=Sim, N=Não
    "bloquear_ligacoes_ldi_zeus": "N",//Bloquear ligações ldi zeus, S=Sim, N=Não
    "nao_perturbe_zeus": "0",//Não perturbe, S=Sim, N=Não
    "fullcontact":"",//Registro
    "ipaddr":"",//Endereço IP
    "port":"",//Porta
    "regseconds":"",//Tempo de registro
    "useragent":"",//Equipamento
    "nat":"",//Nat, S=Sim, N=Não
    "host":"",//IP
    "contactpermit":"",//ACL Ips permitidos
    "contactdeny":"",//ACL Ips bloqueados

    // Esses Ocultos se não preencher, retorna 'Erro ao processar'
    "id_plano_sip": "",//Planos (planos_voip)
    "recharge_settings": "N",
    "dia_fechamento": "0"
}
```

#### `POST` Summit Networks (inserir)
```
POST /webservice/v1/voip_sippeers
```

**Body:**
```json
{
    "tarifa":"",//Plano de cobrança (tarifas_grupos)
    "id_contrato": "169",//ID do Contrato (Obrigatório)
    "id_integracao": "58",//ID da Integração no IXC (Obrigatório)
    "summit_bid_type":"TERMINAL",//Bid Type Valores: ---,TERMINAL, TRUNK,
    "trunk_summit": "",//TRUNK(s) (oculto)  
    "descricao": "",//Descrição
    "accountcode":"",//Código da conta
    "callerid": "",//Número para binagem
    "name":"",//Ramal
    "comments_summit":"",//Comentário
    "id_perfis_voip":"",//ID do Perfil VOIP (perfis_voip) 
    "ativo": "S",//Ativo S=Sim, N=Não (Obrigatório)
    "particao_assinante_summit": "",//Participação do assinante, Valore: ---, 1=Petropolis (21214), 2=Teresopolis (21303)
    "categoria_summit": "",//Categoria, Valores: ---, TOTAL, NENHUMA, SIPEXTERNO, FIXO
    "plano_summit": "",//ID Plano (planos_voip_summit)
    "data_ativacao_summit": "22/05/2019",//Data ativação
    "vencimento_summit": "",//Vencimento, Valores: 1=Dia 01, 2=Dia 02. 3=Dia 03, 4=Dia 04...até 25=Dia 25
    "centro_custo_summit": "",//Centro custo summit (centro_custo_summit)
    "limite_chamadas_summit": "",//Limite de chamadas
    "licenca_summit": "",//Licensa, Valores: ---, SIP Trunk, Residential/business basic extension
    "terminal_summit": "",//Terminal
    "credential_summit": "",//Credencial
    
    // Esses Ocultos se não preencher, retorna 'Erro ao processar'
    "id_plano_sip": "0",//Planos (planos_voip)
    "recharge_settings": "N",
    "dia_fechamento": "0",
    "tipo_linha_sip": "N",//Tipo linha SIP - N=Normal, P=Portabilidade entrada, S=Portabilidade saída (Obrigatório)
    "use_area_code": "N"//Use Area Code S=Sim, N=Não (Obrigatório)
}
```

#### `POST` Sippulse (inserir)
```
POST /webservice/v1/voip_sippeers
```

**Body:**
```json
{
    "tarifa":"",//Plano de cobrança (tarifas_grupos)
    "id_contrato": "169",//ID do Contrato (Obrigatório)
    "id_integracao": "58",//ID da Integração no IXC (Obrigatório) 
    "descricao": "",//Descrição
    "callerid": "",//Número para binagem
    "name":"",//Ramal
    "tipo_linha_sip": "N",//Tipo linha SIP - N=Normal, P=Portabilidade entrada, S=Portabilidade saída (Obrigatório)
    "id_perfis_voip":"",//ID do Perfil VOIP (perfis_voip) 
    "ativo": "S",//Ativo S=Sim, N=Não (Obrigatório)
    "gravacao_chamada":"",//Gravação de chamada,S=Sim, N=Não
    "calllimit":"",//Limite de ligações simultâneas
    "rtptimeout":"",//RTP Timeout
    "rtpholdtimeout":"",//RTP hold timeout
    "sippulse_dominio": "",//Domínios (sippulse_dominio)
    "profile":"",//Profiles (sippulse_profile)
    "id_revenda_sip_pulse": "",//Revenda (buscar_revendas_sip_pulse)
    "sippulse_rateplanid": "",//ID plano de tarifas (sippulse_rateplan)
    "ddd":"",//DDD
    "ddi":"",//DDI
    "sippulse_city_code": "",//Código da Localidade
    "sippulse_local_area": "",//Sigla da Localidade
    "sippulse_lowCreditNotification": "false",//Notificação saldo baixo (true, false)
    "sippulse_activeIncomingCalls": "false",//Recebimentos de Chamadas (true, false)
    "sippulse_activeOutgoingCalls": "false",//Execução de Chamadas (true, false)
    "sippulse_activatedailystatistics": "false",//Estatísticas do Dia (true, false)
    "sippulse_callsOnlyByIp": "false",//Execução de chamadas somente por IP (true, false)
    "sippulse_daily_quota": "false",//Cota de consumo diário (true, false)
    "sippulse_daily_quota_tipo": "",//Tipo, M=Minutos, V=Valor
    "sippulse_dailyQuotaConsumed": "",//Cota diária consumida (true, false)
    "sippulse_dailyQuotaLimit": "",//Limite de cota diária (true, false)
    
    // Esses Ocultos se não preencher, retorna 'Erro ao processar'
    "summit_bid_type":"TERMINAL",//Bid Type Valores: ---,TERMINAL, TRUNK,
    "id_plano_sip": "0",//Planos (planos_voip)
    "recharge_settings": "N",
    "dia_fechamento": "0",
    "use_area_code": "N"//Use Area Code S=Sim, N=Não (Obrigatório)
}
```

#### `POST` VSC (inserir)
```
POST /webservice/v1/voip_sippeers
```

**Body:**
```json
{
    "tarifa":"",//Plano de cobrança (tarifas_grupos)
    "id_contrato": "169",//ID do Contrato (Obrigatório)
    "id_integracao": "58",//ID da Integração no IXC (Obrigatório) 
    "tipo_linha_sip": "N",//Tipo linha SIP - N=Normal, P=Portabilidade entrada, S=Portabilidade saída (Obrigatório)
    "id_perfis_voip":"",//ID do Perfil VOIP (perfis_voip) 
    "ativo": "S",//Ativo S=Sim, N=Não (Obrigatório)
    "use_area_code": "N",//Use Area Code S=Sim, N=Não (Obrigatório)
    "vsc_id_batch": "",//ID batch
    "vsc_batch": "",//Batch (vsc_batch)
    "vsc_allowcollectcalls": "false",//Allow collect calls
    "vsc_dontuseccforauth": "false",//Remove country code
    "ddi_vsc": "",//DDI
    "ddd_vsc": "",//DDD
    "vsc_idd_prefix": "",//IDD Prefix
    "vsc_ndd_prefix": "",//NDD Prefix
    "vsc_inboundcallslimit": "1",//Inbound Calls limit
    "vsc_outboundcallslimit": "1",//Outbound Calls limit
    "user_code":"",//User code (range_terminais_lista)
    "billing":"",//Billing, Valores: ---, C=Credit, D=Debit, L=Limited
    "recharge_settings": "N",//Recharge Settings, S=Sim, N=Não
    "dia_recarga_padrao":"",//Dia da recarga padrão
    
    // Esses Ocultos se não preencher, retorna 'Erro ao processar'
    "summit_bid_type":"TERMINAL",//Bid Type Valores: ---,TERMINAL, TRUNK,
    "id_plano_sip": "0",//Planos (planos_voip)
    "dia_fechamento": "0" 
}
```

### MVNO

#### `POST` EAI (inserir)
```
POST /webservice/v1/linha_mvno
```

**Body:**
```json
{
  "api": "A",//API - A=Na API e no IXC, I=Apenas no IXC - Obrigatório
  "id_integracao": 2,//ID da Integração - Obrigatório
  "id_contrato": 1474,//ID do contrato (cliente_contrato) - Obrigatório
  "id_customer_mvno": "alterado",//Cliente Mvno
  "id_prod_ixc_mvno": 41,//ID do Produto MVNO (produtos_ixc_mvno)
  "esim": "S",//eSIM - S=Sim, N=Não - Obrigatório
  "simcard": "",//SIM Card
  "portabilidade": "N",//Portabilidade - S=Sim, N=Não - Obrigatório
  "ddd_telefone": 11,//DDD
  "numero_telefone": 5465355223,//Número do telefone
  "status_linha": "BT",//A=Ativo, BR=Bloqueio Roubo, BP=Bloqueio Perda, BP=Bloqueio Parcial, I=Inativo, BI=Bloqueio uso indevido, BT=Bloqueio Total, C=Cancelada, AA=Aguardando Ativação
  "status_portabilidade": "",//A=Aguardando, R=Recusado, CO=Concluído, CA=Cancelado
  "dia_recorrencia": "",//Dia recorrência
  "link_esim": "",//Link eSIM
  "saldo_linha":"GB"//Saldo linha (oculto)
}
```

#### `POST` TGN (inserir)
```
POST /webservice/v1/linha_mvno
```

**Body:**
```json
{
  "api": "A",//API - A=Na API e no IXC, I=Apenas no IXC - Obrigatório
  "id_integracao": 2,//ID da Integração - Obrigatório
  "id_contrato": 1474,//ID do contrato (cliente_contrato) - Obrigatório
  "id_prod_ixc_mvno": 41,//ID do Produto MVNO (produtos_ixc_mvno)
  "esim": "S",//eSIM - S=Sim, N=Não - Obrigatório
  "simcard": "",//SIM Card
  "portabilidade": "N",//Portabilidade - S=Sim, N=Não - Obrigatório
  "ddd_telefone": 11,//DDD
  "numero_telefone": 5465355223,//Número do telefone
  "status_linha": "BT",//A=Ativo, BR=Bloqueio Roubo, BP=Bloqueio Perda, BP=Bloqueio Parcial, I=Inativo, BI=Bloqueio uso indevido, BT=Bloqueio Total, C=Cancelada, AA=Aguardando Ativação
  "status_portabilidade": "",//A=Aguardando, R=Recusado, CO=Concluído, CA=Cancelado
  "dia_recorrencia": "",//Dia recorrência
  "link_esim": "",//Link eSIM
  "saldo_linha":"GB"//Saldo linha (oculto)
}
```

#### `POST` TIP (inserir)
```
POST /webservice/v1/linha_mvno
```

**Body:**
```json
{
  "api": "A",//API - A=Na API e no IXC, I=Apenas no IXC - Obrigatório
  "id_integracao": 2,//ID da Integração - Obrigatório
  "id_contrato": 1474,//ID do contrato (cliente_contrato) - Obrigatório
  "id_prod_ixc_mvno": 41,//ID do Produto MVNO (produtos_ixc_mvno)
  "esim": "S",//eSIM - S=Sim, N=Não - Obrigatório
  "simcard": "",//SIM Card
  "portabilidade": "N",//Portabilidade - S=Sim, N=Não - Obrigatório
  "ddd_telefone": 11,//DDD
  "numero_telefone": 5465355223,//Número do telefone
  "status_linha": "BT",//A=Ativo, BR=Bloqueio Roubo, BP=Bloqueio Perda, BP=Bloqueio Parcial, I=Inativo, BI=Bloqueio uso indevido, BT=Bloqueio Total, C=Cancelada, AA=Aguardando Ativação
  "status_portabilidade": "",//A=Aguardando, R=Recusado, CO=Concluído, CA=Cancelado
  "dia_recorrencia": "",//Dia recorrência
  "link_esim": "",//Link eSIM
  "id_contrato_integracao":"213",//ID Contrato na Integração
  "saldo_linha":"GB"//Saldo linha (oculto)
}
```

#### `POST` Brázmovel (inserir)
```
POST /webservice/v1/linha_mvno
```

**Body:**
```json
{
  "api": "A",//API - A=Na API e no IXC, I=Apenas no IXC - Obrigatório
  "id_integracao": 2,//ID da Integração - Obrigatório
  "id_contrato": 1474,//ID do contrato (cliente_contrato) - Obrigatório
  "id_prod_ixc_mvno": 41,//ID do Produto MVNO (produtos_ixc_mvno)
  "esim": "S",//eSIM - S=Sim, N=Não - Obrigatório
  "simcard": "",//SIM Card
  "portabilidade": "N",//Portabilidade - S=Sim, N=Não - Obrigatório
  "ddd_telefone": 11,//DDD
  "numero_telefone": 5465355223,//Número do telefone
  "login":"",//Login
  "senha":"",//Senha
  "operadora_origem":"",//Operadora origem (operadoras_linha_mvno)
  "numero_temporario":"",//Número temporário
  "status_linha": "BT",//A=Ativo, BR=Bloqueio Roubo, BP=Bloqueio Perda, BP=Bloqueio Parcial, I=Inativo, BI=Bloqueio uso indevido, BT=Bloqueio Total, C=Cancelada, AA=Aguardando Ativação
  "status_portabilidade": "",//A=Aguardando, R=Recusado, CO=Concluído, CA=Cancelado
  "dia_recorrencia": "",//Dia recorrência
  "link_esim": "",//Link eSIM
  "id_contrato_integracao":"213",//ID Contrato na Integração
  "saldo_linha":"GB"//Saldo linha (oculto)
}
```
