import { getTypeOf } from './getTypeOf'
/** 
 * 是否为字符串
 * @returns {boolean}
 */
 export const isString = (obj: any): boolean => getTypeOf(obj) === 'String';
