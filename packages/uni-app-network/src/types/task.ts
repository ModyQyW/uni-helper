export type UanBaseTask = Record<string, any>;

export type UanRequestTask = UniApp.RequestTask;

export type UanDownloadTask = UniApp.DownloadTask;

export type UanUploadTask = UniApp.UploadTask;

export type UanTask = UanBaseTask | UanRequestTask | UanDownloadTask | UanUploadTask;
