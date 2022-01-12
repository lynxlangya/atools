import { getTypeOf } from './getTypeOf';
/**
 * 是否为HTMLDocument
 * @returns {boolean}
 */
export const isHTMLDocument = (v: any): boolean => getTypeOf(v) === 'isHTMLDocument';
