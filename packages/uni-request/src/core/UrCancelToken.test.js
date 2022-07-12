import { describe, it, expect } from 'vitest';
import { UrCancelToken } from './UrCancelToken';
import { UrCanceledError } from './UrCanceledError';

describe('core:UrCancelToken', () => {
  describe('constructor', () => {
    it('throws when executor is not specified', () => {
      expect(() => {
        new UrCancelToken();
      }).toThrowError(TypeError, 'executor must be a function.');
    });

    it('throws when executor is not a function', () => {
      expect(() => {
        new UrCancelToken(123);
      }).toThrowError(TypeError, 'executor must be a function.');
    });
  });

  describe('reason', () => {
    it('returns a UrCanceledError if cancellation has been requested', () => {
      let cancel;
      const token = new UrCancelToken((c) => {
        cancel = c;
      });
      cancel('Operation has been canceled.');
      expect(token.reason).toEqual(expect.any(UrCanceledError));
      expect(token.reason.message).toBe('Operation has been canceled.');
    });

    it('returns undefined if cancellation has not been requested', () => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      const token = new UrCancelToken(() => {});
      expect(token.reason).toBeUndefined();
    });
  });

  describe('promise', () => {
    it('returns a Promise that resolves when cancellation is requested', () =>
      new Promise((done) => {
        let cancel;
        const token = new UrCancelToken((c) => {
          cancel = c;
        });
        token.promise.then((value) => {
          expect(value).toEqual(expect.any(UrCanceledError));
          expect(value.message).toBe('Operation has been canceled.');
          done();
        });
        cancel('Operation has been canceled.');
      }));
  });

  describe('throwIfRequested', () => {
    it('throws if cancellation has been requested', () => {
      // Note: we cannot use expect.toThrowError here as UrCanceledError does not inherit from Error
      let cancel;
      const token = new UrCancelToken((c) => {
        cancel = c;
      });
      cancel('Operation has been canceled.');
      try {
        token.throwIfRequested();
      } catch (thrown) {
        expect(thrown).toBeInstanceOf(UrCanceledError);
        expect(thrown.message).toBe('Operation has been canceled.');
      }
    });

    it('does not throw if cancellation has not been requested', () => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      const token = new UrCancelToken(() => {});
      token.throwIfRequested();
    });
  });

  describe('source', () => {
    it('returns an object containing token and cancel function', () => {
      const source = UrCancelToken.source();
      expect(source.token).toEqual(expect.any(UrCancelToken));
      expect(source.cancel).toEqual(expect.any(Function));
      expect(source.token.reason).toBeUndefined();
      source.cancel('Operation has been canceled.');
      expect(source.token.reason).toEqual(expect.any(UrCanceledError));
      expect(source.token.reason.message).toBe('Operation has been canceled.');
    });
  });
});
