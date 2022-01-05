import {
    ifElseSync,
    ifElseAsync,
    ifElse,
    ifDefaultSync,
    ifDefaultAsync,
    ifDefault,
} from '../src';

const trueSync = () => true
const trueAsync = async () => true
const falseSync = () => false
const falseAsync = async () => false
const nullSync = () => null
const nullAsync = async () => null
const incAsync = async (x: any) => x + 1
const incSync = (x: any) => x + 1
const decAsync = async (x: any) => x - 1
const decSync = (x: any) => x - 1

describe('Condition', () => {

    describe('ifElse', () => {

        test('Sync', () => {
            expect(ifElseSync(trueSync, incSync)(0)).toEqual(1)
            expect(ifElseSync(falseSync, incSync)(0)).toEqual(0)
            expect(ifElseSync(trueSync, incSync, decSync)(0)).toEqual(1)
            expect(ifElseSync(falseSync, incSync, decSync)(0)).toEqual(-1)
        });

        test('Async', async () => {
            expect(await ifElseAsync(trueAsync, incAsync)(0)).toEqual(1)
            expect(await ifElseAsync(falseAsync, incAsync)(0)).toEqual(0)
            expect(await ifElseAsync(trueAsync, incAsync, decAsync)(0)).toEqual(1)
            expect(await ifElseAsync(falseAsync, incAsync, decAsync)(0)).toEqual(-1)
        });

        test('Auto', async () => {
            expect(ifElse(trueSync, incSync)(0)).toEqual(1)
            expect(ifElse(falseSync, incSync)(0)).toEqual(0)
            expect(ifElse(trueSync, incSync, decSync)(0)).toEqual(1)
            expect(ifElse(falseSync, incSync, decSync)(0)).toEqual(-1)
            expect(await ifElse(trueAsync, incAsync)(0)).toEqual(1)
            expect(await ifElse(falseAsync, incAsync)(0)).toEqual(0)
            expect(await ifElse(trueAsync, incAsync, decAsync)(0)).toEqual(1)
            expect(await ifElse(falseAsync, incAsync, decAsync)(0)).toEqual(-1)
        });
    })
    describe('ifDefault', () => {

        test('Sync', async () => {
            expect(ifDefaultSync(incSync, decSync)(0)).toEqual(1)
            expect(ifDefaultSync(nullSync, incSync)(0)).toEqual(1)
        });

        test('Async', async () => {
            expect(await ifDefaultAsync(incAsync, decAsync)(0)).toEqual(1)
            expect(await ifDefaultAsync(nullAsync, incAsync)(0)).toEqual(1)
        });

        test('Auto', async () => {
            expect(ifDefault(incSync, decSync)(0)).toEqual(1)
            expect(ifDefault(nullSync, incSync)(0)).toEqual(1)
            expect(await ifDefault(incAsync, decAsync)(0)).toEqual(1)
            expect(await ifDefault(nullAsync, incAsync)(0)).toEqual(1)
        });
    })
})