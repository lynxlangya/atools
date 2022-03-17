/**
 * @func is
 * @param {any} value
 * @param {string} type
 */
import { getTypeOf } from './getTypeOf';

export const is = (value: any, type: string): boolean => {
  return getTypeOf(value) === type.toLowerCase();
}
