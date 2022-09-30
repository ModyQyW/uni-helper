# uni-app-deploy

[![License](https://img.shields.io/github/license/ModyQyW/uni-helper)](https://github.com/ModyQyW/uni-helper/blob/main/LICENSE)

[![npm](https://img.shields.io/npm/v/uni-app-deploy)](https://www.npmjs.com/package/uni-app-deploy)

**WIP**

支持在脚本文件和 CI/CD 中调用以自动部署 `uni-app` 应用。

## 使用

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

### 应用平台

#### 微信小程序

TODO

### 沟通工具

#### 企业微信

TODO

### CLI 调用

TODO

### 脚本调用

TODO
