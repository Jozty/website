---
title: endsWith function
description: a thorough tour of endsWith function
---

## EndsWith

<br>

Returns true if `functor` ends with `suffix`.

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _endsWith<L extends any[] | string>(suffix: L, functor: L) : boolean {
    //..
}
```
<br>

**Curried type declaration**

```typescript
function _endsWith<L extends any[] | string>(suffix: L, functor: L) : boolean {
    //..
}
```
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