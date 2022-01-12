import { getTypeOf } from './getTypeOf';
/**
 * 是否为数组
 * @returns {boolean}
 */
export const isArray = (v: any): boolean => getTypeOf(v) === 'Array';
