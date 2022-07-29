import { UrData } from './common';
import { UrRequestConfig, UrDownloadConfig, UrUploadConfig, UrBaseConfig } from './config';
import { UrBasePromise, UrRequestPromise, UrDownloadPromise, UrUploadPromise } from './promise';

export interface UrBaseAdapter<T = UrData, D = UrData> {
  (config: UrBaseConfig<T, D>): UrBasePromise<T, D>;
}

export interface UrRequestAdapter<T = UrData, D = UrData> {
  (config: UrRequestConfig<T, D>): UrRequestPromise<T, D>;
}

export interface UrDownloadAdapter<T = UrData, D = UrData> {
  (config: UrDownloadConfig<T, D>): UrDownloadPromise<T, D>;
}

export interface UrUploadAdapter<T = UrData, D = UrData> {
  (config: UrUploadConfig<T, D>): UrUploadPromise<T, D>;
}

export type UrAdapter<T = UrData, D = UrData> =
  | UrBaseAdapter<T, D>
  | UrRequestAdapter<T, D>
  | UrDownloadAdapter<T, D>
  | UrUploadAdapter<T, D>;
