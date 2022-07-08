import { combineUrls } from './combineUrls';
import { isAbsoluteUrl } from './isAbsoluteUrl';

export const buildFullPath = (baseUrl, requestedUrl) => {
  if (baseUrl && !isAbsoluteUrl(requestedUrl)) {
    return combineUrls(baseUrl, requestedUrl);
  }
  return requestedUrl;
};
