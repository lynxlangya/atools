import { formatSeconds } from '../../_time/formatSeconds';

test('formatSeconds', () => {
    expect(formatSeconds(0)).toBe('00:00');
    expect(formatSeconds(1)).toBe('00:01');
    expect(formatSeconds(59)).toBe('00:59');
    expect(formatSeconds(61)).toBe('01:01');
    expect(formatSeconds(3599)).toBe('59:59');
    expect(formatSeconds(3600)).toBe('60:00');
    expect(formatSeconds(3601)).toBe('60:01');
    expect(formatSeconds(3599, 'mm:ss')).toBe('59:59');
    expect(formatSeconds(3600, 'mm:ss')).toBe('60:00');
    expect(formatSeconds(3601, 'mm:ss')).toBe('60:01');
    expect(formatSeconds(3599, 'hh:mm:ss')).toBe('00:59:59');
    expect(formatSeconds(3600, 'hh:mm:ss')).toBe('01:00:00');
    expect(formatSeconds(3601, 'hh:mm:ss')).toBe('01:00:01');
});