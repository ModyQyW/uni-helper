import path from 'path';
import got, { Options as GotOptions } from 'got';
import { IPreviewResult } from 'miniprogram-ci/dist/@types/ci/preview';
import { IInnerUploadResult } from 'miniprogram-ci/dist/@types/ci/upload';
import fs from 'fs-extra';
import { getFilePath, logger } from '../utils';
import { UniAppDeployConfig } from '../config';

export interface WecomConfig {
  /**
   * 企业微信机器人 webhook
   * 如果不填写，无法发送请求
   */
  webhook?: string;
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
    logger.error('没有配置企业微信，跳过企业微信操作。');
    return false;
  }
  const webhook = wecomGetWebhook(config);
  if (!webhook) {
    logger.error('没有配置企业微信机器人 webhook，跳过企业微信操作。');
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
  return got(webhook, {
    method: 'POST',
    json: {
      msgtype: 'markdown',
      markdown: {
        content: `微信小程序上传完毕。请打开微信小程序“小程序助手”查看体验版。<br/><br/>ci.upload 原始响应：${res}`,
      },
    },
    ...buildGotOptions?.(result),
  });
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
  const imageExtension = path.extname(imagePath);
  const image = fs.readFileSync(imagePath, { encoding: 'base64' });
  const base64 = `data:image/${imageExtension.split('.').pop()};base64,${image}`;
  return got(webhook, {
    method: 'POST',
    json: {
      msgtype: 'markdown',
      markdown: {
        content: `微信小程序预览完毕。请用微信扫二维码查看开发版。<br/><br/><image src="${base64}" width="128px" height="128px" style="width:128px;height:128px" /><br/><br/>ci.preview 原始响应：${res}`,
      },
    },
    ...buildGotOptions?.(result),
  });
}
