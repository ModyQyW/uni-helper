import { describe, it, expect } from 'vitest';
import { UrCanceledError } from './UrCanceledError';

describe('core:UrCanceledError', function () {
  describe('toString', function () {
    it('returns correct result when message is not specified', function () {
      const cancel = new UrCanceledError();
      expect(cancel.toString()).toBe('CanceledError: canceled');
    });

    it('returns correct result when message is specified', function () {
      const cancel = new UrCanceledError('Operation has been canceled.');
      expect(cancel.toString()).toBe('CanceledError: Operation has been canceled.');
    });
  });
});
