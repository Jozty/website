---
title: multiply function
description: a thorough tour of multiply function
---

## Multiply

Multiplies two numbers

&check; Curried
<!---
&#10539; Not curred
-->

**Non curried type declaration**
```typescript
function multiply(a: number, b: number): number {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type Multiply_2 = ((b: number) => number)
& ((b?: PH) => Multiply_2)

type Multiply_1 = ((a: number) => number) 
& ((a?: PH) => Multiply_1)

type Multiply = ((a: number, b: number) => number) &
  ((a: number, b?: PH) => Multiply_2) &
  ((a: PH, b: number) => Multiply_1) &
  ((a?: PH, b?: PH) => Multiply)
```
<br>

**Examples**
```typescript
import { multiply, _ } from 'https://deno.land/x/fae/mod.ts'

multiply(4, 2)                 // 8
multiply(3)(2)                 // 6

const multiply3 = multiply(3)
multiply3(5)                 // 15
multiply(_, 25)(2)            // 50
            
```
```typescript
import { add, _ } from 'https://deno.land/x/fae/mod.ts'
import { subtract, _ } from 'https://deno.land/x/fae/mod.ts'
import { multiply, _ } from 'https://deno.land/x/fae/mod.ts'
import { divide, _ } from 'https://deno.land/x/fae/mod.ts'
// Expression - (5+25-10)*3/2
const triple = multiply(3);
const half = divide(_,2);
const add5 = add(5);
const subtract10 = subtract(_,10);
half(triple(subtract10(add5(25))))          // 30
compose(half, triple, subtract10, add5)(25) // 30
pipe(add5, subtract10, triple, half)(25)    // 30
```