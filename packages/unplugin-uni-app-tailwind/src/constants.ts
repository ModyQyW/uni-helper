// 默认 space between 元素映射
// https://tailwindcss.com/docs/space
export const SpaceBetweenElements = ['view', 'button', 'text', 'image'];

// 默认 divide width 元素映射
// https://tailwindcss.com/docs/divide-width
export const DivideWidthElements = ['view', 'button', 'text', 'image'];

// 默认 uni-app 中元素映射
export const ElementMap: [string, string[]][] = [
  ['html', ['html', 'page']],
  ['body', ['body', 'page']],
  ['img', ['img', 'image']],
  ['span', ['span', 'text']],
  ['a', ['a', 'functional-page-navigator', 'navigator']],
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
