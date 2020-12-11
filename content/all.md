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
[either]: https://deno.land/x/fae/either.ts
[empty]: https://deno.land/x/fae/empty.ts
[endsWith]: https://deno.land/x/fae/endsWith.ts
[eqProps]: https://deno.land/x/fae/eqProps.ts
[flip]: https://deno.land/x/fae/flip.ts
[fromPairs]: https://deno.land/x/fae/fromPairs.ts
[groupWith]: https://deno.land/x/fae/groupWith.ts
[head]: https://deno.land/x/fae/head.ts
[identity]: https://deno.land/x/fae/identity.ts
[inc]: https://deno.land/x/fae/inc.ts
[indexOf]: https://deno.land/x/fae/indexOf.ts
[insert]: https://deno.land/x/fae/insert.ts
[isEmpty]: https://deno.land/x/fae/isEmpty.ts
[join]: https://deno.land/x/fae/join.ts
[lens]: https://deno.land/x/fae/lens.ts
[lensIndex]: https://deno.land/x/fae/lensIndex.ts
[lensPath]: https://deno.land/x/fae/lensPath.ts
[lensProp]: https://deno.land/x/fae/lensProp.ts
[lensProp]: https://deno.land/x/fae/lensProp.ts
[max]: https://deno.land/x/fae/max.ts
[mean]: https://deno.land/x/fae/mean.ts
[median]: https://deno.land/x/fae/median.ts
[min]: https://deno.land/x/fae/min.ts
[multiply]: https://deno.land/x/fae/multiply.ts
[not]: https://deno.land/x/fae/not.ts
[nth]: https://deno.land/x/fae/nth.ts
[or]: https://deno.land/x/fae/or.ts
[over]: https://deno.land/x/fae/over.ts
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
[set]: https://deno.land/x/fae/set.ts
[subtract]: https://deno.land/x/fae/subtract.ts
[sum]: https://deno.land/x/fae/sum.ts
[tail]: https://deno.land/x/fae/tail.ts
[take]: https://deno.land/x/fae/take.ts
[takeLast]: https://deno.land/x/fae/takeLast.ts
[tap]: https://deno.land/x/fae/tap.ts
[transduce]: https://deno.land/x/fae/transduce.ts
[trim]: https://deno.land/x/fae/trim.ts
[typ]: https://deno.land/x/fae/typ.ts
[view]: https://deno.land/x/fae/view.ts
[when]: https://deno.land/x/fae/when.ts
[whereAll]: https://deno.land/x/fae/whereAll.ts
[whereAny]: https://deno.land/x/fae/whereAny.ts
[whereEq]: https://deno.land/x/fae/whereEq.ts
[xor]: https://deno.land/x/fae/xor.ts
[zip]: https://deno.land/x/fae/zip.ts
[zipwith]: https://deno.land/x/fae/zipWith.ts

### add

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/add)</span>[[src]][add]</span>

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

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/addIndex)</span>[[src]][addindex]</span>

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

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/adjust)</span>[[src]][adjust]</span>

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

###### Since - v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/all)</span>[[src]][all]</span>

```typescript
(predicate: Predicate1<T>, functor: ArrayLike<T>) => boolean
```

Return `true` if all the elements of the functor match `predicate` `false` otherwise . Acts as a transducer if a transformer is passed in place of `functor`


---

### and

###### since v0.4.0 <span> <span class="full-docs">[[full-docs]](/functions/and)</span>[[src]][and]</span>

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

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/complement)</span>[[src]][complement]</span>

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

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/concat)</span>[[src]][concat]</span>

```typescript
<L extends any[] | string>(a: L, b: L) => InferType<L>
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

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/divide)</span>[[src]][divide]</span>

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

### either

###### since v0.4.0 <span> <span class="full-docs">[[full-docs]](/functions/either)</span>[[src]][either]</span>

```typescript
<T extends Func> (f: T, g: T) => T
```

A function wrapping calls to the two functions in an `||` operation,
returning the result of the first function if it is true and the result
of the second function otherwise. Second function will not be invoked if the first returns a true value.

```typescript
const even = (x: number) => (x & 1) === 0
const gt10 = (x: number) => x > 10
const f = Fae.either(even, gt10)

f(8)    // true
f(13)   // true
f(7)    // false

const g = Fae.either(even, _)(gt10)
g(8)    // true
g(13)   // true
g(7)    // false
```

---

### empty

###### since v0.4.0 <span> <span class="full-docs">[[full-docs]](/functions/empty)</span>[[src]][empty]</span>

```typescript
<T>(x: T) => T | Partial<T>
```

Returns the empty value of its argument's type.

```typescript
Fae.empty([1, 2, 3, 4, 5])          // []
Fae.empty([[1, 2], 3, [4, 5]])      // []
Fae.empty([[[1, 2], 3, [4, 5]]])    // []
Fae.empty({ x: 1, y: 2 })           // {}
Fae.empty('abc')                    // ''
Fae.empty('[1, 2, 3]')              // ''
Fae.empty(new String('abc'))        // ''
Fae.empty(new Array([1, 2]))        // []
```

---

### endsWith

###### since v0.2.0 <span> <span class="full-docs">[[full-docs]](/functions/endsWith)</span>[[src]][endsWith]</span>

```typescript
<L extends any[] | string>(suffix: L, functor: L) => boolean
```
Returns true if `functor` ends with `suffix`.

```typescript
Fae.endsWith('c', 'abc')                          // true
Fae.endsWith(['c'], ['a', 'b', 'c'])              // true
Fae.endsWith(['b'], ['a', 'b', 'c'])              // false
Fae.endsWith(_, ['a', 'b', 'c'])(['a', 'b', 'c']) // true
Fae.endsWith('ology', _)('astrology')             // true
```

---

### eqProps

###### since v0.3.0 <span> <span class="full-docs">[[full-docs]](/functions/eqProps)</span>[[src]][eqProps]</span>

```typescript
<T>(prop: Prop, obj1: Obj<T>, obj2: Obj<T>) => Obj<T>
```

Reports whether two objects have the same value, for the specified property.
Useful as a curried predicate.

```typescript
Fae.eqProps(
  'value',
  { value: 0 },
  { value: -0 },
)                                       // false

Fae.eqProps(
  'value',
  { value: Infinity },
  { value: Infinity },
)                                       // true

Fae.eqProps(
  'value',
  { value: Infinity },
  { value: -Infinity },
)                                      // false

Fae.eqProps(
  'age',
  { name: 'shubham', age: 10 },
  { name: 'shubham', age: 12 },
)                                      // false
  
Fae.eqProps(
  'age',
  { name: 'shivam', age: 10 },
  { name: 'shubham', age: 10 },
)                                      // true
```

---

### flip

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/flip)</span>[[src]][flip]</span>

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

###### since v0.2.0 <span> <span class="full-docs">[[full-docs]](/functions/fromPairs)</span>[[src]][fromPairs]</span>

```typescript
 <T>(pairs: Pair<T>[]) => Obj<T>
```

Creates a new object from a list key-value pairs. If a key appears in
multiple pairs, the rightmost pair is included in the object.

```typescript
Fae.fromPairs([
  ['a', 1],
  ['b', 2],
  ['c', 3],
])                // { a: 1, b: 2, c: 3 }

Fae.fromPairs([
  ['a', 1],
  ['b', 2],
  ['c', 3],
  ['d', 4],
])                // { a: 1, b: 2, c: 3, d: 4 }
  ```

---

### groupWith

###### since v0.5.0 <span> <span class="full-docs">[[full-docs]](/functions/groupWith)</span>[[src]][groupWith]</span>

```typescript
<L extends T[] | string, T>(predicate: Predicate2<T>, functor: L) => L[]
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

### head

###### since v0.5.0 <span> <span class="full-docs">[[full-docs]](/functions/head)</span>[[src]][head]</span>

```typescript
<L extends any[] | string>(functor: L) => InferElementType<L>
```

Returns the first element of the given list or string. In some libraries
this function is named `first`.

```typescript
Fae.head([1, 2, 3])           // 1
Fae.head([2, 3])              // 2
Fae.head([3])                 // 3
Fae.head('c')                 // 'c'
Fae.head('')                  // ''
```

---

### identity

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/identity)</span>[[src]][identity]</span>

```typescript
<T>(x: T) => T
```

Returns the supplied parameter

```typescript
const f = (x: number) => ++x
const g = (y: string) => y + 'bar'

Fae.identity(undefined)             // undefined
Fae.identity('foo')                 // 'foo'
Fae.identity('foo', 'bar')          // 'foo'
Fae.identity(f(1))                  // 2
Fae.identity(g('foo'))              // 'foobar'
```

---

### inc

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/inc)</span>[[src]][inc]</span>

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

###### since v0.5.0 <span> <span class="full-docs">[[full-docs]](/functions/indexOf)</span>[[src]][indexOf]</span>

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

### insert

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/insert)</span>[[src]][insert]</span>

```typescript
<T>(index: number, element: T, list: T[]) => T[]
```

Returns a new array with `element` inserted at `index` to `list` without affecting original one.

```typescript
const list = ['a', 'b', 'c', 'd', 'e']

insert(2, ['s', 't'], list)     // ['a', 'b', ['s', 't'], 'c', 'd', 'e']
insert(3, ['a', 'b'], list)     // ['a', 'b', 'c', ['a', 'b'], 'd', 'e']
insert(4, ['s', 't'], list)     // ['a', 'b', 'c', 'd', ['s', 't'], 'e']

insert(8, 'z', list)            // ['a', 'b', 'c', 'd', 'e', 'z']
insert(0, 'z', list)            // ['z', 'a', 'b', 'c', 'd', 'e']
insert(-1, 'z', list)           // ['a', 'b', 'c', 'd', 'e', 'z']
insert(0)('z')(list)            // ['z', 'a', 'b', 'c', 'd', 'e'])
```

---

### isEmpty

###### since v0.4.0 <span> <span class="full-docs">[[full-docs]](/functions/isEmpty)</span>[[src]][isEmpty]</span>

```typescript
<T>(x: T) => boolean
```

Returns `true` if the given value is its type's empty value, `false` otherwise.

```typescript
Fae.isEmpty(null)       // false
Fae.isEmpty(undefined)  // false
Fae.isEmpty(1 / 0)      // false
Fae.isEmpty(NaN)        // false    
Fae.isEmpty('')         // true
Fae.isEmpty(' ')        // false
Fae.isEmpty([])         // true
Fae.isEmpty([[]])       // false
Fae.isEmpty([null])     // false
Fae.isEmpty({})         // true
Fae.isEmpty({ x: [] })  // false
Fae.isEmpty({ x: 0 })   // false
```

---

### join

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/join)</span>[[src]][join]</span>

```typescript
<T extends Object>(separator: string | number, functor: FunctorWithArLk<T>) => string
```

Returns a string made by inserting the `separator` between each element and concatenating all the elements into a single string.
The functor may be array-like/iterable/iterator.

```typescript
const tS = {toString: () => 'THE_OBJECT_WITH_TO_STRING'}
const x = [1, true, '123', tS]
const y = [...x]
const a = [1, 2, 3, 4, 5]

const joinUnderScore = Fae.join('_')
joinUnderScore(a)       // '1_2_3_4_5'

const join99 = Fae.join(99)
join99(a)               // '1992993994995'
join99(x)               // '199true9912399THE_OBJECT_WITH_TO_STRING'
join99(y)               // '199true9912399THE_OBJECT_WITH_TO_STRING'

join(99, _)(y)          // '199true9912399THE_OBJECT_WITH_TO_STRING'
join(_, x)(99)          // '199true9912399THE_OBJECT_WITH_TO_STRING'
```

---

### lens

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/lens)</span>[[src]][lens]</span>

```typescript
<T, F>(getter: LensGetter<T, F>, setter: LensSetter<T, F>) => Lens<T, F>
```

Returns a lens for the given getter and setter functions. The `getter` "gets"
the value of the focus; the setter "sets" the value of the focus. The `setter`
should not mutate the data structure.

```typescript
const lens1 = Fae.lens(
  Fae.prop('abc') as LensGetter<T, F>,
  (Fae.assoc('abc') as any) as LensSetter<T, F>,
)

const lens2 = Fae.lens(
  Fae.nth(-1) as LensGetter<T, F>,
  (Fae.update(-1) as any) as LensSetter<T, F>,
)
```

---

### lensIndex

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/lensIndex)</span>[[src]][lensIndex]</span>

```typescript
<T, F>(index: number) => Lens<T, F>
```

Returns a lens whose focus is the specified index.

```typescript
const headLens = Fae.lensIndex(0)
```

---

### lensPath

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/lensPath)</span>[[src]][lensPath]</span>

```typescript
<T, F>(path: Path) => Lens<T, F>
```

Returns a lens whose focus is the specified path.

```typescript
const xHeadYLens = Fae.lensPath(['x', 0, 'y'])
```

---

### lensProp

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/lensProp)</span>[[src]][lensProp]</span>

```typescript
<T, F>(prop: Prop) => Lens<T, F>
```

Returns a lens whose focus is the specified property

```typescript
const xLens = Fae.lensProp('x')
```

---

### max

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/max)</span>[[src]][max]</span>

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

### mean

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/mean)</span>[[src]][mean]</span>

```typescript
(list: number[]) => number
```

Returns the mean of the given list of numbers.

```typescript
Fae.mean([1])                   // 1
Fae.mean([7, 6])                // 6.5
Fae.mean([2, 7, 9])             // 6
Fae.mean([2, 7, 9, 10])         // 7
Fae.mean([NaN, 2, 3, 5])        // NaN   
Fae.mean([Infinity, 7, 9, 10])  // Infinity
Fae.mean([-Infinity, 7, 9, 10]) // -Infinity
```

---

### median

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/median)</span>[[src]][median]</span>

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

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/min)</span>[[src]][min]</span>

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

###### Since - v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/multiply)</span>[[src]][multiply]</span>

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

### not

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/not)</span>[[src]][not]</span>

```typescript
<T>(fn: T) => boolean
```

Returns the not(complement) value of the given value.

```typescript
Fae.not(true)           // false
Fae.not('')             // true
Fae.not('asas')         // false
Fae.not(1)              // false
Fae.not(0)              // true
Fae.not(-1)             // false
Fae.not(undefined)      // true
Fae.not(not(undefined)) // false
Fae.not({})             // false
Fae.not({ x: {} })      // false
Fae.not(null)           // true
Fae.not([])             // false
Fae.not([[]])           // false
Fae.not(![])            // true
Fae.not(NaN)            // true
```

---

### nth

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/nth)</span>[[src]][nth]</span>

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

###### since v0.4.0 <span> <span class="full-docs">[[full-docs]](/functions/or)</span>[[src]][or]</span>

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

### over

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/over)</span>[[src]][over]</span>

```typescript
<T, F>(lens: Lens<T, F>, fn: FuncArr1<F, F>, target: T) => T
```

Returns the result of "setting" the portion of the given data structure `target`
focused by the given `lens` to the result of applying the given function `fn` to
the focused value.

```typescript
const headLens = Fae.lensIndex(0)
const arr = ['foo', 'bar', 'baz']

// string only at index 0 is transformed 
Fae.over(headLens, (x: string) => x.toUpperCase(), arr) // ['FOO', 'bar', 'baz']
```
---

### path

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/path)</span>[[src]][path]</span>

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

###### since v0.3.0 <span> <span class="full-docs">[[full-docs]](/functions/pathOr)</span>[[src]][pathOr]</span>

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

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/paths)</span>[[src]][paths]</span>

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

###### since v0.4.0 <span> <span class="full-docs">[[full-docs]](/functions/pluck)</span>[[src]][pluck]</span>

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

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/prepend)</span>[[src]][prepend]</span>

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

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/prop)</span>[[src]][prop]</span>

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

###### since v0.3.0 <span> <span class="full-docs">[[full-docs]](/functions/propEq)</span>[[src]][propEq]</span>

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

###### since v0.3.0 <span> <span class="full-docs">[[full-docs]](/functions/propIs)</span>[[src]][propIs]</span>

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

###### since v0.3.0 <span> <span class="full-docs">[[full-docs]](/functions/propOr)</span>[[src]][propOr]</span>

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

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/props)</span>[[src]][props]</span>

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

###### since v0.3.0 <span> <span class="full-docs">[[full-docs]](/functions/propSatisfies)</span>[[src]][propSatisfies]</span>

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

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/range)</span>[[src]][range]</span>

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

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/rangeUntil)</span>[[src]][rangeUntil]</span>

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

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/reverse)</span>[[src]][reverse]</span>

```typescript
<F extends T[] | string, T>(functor: F) => F
```

Reverses given string or array without affecting the original.

```typescript
Fae.revrse([1, 2, 3, 4]) // [4, 3, 2, 1]
Fae.revrse('abcd') // 'dcba'
```

---

### set

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/set)</span>[[src]][set]</span>

```typescript
<T, F>(lens: Lens<T, F>, value: F, target: T) => T
```

Returns the result of "setting" the portion of the given data structure `target`
focused by the given `len`s to the given `value`.

```typescript
const xLens = Fae.lensProp('x')
const obj = { x: 1, y: 2 }

Fae.set(xLens, 4, {x: 1, y: 2})  // {x: 4, y: 2}
Fae.set(xLens, 8, {x: 1, y: 2})  // {x: 8, y: 2}
```
---

### subtract

###### Since - v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/subtract)</span>[[src]][subtract]</span>

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

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/sum)</span>[[src]][sum]</span>

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

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/tail)</span>[[src]][tail]</span>

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

### take

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/take)</span>[[src]][take]</span>

```typescript
(n, number, functor: ArrayLike<T> | string) => T[] | string
```

Returns first `n` elements of the array or string.

```typescript
Fae.take(3, ['a', 'b', 'c', 'd', 'e', 'f', 'g'])  // ['a', 'b', 'c']
Fae.take(2, 'Functional')                         // 'Fu'
```

---

### takeLast

###### since v0.2.0 <span> <span class="full-docs">[[full-docs]](/functions/takeLast)</span>[[src]][takeLast]</span>

```typescript
(n, number, functor: ArrayLike<T> | string) => T[] | string
```

Returns last `n` elements of the array or string.

```typescript
Fae.takeLast(3, ['a', 'b', 'c', 'd', 'e', 'f', 'g'])  // ['e', 'f', 'g']
Fae.takeLast(2, 'Functional')                         // 'al'
```

---

### tap

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/tap)</span>[[src]][tap]</span>

```typescript
(func: (obj: T) => any, obj: T) => T
```

Runs the given function `func` with the supplied object `obj`, then returns `obj`.

---

### transduce

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/transduce)</span>[[src]][transduce]</span>

```typescript
<T, L = T>(
  transformer1: Func,
  transformer2: Func | Transformer,
  acc: T,
  functor: L[],
) => unknown
```

Initializes a transducer using supplied iterator function `transformer2`.
Returns a single item by iterating through the list,
successively calling the transformed `transformer2` and passing it `acc`
and the current value from the array, and then passing through `transformer1`
and then passing the result to the next call.

---

### trim

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/trim)</span>[[src]][trim]</span>

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

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/typ)</span>[[src]][typ]</span>

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

### view

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/view)</span>[[src]][view]</span>

```typescript
<T, F>(lens: Lens<T, F>, target: T) => F
```

Returns the value of portion of `target` focused by given `lens`.

```typescript
const xLens = Fae.lensProp('x')
const obj = { x: 1, y: 2 }

Fae.view(xLens, {x: 1, y: 2})  // 1
```
---

### when

###### Since - v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/when)</span>[[src]][when]</span>

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

###### Since - v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/whereAll)</span>[[src]][whereAll]</span>

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

###### Since - v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/whereAny)</span>[[src]][whereAny]</span>

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
Fae.whereAny(specP.address, person2.name) //false
Fae.whereAny(specP.name, person2.address) //false
```

---

### whereEq

###### Since - v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/whereEq)</span>[[src]][whereEq]</span>

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

###### since v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/xor)</span>[[src]][xor]</span>

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

###### Since - v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/zip)</span>[[src]][zip]</span>

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

###### Since - v0.1.0 <span> <span class="full-docs">[[full-docs]](/functions/zipWith)</span>[[src]][zipwith]</span>

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
