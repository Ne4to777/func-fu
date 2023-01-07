import type {SideSync, Side} from '../compositors/side.d'

/**
 * Side Synchronous
 */
export const sideSync: SideSync = f => x => {
    f(x);
    return x
}
/**
 * Side Asynchronous
 */
export const side: Side = f => async x => {
    const res = await x
    await f(res)
    return res
}
