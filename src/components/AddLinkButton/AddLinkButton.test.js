import React from 'react';
import { shallow } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddLinkButton from '../AddLinkButton';

describe('AddLinkButton', () => {
  test('Renders without crashing and with expected structure', () => {
    const wrapper = shallow(<AddLinkButton />);
  
    expect(wrapper.find('span').text()).toEqual('SUBMIT A LINK');
    expect(wrapper.find('.iconContainer')).toHaveLength(1);
    expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1);
    expect(wrapper.props().to).toEqual('/add-link');
    expect(wrapper.props().className).toEqual('link');
    expect(wrapper.props().title).toEqual('Submit a link');
  });
});
