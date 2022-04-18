/**
 * @func randomIP
 * @param {number} type - 0: ipv4, 1: ipv6
 * @returns {string} - random ip address
 * @desc 生成一个随机的IP地址，可以是IPv4或者IPv6
 */

const randomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const randomIP = (type: number = 0): string => {
    const ipv4 = randomInt(0, 255) + '.' + randomInt(0, 255) + '.' + randomInt(0, 255) + '.' + randomInt(0, 255);
    const ipv6 =
      randomInt(0, 65535) +
      ':' +
      randomInt(0, 65535) +
      ':' +
      randomInt(0, 65535) +
      ':' +
      randomInt(0, 65535) +
      ':' +
      randomInt(0, 65535) +
      ':' +
      randomInt(0, 65535) +
      ':' +
      randomInt(0, 65535) +
      ':' +
      randomInt(0, 65535);
    return type ? ipv6 : ipv4;
};
