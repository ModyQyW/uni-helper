import URLSearchParams from '@ungap/url-search-params';
import { describe, it, expect } from 'vitest';
import { buildUrl } from './buildUrl';

describe('utils::buildUrl', () => {
  it('should support null params', () => {
    expect(buildUrl('/foo')).toEqual('/foo');
  });

  it('should support params', () => {
    expect(
      buildUrl('/foo', {
        foo: 'bar',
      }),
    ).toEqual('/foo?foo=bar');
  });

  it('should support object params', () => {
    expect(
      buildUrl('/foo', {
        foo: {
          bar: 'baz',
        },
      }),
    ).toEqual('/foo?foo%5Bbar%5D=baz');
  });

  it('should support date params', () => {
    const date = new Date();

    expect(
      buildUrl('/foo', {
        date: date,
      }),
    ).toEqual('/foo?date=' + encodeURIComponent(date.toISOString()));
  });

  it('should support array params', () => {
    expect(
      buildUrl('/foo', {
        foo: ['bar', 'baz'],
      }),
    ).toEqual('/foo?foo%5B0%5D=bar&foo%5B1%5D=baz');
  });

  it('should support special char params', () => {
    expect(
      buildUrl('/foo', {
        foo: ':$, ',
      }),
    ).toEqual('/foo?foo=%3A%24%2C%20');
  });

  it('should support existing params', () => {
    expect(
      buildUrl('/foo?foo=bar', {
        bar: 'baz',
      }),
    ).toEqual('/foo?foo=bar&bar=baz');
  });

  it('should support "length" parameter', () => {
    expect(
      buildUrl('/foo', {
        query: 'bar',
        start: 0,
        length: 5,
      }),
    ).toEqual('/foo?query=bar&start=0&length=5');
  });

  it('should correct discard url hash mark', () => {
    expect(
      buildUrl('/foo?foo=bar#hash', {
        query: 'baz',
      }),
    ).toEqual('/foo?foo=bar&query=baz');
  });

  it('should support URLSearchParams', () => {
    expect(buildUrl('/foo', new URLSearchParams('bar=baz'))).toEqual('/foo?bar=baz');
  });
});
