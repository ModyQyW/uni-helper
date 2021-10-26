import fs from 'fs';

const htmlObject = JSON.parse(fs.readFileSync('./snippets/vue-html.json', 'utf-8'));
const cssObject = JSON.parse(fs.readFileSync('./snippets/css.json', 'utf-8'));
const javascriptObject = JSON.parse(fs.readFileSync('./snippets/javascript.json', 'utf-8'));

let readme = `# vscode-uni-app-snippets

## 插件特性

- uni-app 基本能力的代码片段，包括组件和 API
- 支持 vue2
- 参考 [uni-app 官方组件文档](https://uniapp.dcloud.io/component/README)
- 参考 [Vue.js 风格指南](https://cn.vuejs.org/v2/style-guide/index.html)

本插件是 [uni-helper](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-helper) 的一部分。本插件和文档的冲突之处，请以文档为准。

建议搭配 @dcloudio/types 和 @dcloudio/uni-helper-json 使用，请注意要在 tsconfig.json 内配置 @dcloudio/types。

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
    .replace(/\b .*[/>]/g, '')
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

// 添加 CSS/LESS/SCSS/SASS/STYLUS
readme += '## CSS/LESS/SCSS/SASS/STYLUS\n\n';
readme += '|API|Prefix|Description|\n|-|-|-|\n';
Object.keys(cssObject).forEach((key) => {
  const { prefix, body, description } = cssObject[key];
  let newPrefix = '';
  prefix.forEach((text) => {
    newPrefix += `\`${text}\`, `;
  });
  newPrefix = newPrefix.slice(0, -2);
  let newBody = '';
  newBody = `\`${body[0]
    .replace(/\b .*[/>]/g, '')
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

// 添加 JavaScript/TypeScript
readme += '## JavaScript/TypeScript\n\n';
readme += '|API|Prefix|Description|\n|-|-|-|\n';
Object.keys(javascriptObject).forEach((key) => {
  const { prefix, body, description } = javascriptObject[key];
  let newPrefix = '';
  prefix.forEach((text) => {
    newPrefix += `\`${text}\`, `;
  });
  newPrefix = newPrefix.slice(0, -2);
  let newBody = '';
  newBody = `\`${body[0]
    .replace(/\b .*[/>]/g, '')
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

readme += `## 更多

- [前端学习路径参考](https://modyqyw.top/roadmap)
- [前端环境配置参考](https://modyqyw.top/environment/)
- [前端开发参考](https://modyqyw.top/development/)
- [fabric](https://github.com/modyqyw/fabric) - 不同 JavaScript/TypeScript 项目的预设立场的可共享规范。
`;

fs.writeFileSync('README.md', readme);
