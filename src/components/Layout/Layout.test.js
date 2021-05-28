import React from 'react';
import { shallow } from 'enzyme';
import Header from 'components/Header';
import Layout from '../Layout';

describe('Layout', () => {
  test('Renders without chrash and correct content', () => {
    const mockChildren = <div>Test</div>
    const wrapper = shallow(<Layout>{ mockChildren }</Layout>);
  
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find('main')).toHaveLength(1);
    expect(wrapper.find('main').props().className).toEqual('layout');
    expect(wrapper.find('main').find('div').text()).toEqual('Test');
  });
});
