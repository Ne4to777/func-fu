import {B, S, Y} from '../combinators';
import type {
    Autocompose,
    AutocomposeY,
    Curry,
    Parallelize,
    Uncurry
} from '../types/common'

/**
 * Curry
 */
export const curry = Y((fR => (...acc) => n => f => (...xs) => n > 1
    ? fR(...acc, ...xs)(n - 1)(f)
    : f(...acc, ...xs)
) as Curry)()
/**
 * Uncurry
 */
export const uncurry = Y((fR => n => f => (...[x, ...xs]) => n > 1
    ? fR(n - 1)(f(x))(...xs)
    : f(x)
) as Uncurry)
/**
 * Parallelize
 */
export const parallelize = Y((fR => acc => f => n => n > 1
    ? fR(B(f)(acc))(B(f))(n - 1)
    : acc
) as Parallelize)(B)(B(S as any))
/**
 * Compose function the n times
 */
export const autocompose: Autocompose = f => Y((fR => n => n > 1
    ? B(f)(fR(n - 1))
    : f
) as AutocomposeY)

