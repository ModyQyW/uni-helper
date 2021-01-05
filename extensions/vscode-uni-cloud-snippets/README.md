# vscode-uni-cloud-snippets

## 插件特性

- uni-cloud 基本能力的代码片段，包括组件和 API
- 支持 vue2
- 参考 [uni-cloud 官方文档](https://uniapp.dcloud.net.cn/uniCloud/README)
- 参考 [Vue.js 风格指南](https://cn.vuejs.org/v2/style-guide/index.html)

本插件是 [uni-helper](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-helper) 的一部分。本插件和文档的冲突之处，请以文档为准。

欢迎提交 [ISSUE](https://github.com/ModyQyW/uni-helper/issues/new) 和 [PR](https://github.com/ModyQyW/uni-helper/compare) 改进本插件。

## 使用

安装插件后重启 VSCode，打开对应的文件，编码时就会有提示。

### HTML

使用 [html.js](./html.js) 生成。

|API|Prefix|Description|
|-|-|-|
|`<unicloud-db>`|`unicloud-db`, `<unicloud-db>`|数据库查询组件。更多信息查看 https://uniapp.dcloud.net.cn/uniCloud/unicloud-db。|

### JavaScript/TypeScript

使用 [javascript.js](./javascript.js) 生成。

|API|Prefix|Description|
|-|-|-|
|`uniCloud.callFunction()`|`uniCloud.callFunction`|uniCloud 客户端调用云函数。更多信息查看 https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=clientcallfunction。|
|`uniCloud.database()`|`uniCloud.database`|uniCloud 客户端获取云数据库实例。更多信息查看 https://uniapp.dcloud.net.cn/uniCloud/clientdb。|
|`uniCloud.uploadFile()`|`uniCloud.uploadFile`|uniCloud 客户端上传文件到云存储。更多信息查看 https://uniapp.dcloud.net.cn/uniCloud/storage?id=uploadfile。|
|`uniCloud.getTempFileURL()`|`uniCloud.getTempFileURL`|【腾讯云专用】uniCloud 客户端上传文件到云存储。更多信息查看 https://uniapp.dcloud.net.cn/uniCloud/storage?id=gettempfileurl。|

## 更多

- [前端学习路径](https://modyqyw.top/front-end/roadmap/)
- [前端环境配置](https://modyqyw.top/front-end/environment/)
- [前端杂项](https://modyqyw.top/front-end/misc/)
- [fabric](https://github.com/modyqyw/fabric#readme) - 不同项目的共享配置，包括 Prettier，ESLint，Stylelint，Commitlint，LSLint，EditorConfig，Husky，LintStaged 等
- [mp-scss](https://modyqyw.top/mp-scss/) - 一个基于 Flexbox 的小程序 SCSS 样式库，用于快速实现自定义设计
