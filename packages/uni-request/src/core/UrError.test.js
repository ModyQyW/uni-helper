import { describe, it, expect } from 'vitest';
import { UrError } from './UrError';

describe('core::UrError', function () {
  it('should create an Error with message, config, code, request, response, stack and isUrError', function () {
    const request = { path: '/foo' };
    const response = { status: 200, data: { foo: 'bar' } };
    const error = new UrError('Boom!', 'ESOMETHING', { foo: 'bar' }, request, response);
    expect(error instanceof Error).toBe(true);
    expect(error.message).toBe('Boom!');
    expect(error.config).toEqual({ foo: 'bar' });
    expect(error.code).toBe('ESOMETHING');
    expect(error.request).toBe(request);
    expect(error.response).toBe(response);
    expect(error.isUrError).toBe(true);
    expect(error.stack).toBeDefined();
  });
  it('should create an Error that can be serialized to JSON', function () {
    // Attempting to serialize request and response results in
    //    TypeError: Converting circular structure to JSON
    const request = { path: '/foo' };
    const response = { status: 200, data: { foo: 'bar' } };
    const error = new UrError('Boom!', 'ESOMETHING', { foo: 'bar' }, request, response);
    const json = error.toJSON();
    expect(json.message).toBe('Boom!');
    expect(json.config).toEqual({ foo: 'bar' });
    expect(json.code).toBe('ESOMETHING');
    expect(json.status).toBe(200);
    expect(json.request).toBe(undefined);
    expect(json.response).toBe(undefined);
  });

  describe('core::createError.from', function () {
    it('should add config, config, request and response to error', function () {
      const error = new Error('Boom!');
      const request = { path: '/foo' };
      const response = { status: 200, data: { foo: 'bar' } };

      const urError = UrError.from(error, 'ESOMETHING', { foo: 'bar' }, request, response);
      expect(urError.config).toEqual({ foo: 'bar' });
      expect(urError.code).toBe('ESOMETHING');
      expect(urError.request).toBe(request);
      expect(urError.response).toBe(response);
      expect(urError.isUrError).toBe(true);
    });

    it('should return error', function () {
      const error = new Error('Boom!');
      expect(UrError.from(error, 'ESOMETHING', { foo: 'bar' }) instanceof UrError).toBeTruthy();
    });
  });
});
