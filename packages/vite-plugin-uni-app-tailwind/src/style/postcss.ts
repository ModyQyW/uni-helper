import { Plugin, Rule } from 'postcss';
import { replaceCharacters } from '../utils';
import { defaultOptions, Options } from '../options';

const postcssReplaceElements = (selector: string, options: Options) => {
  let newSelector = selector;

  const spaceBetweenElements = options.spaceBetweenElements;
  const divideWidthElements = options.divideWidthElements;
  newSelector = newSelector
    .replace(
      /^(\.-?space-\w)(-.+?)\s?>.*/,
      spaceBetweenElements
        .map(
          (element) =>
            `$1$2:not($1-reverse)>${element}:not([hidden]):not(:first-child), $1$2$1-reverse>${element}:not([hidden]):not(:last-child)`,
        )
        .join(','),
    )
    .replace(
      /^(\.-?space-\w-reverse).*/,
      spaceBetweenElements.map((element) => `$1>${element}:not([hidden])`).join(','),
    )
    // divide * https://tailwindcss.com/docs/divide-width
    .replace(
      /^(\.-?divide-\w+)(-.+?)?\s?>.*/,
      divideWidthElements
        .map(
          (element) =>
            `$1$2:not($1-reverse)>${element}:not([hidden]):not(:first-child), $1$2$1-reverse>${element}:not([hidden]):not(:last-child)`,
        )
        .join(','),
    )
    .replace(
      /^(\.-?divide-\w-reverse).*/,
      divideWidthElements.map((element) => `$1>${element}:not([hidden])`).join(','),
    );

  options.elementMap.forEach(([key, value]) => {
    newSelector = newSelector.replace(
      new RegExp(
        key === '*'
          ? // eslint-disable-next-line no-useless-escape
            `(?<![a-zA-Z-> ])\\${key}(?=[\,\s\0{])|(?<![a-zA-Z-> ])\\${key}$`
          : // eslint-disable-next-line no-useless-escape
            `(?<![a-zA-Z-> ])${key}(?=[\,\s\0{])|(?<![a-zA-Z-> ])${key}$`,
      ),
      value.join(','),
    );
  });

  return newSelector;
};

export function postcssTransformSelector(options?: Options): Plugin {
  return {
    postcssPlugin: 'vite-plugin-uni-app-tailwind-postcss-transform-selector',
    Rule(node: Rule & { processedByPostcssTransformSelector?: boolean }) {
      if (node?.processedByPostcssTransformSelector) {
        return;
      }

      let newSelector = node.selector;

      newSelector = replaceCharacters(newSelector, options ?? defaultOptions, 'postcss');

      newSelector = postcssReplaceElements(newSelector, options ?? defaultOptions);

      node.selector = newSelector;
      node.processedByPostcssTransformSelector = true;
    },
  };
}
postcssTransformSelector.postcss = true;
