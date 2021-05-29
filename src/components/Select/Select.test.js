import React from 'react';
import { shallow } from 'enzyme';
import { sortTypes } from 'constants/index';
import Select from '../Select';

describe('Select', () => {
  const mockOnChangeFunc = jest.fn();
  const mockSelectValue = 'Lorem Ipsum';
  const mockEvent = {
    preventDefault: jest.fn(),
    target: { value: mockSelectValue }
  };

  test('Renders without crash and with expected structure', () => {
    const wrapper = shallow(<Select defaultValue={ sortTypes.DESC_BY_VOTES } onChange={ mockOnChangeFunc } />);
    const options = wrapper.find('option').getElements();

    expect(wrapper.props().className).toEqual('select');
    expect(wrapper.props().placeholder).toEqual('Order by');
    expect(wrapper.find('option')).toHaveLength(3);
    expect(wrapper.props().defaultValue).toEqual(sortTypes.DESC_BY_VOTES)

    expect(options[0].props.value).toEqual(sortTypes.DESC_BY_CREATE_DATE);
    expect(options[1].props.value).toEqual(sortTypes.DESC_BY_VOTES);
    expect(options[2].props.value).toEqual(sortTypes.ASC_BY_VOTES);

    expect(options[0].props.children).toEqual('Order by');
    expect(options[1].props.children).toEqual('Most Voted (Z-A)');
    expect(options[2].props.children).toEqual('Less Voted (A-Z)');

    expect(options[0].props.disabled).toEqual(true);
  });

  test('Triggering `change` event', () => {
    const wrapper = shallow(<Select defaultValue={ sortTypes.DESC_BY_VOTES } onChange={ mockOnChangeFunc } />);
    
    wrapper.simulate('change', mockEvent);

    expect(mockOnChangeFunc).toBeCalledWith(mockSelectValue);
  });
});
