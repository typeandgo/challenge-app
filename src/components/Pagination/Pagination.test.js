import React from 'react';
import { shallow } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { findByTestAttr } from 'utils/testUtils';
import Pagination from '../Pagination';

describe('Pagination', () => {

  const mockProps = {
    currentPage: 2,
    pageSize: 5,
    totalItems: 20,
    paginate: jest.fn()
  };

  test('Renders without crashing and with expected structure', () => {
    const wrapper = shallow(<Pagination {...mockProps} />);
    const prevButton = findByTestAttr(wrapper, 'prevButton');
    const nextButton = findByTestAttr(wrapper, 'nextButton');
  
    expect(wrapper.props().className).toEqual('pagination');
    expect(wrapper.find('button')).toHaveLength(2);
    expect(wrapper.find('ul')).toHaveLength(1);
    expect(wrapper.find('li')).toHaveLength(4);

    expect(prevButton.props().title).toEqual('Previous');
    expect(prevButton.find(FontAwesomeIcon)).toHaveLength(1);

    expect(nextButton.props().title).toEqual('Next');
    expect(nextButton.find(FontAwesomeIcon)).toHaveLength(1);
  });

  test('Triggering `onPrev` function', () => {
    const wrapper = shallow(<Pagination {...mockProps} />);
    const prevButton = findByTestAttr(wrapper, 'prevButton');
    
    prevButton.simulate('click');

    expect(mockProps.paginate).toBeCalledWith(1);
  });

  test('Triggering `onPrev` function when initial value of currentPage equal to 1', () => {
    const updatedMockProps = {
      ...mockProps,
      currentPage: 1
    };
    const wrapper = shallow(<Pagination {...updatedMockProps} />);
    const prevButton = findByTestAttr(wrapper, 'prevButton');
    
    prevButton.simulate('click');

    expect(mockProps.paginate).toBeCalledWith(1);
  });

  test('Triggering `onNext` function', () => {
    const wrapper = shallow(<Pagination {...mockProps} />);
    const nextButton = findByTestAttr(wrapper, 'nextButton');
    
    nextButton.simulate('click');

    expect(mockProps.paginate).toBeCalledWith(3);
  });

  test('Triggering `onNext` function when initial value of currentPage equal to 5', () => {
    const updatedMockProps = {
      ...mockProps,
      currentPage: 5
    };
    const wrapper = shallow(<Pagination {...updatedMockProps} />);
    const nextButton = findByTestAttr(wrapper, 'nextButton');
    
    nextButton.simulate('click');

    expect(mockProps.paginate).toBeCalledWith(5);
  });

  test('Triggering page number `click` event', () => {
    const wrapper = shallow(<Pagination {...mockProps} />);
    const pageNumberButton = findByTestAttr(wrapper, 'pageNumber-4');
    
    pageNumberButton.simulate('click');

    expect(mockProps.paginate).toBeCalledWith(4);
  });
});
