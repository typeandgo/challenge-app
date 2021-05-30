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
  
  test('Renders without crashing and with expected structure', () => {
    const wrapper = shallow(<RemoveLink onOk={ mockOnOkFunc } onCancel={ mockOnCancelFunc } />);
    const buttonsWrapper = findByTestAttr(wrapper, 'buttons');
    const onOKButton = findByTestAttr(wrapper, 'okButton');
    const onCancelButton = findByTestAttr(wrapper, 'cancelButton');
    
    expect(wrapper.props().className).toEqual('removeLink');
    expect(wrapper.find('.title')).toHaveLength(1);
    expect(wrapper.find('.link')).toHaveLength(1);
    expect(wrapper.find('.buttons')).toHaveLength(1);

    expect(buttonsWrapper).toHaveLength(1);
    expect(buttonsWrapper.find('button')).toHaveLength(2);

    expect(onOKButton).toHaveLength(1);
    expect(onCancelButton).toHaveLength(1);
    expect(onOKButton.text()).toEqual('OK');
    expect(onCancelButton.text()).toEqual('CANCEL');
    expect(onOKButton.props().title).toEqual('Ok');
    expect(onCancelButton.props().title).toEqual('Cancel');

    expect(wrapper.find('.title').text()).toEqual('Do you want to remove:');
    expect(wrapper.find('.title').props().className).toEqual('title');
    expect(wrapper.find('.link').text()).toEqual('');
    expect(wrapper.find('.link').props().className).toEqual('link');
  });

  test('With `data` prop', () => {
    const wrapper = shallow(<RemoveLink onOk={ mockOnOkFunc } onCancel={ mockOnCancelFunc } data={ mockData } />);
    
    expect(wrapper.find('.link').text()).toEqual(mockData.linkName);
  });

  test('Triggering `onOk` function', () => {
    const wrapper = shallow(<RemoveLink onOk={ mockOnOkFunc } onCancel={ mockOnCancelFunc } data={ mockData } />);
    const onOKButton = findByTestAttr(wrapper, 'okButton');

    onOKButton.simulate('click');

    expect(mockOnOkFunc).toBeCalledWith(mockData);
  });

  test('Triggering `onCancel` function', () => {
    const wrapper = shallow(<RemoveLink onOk={ mockOnOkFunc } onCancel={ mockOnCancelFunc } data={ mockData } />);
    const onCancelButton = findByTestAttr(wrapper, 'cancelButton');

    onCancelButton.simulate('click');

    expect(mockOnCancelFunc).toBeCalled();
  });
});
