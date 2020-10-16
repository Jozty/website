---
title: pluck function
description: a thorough tour of pluck function
---

## Pluck 
<br>

Returns a new list by plucking the same named property off all objects in the list supplied.

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _pluck<T>(p: Prop, list: Obj<T>[]): T[] {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type Pluck_2 = <T>(list: Obj<T>[]) => T[]

type Pluck_1<T> = (p: Prop) => T[]

type Pluck =
  & ((p: Prop, list?: PH) => Pluck_2)
  & (<T>(p: PH, list: Obj<T>[]) => Pluck_1<T>)
  & (<T>(p: Prop, list: Obj<T>[]) => T[])
```
<br>

**Used types**
* [Prop](/types/Prop)
* [Obj](/types/Obj)

<br>

**Examples**
```typescript
import { pluck } from 'https://deno.land/x/fae/mod.ts'

const getAges = pluck('age')
getAges([{name: 'shubham', age: 22}, {name: 'shivam', age: 23}]) // [22, 23]

pluck(0, [[1, 2], [3, 4]]) // [1, 3]
pluck('val', {a: {val: 3}, b: {val: 5}}) // {a: 3, b: 5}
```
<br>

```typescript
import { pluck, _ } from 'https://deno.land/x/fae/mod.ts'

const peoples = [
  { name: 'Shubham', age: 23, marks: [1, 2, 3, 4, 5] },
  { name: 'Shivam', age: 21, marks: [11, 21, 31, 41, 51] },
  { name: 'krish', age: 20, marks: [12, 22, 32, 42, 52] },
]

const pluckFromPeoples = pluck(_, peoples)

pluckFromPeoples('name') // ['Shubham', 'Shivam', 'krish']
pluckFromPeoples('age') // [23, 21, 20]
```
