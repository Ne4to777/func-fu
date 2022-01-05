import {throwError, tryCatch, tryCatchAsync, tryCatchSync} from '../src';

const incAsync = async (x: any) => x + 1
const incSync = (x: any) => x + 1

const throwSomeErrorSync = () => throwError(new Error('hoho'))
const throwSomeErrorAsync = () => throwError(Promise.reject(new Error('hoho')))

describe('Exception', () => {

    describe('tryCatch', () => {

        test('Sync', async () => {
            expect(() => tryCatchSync(throwSomeErrorSync)(0)).toThrow('hoho')
            expect(tryCatchSync(throwSomeErrorSync, (err, x) => incSync(x))(0)).toEqual(1)
        });

        test('Async', async () => {
            await expect(tryCatchAsync(throwSomeErrorAsync)(0)).rejects.toThrow('hoho')
            expect(await tryCatchAsync(throwSomeErrorAsync, (err, x) => incAsync(x))(0)).toEqual(1)
        });

        test('Auto', async () => {
            expect(() => tryCatch(throwSomeErrorSync)(0)).toThrow('hoho')
            expect(tryCatch(throwSomeErrorSync, (err, x) => incSync(x))(0)).toEqual(1)
            await expect(tryCatch(throwSomeErrorAsync)(0)).rejects.toThrow('hoho')
            expect(await tryCatch(throwSomeErrorAsync, (err, x) => incAsync(x))(0)).toEqual(1)
        });
    })
})