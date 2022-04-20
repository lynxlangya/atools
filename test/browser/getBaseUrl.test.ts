import { getBaseUrl } from '../../_browser/getBaseUrl';

test('getBaseUrl', () => {
    expect(getBaseUrl('https://www.baidu.com/s?wd=123')).toBe('https://www.baidu.com/s');
    expect(getBaseUrl('https://www.baidu.com/s?wd=123&ie=utf-8')).toBe('https://www.baidu.com/s');
    expect(getBaseUrl('https://www.baidu.com/s?')).toBe('https://www.baidu.com/s');
});