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
    buildGotOptions,
  }: {
    im: Im;
    result: any;
    buildGotOptions?: <T>(result: Promise<T> | T) => GotOptions;
  },
) {
  return imNotifyUploadResultMap[im](config, { result, buildGotOptions });
}

export function imNotifyPreviewResult(
  config: UniAppDeployConfig,
  {
    im,
    result,
    buildGotOptions,
  }: {
    im: Im;
    result: any;
    buildGotOptions?: <T>(result: Promise<T> | T) => GotOptions;
  },
) {
  return imNotifyPreviewResultMap[im](config, { result, buildGotOptions });
}
