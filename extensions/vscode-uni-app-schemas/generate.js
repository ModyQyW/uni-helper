import fs from 'fs';

const readme = `# vscode-uni-app-schemas

## 插件特性

- 校验 uni-app \`androidPrivacy.json\`，\`pages.json\` 和 \`manifest.json\` 格式

本插件是 [uni-helper](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-helper) 的一部分。本插件和文档的冲突之处，请以文档为准。

欢迎提交 [ISSUE](https://github.com/ModyQyW/uni-helper/issues/new) 和 [PR](https://github.com/ModyQyW/uni-helper/compare) 改进本插件。

## 使用

安装插件后重启 VSCode，打开对应的文件，如果有问题就会看到提示。

## 更多

- [前端学习路径参考](https://modyqyw.top/roadmap)
- [前端环境配置参考](https://modyqyw.top/environment/)
- [前端开发参考](https://modyqyw.top/development/)
- [fabric](https://github.com/modyqyw/fabric) - 不同 JavaScript/TypeScript 项目的预设立场的可共享规范。
`;

fs.writeFileSync('README.md', readme);
