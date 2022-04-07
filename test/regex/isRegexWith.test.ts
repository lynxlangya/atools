import { isRegexWith } from '../../_regex/isRegexWith';

test('isRegexWith', () => {
  expect(isRegexWith(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'wangdaoo@yeah.net')).toBe(true);
  expect(isRegexWith(/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/, 'rgba(0,0,0,1)')).toBe(false);
});
