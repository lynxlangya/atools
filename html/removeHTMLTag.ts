/**
 * @func removeHTMLTag
 * @param {string} str
 * @return {string}
 * @desc 📝 去掉文本中所有标签，只保留文本
 */
export const removeHTMLTag = (str: string): string => str.replace(/<[^>]+>/g, '');
