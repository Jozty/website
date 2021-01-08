---
title: Slice function
description: Returns the elements of the given list or string `fromIndex` (inclusive) to `toIndex` (exclusive).
keywords: Slice
---

## Slice 
<br>

Returns the elements of the given list or string `fromIndex` (inclusive) to `toIndex` (exclusive).

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _slice<L extends ArrayLike<any> | string>(
 fromIndex: number,
 toIndex: number,
 list: L
): InferType<L> {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type Slice_1<L extends ArrayLike<any> | string> = (fromIndex: number) => InferType<L>

type Slice_2<L extends ArrayLike<any> | string> = (toIndex: number) => InferType<L>

type Slice_3 = <L extends ArrayLike<any> | string>(list: L) => InferType<L>

type Slice_2_3 =
  & ((toIndex: number, list?: PH) => Slice_3)
  & (<L extends ArrayLike<any> | string>(toIndex: PH, list: L) => Slice_2<L>)
  & (<L extends ArrayLike<any> | string>(toIndex: number, list: L) => InferType<L>)

type Slice_1_3 =
  & ((fromIndex: number, list?: PH) => Slice_3)
  & (<L extends ArrayLike<any> | string>(fromIndex: PH, list: L) => Slice_1<L>)
  & (<L extends ArrayLike<any> | string>(fromIndex: number, list: L) => InferType<L>)

type Slice_1_2<L extends ArrayLike<any> | string> =
  & ((fromIndex: number, toIndex?: PH) => Slice_2<L>)
  & ((fromIndex: PH, toIndex: number) => Slice_1<L>)
  & ((fromIndex: number, toIndex: number) => InferType<L>)

type Slice =
  & ((fromIndex?: PH, toIndex?: PH, list?: PH) => Slice)
  & ((fromIndex: number, toIndex?: PH, list?: PH) => Slice_2_3)
  & ((fromIndex: PH, toIndex: number, list?: PH) => Slice_1_3)
  & (<L extends ArrayLike<any> | string>(fromIndex: PH, toIndex: PH, list: L) => Slice_1_2<L>)
  & ((fromIndex: number, toIndex: number, list?: PH) => Slice_3)
  & (<L extends ArrayLike<any> | string>(fromIndex: number, toIndex: PH, list: L) => Slice_2<L>)
  & (<L extends ArrayLike<any> | string>(fromIndex: PH, toIndex: number, list: L) => Slice_1<L>)
  & (<L extends ArrayLike<any> | string>(fromIndex: number, toIndex: number, list: L) => InferType<L>)
```
<br>

**Examples**
```typescript
import { slice } from 'https://deno.land/x/fae/mod.ts'

const list = [8, 6, 7, 5, 3, 0, 9]

slice(2, 5, list)  // [7, 5, 3]
```
