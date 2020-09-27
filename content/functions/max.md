---
title: max function
description: a thorough tour of max function
---

## Max
<br>

Returns the larger of its two arguments.

<br>

&check; Curried

<br>
<!---
&#10539; Not curred
-->

**Non curried type declaration**
```typescript
function _max<T extends number | string | Date>(a: T, b: T) {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type Max_2<T extends number | string | Date> = ((b: T) => T)
  & ((b?: PH) => Max_2<T>)

type Max_1<T extends number | string | Date> = ((a: T) => T)
  & ((a?: PH) => Max_1<T>)

type Max = (<T extends number | string | Date>(a: T, b: T) => T)
  & (<T extends number | string | Date>(a: T, b?: PH) => Max_2<T>)
  & (<T extends number | string | Date>(a: PH, b: T) => Max_1<T>)
  & ((a?: PH, b?: PH) => Max)
```
<br>

**Examples**
```typescript
import { max } from 'https://deno.land/x/fae/mod.ts'

max(-10, 8)             // 8
max(10, -8)             // 10
max(-10.888, -8.635)    // -8.635
max(-10000000, 8555533) // 8555533
max(-10.4, 8.4)         // 8.4
max(0, Infinity)        // Infinity
max(NaN, 1000)          // 1000
max(NaN, 0)             // 0
max(0, NaN)             // NaN
max(Infinity, NaN)      // NaN
max(NaN, Infinity)      // Infinity
max('20', '21')         // '21'
max('a', 'z')           // 'z'
max('az', 'za')         // 'za'
max('aaa', 'ab')        // 'ab'
max('aa', 'aab')        // 'aab'
```

