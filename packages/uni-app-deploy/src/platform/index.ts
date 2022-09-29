import { UniAppDeployConfig } from '../config';
import { mpWeixinUpload, mpWeixinPreview } from './mp-weixin';
export * from './mp-weixin';

export type Platform = 'mp-weixin';

export const platformUploadMap = {
  'mp-weixin': mpWeixinUpload,
};

export const platformPreviewMap = {
  'mp-weixin': mpWeixinPreview,
};

export function platformUpload(config: UniAppDeployConfig, platform: Platform) {
  return platformUploadMap[platform](config);
}

export function platformPreview(config: UniAppDeployConfig, platform: Platform) {
  return platformPreviewMap[platform](config);
}
