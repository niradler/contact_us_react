import React from 'react';
import { shallow } from 'enzyme';
import Field from './Field';

describe('<Field />', () => {
  test('renders', () => {
    const wrapper = shallow(<Field />);
    expect(wrapper).toMatchSnapshot();
  });
});
