# uni-app-use

[![License](https://img.shields.io/github/license/ModyQyW/uni-helper)](https://github.com/ModyQyW/uni-helper/blob/main/LICENSE)

[![npm](https://img.shields.io/npm/v/uni-app-use)](https://www.npmjs.com/package/uni-app-use)

`uni-app` 组合式工具集。

确保你的项目支持 Composition API。

对于 `vue >= 2 && vue < 2.7`，请查看 [@vue/composition-api](https://github.com/vuejs/composition-api) 和 [uni-composition-api](https://github.com/TuiMao233/uni-composition-api)。

对于 `vue >= 2.7`，请查看 [uni-composition-api](https://github.com/TuiMao233/uni-composition-api)。

对于 `vue >= 3`，无需额外安装依赖。

## 安装

```shell
npm install uni-app-use @vueuse/core @vueuse/shared
```

不考虑支持 `uni_modules`。目前只考虑小程序和移动应用环境。

**注意：在小程序和移动应用环境下有如下限制。**

- 缺失某些全局变量（如 `window`、`navigator` 等）
- 需要使用 `uni-app` 提供的拦截器做监听（无法处理同步 API）
- 需要使用 `uni-app` 提供的存储 API
- 无法使用顶层 `await`

这些限制无法避开。如果要开发 H5，不妨直接使用 `vueuse`。

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

### useApp

获取当前应用实例。如果想要获取 `globalData`，可以直接使用 `useGlobalData`。

```typescript
import { useApp } from 'uni-app-use';

const app = useApp();
```

### useArrayBufferToBase64

获取 ArrayBuffer 对应的 base64。可以直接传入 `ref`。

```typescript
import { useArrayBufferToBase64 } from 'uni-app-use';

const base64 = useArrayBufferToBase64(arrayBuffer);
```

### useBase64ToArrayBuffer

获取 base64 对应的 ArrayBuffer。可以直接传入 `ref`。

```typescript
import { useBase64ToArrayBuffer } from 'uni-app-use';

const arrayBuffer = useBase64ToArrayBuffer(base64);
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

### useColorMode

带有自动数据持久性的响应式颜色模式。使用方法参见 <https://vueuse.org/core/useColorMode/>。

**由于存在限制，该方法不会为你设置 `class`。如果要自定义 `storage`，必须使用 `uni-app` 提供的异步存储 API，否则无法监听导致响应式失效。**

### UseColorMode

`useColorMode` 的组件版本。使用方法参见 <https://vueuse.org/core/useColorMode/>。

### useDark

带有自动数据持久性的响应式暗黑模式。使用方法参见 <https://vueuse.org/core/useDark/>。

**由于存在限制，该方法不会为你设置 `class`。如果要自定义 `storage`，必须使用 `uni-app` 提供的异步存储 API，否则无法监听导致响应式失效。**

### UseDark

`useDark` 的组件版本。使用方法参见 <https://vueuse.org/core/useDark/>。

### useDownloadFile

`uni.downloadFile` 的封装。使用方法参见 <https://vueuse.org/integrations/useAxios/>。

**返回值中含有 task，可自行操作。**

### useGlobalData

获取和设置当前应用实例的 `globalData`。

```typescript
const { globalData, setGlobalData } = useGlobalData();
```

可以传入一个对象来替换已有全局数据。

```typescript
setGlobalData({ a: 'a', b: 'b' });
```

如果不想替换全局数据，可以在第二个参数传入 `false`，这样会使用 [扩展运算符](https://es6.ruanyifeng.com/#docs/object#%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%89%A9%E5%B1%95%E8%BF%90%E7%AE%97%E7%AC%A6) 来赋值。

```typescript
setGlobalData({ a: 'a', b: 'b' }, false);
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

### useNetwork

获取网络信息。

```typescript
import { useNetwork } from 'uni-app-use';

const { isOnline, isOffline, type } = useNetwork();
```

### UseNetwork

`useNetwork` 的组件版本。

```vue
<script setup lang="ts">
import { UseNetwork } from 'uni-app-use';
</script>

<template>
  <UseNetwork v-slot="{ isOnline, isOffline, type }">
    <p>isOnline: {{ isOnline }}</p>
    <p>isOffline: {{ isOffline }}</p>
    <p>type: {{ type }}</p>
  </UseNetwork>
</template>
```

### useOnline

获取设备在线信息。

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

获取路由相关信息。除了导出 `pages`、`page`、`prevPage`、`route`、`prevRoute` 之外，也导出了所有的路由方法。

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

### useStorageAsync

响应式的存储。使用方法参见 <https://vueuse.org/core/useStorage/> 和 <https://vueuse.org/core/useStorageAsync/>。

**由于存在限制，如果要自定义 `storage`，必须使用 `uni-app` 提供的异步存储 API，否则无法监听导致响应式失效。**

### useSupported

获取 API 是否被支持。

```typescript
import { useSupported } from 'uni-app-use';

const isSupported = useSupported();
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
    <p>uniPlatform</p>
  </UseUniPlatform>
</template>
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

### useVisible

获取当前页面显隐状态。

```typescript
import { useVisible } from 'uni-app-use';

const isVisible = useVisible();
```

## 资源

- [改动日志](https://github.com/ModyQyW/uni-helper/tree/main/packages/uni-app-use/CHANGELOG.md)

## 致谢

- [vueuse](https://vueuse.org/) [#1073](https://github.com/vueuse/vueuse/pull/1073)
- [taro-hooks](https://taro-hooks-innocces.vercel.app/)
- [tob-use](https://tob-use.netlify.app/)
