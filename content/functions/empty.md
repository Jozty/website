---
title: Empty function
description: Gives the empty value of its argument's type.
keywords: Empty
---

## Empty
<br>

Returns the empty value of its argument's type.

<br>

&cross; Curried

<br>

**Type declaration**
```typescript
function _empty<T>(x: T): T | Partial<T> {
    //..
}
```
<br>

**Examples**
```typescript
import { empty } from 'https://deno.land/x/fae/mod.ts'

empty([1, 2, 3, 4, 5])          // []
empty([[1, 2], 3, [4, 5]])      // []
empty([[[1, 2], 3, [4, 5]]])    // []
empty({ x: 1, y: 2 })           // {}
empty('abc')                    // ''
empty('[1, 2, 3]')              // ''
empty(new String('abc'))        // ''
empty(new Array([1, 2]))        // []
``` 