export type IfElseSync = {
    <X, Y, Z, OT>(
        p: (x: X, y?: Y, z?: Z) => true,
        onTrue: (x: X, y?: Y, z?: Z) => OT,
    ): (x: X, y?: Y, z?: Z) => OT
    <X, Y, Z, OT>(
        p: (x: X, y?: Y, z?: Z) => false,
        onTrue: (x: X, y?: Y, z?: Z) => OT,
    ): (x: X, y?: Y, z?: Z) => X
    <X, Y, Z, OT>(
        p: (x: X, y?: Y, z?: Z) => boolean,
        onTrue: (x: X, y?: Y, z?: Z) => OT,
    ): (x: X, y?: Y, z?: Z) => OT | X
    <X, Y, Z, OT, OF>(
        p: (x: X, y?: Y, z?: Z) => true,
        onTrue: (x: X, y?: Y, z?: Z) => OT,
        onFalse: (x: X, y?: Y, z?: Z) => OF
    ): (x: X, y?: Y, z?: Z) => OT
    <X, Y, Z, OT, OF>(
        p: (x: X, y?: Y, z?: Z) => false,
        onTrue: (x: X, y?: Y, z?: Z) => OT,
        onFalse: (x: X, y?: Y, z?: Z) => OF
    ): (x: X, y?: Y, z?: Z) => OF
    <X, Y, Z, OT, OF>(
        p: (x: X, y?: Y, z?: Z) => boolean,
        onTrue: (x: X, y?: Y, z?: Z) => OT,
        onFalse: (x: X, y?: Y, z?: Z) => OF
    ): (x: X, y?: Y, z?: Z) => OT | OF
}

export type IfElse = {
    <X, Y, Z, OT>(
        p: (x: Awaited<X>, y: Awaited<Y>, z: Awaited<Z>) => true | Promise<true>,
        onTrue: (x: Awaited<X>, y: Awaited<Y>, z: Awaited<Z>) => OT,
    ): (x: Promise<X> | X, y?: Promise<Y> | Y, z?: Promise<Z> | Z) => Promise<Awaited<OT>>
    <X, Y, Z, OT>(
        p: (x: Awaited<X>, y: Awaited<Y>, z: Awaited<Z>) => false | Promise<false>,
        onTrue: (x: Awaited<X>, y: Awaited<Y>, z: Awaited<Z>) => OT,
    ): (x: Promise<X> | X, y?: Promise<Y> | Y, z?: Promise<Z> | Z) => Promise<Awaited<X>>
    <X, Y, Z, OT>(
        p: (x: Awaited<X>, y: Awaited<Y>, z: Awaited<Z>) => boolean | Promise<boolean>,
        onTrue: (x: Awaited<X>, y: Awaited<Y>, z: Awaited<Z>) => OT,
    ): (x: Promise<X> | X, y?: Promise<Y> | Y, z?: Promise<Z> | Z) => Promise<Awaited<OT | X>>
    <X, Y, Z, OT, OF>(
        p: (x: Awaited<X>, y: Awaited<Y>, z: Awaited<Z>) => true | Promise<true>,
        onTrue: (x: Awaited<X>, y: Awaited<Y>, z: Awaited<Z>) => OT,
        onFalse: (x: Awaited<X>, y: Awaited<Y>, z: Awaited<Z>) => OF
    ): (x: Promise<X> | X, y?: Promise<Y> | Y, z?: Promise<Z> | Z) => Promise<Awaited<OT>>
    <X, Y, Z, OT, OF>(
        p: (x: Awaited<X>, y: Awaited<Y>, z: Awaited<Z>) => false | Promise<false>,
        onTrue: (x: Awaited<X>, y: Awaited<Y>, z: Awaited<Z>) => OT,
        onFalse: (x: Awaited<X>, y: Awaited<Y>, z: Awaited<Z>) => OF
    ): (x: Promise<X> | X, y?: Promise<Y> | Y, z?: Promise<Z> | Z) => Promise<Awaited<OF>>
    <X, Y, Z, OT, OF>(
        p: (x: Awaited<X>, y: Awaited<Y>, z: Awaited<Z>) => boolean | Promise<boolean>,
        onTrue: (x: Awaited<X>, y: Awaited<Y>, z: Awaited<Z>) => OT,
        onFalse: (x: Awaited<X>, y: Awaited<Y>, z: Awaited<Z>) => OF
    ): (x: Promise<X> | X, y?: Promise<Y> | Y, z?: Promise<Z> | Z) => Promise<Awaited<OT | OF>>
}
