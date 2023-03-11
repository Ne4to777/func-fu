export const delay = (n: number) => (f: (...xs: any[]) => any): any => setTimeout(f, n)

const {hrtime, memoryUsage} = process
const {log} = console
const {round} = Math

const DELIMITER = '======================='

const timeFormatter = ([sec, nano]: [number, number]) => `time: ${sec + nano / 1e9} s`
const memoryItemFormatter = ([key, value]: [string, number]) => `${key}: ${round(value / 1048576 * 100) / 100} MB`
const metricsFormatter = ([time, memo]: [string, string[]]) => [DELIMITER, ...memo, time, DELIMITER].join('\n')

export const startMeasure: any = () => (startTime => () => log(metricsFormatter([
    timeFormatter(hrtime(startTime)),
    Object.entries(memoryUsage()).map(memoryItemFormatter)
])))(hrtime())

export const typeOf = <X>(x: X): string => Object.prototype.toString.call(x).slice(8, -1).toLowerCase()

export const promiseAll: typeof Promise.all = Function.prototype.call.bind(Promise.all.bind)