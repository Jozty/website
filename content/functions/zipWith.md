---
title: zipWith function
description: a thorough tour of zipWith function
---

## ZipWith
<br>

Creates a new list out of two passed lists. Each item of new list is calculated by applying equally-positioned pair in both the lists.
The returned is truncated to the length of the shorter of the two input lists.

<br>

&check; Curried

<br>

**Non curried type declaration**

```typescript
function _zipWith<T1, T2, R>(
  fn: (a: T1, b: T2) => R,
  list1: T1[],
  list2: T2[]
) {
  // ...
}
```

<br>

**Curried type declaration**

```typescript
type ZipWith_1<T1, T2> = (<R>(fn: (a: T1, b: T2) => R) => R[])
  & ((fn?: PH) => ZipWith_1<T1, T2>)

type ZipWith_2<T1, T2, R> = ((list1: T1[]) => R[])
  & ((list1?: PH) => ZipWith_2<T1, T2, R>)

type ZipWith_3<T1, T2, R> = ((list2: T2[]) => R[])
  & ((list2?: PH) => ZipWith_3<T1, T2, R>)

type ZipWith_2_3<T1, T2, R> = ((list1: T1[], list2: T2[]) => R[])
  & ((list1: T1[], list2?: PH) => ZipWith_3<T1, T2, R>)
  & (<L extends ArrayLike<T> | string, T = any>(list1: PH, list2: T2[]) => ZipWith_2<T1, T2, R>)
  & ((list1?: PH, list2?: PH) => ZipWith_2_3<T1, T2, R>)

type ZipWith_1_3<T1> = (<T2, R>(fn: (a: T1, b: T2) => R, list2: T2[]) => R[])
  & (<T2, R>(fn: (a: T1, b: T2) => R, list2?: PH) => ZipWith_3<T1, T2, R>)
  & (<T2>(fn: PH, list2: T2[]) => ZipWith_1<T1, T2>)
  & ((fn?: PH, list2?: PH) => ZipWith_1_3<T1>)

type ZipWith_1_2<T2> = (<T1, R>(fn: (a: T1, b: T2) => R, list1: T1[]) => R[])
  & (<T1, R>(fn: (a: T1, b: T2) => R, list1?: PH) => ZipWith_2<T1, T2, R>)
  & (<T1>(fn: PH, list1: T1[]) => ZipWith_1<T1, T2>)
  & ((fn?: PH, list1?: PH) => ZipWith_1_2<T2>)

type ZipWith = (<T1, T2, R>(fn: (a: T1, b: T2) => R, list1: T1[], list2: T2[]) => R[])
  & ((fn?: PH, list1?: PH, list2?: PH) => ZipWith)
  & (<T1, T2, R>(fn: (a: T1, b: T2) => R, list1?: PH, list2?: PH) => ZipWith_2_3<T1, T2, R>)
  & (<T1>(fn: PH, list1: T1[], list2?: PH) => ZipWith_1_3<T1>)
  & (<T2>(fn: PH, list1: PH, list2: T2[]) => ZipWith_1_2<T2>)
  & (<T1, T2, R>(fn: (a: T1, b: T2) => R, list1: T1[], list2?: PH) => ZipWith_3<T1, T2, R>)
  & (<T1, T2, R>(fn: (a: T1, b: T2) => R, list1: PH, list2: T2[]) => ZipWith_2<T1, T2, R>)
  & (<T1, T2>(fn: PH, list1: T1[], list2: T2[]) => ZipWith_1<T1, T2>)
```

<br>

**Examples**

```typescript
import { zipWith, _ } from 'https://deno.land/x/fae/mod.ts'

const a = ['A', 'B', 'C']
const b = [1, 2, 3]
const c = [10, 20, 30]
const g = (x: String, y: number) => x + ' ' + y

const z1 = zipWith(_, a, b)
const z2 = zipWith(g, _, b)
const z3 = zipWith(g, a, _)
const z4 = zipWith(_, a, _)
const f = zipWith((x: number, y: number) => x * y)

f(b)(c) // [ 10, 40, 90 ]
z1(g) // [ "A 1", "B 2", "C 3" ]
z2(a) // [ "A 1", "B 2", "C 3" ]
z3(c) // [ "A 10", "B 20", "C 30" ]
z4(g)(c) // [ "A 10", "B 20", "C 30" ]
z4(g)(b) // [ "A 1", "B 2", "C 3" ]
```
