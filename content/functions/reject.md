---
title: Reject function
description: Works as the complement of filter
keywords: Reject, filter, list
---

## Reject 
<br>

Works as the complement of [filter](/functions/filter)

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _reject<F extends T[] | Obj<T>, T>(
  predicate: Predicate1<T>,
  filterable: F
): F {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type Reject_2<T> = <F extends T[] | Obj<T>>(filterable: F) => F

type Reject_1<F extends any[] | Obj<any>> = (predicate: Predicate1<InferElementType<F>>) => F

type Reject =
  & (<F extends T[] | Obj<T>, T>(predicate: Predicate1<T>, filterable: F) => F)
  & (<T>(predicate: Predicate1<T>, filterable?: PH) => Reject_2<T>)
  & (<F extends any[] | Obj<any>>(predicate: PH, filterable: F) => Reject_1<F>)
```
<br>

**Examples**
```typescript
const isOdd = n => (n & 1) === 1

const f = Fae.reject(isOdd, [1, 2, 3, 4])
f()   // [2, 4]
```
