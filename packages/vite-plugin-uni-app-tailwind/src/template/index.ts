import wxml from '@vivaxy/wxml';
import { defaultOptions, Options } from '../options';
import { babelTransformClass } from './babel';

export { babelTransformClass };

export const isTemplateFile = (fileName: string) => /.+\.(?:wx|ax|jx|ks|tt|q)ml$/.test(fileName);

export const transformTemplate = (source: string, options?: Options) => {
  const parsed = wxml.parse(source);
  wxml.traverse(parsed, (node: any) => {
    if (node?.type === wxml.NODE_TYPES.ELEMENT && node?.attributes?.class) {
      node.attributes.class = babelTransformClass(node.attributes.class, options ?? defaultOptions);
    }
  });
  return wxml.serialize(parsed);
};
