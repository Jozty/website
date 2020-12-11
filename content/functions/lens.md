---
title: Lens function
description: Gives the lens for the given getter functions
keywords: Lens
---

## Lens 
<br>

Returns a lens for the given getter and setter functions. The `getter` "gets"
the value of the focus; the setter "sets" the value of the focus. The `setter`
should not mutate the data structure.

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _lens<T, F>(getter: LensGetter<T, F>, setter: LensSetter<T, F>): Lens<T, F> {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type LensF_2<T, F> = (setter: LensSetter<T, F>) => Lens<T, F>

type LensF_1<T, F> = (getter: LensGetter<T, F>) => Lens<T, F>

type LensF =
  & (<T, F>(getter: LensGetter<T, F>, setter?: PH) => LensF_2<T, F>)
  & (<T, F>(getter: PH, setter: LensSetter<T, F>) => LensF_1<T, F>)
  & (<T, F>(getter: LensGetter<T, F>, setter: LensSetter<T, F>) => Lens<T, F>)
```
<br>

**Used types**
* [GetTransformer](/types/GetTransformer)
* [Lens](/types/Lens)
* [LensGetter](/types/LensGetter)
* [LensSetter](/types/LensSetter)
* [LensTransformer](/types/LensTransformer)

<br>

**Examples**
```typescript
import { lens, view, over, inc, set } from 'https://deno.land/x/fae/mod.ts'

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

const viewResult = view(l, array)
const overResult = over(l, inc, array)
const setResult = set(l, 12, array)

console.log(viewResult)   // 1
console.log(overResult)   // [2, 2, 3, 4, 5, 6, 7, 8]
console.log(setResult)    // [12, 2, 3, 4, 5, 6, 7, 8]
```
