import set from '../set';

describe('object/set', () => {
  it('should set the key/value pair and return a new object', () => {
    const first = { foo: 'bar' };
    const second = set('bar', 'foo')(first);

    expect(first.foo).toEqual('bar');
    expect(first.bar).toEqual(undefined);
    expect(second.foo).toEqual('bar');
    expect(second.bar).toEqual('foo');
  });
});
