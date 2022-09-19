import { createUnplugin } from 'unplugin';
import { isStyleFile, transformStyle } from './style';
import { isTemplateFile, transformTemplate } from './template';
import { Options, UniAppTailwindPluginOptions, defaultOptions } from './options';

export * from './constants';
export * from './options';
export * from './style';
export * from './template';

export default createUnplugin((options?: UniAppTailwindPluginOptions) => {
  const finalOptions: Options = {
    apply: options?.apply ?? defaultOptions.apply,
    getShouldApply: options?.getShouldApply ?? defaultOptions.getShouldApply,
    spaceBetweenElements: options?.spaceBetweenElements ?? defaultOptions.spaceBetweenElements,
    divideWidthElements: options?.divideWidthElements ?? defaultOptions.divideWidthElements,
    elementMap: options?.elementMap ?? defaultOptions.elementMap,
    characterMap: options?.characterMap ?? defaultOptions.characterMap,
  };

  const shouldApply = finalOptions.getShouldApply(
    finalOptions.apply,
    (process.env.UNI_PLATFORM || 'H5').toUpperCase(),
  );

  return {
    name: 'unplugin-uni-app-tailwind',
    enforce: 'post',

    vite: {
      name: 'vite:unplugin-uni-app-tailwind',
      enforce: 'post',
      generateBundle: (_, bundle) => {
        if (!shouldApply) return;
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
              asset.source = newSource || asset.source;
            }
          }
        });
      },
    },
  };
});
