import fs from 'fs';

const readme = `# vscode-uni-helper

## 插件目标

让开发者在 VSCode 中开发 uni-* 的体验尽可能好。

## 插件特性

本插件实际上是以下几个插件的扩展包。

- [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets) - 提供 JavaScript 常用代码块
- [Sass](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented) - 支持 sass，vetur 需要
- [React Style Helper](https://marketplace.visualstudio.com/items?itemName=iceworks-team.iceworks-style-helper) - 为样式文件提供辅助开发功能
- [language-stylus](https://marketplace.visualstudio.com/items?itemName=sysoev.language-stylus) - 支持 stylus，vetur 需要
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 集成 ESLint，vetur 需要
- [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) - vue 开发插件
- [create-uniapp-view](https://marketplace.visualstudio.com/items?itemName=mrmaoddxxaa.create-uniapp-view) - 快捷创建 uni-app 页面并添加到 \`pages.json\`，也可以快速创建 uni-app 组件
- [uni-app-snippets](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-app-snippets) - 支持 uni-app 基本能力的代码片段，包括组件和 API
- [uni-app-schemas](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-app-schemas) - 支持 uni-app \`pages.json\` 和 \`manifest.json\` 简单的格式校验
- [uni-cloud-snippets](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-cloud-snippets) - 支持 uni-cloud 基本能力的代码片段，包括组件和 API
- [uni-ui-snippets](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-ui-snippets) - 支持 uni-ui 组件代码片段

插件和文档的冲突之处，请以文档为准。

欢迎提交 [ISSUE](https://github.com/ModyQyW/uni-helper/issues/new) 和 [PR](https://github.com/ModyQyW/uni-helper/compare) 改进本插件。

## 使用

安装插件后重启 VSCode，打开对应的文件会有相关提示。

## 更多

- [前端学习路径](https://modyqyw.github.io/frontend/roadmap/)
- [前端环境配置](https://modyqyw.github.io/frontend/environment/)
- [前端杂项](https://modyqyw.github.io/frontend/misc/)
- [fabric](https://github.com/modyqyw/fabric#readme) - 不同 JavaScript/TypeScript 项目的可共享规范。
- [utils](https://github.com/modyqyw/utils#readme) - 不同 JavaScript/TypeScript 项目的可共享工具方法。
- [mp-scss](https://modyqyw.github.io/mp-scss/) - 一个基于 Flexbox 的小程序 SCSS 样式库，用于快速实现自定义设计。
`;

fs.writeFileSync('README.md', readme);
