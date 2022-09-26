# uni-app-deploy

[![License](https://img.shields.io/github/license/ModyQyW/uni-helper)](https://github.com/ModyQyW/uni-helper/blob/main/LICENSE)

[![npm](https://img.shields.io/npm/v/uni-app-deploy)](https://www.npmjs.com/package/uni-app-deploy)

**WIP**

支持在脚本文件和 CI/CD 中调用以自动部署 `uni-app` 应用。

## 使用

安装依赖。

```shell
npm install uni-app-deploy -D
```

新建配置文件 `uni-app-deploy.config.ts`。配置文件内容会被 [unconfig](https://github.com/antfu/unconfig) 读取。

```typescript
import { defineConfig } from 'uni-app-deploy';

export default defineConfig({
  // 默认为执行目录
  cwd: process.cwd(),
  // 微信小程序配置
  'mp-weixin': { ... },
  // 企业微信配置
  'wecom': { ... },
})
```
