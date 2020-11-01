---
title:  identity function
description: a thorough tour of identity function
---
## Identity
<br>

Returns the supplied parameter

<br>

&cross; Curried

<br>

**Type declaration**

```typescript
function _identity = <T>(x: T) : T {
    //..
}
```
<br>

**Examples**
```typescript
import { identity } from 'https://deno.land/x/fae/mod.ts'

const f = (x: number) => ++x
const g = (y: string) => y+'bar'

identity(undefined)             // undefined
identity('foo')                 // 'foo'
identity('foo', 'bar')          // 'foo'

identity(f(1))                  // 2
identity(g('foo'))              // 'foobar'
```
