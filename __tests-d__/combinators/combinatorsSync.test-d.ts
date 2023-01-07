import {expectType} from 'tsd';
import {I, K, S, B, A, T, W, C, P} from '../../src/types';
import {num2num, num2str, num2str2C} from '../utils';

expectType<1>(I(1))
expectType<number>(K(1)(2))
expectType<string>(S(num2str2C)(num2num)(1))
expectType<string>(B(num2str)(num2num)(1))
expectType<number>(A(num2num)(1))
expectType<number>(T(1)(num2num))
expectType<string>(W(num2str2C)(1))
expectType<string>(C(num2str2C)(1)(1))
expectType<string>(P(num2str2C)(num2num)(1)(3))
