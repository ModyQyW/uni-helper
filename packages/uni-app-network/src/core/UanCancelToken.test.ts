import { describe, it, expect } from 'vitest';
import { UanCancelToken, UanCanceler } from './UanCancelToken';
import { UanCanceledError } from './UanCanceledError';

describe('core:UanCancelToken', () => {
  describe('constructor', () => {
    it('throws when executor is not specified', () => {
      expect(() => {
        // @ts-expect-error Expected 1 arguments, but got 0.ts(2554)
        new UanCancelToken();
      }).toThrowError(TypeError('executor must be a function.'));
    });

    it('throws when executor is not a function', () => {
      expect(() => {
        // @ts-expect-error argument of type 'number' is not assignable to parameter of type '(cancel: UanCanceler<UanData, UanData>) => void'.ts(2345)
        new UanCancelToken(123);
      }).toThrowError(TypeError('executor must be a function.'));
    });
  });

  describe('reason', () => {
    it('returns a UanCanceledError if cancellation has been requested', () => {
      let cancel: UanCanceler;
      const token = new UanCancelToken((c) => {
        cancel = c;
      });
      // @ts-expect-error Variable 'cancel' is used before being assigned.ts(2454)
      cancel('Operation has been canceled.');
      expect(token.reason).toEqual(expect.any(UanCanceledError));
      expect(token.reason?.message).toBe('Operation has been canceled.');
    });

    it('returns undefined if cancellation has not been requested', () => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      const token = new UanCancelToken(() => {});
      expect(token.reason).toBeUndefined();
    });
  });

  describe('promise', () => {
    it('returns a Promise that resolves when cancellation is requested', () =>
      new Promise<void>((done) => {
        let cancel: UanCanceler;
        const token = new UanCancelToken((c) => {
          cancel = c;
        });
        token.promise.then((value) => {
          expect(value).toEqual(expect.any(UanCanceledError));
          expect(value.message).toBe('Operation has been canceled.');
          done();
        });
        // @ts-expect-error Variable 'cancel' is used before being assigned.ts(2454)
        cancel('Operation has been canceled.');
      }));
  });

  describe('throwIfRequested', () => {
    it('throws if cancellation has been requested', () => {
      // Note: we cannot use expect.toThrowError here as UanCanceledError does not inherit from Error
      let cancel: UanCanceler;
      const token = new UanCancelToken((c) => {
        cancel = c;
      });
      // @ts-expect-error Variable 'cancel' is used before being assigned.ts(2454)
      cancel('Operation has been canceled.');
      try {
        token.throwIfRequested();
      } catch (thrown) {
        expect(thrown).toBeInstanceOf(UanCanceledError);
        expect((thrown as UanCanceledError).message).toBe('Operation has been canceled.');
      }
    });

    it('does not throw if cancellation has not been requested', () => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      const token = new UanCancelToken(() => {});
      token.throwIfRequested();
    });
  });

  describe('source', () => {
    it('returns an object containing token and cancel function', () => {
      const source = UanCancelToken.source();
      expect(source.token).toEqual(expect.any(UanCancelToken));
      expect(source.cancel).toEqual(expect.any(Function));
      expect(source.token.reason).toBeUndefined();
      source.cancel('Operation has been canceled.');
      expect(source.token.reason).toEqual(expect.any(UanCanceledError));
      expect(source.token.reason?.message).toBe('Operation has been canceled.');
    });
  });
});
