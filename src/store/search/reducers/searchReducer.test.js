import search from '.';
import { searchIssue, selectResultItem } from '../actions';

const resultMock = [
  {
    id: '000',
    title: 'test',
    labels: [
      {
        id: '111',
        name: 'bug test',
        color: 'e7e7e7',
      },
    ],
  },
  {
    id: '033',
    title: 'goku',
    labels: [
      {
        id: '441',
        name: 'bug test 2',
        color: 'e7e7e3',
      },
    ],
  },
];

const initialState = {
  result: [],
  value: '',
};

describe('Search Reducer tests', () => {
  test('should initial render', () => {
    const reducer = search(undefined, {});
    expect(reducer).toEqual(initialState);
  });

  test('should return result of value searched', () => {
    const reducer = search(initialState, searchIssue('te', resultMock));
    expect(reducer.result).toEqual([resultMock[0]]);
  });

  test('should return value selected', () => {
    const reducer = search(initialState, selectResultItem(resultMock[0]));
    expect(reducer.value).toEqual(resultMock[0]);
  });
});
