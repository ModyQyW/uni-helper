import { UanData } from './common';
import {
  UanBaseResponse,
  UanRequestResponse,
  UanDownloadResponse,
  UanUploadResponse,
} from './response';

export type UanBasePromise<T = UanData, D = UanData> = Promise<UanBaseResponse<T, D>>;

export type UanRequestPromise<T = UanData, D = UanData> = Promise<UanRequestResponse<T, D>>;

export type UanDownloadPromise<T = UanData, D = UanData> = Promise<UanDownloadResponse<T, D>>;

export type UanUploadPromise<T = UanData, D = UanData> = Promise<UanUploadResponse<T, D>>;

export type UanPromise<T = UanData, D = UanData> =
  | UanBasePromise<T, D>
  | UanRequestPromise<T, D>
  | UanDownloadPromise<T, D>
  | UanUploadPromise<T, D>;
