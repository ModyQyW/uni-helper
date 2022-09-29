import { ref } from 'vue';

export function useAccountInfo() {
  const accountInfo = ref(uni.getAccountInfoSync());
  return accountInfo;
}
