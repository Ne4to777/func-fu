import {
    ThrowErrorSync,
    ThrowError,
    TryCatch,
    TryCatchSync,
} from './exception.d'

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
export const tryCatchSync: TryCatchSync = (f: any, t = (y: any, z: any) => z) => (x: any) => {
    try {
        return f(x)
    } catch (err) {
        return t(err, x)
    }
}
/**
 * Try/Catch Asynchronous
 */
export const tryCatch: TryCatch = (f: any, t = (y: any, z: any) => z) => async (x: any) => {
    const res = await x
    try {
        return await f(res)
    } catch (err) {
        return t(err, res)
    }
}