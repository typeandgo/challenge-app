import React from 'react';
import { shallow } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout from 'components/Layout';
import AddLink from '../AddLink';

describe('AddLink', () => {
  test('Renders without crash and with expected structure', () => {
    const wrapper = shallow(<AddLink />);
    console.log('wrapper: ', wrapper);

    expect(wrapper.find(Layout)).toHaveLength(1);
  });
});
