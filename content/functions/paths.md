---
title: path function
description: a thorough tour of path function
---

## Paths
<br>

Retrieves the values at given paths `pathsArr` of `obj`. Each path in the `pathsArr` may be any array of keys or string of keys separated by `/` or `.` .

<br>

&check; Curried

<br>
<!---
&#10539; Not curred
-->

**Non curried type declaration**
```typescript
function _paths<T, R>(pathsArr: Path[], obj: ObjRec<T> | null): R[] {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type Paths_2 = <T, R>(obj: ObjRec<T> | null) => R[]

type Paths_1<T, R> = (pathsArr: Path[]) => R[]

type Paths = 
  & ((pathsArr: Path[], obj?: PH) => Paths_2)
  & (<T, R>(pathsArr: PH, obj: ObjRec<T> | null) => Paths_1<T, R>)
  & (<T, R>(pathsArr: Path[], obj: ObjRec<T> | null) => R[])
```
<br>

**Used types**
* [Path](/types/Path)
* [ObjRec](/types/ObjRec)

<br>

**Examples**
```typescript
import { paths, _ } from 'https://deno.land/x/fae/mod.ts'

const obj = {
  a: {
    b: {
      c: [100, 200, 300],
      d: 200,
    },
    e: {
      f: [],
      g: 'G',
    },
    h: null,
  },
  i: 'I',
  j: ['J'],
}

const path1 = Fae.paths(Fae._, obj)
path1([['a'], 'a.b.d'])                            // [ { b: { c: [ 100, 200, 300 ], d: 200 }, e: { f: [], g: 'G' }, h: null }, 200 ]
path1(['a/b/', 'a.b.c'])                           // [ { c: [ 100, 200, 300 ], d: 200 }, [ 100, 200, 300 ] ]
path1(['a.b.c.0', ['a', 'b', 'c', -1], 'a/e/f'])   // [ 100, 300, [] ]
path1([['a.e.g'], ['a', 'h']])                     // [ undefined, null ]
path1([['i'], 'j-1', ['a', 'f']])                  // [ "I", undefined, undefined ]
path1([[], ['a', '']])                             // [{a: { b: { c: [Array], d: 200 }, e: { f: [Array], g: 'G' }, h: null }, i: 'I', j: [ 'J' ]}, undefined]
```

