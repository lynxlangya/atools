import { getTypeOf } from './getTypeOf';
/**
 * 是否为async function
 * @returns {boolean}
 */
export const isAsyncFunction = (v: any): boolean => getTypeOf(v) === 'AsyncFunction';
