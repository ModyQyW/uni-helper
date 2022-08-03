import { Ref, computed, ref, watch } from 'vue-demi';
import { tryOnMounted } from '@vueuse/shared';
import { StorageLikeAsync, UseStorageAsyncOptions, useStorageAsync } from '../useStorageAsync';
import { usePreferredDark } from '../usePreferredDark';

export type BasicColorSchema = 'light' | 'dark' | 'auto';

export interface UseColorModeOptions<T extends string = BasicColorSchema>
  extends UseStorageAsyncOptions<T | BasicColorSchema> {
  /**
   * The initial color mode
   *
   * @default 'auto'
   */
  initialValue?: T | BasicColorSchema;

  /**
   * Prefix when adding value to the attribute
   */
  modes?: Partial<Record<T | BasicColorSchema, string>>;

  /**
   * A custom handler for handle the updates.
   *
   * @default undefined
   */
  onChanged?: (
    mode: T | BasicColorSchema,
    defaultHandler: (mode: T | BasicColorSchema) => void,
  ) => void;

  /**
   * Custom storage ref
   *
   * When provided, `useStorage` will be skipped
   */
  storageRef?: Ref<T | BasicColorSchema>;

  /**
   * Key to persist the data into localStorage/sessionStorage.
   *
   * Pass `null` to disable persistence
   *
   * @default 'uni-app-use-color-scheme'
   */
  storageKey?: string | null;

  /**
   * Storage object
   */
  storage?: StorageLikeAsync;

  /**
   * Emit `auto` mode from state
   *
   * When set to `true`, preferred mode won't be translated into `light` or `dark`.
   * This is useful when the fact that `auto` mode was selected needs to be known.
   *
   * @default undefined
   */
  emitAuto?: boolean;
}

/**
 * Reactive color mode with auto data persistence.
 */
export function useColorMode<T extends string = BasicColorSchema>(
  options: UseColorModeOptions<T> = {},
) {
  const {
    initialValue = 'auto',
    storage,
    storageKey = 'uni-app-use-color-scheme',
    listenToStorageChanges = true,
    storageRef,
    emitAuto,
  } = options;

  const preferredDark = usePreferredDark();
  const preferredMode = computed(() => (preferredDark.value ? 'dark' : 'light'));

  const store =
    storageRef ||
    (storageKey == null
      ? (ref(initialValue) as Ref<T | BasicColorSchema>)
      : useStorageAsync<T | BasicColorSchema>(
          storageKey,
          initialValue as BasicColorSchema,
          storage,
          {
            listenToStorageChanges,
          },
        ));

  const state = computed<T | BasicColorSchema>({
    get() {
      return store.value === 'auto' && !emitAuto ? preferredMode.value : store.value;
    },
    set(v) {
      store.value = v;
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function defaultOnChanged(mode: T | BasicColorSchema) {
    // do nothing
  }

  function onChanged(mode: T | BasicColorSchema) {
    if (options.onChanged) {
      options.onChanged(mode, defaultOnChanged);
    } else {
      defaultOnChanged(mode);
    }
  }

  watch(state, onChanged, { flush: 'post', immediate: true });
  if (emitAuto) {
    watch(preferredMode, () => onChanged(state.value), { flush: 'post' });
  }

  tryOnMounted(() => onChanged(state.value));

  return state;
}
