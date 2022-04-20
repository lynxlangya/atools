/**
 * @func getUrlParams
 * @param {string} url
 * @returns {object}
 * @desc 📝 获取 url 中所有的参数，以对象的形式返回，如果参数名重复，则以数组的形式返回
 */
export const getUrlParams = (url: string): object => {
    const params: { [key: string]: any } = {};
    const query = url.split('?')[1];
    if (!query) return params;
    const queryArr = query.split('&');
    queryArr.forEach((item: string) => {
        const [key, value] = item.split('=');
        if (params[key]) {
            if (Array.isArray(params[key])) {
                params[key].push(value);
            } else {
                params[key] = [params[key], value];
            }
        } else {
            params[key] = value;
        }
    });
    return params;
}