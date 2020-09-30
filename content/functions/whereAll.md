---
title: whereAll function
description: a thorough tour of whereAll function
---

## WhereAll
<br>

Takes a specs objects whose properties are predicate functions. Each predicate is applied to the value of the corresponding property of the test object. Returns `true` if all the predicates are satisfied, `false` otherwise.
**NOTE** returns `false` if there is no predicated functions.

<br>

&check; Curried

<br>
<!---
&#10539; Not curred
-->

**Non curried type declaration**
```typescript
function _whereAll<T>(specs: Tests<T>, testObj: Obj<T>) {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type WhereAll_2<T> = (testObj: Obj<T>) => boolean

type WhereAll_1<T> = (specs: Tests<T>) => boolean

type WhereAll = 
  & (<T>(specs: Tests<T>, testObj?: PH) => WhereAll_2<T>)
  & (<T>(specs: PH, testObj: Obj<T>) => WhereAll_1<T>)
  & (<T>(specs: Tests<T>, testObj: Obj<T>) => boolean)

```
<br>

**Examples**
```typescript
import { whereAll, equals _ } from 'https://deno.land/x/fae/mod.ts'

const spec = { x: Fae.equals(0), y: Fae.equals(2) }
const spec2 = { x: Fae.equals(20) }
const test1 = { x: 0, y: 2, z: 100 }
const test2 = { w: 0, x: 0, y: 1, z: 100 }
const test3 = { x: 0, y: 2 }
const test4 = { w: 10, x: 20 }
const test5 = { x: 0 }
const test6 = { x: 20 }

whereAll(spec)(test1)     // true
whereAll(_, test2)(spec)  // false
whereAll(spec, test3)     // true 
whereAll(spec, test4)     // false   
whereAll(spec, test5)     // false
whereAll(spec, test6)     // false
whereAll(spec2, test1)    // false
whereAll(spec2, test2)    // false
whereAll(spec2, test3)    // false
whereAll(spec2, test4)    // true
whereAll(spec2, test5)    // false
whereAll(spec2, test6)    // true
```
