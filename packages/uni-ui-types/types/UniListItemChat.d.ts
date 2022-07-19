import { Component } from '../Component';

/**
 * @desc 新页面的跳转方式
 */
export type UniListItemChatLink = 'navigateTo' | 'redirectTo' | 'reLaunch' | 'switchTab';

export interface UniListItemChatProps {
  /**
   * @desc 标题
   */
  title: string;
  /**
   * @desc 描述
   */
  note: string;
  /**
   * @desc 是否开启点击反馈
   * @desc 默认为 false
   */
  clickable: boolean;
  /**
   * @desc 数字角标内容
   * @desc 设置为 dot 将显示圆点
   */
  badgeText: string;
  /**
   * @desc 角标位置
   * @desc 默认为 right
   */
  badgePosition: string;
  /**
   * @desc 新页面的跳转方式
   * @desc 默认为 navigateTo
   */
  link: UniListItemChatLink;
  /**
   * @desc 新页面跳转地址
   * @desc 如填写此属性，click 会返回页面是否跳转成功
   */
  to: string;
  /**
   * @desc 右侧时间显示
   */
  time: string;
  /**
   * @desc 是否显示圆形头像
   * @desc 默认为 false
   */
  avatarCircle: boolean;
  /**
   * @desc 头像地址
   * @desc avatarCircle 不填时有效
   */
  avatar: string;
  /**
   * @desc 头像组
   */
  avatarList: { url: string }[];
  /**
   * @desc 点击 uni-list-item-chat 触发，需开启点击反馈
   */
  onClick: (event?: Record<string, any>) => void;
}

export type UniListItemChat = Component<Partial<UniListItemChatProps>>;
