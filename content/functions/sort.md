---
title: Sort function
description: Returns a copy of the list, sorted according to the comparator function, which should accept two values at a time and return a negative number if the first value is smaller, a positive number if it's larger, and zero if they are equal. It does not modify the original.
keywords: Sort, comparator, compare, list, ascending order, descending order
---

## Sort 
<br>

Returns a copy of the list, sorted according to the comparator function,
which should accept two values at a time and return a negative number if the
first value is smaller, a positive number if it's larger, and zero if they
are equal.

It does not modify the original.

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _sort<T>(comparator: Comparator<T>, list: T[]): T[] {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type Sort_2<T> = (list: T[]) => T[]
 
type Sort_1<T> = (comparator: Comparator<T>) => T[]
 
type Sort =
  & (<T>(comparator: Comparator<T>, list?: PH) => Sort_2<T>)
  & (<T>(comparator: PH, list: T[]) => Sort_1<T>)
  & (<T>(comparator: Comparator<T>, list: T[]) => T[])
```
<br>

**Used types**
* [Comparator](/types/Comparator)

<br>

**Examples**
```typescript
import { comparator, sort } from 'https://deno.land/x/fae/mod.ts'

const greater = (a: number, b: number) => a < b
const comp = Fae.comparator(greater)
const list = [3, 1, 8, 1, 2, 5]

// consider all odd number smaller than even in the total ordering
const haveDifferentParity = (a: number, b: number) => {
  const isAOdd = (a & 1) === 1
  const isBOdd = (b & 1) === 1
  
  if (isAOdd && !isBOdd) return true
  if (!isAOdd && isBOdd) return false

  return a < b
}
const oddEven = Fae.comparator(haveDifferentParity)

Fae.sort(comp, list)      // [1, 1, 2, 3, 5, 8]
Fae.sort(oddEven, list)   // [1, 1, 3, 5, 2, 8]
```
