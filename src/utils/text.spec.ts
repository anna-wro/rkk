import { makeStartCase, removeAccents } from './text';

describe('makeStartCase()', () => {
  it('returns proper values', () => {
    expect(makeStartCase('cat ipsum')).toEqual('Cat ipsum');
    expect(makeStartCase('123 cat ipsum')).toEqual('123 cat ipsum');
    expect(makeStartCase('! cat ipsum')).toEqual('! cat ipsum');
    expect(makeStartCase('Cat ipsum')).toEqual('Cat ipsum');
  });
});

describe('removeAccents()', () => {
  it('returns proper values', () => {
    expect(removeAccents('środa')).toEqual('sroda');
    expect(removeAccents('wtorek')).toEqual('wtorek');
    expect(removeAccents('poniedziałek')).toEqual('poniedzialek');
    expect(removeAccents('zażółć gęślą jaźń')).toEqual('zazolc gesla jazn');
  });
});
