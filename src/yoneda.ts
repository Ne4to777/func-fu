// class Yoneda {
//     constructor(F, f) {
//         this.F = F
//         this.f = f
//     }
//
//     map(f) {
//         return new Yoneda(this.F, B(f)(this.f))
//     }
//
//     extract() {
//         return this.F.map(this.f)
//     }
//
//     static of(F) {
//         return new Yoneda(F, I)
//     }
// }
//
// const arrayFunctor = [1, 2, 3]

// console.log(
//     Yoneda
//         .of(arrayFunctor)
//         .map(x => x + 1)
//         .map(x => x * 2)
//         .extract()
// ) // [ 4, 6, 8 ]


// class CoYoneda {
//     constructor(x, f) {
//         this.x = x
//         this.f = f
//     }
//
//     map(f) {
//         return new CoYoneda(this.x, B(f)(this.f))
//     }
//
//     run(F) {
//         return new F(this.x).map(this.f)
//     }
//
//     static of(x) {
//         return new CoYoneda(x, I)
//     }
//
// }
//
// const set = new Set([1, 2, 3])
//
// class SetFunctor {
//     constructor(set) {
//         this.set = set
//     }
//
//     map(f) {
//         const _set = new Set()
//         set.forEach(x => _set.add(f(x)))
//         return new SetFunctor(_set)
//     }
//
//     static of(x) {
//         return new SetFunctor(x)
//     }
// }

// console.log(
//     Yoneda
//         .of(SetFunctor.of(set))
//         .map(x => x + 1)
//         .map(x => x * 2)
//         .extract()
// )
//
// console.log(
//     CoYoneda
//         .of(set)
//         .map(x => x + 1)
//         .map(x => x * 2)
//         .run(SetFunctor)
// )