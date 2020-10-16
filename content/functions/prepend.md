---
title: prepend function
description: a thorough tour of prepend function
---

## Prepend 
<br>

Add the new element `el` to the start of `list` and returns new list without affecting original

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _prepend<T>(el: T, list: T[]): T[] {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type Prepend_2<T> = (list: T[]) => T[]

type Prepend_1<T> = (el: T) => T[]

type Prepend =
  & (<T>(el: T, list?: PH) => Prepend_2<T>)
  & (<T>(el: PH, list: T[]) => Prepend_1<T>)
  & (<T>(el: T, list: T[]) => T[])
```
<br>

**Examples**
```typescript
import { prepend } from 'https://deno.land/x/fae/mod.ts'

prepend('tests', ['write', 'more']); //=> [''tests', ''write', 'more']
prepend(['tests'], ['write', 'more']); //=> [['tests'], 'write', 'more']
```
