/**
 * @param {unknown} param
 * @returns {string}
 * String, Number, Boolean, Symbol, Null, Undefined, Object
 * Array, RegExp, Date, Error, Function, AsyncFunction, HTMLDocument
 */
export const getTypeOf = (param: unknown): string => {
  return Object.prototype.toString.call(param).match(/\[object (.*)\]/)[1]
}
