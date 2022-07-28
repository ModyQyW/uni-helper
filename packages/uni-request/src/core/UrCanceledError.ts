import { UrError } from './UrError';
import type { UrConfig, UrData, UrTask } from '../types';

class UrCanceledError<T = UrData, D = UrData> extends UrError<T, D> {
  isUrCanceledError = true;

  constructor(message?: string, config?: UrConfig<T, D>, request?: UrTask) {
    super(message ?? 'canceled');

    this.name = 'CanceledError';
    this.message = message ?? 'canceled';

    this.code = UrError.ERR_CANCELED;
    this.config = config;
    this.request = request;
  }
}

UrCanceledError.prototype.isUrCanceledError = true;

export { UrCanceledError };
