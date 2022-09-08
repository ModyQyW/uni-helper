import {
  SpaceBetweenElements,
  DivideWidthElements,
  ElementMap,
  CharacterMap,
  ReplaceStarSelectorPlatforms,
  GetShouldReplaceStarSelector,
} from './constants';

export interface UniAppTailwindPluginOptions {
  /**
   * @desc space between 元素映射
   */
  spaceBetweenElements?: string[];
  /**
   * @desc divide width 元素映射
   */
  divideWidthElements?: string[];
  /**
   * @desc uni-app 中元素映射
   */
  elementMap?: [string, string[]][];
  /**
   * @desc 特殊符号映射
   */
  characterMap?: [string, string][];
  /**
   * @desc 需要替换 * 选择器的环境
   */
  replaceStarSelectorPlatforms?: string[];
  /**
   * @desc 替换 * 选择器的环境判断方法
   */
  getShouldReplaceStarSelector?: (targetPlatforms: string[], platform: string) => boolean;
}

export type Options = Required<UniAppTailwindPluginOptions>;

export const defaultOptions = {
  spaceBetweenElements: SpaceBetweenElements,
  divideWidthElements: DivideWidthElements,
  elementMap: ElementMap,
  characterMap: CharacterMap,
  replaceStarSelectorPlatforms: ReplaceStarSelectorPlatforms,
  getShouldReplaceStarSelector: GetShouldReplaceStarSelector,
};
