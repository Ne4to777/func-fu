import type {ParapipeSync, Parapipe} from '../compositors/parapipe.d'

/**
 * Parallel first, Pipe Second Synchronous
 */
export const parapipeSync: ParapipeSync = (...fs: any) => (x: any, y: any) => {
    let res = y
    for (let i = 0; i < fs.length; i += 1) res = fs[i](x)(res)
    return res
}
/**
 * Parallel first, Pipe Second Asynchronous
 */
export const parapipe: Parapipe = (...fs: any) => async (x: any, y: any) => {
    let res = y
    const z = await x
    for (let i = 0; i < fs.length; i += 1) res = fs[i](z)(await res)
    return res
}
