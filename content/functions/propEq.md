---
title: PropEq function
description: Check whether the spcified object property is equal to given value( otherwise false)
keywords: PropEq, Equal property
---

## PropEq 
<br>

Returns `true` if the specified object property is equal, to the given value; `false` otherwise.

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _propEq<T>(name: Prop, val: T, obj: Obj<T>): boolean {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type PropEq_1 = (name: Prop) => boolean

type PropEq_2<T> = (val: T) => boolean

type PropEq_3<T1> = <T>(obj: Obj<T | T1>) => boolean

type PropEq_2_3 =
  & (<T>(val: T, obj?: PH) => PropEq_3<T>)
  & (<T>(val: PH, obj: Obj<T>) => PropEq_2<T>)
  & (<T>(val: T, obj: Obj<T>) => boolean)

type PropEq_1_3<T1> =
  & ((name: Prop, obj?: PH) => PropEq_3<T1>)
  & (<T>(name: PH, obj: Obj<T | T1>) => PropEq_1)
  & (<T>(name: Prop, obj: Obj<T | T1>) => boolean)

type PropEq_1_2<T> =
  & ((name: Prop, val?: PH) => PropEq_2<T>)
  & ((name: PH, val: T) => PropEq_1)
  & ((name: Prop, val: T) => boolean)

type PropEq =
  & ((name: Prop, val?: PH, obj?: PH) => PropEq_2_3)
  & (<T>(name: PH, val: T, obj?: PH) => PropEq_1_3<T>)
  & (<T>(name: PH, val: PH, obj: Obj<T>) => PropEq_1_2<T>)
  & (<T>(name: Prop, val: T, obj?: PH) => PropEq_3<T>)
  & (<T>(name: Prop, val: PH, obj: Obj<T>) => PropEq_2<T>)
  & (<T>(name: PH, val: T, obj: Obj<T>) => PropEq_1)
  & (<T>(name: Prop, val: T, obj: Obj<T>) => boolean)
```
<br>

**Used types**
* [Prop](/types/Prop)

<br>

**Examples**
```typescript
import { propEq } from 'https://deno.land/x/fae/mod.ts'

const obj1 = { name: 'Shubham', age: 22, hair: 'blue', isMarried: true }

propEq('name', 'Shubham', obj1) // true
propEq('hair', 'black', obj1) // false
```
<br>

```typescript
import { propEq, filter } from 'https://deno.land/x/fae/mod.ts'

const shivam = {name: 'shivam', age: 20, hair: 'brown'}
const shubham = {name: 'shubham', age: 22, hair: 'black'}
const Krish = {name: 'krish', age: 25, hair: 'black'}

const students = [shivam, shubham, krish]

const hasBrownHair = propEq('hair', 'brown')

filter(hasBrownHair, students) //=> [shubham]
```
