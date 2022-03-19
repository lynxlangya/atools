import { average } from '../../_calc/average';

test('average', () => {
  expect(average([1, 2, 3, 4, 5])).toBe(3);
  expect(average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(5.5);
});
