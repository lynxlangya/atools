import { getTypeOf } from './getTypeOf';
/**
 * 是否为number类型
 * @returns {boolean}
 */
export const isNumber = (v: any): boolean => getTypeOf(v) === 'Number';
