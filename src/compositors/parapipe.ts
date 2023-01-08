import type {ParapipeSync, Parapipe} from '../compositors/parapipe.d'

/**
 * Parallel first, Pipe Second Synchronous
 */
export const parapipeSync: ParapipeSync = (f0 = (w: any, x: any, y: any, z: any) => x, ...fs: any) => (w: any, x: any, y: any, z: any) => {
    let res = f0(w, x, y, z)
    for (let i = 0; i < fs.length; i += 1) res = fs[i](w)(res)
    return res
}
/**
 * Parallel first, Pipe Second Asynchronous
 */
export const parapipe: Parapipe = (f0 = (w: any, x: any, y: any, z: any) => x, ...fs: any) => async (w: any, x: any, y: any, z: any) => {
    let res = f0(...(await Promise.all([w, x, y, z])))
    for (let i = 0; i < fs.length; i += 1) res = await fs[i](w)(res)
    return res
}
