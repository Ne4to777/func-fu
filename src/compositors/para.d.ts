type UnPromise<T> = T extends Promise<infer K> ? K : T
type UP<T> = UnPromise<T>

type Func<X, R> = (x: X) => R

type ArgFunctionSync<X, R> = Func<X, R>
type ReturnFunctionSync<X, R> = Func<X, R>

type ArgFunction<X, R> = Func<X, R>
type ReturnFunction<X, R> = (x: X | Promise<X>) => Promise<R>

export type ParaSync = {
    <A, B>(
        f1: ArgFunctionSync<A, B>,
    ): ReturnFunctionSync<A, [B]>;
    <A, B, C>(
        f1: ArgFunctionSync<A, B>,
        f2: ArgFunctionSync<A, C>
    ): ReturnFunctionSync<A, [B, C]>
    <A, B, C, D>(
        f1: ArgFunctionSync<A, B>,
        f2: ArgFunctionSync<A, C>,
        f3: ArgFunctionSync<A, D>,
    ): ReturnFunctionSync<A, [B, C, D]>
    <A, B, C, D, E>(
        f1: ArgFunctionSync<A, B>,
        f2: ArgFunctionSync<A, C>,
        f3: ArgFunctionSync<A, D>,
        f4: ArgFunctionSync<A, E>,
    ): ReturnFunctionSync<A, [B, C, D, E]>
    <A, B, C, D, E, F>(
        f1: ArgFunctionSync<A, B>,
        f2: ArgFunctionSync<A, C>,
        f3: ArgFunctionSync<A, D>,
        f4: ArgFunctionSync<A, E>,
        f5: ArgFunctionSync<A, F>,
    ): ReturnFunctionSync<A, [B, C, D, E, F]>
    <A, B, C, D, E, F, G>(
        f1: ArgFunctionSync<A, B>,
        f2: ArgFunctionSync<A, C>,
        f3: ArgFunctionSync<A, D>,
        f4: ArgFunctionSync<A, E>,
        f5: ArgFunctionSync<A, F>,
        f6: ArgFunctionSync<A, G>,
    ): ReturnFunctionSync<A, [B, C, D, E, F, G]>
    <A, B, C, D, E, F, G, H>(
        f1: ArgFunctionSync<A, B>,
        f2: ArgFunctionSync<A, C>,
        f3: ArgFunctionSync<A, D>,
        f4: ArgFunctionSync<A, E>,
        f5: ArgFunctionSync<A, F>,
        f6: ArgFunctionSync<A, G>,
        f7: ArgFunctionSync<A, [B, C, D, E, F, G, H]>,
    ): ReturnFunctionSync<A, H>
    <A, B, C, D, E, F, G, H, I>(
        f1: ArgFunctionSync<A, B>,
        f2: ArgFunctionSync<A, C>,
        f3: ArgFunctionSync<A, D>,
        f4: ArgFunctionSync<A, E>,
        f5: ArgFunctionSync<A, F>,
        f6: ArgFunctionSync<A, G>,
        f7: ArgFunctionSync<A, H>,
        f8: ArgFunctionSync<A, I>,
    ): ReturnFunctionSync<A, [B, C, D, E, F, G, H, I]>
    <A, B, C, D, E, F, G, H, I, J>(
        f1: ArgFunctionSync<A, B>,
        f2: ArgFunctionSync<A, C>,
        f3: ArgFunctionSync<A, D>,
        f4: ArgFunctionSync<A, E>,
        f5: ArgFunctionSync<A, F>,
        f6: ArgFunctionSync<A, G>,
        f7: ArgFunctionSync<A, H>,
        f8: ArgFunctionSync<A, I>,
        f9: ArgFunctionSync<A, J>,
    ): ReturnFunctionSync<A, [B, C, D, E, F, G, H, I, J]>
    <A, B, C, D, E, F, G, H, I, J, K>(
        f1: ArgFunctionSync<A, B>,
        f2: ArgFunctionSync<A, C>,
        f3: ArgFunctionSync<A, D>,
        f4: ArgFunctionSync<A, E>,
        f5: ArgFunctionSync<A, F>,
        f6: ArgFunctionSync<A, G>,
        f7: ArgFunctionSync<A, H>,
        f8: ArgFunctionSync<A, I>,
        f9: ArgFunctionSync<A, J>,
        f10: ArgFunctionSync<A, K>,
    ): ReturnFunctionSync<A, [B, C, D, E, F, G, H, I, J, K]>
    (...fs: Func<any, any>[]): (x: any) => any[]
}

export type Para = {
    <A, B>(
        f1: ArgFunction<A, B>,
    ): ReturnFunction<A, [UP<B>]>
    <A, B, C>(
        f1: ArgFunction<A, B>,
        f2: ArgFunction<A, C>
    ): ReturnFunction<A, [UP<B>, UP<C>]>
    <A, B, C, D>(
        f1: ArgFunction<A, B>,
        f2: ArgFunction<A, C>,
        f3: ArgFunction<A, D>,
    ): ReturnFunction<A, [UP<B>, UP<C>, UP<D>]>
    <A, B, C, D, E>(
        f1: ArgFunction<A, B>,
        f2: ArgFunction<A, C>,
        f3: ArgFunction<A, D>,
        f4: ArgFunction<A, E>,
    ): ReturnFunction<A, [UP<B>, UP<C>, UP<D>, UP<E>]>
    <A, B, C, D, E, F>(
        f1: ArgFunction<A, B>,
        f2: ArgFunction<A, C>,
        f3: ArgFunction<A, D>,
        f4: ArgFunction<A, E>,
        f5: ArgFunction<A, F>,
    ): ReturnFunction<A, [UP<B>, UP<C>, UP<D>, UP<E>, UP<F>]>
    <A, B, C, D, E, F, G>(
        f1: ArgFunction<A, B>,
        f2: ArgFunction<A, C>,
        f3: ArgFunction<A, D>,
        f4: ArgFunction<A, E>,
        f5: ArgFunction<A, F>,
        f6: ArgFunction<A, G>,
    ): ReturnFunction<A, [UP<B>, UP<C>, UP<D>, UP<E>, UP<F>, UP<G>]>
    <A, B, C, D, E, F, G, H>(
        f1: ArgFunction<A, B>,
        f2: ArgFunction<A, C>,
        f3: ArgFunction<A, D>,
        f4: ArgFunction<A, E>,
        f5: ArgFunction<A, F>,
        f6: ArgFunction<A, G>,
        f7: ArgFunction<A, [UP<B>, UP<C>, UP<D>, UP<E>, UP<F>, UP<G>, UP<H>]>,
    ): ReturnFunction<A, H>
    <A, B, C, D, E, F, G, H, I>(
        f1: ArgFunction<A, B>,
        f2: ArgFunction<A, C>,
        f3: ArgFunction<A, D>,
        f4: ArgFunction<A, E>,
        f5: ArgFunction<A, F>,
        f6: ArgFunction<A, G>,
        f7: ArgFunction<A, H>,
        f8: ArgFunction<A, I>,
    ): ReturnFunction<A, [UP<B>, UP<C>, UP<D>, UP<E>, UP<F>, UP<G>, UP<H>, UP<I>]>
    <A, B, C, D, E, F, G, H, I, J>(
        f1: ArgFunction<A, B>,
        f2: ArgFunction<A, C>,
        f3: ArgFunction<A, D>,
        f4: ArgFunction<A, E>,
        f5: ArgFunction<A, F>,
        f6: ArgFunction<A, G>,
        f7: ArgFunction<A, H>,
        f8: ArgFunction<A, I>,
        f9: ArgFunction<A, J>,
    ): ReturnFunction<A, [UP<B>, UP<C>, UP<D>, UP<E>, UP<F>, UP<G>, UP<H>, UP<I>, UP<J>]>
    <A, B, C, D, E, F, G, H, I, J, K>(
        f1: ArgFunction<A, B>,
        f2: ArgFunction<A, C>,
        f3: ArgFunction<A, D>,
        f4: ArgFunction<A, E>,
        f5: ArgFunction<A, F>,
        f6: ArgFunction<A, G>,
        f7: ArgFunction<A, H>,
        f8: ArgFunction<A, I>,
        f9: ArgFunction<A, J>,
        f10: ArgFunction<A, K>,
    ): ReturnFunction<A, [UP<B>, UP<C>, UP<D>, UP<E>, UP<F>, UP<G>, UP<H>, UP<I>, UP<J>, UP<K>]>
    (...fs: Func<any, any>[]): (x: any) => Promise<any[]>
}
