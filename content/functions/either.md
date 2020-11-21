---
title: Either function
description: Check whether the or of two functions is true or not.
keywords: Fae, Deno, Javascript, Ramda, Either.
---

## Either

<br>

A function wrapping calls to the two functions in an `||` operation,
returning the result of the first function if it is true and the result
of the second function otherwise. Second function will not be invoked if the first returns a true value.

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _either<T extends Func>(f: T, g: T): T {
    //..
}
```
<br>

**Curried type declaration**

```typescript
type Either_2<T> = (g: T) => T

type Either_1<T> = (f: T) => T

type Either =
  & (<T>(f: T, g?: PH) => Either_2<T>)
  & (<T>(f: PH, g: T) => Either_1<T>)
  & (<T>(f: T, g: T) => T)
```
<br>

**Used types**
* [Func](/types/Func)

<br>

**Examples**
```typescript
import { either, _ } from 'https://deno.land/x/fae/mod.ts'

const even = (x: number) => (x & 1) === 0
const gt10 = (x: number) => x > 10
const f = either(even, gt10)
const g = either(even, _)(gt10)

f(8)    // true
f(13)   // true
f(7)    // false

g(8)    // true
g(13)   // true
g(7)    // false
``` 