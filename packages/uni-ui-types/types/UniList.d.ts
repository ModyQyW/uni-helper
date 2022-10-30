import { Component } from './Component';

export interface UniListProps {
  /**
   * @desc 是否显示边框
   * @desc 默认为 true
   */
  border: boolean;
}

/**
 * @desc 列表
 * @desc 包含基本列表样式、可扩展插槽机制、长列表性能优化、多端兼容
 * @desc 在 vue 页面默认使用页面级滚动，在 app-nvue 页面默认使用原生 list 组件滚动
 * @desc uni-list 是父容器，核心是 uni-list-item 子组件，它代表列表中的一个可重复行，子组件可以无限循环
 * @desc uni-list-item 有很多风格，uni-list-item 组件通过内置的属性，满足一些常用的场景，也可以通过扩展插槽来自定义列表内容
 * @desc 内置属性可以覆盖的场景包括：导航列表、设置列表、小图标列表、通信录列表、聊天记录列表
 * @desc 涉及很多大图或丰富内容的列表，比如类今日头条的新闻列表、类淘宝的电商列表，需要通过扩展插槽实现
 */
export type UniList = Component<Partial<UniListProps>>;
