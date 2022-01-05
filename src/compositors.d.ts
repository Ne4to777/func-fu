export type CurryFr = (...acc: any[]) => (n: number) => (f: (...xs: any[]) => any) => any
export type CurryAcc = (...acc: any[]) => (n: number) => (f: CurryFr) => (...xs: any[]) => any
export type Curry = (fR: CurryAcc) => CurryAcc

export type UncurryFr = (n: number) => (f: (x?: any) => any) => (...xs: any[]) => any
export type Uncurry = (fR: UncurryFr) => UncurryFr

export type ParallelizeFr = (acc: any) => (f: (x?: any) => any) => (n: number) => any
export type Parallelize = (fR: ParallelizeFr) => ParallelizeFr

export type AutocomposeY = (fR: any) => (n: number) => any
export type Autocompose = (f: any) => any

export type Pipe = (...fs: Array<(x?: any) => any>) => (x?: any) => any

export type Para = (...fs: Array<(x?: any) => any>) => (x?: any) => any

export type SideSync = <X>(f: (x?: X) => any) => (x?: X) => X | void
export type SideAsync = <X>(f: (x?: X) => any) => (x?: X) => Promise<X | void>
export type Side = <X>(f: (x?: X) => any) => (x?: X) => X | void | Promise<X | void>


