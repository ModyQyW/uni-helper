export type UrBaseTask = Record<string, any>;

export type UrRequestTask = UniApp.RequestTask;

export type UrDownloadTask = UniApp.DownloadTask;

export type UrUploadTask = UniApp.UploadTask;

export type UrTask = UrBaseTask | UrRequestTask | UrDownloadTask | UrUploadTask;
