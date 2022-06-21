---
title: And function
description: Gives true  if both parameter are true, otherwise 'false'
keywords: And 
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

<a class="try-on-playground" target="_blank" data-code="aW1wb3J0ICogYXMgRmFlIGZyb20gJ2ZhZUB2MS4wLjAnOw0KDQovLyAiYW5kIiB3aXRoIHR3byBpbnB1dCBhcmd1bWVudHMNCg0KLy8gZmFsc3kgdmFsdWUNCmNvbnN0IGEgPSAiIjsNCmNvbnN0IGIgPSBmYWxzZTsNCmNvbnN0IGMgPSAwOw0KDQovLyB0cnV0aHkgdmFsdWVzDQpjb25zdCB6ID0gMjsNCmNvbnN0IHkgPSB0cnVlOw0KY29uc3QgeCA9ICJhYiI7DQoNCi8vIGlmIHR3byBhcmdzIGFyZSBwcm92aWRlZCByZXR1cm5zIGJvb2xlYW4gDQovLyByZXR1cm5zIHRydWUgaWYgYm90aCBhcmdzIGFyZSB0cnVlDQoNCmNvbnN0IHJlc3VsdDEgPSBGYWUuYW5kKGEseik7ICAvLyAoIiIsIDIpICAgICAgLT4gZmFsc2UNCmNvbnN0IHJlc3VsdDIgPSBGYWUuYW5kKGEsYik7ICAvLyAoIiIsIGZhbHNlKSAgLT4gZmFsc2UNCmNvbnN0IHJlc3VsdDMgPSBGYWUuYW5kKGEsYyk7ICAvLyAoIiIsIDApICAgICAgLT4gZmFsc2UNCg0KY29uc3QgcmVzdWx0NCA9IEZhZS5hbmQoeix5KTsgIC8vICgyLCB0cnVlKSAgICAtPiB0cnVlDQpjb25zdCByZXN1bHQ1ID0gRmFlLmFuZCh4LHkpOyAgLy8gKCJhYiIsIHRydWUpIC0%2BIHRydWUNCmNvbnN0IHJlc3VsdDYgPSBGYWUuYW5kKHoseCk7ICAvLyAoMiwgImFiIikgICAgLT4gdHJ1ZQ0KDQoNCmNvbnNvbGUubG9nKGBhbmQoIiIsIDIpICAgICAtPiAke3Jlc3VsdDF9YCk7DQpjb25zb2xlLmxvZyhgYW5kKCIiLCBmYWxzZSkgLT4gJHtyZXN1bHQyfWApOw0KY29uc29sZS5sb2coYGFuZCgiIiwgMCkgICAgIC0%2BICR7cmVzdWx0M31gKTsNCmNvbnNvbGUubG9nKGBhbmQoMiwgdHJ1ZSkgICAtPiAke3Jlc3VsdDR9YCk7DQpjb25zb2xlLmxvZyhgYW5kKCJhYiIsIHRydWUpLT4gJHtyZXN1bHQ1fWApOw0KY29uc29sZS5sb2coYGFuZCgyLCAiYWIiKSAgIC0%2BICR7cmVzdWx0Nn1gKTsNCg0KDQovLyB3aXRoIHNpbmdsZSBpbnB1dHMgDQovLyByZXR1cm4gYSBjdXJyaWVkIGZ1bmN0aW9ucyB3aGljaCB0YWtlcyBzaW5nbGUgaW5wdXQgYW5kIHVwZGF0ZXMgcmVzdWx0cyBkZXBlbmRpbmcgb24gYm90aCBpbnB1dHMNCg0KY29uc3QgbmV3RnVuYzEgPSBGYWUuYW5kKGEpOyAvLyAoIiIpIC0%2BIGZ1bmN0aW9uDQpjb25zdCByZXN1bHQ3ID0gbmV3RnVuYzEoeCk7IA0KY29uc29sZS5sb2coYGFuZCgiIiAmICJhYiIpIC0%2BICR7cmVzdWx0N31gKTsgLy8gKCJhYiIpIC0%2BICIiICYgImFiIiAtPiBmYWxzZQ0KDQpjb25zdCBuZXdGdW5jMiA9IEZhZS5hbmQoYSk7IC8vICgiIikgLT4gZnVuY3Rpb24NCmNvbnN0IHJlc3VsdDggPSBuZXdGdW5jMihiKTsgDQpjb25zb2xlLmxvZyhgYW5kKCIiICYgZmFzbGUpIC0%2BICR7cmVzdWx0OH1gKTsgLy8gKGZhbHNlKSAtPiAiIiAmIGZhc2xlIC0%2BIGZhbHNlDQoNCmNvbnN0IG5ld0Z1bmMzID0gRmFlLmFuZChhKTsgLy8gKCIiKSAtPiBmdW5jdGlvbg0KY29uc3QgcmVzdWx0OSA9IG5ld0Z1bmMzKGMpOyANCmNvbnNvbGUubG9nKGBhbmQoIiIgJiAwKSAtPiAke3Jlc3VsdDl9YCk7IC8vICgwKSAtPiAiIiAmIDAgLT4gZmFsc2UNCg0KY29uc3QgbmV3RnVuYzQgPSBGYWUuYW5kKHopOyAvLyAoMikgLT4gZnVuY3Rpb24NCmNvbnN0IHJlc3VsdDEwID0gbmV3RnVuYzQoeSk7IA0KY29uc29sZS5sb2coYGFuZCgyICYgdHJ1ZSkgLT4gJHtyZXN1bHQxMH1gKTsgLy8gKHRydWUpIC0%2BIDIgJiB0cnVlIC0%2BIGZhbHNlDQoNCmNvbnN0IG5ld0Z1bmM1ID0gRmFlLmFuZCh4KTsgLy8gKCIiKSAtPiBmdW5jdGlvbg0KY29uc3QgcmVzdWx0MTEgPSBuZXdGdW5jNSh5KTsgDQoNCmNvbnNvbGUubG9nKGBhbmQoImFiIiAmIHRydWUpIC0%2BICR7cmVzdWx0MTF9YCk7IC8vICh0cnVlKSAtPiAiYWIiICYgdHJ1ZSAtPiBmYWxzZQ0KDQoNCg0K">Try on playground</a>

---