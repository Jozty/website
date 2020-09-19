---
title: add function
description: a thorough tour of add function
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
