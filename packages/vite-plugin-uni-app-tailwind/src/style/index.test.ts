import { describe, expect, it } from 'vitest';
import { transformStyle } from './index';

describe('style', () => {
  it('replace []', () => {
    expect(transformStyle('.w-\\[10px\\] {width: 10px;}')).toBe('.w--10px- {width: 10px;}');
  });

  it('replace [] and ()', () => {
    expect(transformStyle('bg-\\[url\\(\\)\\] {}')).toBe('bg--url--- {}');
  });

  it('replace !, [] and .', () => {
    expect(transformStyle('.\\!w-\\[200\\.5px\\] {width: 200.5px !important;}')).toBe(
      '.-i-w--200-d-5px- {width: 200.5px !important;}',
    );
  });

  it('replace /', () => {
    expect(transformStyle('.top-1\\/2 {top: 50%;}')).toBe('.top-1-s-2 {top: 50%;}');
  });

  it("replace [], (), ' and /", () => {
    expect(
      transformStyle(
        ".bg-\\[url\\(\\'\\/img\\/grid\\.svg\\'\\)\\] {background-image: url('/img/grid.svg');}",
      ),
    ).toBe(".bg--url--q--s-img-s-grid-d-svg-q--- {background-image: url('/img/grid.svg');}");
  });

  it('replace [] and .', () => {
    expect(transformStyle('.w-\\[200\\.5rpx\\] {width: 200.5rpx;}')).toBe(
      '.w--200-d-5rpx- {width: 200.5rpx;}',
    );
  });

  it('replace :', () => {
    expect(transformStyle('.sm\\:mx-auto {margin-left: auto;margin-right: auto;}')).toBe(
      '.sm_mx-auto {margin-left: auto;margin-right: auto;}',
    );
  });

  it('replace [] and #', () => {
    expect(
      transformStyle(
        '.bg-\\[\\#fff\\] {--tw-bg-opacity: 1; background-color: rgb(255 255 255 / var(--tw-bg-opacity));}',
      ),
    ).toBe(
      '.bg---h-fff- {--tw-bg-opacity: 1; background-color: rgb(255 255 255 / var(--tw-bg-opacity));}',
    );
  });

  it('replace [], (), and ,', () => {
    expect(
      transformStyle(
        '.bg-\\[rgba\\(255\\,255\\,255\\,1\\)\\] {background-color: rgba(255,255,255,1);}',
      ),
    ).toBe('.bg--rgba-255-c-255-c-255-c-1-- {background-color: rgba(255,255,255,1);}');
    expect(
      transformStyle(
        '.bg-\\[rgba\\(255\\, 255\\, 255\\, 1\\)\\] {background-color: rgba(255,255,255,1);}',
      ),
    ).toBe('.bg--rgba-255-c-255-c-255-c-1-- {background-color: rgba(255,255,255,1);}');
  });

  it('replace [] and %', () => {
    expect(transformStyle('.w-\\[10\\%\\] {width: 10%;}')).toBe('.w--10-p-- {width: 10%;}');
  });

  it('replace [], (), and \\2c', () => {
    expect(
      transformStyle(
        '.bg-\\[rgba\\(255\\2c 255\\2c 255\\2c 1\\)\\] {background-color: rgba(255,255,255,1);}',
      ),
    ).toBe('.bg--rgba-255-c-255-c-255-c-1-- {background-color: rgba(255,255,255,1);}');
  });

  // TODO
  // it('replace space', () => {});

  // TODO
  // it('replace divide', () => {});

  it('replace html', () => {
    expect(
      transformStyle(
        'html {line-height: 1.5;-webkit-text-size-adjust: 100%;-moz-tab-size: 4;tab-size: 4;}',
      ),
    ).toBe(
      'html,page {line-height: 1.5;-webkit-text-size-adjust: 100%;-moz-tab-size: 4;tab-size: 4;}',
    );
  });

  it('replace body', () => {
    expect(transformStyle('body {margin: 0;line-height: inherit;}')).toBe(
      'body,page {margin: 0;line-height: inherit;}',
    );
  });

  it('replace img', () => {
    expect(
      transformStyle(
        'img, svg, video, canvas, audio, iframe, embed, object {display: block;vertical-align: middle;}',
      ),
    ).toBe(
      'img,image, svg, video, canvas, audio, iframe, embed, object {display: block;vertical-align: middle;}',
    );
  });

  it('replace span', () => {
    expect(transformStyle('span {color: #333;}')).toBe('span,text {color: #333;}');
  });

  it('replace a', () => {
    expect(transformStyle('a {color: inherit;text-decoration: inherit;}')).toBe(
      'a,functional-page-navigator,navigator {color: inherit;text-decoration: inherit;}',
    );
  });

  it('replace *', () => {
    expect(
      transformStyle(
        '*, ::before, ::after {box-sizing: border-box;border-width: 0;border-style: solid;border-color: #e5e7eb;}',
      ),
    ).toBe(
      'html,body,page,cover-image,cover-view,match-media,movable-area,movable-view,scroll-view,swiper,swiper-item,view,icon,progress,rich-text,text,button,checkbox,checkbox-group,editor,form,input,label,picker,picker-view,picker-view-column,radio,radio-group,slider,switch,textarea,functional-page-navigator,navigator,audio,camera,image,live-player,live-pusher,video,voip-room,map,canvas,ad,ad-custom,official-account,open-data,web-view,navigation-bar,page-meta, ::before, ::after {box-sizing: border-box;border-width: 0;border-style: solid;border-color: #e5e7eb;}',
    );
  });
});
