---
title: Update function
description: Returns a new array with copy of `list` and `value` replaced at `index`.
keywords: Update
---

## Update 
<br>

Returns a new array with copy of `list` and `value` replaced at `index`.

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _update<T>(index: number, value: T, list: T[]): T[] {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type Update_1<T> = (index: number) => T[]

type Update_2<T> = (value: T) => T[]

type Update_3<T> = (list: T[]) => T[]

type Update_2_3 =
  & (<T>(value: T, list?: PH) => Update_3<InferPrimitive<T>>)
  & (<T>(value: PH, list: T[]) => Update_2<T>)
  & (<T>(value: T, list: T[]) => T[])

type Update_1_3<T> =
  & ((index: number, list?: PH) => Update_3<T>)
  & ((index: PH, list: T[]) => Update_1<T>)
  & ((index: number, list: T[]) => T[])

type Update_1_2<T> =
  & ((index: number, value?: PH) => Update_2<T>)
  & ((index: PH, value: T) => Update_1<T>)
  & ((index: number, value: T) => T[])

type Update =
  & ((index: number, value?: PH, list?: PH) => Update_2_3)
  & (<T>(index: PH, value: T, list?: PH) => Update_1_3<InferPrimitive<T>>)
  & (<T>(index: PH, value: PH, list: T[]) => Update_1_2<T>)
  & (<T>(index: number, value: T, list?: PH) => Update_3<InferPrimitive<T>>)
  & (<T>(index: number, value: PH, list: T[]) => Update_2<T>)
  & (<T>(index: PH, value: T, list: T[]) => Update_1<T>)
  & (<T>(index: number, value: T, list: T[]) => T[])
```
<br>

**Used types**
* [InferPrimitive](/types/InferPrimitive)

<br>

**Examples**
```typescript
import { update } from 'https://deno.land/x/fae/mod.ts'

update(2, 4, [0, 1, 2, 3])    // [0, 1, 4, 3]
```
