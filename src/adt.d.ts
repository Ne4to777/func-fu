export type Of = (x: any) => () => any
export type Extract = (wa: () => any) => any
export type Equals = (a: any) => (b: any) => boolean
export type Map = (fa: any) => (g: (x: any) => any) => any
export type Contramap = (fa: any) => (g: (x: any) => any) => any
export type Ap = (fa: any) => (fg: any) => any
export type Chain = (ma: any) => (g: (x: any) => any) => any
export type Extend = (wa: any) => (g: (wa: any) => any) => any
export type Compose = (cij: any) => (cjk: any) => any
export type Traverse = (ta: any) => (TR: any, f: any) => any
