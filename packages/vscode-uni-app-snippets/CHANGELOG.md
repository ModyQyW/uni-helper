# 改动日志

## 0.9.3

- 修复 `javascript` 条件编译语句

## 0.9.2

- 发布流程改进
- 更新链接

## 0.9.1

- 调整部分说明

## 0.9.0

- 发布流程改进
- 增加小红书小程序平台

## 0.8.0

- 增加京东小程序平台

## 0.7.2

- 增加适用的 `language`

## 0.7.1

- 修复 `body` 错误

## 0.7.0

- 增加支付宝小程序平台 `prefix`
- 增加飞书小程序平台和快手小程序平台
- 增加页面生命周期 `onInit`
- 增加应用级事件 `uni.onAppShow`、`uni.offAppShow`、`uni.onAppHide`、`uni.offAppHide`、`uni.onPageNotFound`、`uni.offPageNotFound`、`uni.onError`、`uni.offError`
- 增加拦截器相关 `uni.addInterceptor`、`uni.removeInterceptor`
- 修复 README 链接

## 0.6.2

- 修复 README 链接

## 0.6.1

- 修复 `uni.navigateBackMiniProgram`

## 0.6.0

- 增加 `ad-draw`，`ad-content-page`，`barcode`，`list`，`cell`，`recycle-list`，`cell-slot`，`waterfall`，`refresh` 组件
- 增加 `onUniNViewMessage`，`onUnhandledRejection`，`onPageNotFound` 应用生命周期
- 增加 `uni.addInterceptor`，`uni.removeInterceptor`，`uni.offNetworkStatusChange`，`uni.onThemeChange`，`uni.offKeyboardHeightChange`，`uni.getTopWindowStyle`，`uni.getLeftWindowStyle`，`uni.getRightWindowStyle`
- 调整一些配套的 `uni.onXXX` 和 `uni.offXXX` 的参数
- 修复 README 链接

## 0.5.1

- 修复部分代码块错误
- 使用脚本生成 README

## 0.5.0

- 增加 JavaScript/TypeScript api
- 移除部分代码块
- 更新文档说明

## 0.4.4

- 使用 node 生成 README.md

## 0.4.3

- 使用 choice 优化代码块，现在某些代码块可以直接选择可选值
- 更新所有代码块的 description，修复部分错误
- 更新文档说明

## 0.4.2

- 更新文档说明

## 0.4.1

- 更新文档说明

## 0.4.0

- 移除 `console.log`, `console.info`, `console.warn`, `console.error`, `setTimeout`, `clearTimeout`, `setInterval` 和 `clearInterval`，请使用其它插件如 [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)

## 0.3.2

- 更新文档说明

## 0.3.1

- 更新文档说明

## 0.3.0

- 移除 JSON 校验支持，请使用其它插件如 [uni-app-schemas](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-app-schemas)

## 0.2.1

- 指定 uni-app `pages.json` 和 `manifest.json` 的位置

## 0.2.0

- 支持校验 `pages.json` 和 `manifest.json` 的模式
- 更新文档说明（感谢 [@Wscats](https://github.com/Wscats)）
- 修复 JavaScript/TypeScript 错误的代码块

## 0.1.0

- uni-app 基本能力的代码片段，包括组件和 API
- 支持 vue2
- 参考 [uni-app 官方组件文档](https://uniapp.dcloud.io/component/README)
- 参考 [Vue.js 风格指南](https://cn.vuejs.org/v2/style-guide/index.html)
