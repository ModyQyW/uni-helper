/**
 * Get storage info
 */
export function useStorage() {
  const getStorage = (options: UniApp.GetStorageOptions) => uni.getStorage(options);
  const getStorageSync = (key: string) => uni.getStorageSync(key);
  const get = getStorage;
  const getSync = getStorageSync;

  const setStorage = (options: UniApp.SetStorageOptions) => uni.setStorage(options);
  const setStorageSync = (key: string, value: any) => uni.setStorageSync(key, value);
  const set = setStorage;
  const setSync = setStorageSync;

  const removeStorage = (options: UniApp.RemoveStorageOptions) => uni.removeStorage(options);
  const removeStorageSync = (key: string) => uni.removeStorageSync(key);
  const remove = removeStorage;
  const removeSync = removeStorageSync;

  const clearStorage = () => uni.clearStorage();
  const clearStorageSync = () => uni.clearStorageSync();
  const clear = clearStorage;
  const clearSync = clearStorageSync;

  const getStorageInfo = (options: UniApp.GetStorageInfoOptions) => uni.getStorageInfo(options);
  const getStorageInfoSync = () => uni.getStorageInfoSync();
  const getInfo = getStorageInfo;
  const getInfoSync = getStorageInfoSync;

  return {
    getStorage,
    getStorageSync,
    get,
    getSync,
    setStorage,
    setStorageSync,
    set,
    setSync,
    removeStorage,
    removeStorageSync,
    remove,
    removeSync,
    clearStorage,
    clearStorageSync,
    clear,
    clearSync,
    getStorageInfo,
    getStorageInfoSync,
    getInfo,
    getInfoSync,
  };
}
