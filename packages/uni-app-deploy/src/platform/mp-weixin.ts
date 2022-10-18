import ci from 'miniprogram-ci';
import pRetry from 'p-retry';
import { MiniProgramCI } from 'miniprogram-ci/dist/@types/types';
import { ICreateProjectOptions } from 'miniprogram-ci/dist/@types/ci/project';
import { IInnerUploadOptions } from 'miniprogram-ci/dist/@types/ci/upload';
import { UniAppDeployConfig, PRetryOptions } from '../config';
import { getFileField, getFileDir, getFilePath, logger } from '../utils';

export interface MpWeixinConfig {
  /** miniprogram-ci ci.project */
  // {
  //   /**
  //    * 小程序 / 小游戏 appid
  //    * 如果没有填写，会尝试按以下顺序读取，如果读取失败将无法运行
  //    * ./src/manifest.json mp-weixin appid
  //    * ./**/manifest.json mp-weixin appid
  //    * ./dist/mp-weixin/project.config.json appid
  //    * ./dist/build/mp-weixin/project.config.json appid
  //    * ./dist/**\/mp-weixin/project.config.json appid
  //    */
  //   appid?: string;
  //   /**
  //    * 项目路径
  //    * 如果没有填写，会尝试按以下顺序寻找 project.config.json 并将其所在目录作为项目路径，如果寻找失败将无法运行
  //    * ./dist/mp-weixin/project.config.json
  //    * ./dist/build/mp-weixin/project.config.json
  //    * ./dist/**\/mp-weixin/project.config.json
  //    */
  //   path?: string;
  //   /**
  //    * 私钥内容
  //    */
  //   privateKey?: string;
  //   /**
  //    * 私钥路径
  //    * 如果没有填写，会尝试按以下顺序寻找 .key 文件并将其路径作为私钥路径，寻找失败不影响继续运行
  //    * ./**\/private.${appid}.key
  //    * ./**\/weixin.${appid}.key
  //    * ./**\/wechat.${appid}.key
  //    */
  //   privateKeyPath?: string;
  //   /**
  //    * 当前项目类型，默认为 miniprogram
  //    */
  //   type?: MiniProgramCI.ProjectType;
  // };
  project?: Partial<ICreateProjectOptions>;

  /** miniprogram-ci ci.upload */
  // {
  //   /**
  //    * 版本号
  //    * 如果没有填写，会尝试按以下顺序读取，如果读取失败将无法运行
  //    * ./package.json version
  //    * ./src/manifest.json versionName
  //    * ./**/manifest.json versionName
  //    */
  //   version?: string;
  //   /**
  //    * 编译设置
  //    * 如果没有填写，会尝试按以下顺序读取，如果读取失败将无法运行
  //    * ./src/manifest.json mp-weixin setting
  //    * ./**/manifest.json mp-weixin setting
  //    * ./dist/mp-weixin/project.config.json setting
  //    * ./dist/build/mp-weixin/project.config.json setting
  //    * ./dist/**\/mp-weixin/project.config.json setting
  //    */
  //   setting?: MiniProgramCI.ICompileSettings;
  //   /**
  //    * 备注，默认为 Uploaded by uni-app-deploy
  //    */
  //   desc?: string;
  // };
  upload?: Partial<Omit<IInnerUploadOptions, 'project'>>;

  /** miniprogram-ci ci.preview */
  // {
  //   /**
  //    * 版本号
  //    * 如果没有填写，会尝试按以下顺序读取，如果读取失败将无法运行
  //    * ./package.json version
  //    * ./src/manifest.json versionName
  //    * ./**/manifest.json versionName
  //    */
  //   version?: string;
  //   /**
  //    * 编译设置
  //    * 如果没有填写，会尝试按以下顺序读取，如果读取失败将无法运行
  //    * ./src/manifest.json mp-weixin setting
  //    * ./**/manifest.json mp-weixin setting
  //    * ./dist/mp-weixin/project.config.json setting
  //    * ./dist/build/mp-weixin/project.config.json setting
  //    * ./dist/**\/mp-weixin/project.config.json setting
  //    */
  //   setting?: MiniProgramCI.ICompileSettings;
  //   /**
  //    * 备注，默认为 Uploaded by uni-app-deploy
  //    */
  //   desc?: string;
  //   /**
  //    * 二维码格式，默认为 image
  //    */
  //   qrcodeFormat?: 'base64' | 'image' | 'terminal';
  //   /**
  //    * 二维码输出路径，默认为 qrcode.png
  //    */
  //   qrcodeOutputDest?: string;
  // };
  preview?: Partial<Omit<IInnerUploadOptions, 'project' | 'test'> & { test?: true }>;
}

export function mpWeixinGetConfig(config: UniAppDeployConfig) {
  return config?.platform?.['mp-weixin'];
}

export function mpWeixinGetProjectAppid(config: UniAppDeployConfig) {
  return (config?.platform?.['mp-weixin']?.project?.appid ??
    getFileField(config, [
      { entry: ['src', 'manifest.json'], prop: ['mp-weixin', 'appid'] },
      { entry: ['**', 'manifest.json'], prop: ['mp-weixin', 'appid'] },
      { entry: ['dist', 'mp-weixin', 'project.config.json'], prop: 'appid' },
      { entry: ['dist', 'build', 'mp-weixin', 'project.config.json'], prop: 'appid' },
      { entry: ['dist', '**', 'mp-weixin', 'project.config.json'], prop: 'appid' },
    ])) as string;
}

export function mpWeixinGetProjectPath(config: UniAppDeployConfig) {
  return (
    config?.platform?.['mp-weixin']?.project?.projectPath ??
    getFileDir(config, [
      { entry: ['dist', 'mp-weixin', 'project.config.json'] },
      { entry: ['dist', 'build', 'mp-weixin', 'project.config.json'] },
      { entry: ['dist', '**', 'mp-weixin', 'project.config.json'] },
    ])
  );
}

export function mpWeixinGetProjectPrivateKeyPath(config: UniAppDeployConfig) {
  const appid = mpWeixinGetProjectAppid(config);
  return (
    config?.platform?.['mp-weixin']?.project?.privateKeyPath ??
    getFilePath(config, [
      { entry: ['**', `private.${appid}.key`] },
      { entry: ['**', `weixin.${appid}.key`] },
      { entry: ['**', `wechat.${appid}.key`] },
    ])
  );
}

export function mpWeixinGetProjectType(config: UniAppDeployConfig) {
  return config?.platform?.['mp-weixin']?.project?.type ?? 'miniProgram';
}

export function mpWeixinValidate(config: UniAppDeployConfig) {
  const mpWeixinConfig = mpWeixinGetConfig(config);
  if (!mpWeixinConfig) {
    logger.error('没有配置微信小程序，跳过微信小程序操作。');
    return false;
  }
  const appid = mpWeixinGetProjectAppid(config);
  if (!appid) {
    logger.error('没有配置微信小程序 appid，跳过微信小程序操作。');
    return false;
  }
  return true;
}

export function mpWeixinCreateProject(config: UniAppDeployConfig) {
  const project = new ci.Project({
    ...config?.platform?.['mp-weixin']?.project,
    appid: mpWeixinGetProjectAppid(config),
    projectPath: mpWeixinGetProjectPath(config),
    privateKeyPath: mpWeixinGetProjectPrivateKeyPath(config),
    type: mpWeixinGetProjectType(config),
  });
  return project;
}

export function mpWeixinGetUploadVersion(config: UniAppDeployConfig) {
  return (config?.platform?.['mp-weixin']?.upload?.version ??
    getFileField(config, [
      { entry: 'package.json', prop: 'version' },
      { entry: ['src', 'manifest.json'], prop: ['versionName'] },
      { entry: ['**', 'manifest.json'], prop: ['versionName'] },
    ])) as string;
}

export function mpWeixinGetUploadSetting(config: UniAppDeployConfig) {
  return (config?.platform?.['mp-weixin']?.upload?.setting ??
    getFileField(config, [
      { entry: ['src', 'manifest.json'], prop: ['mp-weixin', 'setting'] },
      { entry: ['**', 'manifest.json'], prop: ['mp-weixin', 'setting'] },
      { entry: ['dist', 'mp-weixin', 'project.config.json'], prop: ['setting'] },
      { entry: ['dist', 'build', 'mp-weixin', 'project.config.json'], prop: ['setting'] },
      { entry: ['dist', '**', 'mp-weixin', 'project.config.json'], prop: ['setting'] },
    ])) as MiniProgramCI.ICompileSettings;
}

export function mpWeixinGetUploadDesc(config: UniAppDeployConfig) {
  return config?.platform?.['mp-weixin']?.upload?.desc ?? 'Uploaded by uni-app-deploy';
}

export async function mpWeixinUpload(
  config: UniAppDeployConfig,
  { pRetryOptions }: { pRetryOptions?: PRetryOptions },
) {
  return pRetry(
    () =>
      ci.upload({
        ...config?.platform?.['mp-weixin']?.upload,
        project: mpWeixinCreateProject(config),
        version: mpWeixinGetUploadVersion(config),
        setting: mpWeixinGetUploadSetting(config),
        desc: mpWeixinGetUploadDesc(config),
      }),
    pRetryOptions,
  );
}

export function mpWeixinGetPreviewVersion(config: UniAppDeployConfig) {
  return (config?.platform?.['mp-weixin']?.preview?.version ??
    getFileField(config, [
      { entry: 'package.json', prop: 'version' },
      { entry: ['src', 'manifest.json'], prop: ['versionName'] },
      { entry: ['**', 'manifest.json'], prop: ['versionName'] },
    ])) as string;
}

export function mpWeixinGetPreviewSetting(config: UniAppDeployConfig) {
  return (config?.platform?.['mp-weixin']?.preview?.setting ??
    getFileField(config, [
      { entry: ['src', 'manifest.json'], prop: ['mp-weixin', 'setting'] },
      { entry: ['**', 'manifest.json'], prop: ['mp-weixin', 'setting'] },
      { entry: ['dist', 'mp-weixin', 'project.config.json'], prop: ['setting'] },
      { entry: ['dist', 'build', 'mp-weixin', 'project.config.json'], prop: ['setting'] },
      { entry: ['dist', '**', 'mp-weixin', 'project.config.json'], prop: ['setting'] },
    ])) as MiniProgramCI.ICompileSettings;
}

export function mpWeixinGetPreviewDesc(config: UniAppDeployConfig) {
  return config?.platform?.['mp-weixin']?.preview?.desc ?? 'Uploaded by uni-app-deploy';
}

export function mpWeixinGetPreviewQrcodeFormat(config: UniAppDeployConfig) {
  return config?.platform?.['mp-weixin']?.preview?.qrcodeFormat ?? 'image';
}

export function mpWeixinGetPreviewQrcodeOutputDest(config: UniAppDeployConfig) {
  return config?.platform?.['mp-weixin']?.preview?.qrcodeOutputDest ?? 'qrcode.png';
}

export async function mpWeixinPreview(
  config: UniAppDeployConfig,
  { pRetryOptions }: { pRetryOptions?: PRetryOptions },
) {
  return pRetry(
    () =>
      ci.preview({
        ...config?.platform?.['mp-weixin']?.preview,
        project: mpWeixinCreateProject(config),
        version: mpWeixinGetPreviewVersion(config),
        setting: mpWeixinGetPreviewSetting(config),
        desc: mpWeixinGetPreviewDesc(config),
        qrcodeFormat: mpWeixinGetPreviewQrcodeFormat(config),
        qrcodeOutputDest: mpWeixinGetPreviewQrcodeOutputDest(config),
      }),
    pRetryOptions,
  );
}
