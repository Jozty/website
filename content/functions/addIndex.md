---
title: AddIndex function
description: Gives a new iteration function from the passed function by adding two more parameters to its callback function
keywords: AddIndex
---

## AddIndex
<br>

Add two more parameters to their callback function

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _addIndex(fn: Func): Func {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type AddIndex = (fn: Func) => Func
```
<br>

**Examples**
```typescript
import { map, reduce, addIndex, add, _ } from 'https://deno.land/x/fae/mod.ts'

  const list = [4, 'f', undefined, NaN, 5, Infinity, 10]
  const indexedMap = addIndex(map)
  const indexedReduce = addIndex(reduce)
  const sumArr = (tot: number, num: number, idx: number) => {
    return tot + num + idx
  }

  indexedMap(add)(list)                     // [4, 'f1', NaN, NaN, 9, Infinity, 16]
  indexedReduce(sumArr, 0, [1, 2, 3, 4, 5]) // 25
```
