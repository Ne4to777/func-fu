# Func-fu

Compositions and combinations of functions. Sync and async versions are present.

### PipeSync

Reverse functions composition (synchronous).

```pipeSync(f1, f2, f3)(x) equivalent to f3(f2(f1(x)))```

### Pipe

Reverse functions composition (asynchronous).

```
pipe(f1, f2, f3)(x) equivalent to 
Promise.resolve().then(() => x).then(f1).then(f2).then(f3)
```

### ParaSync

Parallel execution of functions with same argument (synchronous).

```para(f1, f2, f3)(x) equivalent to [f1(x), f2(x), f3(x)]```

### Para

Parallel execution of functions with same argument (asynchronous).

```
para(f1, f2, f3)(x) equivalent to
Promise.resolve().then(() => x).then(y => Promise.all([f1(y), f2(y), f3(y)]))
 ```

### SideSync

Side effect (synchronous).

```side(f)(x) equivalent to {f(x); return x} ```

### Side

Side effect (asynchronous).

```
side(f)(x) equivalent to
Promise.resolve().then(() => x).then(y => Promise.resolve(y).then(f).then(() => y))
```