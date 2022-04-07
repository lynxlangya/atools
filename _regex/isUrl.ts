/**
 * 是否是url
 * @param {string} str
 * @returns {boolean}
 * @description Returns true if the string is a url.
 */
export const isUrl = (str: string): boolean => {
  const reg = /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/;
  return reg.test(str);
};
