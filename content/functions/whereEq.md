---
title: whereEq function
description: a thorough tour of add function
---

## WhereEq
<br>

Takes a spec object and a test object, returns true if the test satisfies the spec, false otherwise.`whereEq` is a specialization of `whereAll`.

<br>

&check; Curried

<br>
<!---
&#10539; Not curred
-->

**Non curried type declaration**
```typescript
function _whereEq<T>(spec: Obj<T>, testObj: Obj<T>) {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type WhereEq_2<T> = (testObj: Obj<T>) => boolean

type WhereEq_1<T> = (spec: Obj<T>) => boolean

type WhereEq = (<T>(spec: Obj<T>, testObj: Obj<T>) => boolean)
  & (<T>(spec: Obj<T>, testObj?: PH) => WhereEq_2<T>)
  & (<T>(spec: PH, testObj: Obj<T>) => WhereEq_1<T>)
  & (<T>(spec: Obj<T>, testObj: Obj<T>) => boolean)
```
<br>

**Examples**
```typescript
import { whereEq, _ } from 'https://deno.land/x/fae/mod.ts'

const spec = { x: 100 }
const spec2 = { w: 1, x: 100, y: 200 }
const test1 = { x: 20, y: 100, z: 100 }
const test2 = { w: 1, x: 100, y: 100, z: 100 }
const test3 = {}
const test4 = { w: 1, x: 100 }
const test5 = { w: 1, x: 100, y: 200 }

whereEq(spec)(test1)    // false
whereEq(_, test2)(spec) // true
whereEq(spec, test3)    // false
whereEq(spec2, test4)   // false
whereEq(spec2, test5)   // true
```

