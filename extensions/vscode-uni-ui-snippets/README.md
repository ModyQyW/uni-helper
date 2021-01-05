# vscode-uni-ui-snippets

## 插件特性

- uni-ui 组件代码片段
- 支持 vue2
- 参考 [uni-ui 文档](https://github.com/dcloudio/uni-ui#readme)
- 参考 [Vue.js 风格指南](https://cn.vuejs.org/v2/style-guide/index.html)

本插件是 [uni-helper](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-helper) 的一部分。本插件和文档的冲突之处，请以文档为准。

欢迎提交 [ISSUE](https://github.com/ModyQyW/uni-helper/issues/new) 和 [PR](https://github.com/ModyQyW/uni-helper/compare) 改进本插件。

## 使用

安装插件后重启 VSCode，打开对应的文件，编码时就会有提示。

### HTML

使用 [html.js](./html.js) 生成。

|API|Prefix|Description|
|-|-|-|
|`<uni-badge>`|`uni-badge`, `<uni-badge>`|uni-ui 徽标/标记/数字角标/徽章。更多信息查看 https://ext.dcloud.net.cn/plugin?id=21。|
|`<uni-calendar>`|`uni-calendar`, `<uni-calendar>`|uni-ui 日历。更多信息查看 https://ext.dcloud.net.cn/plugin?id=56。|
|`<uni-card>`|`uni-card`, `<uni-card>`|uni-ui 卡片。更多信息查看 https://ext.dcloud.net.cn/plugin?id=22。|
|`<uni-collapse>`|`uni-collapse`, `<uni-collapse>`|uni-ui 折叠面板。更多信息查看 https://ext.dcloud.net.cn/plugin?id=23。|
|`<uni-collapse-item>`|`uni-collapse-item`, `<uni-collapse-item>`|uni-ui 折叠面板项。更多信息查看 https://ext.dcloud.net.cn/plugin?id=23。|
|`<uni-combox>`|`uni-combox`, `<uni-combox>`|uni-ui 组合框。更多信息查看 https://ext.dcloud.net.cn/plugin?id=1261。|
|`<uni-countdown>`|`uni-countdown`, `<uni-countdown>`|uni-ui 倒计时。更多信息查看 https://ext.dcloud.net.cn/plugin?id=25。|
|`<uni-data-checkbox>`|`uni-data-checkbox`, `<uni-data-checkbox>`|uni-ui 数据选择器。更多信息查看 https://ext.dcloud.net.cn/plugin?id=3456。|
|`<uni-dateformat>`|`uni-dateformat`, `<uni-dateformat>`|uni-ui 日期格式化。更多信息查看 https://ext.dcloud.net.cn/plugin?id=3279。|
|`<uni-datetime-picker>`|`uni-datetime-picker`, `<uni-datetime-picker>`, `uDatetimePicker`, `<uDatetimePicker>`|uni-ui 日期时间选择器。更多信息查看 https://github.com/dcloudio/uni-ui/blob/master/components/uni-datetime-picker/uni-datetime-picker.vue。|
|`<uni-drawer>`|`uni-drawer`, `<uni-drawer>`|uni-ui 抽屉。更多信息查看 https://ext.dcloud.net.cn/plugin?id=26。|
|`<uni-easyinput>`|`uni-easyinput`, `<uni-easyinput>`|uni-ui 增强输入框。更多信息查看 https://ext.dcloud.net.cn/plugin?id=3455。|
|`<uni-fab>`|`uni-fab`, `<uni-fab>`|uni-ui 悬浮按钮。更多信息查看 https://ext.dcloud.net.cn/plugin?id=144。|
|`<uni-fav>`|`uni-fav`, `<uni-fav>`|uni-ui 收藏按钮。更多信息查看 https://ext.dcloud.net.cn/plugin?id=864。|
|`<uni-field>`|`uni-field`, `<uni-field>`|uni-ui 输入框。更多信息查看 https://github.com/dcloudio/uni-ui/blob/master/components/uni-field/uni-field.vue。|
|`<uni-forms>`|`uni-forms`, `<uni-forms>`|uni-ui 表单。更多信息查看 https://ext.dcloud.net.cn/plugin?id=2773。|
|`<uni-forms-item>`|`uni-forms-item`, `<uni-forms-item>`|uni-ui 表单项。更多信息查看 https://ext.dcloud.net.cn/plugin?id=2773。|
|`<uni-goods-nav>`|`uni-goods-nav`, `<uni-goods-nav>`|uni-ui 商品导航。更多信息查看 https://ext.dcloud.net.cn/plugin?id=865。|
|`<uni-grid>`|`uni-grid`, `<uni-grid>`|uni-ui 宫格。更多信息查看 https://ext.dcloud.net.cn/plugin?id=27。|
|`<uni-grid-item>`|`uni-grid-item`, `<uni-grid-item>`|uni-ui 宫格项。更多信息查看 https://ext.dcloud.net.cn/plugin?id=27。|
|`<uni-group>`|`uni-group`, `<uni-group>`|uni-ui 分组。更多信息查看 https://ext.dcloud.net.cn/plugin?id=3281。|
|`<uni-icons>`|`uni-icons`, `<uni-icons>`|uni-ui 图标。更多信息查看 https://ext.dcloud.net.cn/plugin?id=28。|
|`<uni-indexed-list>`|`uni-indexed-list`, `<uni-indexed-list>`|uni-ui 索引列表。更多信息查看 https://ext.dcloud.net.cn/plugin?id=375。|
|`<uni-link>`|`uni-link`, `<uni-link>`|uni-ui 超链接。更多信息查看 https://ext.dcloud.net.cn/plugin?id=1182。|
|`<uni-list>`|`uni-list`, `<uni-list>`|uni-ui 列表。更多信息查看 https://ext.dcloud.net.cn/plugin?id=24。|
|`<uni-list-chat>`|`uni-list-chat`, `<uni-list-chat>`|uni-ui 聊天列表项。更多信息查看 https://ext.dcloud.net.cn/plugin?id=24。|
|`<uni-list-item>`|`uni-list-item`, `<uni-list-item>`|uni-ui 列表项。更多信息查看 https://ext.dcloud.net.cn/plugin?id=24。|
|`<uni-load-more>`|`uni-load-more`, `<uni-load-more>`|uni-ui 加载更多。更多信息查看 https://ext.dcloud.net.cn/plugin?id=29。|
|`<uni-nav-bar>`|`uni-nav-bar`, `<uni-nav-bar>`|uni-ui 导航栏。更多信息查看 https://ext.dcloud.net.cn/plugin?id=52。|
|`<uni-notice-bar>`|`uni-notice-bar`, `<uni-notice-bar>`|uni-ui 通告栏。更多信息查看 https://ext.dcloud.net.cn/plugin?id=30。|
|`<uni-number-box>`|`uni-number-box`, `<uni-number-box>`|uni-ui 数字输入框。更多信息查看 https://ext.dcloud.net.cn/plugin?id=31。|
|`<uni-pagination>`|`uni-pagination`, `<uni-pagination>`|uni-ui 分页器。更多信息查看 https://ext.dcloud.net.cn/plugin?id=32。|
|`<uni-popup>`|`uni-popup`, `<uni-popup>`|uni-ui 弹出层。更多信息查看 https://ext.dcloud.net.cn/plugin?id=329。|
|`<uni-popup-dialog>`|`uni-popup-dialog`, `<uni-popup-dialog>`|uni-ui 弹出层对话框。更多信息查看 https://ext.dcloud.net.cn/plugin?id=329。|
|`<uni-popup-message>`|`uni-popup-message`, `<uni-popup-message>`|uni-ui 弹出层提示信息。更多信息查看 https://ext.dcloud.net.cn/plugin?id=329。|
|`<uni-popup-share>`|`uni-popup-share`, `<uni-popup-share>`|uni-ui 弹出层分享。更多信息查看 https://ext.dcloud.net.cn/plugin?id=329。|
|`<uni-rate>`|`uni-rate`, `<uni-rate>`|uni-ui 评分。更多信息查看 https://ext.dcloud.net.cn/plugin?id=33。|
|`<uni-search-bar>`|`uni-search-bar`, `<uni-search-bar>`|uni-ui 搜索栏。更多信息查看 https://ext.dcloud.net.cn/plugin?id=866。|
|`<uni-segmented-control>`|`uni-segmented-control`, `<uni-segmented-control>`|uni-ui 分段器。更多信息查看 https://ext.dcloud.net.cn/plugin?id=54。|
|`<uni-steps>`|`uni-steps`, `<uni-steps>`|uni-ui 步骤条。更多信息查看 https://ext.dcloud.net.cn/plugin?id=34。|
|`<uni-swipe-action>`|`uni-swipe-action`, `<uni-swipe-action>`|uni-ui 滑动操作。更多信息查看 https://ext.dcloud.net.cn/plugin?id=181。|
|`<uni-swipe-action-item>`|`uni-swipe-action-item`, `<uni-swipe-action-item>`|uni-ui 滑动操作项。更多信息查看 https://ext.dcloud.net.cn/plugin?id=181。|
|`<uni-swiper-dot>`|`uni-swiper-dot`, `<uni-swiper-dot>`, `uSwiperDot`, `<uSwiperDot>`|uni-ui 轮播图指示点。更多信息查看 https://ext.dcloud.net.cn/plugin?id=284。|
|`<uni-tag>`|`uni-tag`, `<uni-tag>`|uni-ui 标签。更多信息查看 https://ext.dcloud.net.cn/plugin?id=35。|
|`<uni-title>`|`uni-title`, `<uni-title>`|uni-ui 标题。更多信息查看 https://ext.dcloud.net.cn/plugin?id=1066。|
|`<uni-transition>`|`uni-transition`, `<uni-transition>`|uni-ui 过渡动画。更多信息查看 https://ext.dcloud.net.cn/plugin?id=985。|

## 更多

- [前端学习路径](https://modyqyw.top/front-end/roadmap/)
- [前端环境配置](https://modyqyw.top/front-end/environment/)
- [前端杂项](https://modyqyw.top/front-end/misc/)
- [fabric](https://github.com/modyqyw/fabric#readme) - 不同项目的共享配置，包括 Prettier，ESLint，Stylelint，Commitlint，LSLint，EditorConfig，Husky，LintStaged 等
- [mp-scss](https://modyqyw.top/mp-scss/) - 一个基于 Flexbox 的小程序 SCSS 样式库，用于快速实现自定义设计
