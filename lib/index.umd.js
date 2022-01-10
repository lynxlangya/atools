(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.atools = global.atools || {}, global.atools.js = {})));
})(this, (function (exports) { 'use strict';

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

    exports.getTypeOf = getTypeOf;
    exports.isString = isString;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.umd.js.map
