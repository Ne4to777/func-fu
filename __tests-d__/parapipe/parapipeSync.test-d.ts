import {expectType} from 'tsd';
import {parapipeSync} from '../../src/types';
import {N, PN, PS, S, num2num2, num2num2Async, num2str2, num2str2Async} from '../utils';

expectType<N>(parapipeSync(num2num2)(1));
expectType<S>(parapipeSync(num2str2)(1));

expectType<N>(parapipeSync(num2num2)(1, 1, 1));
expectType<S>(parapipeSync(num2str2)(1, 1, 1));

expectType<N>(parapipeSync(num2num2)(1, 1));
expectType<S>(parapipeSync(num2str2)(1, 1));

expectType<PN>(parapipeSync(num2num2Async)(1, 1));
expectType<PS>(parapipeSync(num2str2Async)(1, 1));

expectType<N>(parapipeSync(num2num2, num2num2)(1, 1));
expectType<S>(parapipeSync(num2num2, num2str2)(1, 1));

expectType<PN>(parapipeSync(num2num2, num2num2Async)(1, 1));
expectType<PS>(parapipeSync(num2num2, num2str2Async)(1, 1));

expectType<N>(parapipeSync(num2num2, num2num2, num2num2)(1, 1));
expectType<S>(parapipeSync(num2num2, num2num2, num2str2)(1, 1));

expectType<PN>(parapipeSync(num2num2, num2num2, num2num2Async)(1, 1));
expectType<PS>(parapipeSync(num2num2, num2num2, num2str2Async)(1, 1));
