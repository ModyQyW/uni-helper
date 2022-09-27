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

export function platformUpload(platform: Platform, config: UniAppDeployConfig) {
  return platformUploadMap[platform](config);
}

export function platformPreview(platform: Platform, config: UniAppDeployConfig) {
  return platformPreviewMap[platform](config);
}
