import {IfElse, IfElseSync,} from './condition.d'

/**
 * If/Then/Else Synchronous
 */
export const ifElseSync: IfElseSync = (p: any, onTrue: any, onFalse = (y: any) => y) => (x: any) => p(x)
    ? onTrue(x)
    : onFalse(x)
/**
 * If/Then/Else Asynchronous
 */
export const ifElse: IfElse = (p: any, onTrue: any, onFalse = (y: any) => y) => async (x: any) => {
    const res = await x
    return await p(res) ? onTrue(res) : onFalse(res)
}