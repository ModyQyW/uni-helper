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

export function imNotifyUploadResult(config: UniAppDeployConfig, im: Im, result: any) {
  return imNotifyUploadResultMap[im](config, result);
}

export function imNotifyPreviewResult(config: UniAppDeployConfig, im: Im, result: any) {
  return imNotifyPreviewResultMap[im](config, result);
}
