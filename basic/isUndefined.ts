import { getTypeOf } from './getTypeOf';
/**
 * 是否为undefined
 * @returns {boolean}
 */
export const isUndefined = (v: any): boolean => getTypeOf(v) === 'Undefined';
