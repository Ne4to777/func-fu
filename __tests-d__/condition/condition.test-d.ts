import {expectType} from 'tsd';
import {ifElse} from '../../src/types';
import {PN, PS, PT, pn, num2true, num2str, num2false, num2trueAsync, num2strAsync, num2falseAsync} from '../utils';

expectType<PT>(ifElse(num2true, num2true)(1, 1))
expectType<PT>(ifElse(num2true, num2true, num2str)(1, 1))

expectType<PT>(ifElse(num2true, num2true)(1))
expectType<PT>(ifElse(num2true, num2true, num2str)(1))

expectType<PN>(ifElse(num2false, num2true)(1))
expectType<PS>(ifElse(num2false, num2true, num2str)(1))

expectType<PT>(ifElse(num2trueAsync, num2trueAsync)(1))
expectType<PT>(ifElse(num2trueAsync, num2trueAsync, num2strAsync)(1))

expectType<PN>(ifElse(num2falseAsync, num2trueAsync)(1))
expectType<PS>(ifElse(num2falseAsync, num2trueAsync, num2strAsync)(1))

expectType<PT>(ifElse(num2true, num2true)(pn))
expectType<PT>(ifElse(num2true, num2true, num2str)(pn))

expectType<PN>(ifElse(num2false, num2true)(pn))
expectType<PS>(ifElse(num2false, num2true, num2str)(pn))

expectType<PT>(ifElse(num2trueAsync, num2trueAsync)(pn))
expectType<PT>(ifElse(num2trueAsync, num2trueAsync, num2strAsync)(pn))

expectType<PN>(ifElse(num2falseAsync, num2trueAsync)(pn))
expectType<PS>(ifElse(num2falseAsync, num2trueAsync, num2strAsync)(pn))
