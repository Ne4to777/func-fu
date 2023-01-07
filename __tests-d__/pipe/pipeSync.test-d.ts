import {expectType} from 'tsd';
import {pipeSync} from '../../src/types';
import {N, PN, PS, S, num2num, num2numAsync, num2str, num2strAsync, identity, identityAsync} from '../utils';

expectType<1>(pipeSync(identity)(1));
expectType<N>(pipeSync(num2num)(1));
expectType<S>(pipeSync(num2str)(1));

expectType<PN>(pipeSync(identityAsync)(1));
expectType<PN>(pipeSync(num2numAsync)(1));
expectType<PS>(pipeSync(num2strAsync)(1));

expectType<1>(pipeSync(identity, identity)(1));
expectType<N>(pipeSync(num2num, num2num)(1));
expectType<S>(pipeSync(num2num, num2str)(1));

expectType<PN>(pipeSync(identity, identityAsync)(1));
expectType<PN>(pipeSync(num2num, num2numAsync)(1));
expectType<PS>(pipeSync(num2num, num2strAsync)(1));

expectType<1>(pipeSync(identity, identity, identity)(1));
expectType<N>(pipeSync(num2num, num2num, num2num)(1));
expectType<S>(pipeSync(num2num, num2num, num2str)(1));

expectType<PN>(pipeSync(identity, identity, identityAsync)(1));
expectType<PN>(pipeSync(num2num, num2num, num2numAsync)(1));
expectType<PS>(pipeSync(num2num, num2num, num2strAsync)(1));
