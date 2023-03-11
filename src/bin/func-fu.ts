import * as fs from 'fs';
import path from 'path';
import {pipe, pipeSync} from '../compositors/pipe';
import {promiseAll} from '../utils';

console.log('===========');

// const p = new Promise((res, rej) => setTimeout(
//     () => Math.random() > .5
//         ? res(1)
//         : rej(new Error('hoho')
//         ),
//     100)
// );

// const content = fs.readFileSync(path.resolve('./package.json'), {encoding: 'utf-8'})
// console.log(JSON.parse(content).name)

const packageFilename = './package.json';
console.log(path.resolve())
const a = pipeSync(
    path.resolve,
    (x: string) => fs.readFileSync(x, 'utf-8'),
    JSON.parse,
    ({name}: { name: string }) => name,
)('')

const b = Promise.all([Promise.resolve(1)])
const p = promiseAll([Promise.resolve(1)])
const r = pipe<[All]>(promiseAll)([Promise.resolve(1)])

type All = {
    <T extends readonly unknown[] | []>(values: T): Promise<{ -readonly [P in keyof T]: Awaited<T[P]> }>,
    <T>(values: Iterable<PromiseLike<T> | T>): Promise<Awaited<T>[]>
}
