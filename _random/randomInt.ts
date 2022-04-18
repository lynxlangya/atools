/**
 * @func randomInt
 * @param {number} min - min number
 * @param {number} max - max number
 * @returns {number} - random number
 */
export const randomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}