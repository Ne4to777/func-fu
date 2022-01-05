import {
    ThrowError,
    TryCatch,
    TryCatchAsync,
    TryCatchSync,
} from './exception.d'
import {ifDefault} from './condition';

const throwError: ThrowError = x => {
    throw x
}

export const tryCatchSync: TryCatchSync = (f, t) => x => {
    try {
        return f(x)
    } catch (err) {
        if (t) return t(err, x)
        throw err
    }
}

export const tryCatchAsync: TryCatchAsync = (f, t) => async x => {
    try {
        return await f(x)
    } catch (err) {
        if (t) return t(err, x)
        throw err
    }
}

export const tryCatch: TryCatch = (f, t) => x => (res => res instanceof Promise
    ? res.catch(ifDefault(err => t?.(err, x), throwError))
    : res
)(tryCatchSync(f, t)(x))