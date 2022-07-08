import { describe, it, expect } from 'vitest';
import { isCancel } from './isCancel';
import { UrCanceledError } from './UrCanceledError';

describe('core:isCancel', function () {
  it('returns true if value is a CanceledError', function () {
    expect(isCancel(new UrCanceledError())).toBe(true);
  });

  it('returns false if value is not a CanceledError', function () {
    expect(isCancel({ foo: 'bar' })).toBe(false);
  });
});
