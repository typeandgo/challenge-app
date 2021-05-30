import React from 'react';
import { shallow } from 'enzyme';
import InputField from '../InputField';

describe('InputField', () => {
  const mockProps = {
    title: 'Lorem Ipsum',
    name: 'loremIpsum',
    placeholder: 'abc',
    value: 'xyz',
    onChange: jest.fn()
  }

  const mockEvent = {
    preventDefault: jest.fn(),
    target: { value: mockProps.value }
  };

  test('Renders without crashing and with expected structure', () => {
    const wrapper = shallow(<InputField {...mockProps} />);
  
    expect(wrapper.find('input')).toHaveLength(1);
    expect(wrapper.find('label')).toHaveLength(1);
    expect(wrapper.find('.error')).toHaveLength(1);
    expect(wrapper.find('label').text()).toEqual(`${mockProps.title}:`);
    expect(wrapper.props().className).toEqual('inputField');
    
    const input = wrapper.find('input');

    expect(input.props().value).toEqual(mockProps.value);
  });

  test('With `error` prop', () => {
    const mockError = 'Dolor sit amet';
    const wrapper = shallow(<InputField {...mockProps} error={ mockError } />);

    expect(wrapper.find('.error').text()).toEqual(mockError);
    expect(wrapper.props().className).toEqual('inputField hasError');
  });

  test('Triggering `onChange` function', () => {
    const wrapper = shallow(<InputField {...mockProps} />);
    const input = wrapper.find('input');
    
    input.simulate('change', mockEvent);

    expect(mockProps.onChange).toBeCalledWith(mockProps.value);
  });
});
