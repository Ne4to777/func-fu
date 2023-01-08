type ArgFunctionHeadSync<W, X, R, Y, Z> = (w: W, x: X, y: Y, z: Z) => R
type ArgFunctionTailSync<X, Y, R> = (x: X, y: Y) => R
type ReturnFunctionSync<W, X, R, Y, Z> = (w: W, x?: X, y?: Y, z?: Z) => R

type ArgFunctionHead<W, X, R, Y, Z> = (w: Awaited<W>, x: Awaited<X>, y: Awaited<Y>, z: Awaited<Z>) => R
type ArgFunctionTail<X, Y, R> = (x: Awaited<X>, y: Awaited<Y>) => R
type ReturnFunction<W, X, R, Y, Z> = (w?: W | Promise<W>, x?: X | Promise<X>, y?: Y | Promise<Y>, z?: Z | Promise<Z>) => Promise<Awaited<R>>


export type ParapipeSync = {
    <X, A, B, Y, Z>(
        f0: ArgFunctionHeadSync<X, A, B, Y, Z>,
    ): ReturnFunctionSync<X, A, B, Y, Z>;
    <X, A, B, C, Y, Z>(
        f0: ArgFunctionHeadSync<X, A, B, Y, Z>,
        f1: ArgFunctionTailSync<X, B, C>,
    ): ReturnFunctionSync<X, A, C, Y, Z>;
    <X, A, B, C, D, Y, Z>(
        f0: ArgFunctionHeadSync<X, A, B, Y, Z>,
        f1: ArgFunctionTailSync<X, B, C>,
        f2: ArgFunctionTailSync<X, C, D>,
    ): ReturnFunctionSync<X, A, D, Y, Z>;
    <X, A, B, C, D, E, Y, Z>(
        f0: ArgFunctionHeadSync<X, A, B, Y, Z>,
        f1: ArgFunctionTailSync<X, B, C>,
        f2: ArgFunctionTailSync<X, C, D>,
        f3: ArgFunctionTailSync<X, D, E>,
    ): ReturnFunctionSync<X, A, E, Y, Z>;
    <X, A, B, C, D, E, F, Y, Z>(
        f0: ArgFunctionHeadSync<X, A, B, Y, Z>,
        f1: ArgFunctionTailSync<X, B, C>,
        f2: ArgFunctionTailSync<X, C, D>,
        f3: ArgFunctionTailSync<X, D, E>,
        f4: ArgFunctionTailSync<X, E, F>,
    ): ReturnFunctionSync<X, A, F, Y, Z>;
    <X, A, B, C, D, E, F, G, Y, Z>(
        f0: ArgFunctionHeadSync<X, A, B, Y, Z>,
        f1: ArgFunctionTailSync<X, B, C>,
        f2: ArgFunctionTailSync<X, C, D>,
        f3: ArgFunctionTailSync<X, D, E>,
        f4: ArgFunctionTailSync<X, E, F>,
        f5: ArgFunctionTailSync<X, F, G>,
    ): ReturnFunctionSync<X, A, G, Y, Z>;
    <X, A, B, C, D, E, F, G, H, Y, Z>(
        f0: ArgFunctionHeadSync<X, A, B, Y, Z>,
        f1: ArgFunctionTailSync<X, B, C>,
        f2: ArgFunctionTailSync<X, C, D>,
        f3: ArgFunctionTailSync<X, D, E>,
        f4: ArgFunctionTailSync<X, E, F>,
        f5: ArgFunctionTailSync<X, F, G>,
        f6: ArgFunctionTailSync<X, G, H>,
    ): ReturnFunctionSync<X, A, H, Y, Z>;
    <X, A, B, C, D, E, F, G, H, I, Y, Z>(
        f0: ArgFunctionHeadSync<X, A, B, Y, Z>,
        f1: ArgFunctionTailSync<X, B, C>,
        f2: ArgFunctionTailSync<X, C, D>,
        f3: ArgFunctionTailSync<X, D, E>,
        f4: ArgFunctionTailSync<X, E, F>,
        f5: ArgFunctionTailSync<X, F, G>,
        f6: ArgFunctionTailSync<X, G, H>,
        f7: ArgFunctionTailSync<X, H, I>,
    ): ReturnFunctionSync<X, A, I, Y, Z>;
    <X, A, B, C, D, E, F, G, H, I, J, Y, Z>(
        f0: ArgFunctionHeadSync<X, A, B, Y, Z>,
        f1: ArgFunctionTailSync<X, B, C>,
        f2: ArgFunctionTailSync<X, C, D>,
        f3: ArgFunctionTailSync<X, D, E>,
        f4: ArgFunctionTailSync<X, E, F>,
        f5: ArgFunctionTailSync<X, F, G>,
        f6: ArgFunctionTailSync<X, G, H>,
        f7: ArgFunctionTailSync<X, H, I>,
        f8: ArgFunctionTailSync<X, I, J>,
    ): ReturnFunctionSync<X, A, J, Y, Z>;
    <X, A, B, C, D, E, F, G, H, I, J, K, Y, Z>(
        f0: ArgFunctionHeadSync<X, A, B, Y, Z>,
        f1: ArgFunctionTailSync<X, B, C>,
        f2: ArgFunctionTailSync<X, C, D>,
        f3: ArgFunctionTailSync<X, D, E>,
        f4: ArgFunctionTailSync<X, E, F>,
        f5: ArgFunctionTailSync<X, F, G>,
        f6: ArgFunctionTailSync<X, G, H>,
        f7: ArgFunctionTailSync<X, H, I>,
        f8: ArgFunctionTailSync<X, I, J>,
        f9: ArgFunctionTailSync<X, J, K>,
    ): ReturnFunctionSync<X, A, K, Y, Z>;
    <X, A, B, Y, Z>(
        f0: ArgFunctionHeadSync<X, A, B, Y, Z>,
        ...fs: ArgFunctionTailSync<X, any, any>[]
    ): ReturnFunctionSync<X, A, any, Y, Z>
}

export type Parapipe = {
    <X, A, B, Y, Z>(
        f0: ArgFunctionHead<X, A, B, Y, Z>,
    ): ReturnFunction<X, A, B, Y, Z>;
    <X, A, B, C, Y, Z>(
        f0: ArgFunctionHead<X, A, B, Y, Z>,
        f1: ArgFunctionTail<X, B, C>,
    ): ReturnFunction<X, A, C, Y, Z>;
    <X, A, B, C, D, Y, Z>(
        f0: ArgFunctionHead<X, A, B, Y, Z>,
        f1: ArgFunctionTail<X, B, C>,
        f2: ArgFunctionTail<X, C, D>,
    ): ReturnFunction<X, A, D, Y, Z>;
    <X, A, B, C, D, E, Y, Z>(
        f0: ArgFunctionHead<X, A, B, Y, Z>,
        f1: ArgFunctionTail<X, B, C>,
        f2: ArgFunctionTail<X, C, D>,
        f3: ArgFunctionTail<X, D, E>,
    ): ReturnFunction<X, A, E, Y, Z>;
    <X, A, B, C, D, E, F, Y, Z>(
        f0: ArgFunctionHead<X, A, B, Y, Z>,
        f1: ArgFunctionTail<X, B, C>,
        f2: ArgFunctionTail<X, C, D>,
        f3: ArgFunctionTail<X, D, E>,
        f4: ArgFunctionTail<X, E, F>,
    ): ReturnFunction<X, A, F, Y, Z>;
    <X, A, B, C, D, E, F, G, Y, Z>(
        f0: ArgFunctionHead<X, A, B, Y, Z>,
        f1: ArgFunctionTail<X, B, C>,
        f2: ArgFunctionTail<X, C, D>,
        f3: ArgFunctionTail<X, D, E>,
        f4: ArgFunctionTail<X, E, F>,
        f5: ArgFunctionTail<X, F, G>,
    ): ReturnFunction<X, A, G, Y, Z>;
    <X, A, B, C, D, E, F, G, H, Y, Z>(
        f0: ArgFunctionHead<X, A, B, Y, Z>,
        f1: ArgFunctionTail<X, B, C>,
        f2: ArgFunctionTail<X, C, D>,
        f3: ArgFunctionTail<X, D, E>,
        f4: ArgFunctionTail<X, E, F>,
        f5: ArgFunctionTail<X, F, G>,
        f6: ArgFunctionTail<X, G, H>,
    ): ReturnFunction<X, A, H, Y, Z>;
    <X, A, B, C, D, E, F, G, H, I, Y, Z>(
        f0: ArgFunctionHead<X, A, B, Y, Z>,
        f1: ArgFunctionTail<X, B, C>,
        f2: ArgFunctionTail<X, C, D>,
        f3: ArgFunctionTail<X, D, E>,
        f4: ArgFunctionTail<X, E, F>,
        f5: ArgFunctionTail<X, F, G>,
        f6: ArgFunctionTail<X, G, H>,
        f7: ArgFunctionTail<X, H, I>,
    ): ReturnFunction<X, A, I, Y, Z>;
    <X, A, B, C, D, E, F, G, H, I, J, Y, Z>(
        f0: ArgFunctionHead<X, A, B, Y, Z>,
        f1: ArgFunctionTail<X, B, C>,
        f2: ArgFunctionTail<X, C, D>,
        f3: ArgFunctionTail<X, D, E>,
        f4: ArgFunctionTail<X, E, F>,
        f5: ArgFunctionTail<X, F, G>,
        f6: ArgFunctionTail<X, G, H>,
        f7: ArgFunctionTail<X, H, I>,
        f8: ArgFunctionTail<X, I, J>,
    ): ReturnFunction<X, A, J, Y, Z>;
    <X, A, B, C, D, E, F, G, H, I, J, K, Y, Z>(
        f0: ArgFunctionHead<X, A, B, Y, Z>,
        f1: ArgFunctionTail<X, B, C>,
        f2: ArgFunctionTail<X, C, D>,
        f3: ArgFunctionTail<X, D, E>,
        f4: ArgFunctionTail<X, E, F>,
        f5: ArgFunctionTail<X, F, G>,
        f6: ArgFunctionTail<X, G, H>,
        f7: ArgFunctionTail<X, H, I>,
        f8: ArgFunctionTail<X, I, J>,
        f9: ArgFunctionTail<X, J, K>,
    ): ReturnFunction<X, A, K, Y, Z>;
    <X, A, B, Y, Z>(
        f0: ArgFunctionHead<X, A, B, Y, Z>,
        ...fs: ArgFunctionTail<X, any, any>[]
    ): ReturnFunction<X, A, any, Y, Z>
}
