---
title: propOr function
description: a thorough tour of propOr function
---

## PropOr 
<br>

If the given, non-null object has an own property with the specified name,
returns the value of that property. Otherwise, returns the provided default value.

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _propOr<T, R>(d: R, p: Prop, obj: Obj<T> | null): T | R {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type PropOr_1<T> = <R>(d: R) => R

type PropOr_2<T, R> = (p: Prop) => R

type PropOr_3<R> = <T>(obj: Obj<T> | null) => R

type PropOr_2_3<R> =
  & ((p: Prop, obj?: PH) => PropOr_3<R>)
  & (<T>(p: PH, obj: Obj<T> | null) => PropOr_2<T, R>)
  & (<T>(p: Prop, obj: Obj<T> | null) => R)

type PropOr_1_3 =
  & (<R>(d: R, obj?: PH) => PropOr_3<R>)
  & (<T>(d: PH, obj: Obj<T> | null) => PropOr_1<T>)
  & (<T, R>(d: R, obj: Obj<T> | null) => R)

type PropOr_1_2<T> =
  & (<R>(d: R, p?: PH) => PropOr_2<T, R>)
  & ((d: PH, p: Prop) => PropOr_1<T>)
  & (<R>(d: R, p: Prop) => R)

type PropOr =
  & (<R>(d: R, p?: PH, obj?: PH) => PropOr_2_3<R>)
  & ((d: PH, p: Prop, obj?: PH) => PropOr_1_3)
  & (<T>(d: PH, p: PH, obj: Obj<T> | null) => PropOr_1_2<T>)
  & (<R>(d: R, p: Prop, obj?: PH) => PropOr_3<R>)
  & (<T, R>(d: R, p: PH, obj: Obj<T> | null) => PropOr_2<T, R>)
  & (<T>(d: PH, p: Prop, obj: Obj<T> | null) => PropOr_1<T>)
  & (<T, R extends T>(d: R, p: Prop, obj: Obj<T> | null,) => R)
```
<br>

**Used types**
* [Prop](/types/Prop)

<br>

**Examples**
```typescript
import { propOr, prop } from 'https://deno.land/x/fae/mod.ts'

const fae = {
  name: 'Fae',
  age: 15
}

const Great = prop('GreatLibrary')
const GreatWithDefault = propOr('FaeModule', 'GreatLibrary')

Great(fae)  // undefined
GreatWithDefault(fae)  // 'FaeModule'
```
