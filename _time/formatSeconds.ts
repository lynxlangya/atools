import { is } from '../_basic/index'
/**
 * @func formatSeconds
 * @param {number} seconds
 * @param {string} [format]
 * @returns {string} 'hh:mm:ss' | 'mm:ss'
 * @desc 📝格式化秒数, 可以指定格式, 默认为: 'mm:ss'.
 */

export function formatSeconds(seconds: number, format?: string): string {
    if (!seconds && !is(seconds, 'number')) return '00:00';
    const hh = Math.floor(seconds / 3600);
    const mm = Math.floor((seconds % 3600) / 60);
    const ss = seconds % 60;
    switch (format) {
        case 'hh:mm:ss':
            return `${hh < 10 ? '0' + hh : hh}:${mm < 10 ? '0' + mm : mm}:${ss < 10 ? '0' + ss : ss}`;
        case 'mm:ss':
            if (hh)  return `${hh * 60 + mm}:${ss < 10 ? '0' + ss : ss}`;
            return `${mm}:${ss < 10 ? '0' + ss : ss}`;
        default:
            if (hh) return `${hh * 60 + mm}:${ss < 10 ? '0' + ss : ss}`;
            return `${mm < 10 ? '0' + mm : mm}:${ss < 10 ? '0' + ss : ss}`;
    }
}
