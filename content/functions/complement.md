---
title:  Complement function
description: Gives the complement of the function that pass in the parameter.
keywords: Complement
---
## Complement 
<br>

Complement a function

<br>

&cross; Curried

<br>

**Type declaration**

```typescript
function _complement<T extends any[]>(a: (...args: T) => boolean): (...args: T) => boolean {
  // ..
}
```
<br>

**Examples**
```typescript
import { complement } from 'https://deno.land/x/fae/mod.ts'

const even = (x: number) => x % 2 === 0
const f = complement(even)

f(8)                        //false
f(9)                        //true
f(-4)                       //false
f(0)                        //false
f(0.2)                      //true
f(2.2)                      //true
f(8.0)                      //false

complement(isNaN)(NaN)      //false
complement(isNaN)(Infinity) //true
```
