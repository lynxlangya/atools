/**
 * @func diffDays
 * @desc 📝比较两个日期相差的天数
 * @param {Date} date1
 * @param {Date} date2
 * @returns {number}
 */
export function diffDays(date1: Date, date2: Date): number {
    const time1 = date1.getTime();
    const time2 = date2.getTime();
    const diff = Math.abs(time1 >= time2 ? time1 - time2 : time2 - time1);
    return Math.floor(diff / (1000 * 60 * 60 * 24));
}
