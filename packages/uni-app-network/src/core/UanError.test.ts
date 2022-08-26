import { describe, it, expect } from 'vitest';
import { UanError } from './UanError';

describe('core::UanError', () => {
  it('should create an Error with message, config, code, request, response, stack and isUanError', () => {
    const request = { path: '/foo' };
    const response = { status: 200, data: { foo: 'bar' } };
    const error = new UanError('Boom!', 'ESOMETHING', { foo: 'bar' }, request, response);
    expect(error instanceof Error).toBe(true);
    expect(error.message).toBe('Boom!');
    expect(error.config).toEqual({ foo: 'bar' });
    expect(error.code).toBe('ESOMETHING');
    expect(error.request).toBe(request);
    expect(error.response).toBe(response);
    expect(error.isUanError).toBe(true);
    expect(error.stack).toBeDefined();
  });
  it('should create an Error that can be serialized to JSON', () => {
    // Attempting to serialize request and response results in
    //    TypeError: Converting circular structure to JSON
    const request = { path: '/foo' };
    const response = { status: 200, data: { foo: 'bar' } };
    const error = new UanError('Boom!', 'ESOMETHING', { foo: 'bar' }, request, response);
    const json = error.toJSON();
    expect(json.message).toBe('Boom!');
    expect(json.config).toEqual({ foo: 'bar' });
    expect(json.code).toBe('ESOMETHING');
    expect(json.status).toBe(200);
    expect(json.request).toBe(undefined);
    expect(json.response).toBe(undefined);
  });

  describe('core::createError.from', () => {
    it('should add config, config, request and response to error', () => {
      const error = new Error('Boom!');
      const request = { path: '/foo' };
      const response = { status: 200, data: { foo: 'bar' } };

      const urError = UanError.from(error, 'ESOMETHING', { foo: 'bar' }, request, response);
      expect(urError.config).toEqual({ foo: 'bar' });
      expect(urError.code).toBe('ESOMETHING');
      expect(urError.request).toBe(request);
      expect(urError.response).toBe(response);
      expect(urError.isUanError).toBe(true);
    });

    it('should return error', () => {
      const error = new Error('Boom!');
      expect(UanError.from(error, 'ESOMETHING', { foo: 'bar' }) instanceof UanError).toBeTruthy();
    });
  });
});
