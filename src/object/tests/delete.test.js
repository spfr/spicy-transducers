import remove from '../delete';

describe('object/delete', () => {
  it('should delete the key and return a new object', () => {
    const first = { foo: 'bar', bar: 'foo' };
    const second = remove('bar')(first);

    expect(first.foo).toEqual('bar');
    expect(first.bar).toEqual('foo');
    expect(second.foo).toEqual('bar');
    expect(second.bar).toEqual(undefined);
  });
});
