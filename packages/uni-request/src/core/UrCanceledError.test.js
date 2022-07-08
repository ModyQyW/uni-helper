import { describe, it, expect } from 'vitest';
import { UrCanceledError } from './UrCanceledError';

describe('core:UrCanceledError', () => {
  describe('toString', () => {
    it('returns correct result when message is not specified', () => {
      const cancel = new UrCanceledError();
      expect(cancel.toString()).toBe('CanceledError: canceled');
    });

    it('returns correct result when message is specified', () => {
      const cancel = new UrCanceledError('Operation has been canceled.');
      expect(cancel.toString()).toBe('CanceledError: Operation has been canceled.');
    });
  });
});
