import type { IxcsoftCredentials } from '../application/getApplicationIxcsoftCredentials.ts';
import logger from '../common/logger.ts';
import { ixcsoftRequest } from './ixcsoftClient.ts';
import type { IxcsoftSuccessResponse } from './ixcsoftTypes.ts';

type RegisterPaymentOptions = {
  invoiceId: string;
  valueCents: number;
  paidAt?: Date;
  credentials: IxcsoftCredentials;
};

const formatDate = (date: Date): string => {
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();
  return `${dd}/${mm}/${yyyy}`; // IXC requires dd/mm/yyyy
};

const centsToDecimal = (cents: number): string =>
  (cents / 100).toFixed(2);

/**
 * Registers a manual payment (baixa) in IXC Soft.
 * Called when Woovi fires the charge:completed webhook.
 */
export const ixcsoftRegisterPayment = async (
  options: RegisterPaymentOptions,
): Promise<void> => {
  const { invoiceId, valueCents, paidAt = new Date(), credentials } = options;

  const valueDecimal = centsToDecimal(valueCents);
  const dateFormatted = formatDate(paidAt);

  logger.info(
    { invoiceId, valueDecimal, dateFormatted },
    'ixcsoft registering payment (baixa)',
  );

  const result = await ixcsoftRequest<IxcsoftSuccessResponse>({
    method: 'POST',
    path: '/fn_areceber_recebimentos_baixas_novo',
    credentials,
    body: {
      filial_id: credentials.filialId,
      id_receber: invoiceId,
      conta_: credentials.contaId,
      id_conta: credentials.contaId,
      tipo_recebimento: 'Pix',
      data: dateFormatted,
      valor_parcela: valueDecimal,
      valor_total_recebido: valueDecimal,
      previsao: 'N',
      historico: 'Pagamento via Woovi PIX',
    },
  });

  logger.info({ invoiceId, result }, 'ixcsoft payment registered');
};
