# uni-app-use

[![npm](https://img.shields.io/npm/v/uni-app-use)](https://www.npmjs.com/package/uni-app-use) [![GitHub license](https://img.shields.io/github/license/ModyQyW/uni-helper)](https://github.com/ModyQyW/uni-helper/blob/main/LICENSE)

**WIP: 扩充 API，后续再增加文档。**

`uni-app` 的 `vueuse`，组合式工具集。

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

- [tryOnHide](./src/tryOnHide/index.ts)
- [tryOnInit](./src/tryOnInit/index.ts)
- [tryOnLoad](./src/tryOnLoad/index.ts)
- [tryOnReady](./src/tryOnReady/index.ts)
- [tryOnShow](./src/tryOnShow/index.ts)
- [tryOnUnload](./src/tryOnUnload/index.ts)
- [useApp](./src/useApp/index.ts)
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
- [useRequest](./src/useRequest/index.ts)
- [useRouter](./src/useRouter/index.ts)
- [useSocket](./src/useSocket/index.ts)
- [useStorageAsync](./src/useStorageAsync/index.ts)
- [useSupported](./src/useSupported/index.ts)
- [useUniPlatform](./src/useUniPlatform/index.ts)
- [UseUniPlatform](./src/useUniPlatform/component.ts)
- [useUploadFile](./src/useUploadFile/index.ts)

## 改动日志

- [改动日志](./CHANGELOG.md)

## 致谢

- [vueuse](https://vueuse.org/) [#1073](https://github.com/vueuse/vueuse/pull/1073)
- [taro-hooks](https://taro-hooks-innocces.vercel.app/)
- [tob-use](https://tob-use.netlify.app/)
