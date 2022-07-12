import statuses from 'statuses';
import { settle, UrCanceledError } from '../core';
import { buildDownloadConfig } from '../utils';

export const downloadAdapter = (config) =>
  new Promise((resolve, reject) => {
    const { onHeadersReceived, onProgressUpdate, cancelToken, signal } = config;

    const downloadConfig = buildDownloadConfig(config);

    let onCanceled;
    const done = () => {
      cancelToken?.unsubscribe(onCanceled);
      signal?.removeEventListener('abort', onCanceled);
    };

    let response;

    let task = uni.downloadFile({
      ...downloadConfig,
      success: (res) => {
        response = {
          ...response,
          errMsg: res?.errMsg ?? res?.errmsg ?? res?.msg ?? res?.message,
          errno: res?.errno,
          tempFilePath: res?.tempFilePath,
          filePath: res?.filePath,
          profile: res?.profile,
          status: res?.statusCode,
          statusText: statuses(res?.statusCode)?.toString(),
          headers: res?.header ?? res?.headers,
          config,
          data: {
            tempFilePath: res?.tempFilePath,
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
        task = undefined;
        settle(
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
        reject(!cancel || cancel.type ? new UrCanceledError(null, config, task) : cancel);
        task.abort();
        task = undefined;
      };

      cancelToken?.subscribe(onCanceled);
      signal?.aborted ? onCanceled() : signal?.addEventListener('abort', onCanceled);
    }
  });
