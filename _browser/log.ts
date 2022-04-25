/**
 * @func log
 * @desc 📝 Logs a message to the console.
 * @example log.info('Hello world'); log.error('Oh no!');
 */

export const log = {
    info: (...args: any[]) => console.log(`%c%s`, 'color: #9E9E9E', ...args),
    error: (...args: any[]) => console.log(`%c%s`, 'color: #d81e06', ...args),
    warn: (...args: any[]) => console.log(`%c%s`, 'color: #ffc107', ...args),
    debug: (...args: any[]) => console.log(`%c%s`, 'color: #2196f3', ...args),
    success: (...args: any[]) => console.log(`%c%s`, 'color: #4caf50', ...args),
    color: (color: string) => (...args: any[]) => console.log(`%c%s`, `color: ${color}`, ...args) as any,
};
