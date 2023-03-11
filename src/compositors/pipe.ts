import type {PipeSync, Pipe} from '../types/pipe';

/**
 * Pipe Synchronous
 */
export const pipeSync: PipeSync = (f0 = (...rest: any) => rest[0], ...fs: any) => (...rest: any) => {
    let res = f0(...rest)
    for (let i = 0; i < fs.length; i += 1) res = fs[i](res)
    return res
}
/**
 * Pipe Asynchronous
 */
export const pipe: Pipe = (f0 = (...rest: any) => rest[0], ...fs: any) => async (...rest: any) => {
    let res = await f0(...(await Promise.all(rest)))
    for (let i = 0; i < fs.length; i += 1) res = await fs[i](res)
    return res
}
