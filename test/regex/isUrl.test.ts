import { isUrl } from '../../_regex/isUrl';

test('isUrl', () => {
  expect(isUrl('http://www.baidu.com')).toBe(true);
  expect(isUrl('https://www.baidu.com')).toBe(true);
  expect(isUrl('www.baidu.com')).toBe(true);
  expect(isUrl('baidu.com')).toBe(true);
  expect(isUrl('baidu.com/')).toBe(true);
  expect(isUrl('baidu.com/index.html')).toBe(true);
  expect(isUrl('baidu.com/index.html?a=1&b=2')).toBe(true);
  expect(isUrl('baidu.com/index.html?a=1&b=2#hash')).toBe(true);
  expect(isUrl('baidu')).toBe(false);
});
