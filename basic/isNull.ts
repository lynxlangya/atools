import { getTypeOf } from './getTypeOf';
/**
 * 是否为null
 * @returns {boolean}
 */
export const isNull = (v: any): boolean => getTypeOf(v) === 'Null';
