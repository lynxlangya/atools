import { getTypeOf } from './getTypeOf';
/**
 * 是否为function
 * @returns {boolean}
 */
export const isFunction = (v: any): boolean => getTypeOf(v) === 'Function';
