import {expectType} from 'tsd';
import {side} from '../../src/types';
import {PN, pn, identity, identityAsync, num2num, num2numAsync} from '../utils';

expectType<PN>(side(identity)(1));
expectType<PN>(side(identityAsync)(1));
expectType<PN>(side(num2num)(1));
expectType<PN>(side(num2numAsync)(1));

expectType<PN>(side(identity)(pn));
expectType<PN>(side(identityAsync)(pn));
