import fs from 'fs';

const htmlObject = JSON.parse(
  fs.readFileSync('./snippets/vue-html.json', 'utf-8'),
);
const javascriptObject = JSON.parse(
  fs.readFileSync('./snippets/javascript.json', 'utf-8'),
);

let readmeData = '';

// 添加标题
readmeData += '# vscode-uni-cloud-snippets\n\n';

// 添加插件特性
readmeData += '## 插件特性\n\n';
readmeData += '- uni-cloud 基本能力的代码片段，包括组件和 API\n';
readmeData += '- 支持 vue2\n';
readmeData +=
  '- 参考 [uni-cloud 官方文档](https://uniapp.dcloud.net.cn/uniCloud/README)\n';
readmeData +=
  '- 参考 [Vue.js 风格指南](https://cn.vuejs.org/v2/style-guide/index.html)\n\n';

readmeData +=
  '本插件是 [uni-helper](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-helper) 的一部分。本插件和文档的冲突之处，请以文档为准。\n\n';
readmeData +=
  '欢迎提交 [ISSUE](https://github.com/ModyQyW/uni-helper/issues/new) 和 [PR](https://github.com/ModyQyW/uni-helper/compare) 改进本插件。\n\n';

// 添加使用
readmeData += '## 使用\n\n';
readmeData += '安装插件后重启 VSCode，打开对应的文件，编码时就会有提示。\n\n';

// 添加 HTML
readmeData += '## HTML\n\n';
readmeData += '|API|Prefix|Description|\n|-|-|-|\n';
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
  readmeData += `|${newBody}|${newPrefix}|${description}|\n`;
});
readmeData += '\n';

// 添加 JavaScript/TypeScript
readmeData += '## JavaScript/TypeScript\n\n';
readmeData += '|API|Prefix|Description|\n|-|-|-|\n';
Object.keys(javascriptObject).forEach((key) => {
  const { prefix, body, description } = javascriptObject[key];
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
  readmeData += `|${newBody}|${newPrefix}|${description}|\n`;
});
readmeData += '\n';

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
