"use strict";

var _index = require("./index");

var matchSnapshot = function matchSnapshot(title, value) {
  return it("matches snapshot of " + title, function () {
    expect(value).toMatchSnapshot();
  });
};

describe("method", function () {
  matchSnapshot("inc function", (0, _index.method)("inc")(2)({ inc: function inc(v) {
      return v + 1;
    } }));
});

describe("transform", function () {
  matchSnapshot("inc function", (0, _index.transform)(function (v) {
    return v + 1;
  })(2));
});

describe("chain", function () {
  matchSnapshot("inc twice", (0, _index.chain)((0, _index.method)("inc")(1), (0, _index.transform)(function (v) {
    return v + 1;
  }))({ inc: function inc(v) {
      return v + 1;
    } }));
});

describe("identity", function () {
  matchSnapshot("a number", (0, _index.identity)(3));
});