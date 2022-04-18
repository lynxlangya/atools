import { sum } from '../../_calc/sum';

test('sum', () => {
    expect(sum([1, 2, 3, 4, 5])).toBe(15);
});