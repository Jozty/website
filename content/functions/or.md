---
title: Or function
description: Gives true if any argument is true
keywords: Or
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

<a class="try-on-playground" target="_blank" data-code="aW1wb3J0ICogYXMgRmFlIGZyb20gJ2ZhZUB2MS4wLjAnOw0KDQovLyAib3IiIHdpdGggdHdvIGlucHV0IGFyZ3VtZW50cw0KDQovLyBmYWxzeSB2YWx1ZQ0KY29uc3QgYSA9ICIiOw0KY29uc3QgYiA9IGZhbHNlOw0KY29uc3QgYyA9IHVuZGVmaW5lZDsNCg0KLy8gdHJ1dGh5IHZhbHVlcw0KY29uc3QgeiA9IDI7DQpjb25zdCB5ID0gdHJ1ZTsNCmNvbnN0IHggPSAiYWIiOw0KDQovLyBpZiB0d28gYXJncyBhcmUgcHJvdmlkZWQgcmV0dXJucyBib29sZWFuIA0KLy8gcmV0dXJucyBmYWxzZSBpZiBib3RoIGFyZ3MgYXJlIGZhbHNlIGVsc2UgdHJ1ZQ0KDQpjb25zdCByZXN1bHQxID0gRmFlLm9yKGEseik7ICAvLyAoIiIsIDIpICAgICAgLT4gdHJ1ZQ0KY29uc3QgcmVzdWx0MiA9IEZhZS5vcihhLGIpOyAgLy8gKCIiLCBmYWxzZSkgIC0%2BIGZhbHNlDQpjb25zdCByZXN1bHQzID0gRmFlLm9yKGEsYyk7ICAvLyAoIiIsIHVuZGVmaW5lZCkgLT4gZmFsc2UNCg0KY29uc3QgcmVzdWx0NCA9IEZhZS5vcih6LHkpOyAgLy8gKDIsIHRydWUpICAgIC0%2BIHRydWUNCmNvbnN0IHJlc3VsdDUgPSBGYWUub3IoeCx5KTsgIC8vICgiYWIiLCB0cnVlKSAtPiB0cnVlDQpjb25zdCByZXN1bHQ2ID0gRmFlLm9yKHoseCk7ICAvLyAoMiwgImFiIikgICAgLT4gdHJ1ZQ0KDQoNCmNvbnNvbGUubG9nKGBvcigiIiwgMikgICAgIC0%2BICR7cmVzdWx0MX1gKTsNCmNvbnNvbGUubG9nKGBvcigiIiwgZmFsc2UpIC0%2BICR7cmVzdWx0Mn1gKTsNCmNvbnNvbGUubG9nKGBvcigiIiwgdW5kZWZpbmVkKSAgICAgLT4gJHtyZXN1bHQzfWApOw0KY29uc29sZS5sb2coYG9yKDIsIHRydWUpICAgLT4gJHtyZXN1bHQ0fWApOw0KY29uc29sZS5sb2coYG9yKCJhYiIsIHRydWUpLT4gJHtyZXN1bHQ1fWApOw0KY29uc29sZS5sb2coYG9yKDIsICJhYiIpICAgLT4gJHtyZXN1bHQ2fWApOw0KDQoNCi8vIHdpdGggc2luZ2xlIGlucHV0cyANCi8vIHJldHVybiBhIGN1cnJpZWQgZnVuY3Rpb25zIHdoaWNoIHRha2VzIHNpbmdsZSBpbnB1dCBvciB1cGRhdGVzIHJlc3VsdHMgZGVwZW5kaW5nIG9uIGJvdGggaW5wdXRzDQoNCmNvbnN0IG5ld0Z1bmMxID0gRmFlLm9yKGEpOyAvLyAoIiIpIC0%2BIGZ1bmN0aW9uDQpjb25zdCByZXN1bHQ3ID0gbmV3RnVuYzEoeCk7IA0KY29uc29sZS5sb2coYCgiIiAmICJhYiIpIC0%2BICR7cmVzdWx0N31gKTsgLy8gKCJhYiIpIC0%2BICIiICYgImFiIiAtPiB0cnVlDQoNCmNvbnN0IG5ld0Z1bmMyID0gRmFlLm9yKGEpOyAvLyAoIiIpIC0%2BIGZ1bmN0aW9uDQpjb25zdCByZXN1bHQ4ID0gbmV3RnVuYzIoYik7IA0KY29uc29sZS5sb2coYCgiIiAmIGZhc2xlKSAtPiAke3Jlc3VsdDh9YCk7IC8vIChmYWxzZSkgLT4gIiIgJiBmYXNsZSAtPiBmYWxzZQ0KDQpjb25zdCBuZXdGdW5jMyA9IEZhZS5vcihhKTsgLy8gKCIiKSAtPiBmdW5jdGlvbg0KY29uc3QgcmVzdWx0OSA9IG5ld0Z1bmMzKGMpOyANCmNvbnNvbGUubG9nKGAoIiIgJiB1bmRlZmluZWQpIC0%2BICR7cmVzdWx0OX1gKTsgLy8gKHVuZGVmaW5lZCkgLT4gIiIgJiAwIC0%2BIGZhbHNlDQoNCmNvbnN0IG5ld0Z1bmM0ID0gRmFlLm9yKHopOyAvLyAoMikgLT4gZnVuY3Rpb24NCmNvbnN0IHJlc3VsdDEwID0gbmV3RnVuYzQoeSk7IA0KY29uc29sZS5sb2coYCgyICYgdHJ1ZSkgLT4gJHtyZXN1bHQxMH1gKTsgLy8gKHRydWUpIC0%2BIDIgJiB0cnVlIC0%2BIHRydWUNCg0KY29uc3QgbmV3RnVuYzUgPSBGYWUub3IoeCk7IC8vICgiIikgLT4gZnVuY3Rpb24NCmNvbnN0IHJlc3VsdDExID0gbmV3RnVuYzUoeSk7IA0KDQpjb25zb2xlLmxvZyhgKCJhYiIgJiB0cnVlKSAtPiAke3Jlc3VsdDExfWApOyAvLyAodHJ1ZSkgLT4gImFiIiAmIHRydWUgLT4gdHJ1ZQ0KDQoNCg0K">
    Try on playground
</a>

---