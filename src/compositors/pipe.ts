import type {PipeSync, Pipe} from './pipe.d';

/**
 * Pipe Synchronous
 */
export const pipeSync: PipeSync = (f0 = (x: any, y: any, z: any) => x, ...fs: any) => (x: any, y: any, z: any) => {
    let res = f0(x, y, z)
    for (let i = 0; i < fs.length; i += 1) res = fs[i](res)
    return res
}
/**
 * Pipe Asynchronous
 */
export const pipe: Pipe = (f0 = (x: any, y: any, z: any) => x, ...fs: any) => async (x: any, y: any, z: any) => {
    let res = await f0(...(await Promise.all([x, y, z])))
    for (let i = 0; i < fs.length; i += 1) res = await fs[i](res)
    return res
}
