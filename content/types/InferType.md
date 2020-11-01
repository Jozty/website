---
title: InferType type
description: type declaration of InferType
---

## InferType type
<br>

**Type declaration**

```typescript
type InferType<T> = T extends string
  ? string
  : T extends (infer U)[]
  ? U[]
  : T extends ArrayLike<infer U>
  ? ArrayLike<U>
  : never
```
