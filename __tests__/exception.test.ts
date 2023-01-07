import {throwErrorSync, throwError, tryCatchSync, tryCatch} from '../src/compositors/exception';
import {I} from '../src/combinators';

const incAsync = async (x: any) => x + 1
const incSync = (x: any) => x + 1

const throwSomeErrorSync = throwErrorSync((x: any) => new Error(x))
const throwSomeError = throwError((x: any) => Promise.reject(new Error(x)))

describe('Exception', () => {

    describe('tryCatch', () => {

        test('Sync', async () => {
            expect(() => tryCatchSync(throwSomeErrorSync, throwErrorSync(I))('hoho')).toThrow('hoho')
            expect(tryCatchSync(throwSomeErrorSync, (err, x) => incSync(x))(0)).toEqual(1)
        });

        test('Async', async () => {
            await expect(tryCatch(throwSomeError, throwError(I))('hoho')).rejects.toThrow('hoho')
            expect(await tryCatch(throwSomeError, (err, x) => incAsync(x))(0)).toEqual(1)
        });
    })
})