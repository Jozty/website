---
title: Transduce function
description: Initializes a transducer using supplied iterator function `transformer2`.
             Returns a single item by iterating through the list,
             successively calling the transformed `transformer2` and passing it `acc`
             and the current value from the array, and then passing through `transformer1`
             and then passing the result to the next call.
keywords: Transduce
---

## Transduce
<br>

Initializes a transducer using supplied iterator function `transformer2`.
Returns a single item by iterating through the list,
successively calling the transformed `transformer2` and passing it `acc`
and the current value from the array, and then passing through `transformer1`
and then passing the result to the next call.

<br>

&cross; Curried

<br>

**Non curried type declaration**
```typescript
function _transduce<T, L = T>(
  transformer1: Func,
  transformer2: Func | Transformer,
  acc: T,
  functor: L[],
): unknown {
  // ...
}
```


[//]: # (TODO: write examples)
