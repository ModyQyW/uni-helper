# uni-helper

`uni-helper` 旨在增强 `uni-app` 系列产品的体验。

`uni-app` 系列产品很棒，它们提供了使用 `vue` 书写小程序和移动应用的能力、降低了全栈的门槛，是我们团队长期以来的选择。

但它们也很糟，推出了和 `node_modules` 不一样的 `uni_modules`，TypeScript 和 Volar 支持都较差。

这个仓库存放了我对增强 `uni-app` 系列产品的体验的探索。希望对你有用。

## 包

| 名称                                                                        | 类型                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | 说明                                                                                                                                    |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                                                                                                                                         |
| [vscode-uni-helper](./packages/vscode-uni-helper/README.md)                 | [![vscode](https://vsmarketplacebadge.apphb.com/version-short/ModyQyW.vscode-uni-helper.svg)](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-helper) [![openvsx](https://img.shields.io/badge/dynamic/json?color=brightgreen&label=OpenVSX&query=%24.version&url=https%3A%2F%2Fopen-vsx.org%2Fapi%2FModyQyW%2Fvscode-uni-helper)](https://open-vsx.org/extension/ModyQyW/vscode-uni-helper) [![GitHub license](https://img.shields.io/github/license/ModyQyW/uni-helper)](https://github.com/ModyQyW/uni-helper/blob/main/LICENSE)                                 | `vscode-uni-app-schemas`、`vscode-uni-app-snippets`、`vscode-uni-cloud-snippets` 和 `vscode-uni-ui-snippets` 的合集，附带一些额外的推荐 |
| [vscode-uni-app-schemas](./packages/vscode-uni-app-schemas/README.md)       | [![vscode](https://vsmarketplacebadge.apphb.com/version-short/ModyQyW.vscode-uni-app-schemas.svg)](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-app-schemas) [![openvsx](https://img.shields.io/badge/dynamic/json?color=brightgreen&label=OpenVSX&query=%24.version&url=https%3A%2F%2Fopen-vsx.org%2Fapi%2FModyQyW%2Fvscode-uni-app-schemas)](https://open-vsx.org/extension/ModyQyW/vscode-uni-app-schemas) [![GitHub license](https://img.shields.io/github/license/ModyQyW/uni-helper)](https://github.com/ModyQyW/uni-helper/blob/main/LICENSE)             | 校验 `uni-app` 中的 `androidPrivacy.json`、`pages.json` 和 `manifest.json` 格式                                                         |
| [vscode-uni-app-snippets](./packages/vscode-uni-app-snippets/README.md)     | [![vscode](https://vsmarketplacebadge.apphb.com/version-short/ModyQyW.vscode-uni-app-snippets.svg)](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-app-snippets) [![openvsx](https://img.shields.io/badge/dynamic/json?color=brightgreen&label=OpenVSX&query=%24.version&url=https%3A%2F%2Fopen-vsx.org%2Fapi%2FModyQyW%2Fvscode-uni-app-snippets)](https://open-vsx.org/extension/ModyQyW/vscode-uni-app-snippets) [![GitHub license](https://img.shields.io/github/license/ModyQyW/uni-helper)](https://github.com/ModyQyW/uni-helper/blob/main/LICENSE)         | `uni-app` 基本能力代码片段                                                                                                              |
| [vscode-uni-cloud-snippets](./packages/vscode-uni-cloud-snippets/README.md) | [![vscode](https://vsmarketplacebadge.apphb.com/version-short/ModyQyW.vscode-uni-cloud-snippets.svg)](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-cloud-snippets) [![openvsx](https://img.shields.io/badge/dynamic/json?color=brightgreen&label=OpenVSX&query=%24.version&url=https%3A%2F%2Fopen-vsx.org%2Fapi%2FModyQyW%2Fvscode-uni-cloud-snippets)](https://open-vsx.org/extension/ModyQyW/vscode-uni-cloud-snippets) [![GitHub license](https://img.shields.io/github/license/ModyQyW/uni-helper)](https://github.com/ModyQyW/uni-helper/blob/main/LICENSE) | `uni-cloud` 基本能力代码片段                                                                                                            |
| [vscode-uni-ui-snippets](./packages/vscode-uni-ui-snippets/README.md)       | [![vscode](https://vsmarketplacebadge.apphb.com/version-short/ModyQyW.vscode-uni-ui-snippets.svg)](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-ui-snippets) [![openvsx](https://img.shields.io/badge/dynamic/json?color=brightgreen&label=OpenVSX&query=%24.version&url=https%3A%2F%2Fopen-vsx.org%2Fapi%2FModyQyW%2Fvscode-uni-ui-snippets)](https://open-vsx.org/extension/ModyQyW/vscode-uni-ui-snippets) [![GitHub license](https://img.shields.io/github/license/ModyQyW/uni-helper)](https://github.com/ModyQyW/uni-helper/blob/main/LICENSE)             | `uni-ui` 组件代码片段                                                                                                                   |
|                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                                                                                                                                         |
| [@modyqyw/uni-request](./packages/uni-request)                              | [![npm](https://img.shields.io/npm/v/@modyqyw/uni-request)](https://www.npmjs.com/package/@modyqyw/uni-request) [![GitHub license](https://img.shields.io/github/license/ModyQyW/uni-helper)](https://github.com/ModyQyW/uni-helper/blob/main/LICENSE)                                                                                                                                                                                                                                                                                                                                     | 为 `uni-app` 打造的基于 `Promise` 的 HTTP 客户端                                                                                        |
| [uni-app-types](./packages/uni-app-types)                                   | [![npm](https://img.shields.io/npm/v/uni-app-types)](https://www.npmjs.com/package/uni-app-types) [![GitHub license](https://img.shields.io/github/license/ModyQyW/uni-helper)](https://github.com/ModyQyW/uni-helper/blob/main/LICENSE)                                                                                                                                                                                                                                                                                                                                                   | `uni-app` 组件类型                                                                                                                      |
| [uni-cloud-types](./packages/uni-cloud-types)                               | [![npm](https://img.shields.io/npm/v/uni-cloud-types)](https://www.npmjs.com/package/uni-cloud-types) [![GitHub license](https://img.shields.io/github/license/ModyQyW/uni-helper)](https://github.com/ModyQyW/uni-helper/blob/main/LICENSE)                                                                                                                                                                                                                                                                                                                                               | `uni-cloud` 组件类型                                                                                                                    |
| [uni-ui-types](./packages/uni-ui-types)                                     | [![npm](https://img.shields.io/npm/v/uni-ui-types)](https://www.npmjs.com/package/uni-ui-types) [![GitHub license](https://img.shields.io/github/license/ModyQyW/uni-helper)](https://github.com/ModyQyW/uni-helper/blob/main/LICENSE)                                                                                                                                                                                                                                                                                                                                                     | `uni-ui` 组件类型                                                                                                                       |
| [uni-app-use](./packages/vueuse-uni-app)                                    | [![npm](https://img.shields.io/npm/v/uni-app-use)](https://www.npmjs.com/package/uni-app-use) [![GitHub license](https://img.shields.io/github/license/ModyQyW/uni-helper)](https://github.com/ModyQyW/uni-helper/blob/main/LICENSE)                                                                                                                                                                                                                                                                                                                                                       | `uni-app` 的 `vueuse`                                                                                                                   |
