---
title: reverse function
description: a thorough tour of reverse function
---

## Reverse 
<br>

Reverses given string or array without affecting the original.

<br>

&cross; Curried

<br>

**Non curried type declaration**
```typescript
function _reverse<F extends T[] | string, T>(functor: F): F {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type ReverseReturnType<F> = F extends (infer U)[] ? U[] : string

type Reverse =
  <F extends T[] | string, T = any>(functor: F) => ReverseReturnType<F>
```
<br>

**Examples**
```typescript
import { revrse } from 'https://deno.land/x/fae/mod.ts'

revrse([1, 2, 3, 4]) // [4, 3, 2, 1]
revrse('abcd') // 'dcba'
revrse('sdf1234@#$%^&~\u2345♫çñè\x00') // 'èñç♫⍅~&^%$#@4321fds'
```
