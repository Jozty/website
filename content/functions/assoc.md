---
title: Assoc function
description: Makes a shallow clone of object, setting or overriding the specified property with the given value.
keywords: Assoc
---

## Assoc
<br>

Makes a shallow clone of object, setting or overriding the specified property with the given value. All non-primitive properties are copied by reference.
<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _assoc(prop: string | number, val: unknown, obj: ObjRec): ObjRec {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type Assoc_1 = (prop: string | number) => ObjRec

type Assoc_2 = (val: unknown) => ObjRec

type Assoc_3 = (obj: ObjRec) => ObjRec

type Assoc_2_3 =
  & ((val: PH, obj: ObjRec) => Assoc_2)
  & ((val: unknown, obj?: PH) => Assoc_3)
  & ((val: unknown, obj: ObjRec) => ObjRec)

type Assoc_1_3 =
  & ((prop: PH, obj: ObjRec) => Assoc_1)
  & ((prop: string | number, obj?: PH) => Assoc_3)
  & ((prop: string | number, obj: ObjRec) => ObjRec)

type Assoc_1_2 =
  & ((prop: PH, val: unknown) => Assoc_1)
  & ((prop: string | number, val?: PH) => Assoc_2)
  & ((prop: string | number, val: unknown) => ObjRec)

type Assoc =
  & ((prop: string | number, val?: PH, obj?: PH) => Assoc_2_3)
  & ((prop: PH, val: unknown, obj?: PH) => Assoc_1_3)
  & ((prop: PH, val: PH, obj: ObjRec) => Assoc_1_2)
  & ((prop: string | number, val: unknown, obj?: PH) => Assoc_3)
  & ((prop: string | number, val: PH, obj: ObjRec) => Assoc_2)
  & ((prop: PH, val: unknown, obj: ObjRec) => Assoc_1)
  & ((prop: string | number, val: unknown, obj: ObjRec) => ObjRec)
```

<br>

**Used types**

- [ObjRec](/types/ObjRec)

<br>

**Examples**
```typescript
import { assoc, _ } from 'https://deno.land/x/fae/mod.ts'

const obj1 = { a: 1, b: { c: 2, d: 3 }, e: 4, f: 5 }
const obj2 = assoc('z', { x: 42 }, obj1)
const functor = { a: 1, b: { c: 2, d: 3 }, e: 4, f: 5 }
const val = { x: 42 }
const a_2_3 = assoc('z')
const a_1_3 = assoc(_, val)


const expected = {
  a: 1,
  b: { c: 2, d: 3 },
  e: 4,
  f: 5,
  z: { x: 42 },
}

obj2                    // { a: 1, b: { c: 2, d: 3 }, e: 4, f: 5, z: { x: 42 } }

a_2_3(val)(functor)     // expected
a_2_3(val, functor)     // expected
a_2_3(_, functor)(val)  // expected
a_2_3(val, _)(functor)  // expected


a_1_3('z')(functor)     // expected
a_1_3('z', functor)     // expected
a_1_3(_, functor)('z')  // expected
a_1_3('z', _)(functor)  // expected
```
