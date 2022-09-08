import { describe, expect, it } from 'vitest';
import { getShouldReplaceStarSelector } from './utils';

describe('utils::getShouldApply', () => {
  it('default', () => {
    expect(getShouldReplaceStarSelector(['MP', 'QUICKAPP'], 'MP-WEIXIN')).toBe(true);
    expect(getShouldReplaceStarSelector(['MP', 'QUICKAPP'], 'MP-ALIPAY')).toBe(true);
    expect(getShouldReplaceStarSelector(['MP', 'QUICKAPP'], 'APP')).toBe(false);
    expect(getShouldReplaceStarSelector(['MP', 'QUICKAPP'], 'APP-PLUS')).toBe(false);
    expect(getShouldReplaceStarSelector(['MP', 'QUICKAPP'], 'APP-PLUS-NVUE')).toBe(false);
    expect(getShouldReplaceStarSelector(['MP', 'QUICKAPP'], 'QUICKAPP-WEBVIEW')).toBe(true);
    expect(getShouldReplaceStarSelector(['MP', 'QUICKAPP'], 'QUICKAPP-WEBVIEW-UNION')).toBe(true);
    expect(getShouldReplaceStarSelector(['MP', 'QUICKAPP'], 'QUICKAPP-WEBVIEW-HUAWEI')).toBe(true);
  });

  it('MP', () => {
    expect(getShouldReplaceStarSelector(['MP'], 'MP-WEIXIN')).toBe(true);
    expect(getShouldReplaceStarSelector(['MP'], 'MP-ALIPAY')).toBe(true);
    expect(getShouldReplaceStarSelector(['MP', 'MP-WEIXIN'], 'MP-ALIPAY')).toBe(true);
    expect(getShouldReplaceStarSelector(['MP-ALIPAY', 'MP-WEIXIN'], 'MP-ALIPAY')).toBe(true);
  });

  it('APP', () => {
    expect(getShouldReplaceStarSelector(['APP'], 'APP-PLUS')).toBe(true);
    expect(getShouldReplaceStarSelector(['APP'], 'QUICKAPP')).toBe(false);
    expect(getShouldReplaceStarSelector(['APP-PLUS'], 'APP-PLUS')).toBe(true);
    expect(getShouldReplaceStarSelector(['APP'], 'APP-PLUS-NVUE')).toBe(true);
  });

  it('QUICKAPP', () => {
    expect(getShouldReplaceStarSelector(['QUICKAPP'], 'QUICKAPP-WEBVIEW')).toBe(true);
    expect(getShouldReplaceStarSelector(['QUICKAPP'], 'QUICKAPP-WEBVIEW-UNION')).toBe(true);
    expect(getShouldReplaceStarSelector(['QUICKAPP'], 'QUICKAPP-WEBVIEW-HUAWEI')).toBe(true);
  });
});
