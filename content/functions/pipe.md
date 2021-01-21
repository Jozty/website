---
title: Pipe function
description: Performs a left-to-right function composition. The first function may have any number of arguments; the remaining must have single argument. The returned function is automatically curried.
keywords: Pipe, compose, function composition
---

## Pipe 
<br>

Performs a left-to-right function composition.
The first function may have any number of arguments;
the remaining must have single argument.

**Note:** The returned function is automatically curried.

<br>

&cross; Curried

<br>

**Type declaration**
```typescript
function pipe(f: Func, g: Func): Func {
  // ...
}
```
<br>

**Used types**
* [Func](/types/Func)

<br>

**Examples**
```typescript
import { add, multiply, map } from 'https://deno.land/x/fae/mod.ts'

const add3 = add(3)
const mul5 = multiply(5)

const piped1 = pipe(mul5, add3)     // x * 5 + 3
const piped2 = pipe(add3, mul5)     // (x + 3) * 5

piped1(2)                           // 13
piped2(2)                           // 25
```
