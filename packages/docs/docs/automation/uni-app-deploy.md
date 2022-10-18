# uni-app-deploy

[![License](https://img.shields.io/github/license/ModyQyW/uni-helper)](https://github.com/ModyQyW/uni-helper/blob/main/LICENSE)

[![npm](https://img.shields.io/npm/v/uni-app-deploy)](https://www.npmjs.com/package/uni-app-deploy)

**WIP**

支持在脚本文件和 CI/CD 中调用以自动部署 `uni-app` 应用。

## 起步

### 安装依赖

安装依赖。

使用 `npm`：

```shell
npm install uni-app-deploy -D
```

使用 `yarn`：

```shell
yarn install uni-app-deploy -D
```

使用 `pnpm`：

```shell
pnpm install uni-app-deploy -D
```

使用 `cnpm`：

```shell
cnpm install uni-app-deploy -D
```

### 配置文件

新建配置文件 `uni-app-deploy.config.ts`。配置文件内容会被 [unconfig](https://github.com/antfu/unconfig) 读取。

```typescript
import { defineConfig } from 'uni-app-deploy';

export default defineConfig({
  /* 通用配置 */
  // 当前进程的工作目录，默认为执行目录
  cwd: process.cwd(),
  // globby 匹配文件时需要过滤的模式，默认过滤 node_modules, dist, .hbuilder, .hbuilderx
  ignore: ['**/node_modules', '**/dist', '**/.hbuilder', '**/.hbuilderx'],
  // globby 使用的忽略文件，默认为 .gitignore
  ignoreFiles: ['**/.gitignore'],

  /* 应用平台 */
  platform: {
    // 微信小程序配置
    'mp-weixin': { ... },
  },

  /* 沟通工具 */
  im: {
    // 企业微信配置
    'wecom': { ... },
  },
})
```

## 配置

### 应用平台

如果不需要某个应用平台，传入 `falsy` 值即可。

#### 微信小程序

类型定义如下。

```typescript
import { ICreateProjectOptions } from 'miniprogram-ci/dist/@types/ci/project';
import { IInnerUploadOptions } from 'miniprogram-ci/dist/@types/ci/upload';

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
```

### 沟通工具

如果不需要某个沟通工具，传入 `falsy` 值即可。

#### 企业微信

```typescript
export interface WecomConfig {
  /**
   * 企业微信机器人 webhook
   * 如果不填写，无法发送请求
   */
  webhook?: string;
}
```

### CLI 调用

注册的命令是 `uni-app-deploy` 和 `uad`。你可以通过 `uni-app-deploy -h` 或 `uad -h` 查看命令提示。

目前提供三个命令。

#### `uni-app-deploy validate`

检查配置文件。

#### `uni-app-deploy upload`

上传。

#### `uni-app-deploy preview`

预览。

### 脚本调用

你可以从 `uni-app-deploy` 导入各种方法来组合使用。CLI 只是提供了更便捷的方式操作。

```typescript
import {...} from 'uni-app-deploy';
```
