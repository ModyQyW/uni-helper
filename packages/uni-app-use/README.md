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

不考虑支持 `uni_modules`。

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

获取当前应用实例。如果想要获取 `globalData`，可以直接使用 [useGlobalData](./#useGlobalData)。

```typescript
import { useApp } from 'uni-app-use';

const app = useApp();
```

- [useArrayBufferToBase64](./src/useArrayBufferToBase64/index.ts)
- [useBase64ToArrayBuffer](./src/useBase64ToArrayBuffer/index.ts)
- [useClipboardData](./src/useClipboardData/index.ts)
- [UseClipboardData](./src/useClipboardData/component.ts)
- [useColorMode](./src/useColorMode/index.ts)
- [UseColorMode](./src/UseColorMode/component.ts)
- [useDark](./src/useDark/index.ts)
- [UseDark](./src/UseDark/component.ts)
- [useDownloadFile](./src/useDownloadFile/index.ts)
- [useGlobalData](./src/useGlobalData/index.ts)
- [UseGlobalData](./src/useGlobalData/component.ts)
- [useInterceptor](./src/useInterceptor/index.ts)
- [useNetwork](./src/useNetwork/index.ts)
- [UseNetwork](./src/useNetwork/component.ts)
- [useOnline](./src/useOnline/index.ts)
- [UseOnline](./src/useOnline/component.ts)
- [usePage](./src/usePage/index.ts)
- [usePages](./src/usePages/index.ts)
- [usePreferredDark](./src/usePreferredDark/index.ts)
- [UsePreferredDark](./src/usePreferredDark/component.ts)
- [usePreferredLanguage](./src/usePreferredLanguage/index.ts)
- [UsePreferredLanguage](./src/usePreferredLanguage/component.ts)
- [usePrevPage](./src/usePrevPage/index.ts)
- [usePrevRoute](./src/usePrevRoute/index.ts)
- [useRequest](./src/useRequest/index.ts)
- [useRoute](./src/useRoute/index.ts)
- [useRouter](./src/useRouter/index.ts)
- [useSocket](./src/useSocket/index.ts)
- [useStorageAsync](./src/useStorageAsync/index.ts)
- [useSupported](./src/useSupported/index.ts)
- [useUniPlatform](./src/useUniPlatform/index.ts)
- [UseUniPlatform](./src/useUniPlatform/component.ts)
- [useUploadFile](./src/useUploadFile/index.ts)
- [useVibrate](./src/useVibrate/index.ts)
- [useVisible](./src/useVisible/index.ts)

## 改动日志

- [改动日志](https://github.com/ModyQyW/uni-helper/tree/main/packages/uni-app-use/CHANGELOG.md)

## 致谢

- [vueuse](https://vueuse.org/) [#1073](https://github.com/vueuse/vueuse/pull/1073)
- [taro-hooks](https://taro-hooks-innocces.vercel.app/)
- [tob-use](https://tob-use.netlify.app/)
