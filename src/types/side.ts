export type SideSync = <X, Y, Z, R>(f: (x: X, y?: Y, z?: Z) => R) => (x: X, y?: Y, z?: Z) => X

export type Side = <X, Y, Z, R>(f: (x: Awaited<X>, y?: Awaited<Y>, z?: Awaited<Z>) => R) => (x: X | Promise<X>, y?: Y | Promise<Y>, z?: Z | Promise<Z>) => Promise<X>