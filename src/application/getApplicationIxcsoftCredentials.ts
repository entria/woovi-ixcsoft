import type { IApplication, IxcsoftConfig } from './ApplicationModel.ts';

export type IxcsoftCredentials = IxcsoftConfig;

export const getApplicationIxcsoftCredentials = (application: IApplication): IxcsoftCredentials => {
  return {
    baseUrl: application.ixcsoft.baseUrl,
    token: application.ixcsoft.token,
  };
};
