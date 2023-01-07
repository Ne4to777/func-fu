type UnPromise<T> = T extends Promise<infer K> ? K : T

type Func<X, Y, R> = (x: X, y: Y) => R
type FuncP<X, Y, R> = (x: X, y: UnPromise<Y>) => R

type ArgFunctionHeadSync<X, Y, R> = Func<X, Y, R>
type ArgFunctionTailSync<X, Y, R> = Func<X, Y, R>
type ReturnFunctionSync<X, Y, R> = Func<X, Y, R>

type ArgFunctionHead<X, Y, R> = Func<X, Y, R>
type ArgFunctionTail<X, Y, R> = FuncP<X, Y, R>
type ReturnFunction<X, Y, R> = (x: X | Promise<X>, y: Y | Promise<Y>) => Promise<UnPromise<R>>

export type ParapipeSync = {
    <Z, A, B>(
        f1: ArgFunctionHeadSync<Z, A, B>,
    ): ReturnFunctionSync<Z, A, B>;
    <Z, A, B, C>(
        f1: ArgFunctionHeadSync<Z, A, B>,
        f2: ArgFunctionTailSync<Z, B, C>,
    ): ReturnFunctionSync<Z, A, C>;
    <Z, A, B, C, D>(
        f1: ArgFunctionHeadSync<Z, A, B>,
        f2: ArgFunctionTailSync<Z, B, C>,
        f3: ArgFunctionTailSync<Z, C, D>,
    ): ReturnFunctionSync<Z, A, D>;
    <Z, A, B, C, D, E>(
        f1: ArgFunctionHeadSync<Z, A, B>,
        f2: ArgFunctionTailSync<Z, B, C>,
        f3: ArgFunctionTailSync<Z, C, D>,
        f4: ArgFunctionTailSync<Z, D, E>,
    ): ReturnFunctionSync<Z, A, E>;
    <Z, A, B, C, D, E, F>(
        f1: ArgFunctionHeadSync<Z, A, B>,
        f2: ArgFunctionTailSync<Z, B, C>,
        f3: ArgFunctionTailSync<Z, C, D>,
        f4: ArgFunctionTailSync<Z, D, E>,
        f5: ArgFunctionTailSync<Z, E, F>,
    ): ReturnFunctionSync<Z, A, F>;
    <Z, A, B, C, D, E, F, G>(
        f1: ArgFunctionHeadSync<Z, A, B>,
        f2: ArgFunctionTailSync<Z, B, C>,
        f3: ArgFunctionTailSync<Z, C, D>,
        f4: ArgFunctionTailSync<Z, D, E>,
        f5: ArgFunctionTailSync<Z, E, F>,
        f6: ArgFunctionTailSync<Z, F, G>,
    ): ReturnFunctionSync<Z, A, G>;
    <Z, A, B, C, D, E, F, G, H>(
        f1: ArgFunctionHeadSync<Z, A, B>,
        f2: ArgFunctionTailSync<Z, B, C>,
        f3: ArgFunctionTailSync<Z, C, D>,
        f4: ArgFunctionTailSync<Z, D, E>,
        f5: ArgFunctionTailSync<Z, E, F>,
        f6: ArgFunctionTailSync<Z, F, G>,
        f7: ArgFunctionTailSync<Z, G, H>,
    ): ReturnFunctionSync<Z, A, H>;
    <Z, A, B, C, D, E, F, G, H, I>(
        f1: ArgFunctionHeadSync<Z, A, B>,
        f2: ArgFunctionTailSync<Z, B, C>,
        f3: ArgFunctionTailSync<Z, C, D>,
        f4: ArgFunctionTailSync<Z, D, E>,
        f5: ArgFunctionTailSync<Z, E, F>,
        f6: ArgFunctionTailSync<Z, F, G>,
        f7: ArgFunctionTailSync<Z, G, H>,
        f8: ArgFunctionTailSync<Z, H, I>,
    ): ReturnFunctionSync<Z, A, I>;
    <Z, A, B, C, D, E, F, G, H, I, J>(
        f1: ArgFunctionHeadSync<Z, A, B>,
        f2: ArgFunctionTailSync<Z, B, C>,
        f3: ArgFunctionTailSync<Z, C, D>,
        f4: ArgFunctionTailSync<Z, D, E>,
        f5: ArgFunctionTailSync<Z, E, F>,
        f6: ArgFunctionTailSync<Z, F, G>,
        f7: ArgFunctionTailSync<Z, G, H>,
        f8: ArgFunctionTailSync<Z, H, I>,
        f9: ArgFunctionTailSync<Z, I, J>,
    ): ReturnFunctionSync<Z, A, J>;
    <Z, A, B, C, D, E, F, G, H, I, J, K>(
        f1: ArgFunctionHeadSync<Z, A, B>,
        f2: ArgFunctionTailSync<Z, B, C>,
        f3: ArgFunctionTailSync<Z, C, D>,
        f4: ArgFunctionTailSync<Z, D, E>,
        f5: ArgFunctionTailSync<Z, E, F>,
        f6: ArgFunctionTailSync<Z, F, G>,
        f7: ArgFunctionTailSync<Z, G, H>,
        f8: ArgFunctionTailSync<Z, H, I>,
        f9: ArgFunctionTailSync<Z, I, J>,
        f10: ArgFunctionTailSync<Z, J, K>,
    ): ReturnFunctionSync<Z, A, K>;
    (...fs: Func<any, any, any>[]): (x: any, y: any) => any
}

export type Parapipe = {
    <Z, A, B>(
        f1: ArgFunctionHead<Z, A, B>,
    ): ReturnFunction<Z, A, B>;
    <Z, A, B, C>(
        f1: ArgFunctionHead<Z, A, B>,
        f2: ArgFunctionTail<Z, B, C>,
    ): ReturnFunction<Z, A, C>;
    <Z, A, B, C, D>(
        f1: ArgFunctionHead<Z, A, B>,
        f2: ArgFunctionTail<Z, B, C>,
        f3: ArgFunctionTail<Z, C, D>,
    ): ReturnFunction<Z, A, D>;
    <Z, A, B, C, D, E>(
        f1: ArgFunctionHead<Z, A, B>,
        f2: ArgFunctionTail<Z, B, C>,
        f3: ArgFunctionTail<Z, C, D>,
        f4: ArgFunctionTail<Z, D, E>,
    ): ReturnFunction<Z, A, E>;
    <Z, A, B, C, D, E, F>(
        f1: ArgFunctionHead<Z, A, B>,
        f2: ArgFunctionTail<Z, B, C>,
        f3: ArgFunctionTail<Z, C, D>,
        f4: ArgFunctionTail<Z, D, E>,
        f5: ArgFunctionTail<Z, E, F>,
    ): ReturnFunction<Z, A, F>;
    <Z, A, B, C, D, E, F, G>(
        f1: ArgFunctionHead<Z, A, B>,
        f2: ArgFunctionTail<Z, B, C>,
        f3: ArgFunctionTail<Z, C, D>,
        f4: ArgFunctionTail<Z, D, E>,
        f5: ArgFunctionTail<Z, E, F>,
        f6: ArgFunctionTail<Z, F, G>,
    ): ReturnFunction<Z, A, G>;
    <Z, A, B, C, D, E, F, G, H>(
        f1: ArgFunctionHead<Z, A, B>,
        f2: ArgFunctionTail<Z, B, C>,
        f3: ArgFunctionTail<Z, C, D>,
        f4: ArgFunctionTail<Z, D, E>,
        f5: ArgFunctionTail<Z, E, F>,
        f6: ArgFunctionTail<Z, F, G>,
        f7: ArgFunctionTail<Z, G, H>,
    ): ReturnFunction<Z, A, H>;
    <Z, A, B, C, D, E, F, G, H, I>(
        f1: ArgFunctionHead<Z, A, B>,
        f2: ArgFunctionTail<Z, B, C>,
        f3: ArgFunctionTail<Z, C, D>,
        f4: ArgFunctionTail<Z, D, E>,
        f5: ArgFunctionTail<Z, E, F>,
        f6: ArgFunctionTail<Z, F, G>,
        f7: ArgFunctionTail<Z, G, H>,
        f8: ArgFunctionTail<Z, H, I>,
    ): ReturnFunction<Z, A, I>;
    <Z, A, B, C, D, E, F, G, H, I, J>(
        f1: ArgFunctionHead<Z, A, B>,
        f2: ArgFunctionTail<Z, B, C>,
        f3: ArgFunctionTail<Z, C, D>,
        f4: ArgFunctionTail<Z, D, E>,
        f5: ArgFunctionTail<Z, E, F>,
        f6: ArgFunctionTail<Z, F, G>,
        f7: ArgFunctionTail<Z, G, H>,
        f8: ArgFunctionTail<Z, H, I>,
        f9: ArgFunctionTail<Z, I, J>,
    ): ReturnFunction<Z, A, J>;
    <Z, A, B, C, D, E, F, G, H, I, J, K>(
        f1: ArgFunctionHead<Z, A, B>,
        f2: ArgFunctionTail<Z, B, C>,
        f3: ArgFunctionTail<Z, C, D>,
        f4: ArgFunctionTail<Z, D, E>,
        f5: ArgFunctionTail<Z, E, F>,
        f6: ArgFunctionTail<Z, F, G>,
        f7: ArgFunctionTail<Z, G, H>,
        f8: ArgFunctionTail<Z, H, I>,
        f9: ArgFunctionTail<Z, I, J>,
        f10: ArgFunctionTail<Z, J, K>,
    ): ReturnFunction<Z, A, K>;
    (...fs: Func<any, any, any>[]): (x: any, y: any) => Promise<any>
}
