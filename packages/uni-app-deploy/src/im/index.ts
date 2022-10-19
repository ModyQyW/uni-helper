import { UniAppDeployConfig, GotOptions } from '../config';
import {
  wecomNotifyMpWeixinUploadResult,
  wecomNotifyMpWeixinPreviewResult,
  wecomValidate,
} from './wecom';
export * from './wecom';

export const ims = ['wecom'] as const;

export type Im = typeof ims[number];

export const imValidateMap = {
  wecom: wecomValidate,
};

export const imNotifyUploadResultMap = {
  wecom: wecomNotifyMpWeixinUploadResult,
};

export const imNotifyPreviewResultMap = {
  wecom: wecomNotifyMpWeixinPreviewResult,
};

export function imValidate(config: UniAppDeployConfig, { im }: { im: Im }) {
  return imValidateMap[im](config);
}

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
