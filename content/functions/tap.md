---
title: Tap function
description: Runs the given function `func` with the supplied object `obj`, then returns `obj`.
keywords: Tap, pass
---

## Tap 
<br>

Runs the given function `func` with the supplied object `obj`, then returns `obj`

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _tap(func: (obj: T) => any, obj: T): T {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type Tap_2<T> = (obj: T) => T

type Tap_1<T> = (func: (obj: T) => any) => T

type Tap =
  & (<T>(func: (obj: T) => any, obj?: PH) => Tap_2<T>)
  & (<T>(func: PH, obj: T) => Tap_1<T>)
  & (<T>(func: (obj: T) => any, obj: T) => T)
```
<br>

**Examples**
```typescript
import { tap, _ } from 'https://deno.land/x/fae/mod.ts'

// prints
// 35
// 2
// and returns 34
Fae.tap((a) => {
  console.log(a + 1)
  console.log(2)
}, 34)

```
