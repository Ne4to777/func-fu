export type MapSync = <X, R>(f: (x: X, i?: number, ys?: X[]) => R) => (xs: X[]) => R[]
export type Map = <X, R>(f: (x: any, i?: number, ys?: X[]) => R | Promise<R>) => (xs: X[]) => Promise<R[]>
