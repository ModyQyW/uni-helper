import { Component } from './Component';

export interface UniGridItemProps {
  /**
   * @desc 子组件唯一标识
   */
  index: number;
}

/**
 * @desc 宫格项
 */
export type UniGridItem = Component<Partial<UniGridItemProps>>;
