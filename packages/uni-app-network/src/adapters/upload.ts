import statuses from 'statuses';
import { settle } from '../core/settle';
import { UanCanceledError } from '../core/UanCanceledError';
import { buildUploadConfig } from '../utils';
import { UanCancelTokenListener } from '../core/UanCancelToken';
import { UanData, UanUploadConfig, UanUploadResponse } from '../types';

export const uploadAdapter = <T = UanData, D = UanData>(config: UanUploadConfig<T, D>) =>
  new Promise<UanUploadResponse<T, D>>((resolve, reject) => {
    const { onHeadersReceived, onProgressUpdate, cancelToken, signal } = config;

    const uploadConfig = buildUploadConfig(config);

    let onCanceled: UanCancelTokenListener;
    const done = () => {
      cancelToken?.unsubscribe(onCanceled);
      // @ts-expect-error No overload matches this call.
      signal?.removeEventListener('abort', onCanceled);
    };

    let response: UanUploadResponse<T, D>;
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
        settle<T, D, UanUploadResponse<T, D>>(
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
        reject(!cancel || cancel.type ? new UanCanceledError(undefined, config, task) : cancel);
        task.abort();
        task = undefined;
      };

      cancelToken?.subscribe(onCanceled);
      // @ts-expect-error
      signal?.aborted ? onCanceled() : signal?.addEventListener('abort', onCanceled);
    }
  });
