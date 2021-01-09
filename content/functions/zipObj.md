---
title: ZipObj function
description: Returns a new object out of given list of `keys` and `values`. The returned is truncated to the length of the shorter of the two.
keywords: ZipObj
---

## ZipObj 
<br>

Returns a new object out of given list of `keys` and `values`.
The returned is truncated to the length of the shorter of the two.

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _zipObj<T>(keys: string[], values: T[]): Obj<T> {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type ZipObj_2 = <T>(values: T[]) => Obj<T>

type ZipObj_1<T> = (keys: string[]) => Obj<T>

type ZipObj =
  & ((keys: string[], values?: PH) => ZipObj_2)
  & (<T>(keys: PH, values: T[]) => ZipObj_1<T>)
  & (<T>(keys: string[], values: T[]) => Obj<T>)
```
<br>

**Used types**
* [Obj](/types/Obj)

<br>

**Examples**
```typescript
import { zipObj } from 'https://deno.land/x/fae/mod.ts'

zipObj(['a', 'b', 'c'], [1, 2, 3]) // {a: 1, b: 2, c: 3}
```
