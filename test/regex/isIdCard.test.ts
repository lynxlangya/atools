import { isIdCard } from '../../_regex/isIdCard';

test('isIdCard', () => {
  expect(isIdCard('420102199003027001')).toBe(true);
  expect(isIdCard('42010219900302700')).toBe(false);
  expect(isIdCard('420102199003027')).toBe(false);
  expect(isIdCard('42010219900302')).toBe(false);
  expect(isIdCard('42010219900302700X')).toBe(true);
  expect(isIdCard('42010219900302700x')).toBe(true);
  expect(isIdCard('370202541216162', 1)).toBe(true);
  expect(isIdCard('42010219900302700x', 2)).toBe(true);
});
