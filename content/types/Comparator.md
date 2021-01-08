---
title: Comparator type
description: type declaration of Comparator
---

## Comparator type
<br>

**Type declaration**

```typescript
/** Comparator for functions like `sort` */
export type Comparator<T> = (a: T, b: T) => 1 | -1 | 0
```
