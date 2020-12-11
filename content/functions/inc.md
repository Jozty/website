---
title: Inc function
description: Increases its argument value by 1
keywords: Inc, Increase
---

## Inc
<br>

 Increases its argument by 1.

<br>

&cross; Curried

<br>

**Type declaration**
```typescript
function _inc(element: number): number {
    //..
}
```
<br>

**Examples**
```typescript
import { inc } from 'https://deno.land/x/fae/mod.ts'

inc(-1)        // 0
inc(0)         // 1
inc(1)         // 2
inc(1020.34)   // 1021.34
inc(-Infinity) // -Infinity
inc(Infinity)  // Infinity
inc(NaN)       // NaN
``` 