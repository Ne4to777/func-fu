import {MapSync, Map} from './array.d'
import {pipe} from './pipe';
import {promiseAll} from '../utils';

export const mapSync: MapSync = f => xs => xs.map(f)

export const map: Map = f => pipe(
    promiseAll,
    mapSync(f),
    promiseAll
)