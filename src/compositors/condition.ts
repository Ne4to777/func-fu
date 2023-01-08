import {IfElse, IfElseSync,} from './condition.d'

/**
 * If/Then/Else Synchronous
 */
export const ifElseSync: IfElseSync = (p: any, onTrue: any, onFalse = (x: any, y?: any, z?: any) => x) => (x: any, y?: any, z?: any) => p(x, y, z)
    ? onTrue(x, y, z)
    : onFalse(x, y, z)
/**
 * If/Then/Else Asynchronous
 */
export const ifElse: IfElse = (p: any, onTrue: any, onFalse = (y: any) => y) => async (x: any) => {
    const res = await x
    return await p(res) ? onTrue(res) : onFalse(res)
}