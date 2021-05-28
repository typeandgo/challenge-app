import React from 'react';
import { shallow } from 'enzyme';
import InputField from '../InputField';

describe('InputField', () => {
  const mockOnChangeFunc = jest.fn();
  const mockInputName = 'Test Input';
  const mockErrorText = 'Lorem ipsum';
  const mockInputValue = 'Dolor sit amet';
  const mockEvent = {
    preventDefault: jest.fn(),
    target: { value: mockInputValue }
  };

  test('Renders without chrash and correct content', () => {
    const wrapper = shallow(<InputField name={ mockInputName } onChange={ mockOnChangeFunc } />);
  
    expect(wrapper.find('input')).toHaveLength(1);
    expect(wrapper.find('label')).toHaveLength(1);
    expect(wrapper.find('label').find('span')).toHaveLength(1);
    expect(wrapper.find('label').text()).toEqual(`${mockInputName}:`);
    expect(wrapper.props().className).toEqual('inputField');
  });

  test('With `error` prop', () => {
    const wrapper = shallow(<InputField name={ mockInputName } onChange={ mockOnChangeFunc } error={ mockErrorText } />);

    expect(wrapper.find('label').find('span').text()).toEqual(mockErrorText);
    expect(wrapper.props().className).toEqual('inputField error');
  });

  test('With `value` prop', () => {
    const wrapper = shallow(<InputField name={ mockInputName } onChange={ mockOnChangeFunc } value={ mockInputValue } />);
    const input = wrapper.find('input');

    expect(input.props().value).toEqual(mockInputValue);
  });

  test('Triggering `onChange` function', () => {
    const wrapper = shallow(<InputField name={ mockInputName } onChange={ mockOnChangeFunc } />);
    const input = wrapper.find('input');
    
    input.simulate('change', mockEvent);

    expect(mockOnChangeFunc).toBeCalledWith(mockInputValue);
  });
});
