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
  },
  title: 'uni-helper',
  titleTemplate: 'uni-helper 旨在增强 uni-app 系列产品的体验',
  // theme configs
  themeConfig: {
    nav: [
      { text: '概览', link: '/overview' },
      { text: '编辑器支持', link: '/editor/uni-helper' },
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
          { text: 'uni-helper', link: '/editor/uni-helper' },
          { text: 'uni-app-schemas', link: '/editor/uni-app-schemas' },
          { text: 'uni-app-snippets', link: '/editor/uni-app-snippets' },
          { text: 'uni-cloud-snippets', link: '/editor/uni-cloud-snippets' },
          { text: 'uni-ui-snippets', link: '/editor/uni-ui-snippets' },
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
