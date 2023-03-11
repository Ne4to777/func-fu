import {MapSync, Map} from '../types/array'
import {pipe} from './pipe';
import {promiseAll} from '../utils';

export const mapSync: MapSync = f => xs => xs.map(f)

export const map: Map = f => pipe<any, any, any>(
    promiseAll,
    mapSync(f),
    promiseAll
)
