import { getTypeOf } from './getTypeOf';
/**
 * 是否为Symbol
 * @returns {boolean}
 */
export const isSymbol = (v: any): boolean => getTypeOf(v) === 'Symbol';
