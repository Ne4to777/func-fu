import {ap, chain, compose, contramap, extend, extract, map, of, equals} from '../src/adt';
import {B, I, T, C} from '../src/combinators'

declare global {
    namespace jest {
        interface Matchers<R> {
            equals(a: any, value: any): R;
        }
    }
}

const extractUncurried = T(C(extract))

expect.extend({
    equals: (a, b, value) => value !== undefined ? ({
        message: () => `expected function ${a} to be equal to function ${b} called with value ${value}`,
        pass: extractUncurried(a)(value) === extractUncurried(b)(value)
    }) : ({
        message: () => `expected ${a} to be equal to ${b}`,
        pass: equals(a)(b)
    })
})

const inc = (x: number) => x + 1
const double = (x: number) => x * 2
const square = (x: number) => x ** 2
const value = 3
const a = of(value)
const f = inc
const g = double
const h = square
const u = of(f)
const v = of(g)
const w = of(h)
const m = B(of)(h)
const n = B(of)(g)
const p = B(inc)(extractUncurried)

const expectEquals = (received: any, expected: any, x?: any) => expect(received).equals(expected, x);
const expectToBe = (received: any, expected: any) => expect(received).toBe(expected);

describe('ADT', () => {

    describe('Covariant', () => {

        test('Identity', () => expectEquals(
            a,
            map(a)(I)
        ));

        test('Composition', () => expectEquals(
            map(map(a)(f))(g),
            map(a)(B(g)(f))
        ));
    })

    describe('Contravariant', () => {

        test('Identity', () => expectEquals(
            u,
            contramap(u)(I),
            value
        ));

        test('Composition', () => expectEquals(
            contramap(contramap(u)(f))(g),
            contramap(u)(B(f)(g)),
            value
        ));
    })

    describe('Apply', () => {

        test('Composition', () => expectEquals(
            ap(ap(a)(u))(v),
            ap(a)(ap(u)(map(v)(B)))
        ));
    })

    describe('Applicative', () => {

        test('Identity', () => expectEquals(
            a,
            ap(a)(of(I))
        ));

        test('Homomorphism', () => expectEquals(
            ap(a)(of(f)),
            of(f(value))
        ));

        test('Interchange', () => expectEquals(
            ap(a)(u),
            ap(u)(of(T(value)))
        ));
    })

    describe('Chain', () => {

        test('Associativity', () => expectEquals(
            chain(chain(a)(m))(n),
            chain(a)(B(C(chain)(n))(m))
        ));
    })

    describe('Monad', () => {

        test('Left identity', () => expectEquals(
            m(value),
            chain(a)(m)
        ))

        test('Right identity', () => expectEquals(
            a,
            chain(a)(of)
        ));
    })

    describe('Extend', () => {

        test('Associativity', () => expectEquals(
            extend(extend(a)(g))(f),
            extend(a)(B(f)(C(extend)(g)))
        ));
    })

    describe('Comonad', () => {

        test('Left identity', () => expectEquals(
            a,
            extend(a)(extractUncurried)
        ));

        test('Right identity', () => expectToBe(
            p(a),
            extractUncurried(extend(a)(p))
        ));
    })

    describe('Semigroupoid', () => {

        test('Associativity', () => expectEquals(
            compose(compose(u)(v))(w),
            compose(u)(compose(v)(w)),
            value
        ));
    })
})
