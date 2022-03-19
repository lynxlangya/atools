/**
 * @func throttle
 * @desc 📝 函数节流，每隔一段时间执行一次，防止函数过于频繁调用，导致性能问题
 * @param {Function} fn
 * @param {number} [ms=1000]
 * @returns {Function}
 */
export const throttle = (fn: Function, ms: number = 1000): Function => {
  let isRunning = false;
  return (...args: any[]) => {
    if (isRunning) return;
    isRunning = true;
    setTimeout(() => {
      fn(...args);
      isRunning = false;
    }, ms);
  }
}