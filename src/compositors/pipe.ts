import type {PipeSync, Pipe} from './pipe.d';

/**
 * Pipe Synchronous
 */
export const pipeSync: PipeSync = (...fs: any) => (x: any) => {
    let res = x
    for (let i = 0; i < fs.length; i += 1) res = fs[i](res)
    return res
}
/**
 * Pipe Asynchronous
 */
export const pipe: Pipe = (...fs: any) => async (x: any) => {
    let res = x
    for (let i = 0; i < fs.length; i += 1) res = fs[i](await res)
    return res
}
