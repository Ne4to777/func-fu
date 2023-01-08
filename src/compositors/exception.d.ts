export type ThrowErrorSync = <X, R>(Constructor: (x: X) => R) => (x: X) => never
export type ThrowError = <X, R>(Constructor: (x: X) => R) => (x: X | Promise<X>) => Promise<never>

export type TryCatchSync = {
    <X, Y, Z, R>(f: (x: X, y?: Y, z?: Z) => R): (x: X, y?: Y, z?: Z) => R | X
    <X, Y, Z, R, H>(f: (x: X, y?: Y, z?: Z) => R, t: (err: Error, x: X, y?: Y, z?: Z) => H): (x: X, y?: Y, z?: Z) => R | H
}

export type TryCatch = {
    <X, Y, Z, R>(f: (x: Awaited<X>, y?: Awaited<Y>, z?: Awaited<Z>) => R): (x: Awaited<X>, y?: Awaited<Y>, z?: Awaited<Z>) => Promise<Awaited<R> | Awaited<X>>
    <X, Y, Z, R, H>(f: (x: Awaited<X>, y?: Awaited<Y>, z?: Awaited<Z>) => R, t: (err: Error, x: Awaited<X>, y?: Awaited<Y>, z?: Awaited<Z>) => H): (x: Awaited<X>, y?: Awaited<Y>, z?: Awaited<Z>) => Promise<Awaited<R> | Awaited<H>>
}
