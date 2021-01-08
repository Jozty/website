---
title: LiftN function
description: lifts a function to be the specified arity, so that it may "map over" that many lists.
keywords: Add
---

## LiftN
<br>

"lifts" a function to be the specified arity, so that it may "map over" that many lists.

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _liftN(arity: number, fn: Func): Func {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type LiftN_2 = (fn: Func) => Func

type LiftN_1 = (arity: number) => Func

type LiftN =
  & ((arity: number, fn?: PH) => LiftN_2)
  & ((arity: PH, fn: Func) => LiftN_1)
  & ((arity: number, fn: Func) => Func)
```
<br>

**Used types**
* [Func](/types/Func)

<br>

**Examples**
```typescript
import { liftN } from 'https://deno.land/x/fae/mod.ts'

const add3 = (a: number, b: number, c: number) => a + b + c

const liftedAdd = liftN(3, add3)
liftedAdd([1, 2], [3, 4], [5, 6])   // [9, 10, 10, 11, 10, 11, 11, 12]
```
