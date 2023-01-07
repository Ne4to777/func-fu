import {expectType} from 'tsd';
import {sideSync} from '../../src/types';
import {N, PN, pn, identity, identityAsync, num2num, num2numAsync} from '../utils';

expectType<1>(sideSync(identity)(1));
expectType<1>(sideSync(identityAsync)(1));
expectType<N>(sideSync(num2num)(1));
expectType<N>(sideSync(num2numAsync)(1));

expectType<PN>(sideSync(identity)(pn));
expectType<PN>(sideSync(identityAsync)(pn));
