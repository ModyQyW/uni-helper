# 概览

[![License](https://img.shields.io/github/license/ModyQyW/uni-helper)](https://github.com/ModyQyW/uni-helper/blob/main/LICENSE)

`uni-helper` 旨在增强 `uni-app` 系列产品的体验。

`uni-app` 系列产品很棒，它们提供了使用 `vue` 书写小程序和移动应用的能力、降低了全栈的门槛，是很多团队长期以来的选择。

但它们也很糟，推出了和 `node_modules` 不一样的 `uni_modules`，`TypeScript` 和 `Volar` 支持都较差。

这个仓库存放了增强 `uni-app` 系列产品体验的探索。希望对你有用。

## 编辑器支持

### [uni-helper](./editor/uni-helper)

[![vscode](https://vsmarketplacebadge.apphb.com/version-short/ModyQyW.vscode-uni-helper.svg)](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-helper)

[![openvsx](https://img.shields.io/badge/dynamic/json?color=brightgreen&label=OpenVSX&query=%24.version&url=https%3A%2F%2Fopen-vsx.org%2Fapi%2FModyQyW%2Fvscode-uni-helper)](https://open-vsx.org/extension/ModyQyW/vscode-uni-helper)

`uni-helper` 编辑器插件汇总了其它几个插件，并附带一些额外推荐。

### [uni-app-schemas](./editor/uni-app-schemas)

[![vscode](https://vsmarketplacebadge.apphb.com/version-short/ModyQyW.vscode-uni-app-schemas.svg)](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-app-schemas)

[![openvsx](https://img.shields.io/badge/dynamic/json?color=brightgreen&label=OpenVSX&query=%24.version&url=https%3A%2F%2Fopen-vsx.org%2Fapi%2FModyQyW%2Fvscode-uni-app-schemas)](https://open-vsx.org/extension/ModyQyW/vscode-uni-app-schemas)

`uni-app-schemas` 可以校验 `uni-app` 中的 `androidPrivacy.json`、`pages.json` 和 `manifest.json` 格式。你也可以直接在对应的文件中添加 `$schema` 来使用对应的 `schema` 文件。

### [uni-app-snippets](./editor/uni-app-snippets.md)

[![vscode](https://vsmarketplacebadge.apphb.com/version-short/ModyQyW.vscode-uni-app-snippets.svg)](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-app-snippets)

[![openvsx](https://img.shields.io/badge/dynamic/json?color=brightgreen&label=OpenVSX&query=%24.version&url=https%3A%2F%2Fopen-vsx.org%2Fapi%2FModyQyW%2Fvscode-uni-app-snippets)](https://open-vsx.org/extension/ModyQyW/vscode-uni-app-snippets)

提供 `uni-app` 基本能力代码片段。

### [uni-cloud-snippets](./editor/uni-cloud-snippets.md)

[![vscode](https://vsmarketplacebadge.apphb.com/version-short/ModyQyW.vscode-uni-cloud-snippets.svg)](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-cloud-snippets)

[![openvsx](https://img.shields.io/badge/dynamic/json?color=brightgreen&label=OpenVSX&query=%24.version&url=https%3A%2F%2Fopen-vsx.org%2Fapi%2FModyQyW%2Fvscode-uni-cloud-snippets)](https://open-vsx.org/extension/ModyQyW/vscode-uni-cloud-snippets)

提供 `uni-cloud` 基本能力代码片段。

### [uni-ui-snippets](./editor/uni-ui-snippets.md)

[![vscode](https://vsmarketplacebadge.apphb.com/version-short/ModyQyW.vscode-uni-ui-snippets.svg)](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-ui-snippets)

[![openvsx](https://img.shields.io/badge/dynamic/json?color=brightgreen&label=OpenVSX&query=%24.version&url=https%3A%2F%2Fopen-vsx.org%2Fapi%2FModyQyW%2Fvscode-uni-ui-snippets)](https://open-vsx.org/extension/ModyQyW/vscode-uni-ui-snippets)

提供 `uni-ui` 组件代码片段。

## TypeScript 支持

### [uni-app-types](./typescript/uni-app-types.md)

[![npm](https://img.shields.io/npm/v/uni-app-types)](https://www.npmjs.com/package/uni-app-types)

`uni-app` 组件类型。

### [uni-cloud-types](./typescript/uni-cloud-types.md)

[![npm](https://img.shields.io/npm/v/uni-cloud-types)](https://www.npmjs.com/package/uni-cloud-types)

`uni-cloud` 组件类型。

### [uni-ui-types](./typescript/uni-ui-types.md)

[![npm](https://img.shields.io/npm/v/uni-ui-types)](https://www.npmjs.com/package/uni-ui-types)

`uni-ui` 组件类型。

## Request 支持

### [@modyqyw/uni-request](./request/uni-request.md)

[![npm](https://img.shields.io/npm/v/@modyqyw/uni-request)](https://www.npmjs.com/package/@modyqyw/uni-request)

为 `uni-app` 打造的基于 `Promise` 的 HTTP 客户端。

## 组合式支持

### [uni-app-use](./composition/uni-app-use.md)

[![npm](https://img.shields.io/npm/v/uni-app-use)](https://www.npmjs.com/package/uni-app-use)

`uni-app` 的 `vueuse`。
