export type ThrowError = <X extends Error>(x?: X) => never

export type TryCatchSync = <X, F, T>(f: (x?: X) => F, t?: (err: any, x?: X) => T) => (x?: X) => F | T | never
export type TryCatchAsync = <X, F, T>(f: (x?: X) => F, t?: (err: any, x?: X) => T) => (x?: X) => Promise<F | T | never>
export type TryCatch = <X, F, T>(
    f: (x?: X) => F, t?: (err: any, x?: X) => T) => (x?: X
) => F | T | never | Promise<F | T | never>

