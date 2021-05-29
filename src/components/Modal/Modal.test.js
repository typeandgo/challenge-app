import React from 'react';
import { mount } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from '../Modal';

describe('Modal', () => {

  const modalRoot = global.document.createElement('div');
  modalRoot.setAttribute('id', 'modal-root');
  const body = global.document.querySelector('body');
  body.appendChild(modalRoot);

  const mockProps = {
    title: 'Lorem Ipsum',
    children: <div>Dolor sit amet</div>,
    onClose: jest.fn()
  };

  test('Renders without crash and with expected structure', () => {
    const wrapper = mount(<Modal {...mockProps} />);
    
    expect(wrapper.find('.modalContent')).toHaveLength(1);
    expect(wrapper.find('.modalHeader')).toHaveLength(1);
    expect(wrapper.find('.modalTitle')).toHaveLength(1);
    expect(wrapper.find('.modalBody')).toHaveLength(1);
    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1);
    expect(wrapper.find('button').props().title).toEqual('Close');
    expect(wrapper.find('.modalBody').text()).toEqual('Dolor sit amet')
    expect(wrapper.find('.modalTitle').text()).toEqual('Lorem Ipsum');
  });

  test('Triggering modal overlay `click` event', () => {
    const wrapper = mount(<Modal {...mockProps} />);
  
    wrapper.simulate('click');

    expect(mockProps.onClose).toBeCalled();
  });

  test('Triggering close button `click` event', () => {
    const wrapper = mount(<Modal {...mockProps} />);
  
    wrapper.find('button').simulate('click');

    expect(mockProps.onClose).toBeCalled();
  });
});
