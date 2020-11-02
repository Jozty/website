---
title: eqProps function
description: a thorough tour of eqProps function
---

## EqProps

<br>

Reports whether two objects have the same value, for the specified property.
Useful as a curried predicate.

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _eqProps<T>(prop: Prop, obj1: Obj<T>, obj2: Obj<T>): Obj<T> {
    //..
}
```
<br>

**Curried type declaration**

```typescript
type EqProps_1<T> = (prop: Prop) => boolean

type EqProps_2<T> = (obj1: Obj<T>) => boolean

type EqProps_3<T> = (obj2: Obj<T>) => boolean

type EqProps_2_3 =
 & (<T>(obj1: Obj<T>, obj2?: PH) => EqProps_3<T>)
 & (<T>(obj1: PH, obj2: Obj<T>) => EqProps_2<T>)
 & (<T>(obj1: Obj<T>, obj2: Obj<T>) => boolean)

type EqProps_1_3<T> =
 & ((prop: Prop, obj2?: PH) => EqProps_3<T>)
 & ((prop: PH, obj2: Obj<T>) => EqProps_1<T>)
 & ((prop: Prop, obj2: Obj<T>) => boolean)

type EqProps_1_2<T> =
 & ((prop: Prop, obj1?: PH) => EqProps_2<T>)
 & ((prop: PH, obj1: Obj<T>) => EqProps_1<T>)
 & ((prop: Prop, obj1: Obj<T>) => boolean)

type EqProps =
 & ((prop: Prop, obj1?: PH, obj2?: PH) => EqProps_2_3)
 & (<T>(prop: PH, obj1: Obj<T>, obj2?: PH) => EqProps_1_3<T>)
 & (<T>(prop: PH, obj1: PH, obj2: Obj<T>) => EqProps_1_2<T>)
 & (<T>(prop: Prop, obj1: Obj<T>, obj2?: PH) => EqProps_3<T>)
 & (<T>(prop: Prop, obj1: PH, obj2: Obj<T>) => EqProps_2<T>)
 & (<T>(prop: PH, obj1: Obj<T>, obj2: Obj<T>) => EqProps_1<T>)
 & (<T>(prop: Prop,obj1: Obj<T>,obj2: Obj<T>) => boolean)
```
<br>

**Used types**
* [Obj](/types/Obj)
* [Prop](/types/Prop)

<br>

**Examples**
```typescript
import { eqProps, _ } from 'https://deno.land/x/fae/mod.ts'

eqProps(
  'value',
  { value: 0 },
  { value: -0 },
)                                                            // false

eqProps(
  'value',
  { value: -0 },
  { value: 0 },
)                                                            // false

eqProps(
  'value',
  { value: NaN },
  { value: NaN },
)                                                            // true

eqProps(
  'value',
  { value: Infinity },
  { value: Infinity },
)                                                            // true

eqProps(
  'value',
  { value: Infinity }, 
  { value: -Infinity },
)                                                            // false

eqProps(
  'age',
  { name: 'shubham', age: 10 },
  { name: 'shubham', age: 12 },
)                                                            // false
  
eqProps(
  'name',
  { name: 'shivam', age: 10 },
  { name: 'shubham', age: 10 },
)                                                            // false

eqProps(
  _,
  { value: 0 },
  { value: -0 },
)('value')                                                   // false

eqProps('value',_,)(
  { value: -0 },
  { value: 0 },
)                                                            // false

eqProps(
  _,
  { name: 'shubham', age: 10 },
  { name: 'shubham', age: 12 },
)('name')                                                    // true
``` 