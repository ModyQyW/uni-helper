import { describe, it, expect } from 'vitest';
import { combineUrls } from './combineUrls';

describe('helpers::combineUrls', function () {
  it('should combine URLs', function () {
    expect(combineUrls('https://api.github.com', '/users')).toBe('https://api.github.com/users');
  });

  it('should remove duplicate slashes', function () {
    expect(combineUrls('https://api.github.com/', '/users')).toBe('https://api.github.com/users');
  });

  it('should insert missing slash', function () {
    expect(combineUrls('https://api.github.com', 'users')).toBe('https://api.github.com/users');
  });

  it('should not insert slash when relative url missing/empty', function () {
    expect(combineUrls('https://api.github.com/users', '')).toBe('https://api.github.com/users');
  });

  it('should allow a single slash for relative url', function () {
    expect(combineUrls('https://api.github.com/users', '/')).toBe('https://api.github.com/users/');
  });
});
