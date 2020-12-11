---
title: TakeLast function
description: Returns last `n` elements of the array or string.
keywords: Take, Takelast
---

## TakeLast
<br>

Returns last `n` elements of the array or string.

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _takeLast(n, number, functor: ArrayLike<T> | string): T[] | string {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type TakeLast_2 = <F extends any[] | string>(functor: F) => InferType<F>

type TakeLast_1<F extends any[] | string> = (n: number) => InferType<F>

type TakeLast =
  & ((n: number, functor?: PH) => TakeLast_2)
  & (<F extends any[] | string>(n: PH, functor: F) => TakeLast_1<InferType<F>>)
  & (<F extends any[] | string>(n: number, functor: F) => InferType<F>)
```
<br>

**Used types**
* [InferType](/types/InferType)

<br>


**Examples**
```typescript
import { takeLast, _ } from 'https://deno.land/x/fae/mod.ts'


takeLast(3, ['a', 'b', 'c', 'd', 'e', 'f', 'g'])  // ['e', 'f', 'g']
takeLast(0, ['a', 'b', 'c', 'd', 'e', 'f', 'g'])  // []
takeLast(3, [1, 2])                               // [1, 2]
takeLast(3, [])                                   // []
takeLast(-1, [1, 2, 3])                           // [1, 2, 3]
takeLast(-Infinity, [1, 2, 3])                    // [1, 2, 3]
takeLast(2, 'Ramda')                              // 'da'
takeLast(1, 'Ramda')                              // 'a'
takeLast(0, 'Ramda')                              // ''

```
