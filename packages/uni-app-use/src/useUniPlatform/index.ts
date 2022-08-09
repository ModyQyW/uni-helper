import { ref } from 'vue-demi';

export function useUniPlatform() {
  const uniPlatform = ref<string>(
    // @ts-expect-error
    process.env.UNI_PLATFORM ?? import.meta.env.UNI_PLATFORM ?? 'unknown',
  );
  return uniPlatform;
}
