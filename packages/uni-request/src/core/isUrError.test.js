import { describe, it, expect } from 'vitest';
import { UrError } from './UrError';
import { isUrError } from './isUrError';

describe('core::isUrError', function () {
  it('should return true if the error is created by core::createError', function () {
    expect(isUrError(new UrError('Boom!', null, { foo: 'bar' }))).toBe(true);
  });

  it('should return true if the error is enhanced by core::enhanceError', function () {
    expect(isUrError(UrError.from(new Error('Boom!'), null, { foo: 'bar' }))).toBe(true);
  });

  it('should return false if the error is a normal Error instance', function () {
    expect(isUrError(new Error('Boom!'))).toBe(false);
  });

  it('should return false if the error is null', function () {
    expect(isUrError(null)).toBe(false);
  });
});
