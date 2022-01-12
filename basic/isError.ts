import { getTypeOf } from './getTypeOf';
/**
 * 是否为error
 * @returns {boolean}
 */
export const isError = (v: any): boolean => getTypeOf(v) === 'Error';
