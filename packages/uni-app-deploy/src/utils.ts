import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';
import globby from 'globby';
import stripJsonComments from 'strip-json-comments';
import { get } from 'lodash-unified';
import pino from 'pino';
import pinoPretty from 'pino-pretty';
import { UniAppDeployConfig, defaultCwd, defaultIgnore, defaultIgnoreFiles } from './config';
import { ims, imValidate } from './im';
import { platforms, platformValidate } from './platform';

export const pinoPrettyStream = pinoPretty({
  colorize: true,
  levelFirst: true,
  ignore: 'pid,hostname',
  translateTime: 'SYS:standard',
});

export const logger = pino(pinoPrettyStream);

export function getCwd(config: UniAppDeployConfig) {
  return config.cwd ?? defaultCwd;
}

export function getIgnore(config: UniAppDeployConfig) {
  return config.ignore ?? defaultIgnore;
}

export function getIgnoreFiles(config: UniAppDeployConfig) {
  return config.ignoreFiles ?? defaultIgnoreFiles;
}

export function getFileField(
  config: UniAppDeployConfig,
  filters: { entry: string | string[]; prop: string | string[] }[],
): string | number | boolean | Array<any> | Record<string, any> {
  const cwd = getCwd(config);
  const entries = globby.globbySync(
    filters.map((f) =>
      typeof f.entry === 'string' ? resolve(cwd, f.entry) : resolve(cwd, ...f.entry),
    ),
    { ignore: getIgnore(config), gitignore: true },
  );
  for (const [index, entry] of entries.entries()) {
    try {
      const content = JSON.parse(stripJsonComments(readFileSync(entry, 'utf-8')));
      const field = get(content, filters[index].prop);
      if (field != null) return field;
      if (index === entries.length - 1 && !field) {
        return '';
      }
    } catch (error) {
      return '';
    }
  }
  return '';
}

export function getFilePath(config: UniAppDeployConfig, filters: { entry: string | string[] }[]) {
  const cwd = getCwd(config);
  const entries = globby.globbySync(
    filters.map((f) =>
      typeof f.entry === 'string' ? resolve(cwd, f.entry) : resolve(cwd, ...f.entry),
    ),
    { ignore: getIgnore(config), gitignore: true },
  );
  if (entries.length === 0) {
    return '';
  }
  return entries[0];
}

export function getFileDir(config: UniAppDeployConfig, filters: { entry: string | string[] }[]) {
  const cwd = getCwd(config);
  const entries = globby.globbySync(
    filters.map((f) =>
      typeof f.entry === 'string' ? resolve(cwd, f.entry) : resolve(cwd, ...f.entry),
    ),
    { ignore: getIgnore(config), gitignore: true },
  );
  if (entries.length === 0) {
    return '';
  }
  return resolve(entries[0], '..');
}

export function validatePlatforms(config: UniAppDeployConfig) {
  const results = platforms.map((platform) => platformValidate(config, { platform }));
  return results;
}

export function validateIms(config: UniAppDeployConfig) {
  const results = ims.map((im) => imValidate(config, { im }));
  return results;
}
