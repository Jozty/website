---
title: Zip function
description: Creates a new list out of two passed lists by pairing up equally-positioned pair in both the lists (length will be truncate to the length of shorter list)
keywords: Zip
---

## Zip
<br>

Creates a new list out of two passed lists by pairing up equally-positioned pair in both the lists.
The returned is truncated to the length of the shorter of the two input lists.

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _zip<T1, T2>(list1: T1[], list2: T2[]): [T1, T2][] {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type Zip_2<T1> = <T2>(list2: T2[]) => [T1, T2][]

type Zip_1<T2> = <T1>(list1: T1[]) => [T1, T2][]

type Zip = 
  & (<T1>(list1: T1[], list2?: PH) => Zip_2<T1>)
  & (<T2>(list1: PH, list2: T2[]) => Zip_1<T2>)
  & (<T1, T2>(list1: T1[], list2: T2[]) => [T1, T2][])
```
<br>

**Examples**
```typescript
import { zip, _ } from 'https://deno.land/x/fae/mod.ts'

const a = [10, 20, 30]
const b = ['A', 'B', 'C']
const c = ['Rat', 'Mouse', 'Cat', 'Dog']
const zipper = zip(_, a)
const zipperX = zip(a)

zip(a)(b)                 // [ [ 10, "A" ], [ 20, "B" ], [ 30, "C" ] ]
zip(a, b)                 // [ [ 10, "A" ], [ 20, "B" ], [ 30, "C" ] ]
zipper(b)                 // [ [ "A", 10 ], [ "B", 20 ], [ "C", 30 ] ]
zipperX(b)                // [ [ 10, "A" ], [ 20, "B" ], [ 30, "C" ] ]
zip(a, c)                 // [ [ 10, "Rat" ], [ 20, "Mouse" ], [ 30, "Cat" ] ]
```

