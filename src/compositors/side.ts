import type {SideSync, Side} from '../types/side'

/**
 * Side Synchronous
 */
export const sideSync: SideSync = f => (x, y, z) => {
    f(x, y, z);
    return x
}
/**
 * Side Asynchronous
 */
export const side: Side = f => async (x, y, z) => {
    const [xx, yy, zz] = await Promise.all([x, y, z])
    await f(xx, yy, zz)
    return xx
}
