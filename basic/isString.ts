import { getTypeOf } from './getTypeOf'
/** 
 * 是否为字符串
 */
 export const isString = (obj: any): obj is string => getTypeOf(obj) === 'String';
