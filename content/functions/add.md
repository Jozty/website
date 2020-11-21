---
title: Add function
description: Add two numbers(It also accept parameters like NaN, Infinity, undefined)
keywords: Add
---

## Add 
<br>

Adds two numbers

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _add(a: number, b: number): number {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type Add_2 = (b: number) => number

type Add_1 = (a: number) => number

type Add =
  & ((a: number, b?: PH) => Add_2)
  & ((a: PH, b: number) => Add_1)
  & ((a: number, b: number) => number)
```
<br>

**Examples**
```typescript
import { add, _ } from 'https://deno.land/x/fae/mod.ts'

add(1, 2)                 // 3
add(1)(2)                 // 3

const add5 = add(5)
add5(-32)                 // -27
add5(_)(12)               // 17
```
<br>

```typescript
import { add, subtract, multiply, divide, pipe, compose, _ } from 'https://deno.land/x/fae/mod.ts'

// Expression - (2*5+5-10)/2
const double = multiply(2)
const half = divide(_, 2)
const add5 = add(5)
const subtract10 = subtract(_, 10)

half(subtract10(add5(double(15))))          // 12.5
compose(half, subtract10, add5, double)(15) // 12.5
pipe(double, add5, subtract10, half)(15)    // 12.5
```
