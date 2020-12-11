---
title: IndexOf function
description: Gives the position of the first occurrence of value in list(-1 if item is not in the list)
keywords: Indexof, Index
---

## IndexOF

<br>

Returns the position of the first occurrence of `value` in `list`, or -1 if the item is not included in the array

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _indexOf<T>(value: T, list: T[]): number {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type IndexOf_2<T> = (list: T[]) => number

type IndexOf_1<T> = (value: T) => number

type IndexOf =
  & (<T>(value: T, list?: PH) => IndexOf_2<T>)
  & (<T>(value: PH, list: T[]) => IndexOf_1<T>)
  & (<T>(value: T, list: T[]) => number)
```

<br>

**Examples**
```typescript
import { indexOf, _ } from 'https://deno.land/x/fae/mod.ts'

const list = [0, 10, 20, 30]

indexOf(30, list)           // 3
indexOf(40, list)           // -1
indexOf(0, list)            // 0

const input = [1, 2, 1, 2, 5]

indexOf(1, input)           // 0
indexOf(2, input)           // 1
indexOf(5, input)           // 4

indexOf(_, [-0])(0)         // -1
indexOf(5, _)(input)        // 4
indexOf(_, input)(2)        // 1
```