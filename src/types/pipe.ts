import type {AnyToAny, UnPromisify, PromisifyMixedF, Tail, Last} from './utils'

type PipeSyncR<RH, FS> = FS extends [(x: any) => infer F0R, ...infer R]
    ? [(x: RH) => F0R, ...PipeSyncR<F0R, R>]
    : FS

type PipeR<RH, FS> = FS extends [(x: any) => infer F0R, ...infer R]
    ? [(x: RH) => F0R, ...PipeR<UnPromisify<F0R>, R>]
    : FS

export type PipeSync = {
    <H extends AnyToAny>(f: H): H
    <FS extends AnyToAny[], H extends FS[0] = FS[0]>(
        ...fs: [H, ...PipeSyncR<ReturnType<H>, Tail<FS>>]
    ): (...xs: Parameters<H>) => ReturnType<Last<FS>>
    <H extends AnyToAny, I extends AnyToAny[], LR>(
        ...fs: [H, ...PipeSyncR<ReturnType<H>, [...I, (x: any) => LR]>]
    ): (...xs: Parameters<H>) => LR
}

export type Pipe = {
    <H extends AnyToAny>(f: H): PromisifyMixedF<H>
    <FS extends AnyToAny[], H extends FS[0] = FS[0]>(
        ...fs: [H, ...PipeR<UnPromisify<ReturnType<H>>, Tail<FS>>]
    ): PromisifyMixedF<(...xs: Parameters<H>) => ReturnType<Last<FS>>>
    <H extends AnyToAny, LR, I extends AnyToAny[]>(
        ...fs: [H, ...PipeR<UnPromisify<ReturnType<H>>, [...I, (x: any) => LR]>]
    ): PromisifyMixedF<(...xs: Parameters<H>) => LR>
}
