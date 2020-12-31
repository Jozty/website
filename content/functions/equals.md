---
title: Equals function
description: Check whether two objects have same value, for the specific property.
keywords: Equals
---

## Equals

<br>

Returns the last element of the list which matches the predicate, or `undefined` if no element matches.

<br>

&check; Curried

<br>

**Type declaration**
```typescript
function _equals(
  a: any,
  b: any,
  stackA: any[] = [],
  stackB: any[] = [],
): boolean {
    //..
}
```

<br>

**Examples**
```typescript
import { equals, _ } from 'https://deno.land/x/fae/mod.ts'

equals('', '')                      // true
equals('', 'x')                     // false
equals('x', '')                     // false
equals('foo', 'foo')                // true
equals('foo', 'bar')                // false
equals('bar', 'foo')                // false
equals(true, new Boolean(true))     // false
equals(new Boolean(true), true)     // false
equals(false, new Boolean(false))   // false
equals(new Boolean(false), false)   // false

equals(_ , '')('')                  // true
equals('', _)('x')                  // false
equals('x')('')                     // false
``` 