---
title: Map function
description: Applies fn to each of functor's value and returns functor of same shape. Acts as a transducer if a transformer is given in functor.
keywords: Map, list, mapped list
---

## Map 
<br>

Applies `fn` to each of `functor`'s value and returns functor of same shape.

Acts as a transducer if a transformer is given in `functor`.

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _map<F extends Obj<T> | Func | T[], T, R>(
  fn: FuncArr1<T, R>, functor: F
): MapReturnType<F, R> {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type MapReturnType<F, R> = F extends any[]
  ? R[]
  : F extends Func
  ? Func
  : F extends Obj<any>
  ? Obj<R>
  : never

type MapInferType<F> = F extends Func
  ? Func
  : F extends Obj<infer U>
  ? Obj<U>
  : InferType<F>

type MapInferElementType<F> = F extends Func
  ? Func
  : F extends Obj<infer U>
  ? U
  : InferElementType<F>

type Map_2<T, R> = (<F extends Obj<T> | Func | T[]>(functor: F) => MapReturnType<F, R>)

type Map_1<F extends Obj<any> | Func | any[]> = (<R>(fn: FuncArr1<MapInferElementType<F>, R>) => MapReturnType<F, R>)

type Map =
  & (<T, R>(fn: FuncArr1<T, R>, functor?: PH) => Map_2<T, R>)
  & (<F extends Obj<any> | Func | any[]>(fn: PH, functor: F) => Map_1<F>)
  & (<F extends Obj<T> | Func | T[], T, R>(fn: FuncArr1<T, R>, functor: F) => MapReturnType<F, R>)
```
<br>

**Used types**
* [Func](/types/Func)
* [FuncArr1](/types/FuncArr1)

<br>

**Examples**
```typescript
import { add, map } from 'https://deno.land/x/fae/mod.ts'

const add3 = Fae.add(3)
const list = [1, 2, 3, 4, 5, 6, 7, 8]

map(add3, list) // [4, 5, 6, 7, 8, 9, 10, 11]
```
