type UnPromise<T> = T extends Promise<infer K> ? K : T

type Func<X, R> = (x: X) => R
type FuncP<X, R> = (x: UnPromise<X>) => R

type ArgFunctionSync<X, R> = Func<X, R>
type ReturnFunctionSync<X, R> = Func<X, R>

type ArgFunctionHead<X, R> = Func<X, R>
type ArgFunctionTail<X, R> = FuncP<X, R>
type ReturnFunction<X, R> = (x: X | Promise<X>) => Promise<UnPromise<R>>

export type PipeSync = {
    <A, B>(
        f1: ArgFunctionSync<A, B>,
    ): ReturnFunctionSync<A, B>;
    <A, B, C>(
        f1: ArgFunctionSync<A, B>,
        f2: ArgFunctionSync<B, C>
    ): ReturnFunctionSync<A, C>
    <A, B, C, D>(
        f1: ArgFunctionSync<A, B>,
        f2: ArgFunctionSync<B, C>,
        f3: ArgFunctionSync<C, D>,
    ): ReturnFunctionSync<A, D>
    <A, B, C, D, E>(
        f1: ArgFunctionSync<A, B>,
        f2: ArgFunctionSync<B, C>,
        f3: ArgFunctionSync<C, D>,
        f4: ArgFunctionSync<D, E>,
    ): ReturnFunctionSync<A, E>
    <A, B, C, D, E, F>(
        f1: ArgFunctionSync<A, B>,
        f2: ArgFunctionSync<B, C>,
        f3: ArgFunctionSync<C, D>,
        f4: ArgFunctionSync<D, E>,
        f5: ArgFunctionSync<E, F>,
    ): ReturnFunctionSync<A, F>
    <A, B, C, D, E, F, G>(
        f1: ArgFunctionSync<A, B>,
        f2: ArgFunctionSync<B, C>,
        f3: ArgFunctionSync<C, D>,
        f4: ArgFunctionSync<D, E>,
        f5: ArgFunctionSync<E, F>,
        f6: ArgFunctionSync<F, G>,
    ): ReturnFunctionSync<A, G>
    <A, B, C, D, E, F, G, H>(
        f1: ArgFunctionSync<A, B>,
        f2: ArgFunctionSync<B, C>,
        f3: ArgFunctionSync<C, D>,
        f4: ArgFunctionSync<D, E>,
        f5: ArgFunctionSync<E, F>,
        f6: ArgFunctionSync<F, G>,
        f7: ArgFunctionSync<G, H>,
    ): ReturnFunctionSync<A, H>
    <A, B, C, D, E, F, G, H, I>(
        f1: ArgFunctionSync<A, B>,
        f2: ArgFunctionSync<B, C>,
        f3: ArgFunctionSync<C, D>,
        f4: ArgFunctionSync<D, E>,
        f5: ArgFunctionSync<E, F>,
        f6: ArgFunctionSync<F, G>,
        f7: ArgFunctionSync<G, H>,
        f8: ArgFunctionSync<H, I>,
    ): ReturnFunctionSync<A, I>
    <A, B, C, D, E, F, G, H, I, J>(
        f1: ArgFunctionSync<A, B>,
        f2: ArgFunctionSync<B, C>,
        f3: ArgFunctionSync<C, D>,
        f4: ArgFunctionSync<D, E>,
        f5: ArgFunctionSync<E, F>,
        f6: ArgFunctionSync<F, G>,
        f7: ArgFunctionSync<G, H>,
        f8: ArgFunctionSync<H, I>,
        f9: ArgFunctionSync<I, J>,
    ): ReturnFunctionSync<A, J>
    <A, B, C, D, E, F, G, H, I, J, K>(
        f1: ArgFunctionSync<A, B>,
        f2: ArgFunctionSync<B, C>,
        f3: ArgFunctionSync<C, D>,
        f4: ArgFunctionSync<D, E>,
        f5: ArgFunctionSync<E, F>,
        f6: ArgFunctionSync<F, G>,
        f7: ArgFunctionSync<G, H>,
        f8: ArgFunctionSync<H, I>,
        f9: ArgFunctionSync<I, J>,
        f10: ArgFunctionSync<J, K>,
    ): ReturnFunctionSync<A, K>
    (...fs: Func<any, any>[]): (x: any) => any
}

export type Pipe = {
    <A, B>(
        f1: ArgFunctionHead<A, B>,
    ): ReturnFunction<A, B>;
    <A, B, C>(
        f1: ArgFunctionHead<A, B>,
        f2: ArgFunctionTail<B, C>
    ): ReturnFunction<A, C>
    <A, B, C, D>(
        f1: ArgFunctionHead<A, B>,
        f2: ArgFunctionTail<B, C>,
        f3: ArgFunctionTail<C, D>,
    ): ReturnFunction<A, D>
    <A, B, C, D, E>(
        f1: ArgFunctionHead<A, B>,
        f2: ArgFunctionTail<B, C>,
        f3: ArgFunctionTail<C, D>,
        f4: ArgFunctionTail<D, E>,
    ): ReturnFunction<A, E>
    <A, B, C, D, E, F>(
        f1: ArgFunctionHead<A, B>,
        f2: ArgFunctionTail<B, C>,
        f3: ArgFunctionTail<C, D>,
        f4: ArgFunctionTail<D, E>,
        f5: ArgFunctionTail<E, F>,
    ): ReturnFunction<A, F>
    <A, B, C, D, E, F, G>(
        f1: ArgFunctionHead<A, B>,
        f2: ArgFunctionTail<B, C>,
        f3: ArgFunctionTail<C, D>,
        f4: ArgFunctionTail<D, E>,
        f5: ArgFunctionTail<E, F>,
        f6: ArgFunctionTail<F, G>,
    ): ReturnFunction<A, G>
    <A, B, C, D, E, F, G, H>(
        f1: ArgFunctionHead<A, B>,
        f2: ArgFunctionTail<B, C>,
        f3: ArgFunctionTail<C, D>,
        f4: ArgFunctionTail<D, E>,
        f5: ArgFunctionTail<E, F>,
        f6: ArgFunctionTail<F, G>,
        f7: ArgFunctionTail<G, H>,
    ): ReturnFunction<A, H>
    <A, B, C, D, E, F, G, H, I>(
        f1: ArgFunctionHead<A, B>,
        f2: ArgFunctionTail<B, C>,
        f3: ArgFunctionTail<C, D>,
        f4: ArgFunctionTail<D, E>,
        f5: ArgFunctionTail<E, F>,
        f6: ArgFunctionTail<F, G>,
        f7: ArgFunctionTail<G, H>,
        f8: ArgFunctionTail<H, I>,
    ): ReturnFunction<A, I>
    <A, B, C, D, E, F, G, H, I, J>(
        f1: ArgFunctionHead<A, B>,
        f2: ArgFunctionTail<B, C>,
        f3: ArgFunctionTail<C, D>,
        f4: ArgFunctionTail<D, E>,
        f5: ArgFunctionTail<E, F>,
        f6: ArgFunctionTail<F, G>,
        f7: ArgFunctionTail<G, H>,
        f8: ArgFunctionTail<H, I>,
        f9: ArgFunctionTail<I, J>,
    ): ReturnFunction<A, J>
    <A, B, C, D, E, F, G, H, I, J, K>(
        f1: ArgFunctionHead<A, B>,
        f2: ArgFunctionTail<B, C>,
        f3: ArgFunctionTail<C, D>,
        f4: ArgFunctionTail<D, E>,
        f5: ArgFunctionTail<E, F>,
        f6: ArgFunctionTail<F, G>,
        f7: ArgFunctionTail<G, H>,
        f8: ArgFunctionTail<H, I>,
        f9: ArgFunctionTail<I, J>,
        f10: ArgFunctionTail<J, K>,
    ): ReturnFunction<A, K>
    (...fs: Func<any, any>[]): (x: any) => Promise<any>
}
