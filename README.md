# spicy-transducers

JavaScript library for composable algorithmic transformations.

Heavily inspired by [Clojure Transducers](https://clojure.org/reference/transducers), in case it was not obvious enough.

**Be warned:** Still in very early stage of development. Use at your own risk.

## Why

Using transducers decouples data transformations from the actual data being transformed so that they can be easily composed and reused.

## Install

```
npm install --save spicy-transducers
# or
yarn add spicy-transducers
```

## Function Docs

Functions are grouped and exported based on the data type that they operate on.

### Any

| Name      | Usage | Notes                                                                                                                |
|-----------|-------|----------------------------------------------------------------------------------------------------------------------|
| chain     | `chain(fn1, fn1, ...fnN)(value)`      | Chain `n` functions and provide the initial value to be passed.                      |
| constant  | `constant(value)`                     | Creates a [constant function.](https://en.wikipedia.org/wiki/Constant_function)      |
| fallback  | `fallback(fallbackValue)(testValue)`  | Enables you to always have a fallback value if `testValue` is `null` or `undefined`. |
| identity  | `identity(value)`                     | An [identity function.](https://en.wikipedia.org/wiki/Identity_function)             |

### Array

| Name        | Usage                                          | Notes                                                                                                                                                                     |
|-------------|------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|    
| map         | `map(mapFunction)(array)`                      | Map function can use the same signature as [Array.prototype.map().](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)           |
| reduce      | `reduce(reduceFunction, defaultValue)(array)`  | Reduce function can have the same signature as [Array.prototype.reduce().](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) |
| reduceRight | `reduce(reduceFunction, defaultValue)(array)`  | Same as [Array.prototype.reduceRight().](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight)                              |
| pop         | `pop(array)`                                   | Returns a new array, with the previous head removed.                                                                                                                      |
| push        | `push(value)(array)`                           | Returns a new array, with the new value pushed as the head.                                                                                                               |
| head        | `head(array)`                                  | Returns the first element from the array.                                                                                                                                 |
| tail        | `tail(array)`                                  | Returns all elements except the first one (the `head`.)                                                                                                                   |
| get         | `get(index)(array)`                            |                                                                                                                                                                           |
| set         | `set(index, value)(array)`                     |                                                                                                                                                                           |
| update      | `update(index, updateFn)(array)`               | The update function will get the current value of the specified `index` as it’s argument.                                                                                 |

### Number

| Name              | Usage |
|-------------------|-------|
| getNthFrom        | `get(array)(index)`  |

### Object

| Name              | Usage                                                           | Notes                                                                                                                    |
|-------------------|-----------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| callMethod        | `call(methodName)(argument1, argument2, ...argumentN)(object)`  | Make sure the `method` exists, otherwise ` TypeError: value[methodName] is not a function`.                              |
| values            | `values(object)`                                                | Uses [Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)     |
| entries           | `entries(object)`                                               | Uses [Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) |
| keys              | `keys(object)`                                                  | Uses [Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)       |
| get               | `get(key)(object)`                                              |                                                                                                                          |
| set               | `set(key, value)(object)`                                       |                                                                                                                          |
| update            | `update(key, updateFn)(object)`                                 | The update function will get the current value of the specified `key` as it’s argument.                                  |                                                                                           |
| delete            | `delete(key)(object)`                                           |                                                                                                                          |

## Usage Examples

Let’s say you have an object `{ q1: Number, q2: Number, q3: Number, q4: Number }` which represents the number of sales per quarter. You want to:
1. Flatten this structure
2. Multiply the number of sales by their price of $99.99
3. Sum the total profits

Let’s see how some of the functions exported by this module can help you build a reusable transducer for this data.

```javascript
  import { chain, map, reduce , values } from 'spicy-transducers'; 
  const sales = { q1: 33, q2: 12, q3: 40, q4: 65 }; // our input data
  const toPrice = _ => _ * 99.99; // our multiplier
  const add = (acc, _) => acc + _; // our sum function
  
  const profitsTransducer = chain(
    values,
    map(toPrice),
    reduce(add, 0)
  );
  const result = profitsTransducers(sales); // => 14998.5
```

## Contributors

* [Jovan Erčić](https://github.com/jokka)
* [Filip Danić](https://github.com/filipdanic)

## License

Licensed under the MIT License.

Copyright © 2017-2018 [SpiceFactory](https://spicefactory.co)
