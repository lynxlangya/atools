/**
 * @author 🌈MARS <wangdaoo@yeah.net>
 * @desc 📝类型断言
 * @copyright 🤝In me the tiger sniffs the rose.
 */

/**
 * @returns {string}
 * String, Number, Boolean, Symbol, Null, Undefined, Object
 * Array, RegExp, Date, Error, Function, AsyncFunction, HTMLDocument
 */
export const getTypeOf = (obj: any): string => Object.prototype.toString.call(obj).match(/\[object (.*)\]/)[1];

/** 
 * 是否为字符串
 */
export const isString = (obj: any): obj is string => getTypeOf(obj) === 'String';
