---
title: Docs
description: All functions
---

[add]: https://deno.land/x/fae/add.ts
[addindex]: https://deno.land/x/fae/addIndex.ts
[adjust]: https://deno.land/x/fae/adjust.ts
[all]: https://deno.land/x/fae/all.ts
[and]: https://deno.land/x/fae/and.ts
[complement]: https://deno.land/x/fae/complement.ts
[concat]: https://deno.land/x/fae/concat.ts
[divide]: https://deno.land/x/fae/divide.ts
[flip]: https://deno.land/x/fae/flip.ts
[fromPairs]: https://deno.land/x/fae/fromPairs.ts
[groupWith]: https://deno.land/x/fae/groupWith.ts
[inc]: https://deno.land/x/fae/inc.ts
[indexOf]: https://deno.land/x/fae/indexOf.ts
[max]: https://deno.land/x/fae/max.ts
[median]: https://deno.land/x/fae/median.ts
[min]: https://deno.land/x/fae/min.ts
[multiply]: https://deno.land/x/fae/multiply.ts
[nth]: https://deno.land/x/fae/nth.ts
[or]: https://deno.land/x/fae/or.ts
[path]: https://deno.land/x/fae/path.ts
[pathOr]: https://deno.land/x/fae/pathOr.ts
[paths]: https://deno.land/x/fae/paths.ts
[pluck]: https://deno.land/x/fae/pluck.ts
[prepend]: https://deno.land/x/fae/prepend.ts
[prop]: https://deno.land/x/fae/prop.ts
[propEq]: https://deno.land/x/fae/propEq.ts
[propIs]: https://deno.land/x/fae/propIs.ts
[propOr]: https://deno.land/x/fae/propOr.ts
[props]: https://deno.land/x/fae/props.ts
[propSatisfies]: https://deno.land/x/fae/propSatisfies.ts
[range]: https://deno.land/x/fae/range.ts
[rangeUntil]: https://deno.land/x/fae/rangeUntil.ts
[reverse]: https://deno.land/x/fae/reverse.ts
[subtract]: https://deno.land/x/fae/subtract.ts
[sum]: https://deno.land/x/fae/sum.ts
[tail]: https://deno.land/x/fae/tail.ts
[trim]: https://deno.land/x/fae/trim.ts
[typ]: https://deno.land/x/fae/typ.ts
[when]: https://deno.land/x/fae/when.ts
[whereAll]: https://deno.land/x/fae/whereAll.ts
[whereAny]: https://deno.land/x/fae/whereAny.ts
[whereEq]: https://deno.land/x/fae/whereEq.ts
[xor]: https://deno.land/x/fae/xor.ts
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

### and

###### since v0.4.0 <span> <span class="full-docs">[[full-docs]](/and)</span>[[src]][and]</span>

```typescript
(a: any, b: any) => boolean
```

Returns `true` if both arguments are truthy values, `false` otherwise.

<br>

All the values are truthy except

* the number `0`
* the BigInt `0n`
* the keyword `null`
* the keyword `undefined`
* the boolean `false`
* the number `NaN`
* the empty string `""` (equivalent to `''` or <code>``</code>)

```typescript
Fae.and(true, false) // false
Fae.and(true, true) // true
Fae.and([1, 2], true) // true
Fae.and([], true) // true
Fae.and(NaN, true) // false
Fae.and("", 1n) // false
Fae.and(0n, 1) // false
```
---

### complement

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/complement)</span>[[src]][complement]</span>

```typescript
(a: (...args: T) => boolean) => (...args: T) => boolean
```

Returns the complement of the function.

```typescript
const even = (x: number) => x % 2 === 0
const f = Fae.complement(even)
f(8)                           // false
f(-2)                          // false
f(2.2)                         // true
f(0)                           // false
Fae.complement(isNaN)(NaN)     // false
Fae.complement(isNaN)(Infinity)// true
```

---

### concat

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/concat)</span>[[src]][concat]</span>

```typescript
<L extends any[] | string>(a: L, b: L) => ConcatReturnType<L>>
```

Returns the concatenation of strings,arrays.

```typescript
Fae.concat('foo', 'bar')            // 'foobar'
Fae.concat('x', '')                 // 'x'
Fae.concat('', 'x')                 // 'x'
Fae.concat('', '')                  // ''
Fae.concat(['a', 'b'], ['c', 'd'])  // ['a', 'b', 'c', 'd']
Fae.concat([], ['c', 'd'])          // ['c', 'd']
```

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

### flip

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/flip)</span>[[src]][flip]</span>

```typescript
(func:number) => number
```

Inverts the first two arguments of a function

```typescript
const f = (a: string, b: string, c: string) => a + ' ' + b + ' ' + c
const g = Fae.flip(f)
f('a', 'b', 'c')    // 'a b c'
g('a', 'b', 'c')    // 'b a c'
g('a', '@', 'A')    // '@ a A'
```

---

### fromPairs

###### since v0.2.0 <span> <span class="full-docs">[[full-docs]](/fromPairs)</span>[[src]][fromPairs]</span>

```typescript
 <T>(pairs: Pair<T>[]) => Obj<T>
```

Creates a new object from a list key-value pairs. If a key appears in
multiple pairs, the rightmost pair is included in the object.

```typescript
Fae.fromPairs([
  ['a', 1],
  ['b', 2],
  ['c', 3]
])                // { a: 1, b: 2, c: 3 }

Fae.fromPairs([
  ['a', 1],
  ['b', 2],
  ['c', 3],
  ['d', 4]
])                // { a: 1, b: 2, c: 3, d: 4 }
  ```

---

### groupWith

###### since v0.5.0 <span> <span class="full-docs">[[full-docs]](/groupWith)</span>[[src]][groupWith]</span>

```typescript
<L extends T[] | string, T>(predicate: Predicate2<T>,functor: L) => L[]
```

Creates a new object of list of values which are satisfy the given function.

```typescript
const isConsecutive = (a: number, b: number) => a + 1 === b
Fae.groupWith(isConsecutive, [])                  // []
Fae.groupWith(isConsecutive, [4, 3, 2, 1])        // [[4], [3], [2], [1]]
Fae.groupWith(isConsecutive, [1, 2, 3, 4])        // [[1, 2, 3, 4]]
Fae.groupWith(isConsecutive, [1, 2, 2, 3])        // [[1, 2], [2, 3]]
Fae.groupWith(isConsecutive, [1, 2, 9, 3, 4])     // [[1, 2], [9], [3, 4]]
Fae.groupWith(isConsecutive, [1, 2, 9, 10, 3, 4]) // [[1, 2], [9, 10], [3, 4]]
```

---

### inc

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/inc)</span>[[src]][inc]</span>

```typescript
(a: number) => number
```

 Increases its argument by 1.

```typescript
Fae.inc(-1)         // 0
Fae.inc(0)          // 1
Fae.inc(1)          // 2
Fae.inc(1020.34)    // 1021.34
Fae.inc(-Infinity)  // -Infinity
Fae.inc(Infinity)   // Infinity
Fae.inc(NaN)        // NaN
```

---

### indexOf

###### since v0.5.0 <span> <span class="full-docs">[[full-docs]](/indexOf)</span>[[src]][indexOf]</span>

```typescript
(list: T[]) => number
```

Returns the position of the first occurrence of `value` in `list`, or -1 if the item is not included in the array

```typescript
const list = [0, 10, 0, 30]
Fae.indexOf(30, list)           // 3
Fae.indexOf(40, list)           // -1
Fae.indexOf(0, list)            // 0
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

### or

###### since v0.4.0 <span> <span class="full-docs">[[full-docs]](/or)</span>[[src]][or]</span>

```typescript
(a: any, b: any) => boolean
```

Returns `true` if any of arguments is truthy values, `false` otherwise.

<br>

All the values are truthy except

* the number `0`
* the BigInt `0n`
* the keyword `null`
* the keyword `undefined`
* the boolean `false`
* the number `NaN`
* the empty string `""` (equivalent to `''` or <code>``</code>)

```typescript
Fae.or(true, false) // true
Fae.or(true, true) // true
Fae.or([1, 2], true) // true
Fae.or([], false) // true
Fae.or(NaN, true) // true
Fae.or("", 0n) // false
Fae.or(null, NaN) // false
Fae.or(undefined, false) // false
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

###### since v0.3.0 <span> <span class="full-docs">[[full-docs]](/pathOr)</span>[[src]][pathOr]</span>

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

### pluck

###### since v0.4.0 <span> <span class="full-docs">[[full-docs]](/pluck)</span>[[src]][pluck]</span>

```typescript
(p: Prop, list: Obj<T>[]): T[]
```

Returns a new list by plucking the same named property off all objects in the list supplied.

```typescript
const getAges = Fae.pluck('age')
getAges([{name: 'shubham', age: 22}, {name: 'shivam', age: 23}]) // [22, 23]

Fae.pluck(0, [[1, 2], [3, 4]]) // [1, 3]
Fae.pluck('val', {a: {val: 3}, b: {val: 5}}) // {a: 3, b: 5}
```

---

### prepend

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/prepend)</span>[[src]][prepend]</span>

```typescript
<T>(el: T, list: T[]) => T[]
```

Add the `el` to the start of `list` and returns new list without affecting original

```typescript
Fae.prepend('tests', ['write', 'more']); //=> [''tests', ''write', 'more']
Fae.prepend(['tests'], ['write', 'more']); //=> [['tests'], 'write', 'more']
```

---

### prop

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/prop)</span>[[src]][prop]</span>

```typescript
<T>(p: Prop, obj: Obj<T> | ArrayLike<T>): T | undefined
```

Returns property `p` on the `obj` if exists

```typescript
Fae.prop('name', { name: 'John', age: 23 }) // 'John'
Fae.prop(0, ['Cthulhu', 'Dagon', 'Yog-Sothoth']) // 'Cthulhu'
```

---

### propEq

###### since v0.3.0 <span> <span class="full-docs">[[full-docs]](/propEq)</span>[[src]][propEq]</span>

```typescript
<T>(name: Prop, val: T, obj: Obj<T>): boolean
```

Returns `true` if the specified object property is equal, to the given value; `false` otherwise.

```typescript
const obj1 = { name: 'Shubham', age: 22, hair: 'blue', isMarried: true }
Fae.propEq('name', 'Shubham', obj1) // true
Fae.propEq('hair', 'black', obj1) // false
```

---

### propIs

###### since v0.3.0 <span> <span class="full-docs">[[full-docs]](/propIs)</span>[[src]][propIs]</span>

```typescript
<T>(type: string, name: Prop, obj: Obj<T>): boolean
```
    
Returns `true` if the specified object property is of the given type; `false` otherwise.

```typescript
Fae.propIs('Number', 'a', {a: 1, y: 2}) // true
Fae.propIs('String', 'a', {a: 'foo'}) // true
Fae.propIs('Number', 'a', {}) // false
```

---

### propOr

###### since v0.3.0 <span> <span class="full-docs">[[full-docs]](/propOr)</span>[[src]][propOr]</span>

```typescript
<T, R>(d: R, p: Prop, obj: Obj<T> | null): T | R
```

If the given, non-null object has an own property with the specified name,
returns the value of that property. Otherwise, returns the provided default value.

```typescript
const fae = {
  name: 'Fae',
  age: 15
}

const Great = Fae.prop('GreatLibrary')
const GreatWithDefault = Fae.propOr('FaeModule', 'GreatLibrary')

Great(fae)  // undefined
GreatWithDefault(fae)  // 'FaeModule'
```

---

### props

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/props)</span>[[src]][props]</span>

```typescript
<T>(p: Prop[], obj: Obj<T> | ArrayLike<T>): (T | undefined)[]
```

Returns an array of multiple on the `obj`. Order is preserved.

```typescript
const obj = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }

Fae.props(['a', 'e'], obj) // [1, 5]
Fae.props(['f', 'c', 'e'], obj) // [6, 3, 5]
Fae.props(['a', 'nonexistent'], obj) // [1, undefined]
```

---

### propSatisfies

###### since v0.3.0 <span> <span class="full-docs">[[full-docs]](/propSatisfies)</span>[[src]][propSatisfies]</span>

```typescript
<T>(pred: Predicate1<T>, name: Prop, obj: Obj<T>): boolean
```

Returns `true` if the specified object property satisfies the given
predicate; `false` otherwise.

```typescript
Fae.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}) // true
```

---

### range

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/range)</span>[[src]][range]</span>

```typescript
(from: number, to: number) => number[]
```

Returns a list of numbers from `from` to `to` **both inclusive**.

```typescript
Fae.range(0, 5) // [0, 1, 2, 3, 4, 5]
Fae.range(4, 7) // [4, 5, 6, 7]
Fae.range(3, 2) // []
Fae.range(_, 5)(1) // [1, 2, 3, 4, 5]
Fae.range(1, _)(5) // [1, 2, 3, 4, 5]
```

---

### rangeUntil

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/rangeUntil)</span>[[src]][rangeUntil]</span>

```typescript
(from: number, to: number) => number[]
```

Returns a list of numbers from `from` (**inclusive**) to `to` (**exclusive**).

```typescript
Fae.rangeUntil(0, 5) // [0, 1, 2, 3, 4]
Fae.rangeUntil(4, 7) // [4, 5, 6]
Fae.rangeUntil(3, 2) // []
Fae.rangeUntil(_, 5)(1) // [1, 2, 3, 4]
Fae.rangeUntil(1, _)(5) // [1, 2, 3, 4]
```

---

### reverse

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/reverse)</span>[[src]][reverse]</span>

```typescript
<F extends T[] | string, T>(functor: F) => F
```

Reverses given string or array without affecting the original.

```typescript
Fae.revrse([1, 2, 3, 4]) // [4, 3, 2, 1]
Fae.revrse('abcd') // 'dcba'
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

### sum

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/sum)</span>[[src]][sum]</span>

```typescript
(list: number[]) => number
```

Adds together all the elements of a list.

```typescript
Fae.sum([1, 2, 3, 4]) // 10
Fae.sum([1, 2, 3, NaN]) // NaN
Fae.sum([1, 2, 3, Infinity]) // Infinity
Fae.sum([1, 2, 3, Infinity, -Infinity]) // NaN
```

---

### tail

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/tail)</span>[[src]][tail]</span>

```typescript
(functor: ArrayLike<T> | string) => T[] | string
```

Returns all but the first element of `functor`. Accepts array-like(including string).

```typescript
Fae.tail([1, 2, 3]) // [2, 3]
Fae.tail([3]) // []
Fae.tail([]) // []

Fae.tail('abc') // 'bc'
Fae.tail('c') // ''
Fae.tail('') // ''

const arr = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  length: 4,
}
Fae.tail(arr) // [2, 3, 4]
```

---

### trim

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/trim)</span>[[src]][trim]</span>

```typescript
(str: string, t: string) => string
```

Trims the string `str` from both end with `t`.
Trims with white space if `t` is `''`, with `t` otherwise.

```typescript
Fae.trim('   abc  ', '') // 'abc'
Fae.trim('!!!Hey!!!', '!') // 'Hey'
Fae.trim('!!!Hey!!!', '!!') // '!Hey!'
Fae.trim('[[Hello]]]', '[') // 'Hello]]]'
```

---

### typ

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/typ)</span>[[src]][typ]</span>

```typescript
(a: any) => AllTypes
```

Gives a single-word string description of the (native) type of the value. The returned types are of type `AllTypes`

```typescript
Fae.typ({}) // 'Object'
Fae.typ(1) // 'Number'
Fae.typ(false) // 'Boolean'
Fae.typ('s') // 'String'
Fae.typ(null) // 'Null'
Fae.typ([]) // 'Array'
Fae.typ(/[A-z]/) // 'RegExp'
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

### xor

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/xor)</span>[[src]][xor]</span>

```typescript
(a: any, b: any) => boolean
```

Exclusive Or - Returns `true` if one of the arguments is truthy, and the other is falsy, `false` otherwise.

<br>

All the values are truthy except

* the number `0`
* the BigInt `0n`
* the keyword `null`
* the keyword `undefined`
* the boolean `false`
* the number `NaN`
* the empty string `""` (equivalent to `''` or <code>``</code>)

```typescript
Fae.xor(true, true) // false
Fae.xor(true, false) // true
Fae.xor(true, []) // false
Fae.xor([], {}) // false
Fae.xor([], NaN) // true
Fae.xor("abc", Infinity) // false
Fae.xor(new Date())(0) // true
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
