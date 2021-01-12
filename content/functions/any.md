---
title: Any function
description: Check whether any elements of the list match predicate.
keywords: Any
---

## Any
<br>

Return true if any the elements of the list match predicate false otherwise

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _any<T>(predicate: Predicate1<T>, list: T[]): boolean {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type Any_2<T> = (list: T[]) => boolean

type Any_1<T> = (predicate: Predicate1<T>) => boolean

type Any =
  & (<T>(predicate: Predicate1<T>, list?: PH) => Any_2<T>)
  & (<T>(predicate: PH, list: T[]) => Any_1<T>)
  & (<T>(predicate: Predicate1<T>, list: T[]) => boolean)
  ```

<br>

**Examples**
```typescript
import { any, _ } from 'https://deno.land/x/fae/mod.ts'

  const odd = (a: number) => (a & 1) === 1
  const T = () => true
  const a = (a: number) => a % 3 === 0
  const b = [1, 2, 3, 4, 5, 6, 7, 8]
  const expected = true

  any(odd, [2, 4, 6, 8, 10, 11, 12])        // true
  any(odd, [2, 4, 6, 8, 10, 12])            // false

  any(a, b)                                 // expected
  any(a)(b)                                 // expected
  any(a, _)(b)                              // expected
  any(_, b)(a)                              // expected 
```
