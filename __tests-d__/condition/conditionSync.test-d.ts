import {expectType} from 'tsd';
import {ifElseSync} from '../../src/types';
import {N, S, T, num2true, num2false, num2str} from '../utils';

expectType<T>(ifElseSync(num2true, num2true)(1, 1))
expectType<T>(ifElseSync(num2true, num2true, num2str)(1, 1))

expectType<T>(ifElseSync(num2true, num2true)(1))
expectType<T>(ifElseSync(num2true, num2true, num2str)(1))

expectType<N>(ifElseSync(num2false, num2true)(1))
expectType<S>(ifElseSync(num2false, num2true, num2str)(1))
