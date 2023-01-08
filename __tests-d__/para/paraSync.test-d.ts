import {expectType} from 'tsd';
import {paraSync} from '../../src/types';
import {N, PN, PS, S, num2num, num2numAsync, num2str, num2strAsync, identity, identityAsync} from '../utils';

expectType<[N]>(paraSync(identity)());
expectType<[N]>(paraSync(num2num)());
expectType<[S]>(paraSync(num2str)());

expectType<[N]>(paraSync(identity)(1, 1));
expectType<[N]>(paraSync(num2num)(1, 1));
expectType<[S]>(paraSync(num2str)(1, 1));

expectType<[N]>(paraSync(identity)(1));
expectType<[N]>(paraSync(num2num)(1));
expectType<[S]>(paraSync(num2str)(1));

expectType<[PN]>(paraSync(identityAsync)(1));
expectType<[PN]>(paraSync(num2numAsync)(1));
expectType<[PS]>(paraSync(num2strAsync)(1));

expectType<[N, N]>(paraSync(identity, identity)(1));
expectType<[N, N]>(paraSync(num2num, num2num)(1));
expectType<[N, S]>(paraSync(num2num, num2str)(1));

expectType<[N, PN]>(paraSync(identity, identityAsync)(1));
expectType<[N, PN]>(paraSync(num2num, num2numAsync)(1));
expectType<[N, PS]>(paraSync(num2num, num2strAsync)(1));

expectType<[N, N, N]>(paraSync(identity, identity, identity)(1));
expectType<[N, N, N]>(paraSync(num2num, num2num, num2num)(1));
expectType<[N, N, S]>(paraSync(num2num, num2num, num2str)(1));

expectType<[N, N, PN]>(paraSync(identity, identity, identityAsync)(1));
expectType<[N, N, PN]>(paraSync(num2num, num2num, num2numAsync)(1));
expectType<[N, N, PS]>(paraSync(num2num, num2num, num2strAsync)(1));
