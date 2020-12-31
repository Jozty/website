---
title: Find function
description: Check whether two objects have same value, for the specific property.
keywords: Find
---

## Find

<br>

Returns the first element of the list which matches the predicate, or `undefined` if no element matches.

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _find<T>(predicate: Predicate1<T>, list: T[]): T {
    //..
}
```
<br>

**Curried type declaration**

```typescript
type Find_2<T> = (list: T[]) => T | undefined

type Find_1<T> = (predicate: Predicate1<T>) => T | undefined

type Find =
  & (<T>(predicate: Predicate1<T>, list?: PH) => Find_2<T>)
  & (<T>(predicate: PH, list: T[]) => Find_1<T>)
  & (<T>(predicate: Predicate1<T>, list: T[]) => T | undefined)
```
<br>

**Used types**
* [Predicate1](/types/Predicate1)

<br>

**Examples**
```typescript
import { find, _ } from 'https://deno.land/x/fae/mod.ts'

const obj1 = { x: 100 }
const obj2 = { x: 200 }
const a = [11, 10, 9, 'cow', obj1, 8, 7, 100, 200, 300, obj2, 4, 3, 2, 1, 0]
const even = (x: any) => typeof x === 'number' && x % 2 === 0
const gt100 = (x: any) => typeof x === 'number' && x > 100
const isStr = (x: any) => typeof x === 'string'
const xGt100 = (o: any) => o && o.x > 100

find(even, a)        // 10
find(gt100, a)       // 200
find(isStr, a)       // 'cow'
find(xGt100, a)      // obj2
find(even, ['zing']) // undefined

find(_, a)(even)     // 10
find(gt100, _)(a)    // 200
find(isStr)(a)       // 'cow'
``` 