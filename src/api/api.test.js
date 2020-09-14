import moxios from 'moxios';
import searchIssues from '.';

const mockResponse = {
  id: '000',
  title: 'test',
  labels: [
    {
      id: '111',
      name: 'bug test',
      color: 'e7e7e7',
    },
  ],
};

describe('moxios tests', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('should mock call the issues on github for react/facebook', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: mockResponse,
      });
    });

    const res = await searchIssues();

    // see wether mock was run with the correct argument
    expect(res).toBe(mockResponse);
  });
});
