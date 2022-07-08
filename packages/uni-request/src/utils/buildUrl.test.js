import URLSearchParams from '@ungap/url-search-params';
import { describe, it, expect } from 'vitest';
import { buildUrl } from './buildUrl';

describe('helpers::buildUrl', function () {
  it('should support null params', function () {
    expect(buildUrl('/foo')).toEqual('/foo');
  });

  it('should support params', function () {
    console.log(
      buildUrl('/foo', {
        foo: 'bar',
      }),
    );

    expect(
      buildUrl('/foo', {
        foo: 'bar',
      }),
    ).toEqual('/foo?foo=bar');
  });

  it('should support object params', function () {
    expect(
      buildUrl('/foo', {
        foo: {
          bar: 'baz',
        },
      }),
    ).toEqual('/foo?foo%5Bbar%5D=baz');
  });

  it('should support date params', function () {
    const date = new Date();

    expect(
      buildUrl('/foo', {
        date: date,
      }),
    ).toEqual('/foo?date=' + encodeURIComponent(date.toISOString()));
  });

  it('should support array params', function () {
    expect(
      buildUrl('/foo', {
        foo: ['bar', 'baz'],
      }),
    ).toEqual('/foo?foo%5B0%5D=bar&foo%5B1%5D=baz');
  });

  it('should support special char params', function () {
    expect(
      buildUrl('/foo', {
        foo: ':$, ',
      }),
    ).toEqual('/foo?foo=%3A%24%2C%20');
  });

  it('should support existing params', function () {
    expect(
      buildUrl('/foo?foo=bar', {
        bar: 'baz',
      }),
    ).toEqual('/foo?foo=bar&bar=baz');
  });

  it('should support "length" parameter', function () {
    expect(
      buildUrl('/foo', {
        query: 'bar',
        start: 0,
        length: 5,
      }),
    ).toEqual('/foo?query=bar&start=0&length=5');
  });

  it('should correct discard url hash mark', function () {
    expect(
      buildUrl('/foo?foo=bar#hash', {
        query: 'baz',
      }),
    ).toEqual('/foo?foo=bar&query=baz');
  });

  it('should support URLSearchParams', function () {
    expect(buildUrl('/foo', new URLSearchParams('bar=baz'))).toEqual('/foo?bar=baz');
  });
});
