---
title: Lift function
description: lifts a function of arity > 1 so that it may "map over" a list
keywords: Lift function, arity, lift
---

## Lift 
<br>

"lifts" a function of arity > 1 so that it may "map over" a list

<br>

&cross; Curried

<br>

**Type declaration**
```typescript
function _lift(f: Func): Func {
  // ...
}
```
<br>

**Used types**
* [Func](/types/Func)

<br>

**Examples**
```typescript
import { curry, lift } from 'https://deno.land/x/fae/mod.ts'

const add3 = Fae.curry(3, function (a: number, b: number, c: number) {
  return a + b + c
})

const liftedAdd = Fae.lift(add3)
liftedAdd([1, 2], [3, 4], [5, 6])   // [9, 10, 10, 11, 10, 11, 11, 12]
```
