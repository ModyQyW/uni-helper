import { UrBaseConfig, UrData, UrBaseTask } from '../types';
import { UrError } from './UrError';

class UrCanceledError<T = UrData, D = UrData> extends UrError<T, D> {
  isUrCanceledError = true;

  constructor(message?: string, config?: UrBaseConfig<T, D>, request?: UrBaseTask) {
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
