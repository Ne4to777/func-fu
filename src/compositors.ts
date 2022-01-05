import {B, S, Y} from './combinators';
import {
    Autocompose,
    AutocomposeY,
    Curry,
    Para,
    Parallelize,
    Pipe,
    Side,
    SideAsync,
    SideSync,
    Uncurry
} from './compositors.d'

export const curry = Y((fR => (...acc) => n => f => (...xs) => n > 1
    ? fR(...acc, ...xs)(n - 1)(f)
    : f(...acc, ...xs)
) as Curry)()

export const uncurry = Y((fR => n => f => (...[x, ...xs]) => n > 1
    ? fR(n - 1)(f(x))(...xs)
    : f(x)
) as Uncurry)

export const parallelize = Y((fR => acc => f => n => n > 1
    ? fR(B(f)(acc))(B(f))(n - 1)
    : acc
) as Parallelize)(B)(B(S))

export const autocompose: Autocompose = f => Y((fR => n => n > 1
    ? B(f)(fR(n - 1))
    : f
) as AutocomposeY)

export const pipeSync: Pipe = (...fs) => x => {
    let res = x
    for (let i = 0; i < fs.length; i += 1) res = fs[i](res)
    return res
}

export const pipeAsync: Pipe = (...fs) => async x => {
    let res = x
    for (let i = 0; i < fs.length; i += 1) res = await fs[i](res)
    return res
}

export const pipe: Pipe = (...fs) => x => {
    let res = x
    for (let i = 0; i < fs.length; i += 1) res = res instanceof Promise ? res.then(fs[i]) : fs[i](res)
    return res
}

export const paraSync: Para = (...fs) => x => {
    const res = []
    for (let i = 0; i < fs.length; i += 1) res[i] = fs[i](x)
    return res
}

export const paraAsync: Para = (...fs) => async x => {
    const res = []
    for (let i = 0; i < fs.length; i += 1) res[i] = await fs[i](x)
    return res
}

export const para: Para = (...fs) => x => {
    const res = []
    let hasPromise = false
    for (let i = 0; i < fs.length; i += 1) {
        const value = fs[i](x)
        if (!hasPromise && value instanceof Promise) hasPromise = true
        res[i] = value
    }
    return hasPromise ? Promise.all(res) : res
}

export const sideSync: SideSync = f => x => (_ => x)(f(x))
export const sideAsync: SideAsync = f => async x => (_ => x)(await f(x))
export const side: Side = f => x => (res => res instanceof Promise ? res.then(() => x) : x)(f(x))
