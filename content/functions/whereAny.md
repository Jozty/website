---
title: whereAny function
description: a thorough tour of whereAny function
---

## WhereAny
<br>

Takes a specs objects whose property is a predicate function. Each predicate is applied to the value of the corresponding property of the test object. Returns `true` if any of the predicates is satisfied, `false` otherwise.
**NOTE** returns `false` if there is no predicated functions.

<br>

&check; Curried

<br>
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
type WhereAny_2<T> = (testObj: Obj<T>) => boolean

type WhereAny_1<T> = (specs: Tests<T>) => boolean

type WhereAny = 
  & (<T>(specs: Tests<T>, testObj?: PH) => WhereAny_2<T>)
  & (<T>(specs: PH, testObj: Obj<T>) => WhereAny_1<T>)
  & (<T>(specs: Tests<T>, testObj: Obj<T>) => boolean)
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
whereAny(_, test2)(spec)   // true
whereAny(spec, test3)      // false
whereAny(spec, test4)      // true
```

