import * as path from 'node:path';
import { globbySync } from 'globby';
import stripJsonComments from 'strip-json-comments';
import * as fs from 'fs-extra';
import { get } from 'lodash-es';
import { UniAppDeployConfig } from './config';

export function getCwd(config: UniAppDeployConfig) {
  return config.cwd ?? process.cwd();
}

export function getFileField(
  config: UniAppDeployConfig,
  filters: { entry: string | string[]; prop: string | string[] }[],
) {
  const cwd = getCwd(config);
  const entries = globbySync(
    filters.map((f) =>
      typeof f.entry === 'string' ? path.join(cwd, f.entry) : path.join(cwd, ...f.entry),
    ),
    { gitignore: true },
  );
  if (entries.length === 0) {
    throw new Error(`Can not get files.`);
  }
  for (const [index, entry] of entries.entries()) {
    try {
      const content = JSON.parse(stripJsonComments(fs.readFileSync(entry, 'utf-8')));
      const field = get(content, filters[index].prop);
      if (field) return field;
      if (index === entries.length - 1 && !field) {
        throw new Error('Can not get file Field.');
      }
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

export function getFilePath(config: UniAppDeployConfig, filters: { entry: string | string[] }[]) {
  const cwd = getCwd(config);
  const entries = globbySync(
    filters.map((f) =>
      typeof f.entry === 'string' ? path.join(cwd, f.entry) : path.join(cwd, ...f.entry),
    ),
    { gitignore: true },
  );
  if (entries.length === 0) {
    throw new Error(`Can not get files.`);
  }
  return entries[0];
}

export function getFileDir(config: UniAppDeployConfig, filters: { entry: string | string[] }[]) {
  const cwd = getCwd(config);
  const entries = globbySync(
    filters.map((f) =>
      typeof f.entry === 'string' ? path.join(cwd, f.entry) : path.join(cwd, ...f.entry),
    ),
    { gitignore: true },
  );
  if (entries.length === 0) {
    throw new Error(`Can not get files.`);
  }
  return path.join(entries[0], '..');
}
