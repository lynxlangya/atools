import { getUrlParams } from '../../_browser/getUrlParams';

test('getUrlParams', () => {
    expect(getUrlParams('https://www.baidu.com/s?wd=123')).toEqual({ wd: '123' });
    expect(getUrlParams('https://www.baidu.com/s?wd=123&ie=utf-8')).toEqual({ wd: '123', ie: 'utf-8' });
    expect(getUrlParams('https://www.baidu.com/s?')).toEqual({});
    expect(getUrlParams('https://www.baidu.com/s?wd=123&wd=456')).toEqual({ wd: ['123', '456'] });
});
