import { UanConfig, UanData, UanTask } from '../types';
import { UanError } from './UanError';

class UanCanceledError<T = UanData, D = UanData> extends UanError<T, D> {
  isUanCanceledError = true;

  constructor(message?: string, config?: UanConfig<T, D>, task?: UanTask) {
    super(message ?? 'canceled');

    this.name = 'CanceledError';
    this.message = message ?? 'canceled';

    this.code = UanError.ERR_CANCELED;
    this.config = config;
    this.task = task;
  }
}

UanCanceledError.prototype.isUanCanceledError = true;

export { UanCanceledError };
