---
title: FindLastIndex function
description: Check whether two objects have same value, for the specific property.
keywords: FindLastIndex
---

## FindLastIndex

<br>

Returns index of last element of the list which matches the predicate, or `-1` if no element matches

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _findLastIndex<T>(predicate: Predicate1<T>, list: T[]): number {
    //..
}
```

<br>

**Curried type declaration**

```typescript
type FindLastIndex_2<T> = ((list: T[]) => number)

type FindLastIndex_1<T> = ((predicate: Predicate1<T>) => number)

type FindLastIndex =
  & (<T>(predicate: Predicate1<T>, list?: PH) => FindLastIndex_2<T>)
  & (<T>(predicate: PH, list: T[]) => FindLastIndex_1<T>)
  & (<T>(predicate: Predicate1<T>,list: T[]) => number)
```

<br>

**Used types**
* [Predicate1](/types/Predicate1)

<br>

**Examples**
```typescript
import { findIndex, _ } from 'https://deno.land/x/fae/mod.ts'

const obj1 = { x: 100 }
const obj2 = { x: 200 }
const a = [11, 10, 9, 'cow', obj1, 8, 7, 100, 200, 300, obj2, 4, 3, 2, 1, 0]
const even = (x: any) => typeof x === 'number' && x % 2 === 0
const gt100 = (x: any) => typeof x === 'number' && x > 100
const isStr = (x: any) => typeof x === 'string'
const xGt100 = (o: any) => o && o.x > 100

findLastIndex(even, a)      // 15
findLastIndex(gt100, a)     // 9
findLastIndex(isStr, a)     // 3
findLastIndex(xGt100, a)    // 10

findLastIndex(even, _)(a)   // 15
findLastIndex(_, a)(gt100)  // 9
findLastIndex(isStr)(a)     // 3
``` 