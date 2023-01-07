import {pipe, pipeSync} from '../src/compositors/pipe';
import {para, paraSync} from '../src/compositors/para';
import {side, sideSync} from '../src/compositors/side';

const incSync = (x: any) => x + 1
const incAsync = async (x: any) => x + 1
const fsSync: any[] = []
const fsAsync: any[] = []
const fsMixed: any[] = []

const size = 1e1

for (let i = 0; i < size; i += 1) {
    fsSync[i] = incSync
}
for (let i = 0; i < size; i += 1) {
    fsAsync[i] = incAsync
}
for (let i = 0; i < size; i += 1) {
    fsMixed[i] = i < size / 2 ? incSync : incAsync
}

describe('Compositors', () => {

    describe('pipe', () => {

        test('Sync', () => {
            expect(pipeSync(...fsSync)(0)).toEqual(size)
        });

        test('Async', async () => {
            expect(await pipe(...fsSync)(0)).toEqual(size)
            expect(await pipe(...fsAsync)(0)).toEqual(size)
            expect(await pipe(...fsMixed)(0)).toEqual(size)
        });
    })
    describe('para', () => {

        test('Sync', () => {
            expect(paraSync(...fsSync)(0)).toHaveLength(size)
        });

        test('Async', async () => {
            expect(await para(...fsSync)(0)).toHaveLength(size)
            expect(await para(...fsAsync)(0)).toHaveLength(size)
            expect(await para(...fsMixed)(0)).toHaveLength(size)
        });
    })
    describe('side', () => {

        test('Sync', () => {
            expect(sideSync(incSync)(0)).toEqual(0)
        });

        test('Async', async () => {
            expect(await side(incSync)(0)).toEqual(0)
            expect(await side(incAsync)(0)).toEqual(0)
        });
    })
})