---
title:  Identity function
description: Gives the parameter that supplied.(Return the first parameter if multiple parameters are supplied)
keyword: Identity
---
## Identity
<br>

Returns the supplied parameter

<br>

&cross; Curried

<br>

**Type declaration**

```typescript
function _identity<T>(x: T): T {
    //..
}
```
<br>

**Examples**
```typescript
import { identity } from 'https://deno.land/x/fae/mod.ts'

const f = (x: number) => ++x
const g = (y: string) => y + 'bar'

identity(undefined)             // undefined
identity('foo')                 // 'foo'
identity('foo', 'bar')          // 'foo'

identity(f(1))                  // 2
identity(g('foo'))              // 'foobar'
```
