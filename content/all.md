---
title: Docs
description: All functions
---
[add]: https://deno.land/x/fae/add.ts
[addIndex]: https://deno.land/x/fae/addIndex.ts
[adjust]: https://deno.land/x/fae/adjust.ts
[all]: https://deno.land/x/fae/all.ts 

### add
###### since v0.1.0  <span> <span class="full-docs">[[full-docs]](/add)</span>[[src]][add]</span>
```typescript
(a: number, b: number) => number
```
Adds two numbers
```typescript
const add5 = Fae.add(5, Fae._)
const a = add5(4) // 9
```

***

### addIndex
###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/addIndex)</span>[[src]][addIndex]</span>
```typescript
(fn: Func) => Func
```
Returns a new iteration function from the passed function by adding two more parameters to its callback function 1.
the current index 2. the entire list The passed function must have first argument as the iteration functions and last arguments as the list.
```typescript
const indexedMap = Fae.addIndex(Fae.map)
indexedMap((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r'])
// ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
```

***

### adjust
###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/adjust)</span>[[src]][adjust]</span>
```typescript
(index: number, fn: Func, list: T[]) => T[]
```
Applies a given function `fn` at given `index` of `list`, returning a new copy of `list` with element at `index` replaced with return value of `fn`.
```typescript
Fae.adjust(2, Fae.add(1), [0, 1, 2, 3]) // [0, 1, 3, 3]
Fae.adjust(-3, Fae.add(1), [0, 1, 2, 3]) // [0, 2, 2, 3]
```

***

### all
###### Since - v0.1.0 <span> <span class="full-docs">[[full-docs]](/all)</span>[[src]][all]</span>
```typescript
(predicate: Predicate1<T>, functor: ArrayLike <T>) => boolean
```
Return `true` if all the elements of the functor match `predicate` `false` otherwise . Acts as a transducer if a transformer is passed in place of `functor`

***
