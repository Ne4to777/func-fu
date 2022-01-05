import {
    IfDefault,
    IfElse,
    IfElseAsync,
    IfElseSync,
} from './condition.d'

/**
 * If/Then/Else Synchronous
 */
export const ifElseSync: IfElseSync = (p, onTrue, onFalse) => x => p(x) ? onTrue(x) : onFalse?.(x)
/**
 * If/Then/Else Asynchronous
 */
export const ifElseAsync: IfElseAsync = (p, onTrue, onFalse) => async x => await p(x) ? onTrue(x) : onFalse?.(x)
/**
 * If/Then/Else Autodetect
 */
export const ifElse: IfElse = (p, onTrue, onFalse) => x => {
    const res = p(x)
    if (res instanceof Promise) return res.then(y => y ? onTrue(x) : onFalse?.(x))
    return res ? onTrue(x) : onFalse?.(x)
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