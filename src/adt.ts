import {Ap, Chain, Compose, Contramap, Extend, Extract, Map, Of, Equals, Traverse} from './adt.d'
import {A, B, C, K, P, I, T} from './combinators'

const extractUncurried = T(C(I))

/**
 * equals :: Setoid a => a ~> a -> Boolean
 */
export const equals: Equals = a => b => extractUncurried(a) === extractUncurried(b)
/**
 * of :: Applicative f => a -> f a
 */
export const of: Of = K
/**
 * extract :: Comonad w => w a ~> () -> a
 */
export const extract: Extract = I
/**
 * map :: Covariant f => f a ~> (a -> b) -> f b
 */
export const map: Map = B(C(B(of)))(extractUncurried)
/**
 * contramap :: Contravariant f => f a ~> (b -> a) -> f b
 */
export const contramap: Contramap = B(B(of))(B(B)(extractUncurried))
/**
 * ap :: Apply f => f a ~> f (a -> b) -> f b
 */
export const ap: Ap = C(B(B(of))(P(A)(extractUncurried)))
/**
 * chain :: Chain m => m a ~> (a -> m b) -> m b
 */
export const chain: Chain = C(C(B)(extractUncurried))
/**
 * extend :: Extend w => w a ~> (w a -> b) -> w b
 */
export const extend: Extend = C(B(of))
/**
 * compose :: Semigroupoid c => c i j ~> c j k -> c i k
 */
export const compose: Compose = B(B(of))(C(P(B)(extractUncurried)))
/**
 * traverse :: Applicative f, Traversable t => t a -> (TypeRep f, a -> f b) -> f (t b)
 */
export const traverse: Traverse = ta => (TR, f) => of(TR.of(extract(f(extract(ta)()))()))
