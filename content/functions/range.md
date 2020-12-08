---
title: Range function
description: Returns a list of numbers from `from` to `to` both inclusive (Returns an empty an array if `from > to`)
keywords: Range
---

## Range 
<br>

Returns a list of numbers from `from` to `to` **both inclusive**.
Returns an empty an array if `from > to`.

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _range(a: number, b: number): number[] {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type Range_2 = (to: number) => number[]

type Range_1 = (from: number) => number[]

type Range =
  & ((from: number, to?: PH) => Range_2)
  & ((from: PH, to: number) => Range_1)
  & ((from: number, to: number) => number[])
```
<br>

**Examples**
```typescript
import { range, _ } from 'https://deno.land/x/fae/mod.ts'

range(0, 5) // [0, 1, 2, 3, 4, 5]
range(4, 7) // [4, 5, 6, 7]
range(3, 2) // []
range(_, 5)(1) // [1, 2, 3, 4, 5]
range(1, _)(5) // [1, 2, 3, 4, 5]
```
