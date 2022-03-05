/**
 * wait
 * @param {number} milliseconds
 */
export const wait = async (milliseconds: number) => new Promise(resolve => setTimeout(resolve, milliseconds));
