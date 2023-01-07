import {B, I} from '../combinators';

type Functor = {
    map: (y: any) => any
}
type Func = (x: any) => any

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Yoneda {
    F: Functor

    f: Func

    constructor(F: Functor, f: Func) {
        this.F = F
        this.f = f
    }

    map(f: Func) {
        return new Yoneda(this.F, B(f)(this.f))
    }

    extract() {
        return this.F.map(this.f)
    }

    static of(F: Functor) {
        return new Yoneda(F, I)
    }
}
