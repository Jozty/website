---
title: Lens type
description: type declaration of Lens
---

## Lens type
<br>

**Type declaration**

```typescript
type Lens<T, F> = <R>(
  getTransformer: GetTransformer<T, F, R>,
) => (target: T) => LensTransformer<never, R, never>
```
