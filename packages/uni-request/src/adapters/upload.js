import statuses from 'statuses';
import { settle, UrCanceledError } from '../core';
import { buildUploadConfig } from '../utils';

export const uploadAdapter = (config) =>
  new Promise((resolve, reject) => {
    const { onHeadersReceived, onProgressUpdate, cancelToken, signal } = config;

    const uploadConfig = buildUploadConfig(config);

    let onCanceled;
    const done = () => {
      cancelToken?.unsubscribe(onCanceled);
      signal?.removeEventListener('abort', onCanceled);
    };

    let response;
    let task;

    task = uni.uploadFile({
      ...uploadConfig,
      success: (res) => {
        response = {
          ...response,
          errMsg: res?.errMsg ?? res?.errmsg ?? res?.msg ?? res?.message,
          errno: res?.errno,
          status: res?.statusCode,
          statusText: statuses(res?.statusCode)?.toString(),
          headers: res?.header ?? res?.headers,
          config,
          data: res?.data,
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
