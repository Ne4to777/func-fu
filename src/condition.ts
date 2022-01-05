import {
    IfDefault,
    IfElse,
    IfElseAsync,
    IfElseSync,
} from './condition.d'

/**
 * If/Then/Else Synchronous
 */
export const ifElseSync: IfElseSync = (p, onTrue, onFalse) => x => {
    if (p(x)) return onTrue(x)
    return onFalse ? onFalse(x) : x
}
/**
 * If/Then/Else Asynchronous
 */
export const ifElseAsync: IfElseAsync = (p, onTrue, onFalse) => async x => {
    if (await p(x)) return onTrue(x)
    return onFalse ? onFalse(x) : x
}
/**
 * If/Then/Else Autodetect
 */
export const ifElse: IfElse = (p, onTrue, onFalse) => x => {
    const res = p(x)
    if (res instanceof Promise) return res.then(y => {
        if (y) return onTrue(x)
        return onFalse ? onFalse(x) : x
    })
    if (res) return onTrue(x)
    return onFalse ? onFalse(x) : x
}
/**
 * If Or Default Synchronous
 */
export const ifDefaultSync: IfDefault = (f, d) => x => f(x) ?? d(x)
/**
 * If Or Default Asynchronous
 */
export const ifDefaultAsync: IfDefault = (f, d) => async x => await f(x) ?? d(x)
/**
 * If Or Default Autodetect
 */
export const ifDefault: IfDefault = (f, d) => x => (res => res instanceof Promise
    ? res.then(y => y ?? d(x))
    : res ?? d(x)
)(f(x))