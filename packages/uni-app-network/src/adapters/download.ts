import statuses from 'statuses';
import { settle } from '../core/settle';
import { UanCanceledError } from '../core/UanCanceledError';
import { buildDownloadConfig } from '../utils';
import { UanCancelTokenListener } from '../core/UanCancelToken';
import { UanData, UanDownloadConfig, UanDownloadResponse } from '../types';

export const downloadAdapter = <T = UanData, D = UanData>(config: UanDownloadConfig<T, D>) =>
  new Promise<UanDownloadResponse<T, D>>((resolve, reject) => {
    const { onHeadersReceived, onProgressUpdate, cancelToken, signal } = config;

    const downloadConfig = buildDownloadConfig(config);

    let onCanceled: UanCancelTokenListener;
    const done = () => {
      cancelToken?.unsubscribe(onCanceled);
      // @ts-expect-error No overload matches this call.
      signal?.removeEventListener('abort', onCanceled);
    };

    let response: UanDownloadResponse<T, D>;
    let task: UniApp.DownloadTask | undefined;

    task = uni.downloadFile({
      ...downloadConfig,
      success: (res) => {
        response = {
          ...response,
          // @ts-expect-error
          errMsg: res?.errMsg ?? res?.errmsg ?? res?.msg ?? res?.message,
          // @ts-expect-error
          errno: res?.errno,
          tempFilePath: res?.tempFilePath,
          // @ts-expect-error
          filePath: res?.filePath,
          // @ts-expect-error
          profile: res?.profile,
          status: res?.statusCode,
          statusText: statuses(res?.statusCode)?.toString(),
          // @ts-expect-error
          headers: res?.header ?? res?.headers,
          config,
          // @ts-expect-error
          data: {
            tempFilePath: res?.tempFilePath,
            // @ts-expect-error
            filePath: res?.filePath,
          },
          request: task,
        };
      },
      fail: (err) => {
        response = {
          ...response,
          errMsg: err?.errMsg ?? err?.errmsg ?? err?.msg ?? err?.message,
          errno: err?.errno,
        };
      },
      complete: () => {
        if (onHeadersReceived) {
          task?.offHeadersReceived(onHeadersReceived);
        }
        if (onProgressUpdate) {
          task?.offProgressUpdate(onProgressUpdate);
        }
        settle<T, D, UanDownloadResponse<T, D>>(
          (val) => {
            resolve(val);
            done();
          },
          (err) => {
            reject(err);
            done();
          },
          response,
        );
      },
    });

    if (onHeadersReceived) {
      // @ts-expect-error uni-app types lost
      task.onHeadersReceived(onHeadersReceived);
    }
    if (onProgressUpdate) {
      task.onProgressUpdate(onProgressUpdate);
    }

    if (cancelToken || signal) {
      onCanceled = (cancel) => {
        if (!task) {
          return;
        }
        // @ts-expect-error
        reject(!cancel || cancel.type ? new UanCanceledError(undefined, config, task) : cancel);
        task.abort();
        task = undefined;
      };

      cancelToken?.subscribe(onCanceled);
      // @ts-expect-error
      signal?.aborted ? onCanceled() : signal?.addEventListener('abort', onCanceled);
    }
  });
