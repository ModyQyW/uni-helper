import { UanOnProgress } from './common';

export interface UanTask
  extends Partial<UniApp.RequestTask>,
    Partial<Omit<UniApp.DownloadTask, 'onProgressUpdate'>>,
    Partial<Omit<UniApp.UploadTask, 'onProgressUpdate'>> {
  onProgressUpdate?: (callback: UanOnProgress) => void;
  [key: string]: any;
}
