import React from 'react';
import { mount } from 'enzyme';
import { TOAST_TIMEOUT } from 'constants/index';
import Toast from '../Toast';

describe('Toast', () => {

  jest.useFakeTimers();

  const toastRoot = global.document.createElement('div');
  toastRoot.setAttribute('id', 'toast-root');
  const body = global.document.querySelector('body');
  body.appendChild(toastRoot);

  const mockProps = {
    children: <div>Dolor sit amet</div>,
    onClose: jest.fn()
  };

  test('Renders without crashing and with expected structure', () => {
    const wrapper = mount(<Toast {...mockProps} />);
    
    expect(wrapper.find('.toastBody')).toHaveLength(1);
    expect(setTimeout).toBeCalled();
  });

  test('Calls `onClose` function after timeout', async () => {
    const wrapper = mount(<Toast {...mockProps} />);

    wrapper.update();

    setTimeout(() => {
      expect(mockProps.onClose).toBeCalled();
    }, TOAST_TIMEOUT);

    jest.runAllTimers();
  });
});
