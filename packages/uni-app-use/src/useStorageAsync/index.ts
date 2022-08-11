/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  Awaitable,
  ConfigurableEventFilter,
  ConfigurableFlush,
  MaybeComputedRef,
  RemovableRef,
  resolveUnref,
  watchWithFilter,
} from '@vueuse/shared';
import { Ref, ref, shallowRef } from 'vue-demi';
import { useInterceptor } from '../useInterceptor';
import { guessSerializerType } from './guess';

export interface StorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

export interface StorageLikeAsync {
  getItem(key: string): Awaitable<string | null>;
  setItem(key: string, value: string): Awaitable<void>;
  removeItem(key: string): Awaitable<void>;
}

export interface Serializer<T> {
  read(raw: string): T;
  write(value: T): string;
}

export interface SerializerAsync<T> {
  read(raw: string): Awaitable<T>;
  write(value: T): Awaitable<string>;
}

export const StorageSerializers: Record<
  'boolean' | 'object' | 'number' | 'any' | 'string' | 'map' | 'set' | 'date',
  Serializer<any>
> = {
  boolean: {
    read: (v: any) => v === 'true',
    write: (v: any) => String(v),
  },
  object: {
    read: (v: any) => JSON.parse(v),
    write: (v: any) => JSON.stringify(v),
  },
  number: {
    read: (v: any) => Number.parseFloat(v),
    write: (v: any) => String(v),
  },
  any: {
    read: (v: any) => v,
    write: (v: any) => String(v),
  },
  string: {
    read: (v: any) => v,
    write: (v: any) => String(v),
  },
  map: {
    read: (v: any) => new Map(JSON.parse(v)),
    write: (v: any) => JSON.stringify(Array.from((v as Map<any, any>).entries())),
  },
  set: {
    read: (v: any) => new Set(JSON.parse(v)),
    write: (v: any) => JSON.stringify(Array.from(v as Set<any>)),
  },
  date: {
    read: (v: any) => new Date(v),
    write: (v: any) => v.toISOString(),
  },
};

export interface UseStorageOptions<T> extends ConfigurableEventFilter, ConfigurableFlush {
  /**
   * Watch for deep changes
   *
   * @default true
   */
  deep?: boolean;

  /**
   * Listen to storage changes, useful for multiple tabs application
   *
   * @default true
   */
  listenToStorageChanges?: boolean;

  /**
   * Write the default value to the storage when it does not exist
   *
   * @default true
   */
  writeDefaults?: boolean;

  /**
   * Merge the default value with the value read from the storage.
   *
   * When setting it to true, it will perform a **shallow merge** for objects.
   * You can pass a function to perform custom merge (e.g. deep merge), for example:
   *
   * @default false
   */
  mergeDefaults?: boolean | ((storageValue: T, defaults: T) => T);

  /**
   * Custom data serialization
   */
  serializer?: Serializer<T>;

  /**
   * On error callback
   *
   * Default log error to `console.error`
   */
  onError?: (error: unknown) => void;

  /**
   * Use shallow ref as reference
   *
   * @default false
   */
  shallow?: boolean;
}

export interface UseStorageAsyncOptions<T> extends Omit<UseStorageOptions<T>, 'serializer'> {
  /**
   * Custom data serialization
   */
  serializer?: SerializerAsync<T>;
}

export const getDefaultStorage = (): StorageLikeAsync => ({
  getItem(key) {
    return new Promise((resolve, reject) => {
      uni.getStorage({
        key,
        success: (result) => {
          resolve(result?.data ?? result ?? null);
        },
        fail: (error) => {
          reject(error);
        },
      });
    });
  },
  setItem(key, value) {
    return new Promise((resolve, reject) => {
      uni.setStorage({
        key,
        data: value,
        success: (result) => {
          resolve(result?.data ?? result ?? null);
        },
        fail: (error) => {
          reject(error);
        },
      });
    });
  },
  removeItem(key) {
    return new Promise((resolve, reject) => {
      uni.removeStorage({
        key,
        success: (result) => {
          resolve(result?.data ?? result ?? null);
        },
        fail: (error) => {
          reject(error);
        },
      });
    });
  },
});

export function useStorageAsync(
  key: string,
  initialValue: MaybeComputedRef<string>,
  storage?: StorageLikeAsync,
  options?: UseStorageAsyncOptions<string>,
): RemovableRef<string>;
export function useStorageAsync(
  key: string,
  initialValue: MaybeComputedRef<boolean>,
  storage?: StorageLikeAsync,
  options?: UseStorageAsyncOptions<boolean>,
): RemovableRef<boolean>;
export function useStorageAsync(
  key: string,
  initialValue: MaybeComputedRef<number>,
  storage?: StorageLikeAsync,
  options?: UseStorageAsyncOptions<number>,
): RemovableRef<number>;
export function useStorageAsync<T>(
  key: string,
  initialValue: MaybeComputedRef<T>,
  storage?: StorageLikeAsync,
  options?: UseStorageAsyncOptions<T>,
): RemovableRef<T>;
export function useStorageAsync<T = unknown>(
  key: string,
  initialValue: MaybeComputedRef<null>,
  storage?: StorageLikeAsync,
  options?: UseStorageAsyncOptions<T>,
): RemovableRef<T>;

/**
 * Reactive Storage in with async support.
 */
export function useStorageAsync<T extends string | number | boolean | object | null>(
  key: string,
  initialValue: MaybeComputedRef<T>,
  storage: StorageLikeAsync | undefined,
  options: UseStorageAsyncOptions<T> = {},
): RemovableRef<T> {
  const {
    flush = 'pre',
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    shallow,
    eventFilter,
    onError = (e) => {
      console.error(e);
    },
  } = options;

  const rawInit: T = resolveUnref(initialValue);
  const type = guessSerializerType<T>(rawInit);

  const data = (shallow ? shallowRef : ref)(initialValue) as Ref<T>;
  const serializer = options.serializer ?? StorageSerializers[type];

  if (!storage) {
    try {
      storage = getDefaultStorage();
    } catch (e) {
      onError(e);
    }
  }

  async function read(event?: StorageEvent) {
    if (!storage || (event && event.key !== key)) return;

    try {
      const rawValue = event ? event.newValue : await storage.getItem(key);
      if (rawValue == null) {
        data.value = rawInit;
        if (writeDefaults && rawInit !== null)
          await storage.setItem(key, await serializer.write(rawInit));
      } else {
        data.value = await serializer.read(rawValue);
      }
    } catch (e) {
      onError(e);
    }
  }

  read();

  if (listenToStorageChanges) {
    useInterceptor('setStorage', {
      complete: () => {
        setTimeout(() => read(), 0);
      },
    });
    useInterceptor('removeStorage', {
      complete: () => {
        setTimeout(() => read(), 0);
      },
    });
    useInterceptor('clearStorage', {
      complete: () => {
        setTimeout(() => read(), 0);
      },
    });
  }

  if (storage) {
    watchWithFilter(
      data,
      async () => {
        try {
          if (data.value == null) {
            await storage!.removeItem(key);
          } else {
            await storage!.setItem(key, await serializer.write(data.value));
          }
        } catch (e) {
          onError(e);
        }
      },
      {
        flush,
        deep,
        eventFilter,
      },
    );
  }

  return data as RemovableRef<T>;
}
/* eslint-enable @typescript-eslint/no-non-null-assertion */
