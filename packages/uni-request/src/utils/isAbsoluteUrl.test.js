import { describe, it, expect } from 'vitest';
import { isAbsoluteUrl } from './isAbsoluteUrl';

describe('helpers::isAbsoluteUrl', function () {
  it('should return true if URL begins with valid scheme name', function () {
    expect(isAbsoluteUrl('https://api.github.com/users')).toBe(true);
    expect(isAbsoluteUrl('custom-scheme-v1.0://example.com/')).toBe(true);
    expect(isAbsoluteUrl('HTTP://example.com/')).toBe(true);
  });

  it('should return false if URL begins with invalid scheme name', function () {
    expect(isAbsoluteUrl('123://example.com/')).toBe(false);
    expect(isAbsoluteUrl('!valid://example.com/')).toBe(false);
  });

  it('should return true if URL is protocol-relative', function () {
    expect(isAbsoluteUrl('//example.com/')).toBe(true);
  });

  it('should return false if URL is relative', function () {
    expect(isAbsoluteUrl('/foo')).toBe(false);
    expect(isAbsoluteUrl('foo')).toBe(false);
  });
});
