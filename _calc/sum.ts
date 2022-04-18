/**
 * @func sum
 * @desc 📝 计算数组的和
 * @param {number[]} numbers
 * @returns {number}
 */
export const sum = (numbers: number[]): number => {
   return numbers.reduce((acc, curr) => acc + curr, 0);
};
