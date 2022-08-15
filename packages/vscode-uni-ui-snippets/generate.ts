import fs from 'node:fs';

const htmlObject = JSON.parse(fs.readFileSync('./snippets/vue-html.json', { encoding: 'utf8' }));

let readme = `# vscode-uni-ui-snippets

[![License](https://img.shields.io/github/license/ModyQyW/uni-helper)](https://github.com/ModyQyW/uni-helper/blob/main/LICENSE)

[![VSCode](https://vsmarketplacebadge.apphb.com/version-short/ModyQyW.vscode-uni-ui-snippets.svg)](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-ui-snippets)

[![OpenVSX](https://img.shields.io/badge/dynamic/json?color=brightgreen&label=OpenVSX&query=%24.version&url=https%3A%2F%2Fopen-vsx.org%2Fapi%2FModyQyW%2Fvscode-uni-ui-snippets)](https://open-vsx.org/extension/ModyQyW/vscode-uni-ui-snippets)

[改动日志](https://github.com/ModyQyW/uni-helper/blob/main/packages/vscode-uni-ui-snippets/CHANGELOG.md)

## 插件特性

- uni-ui 组件代码片段
- 参考 [uni-ui 文档](https://github.com/dcloudio/uni-ui#readme)
- 参考 [Vue.js 2 风格指南](https://v2.cn.vuejs.org/v2/style-guide/) 和 [Vue.js 3 风格指南](https://cn.vuejs.org/style-guide/)

**插件和文档的冲突之处，请以文档为准。**

插件源代码在 [ModyQyW/uni-helper](https://github.com/ModyQyW/uni-helper)。欢迎提交 ISSUE 和 PR 改进本插件。

## 使用

安装插件后重启 VSCode 即可。

`;

// 添加 HTML
readme += '## HTML\n\n';
readme += '|API|Prefix|Description|\n|-|-|-|\n';
for (const key of Object.keys(htmlObject)) {
  const { prefix, body, description } = htmlObject[key];
  let newPrefix = '';
  for (const text of prefix) {
    newPrefix += `\`${text}\`, `;
  }
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
}
readme += '\n';

readme += `## 额外推荐

请查看 [uni-helper 插件说明](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-helper)。
`;

fs.writeFileSync('README.md', readme);
