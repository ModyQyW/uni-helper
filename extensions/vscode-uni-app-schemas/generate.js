import fs from 'fs';

let readmeData = '';

// 添加标题
readmeData += '# vscode-uni-app-schemas\n\n';

// 添加插件特性
readmeData += '## 插件特性\n\n';
readmeData += '- 校验 uni-app `pages.json` 和 `manifest.json` 格式\n\n';
readmeData +=
  '本插件是 [uni-helper](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-helper) 的一部分。本插件和文档的冲突之处，请以文档为准。\n\n';
readmeData +=
  '欢迎提交 [ISSUE](https://github.com/ModyQyW/uni-helper/issues/new) 和 [PR](https://github.com/ModyQyW/uni-helper/compare) 改进本插件。\n\n';

// 添加使用
readmeData += '## 使用\n\n';
readmeData +=
  '安装插件后重启 VSCode，打开对应的文件，如果有问题就会看到提示。\n\n';

// 添加更多
readmeData += '## 更多\n\n';
readmeData += '- [前端学习路径](https://modyqyw.top/front-end/roadmap/)\n';
readmeData += '- [前端环境配置](https://modyqyw.top/front-end/environment/)\n';
readmeData += '- [前端杂项](https://modyqyw.top/front-end/misc/)\n';
readmeData +=
  '- [fabric](https://github.com/modyqyw/fabric#readme) - 不同项目的共享配置\n';
readmeData +=
  '- [mp-scss](https://modyqyw.top/mp-scss/) - 一个基于 Flexbox 的小程序 SCSS 样式库，用于快速实现自定义设计\n';

fs.writeFileSync('README.md', readmeData);
