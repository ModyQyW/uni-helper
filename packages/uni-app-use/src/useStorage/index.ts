/**
 * Get storage info
 */
export function useStorage() {
  const getStorage = (options: UniApp.GetStorageOptions) => uni.getStorage(options);
  const getStorageSync = (key: string) => uni.getStorageSync(key);

  const setStorage = (options: UniApp.SetStorageOptions) => uni.setStorage(options);
  const setStorageSync = (key: string, value: any) => uni.setStorageSync(key, value);

  const removeStorage = (options: UniApp.RemoveStorageOptions) => uni.removeStorage(options);
  const removeStorageSync = (key: string) => uni.removeStorageSync(key);

  const clearStorage = () => uni.clearStorage();
  const clearStorageSync = () => uni.clearStorageSync();

  const getStorageInfo = (options: UniApp.GetStorageInfoOptions) => uni.getStorageInfo(options);
  const getStorageInfoSync = () => uni.getStorageInfoSync();

  return {
    getStorage,
    getStorageSync,
    setStorage,
    setStorageSync,
    removeStorage,
    removeStorageSync,
    clearStorage,
    clearStorageSync,
    getStorageInfo,
    getStorageInfoSync,
  };
}
