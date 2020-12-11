---
title: Divide function
description: Divides two numbers
keywords: Divide
---

## Divide
<br>

Divides two numbers

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _divide(a: number, b: number): number {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type Divide_2 = (b: number) => number

type Divide_1 = (a: number) => number

type Divide =
  & ((a: number, b?: PH) => Divide_2)
  & ((a: PH, b: number) => Divide_1)
  & ((a: number, b: number) => number)
```
<br>

**Examples**
```typescript
import { divide, _ } from 'https://deno.land/x/fae/mod.ts'

divide(25, 5)                 // 5
divide(25)(5)                 // 5

const divideBy10 = divide(_, 10)
divideBy10(50)               // 5
divide(_, 5)(25)             // 5

const reciprocal = divide(1)
reciprocal(4)               // 0.25
            
```
<br>

```typescript
import { add, subtract, multiply, divide, pipe, compose, _ } from 'https://deno.land/x/fae/mod.ts'

// Expression - (5+15-10)*3/2
const triple = multiply(3)
const half = divide(_, 2)
const add5 = add(5)
const subtract10 = subtract(_, 10)

half(triple(subtract10(add5(15))))          // 15
compose(half, triple, subtract10, add5)(15) // 15
pipe(add5, subtract10, triple, half)(15)    // 15
```
