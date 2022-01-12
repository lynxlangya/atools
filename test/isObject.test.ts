import { isObject } from '../index';

test('is isObject', () => {
  expect(isObject(new Object())).toBe(true);
  expect(isObject(true)).toBe(false);
});
