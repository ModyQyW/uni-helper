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
  Icon,
  Text,
  RichText,
  Progress,
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
    Icon: Icon;
    Text: Text;
    RichText: RichText;
    Progress: Progress;
  }
}
