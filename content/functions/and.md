---
title: and function
description: a thorough tour of and function
---

## And 
<br>

Returns `true` if both arguments are truthy values, `false` otherwise.

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
function _and(a: any, b: any): boolean {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type And_2 = (b: any) => boolean

type And_1 = (a: any) => boolean

type And =
  & ((a: any, b?: PH) => And_2)
  & ((a: PH, b: any) => And_1)
  & ((a: any, b: any) => boolean)
```
<br>

**Examples**
```typescript
import { and } from 'https://deno.land/x/fae/mod.ts'

and(true, false) // false
and(true, true) // true
and([1, 2], true) // true
and([], true) // true
and(NaN, true) // false
and("", 1n) // false
and(0n, 1) // false
```
<br>

```typescript
import { or, and } from 'https://deno.land/x/fae/mod.ts'

const orOpr1 = or([], 1) // (a + b)
const orOpr2 = or({ 1: 3 }, 'A') // (f + g)
const andOp1 = and(false, 4) // (d . e)
const orMulti = or(or(orOpr2, andOp1), NaN) // (c + d . e + (f + g))
const total = and(orOpr1, orMulti) // (a + b) . (c + d . e + (f + g))
console.log(total) // true
```
