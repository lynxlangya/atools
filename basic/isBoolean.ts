import { getTypeOf } from './getTypeOf';
/**
 * 是否为Boolean
 * @returns {boolean}
 */
export const isBoolean = (v: any): boolean => getTypeOf(v) === 'Boolean';
