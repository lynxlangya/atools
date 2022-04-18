/**
 * @func diffCount
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @desc 计算两个数的差值
 */
export const diffCount = (a: number, b: number): number => a > b ? a - b : b - a