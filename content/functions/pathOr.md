---
title: pathOr function
description: a thorough tour of pathOr function
---

## PathOr
<br>

If the given, non-null object has a value at the given path, returns the value at that path. Otherwise returns the provided default value.

<br>

&check; Curried

<br>
<!---
&#10539; Not curred
-->

**Non curried type declaration**
```typescript
function _pathOr<T, D, P>(d: D, p: Path, obj: ObjRec<T> | null) {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type PathOr_1<T> = (<D, P>(d: D) => D | P)
  & ((d?: PH) => PathOr_1<T>)

type PathOr_2<T, D> = (<P>(p: Path) => D | P)
  & ((p?: PH) => PathOr_2<T, D>)

type PathOr_3<D> = (<T, P>(obj: ObjRec<T> | null) => D | P)
  & ((obj?: PH) => PathOr_3<D>)

type PathOr_2_3<D> = (<T, P>(p: Path, obj: ObjRec<T> | null) => D | P)
  & ((p: Path, obj?: PH) => PathOr_3<D>)
  & (<T>(p: PH, obj: ObjRec<T> | null) => PathOr_2<T, D>)
  & ((p?: PH, obj?: PH) => PathOr_2_3<D>)

type PathOr_1_3 = (<T, D, P>(d: D, obj: ObjRec<T> | null) => D | P)
  & (<D>(d: D, obj?: PH) => PathOr_3<D>)
  & (<T>(d: PH, obj: ObjRec<T> | null) => PathOr_1<T>)
  & ((d?: PH, obj?: PH) => PathOr_1_3)

type PathOr_1_2<T> = (<D, P>(d: D, p: Path) => D | P)
  & (<D>(d: D, p?: PH) => PathOr_2<T, D>)
  & ((d: PH, p: Path) => PathOr_1<T>)
  & ((d?: PH, p?: PH) => PathOr_1_2<T>)

type PathOr = (<T, D, P>(d: D, p: Path, obj: ObjRec<T> | null) => D | P)
  & ((d?: PH, p?: PH, obj?: PH) => PathOr)
  & (<D>(d: D, p?: PH, obj?: PH) => PathOr_2_3<D>)
  & ((d: PH, p: Path, obj?: PH) => PathOr_1_3)
  & (<T>(d: PH, p: PH, obj: ObjRec<T> | null) => PathOr_1_2<T>)
  & (<D>(d: D, p: Path, obj?: PH) => PathOr_3<D>)
  & (<T, D>(d: D, p: PH, obj: ObjRec<T> | null) => PathOr_2<T, D>)
  & (<T>(d: PH, p: Path, obj: ObjRec<T> | null) => PathOr_1<T>)
```
<br>

**Examples**
```typescript
import { pathOr, _ } from 'https://deno.land/x/fae/mod.ts'

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

const path1 = pathOr('Unknown',_, obj)

path1(['a'])                  // { b: { c: [ 100, 200, 300 ], d: 200 }, e: { f: [], g: 'G' }, h: null }
path1('a/b/')                 // { c: [ 100, 200, 300 ], d: 200 }
path1('a.b.c')                // [ 100, 200, 300 ] 
path1('a/b/c/0')              // 100
path1(['a', 'b', 'c', -1])    // 300
path1('a/e/f')                // []
path1(['a.e.g'])              // Unknown
path1(['a', 'h'])             // Unknown
path1(['i'])                  // I
path1('j/-1')                 // J
path1(['a','f'])              // Unknown
path1([])                     // {a: { b: { c: [ 100, 200, 300 ], d: 200 }, e: { f: [], g: 'G' }, h: null }, i: 'I', j: [ 'J' ]}
path1(['a', ''])              // Unknown
```

