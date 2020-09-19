---
title: divide function
description: a thorough tour of divide function
---

## Divide

Divides two numbers

&check; Curried
<!---
&#10539; Not curred
-->

**Non curried type declaration**
```typescript
function divide(a: number, b: number): number {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type Divide_2 = ((b: number) => number)
 & ((b?: PH) => Divide_2)

type Divide_1 = ((a: number) => number)
 & ((a?: PH) => Divide_1)

type Divide = ((a: number, b: number) => number) &
  ((a: number, b?: PH) => Divide_2) &
  ((a: PH, b: number) => Divide_1) &
  ((a?: PH, b?: PH) => Divide)
```
<br>

**Examples**
```typescript
import { divide, _ } from 'https://deno.land/x/fae/mod.ts'

divide(25, 5)                 // 5
divide(25)(5)                 // 5

const divideBy10 = divide(_,10)
divideBy10(50)               // 5
divide(_, 5)(25)            // 5

const reciprocal = divide(1)
reciprocal(4)               // 0.25
            
```
```typescript
import { add, _ } from 'https://deno.land/x/fae/mod.ts'
import { subtract, _ } from 'https://deno.land/x/fae/mod.ts'
import { multiply, _ } from 'https://deno.land/x/fae/mod.ts'
import { divide, _ } from 'https://deno.land/x/fae/mod.ts'
import { pipe } from 'https://deno.land/x/fae/mod.ts'
import { compose } from 'https://deno.land/x/fae/mod.ts'
// Expression - (5+15-10)*3/2
const triple = multiply(3);
const half = divide(_,2);
const add5 = add(5);
const subtract10 = subtract(_,10);
half(triple(subtract10(add5(15))))          // 15
compose(half, triple, subtract10, add5)(15) // 15
pipe(add5, subtract10, triple, half)(15)    // 15
```
