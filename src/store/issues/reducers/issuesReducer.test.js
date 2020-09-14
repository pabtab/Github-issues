import issues from '.';


const initialState = {
  data: [],
};

describe('Issues Reducer tests', () => {
  test('should initial render', () => {
    const reducer = issues(undefined, {});
    expect(reducer).toEqual(initialState);
  });
});
