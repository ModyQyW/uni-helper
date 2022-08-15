import { ref, computed } from 'vue-demi';
import { tryOnScopeDispose } from '@vueuse/shared';

export type NetworkType = 'ethernet' | 'none' | 'wifi' | 'unknown' | '2g' | '3g' | '4g' | '5g';

/**
 * Get network info
 */
export function useNetwork() {
  const isOnline = ref(true);
  const isOffline = computed(() => !isOnline.value);
  const type = ref<NetworkType>('unknown');

  const updateNetwork = (
    result: UniApp.GetNetworkTypeSuccess | UniApp.OnNetworkStatusChangeSuccess,
  ) => {
    isOnline.value = !!result?.networkType && result?.networkType !== 'none';
    type.value = (result?.networkType ?? 'unknown') as NetworkType;
  };

  uni.getNetworkType({
    success: (result) => {
      updateNetwork(result);
    },
  });

  const callback = (result: UniApp.OnNetworkStatusChangeSuccess) => {
    updateNetwork(result);
  };

  uni.onNetworkStatusChange(callback);

  const stop = () => {
    uni.offNetworkStatusChange(callback);
  };

  tryOnScopeDispose(stop);

  return {
    isOnline,
    isOffline,
    type,
  };
}

export type UseNetworkReturn = ReturnType<typeof useNetwork>;
