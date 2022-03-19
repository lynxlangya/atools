/**
 * @func average
 * @desc 📝 Calculate the average of a list of numbers
 * @param {number[]} numbers
 * @returns {number}
 * @example average([1, 2, 3, 4, 5]) // 3
 */
export const average = (numbers: number[]): number => {
  return numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;
};
