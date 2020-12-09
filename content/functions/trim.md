---
title: Trim function
description: Trim the string from both ends from given value (whitespaces are trim if given value is `''`)
keywords: Trim
---

## Trim
<br>

Trims the string `str` from both end with `t`. Trims with white space if `t` is `''`, with `t` otherwise.

<br>

&check; Curried

<br>

**Non curried type declaration**
```typescript
function _trim(str: string, t: string): string {
  // ...
}
```
<br>

**Curried type declaration**

```typescript
type Trim_2 = (t: string) => string

type Trim_1 = (str: string) => string

type Trim =
  & ((str: string, t?: PH) => Trim_2)
  & ((str: PH, t: string) => Trim_1)
  & ((str: string, t: string) => string)
```
<br>

**Examples**
```typescript
import { trim } from 'https://deno.land/x/fae/mod.ts'

trim('   abc  ', '')    // 'abc'
trim('!!!Hey!!!', '!')  // 'Hey'
trim('!!!Hey!!!', '!!') // '!Hey!'
trim('[[Hello]]]', '[') // 'Hello]]]'
```

