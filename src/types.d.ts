import {PipeSync, Pipe} from './compositors/pipe.d'
import {ParaSync, Para} from './compositors/para.d'
import {ParapipeSync, Parapipe} from './compositors/parapipe.d'
import {SideSync, Side} from './compositors/side.d'
import {IfElseSync, IfElse} from './compositors/condition.d'
import {ThrowErrorSync, ThrowError, TryCatchSync, TryCatch} from './compositors/exception.d'
import {IType, KType, SType, BType, AType, TType, WType, CType, PType, UType, YType} from './combinators.d'

export declare const pipeSync: PipeSync
export declare const pipe: Pipe

export declare const paraSync: ParaSync
export declare const para: Para

export declare const parapipeSync: ParapipeSync
export declare const parapipe: Parapipe

export declare const sideSync: SideSync
export declare const side: Side

export declare const ifElseSync: IfElseSync
export declare const ifElse: IfElse

export declare const throwErrorSync: ThrowErrorSync
export declare const throwError: ThrowError

export declare const tryCatchSync: TryCatchSync
export declare const tryCatch: TryCatch

export declare const I: IType
export declare const K: KType
export declare const S: SType
export declare const B: BType
export declare const A: AType
export declare const T: TType
export declare const W: WType
export declare const C: CType
export declare const P: PType
export declare const U: UType
export declare const Y: YType