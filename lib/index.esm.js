/**
 * @param {unknown} param
 * @returns {string}
 * String, Number, Boolean, Symbol, Null, Undefined, Object
 * Array, RegExp, Date, Error, Function, AsyncFunction, HTMLDocument
 */
var getTypeOf = function (param) {
    return Object.prototype.toString.call(param).match(/\[object (.*)\]/)[1];
};

/**
 * 是否为字符串
 * @returns {boolean}
 */
var isString = function (obj) { return getTypeOf(obj) === 'String'; };

export { getTypeOf, isString };
//# sourceMappingURL=index.esm.js.map
