import { describe, it, expect } from 'vitest';
import { UanCanceledError } from './UanCanceledError';

describe('core:UanCanceledError', () => {
  describe('toString', () => {
    it('returns correct result when message is not specified', () => {
      const cancel = new UanCanceledError();
      expect(cancel.toString()).toBe('CanceledError: canceled');
    });

    it('returns correct result when message is specified', () => {
      const cancel = new UanCanceledError('Operation has been canceled.');
      expect(cancel.toString()).toBe('CanceledError: Operation has been canceled.');
    });
  });
});
