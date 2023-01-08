type ArgFunctionHeadSync<X, R, Y, Z> = (x: X, y: Y, z: Z) => R
type ArgFunctionTailSync<X, R> = (x: X) => R
type ReturnFunctionSync<X, R, Y, Z> = (x?: X, y?: Y, z?: Z) => R

type ArgFunctionHead<X, R, Y, Z> = (x: Awaited<X>, y: Awaited<Y>, z: Awaited<Z>) => R
type ArgFunctionTail<X, R> = (x: Awaited<X>) => R
type ReturnFunction<X, R, Y, Z> = (x?: X | Promise<X>, y?: Y | Promise<Y>, z?: Z | Promise<Z>) => Promise<Awaited<R>>

export type PipeSync = {
    <A, Y, Z>(): ReturnFunctionSync<A, A, Y, Z>
    <A, B, Y, Z>(
        f0: ArgFunctionHeadSync<A, B, Y, Z>,
    ): ReturnFunctionSync<A, B, Y, Z>;
    <A, B, C, Y, Z>(
        f0: ArgFunctionHeadSync<A, B, Y, Z>,
        f1: ArgFunctionTailSync<B, C>,
    ): ReturnFunctionSync<A, C, Y, Z>
    <A, B, C, D, Y, Z>(
        f0: ArgFunctionHeadSync<A, B, Y, Z>,
        f1: ArgFunctionTailSync<B, C>,
        f2: ArgFunctionTailSync<C, D>,
    ): ReturnFunctionSync<A, D, Y, Z>
    <A, B, C, D, E, Y, Z>(
        f0: ArgFunctionHeadSync<A, B, Y, Z>,
        f1: ArgFunctionTailSync<B, C>,
        f2: ArgFunctionTailSync<C, D>,
        f3: ArgFunctionTailSync<D, E>,
    ): ReturnFunctionSync<A, E, Y, Z>
    <A, B, C, D, E, F, Y, Z>(
        f0: ArgFunctionHeadSync<A, B, Y, Z>,
        f1: ArgFunctionTailSync<B, C>,
        f2: ArgFunctionTailSync<C, D>,
        f3: ArgFunctionTailSync<D, E>,
        f4: ArgFunctionTailSync<E, F>,
    ): ReturnFunctionSync<A, F, Y, Z>
    <A, B, C, D, E, F, G, Y, Z>(
        f0: ArgFunctionHeadSync<A, B, Y, Z>,
        f1: ArgFunctionTailSync<B, C>,
        f2: ArgFunctionTailSync<C, D>,
        f3: ArgFunctionTailSync<D, E>,
        f4: ArgFunctionTailSync<E, F>,
        f5: ArgFunctionTailSync<F, G>,
    ): ReturnFunctionSync<A, G, Y, Z>
    <A, B, C, D, E, F, G, H, Y, Z>(
        f0: ArgFunctionHeadSync<A, B, Y, Z>,
        f1: ArgFunctionTailSync<B, C>,
        f2: ArgFunctionTailSync<C, D>,
        f3: ArgFunctionTailSync<D, E>,
        f4: ArgFunctionTailSync<E, F>,
        f5: ArgFunctionTailSync<F, G>,
        f6: ArgFunctionTailSync<G, H>,
    ): ReturnFunctionSync<A, H, Y, Z>
    <A, B, C, D, E, F, G, H, I, Y, Z>(
        f0: ArgFunctionHeadSync<A, B, Y, Z>,
        f1: ArgFunctionTailSync<B, C>,
        f2: ArgFunctionTailSync<C, D>,
        f3: ArgFunctionTailSync<D, E>,
        f4: ArgFunctionTailSync<E, F>,
        f5: ArgFunctionTailSync<F, G>,
        f6: ArgFunctionTailSync<G, H>,
        f7: ArgFunctionTailSync<H, I>,
    ): ReturnFunctionSync<A, I, Y, Z>
    <A, B, C, D, E, F, G, H, I, J, Y, Z>(
        f0: ArgFunctionHeadSync<A, B, Y, Z>,
        f1: ArgFunctionTailSync<B, C>,
        f2: ArgFunctionTailSync<C, D>,
        f3: ArgFunctionTailSync<D, E>,
        f4: ArgFunctionTailSync<E, F>,
        f5: ArgFunctionTailSync<F, G>,
        f6: ArgFunctionTailSync<G, H>,
        f7: ArgFunctionTailSync<H, I>,
        f8: ArgFunctionTailSync<I, J>,
    ): ReturnFunctionSync<A, J, Y, Z>
    <A, B, C, D, E, F, G, H, I, J, K, Y, Z>(
        f0: ArgFunctionHeadSync<A, B, Y, Z>,
        f1: ArgFunctionTailSync<B, C>,
        f2: ArgFunctionTailSync<C, D>,
        f3: ArgFunctionTailSync<D, E>,
        f4: ArgFunctionTailSync<E, F>,
        f5: ArgFunctionTailSync<F, G>,
        f6: ArgFunctionTailSync<G, H>,
        f7: ArgFunctionTailSync<H, I>,
        f8: ArgFunctionTailSync<I, J>,
        f9: ArgFunctionTailSync<J, K>,
    ): ReturnFunctionSync<A, K, Y, Z>
     <A, B, Y, Z>(f0: ArgFunctionHeadSync<A, B, Y, Z>, ...fs: ArgFunctionTailSync<A, any>[]): ReturnFunctionSync<any, any, Y, Z>
}

export type Pipe = {
    <A, Y, Z>(): ReturnFunction<A, A, Y, Z>
    <A, B, Y, Z>(
        f0: ArgFunctionHead<A, B, Y, Z>,
    ): ReturnFunction<A, B, Y, Z>;
    <A, B, C, Y, Z>(
        f0: ArgFunctionHead<A, B, Y, Z>,
        f1: ArgFunctionTail<B, C>
    ): ReturnFunction<A, C, Y, Z>
    <A, B, C, D, Y, Z>(
        f0: ArgFunctionHead<A, B, Y, Z>,
        f1: ArgFunctionTail<B, C>,
        f2: ArgFunctionTail<C, D>,
    ): ReturnFunction<A, D, Y, Z>
    <A, B, C, D, E, Y, Z>(
        f0: ArgFunctionHead<A, B, Y, Z>,
        f1: ArgFunctionTail<B, C>,
        f2: ArgFunctionTail<C, D>,
        f3: ArgFunctionTail<D, E>,
    ): ReturnFunction<A, E, Y, Z>
    <A, B, C, D, E, F, Y, Z>(
        f0: ArgFunctionHead<A, B, Y, Z>,
        f1: ArgFunctionTail<B, C>,
        f2: ArgFunctionTail<C, D>,
        f3: ArgFunctionTail<D, E>,
        f4: ArgFunctionTail<E, F>,
    ): ReturnFunction<A, F, Y, Z>
    <A, B, C, D, E, F, G, Y, Z>(
        f0: ArgFunctionHead<A, B, Y, Z>,
        f1: ArgFunctionTail<B, C>,
        f2: ArgFunctionTail<C, D>,
        f3: ArgFunctionTail<D, E>,
        f4: ArgFunctionTail<E, F>,
        f5: ArgFunctionTail<F, G>,
    ): ReturnFunction<A, G, Y, Z>
    <A, B, C, D, E, F, G, H, Y, Z>(
        f0: ArgFunctionHead<A, B, Y, Z>,
        f1: ArgFunctionTail<B, C>,
        f2: ArgFunctionTail<C, D>,
        f3: ArgFunctionTail<D, E>,
        f4: ArgFunctionTail<E, F>,
        f5: ArgFunctionTail<F, G>,
        f6: ArgFunctionTail<G, H>,
    ): ReturnFunction<A, H, Y, Z>
    <A, B, C, D, E, F, G, H, I, Y, Z>(
        f0: ArgFunctionHead<A, B, Y, Z>,
        f1: ArgFunctionTail<B, C>,
        f2: ArgFunctionTail<C, D>,
        f3: ArgFunctionTail<D, E>,
        f4: ArgFunctionTail<E, F>,
        f5: ArgFunctionTail<F, G>,
        f6: ArgFunctionTail<G, H>,
        f7: ArgFunctionTail<H, I>,
    ): ReturnFunction<A, I, Y, Z>
    <A, B, C, D, E, F, G, H, I, J, Y, Z>(
        f0: ArgFunctionHead<A, B, Y, Z>,
        f1: ArgFunctionTail<B, C>,
        f2: ArgFunctionTail<C, D>,
        f3: ArgFunctionTail<D, E>,
        f4: ArgFunctionTail<E, F>,
        f5: ArgFunctionTail<F, G>,
        f6: ArgFunctionTail<G, H>,
        f7: ArgFunctionTail<H, I>,
        f8: ArgFunctionTail<I, J>,
    ): ReturnFunction<A, J, Y, Z>
    <A, B, C, D, E, F, G, H, I, J, K, Y, Z>(
        f0: ArgFunctionHead<A, B, Y, Z>,
        f1: ArgFunctionTail<B, C>,
        f2: ArgFunctionTail<C, D>,
        f3: ArgFunctionTail<D, E>,
        f4: ArgFunctionTail<E, F>,
        f5: ArgFunctionTail<F, G>,
        f6: ArgFunctionTail<G, H>,
        f7: ArgFunctionTail<H, I>,
        f8: ArgFunctionTail<I, J>,
        f9: ArgFunctionTail<J, K>,
    ): ReturnFunction<A, K, Y, Z>
    <A, B, Y, Z>(f0: ArgFunctionHead<A, B, Y, Z>, ...fs: ArgFunctionTail<A, any>[]): ReturnFunction<any, any, Y, Z>
}
