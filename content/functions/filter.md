---
title: Filter function
description: Filters the those elements from functor that satisfies predicate.
keywords: Filter
---

## Filter

<br>

Filters the those elements from `functor` that satisfies `predicate`.
The `functor` may be an array/object/iterable/iterator.
Acts as a transducer if a transformer is passed in place of `functor`

<br>

&check; Curried

<br>

**Non curried type declaration**

```typescript
function _filter<T = any>(
  predicate: Predicate1<T>,
  functor: FunctorWithArLk<T> | Obj<T>,
): T[] | Partial<Obj<T>> {
  //..
}
```

<br>

**Curried type declaration**

```typescript
type Filter_2<T> = (functor: FunctorWithArLk<T> | Obj<T>) => T[] | Partial<Obj<T>>

type Filter_1<T> = (predicate: Predicate1<T>) => T[] | Partial<Obj<T>>

type Filter =
  & (<T>(predicate: Predicate1<T>, functor?: PH) => Filter_2<T>)
  & (<T>(predicate: PH, functor: FunctorWithArLk<T> | Obj<T>) => Filter_1<T>)
  & (<T>(predicate: Predicate1<T>, functor: FunctorWithArLk<T> | Obj<T>) => T[] | Partial<Obj<T>>)
```

<br>

**Used types**

- [Obj](/types/Obj)
- [Prop](/types/Prop)
- [FunctorWithArLk](/types/FunctorWithArLk)
- [Predicate1](/types/Predicate1)

<br>

**Examples**

```typescript
import { filter, _ } from 'https://deno.land/x/fae/mod.ts'

const positive = (x: number) => x > 0
const f = filter(positive)

f({}) // {}
f({ x: 0, y: 0, z: 0 }) // {}
f({ x: 1, y: 0, z: 0 }) // { x: 1 }
f({ x: 1, y: 2, z: 0 }) // { x: 1, y: 2 }
f({ x: 1, y: 2, z: 3 }) // { x: 1, y: 2, z: 3 }
f({ x: -1, y: 2, z: -3 }) // {y: 2}

filter((x: number) => x > 100, _)([100, 9, 99]) //[]
filter(_, [100, 9, 99])((x: number) => x > 100) //[]
filter((x: number) => x > 100)([100, 9, 99]) //[]
```
