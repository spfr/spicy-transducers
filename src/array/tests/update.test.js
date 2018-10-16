import update from '../update';

describe('array/update', () => {
  it('updates an element to the nth index via a reducer; no mutations – returns a new array', () => {
    const arr1 = [1, 2, 3, 4];
    const reducer = _ => _ * 100;
    const arr2 = update(2, reducer)(arr1);
    expect(arr2).toEqual([1, 2, 300, 4]);
    expect(arr1).toEqual([1, 2, 3, 4]);
  });
});
