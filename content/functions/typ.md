---
title: Typ function
description: Gives a single-word string description of the (native) type of the value (The returned types are of type AllTypes)
keywords: Typ
---

## Typ
<br>

Gives a single-word string description of the (native) type of the value. The returned types are of type `AllTypes`

<br>

&cross; Curried

<br>

**Non curried type declaration**
```typescript
function _typ(a: any): AllTypes {
  // ...
}
```
<br>

**Used types**
* [AllTypes](/types/AllTypes)

<br>

**Examples**
```typescript
import { typ } from 'https://deno.land/x/fae/mod.ts'

typ({}) // 'Object'
typ(1) // 'Number'
typ(false) // 'Boolean'
typ('s') // 'String'
typ(null) // 'Null'
typ([]) // 'Array'
typ(/[A-z]/) // 'RegExp'
```

