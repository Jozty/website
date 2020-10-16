---
title: propIs function
description: a thorough tour of propIs function
---

## PropIs 
<br>

Returns `true` if the specified object property is of the given type; `false` otherwise.

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _propIs<T>(type: string, name: Prop, obj: Obj<T>): boolean {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type PropIs_1<T> = (type: string) => boolean

type PropIs_2<T> = (name: Prop) => boolean

type PropIs_3 = <T>(obj: Obj<T>) => boolean

type PropIs_2_3 =
  & ((name: Prop, obj?: PH) => PropIs_3)
  & (<T>(name: PH, obj: Obj<T>) => PropIs_2<T>)
  & (<T>(name: Prop, obj: Obj<T>) => boolean)

type PropIs_1_3 =
  & ((type: string, obj?: PH) => PropIs_3)
  & (<T>(type: PH, obj: Obj<T>) => PropIs_1<T>)
  & (<T>(type: string, obj: Obj<T>) => boolean)

type PropIs_1_2<T> =
  & ((type: string, name?: PH) => PropIs_2<T>)
  & ((type: PH, name: Prop) => PropIs_1<T>)
  & ((type: string, name: Prop) => boolean)

type PropIs =
  & ((type: string, name?: PH, obj?: PH) => PropIs_2_3)
  & ((type: PH, name: Prop, obj?: PH) => PropIs_1_3)
  & (<T>(type: PH, name: PH, obj: Obj<T>) => PropIs_1_2<T>)
  & ((type: string, name: Prop, obj?: PH) => PropIs_3)
  & (<T>(type: string, name: PH, obj: Obj<T>) => PropIs_2<T>)
  & (<T>(type: PH, name: Prop, obj: Obj<T>) => PropIs_1<T>)
  & (<T>(type: string, name: Prop, obj: Obj<T>,) => boolean)

```
<br>

**Used types**
* [Prop](/types/Prop)

<br>

**Examples**
```typescript
import { propIs } from 'https://deno.land/x/fae/mod.ts'

const obj1 = { name: 'Shubham', age: 22, hair: 'blue', isMarried: true }

propIs('Number', 'a', { a: 1, y: 2 }) // true
propIs('Number', 'a', { a: 'foo' }) // false
```
