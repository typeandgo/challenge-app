import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { mount } from 'enzyme';
import Layout from 'components/Layout';
import AddLinkButton from 'components/AddLinkButton';
import Home from '../Home';


describe('Home', () => {
  const history = createMemoryHistory();
  
  test('Renders without crashing and with expected structure', () => {
    const wrapper = mount(<Router history={ history }><Home /></Router>);

    expect(wrapper.find(Layout)).toHaveLength(1);
    expect(wrapper.find(AddLinkButton)).toHaveLength(1);
  });
});
