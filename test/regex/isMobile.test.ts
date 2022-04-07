import { isMobile } from '../../_regex/isMobile';

test('isMobile', () => {
  expect(isMobile('13012345678')).toBe(true);
  expect(isMobile('130123456789')).toBe(false);
  expect(isMobile('1301234567')).toBe(false);
  expect(isMobile('13012345678901')).toBe(false);
  expect(isMobile('130123456789012')).toBe(false);
  expect(isMobile('1301234567890123')).toBe(false);
  expect(isMobile('17511686400')).toBe(true);
  expect(isMobile('3115008')).toBe(false);
});
