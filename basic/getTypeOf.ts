/**
 * @param {unknown} param
 * @returns {string}
 * String, Number, Boolean, Symbol, Null, Undefined, Object
 * Array, RegExp, Date, Error, Function, AsyncFunction, HTMLDocument
 */
export const getTypeOf = (param: unknown): string => {
  const type = Object.prototype.toString.call(param).slice(8, -1);
  return type.toLowerCase();
};
