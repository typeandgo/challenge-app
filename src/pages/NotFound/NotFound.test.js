import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { shallow } from 'enzyme';
import Layout from 'components/Layout';
import NotFound from '../NotFound';


describe('NotFound', () => {
  test('Renders without crashing and with expected structure', () => {
    const wrapper = shallow(<NotFound />);

    expect(wrapper.find(Layout)).toHaveLength(1);
    expect(wrapper.find('.title')).toHaveLength(1);
    expect(wrapper.find('.text')).toHaveLength(1);
    expect(wrapper.find('.link')).toHaveLength(1);
    expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1);

    expect(wrapper.find('.title').text()).toEqual('404');
    expect(wrapper.find('.text').text()).toEqual('Page Not Found');
    expect(wrapper.find('.link').text()).toEqual('<FontAwesomeIcon />Home Page');
    expect(wrapper.find('.link').props().title).toEqual('Home Page');
    expect(wrapper.find('.link').props().to).toEqual('/');
  });
});
