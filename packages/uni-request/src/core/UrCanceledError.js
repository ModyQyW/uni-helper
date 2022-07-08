import { UrError } from './UrError';

class UrCanceledError extends UrError {
  isUrCanceledError = true;

  constructor(message, config, request) {
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
