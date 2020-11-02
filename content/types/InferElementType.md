---
title: InferElementType type
description: type declaration of InferElementType
---

## InferElementType type
<br>

**Type declaration**

```typescript
type InferElementType<T> = T extends string
  ? string
  : T extends (infer U)[]
  ? U
  : T extends ArrayLike<infer U>
  ? U
  : never
```
