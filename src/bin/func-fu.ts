// import {pipe, pipeAsync, pipeSync, startMeasure} from '..';
import {pipe, pipeAsync, pipeSync, startMeasure} from '../../dist';

const run = async () => {
    const incAsync = async x => x + 1
    const incSync = x => x + 1
    const fs = []
    for (let i = 0; i < 1e5; i += 1) {
        fs[i] = i < 5 ? incSync : incSync
    }
    const stopMeasure = startMeasure()
    console.log(
        pipe(...fs)(0)
    )
    stopMeasure()
}

run()

