#!/usr/bin/node
import { Command } from 'commander';
import pkg from '../package.json';
import { defineConfig, loadConfig, UniAppDeployConfig } from './config';
import { Im, imNotifyPreviewResult, imNotifyUploadResult } from './im';
import { Platform, platformPreview, platformUpload } from './platform';

(async () => {
  const program = new Command(pkg.name).version(pkg.version).description(pkg.version);

  let config: UniAppDeployConfig;
  try {
    config = defineConfig((await loadConfig()).config);
  } catch (error) {
    throw new Error(`loadConfig failed. ${error}`);
  }

  // TODO this is only a preview
  program.command('upload').action(async () => {
    const platforms = Object.keys(config.platform ?? {}) as Platform[];
    const uploadResults = await Promise.all(
      platforms.map((platform) => platformUpload(config, { platform })),
    );

    const ims = Object.keys(config.im ?? {}) as Im[];
    const notifyResults = await Promise.all(
      ims.map((im) => uploadResults.map((result) => imNotifyUploadResult(config, { im, result }))),
    );

    console.log('🎉 Upload completed.');
  });

  // TODO this is only a preview
  program.command('preview').action(async () => {
    const platforms = Object.keys(config.platform ?? {}) as Platform[];
    const uploadResults = await Promise.all(
      platforms.map((platform) => platformPreview(config, { platform })),
    );

    const ims = Object.keys(config.im ?? {}) as Im[];
    const notifyResults = await Promise.all(
      ims.map((im) => uploadResults.map((result) => imNotifyPreviewResult(config, { im, result }))),
    );

    console.log('🎉 Preview completed.');
  });
})();
