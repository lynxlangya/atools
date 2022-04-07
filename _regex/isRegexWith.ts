/**
 * 自定义正则表达式
 * @param {RegExp} regex 正则表达式
 * @param {string} str 字符串
 * @returns {boolean}
 */

export const isRegexWith = (regex: RegExp, str: string): boolean => regex.test(str);
