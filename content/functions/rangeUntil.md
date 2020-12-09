---
title: RangeUntil function
description: Returns a list of numbers from `from` (inclusive) to `to` (exclusive).Returns an empty an array if `from >= to`.
keywords: RangeUntil
---

## RangeUntil 
<br>

Returns a list of numbers from `from` (**inclusive**) to `to` (**exclusive**).
Returns an empty an array if `from >= to`.

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _rangeUntil(a: number, b: number): number[] {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type RangeUntil_2 = (to: number) => number[]

type RangeUntil_1 = (from: number) => number[]

type RangeUntil =
  & ((from: number, to?: PH) => RangeUntil_2)
  & ((from: PH, to: number) => RangeUntil_1)
  & ((from: number, to: number) => number[])
```
<br>

**Examples**
```typescript
import { rangeUntil, _ } from 'https://deno.land/x/fae/mod.ts'

rangeUntil(0, 5) // [0, 1, 2, 3, 4]
rangeUntil(4, 7) // [4, 5, 6]
rangeUntil(3, 2) // []
rangeUntil(_, 5)(1) // [1, 2, 3, 4]
rangeUntil(1, _)(5) // [1, 2, 3, 4]
```
