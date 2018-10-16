import map from '../map';

describe('array/map', () => {
  it('uses the built in array map method', () => {
    const input = [0, 1, 2, 3];
    const expected = [0, 2, 4, 6];
    const mapFn = _ => _ * 2;
    expect(map(mapFn)(input)).toEqual(expected);
  });

  it('can use a custom-defined map method', () => {
    const input = { map: _ => _ * _ };
    expect(map(3)(input)).toEqual(9);
  });
});
