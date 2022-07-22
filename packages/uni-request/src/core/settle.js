import { UrError } from './UrError';

export const settle = (resolve, reject, response) => {
  const validateStatus = response?.config?.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(
      new UrError(
        `Request failed with status code ${response.status}`,
        [UrError.ERR_BAD_REQUEST, UrError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
        response.config,
        response.request,
        response,
      ),
    );
  }
};
