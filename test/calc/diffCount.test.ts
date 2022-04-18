import { diffCount } from '../../_calc/diffCount';

test('diffCount', () => {
  expect(diffCount(1, 2)).toBe(1);
  expect(diffCount(2, 1)).toBe(1);
  expect(diffCount(1, 1)).toBe(0);
  expect(diffCount(2, 2)).toBe(0);
});
