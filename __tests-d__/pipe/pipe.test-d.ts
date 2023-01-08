import {expectType} from 'tsd';
import {pipe} from '../../src/types';
import {PN, PS, pn, num2num, num2numAsync, num2str, num2strAsync, identity, identityAsync, N, S} from '../utils';

expectType<PN>(pipe(identity)());
expectType<PN>(pipe(num2num)());
expectType<PS>(pipe(num2str)());

expectType<PN>(pipe(identity)(1, 1));
expectType<PN>(pipe(num2num)(1, 1));
expectType<PS>(pipe(num2str)(1, 1));

expectType<PN>(pipe(identity)(1));
expectType<PN>(pipe(num2num)(1));
expectType<PS>(pipe(num2str)(1));

expectType<PN>(pipe(identityAsync)(1));
expectType<PN>(pipe(num2numAsync)(1));
expectType<PS>(pipe(num2strAsync)(1));

expectType<PN>(pipe(identity)(pn));
expectType<PN>(pipe(num2num)(pn));
expectType<PS>(pipe(num2str)(pn));

expectType<PN>(pipe(identityAsync)(pn));
expectType<PN>(pipe(num2numAsync)(pn));
expectType<PS>(pipe(num2strAsync)(pn));


expectType<PN>(pipe(identity, identity)(1));
expectType<PN>(pipe(num2num, num2num)(1));
expectType<PS>(pipe(num2num, num2str)(1));

expectType<PN>(pipe(identityAsync, identity)(1));
expectType<PN>(pipe(num2numAsync, num2num)(1));
expectType<PS>(pipe(num2numAsync, num2str)(1));

expectType<PN>(pipe(identity, identityAsync)(1));
expectType<PN>(pipe(num2num, num2numAsync)(1));
expectType<PS>(pipe(num2num, num2strAsync)(1));

expectType<PN>(pipe(identityAsync, identityAsync)(1));
expectType<PN>(pipe(num2numAsync, num2numAsync)(1));
expectType<PS>(pipe(num2numAsync, num2strAsync)(1));

expectType<PN>(pipe(identity, identity)(pn));
expectType<PN>(pipe(num2num, num2num)(pn));
expectType<PS>(pipe(num2num, num2str)(pn));

expectType<PN>(pipe(identityAsync, identity)(pn));
expectType<PN>(pipe(num2numAsync, num2num)(pn));
expectType<PS>(pipe(num2numAsync, num2str)(pn));

expectType<PN>(pipe(identity, identityAsync)(pn));
expectType<PN>(pipe(num2num, num2numAsync)(pn));
expectType<PS>(pipe(num2num, num2strAsync)(pn));

expectType<PN>(pipe(identityAsync, identityAsync)(pn));
expectType<PN>(pipe(num2numAsync, num2numAsync)(pn));
expectType<PS>(pipe(num2numAsync, num2strAsync)(pn));


expectType<PN>(pipe(identity, identity, identity)(1));
expectType<PN>(pipe(num2num, num2num, num2num)(1));
expectType<PS>(pipe(num2num, num2num, num2str)(1));

expectType<PN>(pipe(identityAsync, identity, identity)(1));
expectType<PN>(pipe(num2numAsync, num2num, num2num)(1));
expectType<PS>(pipe(num2numAsync, num2num, num2str)(1));

expectType<PN>(pipe(identity, identityAsync, identity)(1));
expectType<PN>(pipe(num2num, num2numAsync, num2num)(1));
expectType<PS>(pipe(num2num, num2numAsync, num2str)(1));

expectType<PN>(pipe(identity, identity, identityAsync)(1));
expectType<PN>(pipe(num2num, num2num, num2numAsync)(1));
expectType<PS>(pipe(num2num, num2num, num2strAsync)(1));

expectType<PN>(pipe(identityAsync, identityAsync, identity)(1));
expectType<PN>(pipe(num2numAsync, num2numAsync, num2num)(1));
expectType<PS>(pipe(num2numAsync, num2numAsync, num2str)(1));

expectType<PN>(pipe(identity, identityAsync, identityAsync)(1));
expectType<PN>(pipe(num2num, num2numAsync, num2numAsync)(1));
expectType<PS>(pipe(num2num, num2numAsync, num2strAsync)(1));

expectType<PN>(pipe(identityAsync, identity, identityAsync)(1));
expectType<PN>(pipe(num2numAsync, num2num, num2numAsync)(1));
expectType<PS>(pipe(num2numAsync, num2num, num2strAsync)(1));

expectType<PN>(pipe(identityAsync, identityAsync, identityAsync)(1));
expectType<PN>(pipe(num2numAsync, num2numAsync, num2numAsync)(1));
expectType<PS>(pipe(num2numAsync, num2numAsync, num2strAsync)(1));

expectType<PN>(pipe(identity, identity, identity)(pn));
expectType<PN>(pipe(num2num, num2num, num2num)(pn));
expectType<PS>(pipe(num2num, num2num, num2str)(pn));

expectType<PN>(pipe(identityAsync, identity, identity)(pn));
expectType<PN>(pipe(num2numAsync, num2num, num2num)(pn));
expectType<PS>(pipe(num2numAsync, num2num, num2str)(pn));

expectType<PN>(pipe(identity, identityAsync, identity)(pn));
expectType<PN>(pipe(num2num, num2numAsync, num2num)(pn));
expectType<PS>(pipe(num2num, num2numAsync, num2str)(pn));

expectType<PN>(pipe(identity, identity, identityAsync)(pn));
expectType<PN>(pipe(num2num, num2num, num2numAsync)(pn));
expectType<PS>(pipe(num2num, num2num, num2strAsync)(pn));

expectType<PN>(pipe(identityAsync, identityAsync, identity)(pn));
expectType<PN>(pipe(num2numAsync, num2numAsync, num2num)(pn));
expectType<PS>(pipe(num2numAsync, num2numAsync, num2str)(pn));

expectType<PN>(pipe(identity, identityAsync, identityAsync)(pn));
expectType<PN>(pipe(num2num, num2numAsync, num2numAsync)(pn));
expectType<PS>(pipe(num2num, num2numAsync, num2strAsync)(pn));

expectType<PN>(pipe(identityAsync, identity, identityAsync)(pn));
expectType<PN>(pipe(num2numAsync, num2num, num2numAsync)(pn));
expectType<PS>(pipe(num2numAsync, num2num, num2strAsync)(pn));

expectType<PN>(pipe(identityAsync, identityAsync, identityAsync)(pn));
expectType<PN>(pipe(num2numAsync, num2numAsync, num2numAsync)(pn));
expectType<PS>(pipe(num2numAsync, num2numAsync, num2strAsync)(pn));
