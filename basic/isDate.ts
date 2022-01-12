import { getTypeOf } from './getTypeOf';
/**
 * 是否为date
 * @returns {boolean}
 */
export const isDate = (v: any): boolean => getTypeOf(v) === 'Date';
