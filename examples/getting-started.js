/**
 * Shows how to use ”chain” (compose) transformation functions to:
 * (1) parse, (2) validate, (3) assign defaults, and (4) transform data.
 */
import { chain, transform } from '../lib/index.js';

// (1) parse helper
const parseJSON = transform(JSON.parse);

// (2) validation helper
const validate = (...keys) => (object) => keys.reduce((acc, key) => {
  if (!acc[key]) {
    throw new Error(`🚫  Vehicle has missing key: ${key}`)
  }
  return acc;
}, object);

/// (3) defaults helper
const withDefaults = (defaultValues) => (vehicle) =>
  Object.assign(defaultValues, vehicle);

// (4) transform data
const updateVehicle = (key, fn) => (vehicle) =>
  Object.assign(vehicle, {[key]: fn(vehicle[key]) });

// putting it all together!
const vehicleFromJSON = chain(
  parseJSON,
  validate('id', 'make'),
  withDefaults({ location: 'Unknown' }),
  updateVehicle('make', make => make.toUpperCase()),
);

const ford = vehicleFromJSON('{"id": "123", "make": "Ford"}');
console.log('✅ ', ford, '\n', '\n'); // { location: 'Unknown', id: '123', make: 'FORD' }
const toyota = vehicleFromJSON('{"make": "Toyota"}'); // throws error "🚫  Vehicle has missing key: id"
