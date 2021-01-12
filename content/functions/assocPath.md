---
title: AssocPath function
description: Makes a shallow clone of an object, setting or overriding the nodes required to create the given path, and placing the specific value at the tail end of that path
keywords: AssocPath
---

## AssocPath
<br>

Makes a shallow clone of an object, setting or overriding the nodes required to create the given path, and placing the specific value at the tail end of that path

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _assocPath(path: Path, val: any, obj: ObjRec): ObjRec {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type AssocPath_1 = (path: Path) => ObjRec

type AssocPath_2 = (val: any) => ObjRec

type AssocPath_3 = (obj: ObjRec) => ObjRec

type AssocPath_2_3 =
  & ((val: any, obj?: PH) => AssocPath_3)
  & ((val: PH, obj: ObjRec) => AssocPath_2)
  & ((val: any, obj: ObjRec) => ObjRec)

type AssocPath_1_3 =
  & ((path: Path, obj?: PH) => AssocPath_3)
  & ((path: PH, obj: ObjRec) => AssocPath_1)
  & ((path: Path, obj: ObjRec) => ObjRec)

type AssocPath_1_2 =
  & ((path: Path, val?: PH) => AssocPath_2)
  & ((path: PH, val: any) => AssocPath_1)
  & ((path: Path, val: any) => ObjRec)

type AssocPath =
  & ((path: Path, val?: PH, obj?: PH) => AssocPath_2_3)
  & ((path: PH, val: any, obj?: PH) => AssocPath_1_3)
  & ((path: PH, val: PH, obj: ObjRec) => AssocPath_1_2)
  & ((path: Path, val: any, obj?: PH) => AssocPath_3)
  & ((path: Path, val: PH, obj: ObjRec) => AssocPath_2)
  & ((path: PH, val: any, obj: ObjRec) => AssocPath_1)
  & ((path: Path, val: any, obj: ObjRec) => ObjRec)
```

<br>
**Used types**

- [ObjRec](/types/ObjRec)

<br>

**Examples**
```typescript
import { assocPath, _ } from 'https://deno.land/x/fae/mod.ts'

    const val = 42
    const path = ['f', 'g', 'i', 1]
    const expected = {
      a: { b: 1, c: 2, d: { e: 3 } },
      f: { g: { h: 4, i: [5, 42, 7], j: { k: 6, l: 7 } } },
      m: 8,
    }
    const functor = {
      a: { b: 1, c: 2, d: { e: 3 } },
      f: { g: { h: 4, i: [5, 6, 7], j: { k: 6, l: 7 } } },
      m: 8,
    }
    const a_2_3 = assocPath(path)

    a_2_3(val)(functor)                     // expected
    a_2_3(val, functor)                     // expected
    a_2_3(_, functor)(val)                  // expected
    a_2_3(val, _)(functor)                  // expected

    const a_1_3 = assocPath(_, val)

    a_1_3(path)(functor)                    // expected
    a_1_3(path, functor)                    // expected
    a_1_3(_, functor)(path)                 // expected
    a_1_3(path, _)(functor)                 // expected

    const a_1_2 = assocPath(_, _, functor)

    a_1_2(path)(val)                        // expected
    a_1_2(path, val)                        // expected
    a_1_2(_, val)(path)                     // expected
    a_1_2(path, _)(val)                     // expected
```
