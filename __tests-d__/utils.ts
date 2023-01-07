export type N = number
export type S = string
export type B = boolean
export type T = true
export type F = false
export type E = never
export type PN = Promise<N>
export type PS = Promise<S>
export type PT = Promise<T>
export type PF = Promise<F>
export type PB = Promise<B>
export type PE = Promise<never>
export type P<K> = Promise<K>

export declare function identity<X>(x: X): X

export declare function identityAsync<X>(x: X): X extends Promise<infer XX> ? Promise<XX> : Promise<X>

export declare function identity2<X, Y>(x: X, y: Y): Y

export declare function identity2Async<X, Y>(x: X, y: Y): Y extends Promise<infer YY> ? Promise<YY> : Promise<Y>

export declare function num2num(x: N): N

export declare function num2numAsync(x: N): PN

export declare function num2num2(x: N, y: N): N

export declare function num2num2Async(x: N, y: N): PN

export declare function num2str(x: N): S

export declare function num2strAsync(x: N): PS

export declare function num2str2(x: N, y: N): S

export declare function num2str2C(x: N): (y: N) => S

export declare function num2str2Async(x: N, y: N): PS

export declare function num2true(x: N): T

export declare function num2trueAsync(x: N): PT

export declare function num2false(x: N): F

export declare function num2falseAsync(x: N): PF

export declare function num2never(x: N): E

export declare function num2neverAsync(x: N): PE

export declare const pn: PN
export declare const pb: PB
export declare const pt: PT
export declare const pf: PF
