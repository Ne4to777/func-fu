import {expectType} from 'tsd';
import {throwErrorSync, tryCatchSync} from '../../src/types';
import {N, E, S, num2never, num2str} from '../utils';

expectType<E>(throwErrorSync((x: number) => new Error(`${x}`))(1))

expectType<N>(tryCatchSync(num2never)(1))
expectType<N>(tryCatchSync(throwErrorSync((x: number) => new Error(`${x}`)))(1))
expectType<S>(tryCatchSync(num2str, () => '')(1))
expectType<S>(tryCatchSync(throwErrorSync((x: number) => new Error(`${x}`)), () => '')(1))