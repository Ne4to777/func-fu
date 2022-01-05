import {
    ThrowErrorSync,
    ThrowErrorAsync,
    ThrowError,
    TryCatch,
    TryCatchAsync,
    TryCatchSync,
} from './exception.d'
import {ifElse} from './condition';

/**
 * Throw Error Synchronous
 */
export const throwErrorSync: ThrowErrorSync = x => {
    throw x
}
/**
 * Throw Error Asynchronous
 */
export const throwErrorAsync: ThrowErrorAsync = async x => {
    throw await x
}
/**
 * Throw Error Autodetect
 */
export const throwError: ThrowError = x => {
    if (x instanceof Promise) return x.then(y => {
        throw y
    })
    throw x
}
/**
 * Try/Catch Synchronous
 */
export const tryCatchSync: TryCatchSync = (f, t) => x => {
    try {
        return f(x)
    } catch (err) {
        if (t) return t(err, x)
        throw err
    }
}
/**
 * Try/Catch Asynchronous
 */
export const tryCatchAsync: TryCatchAsync = (f, t) => async x => {
    try {
        return await f(x)
    } catch (err) {
        if (t) return t(err, x)
        throw err
    }
}
/**
 * Try/Catch Autodetect
 */
export const tryCatch: TryCatch = (f, t) => x => (res => res instanceof Promise
    ? res.catch(ifElse(() => Boolean(t), err => t?.(err, x), throwError))
    : res
)(tryCatchSync(f, t)(x))