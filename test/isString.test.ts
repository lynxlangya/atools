import { isString } from '../index';

test('is String', () => {
  expect(isString('Hello')).toBe(true);
  expect(isString(123)).toBe(false);
});
