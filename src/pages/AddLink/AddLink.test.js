import React from 'react';
import { createMemoryHistory } from 'history';
import { Link, Router } from 'react-router-dom';
import { mount } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout from 'components/Layout';
import InputField from 'components/InputField';
import { findByTestAttr } from 'utils/testUtils';
import AddLink from '../AddLink';

describe('AddLink', () => {
  const history = createMemoryHistory();
  
  test('Renders without crashing and with expected structure', () => {
    const wrapper = mount(<Router history={ history }><AddLink /></Router>);
    const pageTitle = findByTestAttr(wrapper, 'pageTitle');
    const inputLinkName = findByTestAttr(wrapper, 'inputLinkName');
    const inputLinkUrl = findByTestAttr(wrapper, 'inputLinkUrl');

    expect(wrapper.find(Layout)).toHaveLength(1);
    expect(wrapper.find('.form')).toHaveLength(1);
    expect(wrapper.find(Link)).toHaveLength(1);
    expect(wrapper.find(Link).find(FontAwesomeIcon)).toHaveLength(1);
    expect(wrapper.find(InputField)).toHaveLength(2);
    expect(wrapper.find('h2')).toHaveLength(2);
    expect(wrapper.find('button')).toHaveLength(1);

    expect(wrapper.find(Link).props().to).toEqual('/');
    expect(wrapper.find(Link).props().title).toEqual('Return to List');
    expect(wrapper.find(Link).text()).toEqual('Return to List');

    expect(pageTitle.text()).toEqual('Add New Link');

    expect(wrapper.find('button').props().type).toEqual('submit');
    expect(wrapper.find('button').text()).toEqual('ADD');

    expect(inputLinkName.props().name).toEqual('Link Name');
    expect(inputLinkName.props().value).toEqual('');
    expect(inputLinkName.props().error).toBeFalsy();

    expect(inputLinkUrl.props().name).toEqual('Link Url');
    expect(inputLinkUrl.props().value).toEqual('');
    expect(inputLinkUrl.props().error).toBeFalsy();
  });
});
