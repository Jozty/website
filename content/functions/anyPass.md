---
title: AnyPass function
description: Check for a given list of arguments if at least one of the provided predicates is satisfied by those arguments.
keywords: AnyPass
---

## AnyPass
<br>

Takes a list of predicates and returns a predicate that returns true for a given list of arguments if at least one of the provided predicates is satisfied by those arguments.
<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _anyPass<T>(predicates: Predicate<T>[]): Func {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type AnyPass = <T>(predicates: Predicate<T>[]) => Func
```

<br>

**Examples**
```typescript
import { anyPass, _ } from 'https://deno.land/x/fae/mod.ts'

const odd = (n: number) => (n & 1) == 1
const gt20 = (n: number) => n > 20
const lt5 = (n: number) => n < 5
const ok = anyPass([odd, gt20, lt5])
const plusEq = (w: number, x: number, y: number, z: number) =>
  w + x === y + z

ok(7)                                     // true
ok(9)                                     // true
ok(10)                                    // false
ok(18)                                    // false
ok(3)                                     // true
ok(22)                                    // true
anyPass([odd, lt5, plusEq])(6, 7, 8, 9)   // false
anyPass([odd, lt5, plusEq])(6)(7)(8)(9)   // false
```
