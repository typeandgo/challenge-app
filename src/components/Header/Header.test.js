import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('Header', () => {
  test('Renders without crashing and with expected structure', () => {
    const wrapper = shallow(<Header />);
  
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.find('h2').text()).toEqual('LinkVOTE Challenge')
    expect(wrapper.props().className).toEqual('header');
  });
});
