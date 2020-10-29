---
title: LensTransformer type
description: type declaration of LensTransformer
---

## LensTransformer type
<br>

**Type declaration**

```typescript
type LensTransformer<T, F, R> = {
  value: F
  transform: (
    setter: LensSetter<T, F>,
    target: T,
  ) => LensTransformer<never, R, never>
}
```
