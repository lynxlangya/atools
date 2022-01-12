import { isString, isNull, isArray } from '../index';

test('is String', () => {
  expect(isString('Hello')).toBe(true);
  expect(isString(123)).toBe(false);
  expect(isNull(null)).toBe(true);
  expect(isNull('null')).toBe(false);
  expect(isArray([1, 2, 3])).toBe(true);
  expect(isArray('test')).toBe(false);
});
