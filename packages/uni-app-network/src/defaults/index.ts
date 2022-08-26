import { UanBaseConfig } from '../types';

export const defaults: Partial<UanBaseConfig> = {
  adapter: 'request',
  timeout: 0,
  validateStatus: (status) => status >= 200 && status < 300,
};
