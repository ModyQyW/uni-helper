import { resolve, relative } from 'node:path';
import { readFileSync } from 'node:fs';
import { globbySync } from 'globby';
import stripJsonComments from 'strip-json-comments';
import { get } from 'lodash-unified';
import pino from 'pino';
import pinoPretty from 'pino-pretty';
import { UniAppDeployConfig, defaultCwd } from './config';
import { ims, imValidate } from './im';
import { platforms, platformValidate } from './platform';

export const pinoPrettyStream = pinoPretty({
  colorize: true,
  levelFirst: true,
  ignore: 'pid,hostname',
  translateTime: 'SYS:standard',
});

export const logger = pino(pinoPrettyStream);

export const globbyIgnore = ['**/node_modules', '**/dist', '**/.hbuilder', '**/.hbuilderx'];

export function jsoncParse(data: string) {
  try {
    return new Function('return ' + stripJsonComments(data).trim())();
  } catch {
    return {};
  }
}

export async function loadJson(filePath: string) {
  try {
    return jsoncParse(readFileSync(filePath, 'utf8'));
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to parse ${relative(process.cwd(), filePath)}: ${error.message}`);
    } else {
      throw error;
    }
  }
}

export function getCwd(config: UniAppDeployConfig) {
  return config.cwd ?? defaultCwd;
}

export function getFileField(
  config: UniAppDeployConfig,
  filters: { entry: string | string[]; prop: string | string[] }[],
): string | number | boolean | Array<any> | Record<string, any> {
  const cwd = getCwd(config);
  const entries = globbySync(
    filters.map((f) =>
      typeof f.entry === 'string' ? resolve(cwd, f.entry) : resolve(cwd, ...f.entry),
    ),
    { ignore: globbyIgnore },
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
  const entries = globbySync(
    filters.map((f) =>
      typeof f.entry === 'string' ? resolve(cwd, f.entry) : resolve(cwd, ...f.entry),
    ),
    { ignore: globbyIgnore },
  );
  if (entries.length === 0) {
    return '';
  }
  return entries[0];
}

export function getFileDir(config: UniAppDeployConfig, filters: { entry: string | string[] }[]) {
  const cwd = getCwd(config);
  const entries = globbySync(
    filters.map((f) =>
      typeof f.entry === 'string' ? resolve(cwd, f.entry) : resolve(cwd, ...f.entry),
    ),
    { ignore: globbyIgnore },
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
