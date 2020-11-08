---
title: insert function
description: a thorough tour of insert function
---

## Insert

<br>

Returns a new array with `element` inserted at `index` to `list` without affecting original one.

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _insert<T>(index: number, element: T, list: T[]): T[] {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type Insert_1<T> = (index: number) => T[]

type Insert_2<T> = (element: T) => T[]

type Insert_3<T> = (list: T[]) => T[]

type Insert_2_3 =
  & (<T>(element: T, list?: PH) => Insert_3<T>)
  & (<T>(element: PH, list: T[]) => Insert_2<T>)
  & (<T>(element: T, list: T[]) => T[])


type Insert_1_3<T> =
  & ((index: number, list?: PH) => Insert_3<T>)
  & (<T>(index: PH, list: T[]) => Insert_1<T>)
  & ((index: number, list: T[]) => T[])


type Insert_1_2<T> =
  & ((index: number, element?: PH) => Insert_2<T>)
  & ((index: PH, element: T) => Insert_1<T>)
  & ((index: number, element: T) => T[])


type Insert =
  & ((index: number, element?: PH, list?: PH) => Insert_2_3)
  & (<T>(index: PH, element: T, list?: PH) => Insert_1_3<T>)
  & (<T>(index: PH, element: PH, list: T[]) => Insert_1_2<T>)
  & (<T>(index: number, element: T, list?: PH) => Insert_3<T>)
  & (<T>(index: number, element: PH, list: T[]) => Insert_2<T>)
  & (<T>(index: PH, element: T, list: T[]) => Insert_1<T>)
  & (<T>(index: number, element: T, list: T[]) => T[])
```

<br>

**Examples**
```typescript
import { insert, _ } from 'https://deno.land/x/fae/mod.ts'

const list = ['a', 'b', 'c', 'd', 'e']

insert(2, ['s', 't'], list)     // ['a', 'b', ['s', 't'], 'c', 'd', 'e']
insert(3, ['a', 'b'], list)     // ['a', 'b', 'c', ['a', 'b'], 'd', 'e']
insert(4, ['s', 't'], list)     // ['a', 'b', 'c', 'd', ['s', 't'], 'e']

insert(8, 'z', list)            // ['a', 'b', 'c', 'd', 'e', 'z']
insert(0, 'z', list)            // ['z', 'a', 'b', 'c', 'd', 'e']
insert(-1, 'z', list)           // ['a', 'b', 'c', 'd', 'e', 'z']

insert(0)('z')(list)            // ['z', 'a', 'b', 'c', 'd', 'e'])
insert(0, _, list)('z')         // ['z', 'a', 'b', 'c', 'd', 'e'])
insert(_, 'z', list)(8)         // ['a', 'b', 'c', 'd', 'e', 'z'])
insert(3, 'x', _)(list)         // ['a', 'b', 'c', 'x', 'd', 'e'])
insert(3, _, list)('x')         // ['a', 'b', 'c', 'x', 'd', 'e'])
insert(_, _, list)(4, 'x')      // ['a', 'b', 'c', 'd', 'x', 'e'])
insert(5, _, _)('x', list)      // ['a', 'b', 'c', 'd', 'e', 'x'])
insert(_, 'x', _)(1, list)      // ['a', 'x', 'b', 'c', 'd', 'e'])
insert(_, _, list)(1)('x')      // ['a', 'x', 'b', 'c', 'd', 'e'])
```