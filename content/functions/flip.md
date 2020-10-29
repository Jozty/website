---
title: flip function
description: a thorough tour of flip function
---

## Flip
<br>

Inverts the first two arguments of a function

<br>

&cross; Curried

<br>

**Type declaration**

```typescript
function _flip(func:number): number {
  // ...
}
```
<br>

**Examples**
```typescript
import { flip, _ } from 'https://deno.land/x/fae/mod.ts'

const f = (a: string, b: string, c: string) => a + ' ' + b + ' ' + c
const i = (a: number, b: number, c: number) => a + b * c
const g = flip(f)

f('a', 'b', 'c')    // 'a b c'
g('a', 'b', 'c')    // 'b a c'
g('a', '@', 'A')    // '@ a A'

const h = flip(i)

i(2, 3, 4)           // 14
h(2, 3, 4)           // 11
i(2, -3, 4)          // -10
h(2, -3, 4)          // 5

const g = flip(f)('a')

g('b', 'c')         // 'b a c'
g(_, 'c')('b')      // 'b a c'
g('b', _)('c')      // 'b a c'
g(_, _)('b', 'c')   // 'b a c'
```