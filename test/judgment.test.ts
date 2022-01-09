/** 类型判断 */
import { getTypeOf } from '../basic/getTypeOf';

test('getTypeOf', () => {
  expect(getTypeOf('')).toBe('String');
  expect(getTypeOf(0)).toBe('Number');
  expect(getTypeOf(true)).toBe('Boolean');
  expect(getTypeOf(Symbol())).toBe('Symbol');
  expect(getTypeOf(null)).toBe('Null');
  expect(getTypeOf(undefined)).toBe('Undefined');
  expect(getTypeOf({})).toBe('Object');
  expect(getTypeOf([])).toBe('Array');
  expect(getTypeOf(/\w+/)).toBe('RegExp');
  expect(getTypeOf(new Date())).toBe('Date');
  expect(getTypeOf(new Error())).toBe('Error');
  expect(getTypeOf(() => {})).toBe('Function');
  expect(getTypeOf(async () => {})).toBe('AsyncFunction');
  expect(getTypeOf(document)).toBe('HTMLDocument');
});
