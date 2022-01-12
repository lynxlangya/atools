import { getTypeOf } from './getTypeOf';
/**
 * 是否为字符串
 * @returns {boolean}
 */
export const isString = (v: any): boolean => getTypeOf(v) === 'String';
