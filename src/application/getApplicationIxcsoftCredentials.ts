import { config } from '../common/config.ts';
import type { IApplication } from './ApplicationModel.ts';

export type IxcsoftCredentials = {
  baseUrl: string;
  token: string;
  filialId: string;
  contaId: string;
};

// TODO: implement credential loading based on chosen approach
export const getApplicationIxcsoftCredentials = (_application: IApplication): IxcsoftCredentials => {
  return {
    baseUrl: config.IXCSOFT_BASE_URL,
    token: config.IXCSOFT_TOKEN,
    filialId: config.IXCSOFT_FILIAL_ID,
    contaId: config.IXCSOFT_CONTA_ID,
  };
};
