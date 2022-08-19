import { SpaceBetweenElements, DivideWidthElements, ElementMap, CharacterMap } from './constants';

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
}

export type Options = Required<UniAppTailwindPluginOptions>;

export const defaultOptions = {
  spaceBetweenElements: SpaceBetweenElements,
  divideWidthElements: DivideWidthElements,
  elementMap: ElementMap,
  characterMap: CharacterMap,
};
