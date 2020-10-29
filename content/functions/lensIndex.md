---
title: lensIndex function
description: a thorough tour of lensIndex function
---

## LensIndex
<br>

Returns a lens whose focus is the specified index.

<br>

&cross; Curried

<br>

**Type Declaration**
```typescript
function _lensIndex<T, F>(index: number): Lens<T, F> {
  // ...
}
```
<br>

**Used types**
* [Lens](/types/Lens)

<br>

**Examples**
```typescript
import { lensIndex, view, over, set } from 'https://deno.land/x/fae/mod.ts'

const headLens = lensIndex(0)
const arr = ['a', 'b', 'c']

view(headLens, arr)                                   // 'a'
set(headLens, 'x', arr)                               // ['x', 'b', 'c']
over(headLens, (x: string) => x.toUpperCase(), arr)   // ['A', 'b', 'c']
```
