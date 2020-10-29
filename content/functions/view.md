---
title: view function
description: a thorough tour of view function
---

## View 
<br>

Returns the value of portion of `target` focused by given `lens`.

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _view<T, F>(lens: Lens<T, F>, target: T): F {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type View_2<T, F> = (target: T) => F

type View_1<T> = <F>(lens: Lens<T, F>) => F

type View =
  & (<T, F>(lens: Lens<T, F>, target?: PH) => View_2<T, F>)
  & (<T>(lens: PH, target: T) => View_1<T>)
  & (<T, F>(lens: Lens<T, F>, target: T) => F)
```
<br>

**Used types**
* [Lens](/types/Lens)

<br>

**Examples**
```typescript
import { lens, view } from 'https://deno.land/x/fae/mod.ts'

const array = [1, 2, 3, 4, 5, 6, 7, 8]
const array2 = [11, 22, 33, 44]

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

view(l, array)   // 1
view(l, array2)   // 11
```
