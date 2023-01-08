import {expectType} from 'tsd';
import {throwError, tryCatch} from '../../src/types';
import {PN, PE, PS, num2never, num2str} from '../utils';

expectType<PE>(throwError((x: number) => new Error(`${x}`))(1))

expectType<PN>(tryCatch(num2never)(1, 1))
expectType<PN>(tryCatch(throwError((x: number) => new Error(`${x}`)))(1, 1))

expectType<PN>(tryCatch(num2never)(1))
expectType<PN>(tryCatch(throwError((x: number) => new Error(`${x}`)))(1))
expectType<PS>(tryCatch(num2str, async () => '')(1))
expectType<PS>(tryCatch(throwError((x: number) => new Error(`${x}`)), async () => '')(1))