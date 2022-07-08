export const defaultBaseConfig = {
  adapter: 'request',
  timeout: 0,
  validateStatus: (status) => status >= 200 && status < 300,
};

export const defaultRequestConfig = {
  adapter: 'request',
};

export const defaultDownloadConfig = {
  adapter: 'download',
};

export const defaultUploadConfig = {
  adapter: 'upload',
};
