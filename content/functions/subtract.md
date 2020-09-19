---
title: subtract function
description: a thorough tour of subtract function
---

## Subtract

Subtracts two numbers

&check; Curried
<!---
&#10539; Not curred
-->

**Non curried type declaration**
```typescript
function subtract(a: number, b: number): number {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type Subtract_2 = ((b: number) => number) &
  ((b?: PH) => Subtract_2)

type Subtract_1 = ((a: number) => number) &
  ((a?: PH) => Subtract_1)

type Subtract = ((a: number, b: number) => number) &
  ((a: number, b?: PH) => Subtract_2) &
  ((a: PH, b: number) => Subtract_1) &
  ((a?: PH, b?: PH) => Subtract)
```
<br>

**Examples**
```typescript
import { subtract, _ } from 'https://deno.land/x/fae/mod.ts'

subtract(1, 2)                 // -1
subtract(1)(2)                 // -1

const subtract5 = subtract(_,5)
subtract5(-10)                 // -15
subtract(_, 25)(50)            // 25
            
```
```typescript
// Expression - (2*5+5-10)/2
const double = multiply(2);
const half = divide(_,2);
const add5 = add(5);
const subtract10 = subtract(_,10);
half(subtract10(add5(double(5))))          // 2.5
compose(half, subtract10, add5, double)(5) // 2.5
pipe(double, add5, subtract10, half)(5)    // 2.5
```
