---
title: concat function
description: a thorough tour of concat function
---

## Concat
<br>

Concat two arrays,strings

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _concat<L extends T[] | string, T>(a: L, b: L): L {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type ConcatReturnType<F> = F extends string
  ? string
  : F extends (infer U)[]
  ? U[]
  : never
  
type Concat_2<L extends any[] | string> = (b: L) => ConcatReturnType<L>

type Concat_1<L extends any[] | string> = (a: L) => ConcatReturnType<L>

type Concat =
  & (<L extends any[] | string>(a: L, b?: PH) => Concat_2<ConcatReturnType<L>>)
  & (<L extends any[] | string>(a: PH, b: L) => Concat_1<ConcatReturnType<L>>)
  & (<L extends any[] | string>(a: L, b: L) => ConcatReturnType<L>)
```
<br>

**Examples**
```typescript
import { concat, _ } from 'https://deno.land/x/fae/mod.ts'

concat(['a', 'b'], ['c', 'd'])// ['a', 'b', 'c', 'd']
concat([], ['c', 'd'])// ['c', 'd']
concat('foo', 'bar')// 'foobar'
concat('x', '')// 'x'
concat('', 'x')// 'x'
concat('', '')// ''
concat(_, 'bar')('foo')// 'foobar'
concat('x', _)('')// 'x'
concat(_, ['a'])(['c', 'd'])// ['c', 'd', 'a']
concat(_, [] as string[])(['c', 'd'])// ['c', 'd']
```
