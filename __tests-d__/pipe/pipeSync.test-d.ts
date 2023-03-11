import {expectType} from 'tsd';
import {pipeSync} from '../../src/types';
import {
    N,
    PN,
    PS,
    S,
    num2num,
    num2numAsync,
    num2str,
    num2strAsync,
    num2num2,
    num2str2,
    identity,
} from '../utils';

expectType<N>(pipeSync<[(x: number) => number, (x: number) => number, (x: number) => number, (x: number) => number]>(identity, identity, identity, identity)(1));

expectType<N>(pipeSync(num2num)(1));
expectType<S>(pipeSync(num2str)(1));

expectType<N>(pipeSync(num2num2)(1, 1));
expectType<S>(pipeSync(num2str2)(1, 1));

expectType<N>(pipeSync(num2num)(1));
expectType<S>(pipeSync(num2str)(1));

expectType<PN>(pipeSync(num2numAsync)(1));
expectType<PS>(pipeSync(num2strAsync)(1));

expectType<N>(pipeSync(num2num, num2num)(1));
expectType<S>(pipeSync(num2num, num2str)(1));

expectType<PN>(pipeSync(num2num, num2numAsync)(1));
expectType<PN>(pipeSync(num2num2, num2numAsync)(1, 1));
expectType<PS>(pipeSync(num2num, num2strAsync)(1));

expectType<N>(pipeSync(num2num, num2num, num2num)(1));
expectType<S>(pipeSync(num2num, num2num, num2str)(1));

expectType<PN>(pipeSync(num2num, num2num, num2numAsync)(1));
expectType<PN>(pipeSync(num2num2, num2num, num2numAsync)(1, 1));
expectType<PS>(pipeSync(num2num, num2num, num2strAsync)(1));
