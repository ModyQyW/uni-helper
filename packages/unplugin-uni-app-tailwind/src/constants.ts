// 默认 space between 元素映射
// https://tailwindcss.com/docs/space
export const SpaceBetweenElements = [
  'view',
  'button',
  'text',
  'image',
  'uni-view',
  'uni-button',
  'uni-text',
  'uni-image',
];

// 默认 divide width 元素映射
// https://tailwindcss.com/docs/divide-width
export const DivideWidthElements = [
  'view',
  'button',
  'text',
  'image',
  'uni-view',
  'uni-button',
  'uni-text',
  'uni-image',
];

// 默认 uni-app 中元素映射
export const ElementMap: [string, string[]][] = [
  ['html', ['html', 'page']],
  ['body', ['body', 'page']],
  ['img', ['img', 'image', 'uni-image']],
  ['span', ['span', 'text', 'uni-text']],
  [
    'a',
    [
      'a',
      'functional-page-navigator',
      'navigator',
      'uni-functional-page-navigator',
      'uni-navigator',
    ],
  ],
  [
    '*',
    [
      'html',
      'body',
      'page',
      'cover-image',
      'cover-view',
      'match-media',
      'movable-area',
      'movable-view',
      'scroll-view',
      'swiper',
      'swiper-item',
      'view',
      'icon',
      'progress',
      'rich-text',
      'text',
      'button',
      'checkbox',
      'checkbox-group',
      'editor',
      'form',
      'input',
      'label',
      'picker',
      'picker-view',
      'picker-view-column',
      'radio',
      'radio-group',
      'slider',
      'switch',
      'textarea',
      'functional-page-navigator',
      'navigator',
      'audio',
      'camera',
      'image',
      'live-player',
      'live-pusher',
      'video',
      'voip-room',
      'map',
      'canvas',
      'ad',
      'ad-custom',
      'official-account',
      'open-data',
      'web-view',
      'navigation-bar',
      'page-meta',
      'uni-cover-image',
      'uni-cover-view',
      'uni-match-media',
      'uni-movable-area',
      'uni-movable-view',
      'uni-scroll-view',
      'uni-swiper',
      'uni-swiper-item',
      'uni-view',
      'uni-icon',
      'uni-progress',
      'uni-rich-text',
      'uni-text',
      'uni-button',
      'uni-checkbox',
      'uni-checkbox-group',
      'uni-editor',
      'uni-form',
      'uni-input',
      'uni-label',
      'uni-picker',
      'uni-picker-view',
      'uni-picker-view-column',
      'uni-radio',
      'uni-radio-group',
      'uni-slider',
      'uni-switch',
      'uni-textarea',
      'uni-functional-page-navigator',
      'uni-navigator',
      'uni-audio',
      'uni-camera',
      'uni-image',
      'uni-live-player',
      'uni-live-pusher',
      'uni-video',
      'uni-voip-room',
      'uni-map',
      'uni-canvas',
      'uni-ad',
      'uni-ad-custom',
      'uni-official-account',
      'uni-open-data',
      'uni-web-view',
      'uni-navigation-bar',
      'uni-page-meta',
    ],
  ],
];

// 默认 uni-app 中特殊符号映射，用于替换特殊符号
export const CharacterMap: [string, string][] = [
  ['[', '-'],
  [']', '-'],
  ['(', '-'],
  [')', '-'],
  ['#', '-h-'], // hash
  ['!', '-i-'], // important
  ['/', '-s-'], // slash
  ['.', '-d-'], // dot
  [':', '_'], // colon
  [',\\s', '-c-'], // comma
  [',', '-c-'], // comma
  ['%', '-p-'], // percentage
  ["'", '-q-'], // quote
  ['+', '-a-'], // add
  ['\\\\2c\\s', '-c-'], // comma
  ['\\\\2c', '-c-'], // comma
];
