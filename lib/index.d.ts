declare const getTypeOf: (param: unknown) => string;

declare const is: (value: any, type: string) => boolean;

declare const wait: (milliseconds: number) => Promise<unknown>;

declare const copyToClipboard: (text: string) => Promise<void>;

declare const getFromClipboard: () => Promise<string>;

declare const throttle: (fn: Function, ms?: number) => Function;

declare const removeHTMLTag: (str: string) => string;

declare const isBrowser: boolean;

declare const getCookie: (name?: string) => Array<string> | string | undefined;

declare const clearCookie: () => void;

declare const average: (numbers: number[]) => number;

declare const isMobile: (str: string) => boolean;

declare const isRegexWith: (regex: RegExp, str: string) => boolean;

declare const isEmail: (str: string) => boolean;

declare const isUrl: (str: string) => boolean;

declare const isChinese: (str: string) => boolean;

declare const isIdCard: (str: string, type?: number) => boolean;

declare function diffDays(date1: Date, date2: Date): number;

declare function formatSeconds(seconds: number, format?: string): string;

declare const randomIP: (type?: number) => string;

export { average, clearCookie, copyToClipboard, diffDays, formatSeconds, getCookie, getFromClipboard, getTypeOf, is, isBrowser, isChinese, isEmail, isIdCard, isMobile, isRegexWith, isUrl, randomIP, removeHTMLTag, throttle, wait };
