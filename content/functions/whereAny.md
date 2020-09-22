---
title: whereAny function
description: a thorough tour of whereAny function
---

## WhereAny

Adds two numbers

&check; Curried
<!---
&#10539; Not curred
-->

**Non curried type declaration**
```typescript
function _whereAny<T>(specs: Tests<T> , testObj: Obj<T>) {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type WhereAny_2<T> = ((testObj: Obj<T>) => boolean)
  & ((testObj?: PH) => WhereAny_2<T>)

type WhereAny_1<T> = ((specs: Tests<T>) => boolean)
  & ((specs?: PH) => WhereAny_1<T>)

type WhereAny = (<T>(specs: Tests<T>, testObj: Obj<T>) => boolean)
  & (<T>(specs: Tests<T>, testObj?: PH) => WhereAny_2<T>)
  & (<T>(specs: PH, testObj: Obj<T>) => WhereAny_1<T>)
  & ((specs?: PH, testObj?: PH) => WhereAny)
```
<br>

**Examples**
```typescript
import { whereAny, equals, _ } from 'https://deno.land/x/fae/mod.ts'

const spec = { x: equals(0), y: equals(2) }
const test1 = { x: 0, y: 200 }
const test2 = { x: 0, y: 10 }
const test3 = { x: 1, y: 101 }
const test4 = { x: 1, y: 2 }
whereAny(spec)(test1)      // true
whereAny(_, test2)(spec)   // true)
whereAny(spec, test3)      // false)
whereAny(spec, test4)      // true)
```

