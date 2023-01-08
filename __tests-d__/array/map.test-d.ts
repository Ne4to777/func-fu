import {expectType} from 'tsd';
import {map} from '../../src/types';
import {P, N, S, T, pn, num2true, num2str, identity} from '../utils';

expectType<P<N[]>>(map(identity)([1]))
expectType<P<T[]>>(map(num2true)([1]))
expectType<P<S[]>>(map(num2str)([1]))

expectType<P<N[]>>(map(identity)([pn]))
expectType<P<T[]>>(map(num2true)([pn]))
expectType<P<S[]>>(map(num2str)([pn]))

expectType<P<N[]>>(map(identity)(Promise.resolve([1])))
expectType<P<T[]>>(map(num2true)(Promise.resolve([1])))
expectType<P<S[]>>(map(num2str)(Promise.resolve([1])))

expectType<P<N[]>>(map(identity)(Promise.resolve([pn])))
expectType<P<T[]>>(map(num2true)(Promise.resolve([pn])))
expectType<P<S[]>>(map(num2str)(Promise.resolve([pn])))

