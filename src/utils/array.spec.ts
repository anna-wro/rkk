import { groupByKey } from './array';

const testArray = [
  { type: 'cat', color: 'black' },
  { type: 'cat', color: 'white' },
  { type: 'dog', color: 'black' },
  { type: 'cat', color: 'brown' },
];

describe('groupByKey()', () => {
  it('returns proper values', () => {
    expect(groupByKey(testArray, 'type')).toMatchObject({
      cat: [
        { color: 'black', type: 'cat' },
        { color: 'white', type: 'cat' },
        { color: 'brown', type: 'cat' },
      ],
      dog: [{ color: 'black', type: 'dog' }],
    });
    expect(groupByKey(testArray, 'color')).toMatchObject({
      black: [
        { color: 'black', type: 'cat' },
        { color: 'black', type: 'dog' },
      ],
      brown: [{ color: 'brown', type: 'cat' }],
      white: [{ color: 'white', type: 'cat' }],
    });
    expect(groupByKey(testArray, 'notExistingProp')).toMatchObject({
      undefined: [
        { color: 'black', type: 'cat' },
        { color: 'white', type: 'cat' },
        { color: 'black', type: 'dog' },
        { color: 'brown', type: 'cat' },
      ],
    });
  });
});
