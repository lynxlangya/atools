/**
 * 是否是中文
 * @param str 字符串
 * @returns {boolean}
 * @description Returns true if the string is a chinese.
 */
export const isChinese = (str: string): boolean => {
  const reg = /^[\u4e00-\u9fa5]+$/;
  return reg.test(str);
};
