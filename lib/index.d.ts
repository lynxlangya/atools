declare const getTypeOf: (param: unknown) => string;

declare const isArray: (v: any) => boolean;

declare const isAsyncFunction: (v: any) => boolean;

declare const isBoolean: (v: any) => boolean;

declare const isDate: (v: any) => boolean;

declare const isError: (v: any) => boolean;

declare const isFunction: (v: any) => boolean;

declare const isHTMLDocument: (v: any) => boolean;

declare const isNull: (v: any) => boolean;

declare const isNumber: (v: any) => boolean;

declare const isObject: (v: any) => boolean;

declare const isRegExp: (v: any) => boolean;

declare const isString: (v: any) => boolean;

declare const isSymbol: (v: any) => boolean;

declare const isUndefined: (v: any) => boolean;

declare const wait: (milliseconds: number) => Promise<unknown>;

declare const copyToClipboard: (text: string) => Promise<void>;

declare const isBrowser: boolean;

declare const getCookie: (name?: string) => Array<string> | string | undefined;

declare const clearCookie: () => void;

declare const removeHTMLTag: (str: string) => string;

export { clearCookie, copyToClipboard, getCookie, getTypeOf, isArray, isAsyncFunction, isBoolean, isBrowser, isDate, isError, isFunction, isHTMLDocument, isNull, isNumber, isObject, isRegExp, isString, isSymbol, isUndefined, removeHTMLTag, wait };
