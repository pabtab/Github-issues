import React from 'react';
import { shallow } from 'enzyme';

import { SearchAutocomplete } from '.';

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
];

const setup = (props = {}) => {
  return shallow(<SearchAutocomplete {...props} />);
};

describe('Search Autocomplete tests', () => {
  test('renders without error', () => {
    const wrapper = setup({
      results: resultMock,
      handleSearchChange: jest.fn(),
      selectResult: jest.fn(),
      value: '',
    });
    const component = wrapper.find('Search');
    expect(component.length).toBe(1);
  });

  test('Should render value after found value', () => {
    const wrapper = setup({
      results: resultMock,
      handleSearchChange: jest.fn(),
      selectResult: jest.fn(),
      value: 'te',
    });
    const cleanWord = 'te'.trim().toLowerCase();
    const wordLength = cleanWord.length;
    const findValue = resultMock.filter(
      (issue) => issue.title.toLowerCase().slice(0, wordLength) === cleanWord
    );

    wrapper.setProps({ value: findValue[0].title });

    expect(wrapper.props().value).toBe('test');
  });
});
