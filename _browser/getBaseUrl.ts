/**
 * @func getBaseUrl
 * @param {string} url
 * @returns {string}
 * @desc 📝 获取 ? 前面的url
 */
export const getBaseUrl = (url: string): string => {
    return url.includes('?') ? url.split('?')[0] : url;
};
