import { isBrowser } from './isBrowser';

/**
 * 获取cookie
 * new RegExp(`(^| )${name}=([^;]*)(;|$)`) 匹配 name=value 值
 * @param name[可选] cookie名称
 * @returns {Array | string | undefined}
 */

export const getCookie = (name?: string): Array<string> | string | undefined => {
  // Environmental Test
  if (!isBrowser) throw new Error("Non-browser environment, unavailable 'getCookie'");

  if (!document.cookie) throw new Error('No Cookie Found');

  if (name) {
    const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
    const arr = document.cookie.match(reg);
    return arr ? arr[2] : undefined;
  }

  // Get Cookies && String => Array
  return document.cookie.split(';');
};
