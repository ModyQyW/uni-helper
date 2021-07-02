import fs from 'fs';

const htmlObject = JSON.parse(
  fs.readFileSync('./snippets/vue-html.json', 'utf-8'),
);

let readme = `# vscode-uni-ui-snippets

## 插件特性

- uni-ui 组件代码片段
- 支持 vue2
- 参考 [uni-ui 文档](https://github.com/dcloudio/uni-ui#readme)
- 参考 [Vue.js 风格指南](https://cn.vuejs.org/v2/style-guide/index.html)

本插件是 [uni-helper](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-helper) 的一部分。本插件和文档的冲突之处，请以文档为准。

欢迎提交 [ISSUE](https://github.com/ModyQyW/uni-helper/issues/new) 和 [PR](https://github.com/ModyQyW/uni-helper/compare) 改进本插件。

## 使用

安装插件后重启 VSCode，打开对应的文件，编码时就会有提示。

`;

// 添加 HTML
readme += '## HTML\n\n';
readme += '|API|Prefix|Description|\n|-|-|-|\n';
Object.keys(htmlObject).forEach((key) => {
  const { prefix, body, description } = htmlObject[key];
  let newPrefix = '';
  prefix.forEach((text) => {
    newPrefix += `\`${text}\`, `;
  });
  newPrefix = newPrefix.slice(0, -2);
  let newBody = '';
  newBody = `\`${body[0]
    .replace(/(?<=\w) .*[/>]/g, '')
    .replace(/\(?\([\w "$'(),/:=>{|}]+/g, '()')
    .replace(/\$\d[\w/<>-]*/g, '')}`;
  if (newBody.includes('/* ') && !newBody.includes(' */')) {
    newBody += ' */`';
  } else if (newBody.includes('<!-- ') && !newBody.includes(' -->')) {
    newBody += ' -->`';
  } else if (newBody.includes('<') && !newBody.includes('>')) {
    newBody += '>`';
  } else {
    newBody += '`';
  }
  readme += `|${newBody}|${newPrefix}|${description}|\n`;
});
readme += '\n';

// 添加更多
readme += `## 更多

- [前端学习路径](https://modyqyw.github.io/frontend/roadmap/)
- [前端环境配置](https://modyqyw.github.io/frontend/environment/)
- [前端杂项](https://modyqyw.github.io/frontend/misc/)
- [fabric](https://github.com/modyqyw/fabric#readme) - 不同 JavaScript/TypeScript 项目的可共享规范。
- [utils](https://github.com/modyqyw/utils#readme) - 不同 JavaScript/TypeScript 项目的可共享工具方法。
- [mp-scss](https://modyqyw.github.io/mp-scss/) - 一个基于 Flexbox 的小程序 SCSS 样式库，用于快速实现自定义设计。
`;

fs.writeFileSync('README.md', readme);
