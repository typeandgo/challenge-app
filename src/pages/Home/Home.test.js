import React from 'react';
import { shallow } from 'enzyme';
import Layout from 'components/Layout';
import AddLinkButton from 'components/AddLinkButton';
import Home from '../Home';

describe('Home', () => {
  test('Renders without crashing and with expected structure', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper.find(Layout)).toHaveLength(1);
    expect(wrapper.find(AddLinkButton)).toHaveLength(1);
  });
});
