---
title: Fae
description: A functional Library for Deno
---
# FAE- A functional Library!
<br/>

 
## Why Choose Fae?
This module is designed in functional programming style that provides many benefits like it never mutates user data and used to create functional pipelines. Using this module is very simple just like using the javascript functions. Insallation guide is given below. Follow simple steps to use the module.  
<br/>


## Installation Guide
To import and use the client in your file, add the following import statement:

```typescript
// for lates version
import * as Fae from 'https://deno.land/x/fae/mod.ts'
// for specific version
import * as Fae from 'https://deno.land/x/fae@v0.5.0/mod.ts'
```
Function usage and documentation can be found <nuxt-link to="/docs">here</nuxt-link>.  
<br/>

## Running Tests
To see the test results you can use the following statement:

```shell script
deno test
```  
<br/>

## Usage with Examples
This module is very easy to use, just import as guided above and that’s it. For reference please see the below example.  

```typescript
import * as Fae from "https://deno.land/x/fae/mod.ts";
Fae.add(10, 20) // = 30
Fae.add(10)(20) // = 30

let add20 = Fae.add(20)
add20(10) // = 30
add20(125) // = 145

Fae.addIndex(Fae.map)(Fae.add)([10, 20, 30]) // = [10, 21, 32]

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const transformer = Fae.pipe(
  Fae.map(inc),
  Fae.filter(even),
  Fae.take(3),
)
transformer(array) // [2, 4, 6]
```
<br/>

## Documentation / Reference
For more details regarding functions and for reference visit <nuxt-link to="/docs">here</nuxt-link>.  
<br/>

## Acknowledgements
We build this module inspired from Ramda for NodeJs. Special thanks to [Ramda](https://ramdajs.com/) developers for inspiring us and many others.
