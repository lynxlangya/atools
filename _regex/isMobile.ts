/**
 * @param {string} str
 * @returns {boolean}
 * @description Returns true if the string is a mobile phone number.
 */
export const isMobile = (str: string): boolean => {
  const reg = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/;
  return reg.test(str);
}
