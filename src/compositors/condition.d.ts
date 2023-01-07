type UnPromise<T> = T extends Promise<infer K> ? K : T

export type IfElseSync = {
    <X, OT>(
        p: (x: X) => true,
        onTrue: (x: X) => OT,
    ): (x: X) => OT
    <X, OT>(
        p: (x: X) => false,
        onTrue: (x: X) => OT,
    ): (x: X) => X
    <X, OT>(
        p: (x: X) => boolean,
        onTrue: (x: X) => OT,
    ): (x: X) => OT | X
    <X, OT, OF>(
        p: (x: X) => true,
        onTrue: (x: X) => OT,
        onFalse: (x: X) => OF
    ): (x: X) => OT
    <X, OT, OF>(
        p: (x: X) => false,
        onTrue: (x: X) => OT,
        onFalse: (x: X) => OF
    ): (x: X) => OF
    <X, OT, OF>(
        p: (x: X) => boolean,
        onTrue: (x: X) => OT,
        onFalse: (x: X) => OF
    ): (x: X) => OT | OF
}

export type IfElse = {
    <X, OT>(
        p: (x: X) => true | Promise<true>,
        onTrue: (x: X) => OT,
    ): (x: Promise<X> | X) => Promise<UnPromise<OT>>
    <X, OT>(
        p: (x: X) => false | Promise<false>,
        onTrue: (x: X) => OT,
    ): (x: Promise<X> | X) => Promise<UnPromise<X>>
    <X, OT>(
        p: (x: X) => boolean | Promise<boolean>,
        onTrue: (x: X) => OT,
    ): (x: Promise<X> | X) => Promise<UnPromise<OT | X>>
    <X, OT, OF>(
        p: (x: X) => true | Promise<true>,
        onTrue: (x: X) => OT,
        onFalse: (x: X) => OF
    ): (x: Promise<X> | X) => Promise<UnPromise<OT>>
    <X, OT, OF>(
        p: (x: X) => false | Promise<false>,
        onTrue: (x: X) => OT,
        onFalse: (x: X) => OF
    ): (x: Promise<X> | X) => Promise<UnPromise<OF>>
    <X, OT, OF>(
        p: (x: X) => boolean | Promise<boolean>,
        onTrue: (x: X) => OT,
        onFalse: (x: X) => OF
    ): (x: Promise<X> | X) => Promise<UnPromise<OT | OF>>
}
