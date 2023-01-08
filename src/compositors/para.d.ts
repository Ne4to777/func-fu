type ArgFunctionSync<X, R, Y, Z> = (x: X, y: Y, z: Z) => R
type ReturnFunctionSync<X, R, Y, Z> = (x?: X, y?: Y, z?: Z) => R

type ArgFunction<X, R, Y, Z> = (x: Awaited<X>, y: Awaited<Y>, z: Awaited<Z>) => R
type ReturnFunction<X, R, Y, Z> = (x?: X | Promise<X>, y?: Y | Promise<Y>, z?: Z | Promise<Z>) => Promise<R>

export type ParaSync = {
    <A, B, Y, Z>(
        f0: ArgFunctionSync<A, B, Y, Z>,
    ): ReturnFunctionSync<A, [B], Y, Z>;
    <A, B, C, Y, Z>(
        f0: ArgFunctionSync<A, B, Y, Z>,
        f1: ArgFunctionSync<A, C, Y, Z>
    ): ReturnFunctionSync<A, [B, C], Y, Z>
    <A, B, C, D, Y, Z>(
        f0: ArgFunctionSync<A, B, Y, Z>,
        f1: ArgFunctionSync<A, C, Y, Z>,
        f2: ArgFunctionSync<A, D, Y, Z>,
    ): ReturnFunctionSync<A, [B, C, D], Y, Z>
    <A, B, C, D, E, Y, Z>(
        f0: ArgFunctionSync<A, B, Y, Z>,
        f1: ArgFunctionSync<A, C, Y, Z>,
        f2: ArgFunctionSync<A, D, Y, Z>,
        f3: ArgFunctionSync<A, E, Y, Z>,
    ): ReturnFunctionSync<A, [B, C, D, E], Y, Z>
    <A, B, C, D, E, F, Y, Z>(
        f0: ArgFunctionSync<A, B, Y, Z>,
        f1: ArgFunctionSync<A, C, Y, Z>,
        f2: ArgFunctionSync<A, D, Y, Z>,
        f3: ArgFunctionSync<A, E, Y, Z>,
        f4: ArgFunctionSync<A, F, Y, Z>,
    ): ReturnFunctionSync<A, [B, C, D, E, F], Y, Z>
    <A, B, C, D, E, F, G, Y, Z>(
        f0: ArgFunctionSync<A, B, Y, Z>,
        f1: ArgFunctionSync<A, C, Y, Z>,
        f2: ArgFunctionSync<A, D, Y, Z>,
        f3: ArgFunctionSync<A, E, Y, Z>,
        f4: ArgFunctionSync<A, F, Y, Z>,
        f5: ArgFunctionSync<A, G, Y, Z>,
    ): ReturnFunctionSync<A, [B, C, D, E, F, G], Y, Z>
    <A, B, C, D, E, F, G, H, Y, Z>(
        f0: ArgFunctionSync<A, B, Y, Z>,
        f1: ArgFunctionSync<A, C, Y, Z>,
        f2: ArgFunctionSync<A, D, Y, Z>,
        f3: ArgFunctionSync<A, E, Y, Z>,
        f4: ArgFunctionSync<A, F, Y, Z>,
        f5: ArgFunctionSync<A, G, Y, Z>,
        f6: ArgFunctionSync<A, H, Y, Z>,
    ): ReturnFunctionSync<A, [B, C, D, E, F, G, H], Y, Z>
    <A, B, C, D, E, F, G, H, I, Y, Z>(
        f0: ArgFunctionSync<A, B, Y, Z>,
        f1: ArgFunctionSync<A, C, Y, Z>,
        f2: ArgFunctionSync<A, D, Y, Z>,
        f3: ArgFunctionSync<A, E, Y, Z>,
        f4: ArgFunctionSync<A, F, Y, Z>,
        f5: ArgFunctionSync<A, G, Y, Z>,
        f6: ArgFunctionSync<A, H, Y, Z>,
        f7: ArgFunctionSync<A, I, Y, Z>,
    ): ReturnFunctionSync<A, [B, C, D, E, F, G, H, I], Y, Z>
    <A, B, C, D, E, F, G, H, I, J, Y, Z>(
        f0: ArgFunctionSync<A, B, Y, Z>,
        f1: ArgFunctionSync<A, C, Y, Z>,
        f2: ArgFunctionSync<A, D, Y, Z>,
        f3: ArgFunctionSync<A, E, Y, Z>,
        f4: ArgFunctionSync<A, F, Y, Z>,
        f5: ArgFunctionSync<A, G, Y, Z>,
        f6: ArgFunctionSync<A, H, Y, Z>,
        f7: ArgFunctionSync<A, I, Y, Z>,
        f8: ArgFunctionSync<A, J, Y, Z>,
    ): ReturnFunctionSync<A, [B, C, D, E, F, G, H, I, J], Y, Z>
    <A, B, C, D, E, F, G, H, I, J, K, Y, Z>(
        f0: ArgFunctionSync<A, B, Y, Z>,
        f1: ArgFunctionSync<A, C, Y, Z>,
        f2: ArgFunctionSync<A, D, Y, Z>,
        f3: ArgFunctionSync<A, E, Y, Z>,
        f4: ArgFunctionSync<A, F, Y, Z>,
        f5: ArgFunctionSync<A, G, Y, Z>,
        f6: ArgFunctionSync<A, H, Y, Z>,
        f7: ArgFunctionSync<A, I, Y, Z>,
        f8: ArgFunctionSync<A, J, Y, Z>,
        f9: ArgFunctionSync<A, K, Y, Z>,
    ): ReturnFunctionSync<A, [B, C, D, E, F, G, H, I, J, K], Y, Z>
    <A, Y, Z>(
        ...fs: ArgFunctionSync<A, any, Y, Z>[],
    ): ReturnFunctionSync<A, any[], Y, Z>;
}

export type Para = {
    <A, B, Y, Z>(
        f0: ArgFunction<A, B, Y, Z>,
    ): ReturnFunction<A, [Awaited<B>], Y, Z>
    <A, B, C, Y, Z>(
        f0: ArgFunction<A, B, Y, Z>,
        f1: ArgFunction<A, C, Y, Z>
    ): ReturnFunction<A, [Awaited<B>, Awaited<C>], Y, Z>
    <A, B, C, D, Y, Z>(
        f0: ArgFunction<A, B, Y, Z>,
        f1: ArgFunction<A, C, Y, Z>,
        f2: ArgFunction<A, D, Y, Z>,
    ): ReturnFunction<A, [Awaited<B>, Awaited<C>, Awaited<D>], Y, Z>
    <A, B, C, D, E, Y, Z>(
        f0: ArgFunction<A, B, Y, Z>,
        f1: ArgFunction<A, C, Y, Z>,
        f2: ArgFunction<A, D, Y, Z>,
        f3: ArgFunction<A, E, Y, Z>,
    ): ReturnFunction<A, [Awaited<B>, Awaited<C>, Awaited<D>, Awaited<E>], Y, Z>
    <A, B, C, D, E, F, Y, Z>(
        f0: ArgFunction<A, B, Y, Z>,
        f1: ArgFunction<A, C, Y, Z>,
        f2: ArgFunction<A, D, Y, Z>,
        f3: ArgFunction<A, E, Y, Z>,
        f4: ArgFunction<A, F, Y, Z>,
    ): ReturnFunction<A, [Awaited<B>, Awaited<C>, Awaited<D>, Awaited<E>, Awaited<F>], Y, Z>
    <A, B, C, D, E, F, G, Y, Z>(
        f0: ArgFunction<A, B, Y, Z>,
        f1: ArgFunction<A, C, Y, Z>,
        f2: ArgFunction<A, D, Y, Z>,
        f3: ArgFunction<A, E, Y, Z>,
        f4: ArgFunction<A, F, Y, Z>,
        f5: ArgFunction<A, G, Y, Z>,
    ): ReturnFunction<A, [Awaited<B>, Awaited<C>, Awaited<D>, Awaited<E>, Awaited<F>, Awaited<G>], Y, Z>
    <A, B, C, D, E, F, G, H, Y, Z>(
        f0: ArgFunction<A, B, Y, Z>,
        f1: ArgFunction<A, C, Y, Z>,
        f2: ArgFunction<A, D, Y, Z>,
        f3: ArgFunction<A, E, Y, Z>,
        f4: ArgFunction<A, F, Y, Z>,
        f5: ArgFunction<A, G, Y, Z>,
        f6: ArgFunction<A, [Awaited<B>, Awaited<C>, Awaited<D>, Awaited<E>, Awaited<F>, Awaited<G>, Awaited<H>], Y, Z>,
    ): ReturnFunction<A, H, Y, Z>
    <A, B, C, D, E, F, G, H, I, Y, Z>(
        f0: ArgFunction<A, B, Y, Z>,
        f1: ArgFunction<A, C, Y, Z>,
        f2: ArgFunction<A, D, Y, Z>,
        f3: ArgFunction<A, E, Y, Z>,
        f4: ArgFunction<A, F, Y, Z>,
        f5: ArgFunction<A, G, Y, Z>,
        f6: ArgFunction<A, H, Y, Z>,
        f7: ArgFunction<A, I, Y, Z>,
    ): ReturnFunction<A, [Awaited<B>, Awaited<C>, Awaited<D>, Awaited<E>, Awaited<F>, Awaited<G>, Awaited<H>, Awaited<I>], Y, Z>
    <A, B, C, D, E, F, G, H, I, J, Y, Z>(
        f0: ArgFunction<A, B, Y, Z>,
        f1: ArgFunction<A, C, Y, Z>,
        f2: ArgFunction<A, D, Y, Z>,
        f3: ArgFunction<A, E, Y, Z>,
        f4: ArgFunction<A, F, Y, Z>,
        f5: ArgFunction<A, G, Y, Z>,
        f6: ArgFunction<A, H, Y, Z>,
        f7: ArgFunction<A, I, Y, Z>,
        f8: ArgFunction<A, J, Y, Z>,
    ): ReturnFunction<A, [Awaited<B>, Awaited<C>, Awaited<D>, Awaited<E>, Awaited<F>, Awaited<G>, Awaited<H>, Awaited<I>, Awaited<J>], Y, Z>
    <A, B, C, D, E, F, G, H, I, J, K, Y, Z>(
        f0: ArgFunction<A, B, Y, Z>,
        f1: ArgFunction<A, C, Y, Z>,
        f2: ArgFunction<A, D, Y, Z>,
        f3: ArgFunction<A, E, Y, Z>,
        f4: ArgFunction<A, F, Y, Z>,
        f5: ArgFunction<A, G, Y, Z>,
        f6: ArgFunction<A, H, Y, Z>,
        f7: ArgFunction<A, I, Y, Z>,
        f8: ArgFunction<A, J, Y, Z>,
        f9: ArgFunction<A, K, Y, Z>,
    ): ReturnFunction<A, [Awaited<B>, Awaited<C>, Awaited<D>, Awaited<E>, Awaited<F>, Awaited<G>, Awaited<H>, Awaited<I>, Awaited<J>, Awaited<K>], Y, Z>
    <A, Y, Z>(
        ...fs: ArgFunction<A, any, Y, Z>[],
    ): ReturnFunction<A, Awaited<any>[], Y, Z>;
}
