---
title: Sum function
description: Adds together all the elements of a list.
keywords: Sum
---

## Sum
<br>

Adds together all the elements of a list.

<br>

&cross; Curried

<br>

**Non curried type declaration**
```typescript
function _sum(list: number[]): number {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type Sum = (list: number[]) => number
```
<br>

**Examples**
```typescript
import { sum } from 'https://deno.land/x/fae/mod.ts'

sum([1, 2, 3, 4]) // 10
sum([1, 2, 3, NaN]) // NaN
sum([1, 2, 3, Infinity]) // Infinity
sum([1, 2, 3, Infinity, -Infinity]) // NaN
```
