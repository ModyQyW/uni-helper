import fs from 'node:fs';

const readme = `# [DEPRECATED] vscode-uni-app-schemas

**该插件已废弃，请迁移到功能一致的 [uni-helper.uni-app-schemas-vscode](https://marketplace.visualstudio.com/items?itemName=uni-helper.uni-app-schemas-vscode)。**

[![License](https://img.shields.io/github/license/ModyQyW/uni-helper)](https://github.com/ModyQyW/uni-helper/blob/main/LICENSE)

[![VSCode](https://vsmarketplacebadge.apphb.com/version-short/ModyQyW.vscode-uni-app-schemas.svg)](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-app-schemas)

[![OpenVSX](https://img.shields.io/badge/dynamic/json?color=brightgreen&label=OpenVSX&query=%24.version&url=https%3A%2F%2Fopen-vsx.org%2Fapi%2FModyQyW%2Fvscode-uni-app-schemas)](https://open-vsx.org/extension/ModyQyW/vscode-uni-app-schemas)

[改动日志](https://github.com/ModyQyW/uni-helper/blob/main/packages/vscode-uni-app-schemas/CHANGELOG.md)

## 插件特性

校验 \`uni-app\` 中的 \`androidPrivacy.json\`、\`pages.json\` 和 \`manifest.json\` 格式。

**插件和文档的冲突之处，请以文档为准。**

插件源代码在 [ModyQyW/uni-helper](https://github.com/ModyQyW/uni-helper)。欢迎提交 ISSUE 和 PR 改进本插件。

## 使用

安装插件后重启 VSCode 即可。

### 不使用插件

在对应文件的顶部加入 \`"$schema"\` 字段即可。

\`\`\`json
{
  // github
  "$schema": "https://raw.githubusercontent.com/ModyQyW/uni-helper/main/packages/vscode-uni-app-schemas/schemas/androidPrivacy.json"
  "$schema": "https://raw.githubusercontent.com/ModyQyW/uni-helper/main/packages/vscode-uni-app-schemas/schemas/manifest.json"
  "$schema": "https://raw.githubusercontent.com/ModyQyW/uni-helper/main/packages/vscode-uni-app-schemas/schemas/pages.json"

  // gitee
  "$schema": "https://gitee.com/ModyQyW/uni-helper/raw/main/packages/vscode-uni-app-schemas/schemas/androidPrivacy.json"
  "$schema": "https://gitee.com/ModyQyW/uni-helper/raw/main/packages/vscode-uni-app-schemas/schemas/manifest.json"
  "$schema": "https://gitee.com/ModyQyW/uni-helper/raw/main/packages/vscode-uni-app-schemas/schemas/pages.json"
}
\`\`\`

## 额外推荐

请查看 [uni-helper 插件说明](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-helper)。
`;

fs.writeFileSync('README.md', readme);
