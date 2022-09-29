# uni-app-network

[![License](https://img.shields.io/github/license/ModyQyW/uni-helper)](https://github.com/ModyQyW/uni-helper/blob/main/LICENSE)

[![npm](https://img.shields.io/npm/v/uni-app-network)](https://www.npmjs.com/package/uni-app-network)

为 `uni-app` 打造的基于 `Promise` 的 HTTP 客户端。灵感和代码绝大部分源于 `axios@1.0.0-alpha.1`。

## 起步

### 介绍

#### `uni-app-network` 是什么？

`uni-app-network` 是一个为 `uni-app` 打造的 [基于 Promise](https://javascript.info/promise-basics) 的 HTTP 客户端。灵感和代码绝大部分源于 `axios@1.0.0-alpha.1`。

#### 特性

- 默认请求使用 [uni.request](https://uniapp.dcloud.io/api/request/request.html)
- 上传文件使用 [uni.uploadFile](https://uniapp.dcloud.io/api/request/network-file.html#uploadfile)
- 下载文件使用 [uni.downloadFile](https://uniapp.dcloud.io/api/request/network-file.html#downloadfile)
- 支持 [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API
- 拦截请求和响应
- 转换请求和响应数据
- 取消请求

#### 设备和浏览器支持

需要设备和浏览器兼容 [ECMAScript 5](https://caniuse.com/#feat=es5) 并支持 [Promise](https://caniuse.com/promises)。你可以自行补充 polyfill。

#### 安装

使用 `npm`：

```shell
npm install uni-app-network
```

使用 `yarn`：

```shell
yarn install uni-app-network
```

使用 `pnpm`：

```shell
pnpm install uni-app-network
```

使用 `cnpm`：

```shell
cnpm install uni-app-network
```

不考虑支持 `uni_modules`。

### 例子

#### CommonJS

```typescript
const ur = require('uni-app-network');
```

#### 发起一个 `GET` 请求

```typescript
import ur from 'uni-app-network';

ur.get('user?ID=12345')
  .then((response) => {
    console.log('response', response);
  })
  .catch((error) => {
    console.log('error', error);
  })
  .finally(() => {});

// 上述请求和以下等同
ur.get('/user', {
  params: {
    ID: 12345,
  },
})
  .then((response) => {
    console.log('response', response);
  })
  .catch((error) => {
    console.log('error', error);
  })
  .finally(() => {});

// 支持 async/await
async function getUser() {
  try {
    const response = await ur.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

#### 发起一个 `POST` 请求

```typescript
ur.post('/user', {
  firstName: 'Fred',
  lastName: 'Flintstone',
})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {});
```

#### 并发请求

```typescript
function getUserAccount() {
  return ur.get('/user/12345');
}

function getUserPermissions() {
  return ur.get('/user/12345/permissions');
}

Promise.all([getUserAccount(), getUserPermissions()]).then((responses) => {
  const acct = responses[0];
  const perm = responses[1];
});
```

## API

### 创建请求

可以向 `ur` 传递相关配置来创建请求。

`ur(config)`

```typescript
ur({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone',
  },
});
```

`ur(url[, config])`

```typescript
ur('/user/12345');
```

为了方便起见，已经为所有支持的请求方法提供了别名。在使用别名方法时，`url`、`method`、`data` 不需要在配置中指定。

- `ur.request(config)`
- `ur.download(config)`
- `ur.upload(config)`
- `ur.get(url[, config])`
- `ur.delete(url[, config])`
- `ur.head(url[, config])`
- `ur.options(url[, config])`
- `ur.trace(url[, config])`
- `ur.connect(url[, config])`
- `ur.post(url[, data[, config]])`
- `ur.put(url[, data[, config]])`
- `ur.patch(url[, data[, config]])`

### 实例

#### 创建实例

可以使用自定义配置创建一个实例。

`ur.create([config])`

```typescript
const instance = ur.create({
  baseUrl: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});
```

#### 实例方法

以下是可用的实例方法。指定的配置将与实例的配置合并。

- `ur.request(config)`
- `ur.download(config)`
- `ur.upload(config)`
- `ur.get(url[, config])`
- `ur.delete(url[, config])`
- `ur.head(url[, config])`
- `ur.options(url[, config])`
- `ur.trace(url[, config]])`
- `ur.connect(url[, config]])`
- `ur.post(url[, data[, config]])`
- `ur.put(url[, data[, config]])`
- `ur.patch(url[, data[, config]])`
- `ur.getUri([config])`

### 请求配置

这些是创建请求时可以用的配置选项。只有 `url` 是必需的。如果没有指定 `method` 且没有指定 `adapter`，请求将默认使用 `GET` 方法。

```typescript
{
  // `url` 是用于请求的服务器 URL
  url: '/user',

  // `method` 是创建请求时使用的方法
  method: 'GET', // 默认值

  // `baseUrl` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL
  // 它可以通过设置一个 `baseUrl` 便于为 ur 实例的方法传递相对 URL
  baseUrl: 'https://some-domain.com/api/',

  // 自定义请求头
  headers: {
    'content-type': 'application/json',
  },

  // `params` 是与请求一起发送的 URL 参数
  // 必须是一个简单对象
  params: {
    ID: 12345
  },

  // `paramsSerializer` 是可选方法，主要用于序列化 `params`
  // 默认使用 [qs](https://github.com/ljharb/qs) 序列化
  paramsSerializer: (params) => { /* 返回一个字符串 */ }

  // `data` 是作为请求体被发送的数据
  // 必须是以下类型之一：string、ArrayBuffer、Record<string, any>
  data: {
    firstName: 'Fred'
  },

  // `data` 的可选语法
  data: 'Country=Brasil&City=Belo Horizonte',

  // `timeout` 指定请求超时的毫秒数
  // 如果请求时间超过 `timeout` 的值，则请求会被中断
  timeout: 1000, // 默认值是 `0` (永不超时)

  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: false, // 默认值

  // `adapter` 允许自定义处理请求
  // 你可以指定为 'request'、`upload` 和 `download` 三者之一
  // 也可以指定为一个方法，返回一个 Promise 并提供一个有效的响应
  adapter: 'request' // 默认值

  // `adapter` 的可选语法
  adapter: (config) => { /* ... */ },

  // `responseType` 表示服务器将要响应的数据类型，选项包括 'text' 和 'arraybuffer'
  responseType: 'json', // 默认值

  // `validateStatus` 定义了对于给定的 HTTP 状态码是 resolve 还是 reject
  // 如果 `validateStatus` 返回 `true`、`null` 或 `undefined`
  // 则 promise 将会被 resolve，否则会被 reject
  validateStatus: function (status) {
    return status >= 200 && status < 300; // 默认值
  },

  // 用于取消请求
  signal: new AbortController().signal,

  // 监听 HTTP Response Header 事件
  // 会比请求完成事件更早
  onHeadersReceived: (result) => { /* ... */ },

  // adapter === 'request' 独有
  // 监听 Transfer-Encoding Chunk Received 事件
  // 当接收到新的 chunk 时触发
  onChunkReceived: (result) => { /* ... */ },

  // adapter === 'upload' 独有
  // 文件对象或文件路径
  file: new File(),

  // adapter === 'upload' 独有
  // 文件类型，选项包括 'image'、'video' 和 'audio'
  fileType: 'image',

  // adapter === 'upload' 独有
  // 文件名
  fileName: 'file.txt',

  // adapter === 'upload' 和 adapter === 'download' 独有
  // 监听上传/下载进度变化事件
  onProgressUpdate: (result) => { /* ... */ },
}
```

### 响应结构

一个请求的响应包含以下信息。

```typescript
{
  // `data` 是由服务器提供的响应数据
  data: {},

  // `status` 来自服务器响应的 HTTP 状态码
  status: 200,

  // `statusText` 来自服务器响应的 HTTP 状态信息
  statusText: 'OK',

  // `headers` 是服务器响应头
  // 所有的 header 名称都是小写，而且可以使用方括号语法访问
  // 例如: `response.headers['content-type']`
  headers: {},

  // `config` 是 `ur` 请求的配置信息
  config: {},

  // `request` 是对应的 task 数据
  request: {}

  // `errMsg` 是可选的错误信息
  errMsg: '',

  // `errno` 是可选的错误代码
  errno: 0,

  // `cookies` 是可选的由服务器提供的 cookies 数据
  cookies: [],

  // `profile` 是可选的调试信息
  profile: {},

  // `tempFilePath` 是可选的临时本地文件路径
  tempFilePath: '',

  // `filePath` 是可选的用户本地文件路径
  filePath: '',
}

```

当使用 then 时，你将接收如下响应：

```typescript
ur.get('/user/12345').then((response) => {
  console.log(response.data);
  console.log(response.status);
  console.log(response.statusText);
  console.log(response.headers);
  console.log(response.config);
});
```

当使用 `catch`，或者传递一个 `rejection callback` 作为 `then` 的第二个参数时，响应可以作为 `error` 对象被使用，正如在 [错误处理](#错误处理) 部分解释的那样。

### 默认配置

你可以指定默认配置，它将作用于每个请求。

#### 全局配置默认值

```typescript
ur.defaults.baseUrl = 'https://api.example.com';
```

#### 自定义实例默认值

```typescript
// 创建实例时配置默认值
const instance = ur.create({
  baseUrl: 'https://api.example.com',
});

// 创建实例后修改默认值
instance.defaults.baseUrl = 'https://api.another-example.com';
```

#### 配置的优先级

配置将会按优先级进行合并。优先级从低到高是内置的默认值、实例的 `defaults` 配置、请求的 `config`。后面的优先级要高于前面的。下面有一个例子。

```typescript
// 使用库提供的默认配置创建实例
// 此时超时配置的默认值是 `0`
const instance = ur.create();

// 重写库的超时默认值
// 现在，所有使用此实例的请求都将等待 2.5 秒，然后才会超时
instance.defaults.timeout = 2500;

// 重写此请求的超时时间，因为该请求需要很长时间
instance.get('/longRequest', {
  timeout: 5000,
});
```

### 拦截器

在请求或响应被 `then` 或 `catch` 处理前拦截它们。

#### 添加拦截器

```typescript
// 添加请求拦截器
ur.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);

// 添加响应拦截器
ur.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数
    // 对响应错误做点什么
    return Promise.reject(error);
  },
);
```

可以给自定义实例添加拦截器。

```typescript
const instance = ur.create();
instance.interceptors.request.use(() => {
  /*...*/
});
```

#### 移除拦截器

```typescript
const myInterceptor = ur.interceptors.request.use(() => {
  /*...*/
});
ur.interceptors.request.eject(myInterceptor);
```

也可以移除所有请求或响应的拦截器。

```typescript
const instance = ur.create();
instance.interceptors.request.use(() => {
  /*...*/
});
instance.interceptors.request.clear(); // 移除所有请求拦截器
instance.interceptors.response.use(() => {
  /*...*/
});
instance.interceptors.response.clear(); // 移除所有响应拦截器
```

#### 拦截器选项

当你添加请求拦截器时，`uni-app-network` 默认认为它们是异步的。当主线程被阻塞时，这可能会导致 `uni-app-network` 请求的执行延迟（底层为拦截器创建了一个 `Promise`，你的请求被放在了调用栈的底部）。如果你的请求拦截器是同步的，你可以在选项对象中添加一个标志，告诉 `uni-app-network` 同步运行代码，避免请求执行中的任何延迟。

```typescript
ur.interceptors.request.use(
  (config) => {
    config.headers.test = 'I am only a header!';
    return config;
  },
  null,
  { synchronous: true },
);
```

如果你想根据运行时检查来执行某个拦截器，你可以在 `options` 对象中设置 `runWhen` 函数。当且仅当 `runWhen` 的返回值为 `false` 时，拦截器不会被执行。该函数将和 `config` 对象一起被调用（别忘了，你也可以绑定你自己的参数）。当你有一个只需要在特定时间运行的异步请求拦截器时，这可能会很方便。

```typescript
const onGetCall = (config) => config.method.toUpperCase() === 'GET';
ur.interceptors.request.use(
  (config) => {
    config.headers.test = 'special get headers';
    return config;
  },
  null,
  { runWhen: onGetCall },
);
```

#### 多个拦截器

假设你添加了多个响应拦截器，并且响应是 `fulfilled` 状态时：

- 执行每个拦截器
- 按照添加的顺序执行它们
- 只返回最后一个拦截器的结果
- 每个拦截器都会收到其前一个拦截器的结果
- 当 `fulfilled` 拦截器抛出时
  - 后面的 `fulfilled` 拦截器不会被调用
  - 后面的 `rejection` 拦截器会被调用
  - 一旦被捕获，后面的另一个 `fulfilled` 拦截器会被再次调用（就像在一个 `Promise` 链中一样）

### 错误处理

```typescript
ur.get('/user/12345').catch((error) => {
  if (error.response) {
    // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // 请求已经成功发起，但没有收到响应
    // `error.request` 是请求实例
    console.log(error.request);
  } else {
    // 发送请求时出了点问题
    console.log('Error', error.message);
  }
  console.log(error.config);
});
```

使用 `validateStatus`` 配置选项，可以自定义抛出错误的 HTTP code。

```typescript
ur.get('/user/12345', {
  validateStatus: (status) => {
    return status < 500; // 处理状态码小于500的情况
  },
});
```

使用 `toJSON` 可以获取更多关于 HTTP 错误的信息。

```typescript
ur.get('/user/12345').catch((error) => {
  console.log(error.toJSON());
});
```

### 取消请求

支持使用 [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) 取消请求。

```typescript
const controller = new AbortController();

ur.get('/foo/bar', {
  signal: controller.signal,
}).then(function (response) {
  //...
});
// 取消请求
controller.abort();
```

你也可以使用 `CancelToken`。

```typescript
const CancelToken = ur.CancelToken;
const source = CancelToken.source();

ur.get('/user/12345', {
  cancelToken: source.token,
}).catch(function (thrown) {
  if (ur.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // 处理错误
  }
});

ur.post(
  '/user/12345',
  {
    name: 'new name',
  },
  {
    cancelToken: source.token,
  },
);
// 取消请求（信息是可选的）
source.cancel('Operation canceled by the user.');
```

你也可以通过向 `CancelToken` 构造函数传递一个执行函数来创建一个 `CancelToken` 实例。

```js
const CancelToken = ur.CancelToken;
let cancel;

ur.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    cancel = c;
  }),
});

// 取消请求
cancel();
```

> 注意：你可以用同一个 `CancelToken` / `AbortController` 取消几个请求。
> 如果在发起请求的时候已经取消请求，那么该请求就会被立即取消，不会真正发起请求。

## 其它

### 构建

目前 `uni-app-network` 会将直接调用 `uni` API 之外的部分转译到 `esnext`，底层使用了 `tsup` 和 `esbuild`。`uni` API 需要在项目构建时由 `uni-app` 官方提供的插件处理。

对于 `vue-cli`，请修改项目根目录 `vue.config.js` 如下所示。

```js
module.exports = {
  transpileDependencies: ['uni-app-network'],
};
```

对于 `vite`，你无需手动额外调整。

### TypeScript

`uni-app-network` 本身使用 [TypeScript](https://www.typescriptlang.org/) 开发，拥有类型提示。

### 高级功能

对于缓存、去重的高级功能，建议结合 `vue-query`、`swrv`、`vue-request` 等库使用。

### 为什么不是 `axios`？

`axios` 非常棒，但它面对的是浏览器和 `Node.js`，即使使用了 `adapter`，某些底层功能也可能会在小程序内报错，而且需要修改大部分类型定义。

## 资源

- [改动日志](https://github.com/ModyQyW/uni-helper/tree/main/packages/uni-app-network/CHANGELOG.md)

## 致谢

- [axios](https://axios-http.com/)
- [luch-request](https://github.com/lei-mu/luch-request)
- [uni-ajax](https://uniajax.ponjs.com/)
- [vue-use](https://vueuse.org/)
- [react-query](https://tanstack.com/query/)
- [swr](https://swr.vercel.app/)
- [vue-query](https://vue-query.vercel.app/)
- [swrv](https://docs-swrv.netlify.app/)
- [vue-request](https://www.attojs.com/)
