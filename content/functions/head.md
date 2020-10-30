---
title:  head function
description: a thorough tour of head function
---
## Complement

<br>

Returns the first element of the given list or string. In some libraries
this function is named `first`.

<br>

&cross; Curried

<br>

**Type declaration**

```typescript
type HeadReturnType<F> = F extends string
  ? string
  : F extends (infer U)[]
  ? U
  : never
  
function _head = <L extends any[] | string>(functor: L) : HeadReturnType<L> {
    //..
}
```
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
