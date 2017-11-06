# spicy-transducers

JavaScript library for composable algorithmic transformations.

Heavily inspired by [Clojure Transducers](https://clojure.org/reference/transducers), in case it was not obvious enough.

**Be warned:** Still in very early stage of development. Use at your own risk.

## Why

Using transducers decouples data transformations from the actual data being transformed, so that they can be easily composed and reused.

## Install

```
npm install --save spicy-transducers
# or
yarn add spicy-transducers 
```

## Usage

```
import { chain, transform } from 'spicy-transducers';

const parseJSON = transform(JSON.parse);

const validateObject = …

const defaults = …

const update = …

const vehicleFromJSON = chain(
  parseJSON,
  validateObject('id', 'make'),
  defaults({ location: 'Unknown' }),
  update('make', make => make.toUpperCase()),
);

const vehicle = parseVehicle('{"id":123,"make":"Ford"}');

console.log(vehicle); // => { id: 123, make: 'FORD', location: 'Unknown' }
```

## Contributors

* [Jovan Erčić](https://github.com/jokka)

## License

Licensed under the MIT License.

Copyright © 2017 [SpiceFactory](https://spicefactory.co)
