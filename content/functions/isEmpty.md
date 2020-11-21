---
title: isEmpty function
description: a thorough tour of isEmpty function
---

## IsEmpty
<br>

Returns `true` if the given value is its type's empty value, `false` otherwise.

<br>

&cross; Curried

<br>

**Type declaration**
```typescript
function _isEmpty<T>(x: T): boolean {
    //..
}
```
<br>

**Examples**
```typescript
import { isEmpty } from 'https://deno.land/x/fae/mod.ts'

isEmpty(null)       // false
isEmpty(undefined)  // false
isEmpty(1 / 0)      // false
isEmpty(NaN)        // false    
isEmpty('')         // true
isEmpty(' ')        // false
isEmpty([])         // true
isEmpty([[]])       // false
isEmpty([null])     // false
isEmpty({})         // true
isEmpty({ x: [] })  // false
isEmpty({ x: 0 })   // false
``` 