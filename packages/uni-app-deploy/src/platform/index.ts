import { UniAppDeployConfig, PRetryOptions } from '../config';
import { mpWeixinUpload, mpWeixinPreview, mpWeixinValidate } from './mp-weixin';

export * from './mp-weixin';

export const platforms = ['mp-weixin'] as const;

export type Platform = typeof platforms[number];

export const platformValidateMap = {
  'mp-weixin': mpWeixinValidate,
};

export const platformUploadMap = {
  'mp-weixin': mpWeixinUpload,
};

export const platformPreviewMap = {
  'mp-weixin': mpWeixinPreview,
};

export function platformValidate(
  config: UniAppDeployConfig,
  {
    platform,
  }: {
    platform: Platform;
  },
) {
  return platformValidateMap[platform](config);
}

export function platformUpload(
  config: UniAppDeployConfig,
  {
    platform,
    pRetryOptions,
  }: {
    platform: Platform;
    pRetryOptions?: PRetryOptions;
  },
) {
  return platformUploadMap[platform](config, { pRetryOptions });
}

export function platformPreview(
  config: UniAppDeployConfig,
  {
    platform,
    pRetryOptions,
  }: {
    platform: Platform;
    pRetryOptions?: PRetryOptions;
  },
) {
  return platformPreviewMap[platform](config, { pRetryOptions });
}
