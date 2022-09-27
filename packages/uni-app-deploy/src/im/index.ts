import { UniAppDeployConfig } from '../config';
import { WecomNotifyMpWeixinUploadResult, WecomNotifyMpWeixinPreviewResult } from './wecom';
export * from './wecom';

export type Im = 'wecom';

export const imNotifyUploadResultMap = {
  wecom: WecomNotifyMpWeixinUploadResult,
};

export const imNotifyPreviewResultMap = {
  wecom: WecomNotifyMpWeixinPreviewResult,
};

export function imNotifyUploadResult(im: Im, config: UniAppDeployConfig, result: any) {
  return imNotifyUploadResultMap[im](config, result);
}

export function imNotifyPreviewResult(im: Im, config: UniAppDeployConfig, result: any) {
  return imNotifyPreviewResultMap[im](config, result);
}
