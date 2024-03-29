import { UanConfig, UanData, UanResponse, UanTask } from '../types';

export class UanError<T = UanData, D = UanData> extends Error {
  static ERR_FR_TOO_MANY_REDIRECTS = 'ERR_FR_TOO_MANY_REDIRECTS';
  static ERR_BAD_OPTION_VALUE = 'ERR_BAD_OPTION_VALUE';
  static ERR_BAD_OPTION = 'ERR_BAD_OPTION';
  static ERR_NETWORK = 'ERR_NETWORK';
  static ERR_DEPRECATED = 'ERR_DEPRECATED';
  static ERR_BAD_RESPONSE = 'ERR_BAD_RESPONSE';
  static ERR_BAD_REQUEST = 'ERR_BAD_REQUEST';
  static ERR_NOT_SUPPORT = 'ERR_NOT_SUPPORT';
  static ERR_INVALID_URL = 'ERR_INVALID_URL';
  static ERR_CANCELED = 'ERR_CANCELED';
  static ECONNABORTED = 'ECONNABORTED';
  static ETIMEDOUT = 'ETIMEDOUT';

  code?: string;
  config?: UanConfig<T, D>;
  task?: UanTask;
  response?: UanResponse<T, D>;
  isUanError: boolean;
  status?: number;
  cause?: Error;

  constructor(
    message?: string,
    code?: string,
    config?: UanConfig<T, D>,
    task?: UanTask,
    response?: UanResponse<T, D>,
  ) {
    super(message);

    this.name = 'UanError';
    this.message = message ?? '';
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error().stack;
    }

    this.code = code;
    this.config = config;
    this.task = task;
    this.response = response;

    this.isUanError = true;
  }

  toJSON() {
    return {
      message: this.message,
      name: this.name,
      // @ts-ignore
      description: this.description,
      // @ts-ignore
      number: this.number,
      // @ts-ignore
      fileName: this.fileName,
      // @ts-ignore
      lineNumber: this.lineNumber,
      // @ts-ignore
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status: this.response?.status,
    } as {
      name: string;
      message?: string;
      stack?: string;
      config?: UanConfig<T, D>;
      code?: string;
      status?: number;
      [key: string]: any;
    };
  }

  static from<TT = UanData, DD = UanData>(
    error?: Error,
    code?: string,
    config?: UanConfig<TT, DD>,
    task?: UanTask,
    response?: UanResponse<TT, DD>,
    customProps?: Record<string, any>,
  ) {
    const urError = new UanError(error?.message, code, config, task, response);
    if (customProps) {
      Object.assign(urError, customProps);
    }
    return urError;
  }
}
