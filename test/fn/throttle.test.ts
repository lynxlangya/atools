import { throttle } from '../../_basic/throttle';

test('throttle', () => {
  let count = 0;
  const fn = () => count++;
  const throttled = throttle(fn);
  throttled();
  throttled();
  throttled();
  throttled();
});
