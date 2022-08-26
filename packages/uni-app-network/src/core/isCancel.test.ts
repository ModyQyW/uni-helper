import { describe, it, expect } from 'vitest';
import { isCancel } from './isCancel';
import { UanCanceledError } from './UanCanceledError';

describe('core:isCancel', () => {
  it('returns true if value is a CanceledError', () => {
    expect(isCancel(new UanCanceledError())).toBe(true);
  });

  it('returns false if value is not a CanceledError', () => {
    expect(isCancel({ foo: 'bar' })).toBe(false);
  });
});
