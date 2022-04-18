/**
 * @func average
 * @desc 📝 计算数组的平均值
 * @param {number[]} numbers
 * @returns {number}
 * @example average([1, 2, 3, 4, 5]) // 3
 */
export const average = (numbers: number[]): number => {
  return numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;
};
