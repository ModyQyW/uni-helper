export const combineUrls = (baseUrl, relativeUrl) => {
  return relativeUrl
    ? baseUrl.replace(/\/+$/, '') + '/' + relativeUrl.replace(/^\/+/, '')
    : baseUrl;
};
