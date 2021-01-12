---
title: Always function
description: Returns a function which that always returns value.
keywords: Always
---

## Always
<br>

Returns a function which that always returns value.

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _always<T>(value: T): T {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type Always = <T>(value: T) => () => T
```

<br>

**Examples**
```typescript
import { always } from 'https://deno.land/x/fae/mod.ts'

    const now = new Date(1776, 6, 4)
    const obj = { a: 1, b: 2 }
    const f = always(42)
    const f2 = always({ a: 12 })

    f()                     // 42
    f(10)                   // 42
    f(false)                // 42

    f2()                    // { a: 12 }
    f2(10)                  // { a: 12 }
    f2(false)               // { a: 12 }
    always(false)()         // false
    always('abc')()         // 'abc'
    always(obj)()           // obj
    always(now)()           // new Date(1776, 6, 4)
    always(undefined)()     // undefined
```
