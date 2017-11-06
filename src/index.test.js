import { method, transform, chain, identity } from "./index";

const matchSnapshot = (title, value) =>
  it(`matches snapshot of ${title}`, () => {
    expect(value).toMatchSnapshot();
  });

describe("method", () => {
  matchSnapshot("inc function", method("inc")(2)({ inc: v => v + 1 }));
});

describe("transform", () => {
  matchSnapshot("inc function", transform(v => v + 1)(2));
});

describe("chain", () => {
  matchSnapshot(
    "inc twice",
    chain(method("inc")(1), transform(v => v + 1))({ inc: v => v + 1 })
  );
});

describe("identity", () => {
  matchSnapshot("a number", identity(3));
});
