export type IfElseSync = <X>(p: (x?: X) => boolean, onTrue: (x?: X) => any, onFalse?: (x?: X) => any) => (x?: X) => any
export type IfElseAsync = <X>(
    p: (x?: X) => Promise<boolean>,
    onTrue: (x?: X) => any,
    onFalse?: (x?: X) => any
) => (x?: X) => Promise<any>
export type IfElse = <X>(
    p: (x?: X) => boolean | Promise<boolean>,
    onTrue: (x?: X) => any,
    onFalse?: (x?: X) => any
) => (x?: X) => any

export type IfDefault = (f: (x?: any) => any, d: (x?: any) => any) => (x: any) => any