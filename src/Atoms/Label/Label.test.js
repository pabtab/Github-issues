import React from 'react'
import { shallow } from 'enzyme';

import {findByTestAttr} from '../../tests/testUtils'
import { Label } from '.';

const setup = (props = {}) => {
  return shallow(<Label {...props}/>);
};

describe('Label tests', () => {
  test('renders without error', () => {
    const wrapper = setup({ color: '00ffff' });
    const component = findByTestAttr(wrapper, 'label');
    expect(component.length).toBe(1);
  });
});
