---
title: propSatisfies function
description: a thorough tour of propSatisfies function
---

## PropSatisfies
<br>

Returns `true` if the specified object property satisfies the given
predicate; `false` otherwise.

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _propSatisfies<T>(pred: Predicate1<T>, name: Prop, obj: Obj<T>): boolean {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type PropSatisfies_1<T> = (pred: Predicate1<T>) => boolean

type PropSatisfies_2<T> = (name: Prop) => boolean

type PropSatisfies_3<T> = (obj: Obj<T>) => boolean

type PropSatisfies_2_3<T> =
  & ((name: Prop, obj?: PH) => PropSatisfies_3<T>)
  & ((name: PH, obj: Obj<T>) => PropSatisfies_2<T>)
  & ((name: Prop, obj: Obj<T>) => boolean)

type PropSatisfies_1_3 =
  & (<T>(pred: Predicate1<T>, obj?: PH) => PropSatisfies_3<T>)
  & (<T>(pred: PH, obj: Obj<T>) => PropSatisfies_1<T>)
  & (<T>(pred: Predicate1<T>, obj: Obj<T>) => boolean)

type PropSatisfies_1_2<T> =
  & ((pred: Predicate1<T>, name?: PH) => PropSatisfies_2<T>)
  & ((pred: PH, name: Prop) => PropSatisfies_1<T>)
  & ((pred: Predicate1<T>, name: Prop, ) => boolean)

type PropSatisfies =
  & ((pred?: PH, name?: PH, obj?: PH) => PropSatisfies)
  & (<T>(pred: Predicate1<T>, name?: PH, obj?: PH,) => PropSatisfies_2_3<T>)
  & ((pred: PH, name: Prop, obj?: PH) => PropSatisfies_1_3)
  & (<T>(pred: PH, name: PH, obj: Obj<T>) => PropSatisfies_1_2<T>)
  & (<T>(pred: Predicate1<T>, name: Prop, obj?: PH) => PropSatisfies_3<T>)
  & (<T>(pred: Predicate1<T>, name: PH, obj: Obj<T>) => PropSatisfies_2<T>)
  & (<T>(pred: PH, name: Prop, obj: Obj<T>) => PropSatisfies_1<T>)
  & (<T>(pred: Predicate1<T>, name: Prop, obj: Obj<T>) => boolean)
```
<br>

**Used types**
* [Prop](/types/Prop)
* [Obj](/types/Obj)

<br>

**Examples**
```typescript
import { propSatisfies } from 'https://deno.land/x/fae/mod.ts'

propSatisfies(x => x > 0, 'x', {x: 1, y: 2}) // true
```
