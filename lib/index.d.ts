declare const getTypeOf: (param: unknown) => string;

declare const is: (value: any, type: string) => boolean;

declare const wait: (milliseconds: number) => Promise<unknown>;

declare const copyToClipboard: (text: string) => Promise<void>;

declare const getFromClipboard: () => Promise<string>;

declare const throttle: (fn: Function, ms?: number) => Function;

declare const isBrowser: boolean;

declare const getCookie: (name?: string) => Array<string> | string | undefined;

declare const clearCookie: () => void;

declare const removeHTMLTag: (str: string) => string;

declare const average: (numbers: number[]) => number;

export { average, clearCookie, copyToClipboard, getCookie, getFromClipboard, getTypeOf, is, isBrowser, removeHTMLTag, throttle, wait };
