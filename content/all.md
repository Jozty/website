---
title: Docs
description: All functions
---

[add]: https://deno.land/x/fae/add.ts
[addindex]: https://deno.land/x/fae/addIndex.ts
[adjust]: https://deno.land/x/fae/adjust.ts
[all]: https://deno.land/x/fae/all.ts
[divide]: https://deno.land/x/fae/divide.ts
[multiply]: https://deno.land/x/fae/multiply.ts
[subtract]: https://deno.land/x/fae/subtract.ts
[zip]: https://deno.land/x/fae/zip.ts
[zipwith]: https://deno.land/x/fae/zipWith.ts

### add

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/add)</span>[[src]][add]</span>

```typescript
(a: number, b: number) => number
```

Adds two numbers

```typescript
Fae.add(3, 4) //7
const add5 = Fae.add(5)
add5(4) // 9
Fae.add(4)(3) // 8
```

---

### addIndex

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/addIndex)</span>[[src]][addindex]</span>

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

---

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

---

### all

###### Since - v0.1.0 <span> <span class="full-docs">[[full-docs]](/all)</span>[[src]][all]</span>

```typescript
(predicate: Predicate1<T>, functor: ArrayLike<T>) => boolean
```

Return `true` if all the elements of the functor match `predicate` `false` otherwise . Acts as a transducer if a transformer is passed in place of `functor`

---

### divide

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/divide)</span>[[src]][divide]</span>

```typescript
(a: number, b: number) => number
```

Divides two numbers

```typescript
Fae.divide(10, 2) //5
const divideBy10 = Fae.divide(Fae._, 10)
divideBy10(30) // 3
const reciprocal = Fae.divide(1)
reciprocal(2) // 0.5
Fae.divide(20)(5) //4
```

---

### multiply

###### Since - v0.1.0 <span> <span class="full-docs">[[full-docs]](/multiply)</span>[[src]][multiply]</span>

```typescript
(a: number, b: number) => number
```

Multiplies two numbers

```typescript
Fae.multiply(3, 4) // 12
const multiply3 = Fae.multiply(3)
multiply3(6) // 18
Fae.multiply(6)(7) // 42
```

---

### subtract

###### Since - v0.1.0 <span> <span class="full-docs">[[full-docs]](/subtract)</span>[[src]][subtract]</span>

```typescript
(a: number, b: number) => number
```

Subtracts two numbers

```typescript
Fae.subtract(3, 4) // -1
const subtract5 = Fae.subtract(Fae._, 5)
subtract5(12) // 7
Fae.subtract(6)(3) // 3
```

---

### zip

###### Since - v0.1.0 <span> <span class="full-docs">[[full-docs]](/zip)</span>[[src]][zip]</span>

```typescript
(list1: T1[], list2: T2[]) =>  [T1, T2][]
```

Creates a new list out of two passed lists by pairing up equally-positioned pair in both the lists.The returned is truncated to the length of the shorter of the two input lists.

```typescript
Fae.zip([1, 2, 3], [100, 200, 300]) // [[1, 100],[2, 200],[3, 300]]
Fae.zip([1, 2, 3, 4], [100, 200, 300]) // [[1, 100],[2, 200],[3, 300]]
Fae.zip([1, 2, 3], [100, 200, 300, 400]) // [[1, 100],[2, 200],[3, 300]]
```

---

### zipWith

###### Since - v0.1.0 <span> <span class="full-docs">[[full-docs]](/zipeWith)</span>[[src]][zipwith]</span>

```typescript
(fn: (a: T1, b: T2) => R, list1: T1[], list2: T2[]) => R[]
```

Creates a new list out of two passed lists. Each item of new list is calculated by applying equally-positioned pair in both the lists.The returned is truncated to the length of the shorter of the two input lists.

```typescript
Fae.zipWith((a: any, b: String) => a + ' ' + b)([10, 20, 30])([
  'Cow',
  'Horse',
  'Dog',
]) // [ "10 Cow", "20 Horse", "30 Dog" ]
Fae.zipWith((a: any, b: String) => a + ' ' + b)([10, 20, 30, 40, 50, 60])([
  'Cow',
  'Horse',
  'Dog',
]) // [ "10 Cow", "20 Horse", "30 Dog" ]
Fae.zipWith((a: any, b: String) => a + ' ' + b)([10, 20])([
  'Cow',
  'Horse',
  'Dog',
]) // [ "10 Cow", "20 Horse" ]
Fae.zipWith((a: any, b: String) => a + ' ' + b)([10, 20, 30])([
  'Cow',
  'Horse',
  'Dog',
  'Cat',
]) // [ "10 Cow", "20 Horse", "30 Dog" ]
```

---
