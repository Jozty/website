---
title: Adjust function
description: Applies a given function fn at given index of list, returning a new copy of list with element at index replaced with return value of fn.
keywords: Adjust
---

## Adjust
<br>

Applies a given function fn at given index of list, returning a new copy of list with element at index replaced with return value of fn.

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _adjust<T>(index: number, fn: FuncArr1<T, T>, list: T[]): T[] {
  // ...
}
```

<br>

**Curried type declaration**

```typescript
type Adjust_1<T> = (index: number) => T[]

type Adjust_2<T> = (fn: FuncArr1<T, T>) => T[]

type Adjust_3<T> = (list: T[]) => T[]

type Adjust_2_3 =
  & (<T>(fn: FuncArr1<T, T>, list?: PH) => Adjust_3<T>)
  & (<T>(fn: PH, list: T[]) => Adjust_2<T>)
  & (<T>(fn: FuncArr1<T, T>, list: T[]) => T[])

type Adjust_1_3<T> =
  & ((index: number, list?: PH) => Adjust_3<T>)
  & ((index: PH, list: T[]) => Adjust_1<T>)
  & ((index: number, list: T[]) => T[])

type Adjust_1_2<T> =
  & ((index: number, fn?: PH) => Adjust_2<T>)
  & ((index: PH, fn: FuncArr1<T, T>) => Adjust_1<T>)
  & ((index: number, fn: FuncArr1<T, T>) => T[])

type Adjust =
  & ((index: number, fn?: PH, list?: PH) => Adjust_2_3)
  & (<T>(index: PH, fn: FuncArr1<T, T>, list?: PH) => Adjust_1_3<T>)
  & (<T>(index: PH, fn: PH, list: T[]) => Adjust_1_2<T>)
  & (<T>(index: number, fn: FuncArr1<T, T>, list?: PH) => Adjust_3<T>)
  & (<T>(index: number, fn: PH, list: T[]) => Adjust_2<T>)
  & (<T>(index: PH, fn: FuncArr1<T, T>, list: T[]) => Adjust_1<T>)
  & (<T>(index: number, fn: FuncArr1<T, T>, list: T[]) => T[])
  ```

<br>

**Used types**

- [FuncArr1](/types/FuncArr1)

<br>

**Examples**
```typescript
import { adjust, add, _ } from 'https://deno.land/x/fae/mod.ts'

const list = [0, 1, 2, 3]
const b = add(1)
const c = [0, 1, 2, 3]
const expected = [0, 1, 3, 3]
const a_2_3 = adjust(a)

adjust(2, add(1), [0, 1, 2, 3])  // [0, 1, 3, 3]
adjust(-3, add(1), [0, 1, 2, 3]) // [0, 2, 2, 3]
adjust(4, add(1), list)          // list
adjust(-5, add(1), list)         // list

a_2_3(b)(c)                      // expected
a_2_3(b, c)                      // expected
a_2_3(_, c)(b)                   // expected
a_2_3(b, _)(c)                   // expected
```
