import fallback from '../fallback';

describe('any/fallback', () => {
  it('provides a fallback value', () => {
    const val = 'x';
    expect(fallback(val)()).toEqual(val);
    expect(fallback(val)(null)).toEqual(val);
    expect(fallback(val)('')).toEqual('');
    expect(fallback(val)(0)).toEqual(0);
  });
});
