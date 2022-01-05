import {
    ThrowError,
    TryCatch,
    TryCatchAsync,
    TryCatchSync,
} from './exception.d'
import {ifDefault} from './condition';

/**
 * Throw Error Synchronous
 */
const throwError: ThrowError = x => {
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
    ? res.catch(ifDefault(err => t?.(err, x), throwError))
    : res
)(tryCatchSync(f, t)(x))