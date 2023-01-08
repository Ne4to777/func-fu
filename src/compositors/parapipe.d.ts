type Func<X, Y, R> = (x: X, y: Y) => R
type FuncP<X, Y, R> = (x: Awaited<X>, y: Awaited<Y>) => R

type ArgFunctionSync<X, Y, R> = Func<X, Y, R>
type ReturnFunctionSync<X, Y, R> = Func<X, Y, R>

type ArgFunction<X, Y, R> = FuncP<X, Y, R>
type ReturnFunction<X, Y, R> = (x: X | Promise<X>, y: Y | Promise<Y>) => Promise<Awaited<R>>

export type ParapipeSync = {
    <Z, A, B>(
        f1: ArgFunctionSync<Z, A, B>,
    ): ReturnFunctionSync<Z, A, B>;
    <Z, A, B, C>(
        f1: ArgFunctionSync<Z, A, B>,
        f2: ArgFunctionSync<Z, B, C>,
    ): ReturnFunctionSync<Z, A, C>;
    <Z, A, B, C, D>(
        f1: ArgFunctionSync<Z, A, B>,
        f2: ArgFunctionSync<Z, B, C>,
        f3: ArgFunctionSync<Z, C, D>,
    ): ReturnFunctionSync<Z, A, D>;
    <Z, A, B, C, D, E>(
        f1: ArgFunctionSync<Z, A, B>,
        f2: ArgFunctionSync<Z, B, C>,
        f3: ArgFunctionSync<Z, C, D>,
        f4: ArgFunctionSync<Z, D, E>,
    ): ReturnFunctionSync<Z, A, E>;
    <Z, A, B, C, D, E, F>(
        f1: ArgFunctionSync<Z, A, B>,
        f2: ArgFunctionSync<Z, B, C>,
        f3: ArgFunctionSync<Z, C, D>,
        f4: ArgFunctionSync<Z, D, E>,
        f5: ArgFunctionSync<Z, E, F>,
    ): ReturnFunctionSync<Z, A, F>;
    <Z, A, B, C, D, E, F, G>(
        f1: ArgFunctionSync<Z, A, B>,
        f2: ArgFunctionSync<Z, B, C>,
        f3: ArgFunctionSync<Z, C, D>,
        f4: ArgFunctionSync<Z, D, E>,
        f5: ArgFunctionSync<Z, E, F>,
        f6: ArgFunctionSync<Z, F, G>,
    ): ReturnFunctionSync<Z, A, G>;
    <Z, A, B, C, D, E, F, G, H>(
        f1: ArgFunctionSync<Z, A, B>,
        f2: ArgFunctionSync<Z, B, C>,
        f3: ArgFunctionSync<Z, C, D>,
        f4: ArgFunctionSync<Z, D, E>,
        f5: ArgFunctionSync<Z, E, F>,
        f6: ArgFunctionSync<Z, F, G>,
        f7: ArgFunctionSync<Z, G, H>,
    ): ReturnFunctionSync<Z, A, H>;
    <Z, A, B, C, D, E, F, G, H, I>(
        f1: ArgFunctionSync<Z, A, B>,
        f2: ArgFunctionSync<Z, B, C>,
        f3: ArgFunctionSync<Z, C, D>,
        f4: ArgFunctionSync<Z, D, E>,
        f5: ArgFunctionSync<Z, E, F>,
        f6: ArgFunctionSync<Z, F, G>,
        f7: ArgFunctionSync<Z, G, H>,
        f8: ArgFunctionSync<Z, H, I>,
    ): ReturnFunctionSync<Z, A, I>;
    <Z, A, B, C, D, E, F, G, H, I, J>(
        f1: ArgFunctionSync<Z, A, B>,
        f2: ArgFunctionSync<Z, B, C>,
        f3: ArgFunctionSync<Z, C, D>,
        f4: ArgFunctionSync<Z, D, E>,
        f5: ArgFunctionSync<Z, E, F>,
        f6: ArgFunctionSync<Z, F, G>,
        f7: ArgFunctionSync<Z, G, H>,
        f8: ArgFunctionSync<Z, H, I>,
        f9: ArgFunctionSync<Z, I, J>,
    ): ReturnFunctionSync<Z, A, J>;
    <Z, A, B, C, D, E, F, G, H, I, J, K>(
        f1: ArgFunctionSync<Z, A, B>,
        f2: ArgFunctionSync<Z, B, C>,
        f3: ArgFunctionSync<Z, C, D>,
        f4: ArgFunctionSync<Z, D, E>,
        f5: ArgFunctionSync<Z, E, F>,
        f6: ArgFunctionSync<Z, F, G>,
        f7: ArgFunctionSync<Z, G, H>,
        f8: ArgFunctionSync<Z, H, I>,
        f9: ArgFunctionSync<Z, I, J>,
        f10: ArgFunctionSync<Z, J, K>,
    ): ReturnFunctionSync<Z, A, K>;
    (...fs: Func<any, any, any>[]): (x: any, y: any) => any
}

export type Parapipe = {
    <Z, A, B>(
        f1: ArgFunction<Z, A, B>,
    ): ReturnFunction<Z, A, B>;
    <Z, A, B, C>(
        f1: ArgFunction<Z, A, B>,
        f2: ArgFunction<Z, B, C>,
    ): ReturnFunction<Z, A, C>;
    <Z, A, B, C, D>(
        f1: ArgFunction<Z, A, B>,
        f2: ArgFunction<Z, B, C>,
        f3: ArgFunction<Z, C, D>,
    ): ReturnFunction<Z, A, D>;
    <Z, A, B, C, D, E>(
        f1: ArgFunction<Z, A, B>,
        f2: ArgFunction<Z, B, C>,
        f3: ArgFunction<Z, C, D>,
        f4: ArgFunction<Z, D, E>,
    ): ReturnFunction<Z, A, E>;
    <Z, A, B, C, D, E, F>(
        f1: ArgFunction<Z, A, B>,
        f2: ArgFunction<Z, B, C>,
        f3: ArgFunction<Z, C, D>,
        f4: ArgFunction<Z, D, E>,
        f5: ArgFunction<Z, E, F>,
    ): ReturnFunction<Z, A, F>;
    <Z, A, B, C, D, E, F, G>(
        f1: ArgFunction<Z, A, B>,
        f2: ArgFunction<Z, B, C>,
        f3: ArgFunction<Z, C, D>,
        f4: ArgFunction<Z, D, E>,
        f5: ArgFunction<Z, E, F>,
        f6: ArgFunction<Z, F, G>,
    ): ReturnFunction<Z, A, G>;
    <Z, A, B, C, D, E, F, G, H>(
        f1: ArgFunction<Z, A, B>,
        f2: ArgFunction<Z, B, C>,
        f3: ArgFunction<Z, C, D>,
        f4: ArgFunction<Z, D, E>,
        f5: ArgFunction<Z, E, F>,
        f6: ArgFunction<Z, F, G>,
        f7: ArgFunction<Z, G, H>,
    ): ReturnFunction<Z, A, H>;
    <Z, A, B, C, D, E, F, G, H, I>(
        f1: ArgFunction<Z, A, B>,
        f2: ArgFunction<Z, B, C>,
        f3: ArgFunction<Z, C, D>,
        f4: ArgFunction<Z, D, E>,
        f5: ArgFunction<Z, E, F>,
        f6: ArgFunction<Z, F, G>,
        f7: ArgFunction<Z, G, H>,
        f8: ArgFunction<Z, H, I>,
    ): ReturnFunction<Z, A, I>;
    <Z, A, B, C, D, E, F, G, H, I, J>(
        f1: ArgFunction<Z, A, B>,
        f2: ArgFunction<Z, B, C>,
        f3: ArgFunction<Z, C, D>,
        f4: ArgFunction<Z, D, E>,
        f5: ArgFunction<Z, E, F>,
        f6: ArgFunction<Z, F, G>,
        f7: ArgFunction<Z, G, H>,
        f8: ArgFunction<Z, H, I>,
        f9: ArgFunction<Z, I, J>,
    ): ReturnFunction<Z, A, J>;
    <Z, A, B, C, D, E, F, G, H, I, J, K>(
        f1: ArgFunction<Z, A, B>,
        f2: ArgFunction<Z, B, C>,
        f3: ArgFunction<Z, C, D>,
        f4: ArgFunction<Z, D, E>,
        f5: ArgFunction<Z, E, F>,
        f6: ArgFunction<Z, F, G>,
        f7: ArgFunction<Z, G, H>,
        f8: ArgFunction<Z, H, I>,
        f9: ArgFunction<Z, I, J>,
        f10: ArgFunction<Z, J, K>,
    ): ReturnFunction<Z, A, K>;
    (...fs: Func<any, any, any>[]): (x: any, y: any) => Promise<any>
}
