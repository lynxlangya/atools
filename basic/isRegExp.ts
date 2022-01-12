import { getTypeOf } from './getTypeOf';
/**
 * 是否为regexp
 * @returns {boolean}
 */
export const isRegExp = (v: any): boolean => getTypeOf(v) === 'RegExp';
