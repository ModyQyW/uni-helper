import { UrData, UrBaseResponse } from '../types';
import { UrError } from './UrError';

export const settle = <T = UrData, D = UrData>(
  resolve: (value: UrBaseResponse<T, D> | PromiseLike<UrBaseResponse<T, D>>) => void,
  reject: (reason?: any) => void,
  response: UrBaseResponse<T, D>,
) => {
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
