import {
    ThrowErrorSync,
    ThrowError,
    TryCatch,
    TryCatchSync,
} from '../types/exception'

/**
 * Throw Error Synchronous
 */
export const throwErrorSync: ThrowErrorSync = Constructor => x => {
    throw Constructor(x)
}
/**
 * Throw Error Asynchronous
 */
export const throwError: ThrowError = Constructor => async x => {
    throw await Constructor(await x)
}
/**
 * Try/Catch Synchronous
 */
export const tryCatchSync: TryCatchSync = (f: any, t = (w: any, x: any, y?: any, z?: any) => w) => (x: any, y?: any, z?: any) => {
    try {
        return f(x, y, z)
    } catch (err) {
        return t(err, x, y, z)
    }
}
/**
 * Try/Catch Asynchronous
 */
export const tryCatch: TryCatch = (f: any, t = (w: any, x: any, y?: any, z?: any) => w) => async (x: any, y?: any, z?: any) => {
    const [xx, yy, zz] = await Promise.all([x, y, z])
    try {
        return await f(xx, yy, zz)
    } catch (err) {
        return t(err, xx, yy, zz)
    }
}