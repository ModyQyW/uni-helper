import { extname } from 'node:path';
import { readFileSync } from 'node:fs';
import got, { ExtendOptions as GotOptions } from 'got';
import { IPreviewResult } from 'miniprogram-ci/dist/@types/ci/preview';
import { IInnerUploadResult } from 'miniprogram-ci/dist/@types/ci/upload';
import { getFilePath, logger } from '../utils';
import { UniAppDeployConfig } from '../config';

export interface WecomConfig {
  /**
   * 企业微信机器人 webhook
   * 如果不填写，无法发送请求
   */
  webhook?: string | string[];
}

export function wecomGetConfig(config: UniAppDeployConfig) {
  return config?.im?.wecom;
}

export function wecomGetWebhook(config: UniAppDeployConfig) {
  return config?.im?.wecom?.webhook ?? '';
}

export function wecomValidate(config: UniAppDeployConfig) {
  const wecomConfig = wecomGetConfig(config);
  if (!wecomConfig) {
    logger.info('没有配置企业微信，跳过企业微信操作。');
    return false;
  }
  const webhook = wecomGetWebhook(config);
  if (!webhook || (Array.isArray(webhook) && webhook.length === 0)) {
    logger.info('没有配置企业微信机器人 webhook，跳过企业微信操作。');
    return false;
  }
  return true;
}

export async function wecomNotifyMpWeixinUploadResult(
  config: UniAppDeployConfig,
  {
    result,
    buildGotOptions,
  }: {
    result: Promise<IInnerUploadResult> | IInnerUploadResult;
    buildGotOptions?: (result: Promise<IInnerUploadResult> | IInnerUploadResult) => GotOptions;
  },
) {
  const webhook = wecomGetWebhook(config);
  const res = await result;
  const gotOptions: GotOptions = {
    method: 'POST',
    json: {
      msgtype: 'markdown',
      markdown: {
        content: `微信小程序上传完毕。请打开微信小程序“小程序助手”查看体验版。<br/><br/>ci.upload 原始响应：${res}`,
      },
    },
    ...buildGotOptions?.(result),
  };
  return Array.isArray(webhook)
    ? Promise.all(webhook.map((w) => got(w, gotOptions)))
    : got(webhook, gotOptions);
}

export async function wecomNotifyMpWeixinPreviewResult(
  config: UniAppDeployConfig,
  {
    result,
    buildGotOptions,
  }: {
    result: Promise<IPreviewResult> | IPreviewResult;
    buildGotOptions?: (result: Promise<IPreviewResult> | IPreviewResult) => GotOptions;
  },
) {
  const webhook = wecomGetWebhook(config);
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
      markdown: {
        content: `微信小程序预览完毕。请用微信扫二维码查看开发版。<br/><br/><image src="${base64}" width="128px" height="128px" style="width:128px;height:128px" /><br/><br/>ci.preview 原始响应：${res}`,
      },
    },
    ...buildGotOptions?.(result),
  };
  return Array.isArray(webhook)
    ? Promise.all(webhook.map((w) => got(w, gotOptions)))
    : got(webhook, gotOptions);
}
