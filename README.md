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

## Usage

```javascript
import { chain } from 'spicy-transducers';
import { parseJSON, validate, withDefaults, updateVehicle } from '../somewhere';
// here we chain several function to parse, validate,
// assign defaults, and transform our original data source
const vehicleFromJSON = chain(
  parseJSON,
  validate('id', 'make'),
  withDefaults({ location: 'Unknown' }),
  updateVehicle('make', make => make.toUpperCase()),
);

const vehicle = vehicleFromJSON('{"id": "123", "make": "Ford"}'); // => { id: '123', location: 'Unknown', make: 'FORD' }
```
Full example at [`examples/getting-started.js`](https://github.com/spfr/spicy-transducers/blob/master/src/examples/getting-started.js). You can also clone the repo and use `yarn babel-node examples/getting-started.js` to run it.

## Docs
### `chain`

Accepts any number of (transformer) functions as arguments and returns a function that accepts an initial value. When called, it performs a set of reducing operations by calling each function with the result of the previous operation.

E.g.

```javascript
const myTransduce = chain(fn1, fn2, fn3, fn4); // returns a function, ready to be called with an initial value
const myResult = myTransduce(initialValue);

```

## Contributors

* [Jovan Erčić](https://github.com/jokka)
* [Filip Danić](https://github.com/filipdanic)

## License

Licensed under the MIT License.

Copyright © 2017 [SpiceFactory](https://spicefactory.co)
