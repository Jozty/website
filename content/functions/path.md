---
title: Path function
description: Retrieve the value at a given path(path can be of array of key or string of key)
keywords: Path
---

## Path
<br>

Retrieve the value at a given path. The path may be any array of keys or string of keys separated by `/` or `.` .

<br>

&check; Curried

<br>
<!---
&#10539; Not curred
-->

**Non curried type declaration**
```typescript
function _path<R, T = any>(ps: Path, obj: ObjRec<T> | null): R {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type PathF_2 = <T, R>(obj: ObjRec<T> | null) => R

type PathF_1<T, R> = (ps: Path) => R

type PathF =
  & ((ps: Path, obj?: PH) => PathF_2)
  & (<T, R>(ps: PH, obj: ObjRec<T> | null) => PathF_1<T, R>)
  & (<T, R>(ps: Path, obj: ObjRec<T> | null) => R)
```
<br>

**Used types**
* [Path](/types/Path)
* [ObjRec](/types/ObjRec)

<br>

**Examples**
```typescript
import { path, _ } from 'https://deno.land/x/fae/mod.ts'

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

const path1 = path(_, obj)

path1(['a'])                  // { b: { c: [ 100, 200, 300 ], d: 200 }, e: { f: [], g: 'G' }, h: null }
path1('a/b/')                 // { c: [ 100, 200, 300 ], d: 200 }
path1('a.b.c')                // [ 100, 200, 300 ] 
path1('a/b/c/0')              // 100
path1(['a', 'b', 'c', -1])    // 300
path1('a/e/f')                // []
path1(['a.e.g'])              // undefined
path1(['a', 'h'])             // null
path1(['i'])                  // I
path1('j/-1')                 // J
path1(['a','f'])              // undefined
path1([])                     // {a: { b: { c: [ 100, 200, 300 ], d: 200 }, e: { f: [], g: 'G' }, h: null }, i: 'I', j: [ 'J' ]}
path1(['a', ''])              // undefined
```

