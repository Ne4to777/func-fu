type UnPromise<T> = T extends Promise<infer K> ? K : T

export type ThrowErrorSync = <X, R>(Constructor: (x: X) => R) => (x: X) => never
export type ThrowError = <X, R>(Constructor: (x: X) => R) => (x: X | Promise<X>) => Promise<never>

export type TryCatchSync = {
    <X, R>(f: (x: X) => R): (x: X) => R | X
    <X, R, H>(f: (x: X) => R, t: (err: Error, x: X) => H): (x: X) => R | H
}

export type TryCatch = {
    <X, R>(f: (x: UnPromise<X>) => R): (x: X) => Promise<UnPromise<R> | UnPromise<X>>
    <X, R, H>(f: (x: UnPromise<X>) => R, t: (err: Error, x: UnPromise<X>) => H): (x: X) => Promise<UnPromise<R> | UnPromise<H>>
}
