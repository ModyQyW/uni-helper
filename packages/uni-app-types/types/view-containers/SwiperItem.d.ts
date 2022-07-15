import { DefineComponent } from 'vue3';

/**
 * @desc swiper 直接子组件，宽高自动设置为父组件的 100%
 * @desc 不能被子组件自动撑开
 */
export type SwiperItem = DefineComponent<{
  /**
   * @desc 标识符
   */
  itemId: string;
}>;
