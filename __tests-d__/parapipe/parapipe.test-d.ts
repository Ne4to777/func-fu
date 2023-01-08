import {expectType} from 'tsd';
import {parapipe} from '../../src/types';
import {PN, PS, pn, num2num2, num2num2Async, num2str2, num2str2Async, identity2, identity2Async} from '../utils';

expectType<PN>(parapipe(identity2)(1));
expectType<PN>(parapipe(num2num2)(1));
expectType<PS>(parapipe(num2str2)(1));

expectType<PN>(parapipe(identity2)(1, 1, 1));
expectType<PN>(parapipe(num2num2)(1, 1, 1));
expectType<PS>(parapipe(num2str2)(1, 1, 1));

expectType<PN>(parapipe(identity2)(1, 1));
expectType<PN>(parapipe(num2num2)(1, 1));
expectType<PS>(parapipe(num2str2)(1, 1));

expectType<PN>(parapipe(identity2Async)(1, 1));
expectType<PN>(parapipe(num2num2Async)(1, 1));
expectType<PS>(parapipe(num2str2Async)(1, 1));

expectType<PN>(parapipe(identity2)(1, pn));
expectType<PN>(parapipe(num2num2)(1, pn));
expectType<PS>(parapipe(num2str2)(1, pn));

expectType<PN>(parapipe(identity2Async)(1, pn));
expectType<PN>(parapipe(num2num2Async)(1, pn));
expectType<PS>(parapipe(num2str2Async)(1, pn));

expectType<PN>(parapipe(identity2)(pn, 1));
expectType<PN>(parapipe(num2num2)(pn, 1));
expectType<PS>(parapipe(num2str2)(pn, 1));

expectType<PN>(parapipe(identity2Async)(pn, 1));
expectType<PN>(parapipe(num2num2Async)(pn, 1));
expectType<PS>(parapipe(num2str2Async)(pn, 1));

expectType<PN>(parapipe(identity2)(pn, pn));
expectType<PN>(parapipe(num2num2)(pn, pn));
expectType<PS>(parapipe(num2str2)(pn, pn));

expectType<PN>(parapipe(identity2Async)(pn, pn));
expectType<PN>(parapipe(num2num2Async)(pn, pn));
expectType<PS>(parapipe(num2str2Async)(pn, pn));

expectType<PN>(parapipe(identity2, identity2)(1, 1));
expectType<PN>(parapipe(num2num2, num2num2)(1, 1));
expectType<PS>(parapipe(num2num2, num2str2)(1, 1));

expectType<PN>(parapipe(identity2Async, identity2)(1, 1));
expectType<PN>(parapipe(num2num2Async, num2num2)(1, 1));
expectType<PS>(parapipe(num2num2Async, num2str2)(1, 1));

expectType<PN>(parapipe(identity2, identity2Async)(1, 1));
expectType<PN>(parapipe(num2num2, num2num2Async)(1, 1));
expectType<PS>(parapipe(num2num2, num2str2Async)(1, 1));

expectType<PN>(parapipe(identity2Async, identity2Async)(1, 1));
expectType<PN>(parapipe(num2num2Async, num2num2Async)(1, 1));
expectType<PS>(parapipe(num2num2Async, num2str2Async)(1, 1));

expectType<PN>(parapipe(identity2, identity2)(1, pn));
expectType<PN>(parapipe(num2num2, num2num2)(1, pn));
expectType<PS>(parapipe(num2num2, num2str2)(1, pn));

expectType<PN>(parapipe(identity2Async, identity2)(1, pn));
expectType<PN>(parapipe(num2num2Async, num2num2)(1, pn));
expectType<PS>(parapipe(num2num2Async, num2str2)(1, pn));

expectType<PN>(parapipe(identity2, identity2Async)(1, pn));
expectType<PN>(parapipe(num2num2, num2num2Async)(1, pn));
expectType<PS>(parapipe(num2num2, num2str2Async)(1, pn));

expectType<PN>(parapipe(identity2Async, identity2Async)(1, pn));
expectType<PN>(parapipe(num2num2Async, num2num2Async)(1, pn));
expectType<PS>(parapipe(num2num2Async, num2str2Async)(1, pn));

expectType<PN>(parapipe(identity2, identity2)(pn, 1));
expectType<PN>(parapipe(num2num2, num2num2)(pn, 1));
expectType<PS>(parapipe(num2num2, num2str2)(pn, 1));

expectType<PN>(parapipe(identity2Async, identity2)(pn, 1));
expectType<PN>(parapipe(num2num2Async, num2num2)(pn, 1));
expectType<PS>(parapipe(num2num2Async, num2str2)(pn, 1));

expectType<PN>(parapipe(identity2, identity2Async)(pn, 1));
expectType<PN>(parapipe(num2num2, num2num2Async)(pn, 1));
expectType<PS>(parapipe(num2num2, num2str2Async)(pn, 1));

expectType<PN>(parapipe(identity2Async, identity2Async)(pn, 1));
expectType<PN>(parapipe(num2num2Async, num2num2Async)(pn, 1));
expectType<PS>(parapipe(num2num2Async, num2str2Async)(pn, 1));

expectType<PN>(parapipe(identity2, identity2)(pn, pn));
expectType<PN>(parapipe(num2num2, num2num2)(pn, pn));
expectType<PS>(parapipe(num2num2, num2str2)(pn, pn));

expectType<PN>(parapipe(identity2Async, identity2)(pn, pn));
expectType<PN>(parapipe(num2num2Async, num2num2)(pn, pn));
expectType<PS>(parapipe(num2num2Async, num2str2)(pn, pn));

expectType<PN>(parapipe(identity2, identity2Async)(pn, pn));
expectType<PN>(parapipe(num2num2, num2num2Async)(pn, pn));
expectType<PS>(parapipe(num2num2, num2str2Async)(pn, pn));

expectType<PN>(parapipe(identity2Async, identity2Async)(pn, pn));
expectType<PN>(parapipe(num2num2Async, num2num2Async)(pn, pn));
expectType<PS>(parapipe(num2num2Async, num2str2Async)(pn, pn));

expectType<PN>(parapipe(identity2, identity2, identity2)(1, 1));
expectType<PN>(parapipe(num2num2, num2num2, num2num2)(1, 1));
expectType<PS>(parapipe(num2num2, num2num2, num2str2)(1, 1));

expectType<PN>(parapipe(identity2Async, identity2, identity2)(1, 1));
expectType<PN>(parapipe(num2num2Async, num2num2, num2num2)(1, 1));
expectType<PS>(parapipe(num2num2Async, num2num2, num2str2)(1, 1));

expectType<PN>(parapipe(identity2, identity2Async, identity2)(1, 1));
expectType<PN>(parapipe(num2num2, num2num2Async, num2num2)(1, 1));
expectType<PS>(parapipe(num2num2, num2num2Async, num2str2)(1, 1));

expectType<PN>(parapipe(identity2, identity2, identity2Async)(1, 1));
expectType<PN>(parapipe(num2num2, num2num2, num2num2Async)(1, 1));
expectType<PS>(parapipe(num2num2, num2num2, num2str2Async)(1, 1));

expectType<PN>(parapipe(identity2Async, identity2Async, identity2)(1, 1));
expectType<PN>(parapipe(num2num2Async, num2num2Async, num2num2)(1, 1));
expectType<PS>(parapipe(num2num2Async, num2num2Async, num2str2)(1, 1));

expectType<PN>(parapipe(identity2, identity2Async, identity2Async)(1, 1));
expectType<PN>(parapipe(num2num2, num2num2Async, num2num2Async)(1, 1));
expectType<PS>(parapipe(num2num2, num2num2Async, num2str2Async)(1, 1));

expectType<PN>(parapipe(identity2Async, identity2, identity2Async)(1, 1));
expectType<PN>(parapipe(num2num2Async, num2num2, num2num2Async)(1, 1));
expectType<PS>(parapipe(num2num2Async, num2num2, num2str2Async)(1, 1));

expectType<PN>(parapipe(identity2Async, identity2Async, identity2Async)(1, 1));
expectType<PN>(parapipe(num2num2Async, num2num2Async, num2num2Async)(1, 1));
expectType<PS>(parapipe(num2num2Async, num2num2Async, num2str2Async)(1, 1));

expectType<PN>(parapipe(identity2, identity2, identity2)(1, pn));
expectType<PN>(parapipe(num2num2, num2num2, num2num2)(1, pn));
expectType<PS>(parapipe(num2num2, num2num2, num2str2)(1, pn));

expectType<PN>(parapipe(identity2Async, identity2, identity2)(1, pn));
expectType<PN>(parapipe(num2num2Async, num2num2, num2num2)(1, pn));
expectType<PS>(parapipe(num2num2Async, num2num2, num2str2)(1, pn));

expectType<PN>(parapipe(identity2, identity2Async, identity2)(1, pn));
expectType<PN>(parapipe(num2num2, num2num2Async, num2num2)(1, pn));
expectType<PS>(parapipe(num2num2, num2num2Async, num2str2)(1, pn));

expectType<PN>(parapipe(identity2, identity2, identity2Async)(1, pn));
expectType<PN>(parapipe(num2num2, num2num2, num2num2Async)(1, pn));
expectType<PS>(parapipe(num2num2, num2num2, num2str2Async)(1, pn));

expectType<PN>(parapipe(identity2Async, identity2Async, identity2)(1, pn));
expectType<PN>(parapipe(num2num2Async, num2num2Async, num2num2)(1, pn));
expectType<PS>(parapipe(num2num2Async, num2num2Async, num2str2)(1, pn));

expectType<PN>(parapipe(identity2, identity2Async, identity2Async)(1, pn));
expectType<PN>(parapipe(num2num2, num2num2Async, num2num2Async)(1, pn));
expectType<PS>(parapipe(num2num2, num2num2Async, num2str2Async)(1, pn));

expectType<PN>(parapipe(identity2Async, identity2, identity2Async)(1, pn));
expectType<PN>(parapipe(num2num2Async, num2num2, num2num2Async)(1, pn));
expectType<PS>(parapipe(num2num2Async, num2num2, num2str2Async)(1, pn));

expectType<PN>(parapipe(identity2Async, identity2Async, identity2Async)(1, pn));
expectType<PN>(parapipe(num2num2Async, num2num2Async, num2num2Async)(1, pn));
expectType<PS>(parapipe(num2num2Async, num2num2Async, num2str2Async)(1, pn));

expectType<PN>(parapipe(identity2, identity2, identity2)(pn, 1));
expectType<PN>(parapipe(num2num2, num2num2, num2num2)(pn, 1));
expectType<PS>(parapipe(num2num2, num2num2, num2str2)(pn, 1));

expectType<PN>(parapipe(identity2Async, identity2, identity2)(pn, 1));
expectType<PN>(parapipe(num2num2Async, num2num2, num2num2)(pn, 1));
expectType<PS>(parapipe(num2num2Async, num2num2, num2str2)(pn, 1));

expectType<PN>(parapipe(identity2, identity2Async, identity2)(pn, 1));
expectType<PN>(parapipe(num2num2, num2num2Async, num2num2)(pn, 1));
expectType<PS>(parapipe(num2num2, num2num2Async, num2str2)(pn, 1));

expectType<PN>(parapipe(identity2, identity2, identity2Async)(pn, 1));
expectType<PN>(parapipe(num2num2, num2num2, num2num2Async)(pn, 1));
expectType<PS>(parapipe(num2num2, num2num2, num2str2Async)(pn, 1));

expectType<PN>(parapipe(identity2Async, identity2Async, identity2)(pn, 1));
expectType<PN>(parapipe(num2num2Async, num2num2Async, num2num2)(pn, 1));
expectType<PS>(parapipe(num2num2Async, num2num2Async, num2str2)(pn, 1));

expectType<PN>(parapipe(identity2, identity2Async, identity2Async)(pn, 1));
expectType<PN>(parapipe(num2num2, num2num2Async, num2num2Async)(pn, 1));
expectType<PS>(parapipe(num2num2, num2num2Async, num2str2Async)(pn, 1));

expectType<PN>(parapipe(identity2Async, identity2, identity2Async)(pn, 1));
expectType<PN>(parapipe(num2num2Async, num2num2, num2num2Async)(pn, 1));
expectType<PS>(parapipe(num2num2Async, num2num2, num2str2Async)(pn, 1));

expectType<PN>(parapipe(identity2Async, identity2Async, identity2Async)(pn, 1));
expectType<PN>(parapipe(num2num2Async, num2num2Async, num2num2Async)(pn, 1));
expectType<PS>(parapipe(num2num2Async, num2num2Async, num2str2Async)(pn, 1));

expectType<PN>(parapipe(identity2, identity2, identity2)(pn, pn));
expectType<PN>(parapipe(num2num2, num2num2, num2num2)(pn, pn));
expectType<PS>(parapipe(num2num2, num2num2, num2str2)(pn, pn));

expectType<PN>(parapipe(identity2Async, identity2, identity2)(pn, pn));
expectType<PN>(parapipe(num2num2Async, num2num2, num2num2)(pn, pn));
expectType<PS>(parapipe(num2num2Async, num2num2, num2str2)(pn, pn));

expectType<PN>(parapipe(identity2, identity2Async, identity2)(pn, pn));
expectType<PN>(parapipe(num2num2, num2num2Async, num2num2)(pn, pn));
expectType<PS>(parapipe(num2num2, num2num2Async, num2str2)(pn, pn));

expectType<PN>(parapipe(identity2, identity2, identity2Async)(pn, pn));
expectType<PN>(parapipe(num2num2, num2num2, num2num2Async)(pn, pn));
expectType<PS>(parapipe(num2num2, num2num2, num2str2Async)(pn, pn));

expectType<PN>(parapipe(identity2Async, identity2Async, identity2)(pn, pn));
expectType<PN>(parapipe(num2num2Async, num2num2Async, num2num2)(pn, pn));
expectType<PS>(parapipe(num2num2Async, num2num2Async, num2str2)(pn, pn));

expectType<PN>(parapipe(identity2, identity2Async, identity2Async)(pn, pn));
expectType<PN>(parapipe(num2num2, num2num2Async, num2num2Async)(pn, pn));
expectType<PS>(parapipe(num2num2, num2num2Async, num2str2Async)(pn, pn));

expectType<PN>(parapipe(identity2Async, identity2, identity2Async)(pn, pn));
expectType<PN>(parapipe(num2num2Async, num2num2, num2num2Async)(pn, pn));
expectType<PS>(parapipe(num2num2Async, num2num2, num2str2Async)(pn, pn));

expectType<PN>(parapipe(identity2Async, identity2Async, identity2Async)(pn, pn));
expectType<PN>(parapipe(num2num2Async, num2num2Async, num2num2Async)(pn, pn));
expectType<PS>(parapipe(num2num2Async, num2num2Async, num2str2Async)(pn, pn));
