import { HttpStatusCode, UanBaseConfig } from '../types';

export const defaults: Partial<UanBaseConfig> = {
  adapter: 'request',
  timeout: 0,
  validateStatus: (status) =>
    status >= HttpStatusCode.Ok && status < HttpStatusCode.MultipleChoices,
};
