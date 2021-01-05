# vscode-uni-app-snippets

## 插件特性

- uni-app 基本能力的代码片段，包括组件和 API
- 支持 vue2
- 参考 [uni-app 官方组件文档](https://uniapp.dcloud.io/component/README)
- 参考 [Vue.js 风格指南](https://cn.vuejs.org/v2/style-guide/index.html)

本插件是 [uni-helper](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-helper) 的一部分。本插件和文档的冲突之处，请以文档为准。

[uni-app 官方说明](https://ask.dcloud.net.cn/article/36286)有少量不准确。请先明确：如果你已经安装了 @dcloudio/types 和 @dcloudio/uni-helper-json，**并给 tsconfig.json 配置了 @dcloudio/types**，那么你已经拥有了本插件的大部分功能。如果你信任它们，你完全可以卸载这个插件。但是，如果你不信任官方出的 npm 包，请使用并一起完善这个插件。

欢迎提交 [ISSUE](https://github.com/ModyQyW/uni-helper/issues/new) 和 [PR](https://github.com/ModyQyW/uni-helper/compare) 改进本插件。

## 使用

### HTML

使用 [html.js](./html.js) 生成。

|API|Prefix|Description|
|-|-|-|
|`APP-PLUS`|`platform-app`, `platform-app-plus`, `app`, `app-plus`|uni-app APP 对应的 %PLATFORM 值。更多信息查看 https://uniapp.dcloud.io/platform。|
|`APP-NVUE`|`platform-app-nvue`, `platform-app-plus-nvue`, `app-nvue`, `app-plus-nvue`|uni-app APP-NVUE 对应的 %PLATFORM 值。更多信息查看 https://uniapp.dcloud.io/platform。|
|`H5`|`platform-h5`, `h5`|uni-app H5 对应的 %PLATFORM 值。更多信息查看 https://uniapp.dcloud.io/platform。|
|`MP`|`platform-mp`, `mp`|uni-app 小程序对应的 %PLATFORM 值。更多信息查看 https://uniapp.dcloud.io/platform。|
|`MP-WEIXIN`|`platform-mp-weixin`, `platform-weixin`, `platform-mp-wechat`, `platform-wechat`, `mp-weixin`, `weixin`, `mp-wechat`, `wechat`|uni-app 微信小程序对应的 %PLATFORM 值。更多信息查看 https://uniapp.dcloud.io/platform。|
|`MP-ALIPAY`|`platform-mp-alipay`, `platform-alipay`, `platform-mp-ali`, `platform-ali`, `mp-alipay`, `alipay`, `mp-ali`, `ali`|uni-app 支付宝小程序对应的 %PLATFORM 值。更多信息查看 https://uniapp.dcloud.io/platform。|
|`MP-BAIDU`|`platform-mp-baidu`, `platform-baidu`, `mp-baidu`, `baidu`|uni-app 百度小程序对应的 %PLATFORM 值。更多信息查看 https://uniapp.dcloud.io/platform。|
|`MP-TOUTIAO`|`platform-mp-toutiao`, `platform-toutiao`, `platform-mp-bytedance`, `platform-bytedance`, `mp-toutiao`, `toutiao`, `mp-bytedance`, `bytedance`|uni-app 字节跳动小程序对应的 %PLATFORM 值。更多信息查看 https://uniapp.dcloud.io/platform。|
|`MP-QQ`|`platform-mp-qq`, `platform-qq`, `mp-qq`, `qq`|uni-app QQ 小程序对应的 %PLATFORM 值。更多信息查看 https://uniapp.dcloud.io/platform。|
|`MP-360`|`platform-mp-360`, `platform-360`, `mp-360`, `360`|uni-app 360 小程序对应的 %PLATFORM 值。更多信息查看 https://uniapp.dcloud.io/platform。|
|`QUICKAPP-WEBVIEW`|`platform-quickapp`, `platform-quickapp-webview`, `quickapp`, `quickapp-webview`|uni-app 快应用通用对应的 %PLATFORM 值。更多信息查看 https://uniapp.dcloud.io/platform。|
|`QUICKAPP-WEBVIEW-UNION`|`platform-quickapp-union`, `platform-quickapp-webview-union`, `quickapp-union`, `quickapp-webview-union`|uni-app 快应用联盟对应的 %PLATFORM 值。更多信息查看 https://uniapp.dcloud.io/platform。|
|`QUICKAPP-WEBVIEW-HUAWEI`|`platform-quickapp-huawei`, `platform-quickapp-webview-huawei`, `quickapp-huawei`, `quickapp-webview-huawei`|uni-app 快应用华为对应的 %PLATFORM 值。更多信息查看 https://uniapp.dcloud.io/platform。|
|`<!-- #ifdef -->`|`#ifdef`, `ifdef`|uni-app 条件编译，处理某平台。更多信息查看 https://uniapp.dcloud.io/platform。|
|`<!-- #ifndef -->`|`#ifndef`, `ifndef`|uni-app 条件编译，排除某平台。更多信息查看 https://uniapp.dcloud.io/platform。|
|`<!-- #endif -->`|`#endif`, `endif`|uni-app 结束条件编译。更多信息查看 https://uniapp.dcloud.io/platform。|
|`<view>`|`view`, `<view>`|uni-app 视图容器，用于包裹各种元素内容。更多信息查看 https://uniapp.dcloud.io/component/view。|
|`<scroll-view>`|`scroll-view`, `<scroll-view>`|uni-app 可滚动视图区域。竖向滚动时，需要给一个固定高度。更多信息查看 https://uniapp.dcloud.io/component/scroll-view。|
|`<swiper>`|`swiper`, `<swiper>`|uni-app 滑块视图容器。子组件只能是 swiper-item。竖向滑动时，需要给一个固定高度。更多信息查看 https://uniapp.dcloud.io/component/swiper?id=swiper。|
|`<swiper-item>`|`swiper-item`, `<swiper-item>`|uni-app swiper 的子组件，宽高自动设置为 100%。更多信息查看 https://uniapp.dcloud.io/component/swiper?id=swiper-item。|
|`<match-media>`|`match-media`, `<match-media>`|uni-app 可适配不同屏幕的基本视图组件。更多信息查看 https://uniapp.dcloud.io/component/match-media。|
|`<movable-area>`|`movable-area`, `<movable-area>`|uni-app 可拖动区域组件，指代可拖动的范围。子组件只能是 movable-view。更多信息查看 https://uniapp.dcloud.io/component/movable-view?id=movable-area。|
|`<movable-view>`|`movable-view`, `<movable-view>`|uni-app 可移动的视图容器。只能是 movable-area 的子组件。更多信息查看 https://uniapp.dcloud.io/component/movable-view?id=movable-view。|
|`<cover-view>`|`cover-view`, `<cover-view>`|uni-app 覆盖在原生组件上的文本视图。更多信息查看 https://uniapp.dcloud.io/component/cover-view?id=cover-view。|
|`<cover-image>`|`cover-image`, `<cover-image>`|uni-app 覆盖在原生组件上的图片视图。可以嵌套在 cover-view 里。更多信息查看 https://uniapp.dcloud.io/component/cover-view?id=cover-image。|
|`<icon>`|`icon`, `<icon>`|uni-app 图标。更多信息查看 https://uniapp.dcloud.io/component/icon。|
|`<text>`|`text`, `<text>`|uni-app 文本组件。用于包裹文本内容。更多信息查看 https://uniapp.dcloud.io/component/text。|
|`<rich-text>`|`rich-text`, `<rich-text>`|uni-app 富文本。更多信息查看 https://uniapp.dcloud.io/component/rich-text。|
|`<progress>`|`progress`, `<progress>`|uni-app 进度条。更多信息查看 https://uniapp.dcloud.io/component/progress。|
|`<button>`|`button`, `<button>`|uni-app 按钮。更多信息查看 https://uniapp.dcloud.io/component/button。|
|`<checkbox-group>`|`checkbox-group`, `<checkbox-group>`|uni-app 多选框组。更多信息查看 https://uniapp.dcloud.io/component/checkbox?id=checkbox-group。|
|`<checkbox>`|`checkbox`, `<checkbox>`|uni-app 多选框。更多信息查看 https://uniapp.dcloud.io/component/checkbox?id=checkbox。|
|`<editor>`|`editor`, `<editor>`|uni-app 富文本编辑器，可以对图片、文字格式进行编辑和混排。更多信息查看 https://uniapp.dcloud.io/component/editor。|
|`<form>`|`form`, `<form>`|uni-app 表单，将组件内的用户输入的 switch input checkbox slider radio picker 提交。更多信息查看 https://uniapp.dcloud.io/component/form。|
|`<input>`|`input`, `<input>`|uni-app 输入框。更多信息查看 https://uniapp.dcloud.io/component/input。|
|`<label>`|`label`, `<label>`|uni-app 用来改进表单组件的可用性。更多信息查看 https://uniapp.dcloud.io/component/label。|
|`<picker>`|`picker-selector`, `<picker-selector>`|uni-app 单列选择器。更多信息查看 https://uniapp.dcloud.io/component/picker?id=%e6%99%ae%e9%80%9a%e9%80%89%e6%8b%a9%e5%99%a8。|
|`<picker>`|`picker-multi`, `picker-multi-selector`, `<picker-multi>`, `<picker-multi-selector>`|uni-app 多列选择器。更多信息查看 https://uniapp.dcloud.io/component/picker?id=%e5%a4%9a%e5%88%97%e9%80%89%e6%8b%a9%e5%99%a8。|
|`<picker>`|`picker-time`, `<picker-time>`|uni-app 时间选择器。更多信息查看 https://uniapp.dcloud.io/component/picker?id=%e6%97%b6%e9%97%b4%e9%80%89%e6%8b%a9%e5%99%a8。|
|`<picker>`|`picker-date`, `<picker-date>`|uni-app 日期选择器。更多信息查看 https://uniapp.dcloud.io/component/picker?id=%e6%97%a5%e6%9c%9f%e9%80%89%e6%8b%a9%e5%99%a8。|
|`<picker>`|`picker-region`, `<picker-region>`|uni-app 区域选择器。更多信息查看 https://uniapp.dcloud.io/component/picker?id=%e7%9c%81%e5%b8%82%e5%8c%ba%e9%80%89%e6%8b%a9%e5%99%a8。|
|`<picker-view>`|`picker-view`, `<picker-view>`|uni-app 比 picker 更灵活的嵌入页面的滚动选择器。子组件只能是 picker-view-column。更多信息查看 https://uniapp.dcloud.io/component/picker-view?id=picker-view。|
|`<picker-view-column>`|`picker-view-column`, `<picker-view-column>`|uni-app picker-view 的子组件。更多信息查看 https://uniapp.dcloud.io/component/picker-view?id=picker-view-column。|
|`<radio-group>`|`radio-group`, `<radio-group>`|uni-app 单选框组。更多信息查看 https://uniapp.dcloud.io/component/radio?id=radio-group。|
|`<radio>`|`radio`, `<radio>`|uni-app 单选框。更多信息查看 https://uniapp.dcloud.io/component/radio?id=radio。|
|`<slider>`|`slider`, `<slider>`|uni-app 滑动选择器。更多信息查看 https://uniapp.dcloud.io/component/slider。|
|`<switch>`|`switch`, `<switch>`|uni-app 开关选择器。更多信息查看 https://uniapp.dcloud.io/component/switch。|
|`<textarea>`|`textarea`, `<textarea>`|uni-app 多行输入框。更多信息查看 https://uniapp.dcloud.io/component/textarea。|
|`<navigator>`|`navigator`, `<navigator>`|uni-app 页面跳转组件。只能跳转本地页面。目标页面必须已注册。更多信息查看 https://uniapp.dcloud.io/component/navigator。|
|`<custom-tab-bar>`|`custom-tab-bar`, `<custom-tab-bar>`|uni-app 【H5 专用】自定义 TabBar 组件。更多信息查看 https://uniapp.dcloud.io/component/custom-tab-bar。|
|`<audio>`|`audio`, `<audio>`|uni-app 音频组件。请考虑使用 uni.createInnerAudioContext 代替。更多信息查看 https://uniapp.dcloud.io/component/audio。|
|`<camera>`|`camera`, `<camera>`|uni-app 页面内嵌的区域相机组件。请考虑使用 uni.chooseImage 或 uni.chooseVideo 代替。更多信息查看 https://uniapp.dcloud.io/component/camera。|
|`<image>`|`image`, `<image>`|uni-app 图片组件。更多信息查看 https://uniapp.dcloud.io/component/image。|
|`<video>`|`video`, `<video>`|uni-app 视频组件。更多信息查看 https://uniapp.dcloud.io/component/video。|
|`<live-player>`|`live-player`, `<live-player>`|uni-app 直播拉流组件。更多信息查看 https://uniapp.dcloud.io/component/live-player。|
|`<live-pusher>`|`live-pusher`, `<live-pusher>`|uni-app 直播推流组件。更多信息查看 https://uniapp.dcloud.io/component/live-pusher。|
|`<map>`|`map`, `<map>`|uni-app 地图组件。更多信息查看 https://uniapp.dcloud.io/component/map。|
|`<canvas>`|`canvas`, `<canvas>`|uni-app 画布组件。更多信息查看 https://uniapp.dcloud.io/component/canvas。|
|`<web-view>`|`web-view`, `<web-view>`|uni-app 浏览器组件，自动铺满整个页面。更多信息查看 https://uniapp.dcloud.io/component/web-view。|
|`<ad>`|`ad`, `<ad>`|uni-app 应用内展示的广告组件。更多信息查看 https://uniapp.dcloud.io/component/ad。|
|`<navigation-bar>`|`navigation-bar`, `<navigation-bar>`|uni-app 页面导航条配置节点，用于指定导航栏的一些属性。只能是 page-meta 组件第一个子组件。更多信息查看 https://uniapp.dcloud.io/component/navigation-bar。|
|`<page-meta>`|`page-meta`, `<page-meta>`|uni-app 页面属性配置节点，用于指定页面的一些属性、监听页面事件。只能是页面内第一个组件。更多信息查看 https://uniapp.dcloud.io/component/page-meta。|
|`<open-data>`|`open-data`, `<open-data>`|uni-app 用于展示平台开放的数据。更多信息查看 https://uniapp.dcloud.io/component/open-data。|

## CSS/LESS/SCSS/SASS/STYLUS

使用 [css.js](./css.js) 生成。

|API|Prefix|Description|
|-|-|-|
|`APP-PLUS`|`platform-app`, `platform-app-plus`, `app`, `app-plus`|uni-app APP 对应的 %PLATFORM 值。更多信息查看 https://uniapp.dcloud.io/platform。|
|`APP-NVUE`|`platform-app-nvue`, `platform-app-plus-nvue`, `app-nvue`, `app-plus-nvue`|uni-app APP-NVUE 对应的 %PLATFORM 值。更多信息查看 https://uniapp.dcloud.io/platform。|
|`H5`|`platform-h5`, `h5`|uni-app H5 对应的 %PLATFORM 值。更多信息查看 https://uniapp.dcloud.io/platform。|
|`MP`|`platform-mp`, `mp`|uni-app 小程序对应的 %PLATFORM 值。更多信息查看 https://uniapp.dcloud.io/platform。|
|`MP-WEIXIN`|`platform-mp-weixin`, `platform-weixin`, `platform-mp-wechat`, `platform-wechat`, `mp-weixin`, `weixin`, `mp-wechat`, `wechat`|uni-app 微信小程序对应的 %PLATFORM 值。更多信息查看 https://uniapp.dcloud.io/platform。|
|`MP-ALIPAY`|`platform-mp-alipay`, `platform-alipay`, `platform-mp-ali`, `platform-ali`, `mp-alipay`, `alipay`, `mp-ali`, `ali`|uni-app 支付宝小程序对应的 %PLATFORM 值。更多信息查看 https://uniapp.dcloud.io/platform。|
|`MP-BAIDU`|`platform-mp-baidu`, `platform-baidu`, `mp-baidu`, `baidu`|uni-app 百度小程序对应的 %PLATFORM 值。更多信息查看 https://uniapp.dcloud.io/platform。|
|`MP-TOUTIAO`|`platform-mp-toutiao`, `platform-toutiao`, `platform-mp-bytedance`, `platform-bytedance`, `mp-toutiao`, `toutiao`, `mp-bytedance`, `bytedance`|uni-app 字节跳动小程序对应的 %PLATFORM 值。更多信息查看 https://uniapp.dcloud.io/platform。|
|`MP-QQ`|`platform-mp-qq`, `platform-qq`, `mp-qq`, `qq`|uni-app QQ 小程序对应的 %PLATFORM 值。更多信息查看 https://uniapp.dcloud.io/platform。|
|`MP-360`|`platform-mp-360`, `platform-360`, `mp-360`, `360`|uni-app 360 小程序对应的 %PLATFORM 值。更多信息查看 https://uniapp.dcloud.io/platform。|
|`QUICKAPP-WEBVIEW`|`platform-quickapp`, `platform-quickapp-webview`, `quickapp`, `quickapp-webview`|uni-app 快应用通用对应的 %PLATFORM 值。更多信息查看 https://uniapp.dcloud.io/platform。|
|`QUICKAPP-WEBVIEW-UNION`|`platform-quickapp-union`, `platform-quickapp-webview-union`, `quickapp-union`, `quickapp-webview-union`|uni-app 快应用联盟对应的 %PLATFORM 值。更多信息查看 https://uniapp.dcloud.io/platform。|
|`QUICKAPP-WEBVIEW-HUAWEI`|`platform-quickapp-huawei`, `platform-quickapp-webview-huawei`, `quickapp-huawei`, `quickapp-webview-huawei`|uni-app 快应用华为对应的 %PLATFORM 值。更多信息查看 https://uniapp.dcloud.io/platform。|
|`/* #ifdef */`|`#ifdef`, `ifdef`|uni-app 条件编译，处理某平台。更多信息查看 https://uniapp.dcloud.io/platform。|
|`/* #ifndef */`|`#ifndef`, `ifndef`|uni-app 条件编译，排除某平台。更多信息查看 https://uniapp.dcloud.io/platform。|
|`/* #endif */`|`#endif`, `endif`|uni-app 结束条件编译。更多信息查看 https://uniapp.dcloud.io/platform。|
|`var(--status-bar-height)`|`--status-bar-height`, `var(--status-bar-height)`|uni-app 系统状态栏高度变量。更多信息查看 https://uniapp.dcloud.io/frame?id=css%e5%8f%98%e9%87%8f。|
|`var(--window-top)`|`--window-top`, `var(--window-top)`|uni-app 内容区域距离顶部的距离变量。更多信息查看 https://uniapp.dcloud.io/frame?id=css%e5%8f%98%e9%87%8f。|
|`var(--window-bottom)`|`--window-bottom`, `var(--window-bottom)`|uni-app 内容区域距离底部的距离变量。更多信息查看 https://uniapp.dcloud.io/frame?id=css%e5%8f%98%e9%87%8f。|

### JavaScript/TypeScript

使用 [javascript.js](./javascript.js) 生成。

|API|Prefix|Description|
|-|-|-|
|`APP-PLUS`|`platform-app`, `platform-app-plus`, `app`, `app-plus`|uni-app APP 对应的 %PLATFORM 值。更多信息查看 https://uniapp.dcloud.io/platform。|
|`APP-NVUE`|`platform-app-nvue`, `platform-app-plus-nvue`, `app-nvue`, `app-plus-nvue`|uni-app APP-NVUE 对应的 %PLATFORM 值。更多信息查看 https://uniapp.dcloud.io/platform。|
|`H5`|`platform-h5`, `h5`|uni-app H5 对应的 %PLATFORM 值。更多信息查看 https://uniapp.dcloud.io/platform。|
|`MP`|`platform-mp`, `mp`|uni-app 小程序对应的 %PLATFORM 值。更多信息查看 https://uniapp.dcloud.io/platform。|
|`MP-WEIXIN`|`platform-mp-weixin`, `platform-weixin`, `platform-mp-wechat`, `platform-wechat`, `mp-weixin`, `weixin`, `mp-wechat`, `wechat`|uni-app 微信小程序对应的 %PLATFORM 值。更多信息查看 https://uniapp.dcloud.io/platform。|
|`MP-ALIPAY`|`platform-mp-alipay`, `platform-alipay`, `platform-mp-ali`, `platform-ali`, `mp-alipay`, `alipay`, `mp-ali`, `ali`|uni-app 支付宝小程序对应的 %PLATFORM 值。更多信息查看 https://uniapp.dcloud.io/platform。|
|`MP-BAIDU`|`platform-mp-baidu`, `platform-baidu`, `mp-baidu`, `baidu`|uni-app 百度小程序对应的 %PLATFORM 值。更多信息查看 https://uniapp.dcloud.io/platform。|
|`MP-TOUTIAO`|`platform-mp-toutiao`, `platform-toutiao`, `platform-mp-bytedance`, `platform-bytedance`, `mp-toutiao`, `toutiao`, `mp-bytedance`, `bytedance`|uni-app 字节跳动小程序对应的 %PLATFORM 值。更多信息查看 https://uniapp.dcloud.io/platform。|
|`MP-QQ`|`platform-mp-qq`, `platform-qq`, `mp-qq`, `qq`|uni-app QQ 小程序对应的 %PLATFORM 值。更多信息查看 https://uniapp.dcloud.io/platform。|
|`MP-360`|`platform-mp-360`, `platform-360`, `mp-360`, `360`|uni-app 360 小程序对应的 %PLATFORM 值。更多信息查看 https://uniapp.dcloud.io/platform。|
|`QUICKAPP-WEBVIEW`|`platform-quickapp`, `platform-quickapp-webview`, `quickapp`, `quickapp-webview`|uni-app 快应用通用对应的 %PLATFORM 值。更多信息查看 https://uniapp.dcloud.io/platform。|
|`QUICKAPP-WEBVIEW-UNION`|`platform-quickapp-union`, `platform-quickapp-webview-union`, `quickapp-union`, `quickapp-webview-union`|uni-app 快应用联盟对应的 %PLATFORM 值。更多信息查看 https://uniapp.dcloud.io/platform。|
|`QUICKAPP-WEBVIEW-HUAWEI`|`platform-quickapp-huawei`, `platform-quickapp-webview-huawei`, `quickapp-huawei`, `quickapp-webview-huawei`|uni-app 快应用华为对应的 %PLATFORM 值。更多信息查看 https://uniapp.dcloud.io/platform。|
|`/* #ifdef */`|`#ifdef`, `ifdef`|uni-app 条件编译，处理某平台。更多信息查看 https://uniapp.dcloud.io/platform。|
|`/* #ifndef */`|`#ifndef`, `ifndef`|uni-app 条件编译，排除某平台。更多信息查看 https://uniapp.dcloud.io/platform。|
|`/* #endif */`|`#endif`, `endif`|uni-app 结束条件编译。更多信息查看 https://uniapp.dcloud.io/platform。|
|`process.env.NODE_ENV === 'development'`|`process.env.NODE_ENV === 'development'`|uni-app 判断是否为开发环境。更多信息查看 https://cli.vuejs.org/zh/guide/mode-and-env.html。|
|`process.env.NODE_ENV !== 'development'`|`process.env.NODE_ENV !== 'development'`|uni-app 判断是否不为开发环境。更多信息查看 https://cli.vuejs.org/zh/guide/mode-and-env.html。|
|`process.env.NODE_ENV === 'production'`|`process.env.NODE_ENV === 'production'`|uni-app 判断是否为生产环境。更多信息查看 https://cli.vuejs.org/zh/guide/mode-and-env.html。|
|`process.env.NODE_ENV !== 'production'`|`process.env.NODE_ENV !== 'production'`|uni-app 判断是否不为生产环境。更多信息查看 https://cli.vuejs.org/zh/guide/mode-and-env.html。|
|`uni.base64ToArrayBuffer()`|`uni.base64ToArrayBuffer`|uni-app 将 base64 字符串转成 ArrayBuffer。更多信息查看 https://uniapp.dcloud.io/api/base64ToArrayBuffer。|
|`uni.arrayBufferToBase64()`|`uni.arrayBufferToBase64`|uni-app 将 ArrayBuffer 字符串转成 base64。更多信息查看 https://uniapp.dcloud.io/api/arrayBufferToBase64。|
|`onLaunch()`|`onLaunch`|uni-app 应用生命周期，只能在 App.vue 中监听。uni-app 初始化完成时触发，全局只触发一次。更多信息查看 https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e5%ba%94%e7%94%a8%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f。|
|`onShow()`|`onShow`|uni-app 应用生命周期，只能在 App.vue 中监听。uni-app 启动时或从后台进入前台时触发。更多信息查看 https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e5%ba%94%e7%94%a8%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f。|
|`onHide()`|`onHide`|uni-app 应用生命周期，只能在 App.vue 中监听。uni-app 从前台进入后台时触发。更多信息查看 https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e5%ba%94%e7%94%a8%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f。|
|`onError()`|`onError`|uni-app 应用生命周期，只能在 App.vue 中监听。uni-app 报错时触发。更多信息查看 https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e5%ba%94%e7%94%a8%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f。|
|`onThemeChange()`|`onThemeChange`|uni-app 应用生命周期，只能在 App.vue 中监听。系统主题变化时触发。更多信息查看 https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e5%ba%94%e7%94%a8%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f。|
|`onLoad()`|`onLoad`|uni-app 页面生命周期。页面加载时触发，参数是上个页面传递的数据，类型是 object。更多信息查看 https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e9%a1%b5%e9%9d%a2%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f。|
|`onShow()`|`onShow`|uni-app 页面生命周期。页面在屏幕上显示时触发。更多信息查看 https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e9%a1%b5%e9%9d%a2%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f。|
|`onReady()`|`onReady`|uni-app 页面生命周期。页面初次渲染完成时触发，如果渲染速度快，会在页面进入动画完成前触发。更多信息查看 https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e9%a1%b5%e9%9d%a2%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f。|
|`onHide()`|`onHide`|uni-app 页面生命周期。页面在屏幕上隐藏时触发。更多信息查看 https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e9%a1%b5%e9%9d%a2%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f。|
|`onUnload()`|`onUnload`|uni-app 页面生命周期。页面卸载时触发。更多信息查看 https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e9%a1%b5%e9%9d%a2%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f。|
|`onResize()`|`onResize`|uni-app 页面生命周期。窗口尺寸变化时触发。更多信息查看 https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e9%a1%b5%e9%9d%a2%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f。|
|`onPullDownRefresh()`|`onPullDownRefresh`|uni-app 页面生命周期。用户下拉时触发，一般用于下拉刷新。更多信息查看 https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e9%a1%b5%e9%9d%a2%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f。|
|`onReachBottom()`|`onReachBottom`|uni-app 页面生命周期。页面滚动到底部时触发，一般用于触底加载数据。更多信息查看 https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e9%a1%b5%e9%9d%a2%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f。|
|`onTabItemTap()`|`onTabItemTap`|uni-app 页面生命周期。点击 Tab 时触发。更多信息查看 https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e9%a1%b5%e9%9d%a2%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f。|
|`onShareAppMessage()`|`onShareAppMessage`|uni-app 页面生命周期。点击右上角分享时触发。更多信息查看 https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e9%a1%b5%e9%9d%a2%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f。|
|`onPageScroll()`|`onPageScroll`|uni-app 页面生命周期。页面滚动时触发。更多信息查看 https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e9%a1%b5%e9%9d%a2%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f。|
|`onNavigationBarButtonTap()`|`onNavigationBarButtonTap`|uni-app 页面生命周期。原生标题栏按钮被点击时触发。更多信息查看 https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e9%a1%b5%e9%9d%a2%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f。|
|`onBackPress()`|`onBackPress`|uni-app 页面生命周期。页面返回时触发。更多信息查看 https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e9%a1%b5%e9%9d%a2%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f。|
|`onNavigationBarSearchInputChanged()`|`onNavigationBarSearchInputChanged`|uni-app 页面生命周期。原生标题栏搜索输入框输入时触发。更多信息查看 https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e9%a1%b5%e9%9d%a2%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f。|
|`onNavigationBarSearchInputConfirmed()`|`onNavigationBarSearchInputConfirmed`|uni-app 页面生命周期。原生标题栏搜索输入框确认搜索时触发。更多信息查看 https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e9%a1%b5%e9%9d%a2%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f。|
|`onNavigationBarSearchInputClicked()`|`onNavigationBarSearchInputClicked`|uni-app 页面生命周期。原生标题栏点击搜索输入框时触发。更多信息查看 https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e9%a1%b5%e9%9d%a2%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f。|
|`onShareTimeline()`|`onShareTimeline`|uni-app 页面生命周期。点击右上角转发到朋友圈时触发。更多信息查看 https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e9%a1%b5%e9%9d%a2%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f。|
|`onAddToFavorites()`|`onAddToFavorites`|uni-app 页面生命周期。点击右上角收藏时触发。更多信息查看 https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e9%a1%b5%e9%9d%a2%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f。|
|`getApp()`|`uni.getApp`, `getApp`|uni-app 获取当前应用实例，可以进一步获取 globalData。请考虑使用 vuex 实现同样的效果。更多信息查看 https://uniapp.dcloud.io/collocation/frame/window?id=getapp。|
|`getCurrentPages()`|`uni.getCurrentPages`, `getCurrentPages`|uni-app 获取当前页面栈实例，数组形式，第一个元素是首页。更多信息查看 https://uniapp.dcloud.io/collocation/frame/window?id=getcurrentpages。|
|`uni.$emit()`|`uni.$emit`|uni-app 触发全局自定义事件。过多的全局自定义事件容易导致代码混乱且难以调试，请控制全局自定义事件数量。更多信息查看 https://uniapp.dcloud.io/collocation/frame/communication?id=emit。|
|`uni.$on()`|`uni.$on`|uni-app 监听全局自定义事件。过多的全局自定义事件容易导致代码混乱且难以调试，请控制全局自定义事件数量。更多信息查看 https://uniapp.dcloud.io/collocation/frame/communication?id=on。|
|`uni.$once()`|`uni.$once`|uni-app 一次性监听全局自定义事件。过多的全局自定义事件容易导致代码混乱且难以调试，请控制全局自定义事件数量。更多信息查看 https://uniapp.dcloud.io/collocation/frame/communication?id=once。|
|`uni.$off()`|`uni.$off`|uni-app 移除全局自定义事件监听。过多的全局自定义事件容易导致代码混乱且难以调试，请控制全局自定义事件数量。更多信息查看 https://uniapp.dcloud.io/collocation/frame/communication?id=off。|
|`uni.request()`|`uni.request`|uni-app 发起网络请求。请考虑使用已经封装好的库，如 uni-ajax 和 luch-request。更多信息查看 https://uniapp.dcloud.io/api/request/request。|
|`uni.uploadFile()`|`uni.uploadFile`|uni-app 上传文件。更多信息查看 https://uniapp.dcloud.io/api/request/network-file?id=uploadfile。|
|`uni.downloadFile()`|`uni.downloadFile`|uni-app 下载文件。更多信息查看 https://uniapp.dcloud.io/api/request/network-file?id=downloadfile。|
|`uni.connectSocket()`|`uni.connectSocket`|uni-app 创建 WebSocket 连接。更多信息查看 https://uniapp.dcloud.io/api/request/websocket?id=connectsocket。|
|`uni.onSocketOpen()`|`uni.onSocketOpen`|uni-app 监听 WebSocket 连接打开。更多信息查看 https://uniapp.dcloud.io/api/request/websocket?id=onsocketopen。|
|`uni.onSocketError()`|`uni.onSocketError`|uni-app 监听 WebSocket 错误。更多信息查看 https://uniapp.dcloud.io/api/request/websocket?id=onsocketerror。|
|`uni.sendSocketMessage()`|`uni.sendSocketMessage`|uni-app 通过 WebSocket 发送数据。更多信息查看 https://uniapp.dcloud.io/api/request/websocket?id=sendsocketmessage。|
|`uni.onSocketMessage()`|`uni.onSocketMessage`|uni-app 监听 WebSocket 接收消息。更多信息查看 https://uniapp.dcloud.io/api/request/websocket?id=onsocketmessage。|
|`uni.closeSocket()`|`uni.closeSocket`|uni-app 关闭 WebSocket 连接。更多信息查看 https://uniapp.dcloud.io/api/request/websocket?id=closesocket。|
|`uni.onSocketClose()`|`uni.onSocketClose`|uni-app 监听 WebSocket 关闭。更多信息查看 https://uniapp.dcloud.io/api/request/websocket?id=onsocketclose。|
|`uni.navigateTo()`|`uni.navigateTo`|uni-app 保留当前页面，跳转到某个非 TabBar 页面。更多信息查看 https://uniapp.dcloud.io/api/router?id=navigateto。|
|`uni.redirectTo()`|`uni.redirectTo`|uni-app 关闭当前页面，跳转到某个非 Tab 页面。更多信息查看 https://uniapp.dcloud.io/api/router?id=redirectto。|
|`uni.reLaunch()`|`uni.reLaunch`|uni-app 关闭所有页面，打开到某个页面。更多信息查看 https://uniapp.dcloud.io/api/router?id=relaunch。|
|`uni.switchTab()`|`uni.switchTab`|uni-app 关闭所有非 TabBar 页面，跳转到 TabBar 页面。更多信息查看 https://uniapp.dcloud.io/api/router?id=switchtab。|
|`uni.navigateBack()`|`uni.navigateBack`|uni-app 关闭当前页面并返回。更多信息查看 https://uniapp.dcloud.io/api/router?id=navigateback。|
|`uni.setStorage()`|`uni.setStorage`|uni-app 异步存储本地数据。更多信息查看 https://uniapp.dcloud.io/api/storage/storage?id=setstorage。|
|`uni.setStorageSync()`|`uni.setStorageSync`|uni-app 同步存储本地数据。更多信息查看 https://uniapp.dcloud.io/api/storage/storage?id=setstoragesync。|
|`uni.getStorage()`|`uni.getStorage`|uni-app 异步读取本地数据。更多信息查看 https://uniapp.dcloud.io/api/storage/storage?id=getstorage。|
|`uni.getStorageSync()`|`uni.getStorageSync`|uni-app 同步读取本地数据。更多信息查看 https://uniapp.dcloud.io/api/storage/storage?id=getstoragesync。|
|`uni.getStorageInfo()`|`uni.getStorageInfo`|uni-app 异步读取存储信息。更多信息查看 https://uniapp.dcloud.io/api/storage/storage?id=getstorageinfo。|
|`uni.getStorageInfoSync()`|`uni.getStorageInfoSync`|uni-app 同步读取存储信息。更多信息查看 https://uniapp.dcloud.io/api/storage/storage?id=getstorageinfosync。|
|`uni.removeStorage()`|`uni.removeStorage`|uni-app 异步移除本地数据。更多信息查看 https://uniapp.dcloud.io/api/storage/storage?id=removestorage。|
|`uni.removeStorageSync()`|`uni.removeStorageSync`|uni-app 同步移除本地数据。更多信息查看 https://uniapp.dcloud.io/api/storage/storage?id=removestoragesync。|
|`uni.clearStorage()`|`uni.clearStorage`|uni-app 异步清空本地数据。更多信息查看 https://uniapp.dcloud.io/api/storage/storage?id=clearstorage。|
|`uni.clearStorageSync()`|`uni.clearStorageSync`|uni-app 同步清理本地数据。更多信息查看 https://uniapp.dcloud.io/api/storage/storage?id=clearstoragesync。|
|`uni.getLocation()`|`uni.getLocation`|uni-app 获取当前地理位置。如果需要转换坐标到不同坐标系，建议使用已经封装好的库，如 gcoord 和 coordtransform。更多信息查看 https://uniapp.dcloud.io/api/location/location?id=getlocation。|
|`uni.chooseLocation()`|`uni.chooseLocation`|uni-app 打开地图选择位置。更多信息查看 https://uniapp.dcloud.io/api/location/location?id=chooselocation。|
|`uni.openLocation()`|`uni.openLocation`|uni-app 使用内置地图查看位置。更多信息查看 https://uniapp.dcloud.io/api/location/open-location。|
|`uni.createMapContext()`|`uni.createMapContext`|uni-app 创建地图上下文对象。更多信息查看 https://uniapp.dcloud.io/api/location/map?id=createmapcontext。|
|`uni.chooseImage()`|`uni.chooseImage`|uni-app 选择相册图片或使用相机拍照。更多信息查看 https://uniapp.dcloud.io/api/media/image?id=chooseimage。|
|`uni.previewImage()`|`uni.previewImage`|uni-app 预览图片。更多信息查看 https://uniapp.dcloud.io/api/media/image?id=unipreviewimageobject。|
|`uni.getImageInfo()`|`uni.getImageInfo`|uni-app 获取图片信息。更多信息查看 https://uniapp.dcloud.io/api/media/image?id=getimageinfo。|
|`uni.saveImageToPhotosAlbum()`|`uni.saveImageToPhotosAlbum`|uni-app 保存图片到相册。更多信息查看 https://uniapp.dcloud.io/api/media/image?id=saveimagetophotosalbum。|
|`uni.compressImage()`|`uni.compressImage`|uni-app 压缩图片。更多信息查看 https://uniapp.dcloud.io/api/media/image?id=compressimage。|
|`uni.chooseFile()`|`uni.chooseFile`|uni-app 选择本地文件。更多信息查看 https://uniapp.dcloud.io/api/media/file?id=choosefile。|
|`uni.getRecorderManager()`|`uni.getRecorderManager`|uni-app 获取全局唯一录音管理器。更多信息查看 https://uniapp.dcloud.io/api/media/record-manager?id=getrecordermanager。|
|`uni.getBackgroundAudioManager()`|`uni.getBackgroundAudioManager`|uni-app 获取全局唯一背景音频管理器。更多信息查看 https://uniapp.dcloud.io/api/media/background-audio-manager?id=getbackgroundaudiomanager。|
|`uni.createInnerAudioContext()`|`uni.createInnerAudioContext`|uni-app 创建音频上下文对象。更多信息查看 https://uniapp.dcloud.io/api/media/audio-context?id=createinneraudiocontext。|
|`uni.chooseVideo()`|`uni.chooseVideo`|uni-app 选择相册视频或使用相机录像。更多信息查看 https://uniapp.dcloud.io/api/media/video?id=choosevideo。|
|`uni.saveVideoToPhotosAlbum()`|`uni.saveVideoToPhotosAlbum`|uni-app 保存视频到相册。更多信息查看 https://uniapp.dcloud.io/api/media/video?id=savevideotophotosalbum。|
|`uni.createVideoContext()`|`uni.createVideoContext`|uni-app 创建视频上下文对象。更多信息查看 https://uniapp.dcloud.io/api/media/video-context?id=createvideocontext.|
|`uni.createCameraContext()`|`uni.createCameraContext`|uni-app 创建相机上下文对象。更多信息查看 https://uniapp.dcloud.io/api/media/camera-context?id=createcameracontext。|
|`uni.createLivePlayerContext()`|`uni.createLivePlayerContext`|uni-app 创建直播拉流上下文对象。更多信息查看 https://uniapp.dcloud.io/api/media/live-player-context?id=createliveplayercontext。|
|`uni.createLivePusherContext()`|`uni.createLivePusherContext`|uni-app 创建直播推流上下文对象。更多信息查看 https://uniapp.dcloud.io/api/media/live-player-context?id=createlivepushercontext。|
|`uni.getSystemInfo()`|`uni.getSystemInfo`|uni-app 异步获取系统信息。更多信息查看 https://uniapp.dcloud.io/api/system/info?id=getsysteminfo。|
|`uni.getSystemInfoSync()`|`uni.getSystemInfoSync`|uni-app 同步获取系统信息。更多信息查看 https://uniapp.dcloud.io/api/system/info?id=getsysteminfosync。|
|`uni.canIUse()`|`uni.canIUse`|uni-app 判断 API、回调、参数、组件等是否在当前版本可用。更多信息查看 https://uniapp.dcloud.io/api/system/info?id=caniuse。|
|`uni.onMemoryWarning()`|`uni.onMemoryWarning`|uni-app 内存不足告警时触发。更多信息查看 https://uniapp.dcloud.io/api/system/memory。|
|`uni.getNetworkType()`|`uni.getNetworkType`|uni-app 获取网络类型。更多信息查看 https://uniapp.dcloud.io/api/system/network?id=getnetworktype。|
|`uni.onNetworkStatusChange()`|`uni.onNetworkStatusChange`|uni-app 网络状态变化时触发。更多信息查看 https://uniapp.dcloud.io/api/system/network?id=onnetworkstatuschange。|
|`uni.onAccelerometerChange()`|`uni.onAccelerometerChange`|uni-app 监听加速度数据。更多信息查看 https://uniapp.dcloud.io/api/system/accelerometer?id=onaccelerometerchange。|
|`uni.offAccelerometerChange()`|`uni.offAccelerometerChange`|uni-app 取消监听加速度数据。更多信息查看 https://uniapp.dcloud.io/api/system/accelerometer?id=offaccelerometerchange。|
|`uni.startAccelerometer()`|`uni.startAccelerometer`|uni-app 开始监听加速度数据。更多信息查看 https://uniapp.dcloud.io/api/system/accelerometer?id=startaccelerometer。|
|`uni.stopAccelerometer()`|`uni.stopAccelerometer`|uni-app 停止监听加速度数据。更多信息查看 https://uniapp.dcloud.io/api/system/accelerometer?id=stopaccelerometer。|
|`uni.onCompassChange()`|`uni.onCompassChange`|uni-app 监听罗盘数据。更多信息查看 https://uniapp.dcloud.io/api/system/compass?id=oncompasschange。|
|`uni.offCompassChange()`|`uni.offCompassChange`|uni-app 取消监听罗盘数据。更多信息查看 https://uniapp.dcloud.io/api/system/compass?id=offcompasschange。|
|`uni.startCompass()`|`uni.startCompass`|uni-app 开始监听罗盘数据。更多信息查看 https://uniapp.dcloud.io/api/system/compass?id=startcompass。|
|`uni.stopCompass()`|`uni.stopCompass`|uni-app 停止监听罗盘数据。更多信息查看 https://uniapp.dcloud.io/api/system/compass?id=stopcompass。|
|`uni.onGyroscopeChange()`|`uni.onGyroscopeChange`|uni-app 监听陀螺仪数据。更多信息查看 https://uniapp.dcloud.io/api/system/gyroscope?id=ongyroscopechange。|
|`uni.offGyroscopeChange()`|`uni.offGyroscopeChange`|uni-app 取消监听陀螺仪数据。更多信息查看 https://uniapp.dcloud.io/api/system/gyroscope?id=offgyroscopechange。|
|`uni.startGyroscope()`|`uni.startGyroscope`|uni-app 开始监听陀螺仪数据。更多信息查看 https://uniapp.dcloud.io/api/system/gyroscope?id=startgyroscope。|
|`uni.stopGyroscope()`|`uni.stopGyroscope`|uni-app 停止监听陀螺仪数据。更多信息查看 https://uniapp.dcloud.io/api/system/gyroscope?id=stopgyroscope。|
|`uni.makePhoneCall()`|`uni.makePhoneCall`|uni-app 拨打电话。更多信息查看 https://uniapp.dcloud.io/api/system/phone。|
|`uni.scanCode()`|`uni.scanCode`|uni-app 扫码。更多信息查看 https://uniapp.dcloud.io/api/system/barcode。|
|`uni.setClipboardData()`|`uni.setClipboardData`|uni-app 设置剪贴板内容。更多信息查看 https://uniapp.dcloud.io/api/system/clipboard。|
|`uni.getClipboardData()`|`uni.getClipboardData`|uni-app 获取剪贴板内容。更多信息查看 https://uniapp.dcloud.io/api/system/clipboard。|
|`uni.setScreenBrightness()`|`uni.setScreenBrightness`|uni-app 设置屏幕亮度。更多信息查看 https://uniapp.dcloud.io/api/system/brightness?id=setscreenbrightness。|
|`uni.getScreenBrightness()`|`uni.getScreenBrightness`|uni-app 获取屏幕亮度。更多信息查看 https://uniapp.dcloud.io/api/system/brightness?id=getscreenbrightness。|
|`uni.setScreenBrightness()`|`uni.setScreenBrightness`|uni-app 设置屏幕亮度。更多信息查看 https://uniapp.dcloud.io/api/system/brightness?id=setscreenbrightness。|
|`uni.onUserCaptureScreen()`|`uni.onUserCaptureScreen`|uni-app 监听截屏。更多信息查看 https://uniapp.dcloud.io/api/system/capture-screen。|
|`uni.vibrate()`|`uni.vibrate`|uni-app 使手机振动。更多信息查看 https://uniapp.dcloud.io/api/system/vibrate?id=vibrate。|
|`uni.vibrateLong()`|`uni.vibrateLong`|uni-app 使手机长振动。更多信息查看 https://uniapp.dcloud.io/api/system/vibrate?id=vibratelong。|
|`uni.vibrateShort()`|`uni.vibrateShort`|uni-app 使手机短振动。更多信息查看 https://uniapp.dcloud.io/api/system/vibrate?id=vibrateshort。|
|`uni.addPhoneContact()`|`uni.addPhoneContact`|uni-app 添加手机联系人。更多信息查看 https://uniapp.dcloud.io/api/system/contact。|
|`uni.openBluetoothAdapter()`|`uni.openBluetoothAdapter`|uni-app 初始化蓝牙模块。更多信息查看 https://uniapp.dcloud.io/api/system/bluetooth。|
|`uni.startBluetoothDevicesDiscovery()`|`uni.startBluetoothDevicesDiscovery`, `uStartBluetoothDevicesDiscovery`|uni-app 开始搜寻蓝牙设备。更多信息查看 https://uniapp.dcloud.io/api/system/bluetooth。|
|`uni.onBluetoothDeviceFound()`|`uni.onBluetoothDeviceFound`|uni-app 监听搜寻到蓝牙设备。更多信息查看 https://uniapp.dcloud.io/api/system/bluetooth。|
|`uni.stopBluetoothDevicesDiscovery()`|`uni.stopBluetoothDevicesDiscovery`, `uStopBluetoothDevicesDiscovery`|uni-app 停止搜寻蓝牙设备。更多信息查看 https://uniapp.dcloud.io/api/system/bluetooth。|
|`uni.onBluetoothAdapterStateChange()`|`uni.onBluetoothAdapterStateChange`, `uOnBluetoothAdapterStateChange`|uni-app 监听蓝牙适配器状态变化。更多信息查看 https://uniapp.dcloud.io/api/system/bluetooth。|
|`uni.getConnectedBluetoothDevices()`|`uni.getConnectedBluetoothDevices`|uni-app 根据 uuid 获取已经连接的蓝牙设备。更多信息查看 https://uniapp.dcloud.io/api/system/bluetooth。|
|`uni.getBluetoothDevices()`|`uni.getBluetoothDevices`|uni-app 获取蓝牙模块生效期间所有已发现的蓝牙设备。更多信息查看 https://uniapp.dcloud.io/api/system/bluetooth。|
|`uni.getBluetoothAdapterState()`|`uni.getBluetoothAdapterState`|uni-app 获取蓝牙适配器状态。更多信息查看 https://uniapp.dcloud.io/api/system/bluetooth。|
|`uni.getBluetoothAdapterState()`|`uni.closeBluetoothAdapter`|uni-app 关闭蓝牙模块。更多信息查看 https://uniapp.dcloud.io/api/system/bluetooth。|
|`uni.setBLEMTU()`|`uni.setBLEMTU`|uni-app 设置蓝牙最大传输单元。更多信息查看 https://uniapp.dcloud.io/api/system/ble。|
|`uni.writeBLECharacteristicValue()`|`uni.writeBLECharacteristicValue`, `uWriteBLECharacteristicValue`|uni-app 向低功耗蓝牙设备特征值写入二进制数据。更多信息查看 https://uniapp.dcloud.io/api/system/ble。|
|`uni.readBLECharacteristicValue()`|`uni.readBLECharacteristicValue`|uni-app 读取低功耗蓝牙设备特征值的二进制数据。更多信息查看 https://uniapp.dcloud.io/api/system/ble。|
|`uni.onBLEConnectionStateChange()`|`uni.onBLEConnectionStateChange`|uni-app 监听低功耗蓝牙连接状态改变。更多信息查看 https://uniapp.dcloud.io/api/system/ble。|
|`uni.onBLECharacteristicValueChange()`|`uni.onBLECharacteristicValueChange`, `uOnBLECharacteristicValueChange`|uni-app 监听低功耗蓝牙设备特征值变化。更多信息查看 https://uniapp.dcloud.io/api/system/ble。|
|`uni.notifyBLECharacteristicValueChange()`|`uni.notifyBLECharacteristicValueChange`, `uNotifyBLECharacteristicValueChange`|uni-app 启用低功耗蓝牙设备特征值变化时的 notify 功能。更多信息查看 https://uniapp.dcloud.io/api/system/ble。|
|`uni.getBLEDeviceServices()`|`uni.getBLEDeviceServices`|uni-app 获取蓝牙设备所有服务。更多信息查看 https://uniapp.dcloud.io/api/system/ble。|
|`uni.getBLEDeviceRSSI()`|`uni.getBLEDeviceRSSI`|uni-app 获取蓝牙设备信号强度。更多信息查看 https://uniapp.dcloud.io/api/system/ble。|
|`uni.getBLEDeviceCharacteristics()`|`uni.getBLEDeviceCharacteristics`|uni-app 获取蓝牙设备某个服务所有特征值。更多信息查看 https://uniapp.dcloud.io/api/system/ble。|
|`uni.createBLEConnection()`|`uni.createBLEConnection`|uni-app 连接低功耗蓝牙设备。更多信息查看 https://uniapp.dcloud.io/api/system/ble。|
|`uni.closeBLEConnection()`|`uni.closeBLEConnection`|uni-app 断开与低功耗蓝牙设备的连接。更多信息查看 https://uniapp.dcloud.io/api/system/ble。|
|`uni.onBeaconServiceChange()`|`uni.onBeaconServiceChange`|uni-app 监听 iBeacon 服务状态变化。更多信息查看 https://uniapp.dcloud.io/api/system/ibeacon。|
|`uni.onBeaconUpdate()`|`uni.onBeaconUpdate`|uni-app 监听 iBeacon 设备更新。更多信息查看 https://uniapp.dcloud.io/api/system/ibeacon。|
|`uni.getBeacons()`|`uni.getBeacons`|uni-app 获取所有已搜索到的 iBeacon 设备。更多信息查看 https://uniapp.dcloud.io/api/system/ibeacon。|
|`uni.startBeaconDiscovery()`|`uni.startBeaconDiscovery`|uni-app 开始搜索附近 iBeacon 设备。更多信息查看 https://uniapp.dcloud.io/api/system/ibeacon。|
|`uni.stopBeaconDiscovery()`|`uni.stopBeaconDiscovery`|uni-app 停止搜索附近 iBeacon 设备。更多信息查看 https://uniapp.dcloud.io/api/system/ibeacon。|
|`uni.startSoterAuthentication()`|`uni.startSoterAuthentication`|uni-app 开始 SOTER 生物认证。更多信息查看 https://uniapp.dcloud.io/api/system/authentication?id=startsoterauthentication。|
|`uni.checkIsSupportSoterAuthentication()`|`uni.checkIsSupportSoterAuthentication`|uni-app 获取支持的 SOTER 生物认证方式。更多信息查看 https://uniapp.dcloud.io/api/system/authentication?id=checkissupportsoterauthentication。|
|`uni.checkIsSoterEnrolledInDevice()`|`uni.checkIsSoterEnrolledInDevice`|uni-app 获取设备内是否录入生物信息。更多信息查看 https://uniapp.dcloud.io/api/system/authentication?id=checkissoterenrolledindevice。|
|`uni.showToast()`|`uni.showToast`|uni-app 显示消息提示框。这可能与加载提示框冲突，请在测试时以真机测试为准。更多信息查看 https://uniapp.dcloud.io/api/ui/prompt?id=showtoast。|
|`uni.hideToast()`|`uni.hideToast`|uni-app 隐藏消息提示框。更多信息查看 https://uniapp.dcloud.io/api/ui/prompt?id=hidetoast。|
|`uni.showLoading()`|`uni.showLoading`|uni-app 显示加载中提示框。这可能与消息提示框冲突，请在测试时以真机测试为准。更多信息查看 https://uniapp.dcloud.io/api/ui/prompt?id=showloading。|
|`uni.hideLoading()`|`uni.hideLoading`|uni-app 隐藏加载中提示框。更多信息查看 https://uniapp.dcloud.io/api/ui/prompt?id=hideloading。|
|`uni.showModal()`|`uni.showModal`|uni-app 显示模态弹窗。更多信息查看 https://uniapp.dcloud.io/api/ui/prompt?id=showmodal。|
|`uni.showActionSheet()`|`uni.showActionSheet`|uni-app 显示操作菜单。更多信息查看 https://uniapp.dcloud.io/api/ui/prompt?id=showactionsheet。|
|`uni.setNavigationBarTitle()`|`uni.setNavigationBarTitle`|uni-app 动态设置当前页面标题。更多信息查看 https://uniapp.dcloud.io/api/ui/navigationbar?id=setnavigationbartitle。|
|`uni.setNavigationBarColor()`|`uni.setNavigationBarColor`|uni-app 设置页面导航条颜色。更多信息查看 https://uniapp.dcloud.io/api/ui/navigationbar?id=setnavigationbarcolor。|
|`uni.showNavigationBarLoading()`|`uni.showNavigationBarLoading`|uni-app 在当前页面显示导航条加载动画。更多信息查看 https://uniapp.dcloud.io/api/ui/navigationbar?id=shownavigationbarloading。|
|`uni.hideNavigationBarLoading()`|`uni.hideNavigationBarLoading`|uni-app 在当前页面隐藏导航条加载动画。更多信息查看 https://uniapp.dcloud.io/api/ui/navigationbar?id=hidenavigationbarloading。|
|`uni.hideHomeButton()`|`uni.hideHomeButton`|uni-app 隐藏返回首页按钮。更多信息查看 https://uniapp.dcloud.io/api/ui/navigationbar?id=hidehomebutton。|
|`uni.setTabBarItem()`|`uni.setTabBarItem`|uni-app 动态设置 TabBar 某一项内容。更多信息查看 https://uniapp.dcloud.io/api/ui/tabbar?id=settabbaritem。|
|`uni.setTabBarStyle()`|`uni.setTabBarStyle`|uni-app 动态设置 TabBar 整体样式。更多信息查看 https://uniapp.dcloud.io/api/ui/tabbar?id=settabbarstyle。|
|`uni.hideTabBar()`|`uni.hideTabBar`|uni-app 隐藏 TabBar。更多信息查看 https://uniapp.dcloud.io/api/ui/tabbar?id=hidetabbar。|
|`uni.showTabBar()`|`uni.showTabBar`|uni-app 显示 TabBar。更多信息查看 https://uniapp.dcloud.io/api/ui/tabbar?id=showtabbar。|
|`uni.setTabBarBadge()`|`uni.setTabBarBadge`|uni-app 设置 TabBar 某一项徽标。更多信息查看 https://uniapp.dcloud.io/api/ui/tabbar?id=settabbarbadge。|
|`uni.removeTabBarBadge()`|`uni.removeTabBarBadge`|uni-app 移除 tabBar 某一项徽标。更多信息查看 https://uniapp.dcloud.io/api/ui/tabbar?id=removetabbarbadge。|
|`uni.showTabBarRedDot()`|`uni.showTabBarRedDot`|uni-app 设置 TabBar 某一项红点。更多信息查看 https://uniapp.dcloud.io/api/ui/tabbar?id=showtabbarreddot。|
|`uni.hideTabBarRedDot()`|`uni.hideTabBarRedDot`|uni-app 移除 tabBar 某一项红点。更多信息查看 https://uniapp.dcloud.io/api/ui/tabbar?id=hidetabbarreddot。|
|`uni.setBackgroundColor()`|`uni.setBackgroundColor`|uni-app 动态设置窗口背景色。更多信息查看 https://uniapp.dcloud.io/api/ui/bgcolor?id=setbackgroundcolor。|
|`uni.setBackgroundTextStyle()`|`uni.setBackgroundTextStyle`|uni-app 动态设置下拉背景字体、加载���的样式。更多信息查看 https://uniapp.dcloud.io/api/ui/bgcolor?id=setbackgroundtextstyle。|
|`uni.createAnimation()`|`uni.createAnimation`|uni-app 创建动画实例。更多信息查看 https://uniapp.dcloud.io/api/ui/animation。|
|`uni.pageScrollTo()`|`uni.pageScrollTo`|uni-app 将页面滚动到目标位置。更多信息查看 https://uniapp.dcloud.io/api/ui/scroll。|
|`uni.onWindowResize()`|`uni.onWindowResize`|uni-app 监听窗口尺寸变化。更多信息查看 https://uniapp.dcloud.io/api/ui/window?id=onwindowresize。|
|`uni.offWindowResize()`|`uni.offWindowResize`|uni-app 取消监听窗口尺寸变化。更多信息查看 https://uniapp.dcloud.io/api/ui/window?id=offwindowresize。|
|`uni.loadFontFace()`|`uni.loadFontFace`|uni-app 动态加载网络字体。更多信息查看 https://uniapp.dcloud.io/api/ui/font。|
|`uni.startPullDownRefresh()`|`uni.startPullDownRefresh`|uni-app 开始下拉刷新。更多信息查看 https://uniapp.dcloud.io/api/ui/pulldown?id=startpulldownrefresh。|
|`uni.stopPullDownRefresh()`|`uni.stopPullDownRefresh`|uni-app 停止下拉刷新。更多信息查看 https://uniapp.dcloud.io/api/ui/pulldown?id=startpulldownrefresh。|
|`uni.createSelectorQuery()`|`uni.createSelectorQuery`|uni-app 创建查询节点信息的实例。更多信息查看 https://uniapp.dcloud.io/api/ui/nodes-info。|
|`uni.getMenuButtonBoundingClientRect()`|`uni.getMenuButtonBoundingClientRect`|uni-app 获取菜单按钮信息。更多信息查看 https://uniapp.dcloud.io/api/ui/menuButton。|
|`uni.saveFile()`|`uni.saveFile`|uni-app 保存文件到本地。更多信息查看 https://uniapp.dcloud.io/api/file/file?id=savefile。|
|`uni.getSavedFileList()`|`uni.getSavedFileList`|uni-app 获取本地已保存的文件列表。更多信息查看 https://uniapp.dcloud.io/api/file/file?id=getsavedfilelist。|
|`uni.getSavedFileInfo()`|`uni.getSavedFileInfo`|uni-app 获取本地文件的文件信息。更多信息查看 https://uniapp.dcloud.io/api/file/file?id=getsavedfileinfo。|
|`uni.removeSavedFile()`|`uni.removeSavedFile`|uni-app 删除本地存储的文件。更多信息查看 https://uniapp.dcloud.io/api/file/file?id=removesavedfile。|
|`uni.uni.getFileInfo()`|`uni.getFileInfo`|uni-app 获取文件信息。更多信息查看 https://uniapp.dcloud.io/api/file/file?id=getfileinfo。|
|`uni.openDocument()`|`uni.openDocument`|uni-app 新开页面打开文档。更多信息查看 https://uniapp.dcloud.io/api/file/file?id=opendocument。|
|`uni.createCanvasContext()`|`uni.createCanvasContext`|uni-app 创建画布上下文。更多信息查看 https://uniapp.dcloud.io/api/canvas/createCanvasContext。|
|`uni.canvasToTempFilePath()`|`uni.canvasToTempFilePath`|uni-app 导出画布内容。更多信息查看 https://uniapp.dcloud.io/api/canvas/canvasToTempFilePath。|
|`uni.getProvider()`|`uni.getProvider`|uni-app 获取服务供应商。更多信息查看 https://uniapp.dcloud.io/api/plugins/provider。|
|`uni.login()`|`uni.login`|uni-app 登录。更多信息查看 https://uniapp.dcloud.io/api/plugins/login?id=login。|
|`uni.checkSession()`|`uni.checkSession`|uni-app 检查登录状态。更多信息查看 https://uniapp.dcloud.io/api/plugins/login?id=unichecksession。|
|`uni.getUserInfo()`|`uni.getUserInfo`|uni-app 检查登录状态。更多信息查看 https://uniapp.dcloud.io/api/plugins/login?id=unichecksession。|
|`uni.share()`|`uni.share`|uni-app 分享。更多信息查看 https://uniapp.dcloud.io/api/plugins/share?id=share。|
|`uni.showShareMenu()`|`uni.showShareMenu`|uni-app 原生菜单显示分享按钮。更多信息查看 https://uniapp.dcloud.io/api/plugins/share?id=showsharemenu。|
|`uni.hideShareMenu()`|`uni.hideShareMenu`|uni-app 原生菜单隐藏分享按钮。更多信息查看 https://uniapp.dcloud.io/api/plugins/share?id=hidesharemenu。|
|`uni.requestPayment()`|`uni.requestPayment`|uni-app 支付。更多信息查看 https://uniapp.dcloud.io/api/plugins/payment。|
|`uni.authorize()`|`uni.authorize`|uni-app 授权。更多信息查看 https://uniapp.dcloud.io/api/other/authorize。|
|`uni.getSetting()`|`uni.openSetting`|uni-app 打开设置界面。更多信息查看 https://uniapp.dcloud.io/api/other/setting?id=opensetting。|
|`uni.getSetting()`|`uni.getSetting`|uni-app 获取当前设置。更多信息查看 https://uniapp.dcloud.io/api/other/setting?id=getsetting。|
|`uni.chooseAddress()`|`uni.chooseAddress`|uni-app 获取收货地址。更多信息查看 https://uniapp.dcloud.io/api/other/choose-address。|
|`uni.chooseInvoiceTitle()`|`uni.chooseInvoiceTitle`|uni-app 选择发票抬头。更多信息查看 https://uniapp.dcloud.io/api/other/invoice-title。|
|`uni.navigateToMiniProgram()`|`uni.navigateToMiniProgram`|uni-app 打开小程序。更多信息查看 https://uniapp.dcloud.io/api/other/open-miniprogram?id=navigatetominiprogram。|
|`uni.navigateToMiniProgram()`|`uni.navigateToMiniProgram`|uni-app 从打开的小程序返回。更多信息查看 https://uniapp.dcloud.io/api/other/open-miniprogram?id=navigatebackminiprogram。|
|`uni.getAccountInfoSync()`|`uni.getAccountInfoSync`|uni-app 同步获取账号信息。更多信息查看 https://uniapp.dcloud.io/api/other/getAccountInfoSync。|
|`uni.report()`|`uni.report`|uni-app 统计。更多信息查看 https://uniapp.dcloud.io/api/other/report。|
|`uni.getUpdateManager()`|`uni.getUpdateManager`|uni-app 获取全局唯一版本更新管理器。更多信息查看 https://uniapp.dcloud.io/api/other/update。|
|`uni.setEnabledDebug()`|`uni.setEnableDebug`|uni-app 设置调试开关。更多信息查看 https://uniapp.dcloud.io/api/other/set-enable-debug。|

## 更多

- [前端学习路径](https://modyqyw.top/front-end/roadmap/)
- [前端环境配置](https://modyqyw.top/front-end/environment/)
- [前端杂项](https://modyqyw.top/front-end/misc/)
- [fabric](https://github.com/modyqyw/fabric#readme) - 不同项目的共享配置，包括 Prettier，ESLint，Stylelint，Commitlint，LSLint，EditorConfig，Husky，LintStaged 等
- [mp-scss](https://modyqyw.top/mp-scss/) - 一个基于 Flexbox 的小程序 SCSS 样式库，用于快速实现自定义设计
