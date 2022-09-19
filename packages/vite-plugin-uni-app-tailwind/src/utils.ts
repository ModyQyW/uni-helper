import { Options } from './options';

export const getShouldApply = (targets: string[], current: string) =>
  targets.some((item) => {
    if (
      (item === 'QUICKAPP' || item.startsWith('QUICKAPP-')) &&
      (current === 'APP' || current.startsWith('APP-'))
    ) {
      return false;
    }
    if (
      (current === 'QUICKAPP' || current.startsWith('QUICKAPP-')) &&
      (item === 'APP' || item.startsWith('APP-'))
    ) {
      return false;
    }
    return item === current || item.includes(current) || current.includes(item);
  });

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
