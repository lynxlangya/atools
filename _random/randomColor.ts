import { randomInt } from './randomInt';
/**
 * @func randomColor
 * @param {type} type - 0: rgb, 1: rgba, 2: hsl, 3: hsla, 4: hex
 * @desc 📝生成一个随机的颜色值
 */

export const randomColor = (type: number = 0): string => {
  const rgb = `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
  const rgba = `rgba(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)}, ${(
    randomInt(0, 255) / 255.0
  ).toFixed(2)})`;
  const hsl = `hsl(${randomInt(0, 360)}, ${randomInt(0, 100)}%, ${randomInt(0, 100)}%)`;
  const hsla = `hsla(${randomInt(0, 360)}, ${randomInt(0, 100)}%, ${randomInt(0, 100)}%, ${(
    randomInt(0, 100) / 255.0
  ).toFixed(1)})`;
  const hex = `#${randomInt(0, 255).toString(16)}${randomInt(0, 255).toString(16)}${randomInt(0, 255).toString(16)}`;
  return type ? (type === 1 ? rgba : type === 2 ? hsl : type === 3 ? hsla : hex) : rgb;
};
