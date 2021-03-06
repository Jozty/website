---
title: Subtract function
description: Subtracts two numbers
keywords: Subtract, Difference
---

## Subtract
<br>

Subtracts two numbers

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _subtract(a: number, b: number): number {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type Subtract_2 = (b: number) => number
 
type Subtract_1 = (a: number) => number

type Subtract = 
  & ((a: number, b?: PH) => Subtract_2)
  & ((a: PH, b: number) => Subtract_1)
  & ((a: number, b: number) => number)
```
<br>

**Examples**
```typescript
import { subtract, _ } from 'https://deno.land/x/fae/mod.ts'

subtract(1, 2)                 // -1
subtract(1)(2)                 // -1

const subtract5 = subtract(_, 5)
subtract5(-10)                 // -15
subtract(_, 25)(50)            // 25
            
```
<br>

```typescript
import { add, subtract, multiply, divide, pipe, compose, _ } from 'https://deno.land/x/fae/mod.ts'

// Expression - (2*5+5-10)/2
const double = multiply(2)
const half = divide(_, 2)
const add5 = add(5)
const subtract10 = subtract(_, 10)

half(subtract10(add5(double(5))))           // 2.5
compose(half, subtract10, add5, double)(5)  // 2.5
pipe(double, add5, subtract10, half)(5)     // 2.5
```
