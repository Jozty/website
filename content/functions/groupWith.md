---
title: groupWith function
description: a thorough tour of groupWith function
---

## GroupWith
<br>

Creates a new object of list of values which are satisfy the given function.

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _groupWith<L extends T[] | string, T>(predicate: Predicate2<T | string>,functor: L): T[][] | string[] = [] {
    //..
}
```
<br>

**Curried type declaration**

```typescript
type GroupWith_2<L extends T[] | string, T> = (functor: L) => L[]

type GroupWith_1<L extends T[] | string, T> = (predicate: Predicate2<T>) => L[]

type GroupWith =
  & (<L extends T[] | string, T>(predicate: Predicate2<T>,functor?: PH,) => GroupWith_2<L, T>)
  & (<L extends T[] | string, T>(predicate: PH,functor: L,) => GroupWith_1<L, T>)
  & (<L extends T[] | string, T>(predicate: Predicate2<T>,functor: L,) => L[])
```
<br>

**Examples**
```typescript
import { groupWith, equals, _ } from 'https://deno.land/x/fae/mod.ts'

const isConsecutive = function (a: number, b: number) {
      return a + 1 === b
    }
groupWith(isConsecutive, [])                 // []
groupWith(isConsecutive, [4, 3, 2, 1])       // [[4], [3], [2], [1]]
groupWith(isConsecutive, [1, 2, 3, 4])       // [[1, 2, 3, 4]]
groupWith(isConsecutive, [1, 2, 2, 3])       // [[1, 2],[2, 3]]
groupWith(isConsecutive, [1, 2, 9, 3, 4])    // [[1, 2],[9],[3, 4]]
groupWith(isConsecutive, [1, 2, 9, 10, 3, 4])// [[1, 2],[9, 10],[3, 4]]
groupWith(isConsecutive, _)([4, 3, 2, 1])    // [[4], [3], [2], [1]]
``` 