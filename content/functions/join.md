---
title: join function
description: a thorough tour of join function
---

## Join

<br>

Returns a string made by inserting the `separator` between each element and concatenating all the elements into a single string.
The functor may be array-like/iterable/iterator.

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _join<T extends Object>(separator: string | number, functor: FunctorWithArLk<T>): string {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type Join_2 = <T>(functor: FunctorWithArLk<T>) => string

type Join_1<T> = (separator: string | number) => string

type Join =
  & ((separator: string | number, functor?: PH) => Join_2)
  & (<T>(separator: PH, functor: FunctorWithArLk<T>) => Join_1<T>)
  & (<T>(separator: string | number, functor: FunctorWithArLk<T>,) => string)
```

<br>

**Examples**
```typescript
import { join, _ } from 'https://deno.land/x/fae/mod.ts'

const joinUnderScore = join('_')
const join99 = join(99)
const a = [1, 2, 3, 4, 5]

joinUnderScore(a)       // '1_2_3_4_5'
join99(a)               // '1992993994995'
joinUnderScore(a)       // '1_2_3_2_5'

const x = [1, true, '123', tS]
const y = [...x]
const tS = {toString: () => 'THE_OBJECT_WITH_TO_STRING',}

z(99)                   // '199true9912399THE_OBJECT_WITH_TO_STRING'
join99(x)               // '199true9912399THE_OBJECT_WITH_TO_STRING'
join99(y)               // '199true9912399THE_OBJECT_WITH_TO_STRING'

join(99, _)(y)          // '199true9912399THE_OBJECT_WITH_TO_STRING'
join(_, x)(99)          // '199true9912399THE_OBJECT_WITH_TO_STRING'
```