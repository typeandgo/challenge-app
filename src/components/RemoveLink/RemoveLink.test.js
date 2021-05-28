import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from 'utils/testUtils';
import RemoveLink from '../RemoveLink';

describe('RemoveLink', () => {
  const mockOnOkFunc = jest.fn();
  const mockOnCancelFunc = jest.fn();
  const mockData = {
    linkName: 'Lorem'
  }
  
  test('Renders without chrash and correct content', () => {
    const wrapper = shallow(<RemoveLink onOk={ mockOnOkFunc } onCancel={ mockOnCancelFunc } />);
    const buttonsWrapper = findByTestAttr(wrapper, 'removeLinkButtons');
    const onOKButton = findByTestAttr(wrapper, 'removeLinkOkButton');
    const onCancelButton = findByTestAttr(wrapper, 'removeLinkCancelButton');
    
    expect(wrapper.props().className).toEqual('removeLink');
    expect(wrapper.find('h4')).toHaveLength(1);
    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.find('div')).toHaveLength(2);
    expect(buttonsWrapper).toHaveLength(1);
    expect(buttonsWrapper.find('button')).toHaveLength(2);
    expect(onOKButton).toHaveLength(1);
    expect(onCancelButton).toHaveLength(1);
    expect(onOKButton.text()).toEqual('OK');
    expect(onCancelButton.text()).toEqual('CANCEL');
    expect(wrapper.find('h4').text()).toEqual('Do you want to remove:');
    expect(wrapper.find('h4').props().className).toEqual('title');
    expect(wrapper.find('p').text()).toEqual('');
    expect(wrapper.find('p').props().className).toEqual('link');
  });

  test('With `data` prop', () => {
    const wrapper = shallow(<RemoveLink onOk={ mockOnOkFunc } onCancel={ mockOnCancelFunc } data={ mockData } />);
    
    expect(wrapper.find('p').text()).toEqual(mockData.linkName);
  });

  test('Triggering `onOk` function', () => {
    const wrapper = shallow(<RemoveLink onOk={ mockOnOkFunc } onCancel={ mockOnCancelFunc } data={ mockData } />);
    const onOKButton = findByTestAttr(wrapper, 'removeLinkOkButton');

    onOKButton.simulate('click');

    expect(mockOnOkFunc).toBeCalledWith(mockData);
  });

  test('Triggering `onCancel` function', () => {
    const wrapper = shallow(<RemoveLink onOk={ mockOnOkFunc } onCancel={ mockOnCancelFunc } data={ mockData } />);
    const onCancelButton = findByTestAttr(wrapper, 'removeLinkCancelButton');

    onCancelButton.simulate('click');

    expect(mockOnCancelFunc).toBeCalled();
  });
});
