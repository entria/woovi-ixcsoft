export type IxcsoftInvoiceStatus = 'A' | 'R' | 'C'; // Aberto, Recebido, Cancelado

export type IxcsoftInvoice = {
  id: string;
  id_cliente: string;
  id_contrato: string;
  filial_id: string;
  status: IxcsoftInvoiceStatus;
  valor: string;
  valor_aberto: string;
  valor_recebido: string;
  data_emissao: string;
  data_vencimento: string;
  tipo_recebimento: string;
  pix_txid: string;
  recebido_via_pix: string;
  obs: string;
  id_conta: string;
  id_carteira_cobranca: string;
  liberado: string;
};

export type IxcsoftListResponse<T> = {
  page: string;
  total: string | number;
  registros: T[];
};

export type IxcsoftErrorResponse = {
  type: 'error';
  message: string;
};

export type IxcsoftSuccessResponse = {
  type: 'success';
  message: string;
  id?: string;
};
