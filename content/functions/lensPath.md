---
title: lensPath function
description: a thorough tour of lensPath function
---

## LensPath
<br>

Returns a lens whose focus is the specified path.

<br>

&cross; Curried

<br>

**Type Declaration**
```typescript
function _lensPath<T, F>(path: Path): Lens<T, F> {
  // ...
}
```
<br>

**Used types**
* [Lens](/types/Lens)
* [Path](/types/Path)

<br>


**Examples**
```typescript
import { lensPath, view, over, set } from 'https://deno.land/x/fae/mod.ts'

const xHeadYLens = lensPath(['x', 0, 'y'])
const obj = {
  x: [
    {y: 2, z: 3},
    {y: 4, z: 5},
  ],
}

view(xHeadYLens, obj)                           // 2

set(xHeadYLens, 12, obj)                        // {
                                                //    x: [
                                                //      {y: 12, z: 3},
                                                //      {y: 4, z: 5},
                                                //    ],
                                                // }

over(xHeadYLens, (x: number) => x + 200, obj)   // {
                                                //    x: [
                                                //      {y: 202, z: 3},
                                                //      {y: 4, z: 5},
                                                //    ],
                                                // }
```
