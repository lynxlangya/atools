declare const getTypeOf: (param: unknown) => string;

declare const isString: (obj: any) => boolean;

declare const isObject: (obj: any) => boolean;

declare const wait: (milliseconds: number) => Promise<unknown>;

export { getTypeOf, isObject, isString, wait };
