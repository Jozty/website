---
title: Reduce function
description: Returns a single value by iterating though `functor` calling the iterator function `func`. `func` takes two arguments. First - `acc`, Second - `value`.
keywords: reuce, reducer, list, functor
---

## Reduce 
<br>

Returns a single value by iterating though `functor`
calling the iterator function `func`. `func` takes two arguments.
First - `acc`, Second - `value`.

<br>

It may stop the reduction in between by means of `ReducedTransformer`.

Acts as a transducer if a transformer is given in `functor`.

Works on array-like/iterable/iterator

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _reduce(a: number, b: number): number {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type Reducer<R, P> =
  | FuncArr2<R, P, R | ReducedTransformer<R>>
  | Transformer

type Reduce_1<T, R> = <P>(func: Reducer<R, P>) => R

type Reduce_2<T, R, P> = (acc: R) => R

type Reduce_3<R, P> = <T>(functor: FunctorWithArLk<T>) => R

type Reduce_2_3<R, P> =
  & ((acc: R, functor?: PH) => Reduce_3<R, P>)
  & (<T>(acc: PH, functor: FunctorWithArLk<T>) => Reduce_2<T, R, P>)
  & (<T>(acc: R, functor: FunctorWithArLk<T>) => R)

type Reduce_1_3<R> =
  & (<P>(func: Reducer<R, P>, functor?: PH) => Reduce_3<R, P>)
  & (<T>(func: PH, functor: FunctorWithArLk<T>) => Reduce_1<T, R>)
  & (<T, P>(func: Reducer<R, P>, functor: FunctorWithArLk<T>) => R)

type Reduce_1_2<T> =
  & (<R, P>(func: Reducer<R, P>, acc?: PH) => Reduce_2<T, R, P>)
  & (<R>(func: PH, acc: R) => Reduce_1<T, R>)
  & (<R, P>(func: Reducer<R, P>, acc: R) => R)

type Reduce =
  & (<R, P>(func: Reducer<R, P>, acc?: PH, functor?: PH) => Reduce_2_3<R, P>)
  & (<R>(func: PH, acc: R, functor?: PH) => Reduce_1_3<R>)
  & (<T>(func: PH, acc: PH, functor: FunctorWithArLk<T>) => Reduce_1_2<T>)
  & (<R, P>(func: Reducer<R, P>, acc: R, functor?: PH) => Reduce_3<R, P>)
  & (<T, R, P>(func: Reducer<R, P>, acc: PH, functor: FunctorWithArLk<T>) => Reduce_2<T, R, P>)
  & (<T, R>(func: PH, acc: R, functor: FunctorWithArLk<T>) => Reduce_1<T, R>)
  & (<T, R, P>(func: Reducer<R, P>, acc: R, functor: FunctorWithArLk<T>) => R)
```
<br>

**Used types**
* [FunctorWithArLk](/types/FunctorWithArLk)

<br>


**Examples**
```typescript
import { add, reduce } from 'https://deno.land/x/fae/mod.ts'

type AddF = (a: number, b: number) => number

reduce(add as AddF, 0, [1, 2, 3, 4])   // 10
```
