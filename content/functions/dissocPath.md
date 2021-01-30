---
title: DissocPath function
description: Makes a shallow clone of an object `obj`, deleting value at at the given `path`. Note that this copies and flattens prototype properties onto the new object as well. All non-primitive properties are copied by reference.
keywords: DissocPath, delete prop, remove
---

## DissocPath 
<br>

Makes a shallow clone of an object `obj`, deleting value at
at the given `path`. Note that this copies and flattens prototype properties onto the
new object as well. All non-primitive properties are copied by reference.

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _dissocPath(path: Path, obj: ObjRec): ObjRec {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type DissocPath_2 = (obj: ObjRec) => ObjRec

type DissocPath_1 = (path: Path) => ObjRec

type DissocPath =
  & ((path: Path, obj?: PH) => DissocPath_2)
  & ((path: PH, obj: ObjRec) => DissocPath_1)
  & ((path: Path, obj: ObjRec) => ObjRec)
```
<br>

**Used types**
* [ObjRec](/types/ObjRec)
* [Path](/types/Path)

<br>

**Examples**
```typescript
import { dissocPath } from 'https://deno.land/x/fae/mod.ts'

dissocPath(
  ['a', 'b', 'c'],
  {a: {b: {c: 42}}}
)    // {a: {b: {}}}
```
