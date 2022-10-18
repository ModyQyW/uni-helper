import { UniAppDeployConfig, PRetryOptions } from '../config';
import { mpWeixinUpload, mpWeixinPreview } from './mp-weixin';

export * from './mp-weixin';

export type Platform = 'mp-weixin';

export const platformUploadMap = {
  'mp-weixin': mpWeixinUpload,
};

export const platformPreviewMap = {
  'mp-weixin': mpWeixinPreview,
};

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
