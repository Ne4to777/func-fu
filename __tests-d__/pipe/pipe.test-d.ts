import {expectType} from 'tsd';
import {pipe} from '../../src/types';
import {
    PN,
    PS,
    pn,
    num2num,
    num2numAsync,
    num2str,
    num2strAsync,
    num2num2,
    num2str2
} from '../utils';
import {promiseAll} from '../../src/utils';

expectType<PN>(pipe(num2num2)(1, 1));
expectType<PS>(pipe(num2str2)(1, 1));

expectType<PN>(pipe(num2num)(1));
expectType<PS>(pipe(num2str)(1));

expectType<PN>(pipe(num2numAsync)(1));
expectType<PS>(pipe(num2strAsync)(1));

expectType<PN>(pipe(num2num)(pn));
expectType<PS>(pipe(num2str)(pn));

expectType<PN>(pipe(num2numAsync)(pn));
expectType<PS>(pipe(num2strAsync)(pn));

expectType<Promise<number[]>>(pipe(promiseAll, (x: number[]) => x)([Promise.resolve(1)]))


expectType<PN>(pipe(num2num, num2num)(1));
expectType<PS>(pipe(num2num, num2str)(1));

expectType<PN>(pipe(num2numAsync, num2num)(1));
expectType<PS>(pipe(num2numAsync, num2str)(1));

expectType<PN>(pipe(num2num, num2numAsync)(1));
expectType<PS>(pipe(num2num, num2strAsync)(1));

expectType<PN>(pipe(num2numAsync, num2numAsync)(1));
expectType<PS>(pipe(num2numAsync, num2strAsync)(1));

expectType<PN>(pipe(num2num, num2num)(pn));
expectType<PS>(pipe(num2num, num2str)(pn));

expectType<PN>(pipe(num2numAsync, num2num)(pn));
expectType<PS>(pipe(num2numAsync, num2str)(pn));

expectType<PN>(pipe(num2num, num2numAsync)(pn));
expectType<PS>(pipe(num2num, num2strAsync)(pn));

expectType<PN>(pipe(num2numAsync, num2numAsync)(pn));
expectType<PS>(pipe(num2numAsync, num2strAsync)(pn));


expectType<PN>(pipe(num2num, num2num, num2num)(1));
expectType<PS>(pipe(num2num, num2num, num2str)(1));

expectType<PN>(pipe(num2numAsync, num2num, num2num)(1));
expectType<PS>(pipe(num2numAsync, num2num, num2str)(1));

expectType<PN>(pipe(num2num, num2numAsync, num2num)(1));
expectType<PS>(pipe(num2num, num2numAsync, num2str)(1));

expectType<PN>(pipe(num2num, num2num, num2numAsync)(1));
expectType<PS>(pipe(num2num, num2num, num2strAsync)(1));

expectType<PN>(pipe(num2numAsync, num2numAsync, num2num)(1));
expectType<PS>(pipe(num2numAsync, num2numAsync, num2str)(1));

expectType<PN>(pipe(num2num, num2numAsync, num2numAsync)(1));
expectType<PS>(pipe(num2num, num2numAsync, num2strAsync)(1));

expectType<PN>(pipe(num2numAsync, num2num, num2numAsync)(1));
expectType<PS>(pipe(num2numAsync, num2num, num2strAsync)(1));

expectType<PN>(pipe(num2numAsync, num2numAsync, num2numAsync)(1));
expectType<PS>(pipe(num2numAsync, num2numAsync, num2strAsync)(1));

expectType<PN>(pipe(num2num, num2num, num2num)(pn));
expectType<PS>(pipe(num2num, num2num, num2str)(pn));

expectType<PN>(pipe(num2numAsync, num2num, num2num)(pn));
expectType<PS>(pipe(num2numAsync, num2num, num2str)(pn));

expectType<PN>(pipe(num2num, num2numAsync, num2num)(pn));
expectType<PS>(pipe(num2num, num2numAsync, num2str)(pn));

expectType<PN>(pipe(num2num, num2num, num2numAsync)(pn));
expectType<PS>(pipe(num2num, num2num, num2strAsync)(pn));

expectType<PN>(pipe(num2numAsync, num2numAsync, num2num)(pn));
expectType<PS>(pipe(num2numAsync, num2numAsync, num2str)(pn));

expectType<PN>(pipe(num2num, num2numAsync, num2numAsync)(pn));
expectType<PS>(pipe(num2num, num2numAsync, num2strAsync)(pn));

expectType<PN>(pipe(num2numAsync, num2num, num2numAsync)(pn));
expectType<PS>(pipe(num2numAsync, num2num, num2strAsync)(pn));

expectType<PN>(pipe(num2numAsync, num2numAsync, num2numAsync)(pn));
expectType<PS>(pipe(num2numAsync, num2numAsync, num2strAsync)(pn));

