---
title: min function
description: a thorough tour of min function
---

## Min
<br>

Returns the smaller of its two arguments.

<br>

&check; Curried

<br>
<!---
&#10539; Not curred
-->

**Non curried type declaration**
```typescript
function _min(a: number | string, b: number | string) {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type Min_2<T extends number | string | Date> = ((b: T) => T)
  & ((b?: PH) => Min_2<T>)

type Min_1<T extends number | string | Date> = ((a: T) => T)
  & ((a?: PH) => Min_1<T>)

type Min = (<T extends number | string | Date>(a: T, b: T) => T)
  & (<T extends number | string | Date>(a: T, b?: PH) => Min_2<T>)
  & (<T extends number | string | Date>(a: PH, b: T) => Min_1<T>)
  & ((a?: PH, b?: PH) => Min)
```
<br>

**Examples**
```typescript
import { min } from 'https://deno.land/x/fae/mod.ts'

min(-10, 8)             // -10
min(10, -8)             // -8
min(-10.888, -8.635)    // -10.888
min(-10000000, 8555533) // -10000000
min(-10.4, 8.4)         // -10.4
min(0, Infinity)        // 0
min(NaN, 1000)          // 1000
min(NaN, 0)             // 0
min(0, NaN)             // NaN
min(Infinity, NaN)      // NaN
min(NaN, Infinity)      // Infinity
min('20', '21')         // '20'
min('a', 'z')           // 'a'
min('az', 'za')         // 'az'
min('aaa', 'ab')        // 'aaa'
min('aa', 'aab')        // 'aa'
```

