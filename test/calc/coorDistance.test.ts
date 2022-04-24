import { coorDistance } from '../../_calc/coorDistance';

test('coorDistance', () => {
  const p1 = { x: 0, y: 0 };
  const p2 = { x: 1, y: 1 };
  expect(coorDistance(p1, p2)).toBe(Math.sqrt(2));

  const p3 = { x: 0, y: 10 };
  expect(coorDistance(p1, p3)).toBe(10);
});
