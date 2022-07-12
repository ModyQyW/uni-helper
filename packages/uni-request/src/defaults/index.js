export const defaults = {
  adapter: 'request',
  timeout: 0,
  validateStatus: (status) => status >= 200 && status < 300,
};
