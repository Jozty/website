---
title: over function
description: a thorough tour of over function
---

## Over 
<br>

Returns the result of "setting" the portion of the given data structure `target`
focused by the given `lens` to the result of applying the given function `fn` to
the focused value.

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _over<T, F>(lens: Lens<T, F>, fn: FuncArr1<F, F>, target: T): T {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type Over_1<T, F> = (lens: Lens<T, F>) => T

type Over_2<T, F> = (fn: FuncArr1<F, F>) => T

type Over_3<T, F> = (target: T) => T

type Over_2_3<T, F> =
  & ((fn: FuncArr1<F, F>, target?: PH) => Over_3<T, F>)
  & ((fn: PH, target: T) => Over_2<T, F>)
  & ((fn: FuncArr1<F, F>, target: T) => T)

type Over_1_3<F> =
  & (<T>(lens: Lens<T, F>, target?: PH) => Over_3<T, F>)
  & (<T>(lens: PH, target: T) => Over_1<T, F>)
  & (<T>(lens: Lens<T, F>, target: T) => T)

type Over_1_2<T> =
  & (<F>(lens: Lens<T, F>, fn?: PH) => Over_2<T, F>)
  & (<F>(lens: PH, fn: FuncArr1<F, F>) => Over_1<T, F>)
  & (<F>(lens: Lens<T, F>, fn: FuncArr1<F, F>) => T)

type Over =
  & (<T, F>(lens: Lens<T, F>, fn?: PH, target?: PH) => Over_2_3<T, F>)
  & (<F>(lens: PH, fn: FuncArr1<F, F>, target?: PH) => Over_1_3<F>)
  & (<T>(lens: PH, fn: PH, target: T) => Over_1_2<T>)
  & (<T, F>(lens: Lens<T, F>, fn: FuncArr1<F, F>, target?: PH) => Over_3<T, F>)
  & (<T, F>(lens: Lens<T, F>, fn: PH, target: F) => Over_2<T, F>)
  & (<T, F>(lens: PH, fn: FuncArr1<F, F>, target: T) => Over_1<T, F>)
  & (<T, F>(lens: Lens<T, F>, fn: FuncArr1<F, F>, target: T) => T)
```
<br>

**Used types**
* [FuncArr1](/types/FuncArr1)
* [Lens](/types/Lens)

<br>

**Examples**
```typescript
import { lens, over, inc } from 'https://deno.land/x/fae/mod.ts'

const array = [1, 2, 3, 4, 5, 6, 7, 8]

// gets element at index `0`
function getter(a: number[]) {
  return a[0]
}

// returns a new array by setting passed value `val` at index `0`
function setter(val: number, a: number[]) {
  const x = [...a]
  x[0] = val
  return x
}

const l = lens(getter, setter)

over(l, inc, array)                     // [2, 2, 3, 4, 5, 6, 7, 8]
over(l, (a: number) => a + 100, array)  // [101, 2, 3, 4, 5, 6, 7, 8]

over(
  l,
  (a: number) => a.toExponential(),
  array as (string | number)[],
) // ["1e+0", 2, 3, 4, 5, 6, 7, 8]
```
