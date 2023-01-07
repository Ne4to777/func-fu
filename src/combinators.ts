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
export const S: SType = f => g => x => f(x)(g(x))
/**
 * Compose (Compositor)
 */
export const B: BType = f => g => x => f(g(x))
/**
 * Apply (Applicator)
 */
export const A: AType = f => x => f(x)
/**
 * Thrush
 */
export const T: TType = x => f => f(x)
/**
 * Duplication (Duplicator)
 */
export const W: WType = f => x => f(x)(x)
/**
 * Flip (Permutator)
 */
export const C: CType = f => y => x => f(x)(y)
/**
 * Psi
 */
export const P: PType = f => g => x => y => f(g(x))(g(y))
/**
 * UofU
 */
export const U: UType = f => f(f)
/**
 * Fixed-point
 */
export const Y: YType = f => U((g: any) => f((x: any) => U(g)(x)))
