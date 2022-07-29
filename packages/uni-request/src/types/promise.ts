import { UrData } from './common';
import {
  UrBaseResponse,
  UrRequestResponse,
  UrDownloadResponse,
  UrUploadResponse,
} from './response';

export type UrBasePromise<T = UrData, D = UrData> = Promise<UrBaseResponse<T, D>>;

export type UrRequestPromise<T = UrData, D = UrData> = Promise<UrRequestResponse<T, D>>;

export type UrDownloadPromise<T = UrData, D = UrData> = Promise<UrDownloadResponse<T, D>>;

export type UrUploadPromise<T = UrData, D = UrData> = Promise<UrUploadResponse<T, D>>;

export type UrPromise<T = UrData, D = UrData> =
  | UrBasePromise<T, D>
  | UrRequestPromise<T, D>
  | UrDownloadPromise<T, D>
  | UrUploadPromise<T, D>;
