---
title: Docs
description: All functions
---

[add]: https://deno.land/x/fae/add.ts
[addindex]: https://deno.land/x/fae/addIndex.ts
[adjust]: https://deno.land/x/fae/adjust.ts
[all]: https://deno.land/x/fae/all.ts
[divide]: https://deno.land/x/fae/divide.ts
[max]: https://deno.land/x/fae/max.ts
[median]: https://deno.land/x/fae/median.ts
[min]: https://deno.land/x/fae/min.ts
[multiply]: https://deno.land/x/fae/multiply.ts
[nth]: https://deno.land/x/fae/nth.ts
[path]: https://deno.land/x/fae/path.ts
[pathOr]: https://deno.land/x/fae/pathOr.ts
[paths]: https://deno.land/x/fae/paths.ts
[subtract]: https://deno.land/x/fae/subtract.ts
[when]: https://deno.land/x/fae/when.ts
[whereAll]: https://deno.land/x/fae/whereAll.ts
[whereAny]: https://deno.land/x/fae/whereAny.ts
[whereEq]: https://deno.land/x/fae/whereEq.ts
[zip]: https://deno.land/x/fae/zip.ts
[zipwith]: https://deno.land/x/fae/zipWith.ts

### add

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/add)</span>[[src]][add]</span>

```typescript
(a: number, b: number) => number
```

Adds two numbers

```typescript
Fae.add(3, 4) // 7
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
Fae.divide(10, 2) // 5
const divideBy10 = Fae.divide(Fae._, 10)
divideBy10(30) // 3
const reciprocal = Fae.divide(1)
reciprocal(2) // 0.5
Fae.divide(20)(5) // 4
```

---

### max

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/max)</span>[[src]][max]</span>

```typescript
(a: T, b: T) => T
```

Returns the larger of its two arguments.

```typescript
Fae.max(10, -2) // 10
Fae.max(30.89)(10.56) // 30.89
Fae.max(Fae._, 10)(5) // 10
Fae.max('aaa', 'ab')  // 'ab'
Fae.max('aa', 'aab')  // 'aab'
Fae.max(0, Infinity)  // Infinity
```

---

### median

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/median)</span>[[src]][median]</span>

```typescript
(list: number[]) => number
```

Returns the median of the given list of numbers. NaNs are filtered out, if present. Returns NaN if the list is empty.

```typescript
Fae.median([9, 3, -5, -2, 0]) // 0
Fae.median([7.5, 2.8, -10.2, 8]) // 5.15
Fae.median([2, 6, NaN]) // 4
Fae.median([Infinity, -Infinity]) // NaN
Fae.median([]) // NaN
Fae.median([Infinity, Infinity]) // Infinity
```

---

### min

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/min)</span>[[src]][min]</span>

```typescript
(a: T, b: T) => T
```

Returns the smaller of its two arguments.

```typescript
Fae.min(10, -2) // -2
Fae.min(30.89)(10.56) // 10.56
Fae.min(Fae._, 10)(5) // 5
Fae.min('aaa', 'ab')  // 'aaa'
Fae.min('aa', 'aab')  // 'aa'
Fae.min(0, Infinity)  // 0
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

### nth

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/nth)</span>[[src]][nth]</span>

```typescript
(index: number, functor: F) => NthReturnType<F>
```

Returns `index`th element of `functor`. Returns element counting from right end if `index` is -ve. Works in array-like/string/iterable/iterator.

```typescript
Fae.nth(3, [1, 5, 3, 7, 9]) // 7
Fae.nth(1, ['as', 'df', 'ef', 'qw']) // 'df'
Fae.nth(5)(['as', 'df', 'ef', 'qw']) // undefined
Fae.nth(-3, [1, 5, 3, 7, 9]) // 3
Fae.nth(Fae._, 'hello')(-3) // 'l'
```

---

### path

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/path)</span>[[src]][path]</span>

```typescript
(ps: Path, obj: ObjRec<T> | null) => R
```

Retrieve the value at a given path. The path may be any array of keys or string of keys separated by `/` or `.` .

```typescript
Fae.path('a')({a: 2, b: 3, c: {k: [1, 2, 3]}})  // 2
Fae.path(Fae._, {a: 2, b: 3, c: {k: [1, 2, 3]}})('c.k') // [1, 2, 3]
Fae.path('c.k.0', Fae._)({a: 2, b: 3, c: {k: [1, 2, 3]}}) // 1
Fae.path('c.k.e', Fae._)({a: 2, b: 3, c: {k: [1, 2, 3]}}) // undefined
```

---

### pathOr

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/pathOr)</span>[[src]][pathOr]</span>

```typescript
(d: D, p: Path, obj: ObjRec<T> | null) => D | P
```

If the given, non-null object has a value at the given path, returns the value at that path. Otherwise returns the provided default value.

```typescript
Fae.pathOr('Undefined', Fae._, {a: 2, b: 3, c: {k: [1, 2, 3]}})('c.k.e')  // 'Undefined'
Fae.pathOr('Default', 'c.k.0', Fae._)({a: 2, b: 3, c: {k: [1, 2, 3]}})  // 1
Fae.pathOr('Default', Fae._, Fae._)('c/k/-1')({a: 2, b: 3, c: {k: [1, 2, 3]}})  // 3
Fae.pathOr('Default')('a')({a: 2, b: 3, c: {k: [1, 2, 3]}}) // 2
Fae.pathOr(Fae._, Fae._, {a: 2, b: 3, c: {k: [1, 2, 3]}})('Undefined')('c.k.e') // 'Undefined'
```

---

### paths

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/paths)</span>[[src]][paths]</span>

```typescript
(pathsArr: Path[], obj: ObjRec<T> | null) => R[]
```

Retrieves the values at given paths `pathsArr` of `obj`. Each path in the `pathsArr` may be any array of keys or string of keys separated by `/` or `.` .

```typescript
Fae.paths(['', ['p', 0, 'q']], { a: { b: 2 }, p: [{ q: 3 }] })  // [{ a: { b: 2 }, p: [{ q: 3 }] }, 3]
Fae.paths([[], ['p', 0, 'q']], { a: { b: 2 }, p: [{ q: 3 }] })  // [{ a: { b: 2 }, p: [{ q: 3 }] }, 3]
Fae.paths([['p'], ['p', 0]], { a: { b: 2 }, p: [{ q: 3 }] })  // [[{ q: 3 } ], { q: 3 }]
Fae.paths([['a', ''], ['p', 0, 'q']], { a: { b: 2 }, p: [{ q: 3 }]})  // [undefined, 3]
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

### when

###### Since - v0.1.0 <span> <span class="full-docs">[[full-docs]](/when)</span>[[src]][when]</span>

```typescript
(predicate: Predicate1<T>, func: FuncArr1<T, R>, value: T) => T | R
```

Applies `func` on `value` if the test `predicate` is true and returns it; returns `value` otherwise.

```typescript
const equals = Fae.curry(2, (x: number, y: number) => x === y)
const add1 = Fae.add(1) as (a: number) => number

function g(x: number) {
  return Fae.multiply(3)(x)
}

const spec = { x: equals('foo'), y: equals(7) }
const test1 = { x: 12, y: 200 }
const test2 = { x: 'foo', y: 7 }
const isEven = (n:number) => n % 2 === 0;

Fae.when(isNumber, add1)(10)  //11
Fae.when(equals(Fae._, 5), g)(5)  // 15
Fae.when(isNumber, add1 as Func)('hello') // 'hello'
Fae.when(equals([1,2,4,5,6]))(Fae.filter(isEven))([1,2,3,5,6])  // [1, 2, 3, 5, 6]
```

---

### whereAll

###### Since - v0.1.0 <span> <span class="full-docs">[[full-docs]](/whereAll)</span>[[src]][whereAll]</span>

```typescript
(specs: Tests<T>, testObj: Obj<T>) => boolean
```

Takes a specs objects whose properties are predicate functions. Each predicate is applied to the value of the corresponding property of the test object. Returns `true` if all the predicates are satisfied, `false` otherwise.
**NOTE** returns `false` if there is no predicated functions.

```typescript
const equals = Fae.curry(2, (x: number, y: number) => x === y)
const spec = { x: Fae.equals(0), y: Fae.equals(2) }
const spec2 = { x: Fae.equals(20) }
const test1 = { x: 0, y: 2, z: 100 }
const test2 = { x: 0, y: 2 }
const test3 = { w: 10, x: 20 }
const test4 = { x: 0 }
const test5 = { x: 20 }

Fae.whereAll(spec)(test1)     // true
Fae.whereAll(spec, test2)     // true 
Fae.whereAll(spec, test3)     // false   
Fae.whereAll(spec, test4)     // false
Fae.whereAll(spec2, test1)    // false
Fae.whereAll(spec2, test2)    // false
Fae.whereAll(spec2, test3)    // true
Fae.whereAll(spec2, test5)    // true
```

---

### whereAny

###### Since - v0.1.0 <span> <span class="full-docs">[[full-docs]](/whereAny)</span>[[src]][whereAny]</span>

```typescript
(specs: Tests<T>, testObj: Obj<T>) => boolean
```

Takes a specs objects whose property is a predicate function. Each predicate is applied to the value of the corresponding property of the test object. Returns `true` if any of the predicates is satisfied, `false` otherwise.
**NOTE** returns `false` if there is no predicated functions.

```typescript
const equals = Fae.curry(2, (x: number, y: number) => x === y)
const specP = {
  name: { firstName: equals('Bob'), lastname: equals('Hanks') },
  address: { city: equals('LA'), state: equals('California') },
}

const person1 = {
  name: { firstName: 'Bob', lastname: 'South' },
  address: { city: 'LA', state: 'California' },
}

const person2 = {
  name: { firstName: 'Tom', lastname: 'Root' },
  address: { city: 'New York City', state: 'New York' },
}

Fae.whereAny(specP.name, person1.name) // true
Fae.whereAny(specP.name, person2.name) // false
Fae.whereAny(specP.address, person2.name)) //false
Fae.whereAny(specP.name, person2.address) //false
```

---

### whereEq

###### Since - v0.1.0 <span> <span class="full-docs">[[full-docs]](/whereEq)</span>[[src]][whereEq]</span>

```typescript
(spec: Obj<T>, testObj: Obj<T>) => boolean
```

Takes a spec object and a test object, returns true if the test satisfies the spec, false otherwise.`whereEq` is a specialization of `whereAll`.

```typescript
const person1 = {
  name: { firstName: 'Bob', lastname: 'Hanks' },
  address: { city: 'LA', state: 'California' },
}

const person2 = {
  name: { firstName: 'Bob', lastname: 'South' },
  address: { city: 'LA', state: 'California' },
}

const person3 = {
  name: { firstName: 'Tom', lastname: 'Hanks' },
  address: { city: 'New York City', state: 'New York' },
}

const spec = { x: 1, y: 2 }
const test1 = { x: 0, y: 200 }
const test2 = { x: 1, y: 101 }
const test3 = { x: 1, y: 2 }

Fae.whereEq(spec, test1) // false
Fae.whereEq(spec, test2) // false
Fae.whereEq(spec, test3) // true
Fae.whereEq(person1.address, person3.address) // false
Fae.whereEq(person1, person3) // false
Fae.whereEq(person1.address, person2.address) // true
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

###### Since - v0.1.0 <span> <span class="full-docs">[[full-docs]](/zipWith)</span>[[src]][zipwith]</span>

```typescript
(fn: (a: T1, b: T2) => R, list1: T1[], list2: T2[]) => R[]
```

Creates a new list out of two passed lists. Each item of new list is calculated by applying equally-positioned pair in both the lists.The returned is truncated to the length of the shorter of the two input lists.

```typescript
Fae.zipWith((a: number, b: String) => a + ' ' + b)([10, 20, 30])([
  'Cow',
  'Horse',
  'Dog',
]) // [ "10 Cow", "20 Horse", "30 Dog" ]

Fae.zipWith((a: number, b: String) => a + ' ' + b)([10, 20, 30, 40, 50, 60])([
  'Cow',
  'Horse',
  'Dog',
]) // [ "10 Cow", "20 Horse", "30 Dog" ]

Fae.zipWith((a: number, b: String) => a + ' ' + b)([10, 20])([
  'Cow',
  'Horse',
  'Dog',
]) // [ "10 Cow", "20 Horse" ]

Fae.zipWith((a: number, b: String) => a + ' ' + b)([10, 20, 30])([
  'Cow',
  'Horse',
  'Dog',
  'Cat',
]) // [ "10 Cow", "20 Horse", "30 Dog" ]
```

---
