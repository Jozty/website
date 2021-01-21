---
title: Dissoc function
description: Makes a shallow clone of `obj`, deleting `prop` from the new object. All non-primitive properties are copied by reference.
keywords: Dissoc, delete prop, remove
---

## Dissoc 
<br>

Makes a shallow clone of `obj`, deleting `prop` from the new object.
All non-primitive properties are copied by reference.

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _dissoc(prop: string | number, obj: ObjRec): ObjRec {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type Dissoc_2 = (obj: ObjRec) => ObjRec

type Dissoc_1 = (prop: string | number) => ObjRec

type Dissoc =
  & ((prop: string | number, obj?: PH) => Dissoc_2)
  & ((prop: PH, obj: ObjRec) => Dissoc_1)
  & ((prop: string | number, obj: ObjRec) => ObjRec)
```
<br>

**Used types**
* [ObjRec](/types/ObjRec)

<br>

**Examples**
```typescript
import { dissoc } from 'https://deno.land/x/fae/mod.ts'

dissoc('b', {a: 1, b: 2, c: 3})   // {a: 1, c: 3}
```
