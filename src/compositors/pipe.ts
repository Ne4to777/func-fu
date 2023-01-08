import type {PipeSync, Pipe} from './pipe.d';

/**
 * Pipe Synchronous
 */
export const pipeSync: PipeSync = (...fs: any) => (...xs: any) => {
    let res = xs
    if (fs.length) {
        res = fs[0](...res)
        for (let i = 0; i < fs.length; i += 1) res = fs[i](res)
        return res
    }
    return res[0]
}
/**
 * Pipe Asynchronous
 */
export const pipe: Pipe = (...fs: any) => async (...xs: any) => {
    let res = await Promise.all(xs)
    if (fs.length) {
        res = await fs[0](...res)
        for (let i = 1; i < fs.length; i += 1) res = await fs[i](res)
        return res
    }
    return res[0]
}
