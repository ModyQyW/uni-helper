import * as Vite from 'vite';
import { isStyleFile, transformStyle } from './style';
import { isTemplateFile, transformTemplate } from './template';
import { Options, UniAppTailwindPluginOptions, defaultOptions } from './options';

export * from './constants';
export * from './options';
export * from './style';
export * from './template';

export default function UniAppTailwindPlugin(options?: UniAppTailwindPluginOptions): Vite.Plugin {
  return {
    name: 'vite:uni-app-tailwind',
    enforce: 'post',
    generateBundle: (_, bundle) => {
      const finalOptions: Options = {
        spaceBetweenElements: options?.spaceBetweenElements ?? defaultOptions?.spaceBetweenElements,
        divideWidthElements: options?.divideWidthElements ?? defaultOptions?.divideWidthElements,
        elementMap: options?.elementMap ?? defaultOptions?.elementMap,
        characterMap: options?.characterMap ?? defaultOptions?.characterMap,
      };

      Object.entries(bundle).forEach(([fileName, asset]) => {
        if (asset.type === 'asset') {
          const { source } = asset;
          if (source && typeof source === 'string') {
            let newSource = '';
            if (isTemplateFile(fileName)) {
              newSource = transformTemplate(source, finalOptions);
            }
            if (isStyleFile(fileName)) {
              newSource = transformStyle(source, finalOptions);
            }
            asset.source = newSource;
          }
        }
      });
    },
  };
}
