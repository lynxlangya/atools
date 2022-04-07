import { isEmail } from '../../_regex/isEmail';

test('isEmail', () => {
  expect(isEmail('wangdaoo@yeah.net')).toBe(true);
  expect(isEmail('#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})')).toBe(false);
  expect(isEmail('Hello')).toBe(false);
});
