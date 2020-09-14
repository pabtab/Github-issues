import React from 'react'
import { shallow } from 'enzyme';

import {findByTestAttr} from '../../tests/testUtils'
import { ListItem } from '.';

const setup = (props = {}) => {
  return shallow(<ListItem {...props}/>);
};

describe('List Item tests', () => {
  test('renders without error', () => {
    const wrapper = setup({ title: 'test', labels: [], id: 555 });
    const component = findByTestAttr(wrapper, 'list-item');
    expect(component.length).toBe(1);
  });
});
