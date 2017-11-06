"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var method = exports.method = function method(name) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return function (value) {
      return value[name].apply(value, args);
    };
  };
};

var transform = exports.transform = function transform(transformation) {
  return function () {
    return transformation.apply(undefined, arguments);
  };
};

var chain = exports.chain = function chain() {
  for (var _len2 = arguments.length, transformations = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    transformations[_key2] = arguments[_key2];
  }

  return function (value) {
    return transformations.reduce(function (result, transformation) {
      return transformation(result);
    }, value);
  };
};

var identity = exports.identity = function identity(value) {
  return value;
};