---
title: or function
description: a thorough tour of or function
---

## Or 
<br>

Returns `true` if any of arguments is truthy values, `false` otherwise.

<br>

All the values are truthy except

* the number `0`
* the BigInt `0n`
* the keyword `null`
* the keyword `undefined`
* the boolean `false`
* the number `NaN`
* the empty string `""` (equivalent to `''` or <code>``</code>)

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _or(a: any, b: any): boolean {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type Or_2 = (b: any) => boolean

type Or_1 = (a: any) => boolean

type Or =
  & ((a: any, b?: PH) => Or_2)
  & ((a: PH, b: any) => Or_1)
  & ((a: any, b: any) => boolean)
```
<br>

**Examples**
```typescript
import { or } from 'https://deno.land/x/fae/mod.ts'

or(true, false) // true
or(true, true) // true
or([1, 2], true) // true
or([], false) // true
or(NaN, true) // true
or("", 0n) // false
or(null, NaN) // false
or(undefined, false) // false
```
<br>

```typescript
import { or, xor } from 'https://deno.land/x/fae/mod.ts'

const orOpr1 = or([], 1) // (a + b)
const orOpr2 = or({ 1: 3 }, 'A') // (f + g)
const xorOp1 = xor(false, 4) // (d ^ e)
const orMulti = or(or(orOpr2, xorOp1), undefined) // (c + d ^ e + (f + g))
const total = xor(orOpr1, orMulti) // (a + b) ^ (c + d ^ e + (f + g))
console.log(total) // false
```
