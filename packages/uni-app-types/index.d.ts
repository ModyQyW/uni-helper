import '@vue/runtime-core';
import {
  Block,
  View,
  ScrollView,
  Swiper,
  SwiperItem,
  MatchMedia,
  MovableArea,
  MovableView,
  CoverView,
  CoverImage,
} from './types';

export {};

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Block: Block;
    View: View;
    ScrollView: ScrollView;
    Swiper: Swiper;
    SwiperItem: SwiperItem;
    MatchMedia: MatchMedia;
    MovableArea: MovableArea;
    MovableView: MovableView;
    CoverView: CoverView;
    CoverImage: CoverImage;
  }
}
