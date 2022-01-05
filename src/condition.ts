import {
    IfDefault,
    IfElse,
    IfElseAsync,
    IfElseSync,
} from './condition.d'

export const ifElseSync: IfElseSync = (p, onTrue, onFalse) => x => p(x) ? onTrue(x) : onFalse?.(x)
export const ifElseAsync: IfElseAsync = (p, onTrue, onFalse) => async x => await p(x) ? onTrue(x) : onFalse?.(x)
export const ifElse: IfElse = (p, onTrue, onFalse) => x => {
    const res = p(x)
    if (res instanceof Promise) return res.then(y => y ? onTrue(x) : onFalse?.(x))
    return res ? onTrue(x) : onFalse?.(x)
}

export const ifDefaultSync: IfDefault = (f, d) => x => f(x) ?? d(x)
export const ifDefaultAsync: IfDefault = (f, d) => async x => await f(x) ?? d(x)
export const ifDefault: IfDefault = (f, d) => x => (res => res instanceof Promise
    ? res.then(y => y ?? d(x))
    : res ?? d(x)
)(f(x))