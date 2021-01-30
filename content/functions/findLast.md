---
title: FindLast function
description: Gives the last element of the list which matches the predicate, or `undefined` if no element matches.
keywords: FindLast, Find, Last, Find Last
---

## FindLast

<br>

Returns the last element of the list which matches the predicate, or `undefined` if no element matches.

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _findLast<T>(predicate: Predicate1<T>, list: T[]): T {
    //..
}
```

<br>

**Curried type declaration**

```typescript
type FindLast_2<T> = ((list: T[]) => T | undefined)

type FindLast_1<T> = ((predicate: Predicate1<T>) => T | undefined)

type FindLast =
  & (<T>(predicate: Predicate1<T>, list?: PH) => FindLast_2<T>)
  & (<T>(predicate: PH, list: T[]) => FindLast_1<T>)
  & (<T>(predicate: Predicate1<T>, list: T[]) => T | undefined)
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

findLast(even, a)            // 0
findLast(gt100, a)           // 300
findLast(isStr, a)           // 'cow'
findLast(xGt100, a)          // obj2

findLast(even, _)([])        // undefined
findLast(_, [2, 3, 5])(even) // 2
findLast(even)([2, 3, 5])    // 2
``` 