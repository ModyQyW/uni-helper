# uni-app-use

[![License](https://img.shields.io/github/license/ModyQyW/uni-helper)](https://github.com/ModyQyW/uni-helper/blob/main/LICENSE)

[![npm](https://img.shields.io/npm/v/uni-app-use)](https://www.npmjs.com/package/uni-app-use)

`uni-app (vue3)` 组合式工具集。

## 安装

使用 `npm`：

```shell
npm install uni-app-use @vueuse/core
```

使用 `yarn`：

```shell
yarn install uni-app-use @vueuse/core
```

使用 `pnpm`：

```shell
pnpm install uni-app-use @vueuse/core
```

使用 `cnpm`：

```shell
cnpm install uni-app-use @vueuse/core
```

目前只考虑小程序和移动应用环境。不考虑支持 `uni_modules`。

## 使用

### tryOnHide

安全的 `onHide`。如果是在组件生命周期内，就调用 `onHide()`；如果不是，就直接调用函数。

```typescript
import { tryOnHide } from 'uni-app-use'

tryOnHide(() => {
  ...
});
```

### tryOnInit

安全的 `onInit`。如果是在组件生命周期内，就调用 `onInit()`；如果不是，就直接调用函数。

```typescript
import { tryOnInit } from 'uni-app-use'

tryOnInit(() => {
  ...
});
```

### tryOnLoad

安全的 `onLoad`。如果是在组件生命周期内，就调用 `onLoad()`；如果不是，就直接调用函数。

```typescript
import { tryOnLoad } from 'uni-app-use'

tryOnLoad(() => {
  ...
});
```

### tryOnReady

安全的 `onReady`。如果是在组件生命周期内，就调用 `onReady()`；如果不是，就直接调用函数。

```typescript
import { tryOnReady } from 'uni-app-use'

tryOnReady(() => {
  ...
});
```

### tryOnShow

安全的 `onShow`。如果是在组件生命周期内，就调用 `onShow()`；如果不是，就直接调用函数。

```typescript
import { tryOnShow } from 'uni-app-use'

tryOnShow(() => {
  ...
});
```

### tryOnUnload

安全的 `onUnload`。如果是在组件生命周期内，就调用 `onUnload()`；如果不是，就直接调用函数。

```typescript
import { tryOnUnload } from 'uni-app-use'

tryOnUnload(() => {
  ...
});
```

### useAccountInfo

获取当前账号信息。

```typescript
import { useAccountInfo } from 'uni-app-use';

const accountInfo = useAccountInfo();
```

### useActionSheet

设置菜单列表参数，调用返回方法显示菜单列表。

```typescript
import { useActionSheet } from 'uni-app-use';

const showActionSheet = useActionSheet({
  /* 传入配置 */
});
showActionSheet(); // 实际显示菜单列表
```

可以传入一个对象来更新已有配置，这样会使用 [扩展运算符](https://es6.ruanyifeng.com/#docs/object#%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%89%A9%E5%B1%95%E8%BF%90%E7%AE%97%E7%AC%A6) 来确认最终配置。

```typescript
showActionSheet({
  /* 新传入配置 */
});
```

### useAddress

获取地址相关。

```typescript
import { useAddress } from 'uni-app-use';

const { chooseAddress, choose } = useAddress();
```

### useApp

获取当前应用实例。如果想要获取 `globalData`，可以直接使用 `useGlobalData`。

```typescript
import { useApp } from 'uni-app-use';

const app = useApp();
```

### useAppBaseInfo

获取应用基础信息。

```typescript
import { useAppBaseInfo } from 'uni-app-use';

const appBaseInfo = useAppBaseInfo();
```

### UseAppBaseInfo

`useAppBaseInfo` 的组件版本。

```vue
<script setup lang="ts">
import { UseAppBaseInfo } from 'uni-app-use';
</script>

<template>
  <UseAppBaseInfo v-slot="{ ... }"> ... </UseAppBaseInfo>
</template>
```

### useArrayBufferToBase64

获取 ArrayBuffer 对应的 base64。可以直接传入 `ref`。

```typescript
import { useArrayBufferToBase64 } from 'uni-app-use';

const base64 = useArrayBufferToBase64(arrayBuffer);
```

### useAudio

获取音频相关。

```typescript
import { useAudio } from 'uni-app-use';

const {
  backgroundAudioManager,
  backgroundManager,
  useBackgroundAudioManager,
  useBackgroundManager,
  createInnerAudioContext,
  createInnerContext,
} = useAudio();
```

### useBackground

获取背景设置方法。

```typescript
import { useBackground } from 'uni-app-use';

const { setBackgroundColor, setColor, setBackgroundTextStyle, setTextStyle } = useBackground();
```

### useBase64ToArrayBuffer

获取 base64 对应的 ArrayBuffer。可以直接传入 `ref`。

```typescript
import { useBase64ToArrayBuffer } from 'uni-app-use';

const arrayBuffer = useBase64ToArrayBuffer(base64);
```

### useCamera

获取相机相关。

```typescript
import { useCamera } from 'uni-app-use';

const { createCameraContext, createContext } = useCamera();
```

### useClipboardData

获取和设置剪切板数据。

```typescript
import { useClipboardData } from 'uni-app-use';

const { clipboardData, setClipboardData } = useClipboardData();

// 查看剪切板数据
console.log('clipboardData', clipboardData);
// 设置剪切板数据，设置成功后 clipboardData 自动更新
setClipboardData({
  ...
});
```

### UseClipboardData

`useClipboardData` 的组件版本。

```vue
<script setup lang="ts">
import { UseClipboardData } from 'uni-app-use';
</script>

<template>
  <UseClipboardData v-slot="{ clipboardData }">
    <p>{{ clipboardData }}</p>
  </UseClipboardData>
</template>
```

### useDeviceInfo

获取设备信息。

```typescript
import { useDeviceInfo } from 'uni-app-use';

const deviceInfo = useDeviceInfo();
```

### UseDeviceInfo

`useDeviceInfo` 的组件版本。

```vue
<script setup lang="ts">
import { UseDeviceInfo } from 'uni-app-use';
</script>

<template>
  <UseDeviceInfo v-slot="{ ... }"> ... </UseDeviceInfo>
</template>
```

### useDownloadFile

`uni.downloadFile` 的封装。使用方法参见 <https://vueuse.org/integrations/useAxios/>。

**返回值中含有 task，可自行操作。**

### useEnterOptions

获取启动时的参数。

```typescript
import { useEnterOptions } from 'uni-app-use';

const options = useEnterOptions();
```

### useFile

获取文件相关。

```typescript
import { useFile } from 'uni-app-use';

const {
  chooseFile,
  choose,
  chooseMessageFile,
  chooseMessage,
  saveFile,
  save,
  getSavedFileList,
  getSavedList,
  getSavedFileInfo,
  getSavedInfo,
  removeSavedFile,
  removeSaved,
  getFileInfo,
  getInfo,
  openDocument,
  open,
  fileSystemManager,
  manager,
  useFileSystemManager,
  useManager,
} = useFile();
```

### useGlobalData

获取和设置当前应用实例的 `globalData`。

```typescript
import { useGlobalData } from 'uni-app-use';

const { globalData, setGlobalData } = useGlobalData();
```

可以传入一个对象来更新已有配置，这样会使用 [扩展运算符](https://es6.ruanyifeng.com/#docs/object#%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%89%A9%E5%B1%95%E8%BF%90%E7%AE%97%E7%AC%A6) 来确认最终配置。

```typescript
setGlobalData({ a: 'a', b: 'b' });
```

你也可以直接设置某一个键值对。

```typescript
setGlobalData('a', 'a');
```

### UseGlobalData

`useGlobalData` 的组件版本。

```vue
<script setup lang="ts">
import { UseGlobalData } from 'uni-app-use';
</script>

<template>
  <UseGlobalData v-slot="{ globalData, setGlobalData }">
    <p>{{ globalData }}</p>
  </UseGlobalData>
</template>
```

### useImage

获取图片相关。

```typescript
import { useImage } from 'uni-app-use';

const {
  chooseImage,
  choose,
  chooseMedia,
  previewImage,
  preview,
  closePreviewImage,
  closePreview,
  getImageInfo,
  getInfo,
  saveImageToPhotosAlbum,
  saveToPhotosAlbum,
  compressImage,
  compress,
} = useImage();
```

### useImmer

<https://cn.vuejs.org/guide/extras/reactivity-in-depth.html#immutable-data> 的实现。另外暴露了 `produce` 方法。

```typescript
import { useImmer } from 'uni-app-use';
const { state, update, produce } = useImmer(baseState);
```

`update` 是 `produce` 的封装。

```typescript
const update = (updater: (draft: D) => D) => (state.value = produce(state.value, updater));
```

你也可以直接使用 `produce` 来操作数据，见 [immer 文档](https://immerjs.github.io/immer/)。

### useInfo

获取窗口信息。

```typescript
import { useInfo } from 'uni-app-use';

const {
  accountInfo,
  account,
  appBaseInfo,
  appBase,
  deviceInfo,
  device,
  systemInfo,
  system,
  windowInfo,
  // window 是保留字，此处不提供别名
} = useInfo();
```

### UseInfo

`useInfo` 的组件版本。

```vue
<script setup lang="ts">
import { UseInfo } from 'uni-app-use';
</script>

<template>
  <UseInfo v-slot="{ ... }"> ... </UseInfo>
</template>
```

### useInterceptor

设置拦截器。

```typescript
import { useInterceptor } from 'uni-app-use';

const event = 'request';

// 设置拦截器
const stop = useInterceptor(event, {
  invoke: (args) => {
    args.url = 'https://www.example.com/' + args.url;
  },
  success: (response) => {
    console.log('interceptor-success', response);
    response.data.code = 1;
  },
  fail: (error) => {
    console.log('interceptor-fail', error);
  },
  complete: (result) => {
    console.log('interceptor-complete', result);
  },
});

// 删除拦截器
stop(event);
```

### useInvoice

获取发票相关。

```typescript
import { useInvoice } from 'uni-app-use';

const { chooseInvoice, choose, chooseInvoiceTitle, chooseTitle } = useInvoice();
```

### useLaunchOptions

获取启动时的参数。返回值与 `onLaunch` 的回调参数一致。

```typescript
import { useLaunchOptions } from 'uni-app-use';

const options = useLaunchOptions();
```

### useLoading

设置加载提示框参数，调用返回方法显示或隐藏加载提示框。

```typescript
import { useLoading } from 'uni-app-use';

const { showLoading, hideLoading } = useLoading({
  /* 传入配置 */
});
showLoading(); // 实际显示加载提示框
hideLoading(); // 隐藏加载提示框
```

可以传入一个对象来更新已有配置，这样会使用 [扩展运算符](https://es6.ruanyifeng.com/#docs/object#%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%89%A9%E5%B1%95%E8%BF%90%E7%AE%97%E7%AC%A6) 来确认最终配置。

```typescript
showLoading({
  /* 新传入配置 */
});
```

### useLocation

获取位置相关。

```typescript
import { useLocation } from 'uni-app-use';

const {
  getLocation,
  get,
  chooseLocation,
  choose,
  openLocation,
  open,
  onLocationChange,
  onChange,
  onLocationChangeError,
  onChangeError,
  offLocationChange,
  offChange,
  startLocationUpdate,
  startUpdate,
  startLocationBackgroundUpdate,
  startUpdateBackground,
  stopLocationUpdate,
  stopUpdate,
} = useLocation();
```

### useMap

获取地图相关。

```typescript
import { useMap } from 'uni-app-use';

const { createMapContext, createContext } = useMap();
```

### useModal

设置模态框参数，调用返回方法显示模态框。

```typescript
import { useModal } from 'uni-app-use';

const showModal = useModal({
  /* 传入配置 */
});
showModal(); // 实际显示模态框
```

可以传入一个对象来更新已有配置，这样会使用 [扩展运算符](https://es6.ruanyifeng.com/#docs/object#%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%89%A9%E5%B1%95%E8%BF%90%E7%AE%97%E7%AC%A6) 来确认最终配置。

```typescript
showModal({
  /* 新传入配置 */
});
```

### useNavigationBar

获取导航条相关。

```typescript
import { useNavigationBar } from 'uni-app-use';

const {
  setNavigationBarTitle,
  setTitle,
  setNavigationBarColor,
  setColor,
  showNavigationBarLoading,
  showLoading,
  hideNavigationBarLoading,
  hideLoading,
} = useNavigationBar();
```

### useNetwork

获取网络信息。

```typescript
import { useNetwork } from 'uni-app-use';

const { type, isWifi, is2g, is3g, is4g, is5g, isEthernet, isUnknown, isOnline, isOffline } =
  useNetwork();
```

### UseNetwork

`useNetwork` 的组件版本。

```vue
<script setup lang="ts">
import { UseNetwork } from 'uni-app-use';
</script>

<template>
  <UseNetwork v-slot="{ type }">
    <p>type: {{ type }}</p>
  </UseNetwork>
</template>
```

### useOnline

获取网络信息。

```typescript
import { useOnline } from 'uni-app-use';

const isOnline = useOnline();
```

### UseOnline

`useOnline` 的组件版本。

```vue
<script setup lang="ts">
import { UseOnline } from 'uni-app-use';
</script>

<template>
  <UseOnline v-slot="{ isOnline }">
    <p>isOnline: {{ isOnline }}</p>
  </UseOnline>
</template>
```

### usePage

获取当前展示页面信息。

```typescript
import { usePage } from 'uni-app-use';

const page = usePage();
```

### usePages

获取当前页面栈信息。

```typescript
import { usePages } from 'uni-app-use';

const pages = usePages();
```

### usePreferredDark

响应式的暗黑主题偏好。

```typescript
import { usePreferredDark } from 'uni-app-use';

const prefersDark = usePreferredDark();
```

### UsePreferredDark

`usePreferredDark` 的组件版本。

```vue
<script setup lang="ts">
import { UsePreferredDark } from 'uni-app-use';
</script>

<template>
  <UsePreferredDark v-slot="{ prefersDark }">
    <p>{{ prefersDark }}</p>
  </UsePreferredDark>
</template>
```

### usePreferredLanguage

响应式的语言偏好。

```typescript
import { usePreferredLanguage } from 'uni-app-use';

const language = usePreferredLanguage();
```

### UsePreferredLanguage

`usePreferredLanguage` 的组件版本。

```vue
<script setup lang="ts">
import { UsePreferredLanguage } from 'uni-app-use';
</script>

<template>
  <UsePreferredLanguage v-slot="{ language }">
    <p>{{ language }}</p>
  </UsePreferredLanguage>
</template>
```

### usePrevPage

获取当前展示页面的前一页面信息。

```typescript
import { usePrevPage } from 'uni-app-use';

const prevPage = usePrevPage();
```

### usePrevRoute

获取当前展示页面的前一页面路由路径信息。

```typescript
import { usePrevRoute } from 'uni-app-use';

const prevRoute = usePrevRoute();
```

### usePullDownRefresh

获取下拉刷新方法。

```typescript
import { usePullDownRefresh } from 'uni-app-use';

const { startPullDownRefresh, start, stopPullDownRefresh, stop } = usePullDownRefresh();
```

### useRecorder

获取录音相关。

```typescript
import { useRecorder } from 'uni-app-use';

const { recorderManager, manager, useRecorderManager, useManager } = useRecorder();
```

### useRequest

`uni.request` 的封装。使用方法参见 <https://vueuse.org/integrations/useAxios/>。

**返回值中含有 task，可自行操作。**

### useRoute

获取当前展示页面的路由路径信息。

```typescript
import { useRoute } from 'uni-app-use';

const route = useRoute();
```

### useRouter

获取路由相关。

```typescript
import { useRouter } from 'uni-app-use';

const {
  pages,
  page,
  prevPage,
  route,
  prevRoute,
  reLaunch,
  switchTab,
  redirectTo,
  navigateTo,
  navigateBack,
  navigateToMiniprogram,
  navigateBackMiniprogram,
} = useRouter();
```

### useScanCode

设置扫码参数，调用返回方法调起客户端扫码界面。

```typescript
import { useScanCode } from 'uni-app-use';

const scan = useScanCode({
  /* 传入配置 */
});
scan(); // 实际调起扫码
```

可以传入一个对象来更新已有配置，这样会使用 [扩展运算符](https://es6.ruanyifeng.com/#docs/object#%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%89%A9%E5%B1%95%E8%BF%90%E7%AE%97%E7%AC%A6) 来确认最终配置。

```typescript
scan({
  /* 新传入配置 */
});
```

### useScreenBrightness

获取和设置屏幕亮度。

```typescript
import { useScreenBrightness } from 'uni-app-use';

const { screenBrightness, brightness, setScreenBrightness, setBrightness } = useScreenBrightness();

// 查看屏幕亮度
console.log('screenBrightness', screenBrightness);
console.log('brightness', brightness);
// 设置屏幕亮度，设置成功后自动更新
setScreenBrightness({
  ...
});
setBrightness({
  ...
});
```

### UseScreenBrightness

`useScreenBrightness` 的组件版本。

```vue
<script setup lang="ts">
import { UseScreenBrightness } from 'uni-app-use';
</script>

<template>
  <UseScreenBrightness v-slot="{ screenBrightness }">
    <p>{{ screenBrightness }}</p>
  </UseScreenBrightness>
</template>
```

### useSelectorQuery

获取 `SelectorQuery` 实例。

```typescript
import { useSelectorQuery } from 'uni-app-use';

const query = useSelectorQuery();
```

### useSocket

`uni-app` 提供的 `socket` 操作的封装。

```typescript
import { useSocket } from 'uni-app-use';

const { task, sendMessage, close, isConnecting, isConnected, isClosed, error } = useSocket({
  onSocketOpen,
  onSocketError,
  onSocketMessage,
  onSocketClose,
});
```

- `task`: <https://uniapp.dcloud.net.cn/api/request/socket-task.html>
- `sendMessage`: <https://uniapp.dcloud.net.cn/api/request/websocket.html#sendsocketmessage>
- `close`: <https://uniapp.dcloud.net.cn/api/request/websocket.html#closesocket>
- `isConnecting`: `socket` 是否连接中
- `isConnected`: `socket` 是否已经连接
- `isClosed`: `socket` 是否已关闭
- `error`: 使用 `socket` 期间的错误
- `onSocketOpen`: <https://uniapp.dcloud.net.cn/api/request/websocket.html#onsocketopen>
- `onSocketError`: <https://uniapp.dcloud.net.cn/api/request/websocket.html#onsocketerror>
- `onSocketMessage`: <https://uniapp.dcloud.net.cn/api/request/websocket.html#onsocketmessage>
- `onSocketClose`: <https://uniapp.dcloud.net.cn/api/request/websocket.html#onsocketclose>

### useStorage

获取存储方法。

```typescript
import { useStorage } from 'uni-app-use';

const {
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
} = useStorage();
```

### useSupported

获取 API 是否被支持。

```typescript
import { useSupported } from 'uni-app-use';

const isSupported = useSupported();
```

### useSystemInfo

获取系统信息。

```typescript
import { useSystemInfo } from 'uni-app-use';

const systemInfo = useSystemInfo();
```

### UseSystemInfo

`useSystemInfo` 的组件版本。

```vue
<script setup lang="ts">
import { UseSystemInfo } from 'uni-app-use';
</script>

<template>
  <UseSystemInfo v-slot="{ ... }"> ... </UseSystemInfo>
</template>
```

### useTabBar

获取标签栏操作。

```typescript
import { useTabBar } from 'uni-app-use';

const {
  setTabBarItem,
  setItem,
  setTabBarStyle,
  setStyle,
  showTabBar,
  show,
  hideTabBar,
  hide,
  setTabBarBadge,
  setBadge,
  removeTabBarBadge,
  removeBadge,
  showTabBarRedDot,
  showRedDot,
  hideTabBarRedDot,
  hideRedDot,
} = useTabBar();
```

### useToast

设置提示框参数，调用返回方法显示或隐藏提示框。

```typescript
import { useToast } from 'uni-app-use';

const { showToast, hideToast } = useToast({
  /* 传入配置 */
});
showToast(); // 实际显示提示框
hideToast(); // 隐藏提示框
```

可以传入一个对象来更新已有配置，这样会使用 [扩展运算符](https://es6.ruanyifeng.com/#docs/object#%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%89%A9%E5%B1%95%E8%BF%90%E7%AE%97%E7%AC%A6) 来确认最终配置。

```typescript
showToast({
  /* 新传入配置 */
});
```

### useUniPlatform

获取运行应用时设置的 `UNI_PLATFORM` 值，默认为 `h5`。

```typescript
import { useUniPlatform } from 'uni-app-use';

const uniPlatform = useUniPlatform();
```

### UseUniPlatform

`useUniPlatform` 的组件版本。

```vue
<script setup lang="ts">
import { UseUniPlatform } from 'uni-app-use';
</script>

<template>
  <UseUniPlatform v-slot="{ uniPlatform }">
    <p>uniPlatform: {{ uniPlatform }}</p>
  </UseUniPlatform>
</template>
```

### useUpdate

获取更新相关。

```typescript
import { useUpdate } from 'uni-app-use';

const { updateManager, manager, useUpdateManager, useManager } = useUpdate();
```

### useUploadFile

`uni.uploadFile` 的封装。使用方法参见 <https://vueuse.org/integrations/useAxios/>。

**返回值中含有 task，可自行操作。**

### useVibrate

获取震动方法。

```typescript
import { useVibrate } from 'uni-app-use';

const { vibrate, vibrateLong, vibrateShort } = useVibrate();
```

### useVideo

获取视频相关。

```typescript
import { useVideo } from 'uni-app-use';

const {
  createVideoContext,
  createContext,
  chooseVideo,
  choose,
  chooseMedia,
  saveVideoToPhotosAlbum,
  saveToPhotosAlbum,
  getVideoInfo,
  getInfo,
  compressVideo,
  compress,
  openVideoEditor,
  openEditor,
} = useVideo();
```

### useVisible

获取当前页面显隐状态。

```typescript
import { useVisible } from 'uni-app-use';

const isVisible = useVisible();
```

### useWindowInfo

获取窗口信息。

```typescript
import { useWindowInfo } from 'uni-app-use';

const windowInfo = useWindowInfo();
```

### UseWindowInfo

`useWindowInfo` 的组件版本。

```vue
<script setup lang="ts">
import { UseWindowInfo } from 'uni-app-use';
</script>

<template>
  <UseWindowInfo v-slot="{ ... }"> ... </UseWindowInfo>
</template>
```

## 其它

### 限制

在小程序和移动应用环境下有如下无法避开的限制：

- 缺失某些全局变量（如 `window`、`navigator` 等）
- 必须使用 `uni-app` 提供的 API 实现功能（如拦截器、存储等），API 不支持的也就无法支持（比如拦截同步 API）
- 无法使用顶层 `await`

如果要开发 H5，不妨直接使用 `vue` 和 `vueuse`。

### 构建

对于 `vue-cli`，请修改项目根目录 `vue.config.js` 如下所示。

```typescript
module.exports = {
  transpileDependencies: ['uni-app-use'],
};
```

对于 `vite`，你无需手动额外调整。

### TypeScript

`uni-app-use` 本身使用 [TypeScript](https://www.typescriptlang.org/) 开发，拥有类型提示。

## 资源

- [改动日志](https://github.com/ModyQyW/uni-helper/tree/main/packages/uni-app-use/CHANGELOG.md)

## 致谢

- [vueuse](https://vueuse.org/) [#1073](https://github.com/vueuse/vueuse/pull/1073)
- [taro-hooks](https://taro-hooks-innocces.vercel.app/)
- [tob-use](https://tob-use.netlify.app/)
