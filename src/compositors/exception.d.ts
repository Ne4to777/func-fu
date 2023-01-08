export type ThrowErrorSync = <X, R>(Constructor: (x: X) => R) => (x: X) => never
export type ThrowError = <X, R>(Constructor: (x: X) => R) => (x: X | Promise<X>) => Promise<never>

export type TryCatchSync = {
    <X, R>(f: (x: X) => R): (x: X) => R | X
    <X, R, H>(f: (x: X) => R, t: (err: Error, x: X) => H): (x: X) => R | H
}

export type TryCatch = {
    <X, R>(f: (x: Awaited<X>) => R): (x: X) => Promise<Awaited<R> | Awaited<X>>
    <X, R, H>(f: (x: Awaited<X>) => R, t: (err: Error, x: Awaited<X>) => H): (x: X) => Promise<Awaited<R> | Awaited<H>>
}
