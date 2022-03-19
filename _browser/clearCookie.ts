import { isBrowser } from './isBrowser';
import { getCookie } from './getCookie';
/** 
 * Clean Cookies
 * (/^ +/, '') 清除头部空格
 * match(/=(\S*)/)[1] 提取cookie值
 * HttpOnly 不允许脚本读取，客户端无法操作
 */

export const clearCookie = () => {
  // Environmental Test
  if (!isBrowser) throw new Error("Non-browser environment, unavailable 'cleanCookies'");
  
  if (!document.cookie) throw new Error('No Cookie Found');

  for (let i = 0; i < getCookie().length; i++) {
    const element = getCookie()[i];
    document.cookie = element.replace(/^ +/, '').replace(element.match(/=(\S*)/)[1], ``);
  }
}
