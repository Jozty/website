---
title: set function
description: a thorough tour of set function
---

## Set 
<br>

Returns the result of "setting" the portion of the given data structure `target`
focused by the given `len`s to the given `value`.

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _set<T, F>(lens: Lens<T, F>, value: F, target: T): T {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type Set_1<T, F> = (lens: Lens<T, F>) => T

type Set_2<T, F> = (value: F) => T

type Set_3<T, F> = (target: T) => T

type Set_2_3<T, F> =
  & ((value: F, target?: PH) => Set_3<T, F>)
  & ((value: PH, target: T) => Set_2<T, F>)
  & ((value: F, target: T) => T)

type Set_1_3<F> =
  & (<T>(lens: Lens<T, F>, target?: PH) => Set_3<T, F>)
  & (<T>(lens: PH, target: T) => Set_1<T, F>)
  & (<T>(lens: Lens<T, F>, target: T) => T)

type Set_1_2<T> =
  & (<F>(lens: Lens<T, F>, value?: PH) => Set_2<T, F>)
  & (<F>(lens: PH, value: F) => Set_1<T, F>)
  & (<F>(lens: Lens<T, F>, value: F) => T)

type Set =
  & (<T, F>(lens: Lens<T, F>, value?: PH, target?: PH) => Set_2_3<T, F>)
  & (<F>(lens: PH, value: F, target?: PH) => Set_1_3<F>)
  & (<T>(lens: PH, value: PH, target: T) => Set_1_2<T>)
  & (<T, F>(lens: Lens<T, F>, value: F, target?: PH) => Set_3<T, F>)
  & (<T, F>(lens: Lens<T, F>, value: PH, target: F) => Set_2<T, F>)
  & (<T, F>(lens: PH, value: F, target: T) => Set_1<T, F>)
  & (<T, F>(lens: Lens<T, F>, value: F, target: T) => T)
```
<br>

**Used types**
* [Lens](/types/Lens)

<br>

**Examples**
```typescript
import { lens, set } from 'https://deno.land/x/fae/mod.ts'

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

set(l, 10, array)                     // [10, 2, 3, 4, 5, 6, 7, 8]

set(
  l,
  'abc',
  array as (string | number)[],
) // ['abc', 2, 3, 4, 5, 6, 7, 8]
```
