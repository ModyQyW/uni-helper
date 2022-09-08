import { Options } from './options';

export const getShouldReplaceStarSelector = (targetPlatforms: string[], platform: string) =>
  targetPlatforms.some((item) => {
    if (
      (item === 'QUICKAPP' || item.startsWith('QUICKAPP-')) &&
      (platform === 'APP' || platform.startsWith('APP-'))
    ) {
      return false;
    }
    if (
      (platform === 'QUICKAPP' || platform.startsWith('QUICKAPP-')) &&
      (item === 'APP' || item.startsWith('APP-'))
    ) {
      return false;
    }
    return item === platform || item.includes(platform) || platform.includes(item);
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
