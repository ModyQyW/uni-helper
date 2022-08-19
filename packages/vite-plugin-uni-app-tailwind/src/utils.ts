import { Options } from './options';

export const replaceCharacters = (source: string, options: Options, type: 'babel' | 'postcss') => {
  let newSource = source;
  options.characterMap.forEach(([key, value]) => {
    const regExp = new RegExp(
      key.startsWith('\\') ? key : `${type === 'babel' ? '\\' : '\\\\\\'}${key}`,
      'g',
    );
    newSource = newSource.replace(regExp, value);
  });
  return newSource;
};
