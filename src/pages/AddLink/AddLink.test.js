import React from 'react';
import { shallow } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout from 'components/Layout';
import InputField from 'components/InputField';
import { findByTestAttr } from 'utils/testUtils';
import AddLink from '../AddLink';

describe('AddLink', () => {
  test('Renders without crashing and with expected structure', () => {
    const wrapper = shallow(<AddLink />);
    const pageTitle = findByTestAttr(wrapper, 'pageTitle');
    const inputLinkName = findByTestAttr(wrapper, 'inputLinkName');
    const inputLinkUrl = findByTestAttr(wrapper, 'inputLinkUrl');

    expect(wrapper.find(Layout)).toHaveLength(1);
    expect(wrapper.find('.form')).toHaveLength(1);
    expect(wrapper.find('.link')).toHaveLength(1);
    expect(wrapper.find('.link').find(FontAwesomeIcon)).toHaveLength(1);
    expect(wrapper.find(InputField)).toHaveLength(2);
    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.find('button')).toHaveLength(1);

    expect(wrapper.find('.link').props().to).toEqual('/');
    expect(wrapper.find('.link').props().title).toEqual('Return to List');
    expect(wrapper.find('.link').text()).toEqual('<FontAwesomeIcon />Return to List');

    expect(pageTitle.text()).toEqual('Add New Link');

    expect(wrapper.find('button').props().type).toEqual('submit');
    expect(wrapper.find('button').text()).toEqual('ADD');

    expect(inputLinkName.props().name).toEqual('linkName');
    expect(inputLinkName.props().value).toEqual('');
    expect(inputLinkName.props().error).toBeFalsy();

    expect(inputLinkUrl.props().name).toEqual('linkUrl');
    expect(inputLinkUrl.props().value).toEqual('');
    expect(inputLinkUrl.props().error).toBeFalsy();
  });
});
