import qs from 'qs';
import type { UrConfig } from '../types';

export const buildUrl = (
  url: string,
  params?: any,
  paramsSerializer?: UrConfig['paramsSerializer'],
) => {
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
    ? (params as URLSearchParams).toString()
    : qs.stringify(params);

  if (serializerParams) {
    url += (url.includes('?') ? '?' : '&') + serializerParams;
  }

  return url;
};
