import { UanData } from './common';
import { UanRequestConfig, UanDownloadConfig, UanUploadConfig, UanBaseConfig } from './config';
import { UanBasePromise, UanRequestPromise, UanDownloadPromise, UanUploadPromise } from './promise';

export interface UanBaseAdapter<T = UanData, D = UanData> {
  (config: UanBaseConfig<T, D>): UanBasePromise<T, D>;
}

export interface UanRequestAdapter<T = UanData, D = UanData> {
  (config: UanRequestConfig<T, D>): UanRequestPromise<T, D>;
}

export interface UanDownloadAdapter<T = UanData, D = UanData> {
  (config: UanDownloadConfig<T, D>): UanDownloadPromise<T, D>;
}

export interface UanUploadAdapter<T = UanData, D = UanData> {
  (config: UanUploadConfig<T, D>): UanUploadPromise<T, D>;
}

export type UanAdapter<T = UanData, D = UanData> =
  | UanBaseAdapter<T, D>
  | UanRequestAdapter<T, D>
  | UanDownloadAdapter<T, D>
  | UanUploadAdapter<T, D>;
