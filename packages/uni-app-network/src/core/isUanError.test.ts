import { describe, it, expect } from 'vitest';
import { UanError } from './UanError';
import { isUanError } from './isUanError';

describe('core::isUanError', () => {
  it('should return true if the error is created by core::createError', () => {
    expect(isUanError(new UanError('Boom!', undefined, { foo: 'bar' }))).toBe(true);
  });

  it('should return true if the error is enhanced by core::enhanceError', () => {
    expect(isUanError(UanError.from(new Error('Boom!'), undefined, { foo: 'bar' }))).toBe(true);
  });

  it('should return false if the error is a normal Error instance', () => {
    expect(isUanError(new Error('Boom!'))).toBe(false);
  });

  it('should return false if the error is null', () => {
    expect(isUanError(null)).toBe(false);
  });
});
