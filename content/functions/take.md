---
title: Take function
description: Returns first `n` elements of the array or string.
keywords: Take, Takelast
---

## Take
<br>

Returns first `n` elements of the array or string.

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _take(n, number, functor: ArrayLike<T> | string): T[] | string {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type Take_2 = <L extends ArrayLike<any> | string>(list: L) => InferType<L>

type Take_1<L extends ArrayLike<any> | string> = (n: number) => InferType<L>

type Take =
  & ((n: number, list?: PH) => Take_2)
  & (<L extends ArrayLike<any> | string>(n: PH, list: L) => Take_1<InferType<L>>)
  & (<L extends ArrayLike<any> | string>(n: number, list: L) => InferType<L>)
```
<br>

**Used types**
* [InferType](/types/InferType)

<br>


**Examples**
```typescript
import { take, _ } from 'https://deno.land/x/fae/mod.ts'


take(3, ['a', 'b', 'c', 'd', 'e', 'f', 'g'])  // ['a', 'b', 'c']
take(0, ['a', 'b', 'c', 'd', 'e', 'f', 'g'])  // []
take(3, [1, 2])                               // [1, 2]
take(3, [])                                   // []
take(-1, [1, 2, 3])                           // [1, 2, 3]
take(-Infinity, [1, 2, 3])                    // [1, 2, 3]
take(2, 'Ramda')                              // 'Ra'
take(1, 'Ramda')                              // 'R'
take(0, 'Ramda')                              // ''

```
