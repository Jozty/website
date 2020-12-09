---
title: not function
description: a thorough tour of not function
---

## Not
<br>

Returns the not(complement) value of the given value.

<br>

&cross; Curried

<br>

**Type declaration**
```typescript
function _not<T>(fn: T): boolean {
    //..
}
```
<br>

**Examples**
```typescript
import { not } from 'https://deno.land/x/fae/mod.ts'

not(true)           // false
not('')             // true
not('asas')         // false
not(1)              // false
not(0)              // true
not(-1)             // false
not(undefined)      // true
not(not(undefined)) // false
not({})             // false
not({ x: {} })      // false
not(null)           // true
not([])             // false
not([[]])           // false
not(![])            // true
not(NaN)            // true
``` 