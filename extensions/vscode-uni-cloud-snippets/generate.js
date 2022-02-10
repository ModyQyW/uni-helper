import fs from 'fs';

const htmlObject = JSON.parse(fs.readFileSync('./snippets/vue-html.json'));
const javascriptObject = JSON.parse(fs.readFileSync('./snippets/javascript.json'));

let readme = `# vscode-uni-cloud-snippets

## 插件特性

- uni-cloud 基本能力代码片段，包括组件和 API
- 参考 [uni-cloud 官方文档](https://uniapp.dcloud.net.cn/uniCloud/README)
- 参考 [Vue.js 2 风格指南](https://cn.vuejs.org/v2/style-guide/index.html) 和 [Vue.js 3 风格指南](https://v3.cn.vuejs.org/style-guide/)

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

// 添加更多
readme += `## 更多

- [个人站点](https://modyqyw.github.io/)
- [个人 Github](https://github.com/ModyQyW)
`;

fs.writeFileSync('README.md', readme);
