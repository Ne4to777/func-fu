import {AType, BType, CType, IType, KType, PType, SType, TType, UType, WType, YType} from './combinators.d'

export const I: IType = x => x // identity
export const K: KType = x => () => x // constant (cancelator)
export const S: SType = f => g => (...xs) => f(...xs)(g(...xs)) // substitution (connector)
export const B: BType = f => g => (...xs) => f(g(...xs)) // compose (compositor)
export const A: AType = f => (...xs) => f(...xs) // apply (applicator)
export const T: TType = (...xs) => f => f(...xs) // thrush
export const W: WType = f => (...xs) => f(...xs)(...xs) // duplication (duplicator)
export const C: CType = f => y => (...xs) => f(...xs)(y) // flip (permutator)
export const P: PType = f => g => (...xs) => (...ys) => f(g(...xs))(g(...ys)) // psi
export const U: UType = f => f(f) // UofU
export const Y: YType = f => U((g: any) => f((...xs: any) => U(g)(...xs))) // fix-point

// export const L = f => g => k => x => f(g(x))(k(x)) // parallelize


