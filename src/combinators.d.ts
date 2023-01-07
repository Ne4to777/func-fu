export type IType = <X>(x: X) => X
export type KType = <X>(x: X) => <Y>(y: Y) => X
export type SType = <X, Y, R>(f: (x: X) => (y: Y) => R) => (g: (x: X) => Y) => (x: X) => R
export type BType = <Y, R>(f: (y: Y) => R) => <X>(g: (x: X) => Y) => (x: X) => R
export type AType = <X, R>(f: (x: X) => R) => (x: X) => R
export type TType = <X>(x: X) => <R>(f: (y: X) => R) => R
export type WType = <X, R>(f: (x: X) => (y: X) => R) => (x: X) => R
export type CType = <X, Y, R>(f: (x: X) => (y: Y) => R) => (y: Y) => (x: X) => R
export type PType = <RG, R>(f: (x: RG) => (y: RG) => R) => <X, Y>(g: (x: X | Y) => RG) => (x: X) => (y: Y) => R
export type UType = (f: any) => any
export type YType = (f: any) => any