import { HttpStatusCode, UanConfig } from '../types';

export const defaults: Partial<UanConfig> = {
  adapter: 'request',
  timeout: 0,
  validateStatus: (status) =>
    status >= HttpStatusCode.Ok && status < HttpStatusCode.MultipleChoices,
};
