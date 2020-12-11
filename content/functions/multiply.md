---
title: Multiply function
description: Multiply two numbers
keywords: Multiply
---

## Multiply
<br>

Multiplies two numbers

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _multiply(a: number, b: number): number {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type Multiply_2 = (b: number) => number

type Multiply_1 = (a: number) => number

type Multiply = 
  & ((a: number, b?: PH) => Multiply_2)
  & ((a: PH, b: number) => Multiply_1)
  & ((a: number, b: number) => number)
```
<br>

**Examples**
```typescript
import { multiply, _ } from 'https://deno.land/x/fae/mod.ts'

multiply(4, 2)                 // 8
multiply(3)(2)                 // 6

const multiply3 = multiply(3)
multiply3(5)                  // 15
multiply(_, 25)(2)            // 50
            
```
<br>

```typescript
import { add, subtract, multiply, divide, pipe, compose, _ } from 'https://deno.land/x/fae/mod.ts'

// Expression - (5+25-10)*3/2
const triple = multiply(3)
const half = divide(_, 2)
const add5 = add(5)
const subtract10 = subtract(_, 10)

half(triple(subtract10(add5(25))))          // 30
compose(half, triple, subtract10, add5)(25) // 30
pipe(add5, subtract10, triple, half)(25)    // 30
```
