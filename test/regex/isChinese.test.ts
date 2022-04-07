import { isChinese } from '../../_regex/isChinese';

test('isChinese', () => {
  expect(isChinese('中文')).toBe(true);
  expect(isChinese('Hello')).toBe(false);
});
