---
title: FromPairs function
description: Creates a new object from a list key-value pairs(If a key appears in multiple pairs the rightmost pair is included in the object)
keywords: FromPairs.
---

## fromPairs
<br>

Creates a new object from a list key-value pairs. If a key appears in
multiple pairs, the rightmost pair is included in the object.

<br>

&cross; Curried

<br>

**Type declaration**
```typescript
function _fromPairs<T>(pairs: Pair<T>[]): Obj<T> {
  // ...
}
```
<br>

**Used types**
* [Obj](/types/Obj)
* [Prop](/types/Prop)

<br>

**Examples**
```typescript
import { fromPairs } from 'https://deno.land/x/fae/mod.ts'

fromPairs([
  ['a', 1],
  ['b', 2],
  ['c', 3],
])                // { a: 1, b: 2, c: 3 }

fromPairs([
  ['a', 1],
  ['b', 2],
  ['c', 3],
  ['d', 4],
])                // { a: 1, b: 2, c: 3, d: 4 }

fromPairs([
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4],
])                // { 1: 1, 2: 2, 3: 3, 4: 4 }

fromPairs([
  ['x', 1],
  ['x', 2],
])                // { x: 2 }

fromPairs([
  ['x', 1],
  ['x', 2],
  ['x', 4],
  ['x', 3],
])                // { x: 3 }

fromPairs([
  ['x', 1],
  ['x', 2],
  ['y', 1],
  ['y', 2],
  ['y', 3],
])                // { x: 2, y: 3 }
``` 