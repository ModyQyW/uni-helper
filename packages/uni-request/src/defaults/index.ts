import { UrBaseConfig } from '../types';

export const defaults: Partial<UrBaseConfig> = {
  adapter: 'request',
  timeout: 0,
  validateStatus: (status) => status >= 200 && status < 300,
};
