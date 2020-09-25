---
title: when function
description: a thorough tour of when function
---

## when
<br>

Applies `func` on `value` if the test `predicate` is true and returns it; returns `value` otherwise.

<br>

&check; Curried

<br>
<!---
&#10539; Not curred
-->

**Non curried type declaration**
```typescript
function _when<T, R>(predicate: Predicate1<T>, func: FuncArr1<T, R>, value: T): T | R {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type When_1<T, R> = ((predicate: Predicate1<T>) => T | R)
  & ((predicate?: PH) => When_1<T, R>)

type When_2<T> = (<R>(func: FuncArr1<T, R>) => T | R)
  & ((func?: PH) => When_2<T>)

type When_3<T, R> = ((value: T) => T | R)
  & ((value?: PH) => When_3<T, R>)

type When_2_3<T> = (<R>(func: FuncArr1<T, R>, value: T) => T | R)
  & (<R>(func: FuncArr1<T, R>, value?: PH) => When_3<T, R>)
  & ((func: PH, value: T) => When_2<T>)
  & ((func?: PH, value?: PH) => When_2_3<T>)

type When_1_3<T, R> = ((predicate: Predicate1<T>, value: T) => T | R)
  & ((predicate: Predicate1<T>, value?: PH) => When_3<T, R>)
  & ((predicate: PH, value: T) => When_1<T, R>)
  & ((predicate?: PH, value?: PH) => When_1_3<T, R>)

type When_1_2<T> = (<R>(predicate: Predicate1<T>, func: FuncArr1<T, R>) => T | R)
  & ((predicate: Predicate1<T>, func?: PH) => When_2<T>)
  & (<R>(predicate: PH, func: FuncArr1<T, R>) => When_1<T, R>)
  & ((predicate?: PH, func?: PH) => When_1_2<T>)

type When = (<T, R>(predicate: Predicate1<T>, func: FuncArr1<T, R>, value: T) => T | R)
  & ((predicate?: PH, func?: PH, value?: PH) => When)
  & (<T>(predicate: Predicate1<T>, func?: PH, value?: PH) => When_2_3<T>)
  & (<T, R>(predicate: PH, func: FuncArr1<T, R>, value?: PH) => When_1_3<T, R>)
  & (<T>(predicate: PH, func: PH, value: T) => When_1_2<T>)
  & (<T, R>(predicate: Predicate1<T>, func: FuncArr1<T, R>, value?: PH) => When_3<T, R>)
  & (<T>(predicate: Predicate1<T>, func: PH, value: T) => When_2<T>)
  & (<T, R>(predicate: PH, func: FuncArr1<T, R>, value: T) => When_1<T, R>)
```
<br>

**Examples**
```typescript
import { when, add, multiply, equals, _ } from 'https://deno.land/x/fae/mod.ts'
import { isNumber} from 'https://deno.land/x/fae/utils/is.ts'

const ifIsNumber = when(isNumber)
const add1 = add(1) as (a: number) => number
function g(x: number) {
    return multiply(3)(x)
}

ifIsNumber(add(1))(15) // 16
ifIsNumber(add(1))('hello')	// 'hello'
eq(when(equals(_, 5))(g)(5)	// 15
eq(when(equals(_, 5), _, 5)(g) // 15
eq(when(equals(_, 5), _, 5)(add1 as Func) // 6
```

