import * as path from 'node:path';
import * as globby from 'globby';
import stripJsonComments from 'strip-json-comments';
import * as fs from 'fs-extra';
import { get } from 'lodash-es';
import pino from 'pino';
import pinoPretty from 'pino-pretty';
import { UniAppDeployConfig, defaultCwd, defaultIgnore, defaultIgnoreFiles } from './config';
import { Im, imValidate } from './im';
import { Platform, platformValidate } from './platform';

// This is used to support bin
// DO NOT CHANGE IT
const { globbySync } = globby;

export const pinoPrettyStream = pinoPretty({
  colorize: true,
  levelFirst: true,
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
  const entries = globbySync(
    filters.map((f) =>
      typeof f.entry === 'string' ? path.resolve(cwd, f.entry) : path.resolve(cwd, ...f.entry),
    ),
    { ignore: getIgnore(config), ignoreFiles: getIgnoreFiles(config) },
  );
  for (const [index, entry] of entries.entries()) {
    try {
      const content = JSON.parse(stripJsonComments(fs.readFileSync(entry, 'utf-8')));
      const field = get(content, filters[index].prop);
      if (field) return field;
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
      typeof f.entry === 'string' ? path.resolve(cwd, f.entry) : path.resolve(cwd, ...f.entry),
    ),
    { ignore: getIgnore(config), ignoreFiles: getIgnoreFiles(config) },
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
      typeof f.entry === 'string' ? path.resolve(cwd, f.entry) : path.resolve(cwd, ...f.entry),
    ),
    { ignore: getIgnore(config), ignoreFiles: getIgnoreFiles(config) },
  );
  if (entries.length === 0) {
    return '';
  }
  return path.resolve(entries[0], '..');
}

export function validatePlatforms(config: UniAppDeployConfig) {
  const platforms = Object.keys(config.platform ?? {}) as Platform[];
  const results = platforms.map((platform) => platformValidate(config, { platform }));
  return results;
}

export function validateIms(config: UniAppDeployConfig) {
  const ims = Object.keys(config.im ?? {}) as Im[];
  const results = ims.map((im) => imValidate(config, { im }));
  return results;
}
