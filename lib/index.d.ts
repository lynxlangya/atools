declare const isString: (obj: any) => boolean;

declare const getTypeOf: (param: unknown) => string;

declare const wait: (milliseconds: number) => Promise<unknown>;

export { getTypeOf, isString, wait };
