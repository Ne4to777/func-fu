import {expectType} from 'tsd';
import {mapSync} from '../../src/types';
import {N, S, T, num2true, num2str, identity} from '../utils';

expectType<N[]>(mapSync(identity)([1]))
expectType<T[]>(mapSync(num2true)([1]))
expectType<S[]>(mapSync(num2str)([1]))