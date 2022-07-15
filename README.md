# uni-helper

`uni-helper` 旨在增强 `uni-app` 系列产品的体验。

`uni-app` 系列产品很棒，它们提供了使用 `vue` 书写小程序和移动应用的能力、降低了全栈的门槛，是我们团队长期以来的选择。

但它们也很糟，推出了和 `node_modules` 不一样的 `uni_modules`，TypeScript 和 Volar 支持都较差。

这个仓库存放了我对增强 `uni-app` 系列产品的体验的探索。希望对你有用。

## 包

| 名称                                                                        | 类型                                                                                                 | 说明                                                                                                                                      |
| --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| [vscode-uni-app-schemas](./packages/vscode-uni-app-schemas/README.md)       | [VSCode 插件](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-app-schemas)    | 校验 `uni-app` 中的 `androidPrivacy.json`、`pages.json` 和 `manifest.json` 格式                                                           |
| [vscode-uni-app-snippets](./packages/vscode-uni-app-snippets/README.md)     | [VSCode 插件](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-app-snippets)   | `uni-app` 基本能力代码片段                                                                                                                |
| [vscode-uni-cloud-snippets](./packages/vscode-uni-cloud-snippets/README.md) | [VSCode 插件](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-cloud-snippets) | `uni-cloud` 基本能力代码片段                                                                                                              |
| [vscode-uni-helper](./packages/vscode-uni-helper/README.md)                 | [VSCode 插件](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-helper)         | `vscode-uni-app-schemas`、`vscode-uni-app-snippets`、`vscode-uni-cloud-snippets` 和 `vscode-uni-ui-snippets` 的合集，并做了一些额外的推荐 |
| [vscode-uni-ui-snippets](./packages/vscode-uni-ui-snippets/README.md)       | [VSCode 插件](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-ui-snippets)    | `uni-ui` 组件代码片段                                                                                                                     |
| [@modyqyw/uni-request](./packages/uni-request)                              | [NPM 包](https://www.npmjs.com/package/@modyqyw/uni-request)                                         | 增强版 `uni.request`                                                                                                                      |
| [uni-app-types](./packages/uni-app-types)                                   | [NPM 包](https://www.npmjs.com/package/uni-app-types)                                                | `uni-app` 组件类型                                                                                                                        |
| [uni-cloud-types](./packages/uni-cloud-types)                               | [NPM 包](https://www.npmjs.com/package/uni-cloud-types)                                              | `uni-cloud` 组件类型                                                                                                                      |
| [uni-ui-types](./packages/uni-ui-types)                                     | [NPM 包](https://www.npmjs.com/package/uni-ui-types)                                                 | `uni-ui` 组件类型                                                                                                                         |
