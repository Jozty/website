---
title: mean function
description: a thorough tour of mean function
---

## Mean
<br>

Returns the mean of the given list of numbers.

<br>

&cross; Curried

<br>

**Type declaration**
```typescript
function _mean(list: number[]): number {
    //..
}
```
<br>

**Examples**
```typescript
import { mean } from 'https://deno.land/x/fae/mod.ts'

mean([1])                   // 1
mean([7, 6])                // 6.5
mean([2, 7, 9])             // 6
mean([2, 7, 9, 10])         // 7
mean([NaN, 2, 3, 5])        // NaN   
mean([Infinity, 7, 9, 10])  // Infinity
mean([-Infinity, 7, 9, 10]) // -Infinity
``` 