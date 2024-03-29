# 改动日志

**该依赖已废弃，请迁移到功能一致的 [@uni-helper/vite-plugin-uni-tailwind](https://www.npmjs.com/package/@uni-helper/vite-plugin-uni-tailwind)。**

## 0.7.1 (2022-11-03)

- perf: 优化默认的 `getShouldApply` 方法

## 0.7.0 (2022-10-20)

- feat: 支持 `=` 和 `&` 符号转换

## 0.6.2 (2022-10-12)

- fix: 修复构建

## 0.6.1 (2022-10-12)

- perf: 移除多余元素映射，现在生成的样式代码更少
- fix: 修复 `space-between` 和 `divide-width` 样式替换不正确的问题

## 0.6.0 (2022-09-30)

- feat: 支持替换模板 `class`、`classname`、`class-name`、`*-class`、`*-classname`、`*-class-name` 中的类名
- feat!: 现在要求使用 `node >= 12.2`
- feat!: 现在构建目标是 `node12.2`
- fix: 修复了构建不正常的问题

## 0.5.0

- feat!: 移除 `*` 特殊处理，现在可以指定插件应用于哪些平台，默认为 `MP` 和 `QUICKAPP`
- feat!: 更名为 `vite-plugin-uni-app-tailwind`，现在只支持 `vite`

## 0.4.1

- fix: 修复编译成 `APP` 时 `uni-app` 插入的样式选择器替换不正确的问题

## 0.4.0

- feat: 增加 `replaceStarSelectorPlatform` 和 `getShouldReplaceStarSelector` 选项
- feat!: 增加 `*` 特殊处理，现在默认只在 `MP` 和 `QUICKAPP` 平台替换 `*`
- fix: 修复选择器带有 `uni-` 前缀时仍被替换的问题
- fix: 修复编译成 `APP` 时 `uni-app` 插入的样式选择器替换不正确的问题

## 0.3.1

- fix: 补充元素映射

## 0.3.0

- feat: 增加 `+` 转码

## 0.2.2

- fix: 修复类型定义

## 0.2.1

- fix: 修复构建和导出

## 0.2.0

- feat!: 重命名为 `unplugin-uni-app-tailwind`
- feat: 使用 `unplugin` 支持 `webpack`

## 0.1.0

同 0.0.3。

## 0.0.3

- fix: 修复错误处理文件内容的问题

## 0.0.2

- fix: 修复导入

## 0.0.1

初始化项目。
