import statuses from 'statuses';
import { settle } from '../core/settle';
import { UrCanceledError } from '../core/UrCanceledError';
import { buildUploadConfig } from '../utils';
import type { UrCancelTokenListener } from '../core/UrCancelToken';
import type { UrData, UrUploadConfig, UrUploadResponse } from '../types';

export const uploadAdapter = <T = UrData, D = UrData>(config: UrUploadConfig<T, D>) =>
  new Promise((resolve, reject) => {
    const { onHeadersReceived, onProgressUpdate, cancelToken, signal } = config;

    const uploadConfig = buildUploadConfig(config);

    let onCanceled: UrCancelTokenListener;
    const done = () => {
      cancelToken?.unsubscribe(onCanceled);
      // @ts-expect-error No overload matches this call.
      signal?.removeEventListener('abort', onCanceled);
    };

    let response: UrUploadResponse<T, D>;
    let task: UniApp.UploadTask | undefined;

    task = uni.uploadFile({
      ...uploadConfig,
      success: (res) => {
        response = {
          ...response,
          // @ts-expect-error
          errMsg: res?.errMsg ?? res?.errmsg ?? res?.msg ?? res?.message,
          // @ts-expect-error
          errno: res?.errno,
          status: res?.statusCode,
          statusText: statuses(res?.statusCode)?.toString(),
          // @ts-expect-error
          headers: res?.header ?? res?.headers,
          config,
          // @ts-expect-error
          data: res?.data,
          request: task,
        };
      },
      fail: (err) => {
        response = {
          ...response,
          // @ts-expect-error
          errMsg: err?.errMsg ?? err?.errmsg ?? err?.msg ?? err?.message,
          // @ts-expect-error
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
        // @ts-expect-error
        reject(!cancel || cancel.type ? new UrCanceledError(undefined, config, task) : cancel);
        task.abort();
        task = undefined;
      };

      cancelToken?.subscribe(onCanceled);
      // @ts-expect-error
      signal?.aborted ? onCanceled() : signal?.addEventListener('abort', onCanceled);
    }
  });
