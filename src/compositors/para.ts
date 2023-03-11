import {ParaSync, Para} from '../types/para'

/**
 * Parallel Synchronous
 */
export const paraSync: ParaSync = (...fs: any) => (x: any, y: any, z: any) => {
    const res = []
    for (let i = 0; i < fs.length; i += 1) res[i] = fs[i](x, y, z)
    return res as any
}
/**
 * Parallel Asynchronous
 */
export const para: Para = (...fs: any) => async (x: any, y: any, z: any) => {
    const res = []
    const [xx, yy, zz] = await Promise.all([x, y, z])
    for (let i = 0; i < fs.length; i += 1) res[i] = fs[i](xx, yy, zz)
    return await Promise.all(res) as any
}