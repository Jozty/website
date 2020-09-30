---
title: median function
description: a thorough tour of median function
---

## Median
<br>

Returns the median of the given list of numbers. NaNs are filtered out, if present. Returns NaN if the list is empty.

<br>

&cross; Curried

<br>
<!---
&#10539; Not curred
-->

**Non curried type declaration**
```typescript
function _median(list: number[]) {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type Median = (list: number[]) => number
```
<br>

**Examples**
```typescript
import { median } from 'https://deno.land/x/fae/mod.ts'

const ages = [2, 5, 3, 4, 4, 6, 7, 3]
const data = {
  'data1': [1, 3, 4, 5, 6],
  'data2': [9, 3, -5, -2, -1],
  'data3': [Infinity, 3, 8, 5],
  'data4': [Infinity, Infinity],
  'data5': [Infinity, Infinity, NaN, -Infinity],
  'data6': [],
  'data7': [1000000, 100000, 0.23492, 999999],
  'data8': [Infinity, -Infinity],
  'data9': [7.5, 2.8, -10.6, 9],
  'data10': [2, 4, NaN] 
}

median(ages)	    // 4
median(data.data1)	// 4
median(data.data2)	// -1
median(data.data3)	// 6.5
median(data.data4)	// Infinity
median(data.data5)	// Infinity
median(data.data6)	// NaN
median(data.data7)	// 549999.5
median(data.data8)	// NaN
median(data.data9)	// 5.15
median(data.data10)	// 3
```

