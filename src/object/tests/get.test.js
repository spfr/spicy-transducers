import get from '../get';

describe('object/get', () => {
  it('should get value from object', () => {
    const o = { foo: 'bar' };
    expect(get('foo')(o)).toEqual('bar');
  });
  it('should return undefined if no value for given key exists', () => {
    const o = {};
    expect(get('foo')(o)).toEqual(undefined);
  });
  it('should return defaultValue if no value exists for given key', () => {
    const o = {};
    expect(get('foo', 'default')(o)).toEqual('default');
  });
});
