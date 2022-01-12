import { getTypeOf } from './getTypeOf';
/**
 * 是否为对象
 * @returns {boolean}
 */
export const isObject = (v: any): boolean => getTypeOf(v) === 'Object';
