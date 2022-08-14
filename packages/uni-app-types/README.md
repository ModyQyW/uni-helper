# uni-app-types

[![npm](https://img.shields.io/npm/v/uni-app-types)](https://www.npmjs.com/package/uni-app-types) [![License](https://img.shields.io/github/license/ModyQyW/uni-helper)](https://github.com/ModyQyW/uni-helper/blob/main/LICENSE)

`uni-app` 组件类型。

基于 [这个 PR](https://github.com/vuejs/core/pull/3399)，[Volar](https://github.com/johnsoncodehk/volar) 已经支持，建议使用 Volar 的 [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471)。

维护直到官方类型推出。

**类型和文档的冲突之处，请以文档为准。**

类型源代码在 [ModyQyW/uni-helper](https://github.com/ModyQyW/uni-helper)。欢迎提交 ISSUE 和 PR 改进类型。

## 使用

- 安装依赖

```shell
npm i -D uni-app-types
```

- 配置 `tsconfig.json`

```json
{
  "compilerOptions": {
    "types": ["uni-app-types"]
  }
}
```

- 重启编辑器 / IDE。

## 致谢

- [uni-base-components-types](https://github.com/satrong/uni-base-components-types)
