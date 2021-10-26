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

## HTML

|API|Prefix|Description|
|-|-|-|
|`<unicloud-db>`|`unicloud-db`, `<unicloud-db>`|数据库查询组件。更多信息查看 <https://uniapp.dcloud.net.cn/uniCloud/unicloud-db>。|

## JavaScript/TypeScript

|API|Prefix|Description|
|-|-|-|
|`uniCloud.callFunction()`|`uniCloud.callFunction`|uniCloud 客户端调用云函数。更多信息查看 <https://uniapp.dcloud.net.cn/uniCloud/client-sdk>。|
|`uniCloud.database()`|`uniCloud.database`|uniCloud 客户端访问云数据库，获取云数据库对象引用。更多信息查看 <https://uniapp.dcloud.net.cn/uniCloud/client-sdk>。|
|`uniCloud.uploadFile()`|`uniCloud.uploadFile`|uniCloud 客户端上传文件到云存储。更多信息查看 <https://uniapp.dcloud.net.cn/uniCloud/client-sdk>。|
|`uniCloud.getTempFileURL()`|`uniCloud.getTempFileURL`|uniCloud 客户端获取云存储文件的临时路径。更多信息查看 <https://uniapp.dcloud.net.cn/uniCloud/client-sdk>。|
|`uniCloud.chooseAndUploadFile()`|`uniCloud.chooseAndUploadFile`|uniCloud 客户端选择文件并上传。更多信息查看 <https://uniapp.dcloud.net.cn/uniCloud/client-sdk>。|
|`uniCloud.getCurrentUserInfo()`|`uniCloud.getCurrentUserInfo`|uniCloud 客户端获取当前用户信息。更多信息查看 <https://uniapp.dcloud.net.cn/uniCloud/client-sdk>。|
|`uniCloud.init()`|`uniCloud.init`|uniCloud 客户端同时使用多个服务空间时初始化额外服务空间。更多信息查看 <https://uniapp.dcloud.net.cn/uniCloud/client-sdk>。|
|`uniCloud.uploadFile()`|`uniCloud.uploadFile`|uniCloud 云函数上传文件到云存储。更多信息查看 <https://uniapp.dcloud.io/uniCloud/storage?id=%e4%ba%91%e5%87%bd%e6%95%b0api>。|
|`uniCloud.getTempFileURL()`|`uniCloud.getTempFileURL`|uniCloud 云函数获取文件下载链接。更多信息查看 <https://uniapp.dcloud.io/uniCloud/storage?id=%e4%ba%91%e5%87%bd%e6%95%b0api>。|
|`uniCloud.deleteFile()`|`uniCloud.deleteFile`|uniCloud 云函数删除云存储文件。更多信息查看 <https://uniapp.dcloud.io/uniCloud/storage?id=%e4%ba%91%e5%87%bd%e6%95%b0api>。|
|`uniCloud.downloadFile()`|`uniCloud.downloadFile`|uniCloud 云函数下载已上传至云开发的文件至本地。更多信息查看 <https://uniapp.dcloud.io/uniCloud/storage?id=%e4%ba%91%e5%87%bd%e6%95%b0api>。|

## 更多

- [前端学习路径参考](https://modyqyw.top/roadmap)
- [前端环境配置参考](https://modyqyw.top/environment/)
- [前端开发参考](https://modyqyw.top/development/)
- [fabric](https://github.com/modyqyw/fabric) - 不同 JavaScript/TypeScript 项目的预设立场的可共享规范。
