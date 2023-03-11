import {IfElse, IfElseSync,} from '../types/condition'

/**
 * If/Then/Else Synchronous
 */
export const ifElseSync: IfElseSync = (p: any, onTrue: any, onFalse = (x: any, y: any, z: any) => x) => (x: any, y?: any, z?: any) => p(x, y, z)
    ? onTrue(x, y, z)
    : onFalse(x, y, z)
/**
 * If/Then/Else Asynchronous
 */
export const ifElse: IfElse = (p: any, onTrue: any, onFalse = (x: any, y: any, z: any) => x) => async (x: any, y: any, z: any) => {
    const [xx, yy, zz] = await Promise.all([x, y, z])
    return await (await p(xx, yy, zz)) ? onTrue(xx, yy, zz) : onFalse(xx, yy, zz)
}