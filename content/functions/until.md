---
title: Until function
description: Takes a predicate, a transformation function, and an initial value, and returns a value of the same type as the initial value.
keywords: Until
---

## Until 
<br>

Takes a predicate, a transformation function, and an initial value,
and returns a value of the same type as the initial value.

<br>

&check; Curried 

<br>

**Non curried type declaration**
```typescript
function _until<T>(pred: Predicate1<T>, fn: FuncArr1<T, T>, init: T): T {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type Until_1<T> = (pred: Predicate1<T>) => T

type Until_2<T> = (fn: FuncArr1<T, T>) => T

type Until_3<T> = (init: T) => T

type Until_2_3<T> =
  & ((fn: FuncArr1<T, T>, init?: PH) => Until_3<T>)
  & (<T>(fn: PH, init: T) => Until_2<T>)
  & ((fn: FuncArr1<T, T>, init: T) => T)

type Until_1_3<T> =
  & ((pred: Predicate1<T>, init?: PH) => Until_3<T>)
  & (<T>(pred: PH, init: T) => Until_1<T>)
  & ((pred: Predicate1<T>, init: T) => T)

type Until_1_2<T> =
  & ((pred: Predicate1<T>, fn?: PH) => Until_2<T>)
  & ((pred: PH, fn: FuncArr1<T, T>) => Until_1<T>)
  & ((pred: Predicate1<T>, fn: FuncArr1<T, T>) => T)

type Until =
  & (<T>(pred: Predicate1<T>, fn?: PH, init?: PH) => Until_2_3<T>)
  & (<T>(pred: PH, fn: FuncArr1<T, T>, init?: PH) => Until_1_3<T>)
  & (<T>(pred: PH, fn: PH, init: T) => Until_1_2<InferPrimitive<T>>)
  & (<T>(pred: Predicate1<T>, fn: FuncArr1<T, T>, init?: PH) => Until_3<T>)
  & (<T>(pred: Predicate1<T>, fn: PH, init: T) => Until_2<InferPrimitive<T>>)
  & (<T>(pred: PH, fn: FuncArr1<T, T>, init: T) => Until_1<T>)
  & (<T>(pred: Predicate1<T>, fn: FuncArr1<T, T>, init: T) => T)
```
<br>

**Used types**
* [Predicate1](/types/Predicate1)
* [FuncArr1](/types/FuncArr1)

<br>

**Examples**
```typescript
import { until } from 'https://deno.land/x/fae/mod.ts'

const gt100 = (x: number) => x > 100
const square = (x: number) => x * x
until(gt100, square, 2)   // 256
```
