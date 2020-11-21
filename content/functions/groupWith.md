---
title: GroupWith function
description: Creates a new objedt of list of values which are satisfy the given function.
keywords: GroupWith
---

## GroupWith
<br>

Creates a new object of list of values which are satisfy the given function.

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _groupWith<L extends T[] | string, T>(predicate: Predicate2<T | string>, functor: L): T[][] | string[] {
    //..
}
```
<br>

**Curried type declaration**

```typescript
type GroupWith_2<L extends T[] | string, T> = (functor: L) => L[]

type GroupWith_1<L extends T[] | string, T> = (predicate: Predicate2<T>) => L[]

type GroupWith =
  & (<L extends T[] | string, T>(predicate: Predicate2<T>, functor?: PH) => GroupWith_2<L, T>)
  & (<L extends T[] | string, T>(predicate: PH, functor: L) => GroupWith_1<L, T>)
  & (<L extends T[] | string, T>(predicate: Predicate2<T>, functor: L) => L[])
```
<br>

**Used types**
* [Predicate2](/types/Predicate2)

<br>

**Examples**
```typescript
import { groupWith, equals, _ } from 'https://deno.land/x/fae/mod.ts'

const isConsecutive = (a: number, b: number) => a + 1 === b

groupWith(isConsecutive, [])                  // []
groupWith(isConsecutive, [4, 3, 2, 1])        // [[4], [3], [2], [1]]
groupWith(isConsecutive, [1, 2, 3, 4])        // [[1, 2, 3, 4]]
groupWith(isConsecutive, [1, 2, 2, 3])        // [[1, 2], [2, 3]]
groupWith(isConsecutive, [1, 2, 9, 3, 4])     // [[1, 2], [9], [3, 4]]
groupWith(isConsecutive, [1, 2, 9, 10, 3, 4]) // [[1, 2], [9, 10], [3, 4]]

groupWith(equals, 'Finaallyy')                // ['F', 'i', 'n', 'aa', 'll', 'yy']
groupWith(equals, 'Mississippi')              // ['M', 'i', 'ss', 'i', 'ss', 'i', 'pp', 'i']

groupWith(isConsecutive, _)([4, 3, 2, 1])     // [[4], [3], [2], [1]]
groupWith(_, [4, 3, 2, 1])(isConsecutive)     // [[4], [3], [2], [1]]
groupWith(equals, _)('Mississippi')           // ['M', 'i', 'ss', 'i', 'ss', 'i', 'pp', 'i']
groupWith(_, 'Mississippi')(equals)           // ['M', 'i', 'ss', 'i', 'ss', 'i', 'pp', 'i']
``` 