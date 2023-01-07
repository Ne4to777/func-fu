import {ParaSync, Para} from '../compositors/para.d'

/**
 * Parallel Synchronous
 */
export const paraSync: ParaSync = (...fs: any) => (x: any) => {
    const res = []
    for (let i = 0; i < fs.length; i += 1) res[i] = fs[i](x)
    return res as any
}
/**
 * Parallel Asynchronous
 */
export const para: Para = (...fs: any) => async (x: any) => {
    const res = []
    const y = await x
    for (let i = 0; i < fs.length; i += 1) res[i] = fs[i](y)
    return await Promise.all(res) as any
}