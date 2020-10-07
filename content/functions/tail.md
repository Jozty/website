---
title: tail function
description: a thorough tour of tail function
---

## Tail
<br>

Returns all but the first element of `functor`. Accepts array-like(including string).

<br>

&cross; Curried

<br>

**Non curried type declaration**
```typescript
function _tail<T>(functor: ArrayLike<T> | string) {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type TailReturnType<F> = F extends string
  ? string
  : F extends ArrayLike<infer U>
  ? U[]
  : never

type Tail = <F extends ArrayLike<T> | string, T>(functor: F) => TailReturnType<F>
```
<br>

**Examples**
```typescript
import { tail } from 'https://deno.land/x/fae/mod.ts'

tail([1, 2, 3]) // [2, 3]
tail([3]) // []
tail([]) // []

tail('abc') // 'bc'
tail('c') // ''
tail('') // ''

const arr = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  length: 4,
}
tail(arr) // [2, 3, 4]
```

