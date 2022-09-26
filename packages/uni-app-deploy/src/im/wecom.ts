import got from 'got';
import { IPreviewResult } from 'miniprogram-ci/dist/@types/ci/preview';
import { IInnerUploadResult } from 'miniprogram-ci/dist/@types/ci/upload';
import fs from 'fs-extra';
import { getFilePath } from '../utils';
import { UniAppDeployConfig } from '../config';

export interface WecomConfig {
  /**
   * 企业微信机器人 webhook
   * 如果不填写，不发送请求
   */
  webhook?: string;
}

export function wecomGetWebhook(config: UniAppDeployConfig) {
  return config?.wecom?.webhook;
}

export async function WecomNotifyMpWeixinUploadResult(
  config: UniAppDeployConfig,
  result: Promise<IInnerUploadResult> | IInnerUploadResult,
) {
  const webhook = wecomGetWebhook(config);
  if (!webhook) return;
  const res = await result;
  return got(webhook, {
    method: 'POST',
    json: {
      msgtype: 'markdown',
      markdown: {
        content: `操作完毕。请打开微信小程序“小程序助手”查看体验版。<br/><br/>ci.upload 原始响应：${res}`,
      },
    },
  });
}

export async function WecomNotifyMpWeixinPreviewResult(
  config: UniAppDeployConfig,
  result: Promise<IPreviewResult> | IPreviewResult,
) {
  const webhook = wecomGetWebhook(config);
  if (!webhook) return;
  const res = await result;
  const imagePath = getFilePath(config, [
    { entry: config?.['mp-weixin']?.preview?.qrcodeOutputDest ?? '' },
  ]);
  const base64 = fs.readFileSync(imagePath, { encoding: 'base64' });
  return got(webhook, {
    method: 'POST',
    json: {
      msgtype: 'markdown',
      markdown: {
        content: `操作完毕。请用微信扫二维码查看开发版。<br/><br/><image src="${base64}" width="128px" height="128px" style="width:128px;height:128px" /><br/><br/>ci.preview 原始响应：${res}`,
      },
    },
  });
}
