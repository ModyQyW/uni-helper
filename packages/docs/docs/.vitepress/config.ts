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
      { text: '编辑器支持', link: '/editor/vscode-uni-helper' },
      { text: '构建工具支持', link: '/bundler/vite-plugin-uni-app-tailwind' },
      { text: 'TypeScript 支持', link: '/typescript/uni-app-types' },
      { text: 'Request 支持', link: '/request/uni-request' },
      { text: '组合式支持', link: '/composition/uni-app-use' },
    ],
    sidebar: [
      {
        text: '概览',
        collapsible: true,
        items: [{ text: '概览', link: '/overview' }],
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
        text: 'TypeScript 支持',
        collapsible: true,
        items: [
          { text: 'uni-app-types', link: '/typescript/uni-app-types' },
          { text: 'uni-cloud-types', link: '/typescript/uni-cloud-types' },
          { text: 'uni-ui-types', link: '/typescript/uni-ui-types' },
        ],
      },
      {
        text: 'Request 支持',
        collapsible: true,
        items: [{ text: 'uni-request', link: '/request/uni-request' }],
      },
      {
        text: '组合式支持',
        collapsible: true,
        items: [{ text: 'uni-app-use', link: '/composition/uni-app-use' }],
      },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/ModyQyW/uni-helper',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2020-present ModyQyW',
    },
  },
});
