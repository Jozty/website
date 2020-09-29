---
title: ObjRec type
description: type declaration of ObjRec
---

## ObjRec type
<br>

**Type declaration**

```typescript
type ObjRec<T = any> = {
  [key: string]:
    | ObjRec
    | ObjArr
    | string
    | number
    | null
    | undefined
    | T
}
```
