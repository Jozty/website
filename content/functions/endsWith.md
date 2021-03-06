---
title: EndsWith function
description: Check whether a array or string ends with suffix.
keywords: EndWith
---

## EndsWith

<br>

Returns true if `functor` ends with `suffix`.

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _endsWith<L extends any[] | string>(suffix: L, functor: L): boolean {
    //..
}
```
<br>

**Curried type declaration**

```typescript
type EndsWith_2<L extends any[] | string> = (functor: L) => boolean

type EndsWith_1<L extends any[] | string> = (suffix: L) => boolean

type EndsWith =
 & (<L extends any[] | string>(suffix: L, functor?: PH) => EndsWith_2<InferType<L>>)
 & (<L extends any[] | string>(suffix: PH, functor: L) => EndsWith_1<InferType<L>>)
 & (<L extends any[] | string>(suffix: L, functor: L) => boolean)
```
<br>

**Used types**
* [InferType](/types/InferType)

<br>

**Examples**
```typescript
import { endsWith, _ } from 'https://deno.land/x/fae/mod.ts'

endsWith('c', 'abc')                          // true
endsWith('ology', 'astrology')                // true
endsWith('olog', 'astrology')                 // false

endsWith(['c'], ['a', 'b', 'c'])              // true
endsWith(['b', 'c'], ['a', 'b', 'c'])         // true
endsWith(['b'], ['a', 'b', 'c'])              // false

endsWith(_, ['a', 'b', 'c'])(['a', 'b', 'c']) // true
endsWith(['b'], _)(['a', 'b', 'c'])           // false
endsWith(_, 'astrology')('olog')              // false
endsWith('ology', _)('astrology')             // true
``` 