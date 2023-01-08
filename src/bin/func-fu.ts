import {pipe} from '../compositors/pipe';
import {promiseAll} from '../utils';


const inc = (x: number): number => x + 1
const incAsync = (x: number): Promise<number> => Promise.resolve(x + 1)

type MapSync = <X, R>(f: (x: X, i?: number, ys?: X[]) => R) => (xs: X[]) => R[]

const mapSync: MapSync = f => xs => xs.map(f)

type Map = <X, R>(f: (x: X, i?: number, ys?: (X | Promise<X>)[]) => R | Promise<R>) => (xs: (X | Promise<X>)[] | Promise<(X | Promise<X>)[]>) => Promise<R[]>

const map: Map = f => pipe(
    promiseAll,
    mapSync(f),
    promiseAll
)

// const map: Map = f => pipe`
//     - резолвим элементы, так как возможны промисы: ${promiseAll}
//     - проходимся по массиву функцией: ${f}
//     - резолвим элементы, так как функция может вернуть промис: ${promiseAll}
// `

const p0 = pipe(mapSync(inc), mapSync(inc))([1, 2])

const p1 = pipe(map(incAsync), map(inc))([1, 2])
const p2 = pipe(map(incAsync), map(inc))([Promise.resolve(1), 2])
const p3 = pipe(map(incAsync), map(inc))([Promise.resolve(1), Promise.resolve(2)])
const p4 = pipe(map(incAsync), map(inc))(Promise.resolve([1, 2]))
const p5 = pipe(map(incAsync), map(inc))(Promise.resolve([Promise.resolve(1), 2]))
const p6 = pipe(map(incAsync), map(inc))(Promise.resolve([Promise.resolve(1), Promise.resolve(2)]))

console.log('===============')

// console.log('p1', p1)
// console.log('p2', p2)
// console.log('p3', p3)
// console.log('p4', p4)
// console.log('p5', p5)
// console.log('p6', p6)

p0.then(x => console.log('p0', x))
p1.then(x => console.log('p1', x))
p2.then(x => console.log('p2', x))
p3.then(x => console.log('p3', x))
p4.then(x => console.log('p4', x))
p5.then(x => console.log('p5', x))
p6.then(x => console.log('p6', x))
