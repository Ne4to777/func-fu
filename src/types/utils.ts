export type AnyToAny = (...xs: any[]) => any;

export type Promisify<X> = X extends Promise<any> ? X : Promise<X>
export type PromisifyMixed<X> = X extends Promise<any> ? X : X | Promise<X>
export type UnPromisify<X> = X extends Promise<infer XX> ? XX : X
export type UnPromisifyR<XS> = XS extends [infer X, ...infer T] ? [UnPromisify<X>, ...UnPromisifyR<T>] : XS
export type PromisifyR<XS> = XS extends [infer X, ...infer T] ? [Promisify<X>, ...PromisifyR<T>] : XS
export type PromisifyMixedR<XS> = XS extends [infer X, ...infer T] ? [PromisifyMixed<X>, ...PromisifyMixedR<T>] : XS
export type PromisifyF<F extends AnyToAny> = (...xs: PromisifyR<Parameters<F>>) => Promise<UnPromisify<ReturnType<F>>>
export type PromisifyMixedF<F extends AnyToAny> = (...xs: PromisifyMixedR<Parameters<F>>) => Promise<UnPromisify<ReturnType<F>>>

export type Tail<FS extends AnyToAny[]> = FS extends [any, ...infer R] ? R : never
export type Last<FS extends AnyToAny[]> = FS extends [...any[], infer R extends AnyToAny] ? R : never