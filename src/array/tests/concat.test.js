import concat from '../concat';

describe('array/concat', () => {
  it('uses the built in array reduce and concat method', () => {
    const input = [[1,2,3],[4,5,6],[7,8,9],[10,[11,[12]]]];
    const expected = [1,2,3,4,5,6,7,8,9,10,[11,[12]]];
      
    expect(concat(input)).toEqual(expected);
  });
});
