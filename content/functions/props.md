---
title: props function
description: a thorough tour of props function
---

## Props
<br>

Returns an array of multiple on the `obj`. Order is preserved.

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _props<T>(p: Prop[], obj: Obj<T> | ArrayLike<T>): (T | undefined)[] {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type Props_2 = <T>(obj: Obj<T> | ArrayLike<T>) => (T | undefined)[]

type Props_1<T> = (p: Prop[]) => (T | undefined)[]

type Props =
  & ((p: Prop[], obj?: PH) => Props_2)
  & (<T>(p: PH, obj: Obj<T> | ArrayLike<T>) => Props_1<T>)
  & (<T>(p: Prop[], obj: Obj<T> | ArrayLike<T>,) => (T | undefined)[])
```
<br>

**Used types**
* [Prop](/types/Prop)
* [Obj](/types/Obj)

<br>

**Examples**
```typescript
import { props } from 'https://deno.land/x/fae/mod.ts'

const obj = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }

props(['a', 'e'], obj) // [1, 5]
props(['f', 'c', 'e'], obj) // [6, 3, 5]
props(['a', 'nonexistent'], obj) // [1, undefined]
```
