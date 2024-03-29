# [DEPRECATED] vscode-uni-ui-snippets

**该插件已废弃，请迁移到功能一致的 [uni-helper.uni-ui-snippets-vscode](https://marketplace.visualstudio.com/items?itemName=uni-helper.uni-ui-snippets-vscode)。**

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

## HTML

|API|Prefix|Description|
|-|-|-|
|`<uni-badge>`|`uni-badge`, `<uni-badge>`, `UniBadge`, `<UniBadge>`|uni-ui 徽标/标记/数字角标/徽章，一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-badge>。|
|`<uni-calendar>`|`uni-calendar`, `<uni-calendar>`, `UniCalendar`, `<UniCalendar>`|uni-ui 日历，当数据是日期或按照日期划分时使用，如日程、课表、价格日历、农历等。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-calendar>。|
|`<uni-card>`|`uni-card`, `<uni-card>`, `UniCard`, `<UniCard>`|uni-ui 卡片，可承载文字、列表、图片、段落，常用于概览。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-card>。|
|`<uni-collapse>`|`uni-collapse`, `<uni-collapse>`, `UniCollapse`, `<UniCollapse>`|uni-ui 折叠面板，对复杂区域进行分组和隐藏，保持页面的整洁。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-collapse>。|
|`<uni-collapse-item>`|`uni-collapse-item`, `<uni-collapse-item>`, `UniCollapseItem`, `<UniCollapseItem>`|uni-ui 折叠面板项。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-collapse>。|
|`<uni-combox>`|`uni-combox`, `<uni-combox>`, `UniCombox`, `<UniCombox>`|uni-ui 组合框，一般用于可选择也可输入的表单项。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-combox>。|
|`<uni-countdown>`|`uni-countdown`, `<uni-countdown>`, `UniCountdown`, `<UniCountdown>`|uni-ui 倒计时。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-countdown>。|
|`<uni-data-checkbox>`|`uni-data-checkbox`, `<uni-data-checkbox>`, `UniDataCheckbox`, `<UniDataCheckbox>`|uni-ui 数据选择器。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-data-checkbox>。|
|`<uni-data-picker>`|`uni-data-picker`, `<uni-data-picker>`, `UniDataPicker`, `<UniDataPicker>`|uni-ui 级联选择器。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-data-picker>。|
|`<uni-dateformat>`|`uni-dateformat`, `<uni-dateformat>`, `UniDateformat`, `<UniDateformat>`|uni-ui 日期格式化。请考虑使用 [dayjs](https://dayjs.gitee.io/zh-CN/)。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-dateformat>。|
|`<uni-datetime-picker>`|`uni-datetime-picker`, `<uni-datetime-picker>`, `UniDatetimePicker`, `<UniDatetimePicker>`|uni-ui 日期时间选择器。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-datetime-picker>。|
|`<uni-drawer>`|`uni-drawer`, `<uni-drawer>`, `UniDrawer`, `<UniDrawer>`|uni-ui 抽屉，屏幕边缘滑出的浮层面板，用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到原任务。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-drawer>。|
|`<uni-easyinput>`|`uni-easyinput`, `<uni-easyinput>`, `UniEasyinput`, `<UniEasyinput>`|uni-ui 增强输入框。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-easyinput>。|
|`<uni-fab>`|`uni-fab`, `<uni-fab>`, `UniFab`, `<UniFab>`|uni-ui 悬浮按钮。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-fab>。|
|`<uni-fav>`|`uni-fav`, `<uni-fav>`, `UniFav`, `<UniFav>`|uni-ui 收藏按钮。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-fav>。|
|`<uni-file-picker>`|`uni-file-picker`, `<uni-file-picker>`, `UniFilePicker`, `<UniFilePicker>`|uni-ui 文件选择上传。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-file-picker>。|
|`<uni-forms>`|`uni-forms`, `<uni-forms>`, `UniForms`, `<UniForms>`|uni-ui 表单。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-forms>。|
|`<uni-forms-item>`|`uni-forms-item`, `<uni-forms-item>`, `UniFormsItem`, `<UniFormsItem>`|uni-ui 表单项。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-forms>。|
|`<uni-goods-nav>`|`uni-goods-nav`, `<uni-goods-nav>`, `UniGoodsNav`, `<UniGoodsNav>`|uni-ui 商品导航。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-goods-nav>。|
|`<uni-grid>`|`uni-grid`, `<uni-grid>`, `UniGrid`, `<UniGrid>`|uni-ui 宫格。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-grid>。|
|`<uni-grid-item>`|`uni-grid-item`, `<uni-grid-item>`, `UniGridItem`, `<UniGridItem>`|uni-ui 宫格项。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-grid>。|
|`<uni-group>`|`uni-group`, `<uni-group>`, `UniGroup`, `<UniGroup>`|uni-ui 分组。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-group>。|
|`<uni-icons>`|`uni-icons`, `<uni-icons>`, `UniIcons`, `<UniIcons>`|uni-ui 图标。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-icons>。|
|`<uni-indexed-list>`|`uni-indexed-list`, `<uni-indexed-list>`, `UniIndexedList`, `<UniIndexedList>`|uni-ui 索引列表。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-indexed-list>。|
|`<uni-link>`|`uni-link`, `<uni-link>`, `UniLink`, `<UniLink>`|uni-ui 超链接。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-link>。|
|`<uni-list>`|`uni-list`, `<uni-list>`, `UniList`, `<UniList>`|uni-ui 列表。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-list>。|
|`<uni-list-chat>`|`uni-list-chat`, `<uni-list-chat>`, `UniListChat`, `<UniListChat>`|uni-ui 聊天列表项。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-list>。|
|`<uni-list-item>`|`uni-list-item`, `<uni-list-item>`, `UniListItem`, `<UniListItem>`|uni-ui 列表项。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-list>。|
|`<uni-load-more>`|`uni-load-more`, `<uni-load-more>`, `UniLoadMore`, `<UniLoadMore>`|uni-ui 加载更多。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-load-more>。|
|`<uni-nav-bar>`|`uni-nav-bar`, `<uni-nav-bar>`, `UniNavBar`, `<UniNavBar>`|uni-ui 导航栏。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-nav-bar>。|
|`<uni-notice-bar>`|`uni-notice-bar`, `<uni-notice-bar>`, `UniNoticeBar`, `<UniNoticeBar>`|uni-ui 通告栏。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-notice-bar>。|
|`<uni-number-box>`|`uni-number-box`, `<uni-number-box>`, `UniNumberBox`, `<UniNumberBox>`|uni-ui 数字输入框。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-number-box>。|
|`<uni-pagination>`|`uni-pagination`, `<uni-pagination>`, `UniPagination`, `<UniPagination>`|uni-ui 分页器。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-pagination>。|
|`<uni-popup>`|`uni-popup`, `<uni-popup>`, `UniPopup`, `<UniPopup>`|uni-ui 弹出层。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-popup>。|
|`<uni-popup-dialog>`|`uni-popup-dialog`, `<uni-popup-dialog>`, `UniPopupDialog`, `<UniPopupDialog>`|uni-ui 弹出层对话框。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-popup>。|
|`<uni-popup-message>`|`uni-popup-message`, `<uni-popup-message>`, `UniPopupMessage`, `<UniPopupMessage>`|uni-ui 弹出层提示信息。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-popup>。|
|`<uni-popup-share>`|`uni-popup-share`, `<uni-popup-share>`, `UniPopupShare`, `<UniPopupShare>`|uni-ui 弹出层分享。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-popup>。|
|`<uni-rate>`|`uni-rate`, `<uni-rate>`, `UniRate`, `<UniRate>`|uni-ui 评分。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-rate>。|
|`<uni-row>`|`uni-row`, `<uni-row>`, `UniRow`, `<UniRow>`|uni-ui 布局行。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-row>。|
|`<uni-col>`|`uni-col`, `<uni-col>`, `UniCol`, `<UniCol>`|uni-ui 布局列。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-row>。|
|`<uni-search-bar>`|`uni-search-bar`, `<uni-search-bar>`, `UniSearchBar`, `<UniSearchBar>`|uni-ui 搜索栏。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-search-bar>。|
|`<uni-segmented-control>`|`uni-segmented-control`, `<uni-segmented-control>`, `UniSegmentedControl`, `<UniSegmentedControl>`|uni-ui 分段器。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-segmented-control>。|
|`<uni-steps>`|`uni-steps`, `<uni-steps>`, `UniSteps`, `<UniSteps>`|uni-ui 步骤条。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-steps>。|
|`<uni-swipe-action>`|`uni-swipe-action`, `<uni-swipe-action>`, `UniSwipeAction`, `<UniSwipeAction>`|uni-ui 滑动操作。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-swipe-action>。|
|`<uni-swipe-action-item>`|`uni-swipe-action-item`, `<uni-swipe-action-item>`, `UniSwipeActionItem`, `<UniSwipeActionItem>`|uni-ui 滑动操作项。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-swipe-action>。|
|`<uni-swiper-dot>`|`uni-swiper-dot`, `<uni-swiper-dot>`, `UniSwiperDot`, `<UniSwiperDot>`|uni-ui 轮播图指示点。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-swiper-dot>。|
|`<uni-table>`|`uni-table`, `<uni-table>`, `UniTable`, `<UniTable>`|uni-table 表格。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-table>。|
|`<uni-tr>`|`uni-tr`, `<uni-tr>`, `UniTr`, `<UniTr>`|uni-table 表格。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-table>。|
|`<uni-th>`|`uni-th`, `<uni-th>`, `UniTh`, `<UniTh>`|uni-table 表格。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-table>。|
|`<uni-td>`|`uni-td`, `<uni-td>`, `UniTd`, `<UniTd>`|uni-table 表格。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-table>。|
|`<uni-tag>`|`uni-tag`, `<uni-tag>`, `UniTag`, `<UniTag>`|uni-ui 标签。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-tag>。|
|`<uni-title>`|`uni-title`, `<uni-title>`, `UniTitle`, `<UniTitle>`|uni-ui 标题。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-title>。|
|`<uni-transition>`|`uni-transition`, `<uni-transition>`, `UniTransition`, `<UniTransition>`|uni-ui 过渡动画。更多信息查看 <https://uniapp.dcloud.io/component/uniui/uni-transition>。|

## 额外推荐

请查看 [uni-helper 插件说明](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-helper)。
