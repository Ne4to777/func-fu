import {ifElseSync, ifElse} from '../src/compositors/condition';

const trueSync = () => true
const trueAsync = async () => true
const falseSync = () => false
const falseAsync = async () => false
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
            expect(await ifElse(trueAsync, incAsync)(0)).toEqual(1)
            expect(await ifElse(falseAsync, incAsync)(0)).toEqual(0)
            expect(await ifElse(trueAsync, incAsync, decAsync)(0)).toEqual(1)
            expect(await ifElse(falseAsync, incAsync, decAsync)(0)).toEqual(-1)
        });
    })
})