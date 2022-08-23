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
    spaceBetweenElements: options?.spaceBetweenElements ?? defaultOptions?.spaceBetweenElements,
    divideWidthElements: options?.divideWidthElements ?? defaultOptions?.divideWidthElements,
    elementMap: options?.elementMap ?? defaultOptions?.elementMap,
    characterMap: options?.characterMap ?? defaultOptions?.characterMap,
  };

  return {
    name: 'unplugin-uni-app-tailwind',
    enforce: 'post',

    vite: {
      name: 'vite:unplugin-uni-app-tailwind',
      enforce: 'post',
      generateBundle: (_, bundle) => {
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

    webpack(compiler) {
      const pluginName = 'webpack:unplugin-uni-app-tailwind';

      const { sources, Compilation } = compiler.webpack;
      const { ConcatSource } = sources;
      compiler.hooks.compilation.tap(pluginName, (compilation) => {
        compilation.hooks.processAssets.tap(
          {
            name: pluginName,
            stage: Compilation.PROCESS_ASSETS_STAGE_SUMMARIZE,
          },
          (assets) => {
            Object.entries(assets).forEach(([fileName, asset]) => {
              const source = asset.source().toString();
              let newSource = '';
              if (isTemplateFile(fileName)) {
                newSource = transformTemplate(source, finalOptions);
              }
              if (isStyleFile(fileName)) {
                newSource = transformStyle(source, finalOptions);
              }
              if (newSource) {
                compilation.updateAsset(fileName, new ConcatSource(newSource));
              }
            });
          },
        );
      });
    },
  };
});
