import {AType, BType, CType, IType, KType, PType, SType, TType, UType, WType, YType} from './combinators.d'

/**
 * Identity
 */
export const I: IType = x => x
/**
 * Constant (Cancelator)
 */
export const K: KType = x => () => x
/**
 * Substitution (Connector)
 */
export const S: SType = f => g => (...xs) => f(...xs)(g(...xs))
/**
 * Compose (Compositor)
 */
export const B: BType = f => g => (...xs) => f(g(...xs))
/**
 * Apply (Applicator)
 */
export const A: AType = f => (...xs) => f(...xs)
/**
 * Thrush
 */
export const T: TType = (...xs) => f => f(...xs)
/**
 * Duplication (Duplicator)
 */
export const W: WType = f => (...xs) => f(...xs)(...xs)
/**
 * Flip (Permutator)
 */
export const C: CType = f => y => (...xs) => f(...xs)(y)
/**
 * Psi
 */
export const P: PType = f => g => (...xs) => (...ys) => f(g(...xs))(g(...ys))
/**
 * UofU
 */
export const U: UType = f => f(f)
/**
 * Fixed-point
 */
export const Y: YType = f => U((g: any) => f((...xs: any) => U(g)(...xs)))

// export const L = f => g => k => x => f(g(x))(k(x)) // parallelize


