---
title: FindIndex function
description: Takes in Array and Element as its 2 parameters. Return the 1st index If element is matched or -1 is unmatched.
keywords: FindIndex, Find, Index, Find Index
---

## FindIndex

<br>

Takes in Array and Element as its 2 parameters. Return the 1st index If element is matched or -1 is unmatched.

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _findIndex<T>(arr: Array<T>, element: T): number {
    //..
}
```

<br>

**Curried type declaration**

```typescript
type FindIndex_2<T> = (element: T) => number

type FindIndex_1<T> = (arr: T[]) => number

type FindIndex =
  & (<T>(arr: T[], element?: PH) => FindIndex_2<T>)
  & (<T>(arr: PH, element: T) => FindIndex_1<T>)
  & (<T>(arr: T[], element: T) => number)
```

<br>

**Examples**
```typescript
import { findIndex, _ } from 'https://deno.land/x/fae/mod.ts'

const obj1 = { x: 10 }
const obj2 = { x: 20 }
const a = [2, 4, obj1, 3, 12, 25, obj1, 'Foo', undefined, 21]
const b = [2, 4, 3, 12, 25, 21]

findIndex(a, undefined) // 8
findIndex(a, 'Foo')     // 7
findIndex(a, obj1)      // 2

findIndex(a, _)(obj1)   // 2
findIndex(_,3)(b)       // 2
findIndex(a)(obj1)      // 2
``` 