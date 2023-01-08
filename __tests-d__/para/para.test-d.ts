import {expectType} from 'tsd';
import {para} from '../../src/types';
import {P, N, S, pn, num2num, num2numAsync, num2str, num2strAsync, identity, identityAsync} from '../utils';

expectType<P<[N]>>(para(identity)());
expectType<P<[N]>>(para(num2num)());
expectType<P<[S]>>(para(num2str)());

expectType<P<[N]>>(para(identity)(1, 1));
expectType<P<[N]>>(para(num2num)(1, 1));
expectType<P<[S]>>(para(num2str)(1, 1));

expectType<P<[N]>>(para(identity)(1));
expectType<P<[N]>>(para(num2num)(1));
expectType<P<[S]>>(para(num2str)(1));

expectType<P<[N]>>(para(identityAsync)(1));
expectType<P<[N]>>(para(num2numAsync)(1));
expectType<P<[S]>>(para(num2strAsync)(1));

expectType<P<[N]>>(para(identity)(pn));
expectType<P<[N]>>(para(num2num)(pn));
expectType<P<[S]>>(para(num2str)(pn));

expectType<P<[N]>>(para(identityAsync)(pn));
expectType<P<[N]>>(para(num2numAsync)(pn));
expectType<P<[S]>>(para(num2strAsync)(pn));


expectType<P<[N, N]>>(para(identity, identity)(1));
expectType<P<[N, N]>>(para(num2num, num2num)(1));
expectType<P<[N, S]>>(para(num2num, num2str)(1));

expectType<P<[N, N]>>(para(identityAsync, identity)(1));
expectType<P<[N, N]>>(para(num2numAsync, num2num)(1));
expectType<P<[N, S]>>(para(num2numAsync, num2str)(1));

expectType<P<[N, N]>>(para(identity, identityAsync)(1));
expectType<P<[N, N]>>(para(num2num, num2numAsync)(1));
expectType<P<[N, S]>>(para(num2num, num2strAsync)(1));

expectType<P<[N, N]>>(para(identityAsync, identityAsync)(1));
expectType<P<[N, N]>>(para(num2numAsync, num2numAsync)(1));
expectType<P<[N, S]>>(para(num2numAsync, num2strAsync)(1));

expectType<P<[N, N]>>(para(identity, identity)(pn));
expectType<P<[N, N]>>(para(num2num, num2num)(pn));
expectType<P<[N, S]>>(para(num2num, num2str)(pn));

expectType<P<[N, N]>>(para(identityAsync, identity)(pn));
expectType<P<[N, N]>>(para(num2numAsync, num2num)(pn));
expectType<P<[N, S]>>(para(num2numAsync, num2str)(pn));

expectType<P<[N, N]>>(para(identity, identityAsync)(pn));
expectType<P<[N, N]>>(para(num2num, num2numAsync)(pn));
expectType<P<[N, S]>>(para(num2num, num2strAsync)(pn));

expectType<P<[N, N]>>(para(identityAsync, identityAsync)(pn));
expectType<P<[N, N]>>(para(num2numAsync, num2numAsync)(pn));
expectType<P<[N, S]>>(para(num2numAsync, num2strAsync)(pn));


expectType<P<[N, N, N]>>(para(identity, identity, identity)(1));
expectType<P<[N, N, N]>>(para(num2num, num2num, num2num)(1));
expectType<P<[N, N, S]>>(para(num2num, num2num, num2str)(1));

expectType<P<[N, N, N]>>(para(identityAsync, identity, identity)(1));
expectType<P<[N, N, N]>>(para(num2numAsync, num2num, num2num)(1));
expectType<P<[N, N, S]>>(para(num2numAsync, num2num, num2str)(1));

expectType<P<[N, N, N]>>(para(identity, identityAsync, identity)(1));
expectType<P<[N, N, N]>>(para(num2num, num2numAsync, num2num)(1));
expectType<P<[N, N, S]>>(para(num2num, num2numAsync, num2str)(1));

expectType<P<[N, N, N]>>(para(identity, identity, identityAsync)(1));
expectType<P<[N, N, N]>>(para(num2num, num2num, num2numAsync)(1));
expectType<P<[N, N, S]>>(para(num2num, num2num, num2strAsync)(1));

expectType<P<[N, N, N]>>(para(identityAsync, identityAsync, identity)(1));
expectType<P<[N, N, N]>>(para(num2numAsync, num2numAsync, num2num)(1));
expectType<P<[N, N, S]>>(para(num2numAsync, num2numAsync, num2str)(1));

expectType<P<[N, N, N]>>(para(identity, identityAsync, identityAsync)(1));
expectType<P<[N, N, N]>>(para(num2num, num2numAsync, num2numAsync)(1));
expectType<P<[N, N, S]>>(para(num2num, num2numAsync, num2strAsync)(1));

expectType<P<[N, N, N]>>(para(identityAsync, identity, identityAsync)(1));
expectType<P<[N, N, N]>>(para(num2numAsync, num2num, num2numAsync)(1));
expectType<P<[N, N, S]>>(para(num2numAsync, num2num, num2strAsync)(1));

expectType<P<[N, N, N]>>(para(identityAsync, identityAsync, identityAsync)(1));
expectType<P<[N, N, N]>>(para(num2numAsync, num2numAsync, num2numAsync)(1));
expectType<P<[N, N, S]>>(para(num2numAsync, num2numAsync, num2strAsync)(1));

expectType<P<[N, N, N]>>(para(identity, identity, identity)(pn));
expectType<P<[N, N, N]>>(para(num2num, num2num, num2num)(pn));
expectType<P<[N, N, S]>>(para(num2num, num2num, num2str)(pn));

expectType<P<[N, N, N]>>(para(identityAsync, identity, identity)(pn));
expectType<P<[N, N, N]>>(para(num2numAsync, num2num, num2num)(pn));
expectType<P<[N, N, S]>>(para(num2numAsync, num2num, num2str)(pn));

expectType<P<[N, N, N]>>(para(identity, identityAsync, identity)(pn));
expectType<P<[N, N, N]>>(para(num2num, num2numAsync, num2num)(pn));
expectType<P<[N, N, S]>>(para(num2num, num2numAsync, num2str)(pn));

expectType<P<[N, N, N]>>(para(identity, identity, identityAsync)(pn));
expectType<P<[N, N, N]>>(para(num2num, num2num, num2numAsync)(pn));
expectType<P<[N, N, S]>>(para(num2num, num2num, num2strAsync)(pn));

expectType<P<[N, N, N]>>(para(identityAsync, identityAsync, identity)(pn));
expectType<P<[N, N, N]>>(para(num2numAsync, num2numAsync, num2num)(pn));
expectType<P<[N, N, S]>>(para(num2numAsync, num2numAsync, num2str)(pn));

expectType<P<[N, N, N]>>(para(identity, identityAsync, identityAsync)(pn));
expectType<P<[N, N, N]>>(para(num2num, num2numAsync, num2numAsync)(pn));
expectType<P<[N, N, S]>>(para(num2num, num2numAsync, num2strAsync)(pn));

expectType<P<[N, N, N]>>(para(identityAsync, identity, identityAsync)(pn));
expectType<P<[N, N, N]>>(para(num2numAsync, num2num, num2numAsync)(pn));
expectType<P<[N, N, S]>>(para(num2numAsync, num2num, num2strAsync)(pn));

expectType<P<[N, N, N]>>(para(identityAsync, identityAsync, identityAsync)(pn))
expectType<P<[N, N, N]>>(para(num2numAsync, num2numAsync, num2numAsync)(pn));
expectType<P<[N, N, S]>>(para(num2numAsync, num2numAsync, num2strAsync)(pn));
