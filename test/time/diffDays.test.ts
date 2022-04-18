import { diffDays } from '../../_time/diffDays';

test('diffDays', () => {
  expect(diffDays(new Date(2020, 0, 2), new Date(2020, 0, 1))).toBe(1);
  expect(diffDays(new Date('2022-01-01 12:12:12'), new Date('2022-01-02 10:12:10'))).toBe(0);
});
