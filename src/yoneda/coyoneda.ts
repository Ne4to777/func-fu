import {B, I} from '../combinators';

type Functor = new (x: any) => {
    map: (y: any) => any
}
type Func = (x: any) => any

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class CoYoneda {
    x: any

    f: Func

    constructor(x: any, f: (y: any) => any) {
        this.x = x
        this.f = f
    }

    map(f: Func) {
        return new CoYoneda(this.x, B(f)(this.f))
    }

    run(F: Functor) {
        return new F(this.x).map(this.f)
    }

    static of(x: any) {
        return new CoYoneda(x, I)
    }

}
