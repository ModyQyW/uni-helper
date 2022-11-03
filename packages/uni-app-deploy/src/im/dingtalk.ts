import { extname } from 'node:path';
import { readFileSync } from 'node:fs';
import got, { ExtendOptions as GotOptions } from 'got';
import { IPreviewResult } from 'miniprogram-ci/dist/@types/ci/preview';
import { IInnerUploadResult } from 'miniprogram-ci/dist/@types/ci/upload';
import { getFilePath, logger } from '../utils';
import { UniAppDeployConfig } from '../config';

export interface DingtalkConfig {
  /**
   * 钉钉机器人 webhook
   * 如果不填写，无法发送请求
   */
  webhook?: string | string[];
}

export function dingtalkGetConfig(config: UniAppDeployConfig) {
  return config?.im?.dingtalk;
}

export function dingtalkGetWebhook(config: UniAppDeployConfig) {
  return config?.im?.dingtalk?.webhook ?? '';
}

export function dingtalkValidate(config: UniAppDeployConfig) {
  const dingtalkConfig = dingtalkGetConfig(config);
  if (!dingtalkConfig) {
    logger.info('没有配置钉钉，跳过钉钉操作。');
    return false;
  }
  const webhook = dingtalkGetWebhook(config);
  if (!webhook || (Array.isArray(webhook) && webhook.length === 0)) {
    logger.info('没有配置钉钉机器人 webhook，跳过钉钉操作。');
    return false;
  }
  return true;
}

export async function dingtalkNotifyMpWeixinUploadResult(
  config: UniAppDeployConfig,
  {
    result,
    buildGotOptions,
  }: {
    result: Promise<IInnerUploadResult> | IInnerUploadResult;
    buildGotOptions?: (result: Promise<IInnerUploadResult> | IInnerUploadResult) => GotOptions;
  },
) {
  const webhook = dingtalkGetWebhook(config);
  const res = await result;
  const gotOptions: GotOptions = {
    method: 'POST',
    json: {
      msgtype: 'markdown',
      text: {
        content: `微信小程序上传完毕。请打开微信小程序“小程序助手”查看体验版。<br/><br/>ci.upload 原始响应：${res}`,
      },
    },
    ...buildGotOptions?.(result),
  };
  return Array.isArray(webhook)
    ? Promise.all(webhook.map((w) => got(w, gotOptions)))
    : got(webhook, gotOptions);
}

export async function dingtalkNotifyMpWeixinPreviewResult(
  config: UniAppDeployConfig,
  {
    result,
    buildGotOptions,
  }: {
    result: Promise<IPreviewResult> | IPreviewResult;
    buildGotOptions?: (result: Promise<IPreviewResult> | IPreviewResult) => GotOptions;
  },
) {
  const webhook = dingtalkGetWebhook(config);
  const res = await result;

  const imagePath = getFilePath(config, [
    { entry: config?.platform?.['mp-weixin']?.preview?.qrcodeOutputDest ?? '' },
  ]);
  const imageExtension = extname(imagePath);
  const image = readFileSync(imagePath, { encoding: 'base64' });
  const base64 = `data:image/${imageExtension.split('.').pop()};base64,${image}`;
  const gotOptions: GotOptions = {
    method: 'POST',
    json: {
      msgtype: 'markdown',
      text: {
        content: `微信小程序预览完毕。请用微信扫二维码查看开发版。<br/><br/><image src="${base64}" width="128px" height="128px" style="width:128px;height:128px" /><br/><br/>ci.preview 原始响应：${res}`,
      },
    },
    ...buildGotOptions?.(result),
  };
  return Array.isArray(webhook)
    ? Promise.all(webhook.map((w) => got(w, gotOptions)))
    : got(webhook, gotOptions);
}
