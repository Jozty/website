---
title: LensProp function
description: Gives the lens whose focus is the specified property
keywords: Lensprop
---

## LensProp
<br>

Returns a lens whose focus is the specified property

<br>

&cross; Curried

<br>

**Type Declaration**
```typescript
function _lensProp<T, F>(prop: Prop): Lens<T, F> {
  // ...
}
```
<br>

**Used types**
* [Lens](/types/Lens)
* [Prop](/types/Prop)

<br>

**Examples**
```typescript
import { lensProp, view, over, set } from 'https://deno.land/x/fae/mod.ts'

const xLens = lensProp('x')
const obj = {x: 'abc', y: 'def'}

view(xLens, obj)                                   // 'abc'
set(xLens, 'x', obj)                               // {x: 'x', y: 'def'}
over(xLens, (x: string) => x.toUpperCase(), obj)   // {x: 'ABC', y: 'def'}
```
