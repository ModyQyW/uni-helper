# uni-app-use

**WIP**

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

- [useDownloadFile](./src/useDownloadFile/index.ts)
- [useInterceptor](./src/useInterceptor/index.ts)
- [useNetwork](./src/useNetwork/index.ts)
- [UseNetwork](./src/useNetwork/component.ts)
- [useOnline](./src/useOnline/index.ts)
- [UseOnline](./src/useOnline/component.ts)
- [useRequest](./src/useRequest/index.ts)
- [useStorageAsync](./src/useStorageAsync/index.ts)
- [useUploadFile](./src/useUploadFile/index.ts)

## 改动日志

- [改动日志](./CHANGELOG.md)

## 致谢

- [vueuse](https://vueuse.org/)
- [tob-use](https://tob-use.netlify.app/)
