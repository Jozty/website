---
title: xor function
description: a thorough tour of xor function
---

## Xor 
<br>

Exclusive Or - Returns `true` if one of the arguments is truthy, and the other is falsy, `false` otherwise.

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
function _xor(a: any, b: any): boolean {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type Xor_2 = (b: any) => boolean

type Xor_1 = (a: any) => boolean

type Xor =
  & ((a: any, b?: PH) => Xor_2)
  & ((a: PH, b: any) => Xor_1)
  & ((a: any, b: any) => boolean)
```
<br>

**Examples**
```typescript
import { xor } from 'https://deno.land/x/fae/mod.ts'

xor(true, true) // false
xor(true, false) // true
xor(true, []) // false
xor([], {}) // false
xor([], NaN) // true
xor("abc", Infinity) // false
xor(new Date())(0) // true
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
