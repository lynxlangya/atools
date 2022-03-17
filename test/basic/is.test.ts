import { is } from '../../basic/is';

test('is', () => {
  expect(is(1, 'NUMBER')).toBe(true);
  expect(is('1', 'number')).toBe(false);
  expect(is(false, 'boolean')).toBe(true);
  expect(is(null, 'null')).toBe(true);
  expect(is(undefined, 'undefined')).toBe(true);
  expect(is({}, 'object')).toBe(true);
  expect(is(/a/, 'regexp')).toBe(true);
  expect(is(new Date(), 'date')).toBe(true);
  expect(is(new Error(), 'error')).toBe(true);
  expect(is(() => {}, 'function')).toBe(true);
});
