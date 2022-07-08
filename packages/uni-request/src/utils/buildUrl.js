import qs from 'qs';

export const buildUrl = (url, params, paramsSerializer) => {
  if (!params) {
    return url;
  }

  const hashIndex = url.indexOf('#');
  if (hashIndex !== -1) {
    url = url.slice(0, hashIndex);
  }

  const serializerParams = paramsSerializer
    ? paramsSerializer(params)
    : Object.prototype.toString.call(params).includes('URLSearchParams')
    ? params.toString()
    : qs.stringify(params);

  if (serializerParams) {
    url += (url.includes('?') ? '&' : '?') + serializerParams;
  }

  return url;
};
