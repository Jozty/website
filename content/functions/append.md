---
title: Append function
description: Add the element to the end of list and returns new list without affecting original.
keywords: Append
---

## Append
<br>

Add the element to the end of list and returns new list without affecting original.

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _append<T>(el: T, list: T[]): T[] {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type Append_2<T> = (list: T[]) => T[]

type Append_1<T> = (el: T) => T[]

type Append = 
  & (<T>(el: T, list?: PH) => Append_2<T>) 
  & (<T>(el: PH, list: T[]) => Append_1<T>) 
  & (<T>(el: T, list: T[]) => T[])
```

<br>

**Examples**
```typescript
import { append, _ } from 'https://deno.land/x/fae/mod.ts'

    const arr = [1, 2, 3, 4, 5]
    const arr2 = [...arr]
    const a = 9
    const b = [1, 2, 3, 4, 5, 6, 7, 8]
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    append(6, arr)       // [...arr, 6]
    append('ads', [])    // ['ads']
    append(['abc'], [])  // [['abc']]
    append(1, [1, 1, 1]) // [1, 1, 1, 1]
    append(a, b)         // expected
    append(a)(b)         // expected
    append(a, _)(b)      // expected
    append(_, b)(a)      // expected
```
