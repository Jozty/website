---
title:  head function
description: a thorough tour of head function
---
## Head

<br>

Returns the first element of the given list or string. Its return undefined for empty list.

<br>

&cross; Curried

<br>

**Type declaration**

```typescript
function _head = <L extends any[] | string>(functor: L): InferElementType<L> {
    //..
}
```
<br>

**Used types**
* [InferElementType](/types/InferElementType)

<br>

**Examples**

```typescript
import { head } from 'https://deno.land/x/fae/mod.ts'

head([1, 2, 3])           // 1
head([2, 3])              // 2
head([3])                 // 3
head(['fi', 'fo', 'fum']) // 'fi'
head(['head', 'tail'])    // 'head'
head([])                  // undefined

head('abc')               // 'a'
head('bc')                // 'b'
head('c')                 // 'c'
head('')                  // ''
```
