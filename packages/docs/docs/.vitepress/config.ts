import { defineConfig } from 'vitepress';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  // app configs
  base: isProduction ? '/uni-helper/' : undefined,
  description: 'uni-helper 文档站点',
  lang: 'zh-Hans',
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
    theme: 'github-dark',
  },
  title: 'uni-helper',
  titleTemplate: 'uni-helper 旨在增强 uni-app 系列产品的体验',
  // theme configs
  themeConfig: {
    nav: [
      { text: '概览', link: '/overview' },
      { text: 'TypeScript 支持', link: '/typescript/uni-app-types' },
      { text: '编辑器支持', link: '/editor/vscode-uni-helper' },
      { text: '构建工具支持', link: '/bundler/vite-plugin-uni-app-tailwind' },
      { text: '网络请求支持', link: '/network/uni-app-network' },
      { text: '组合式支持', link: '/composition/uni-app-use' },
      { text: '自动化支持', link: '/automation/uni-app-deploy' },
    ],
    sidebar: [
      {
        text: '概览',
        collapsible: true,
        items: [{ text: '概览', link: '/overview' }],
      },
      {
        text: 'TypeScript 支持',
        collapsible: true,
        items: [
          { text: 'uni-app-types', link: '/typescript/uni-app-types' },
          { text: 'uni-cloud-types', link: '/typescript/uni-cloud-types' },
          { text: 'uni-ui-types', link: '/typescript/uni-ui-types' },
        ],
      },
      {
        text: '编辑器支持',
        collapsible: true,
        items: [
          { text: 'vscode-uni-helper', link: '/editor/vscode-uni-helper' },
          { text: 'vscode-uni-app-schemas', link: '/editor/vscode-uni-app-schemas' },
          { text: 'vscode-uni-app-snippets', link: '/editor/vscode-uni-app-snippets' },
          { text: 'vscode-uni-cloud-snippets', link: '/editor/vscode-uni-cloud-snippets' },
          { text: 'vscode-uni-ui-snippets', link: '/editor/vscode-uni-ui-snippets' },
        ],
      },
      {
        text: '构建工具支持',
        collapsible: true,
        items: [
          { text: 'vite-plugin-uni-app-tailwind', link: '/bundler/vite-plugin-uni-app-tailwind' },
        ],
      },

      {
        text: '网络请求支持',
        collapsible: true,
        items: [{ text: 'uni-app-network', link: '/network/uni-app-network' }],
      },
      {
        text: '组合式支持',
        collapsible: true,
        items: [{ text: 'uni-app-use', link: '/composition/uni-app-use' }],
      },
      {
        text: '自动化支持',
        collapsible: true,
        items: [{ text: 'uni-app-deploy', link: '/automation/uni-app-deploy' }],
      },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/ModyQyW/uni-helper',
      },
      {
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify iconify--simple-icons"><path fill="currentColor" d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296Z"></path></svg>`,
        },
        link: 'https://gitee.com/ModyQyW/uni-helper',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2020-present ModyQyW',
    },
  },
});
