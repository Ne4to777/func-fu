export type SideSync = <X, R>(f: (x: X) => R) => (x: X) => X

export type Side = <X, R>(f: (x: X) => R) => (x: X | Promise<X>) => Promise<X>