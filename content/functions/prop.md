---
title: prop function
description: a thorough tour of prop function
---

## Prop 
<br>

Returns property `p` on the `obj` if exists

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _prop<T>(p: Prop, obj: Obj<T> | ArrayLike<T>): T | undefined {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type Prop_2 = <T>(obj: Obj<T> | ArrayLike<T>) => T | undefined

type Prop_1<T> = (p: Prop) => T | undefined

type PropF =
  & ((p: Prop, obj?: PH) => Prop_2)
  & (<T>(p: PH, obj: Obj<T> | ArrayLike<T>) => Prop_1<T>)
  & (<T>(p: Prop, obj: Obj<T> | ArrayLike<T>) => T | undefined)
```
<br>

**Used types**
* [Prop](/types/Prop)
* [Obj](/types/Obj)

<br>

**Examples**
```typescript
import { prop } from 'https://deno.land/x/fae/mod.ts'

const deities = ['Cthulhu', 'Dagon', 'Yog-Sothoth']
prop(0, deities) // 'Cthulhu'
prop(1, deities) // 'Dagon'
prop(2, deities) // 'Yog-Sothoth'
prop(-1, deities) // 'Yog-Sothoth'

const obj = { name: 'John', age: 23 }
prop('name', obj) // 'John'
prop('name')(obj) // 'John'
prop('name', _)(obj) // 'John'
prop(_, obj)('name') // 'John'
```
