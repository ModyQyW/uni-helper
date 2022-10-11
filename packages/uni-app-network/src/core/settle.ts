import { UanData, UanBaseResponse } from '../types';
import { UanError } from './UanError';

export const settle = <
  T = UanData,
  D = UanData,
  R extends UanBaseResponse<T, D> = UanBaseResponse<T, D>,
>(
  resolve: (value: R | PromiseLike<R>) => void,
  reject: (reason?: any) => void,
  response: R,
) => {
  const validateStatus = response?.config?.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(
      new UanError(
        `Request failed with status code ${response.status}`,
        [UanError.ERR_BAD_REQUEST, UanError.ERR_BAD_RESPONSE][
          Math.floor(response.status / 100) - 4
        ],
        response.config,
        response.task,
        response,
      ),
    );
  }
};
