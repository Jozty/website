---
title: add function
description: a thorough tour of add function
---

## Divide

Divides two numbers

&check; Curried
<!---
&#10539; Not curred
-->

**Non curried type declaration**
```typescript
function dividet(a: number, b: number): number {
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
