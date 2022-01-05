export type ThrowErrorSync = <X extends Error>(x?: X) => never
export type ThrowErrorAsync = <X extends Promise<Error>>(x?: X) => Promise<never>
export type ThrowError = <X extends Error | Promise<Error>>(x?: X) => never | Promise<never>

export type TryCatchSync = <X, F, T>(f: (x?: X) => F, t?: (err: any, x?: X) => T) => (x?: X) => F | T | never
export type TryCatchAsync = <X, F, T>(f: (x?: X) => F, t?: (err: any, x?: X) => T) => (x?: X) => Promise<F | T | never>
export type TryCatch = <X, F, T>(
    f: (x?: X) => F, t?: (err: any, x?: X) => T) => (x?: X
) => F | T | never | Promise<F | T | never>

