import { getTypeOf } from './getTypeOf'
/** 
 * 是否为对象
 * @returns {boolean}
 */
 export const isObject = (obj: any): boolean => getTypeOf(obj) === 'Object';
