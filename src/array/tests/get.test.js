import get from '../get';

describe('array/get', () => {
  it('should get value from array at nth index', () => {
    const arr = ['foo', 'bar', 'test'];
    expect(get(1)(arr)).toEqual('bar');
  });
});
