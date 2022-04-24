/**
 * @version v0.0.31
 * @func coorDistance
 * @param {object} coor1 - 坐标1
 * @param {object} coor2 - 坐标2
 * @returns {number} - 距离
 * @desc 📝 计算两个坐标点之间的距离
 */
interface Point {
    x: number;
    y: number;
}

export const coorDistance = (p1: Point, p2: Point): number => {
    const { x: x1, y: y1 } = p1;
    const { x: x2, y: y2 } = p2;
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};
