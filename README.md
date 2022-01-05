# Func-fu

Compositions and combinations of functions. Sync, async and autodetect versions are present.

### Pipe

Reverse functions composition.

```pipe(f1, f2, f3)(x) equivalent to f3(f2(f1(x)))```

### Para

Parallel execution of functions with same argument.

```para(f1, f2, f3)(x) equivalent to [f1(x), f2(x), f3(x)]```

### Side

Side effect.

```side(f)(x) equivalent to {f(x); return x} ```