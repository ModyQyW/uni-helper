import { describe, it, expect } from 'vitest';
import { isUanCancel } from './isUanCancel';
import { UanCanceledError } from './UanCanceledError';

describe('core:isCancel', () => {
  it('returns true if value is a CanceledError', () => {
    expect(isUanCancel(new UanCanceledError())).toBe(true);
  });

  it('returns false if value is not a CanceledError', () => {
    expect(isUanCancel({ foo: 'bar' })).toBe(false);
  });
});
