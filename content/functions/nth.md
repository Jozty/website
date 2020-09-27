---
title: nth function
description: a thorough tour of nth function
---

## Nth
<br>

Returns `index`th element of `functor`. Returns element counting from right end if `index` is -ve. Works in array-like/string/iterable/iterator

<br>

&check; Curried

<br>
<!---
&#10539; Not curred
-->

**Non curried type declaration**
```typescript
function _nth<F extends FunctorWithArLk<T> | string, T> {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type Nth_2 = (<F extends FunctorWithArLk<T> | string, T>(functor: F) => T)
  & ((functor?: PH) => Nth_2)

type Nth_1<F extends FunctorWithArLk<T> | string, T> = ((index: number) => T)
  & ((index?: PH) => Nth_1<F, T>)

type Nth = (<F extends FunctorWithArLk<T> | string, T>(index: number, functor: F) => T)
  & ((index: number, functor?: PH) => Nth_2)
  & (<F extends FunctorWithArLk<T> | string, T>(index: PH, functor: F) => Nth_1<F, T>)
  & ((index?: PH, functor?: PH) => Nth)
```
<br>

**Examples**
```typescript
import { nth, _ } from 'https://deno.land/x/fae/mod.ts'

const arr1 = [1, 2, 3, 4, 5]
const arr2 = ['as', 'df', 'ef', 'qw']
const arr3 = [1, 2, undefined, undefined, 4]
const arr4 = [, ]
const string1 = 'hello'
const string2 = ''
const nthArr1 = nth(_, arr1)
const nthArr2 = nth(_, arr2)
const nthArr3 = nth(_, arr3)
const nthArr4 = nth(_, arr4)
const nthChar = nth(_, string1)
const nthChar1 = nth(_, string2)

nthArr1(1)    // 2
nthArr1(6)    // undefined
nthArr1(-3)   // 3
nthArr1(-6)   // undefined
nthArr2(0)    // 'as'
nthArr2(5)    // undefined
nthArr2(-2)   // 'ef'
nthArr3(0)    // 1
nthArr3(2)    // undefined
nthArr4(0)    // undefined
nthArr4(5)    // undefined

nthChar(0)    // 'h'
nthChar(5)    // ''
nthChar(-3)   // 'l'
nthChar1(0)   // ''
nthChar1(5)   // ''
nthChar1(-5)  // ''
```

