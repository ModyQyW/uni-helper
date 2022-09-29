import { UniAppDeployConfig, GotOptions } from '../config';
import { WecomNotifyMpWeixinUploadResult, WecomNotifyMpWeixinPreviewResult } from './wecom';
export * from './wecom';

export type Im = 'wecom';

export const imNotifyUploadResultMap = {
  wecom: WecomNotifyMpWeixinUploadResult,
};

export const imNotifyPreviewResultMap = {
  wecom: WecomNotifyMpWeixinPreviewResult,
};

export function imNotifyUploadResult(
  config: UniAppDeployConfig,
  {
    im,
    result,
    gotOptions,
  }: {
    im: Im;
    result: any;
    gotOptions?: GotOptions;
  },
) {
  return imNotifyUploadResultMap[im](config, { result, gotOptions });
}

export function imNotifyPreviewResult(
  config: UniAppDeployConfig,
  {
    im,
    result,
    gotOptions,
  }: {
    im: Im;
    result: any;
    gotOptions?: GotOptions;
  },
) {
  return imNotifyPreviewResultMap[im](config, { result, gotOptions });
}
