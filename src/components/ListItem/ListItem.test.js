import React from 'react';
import { shallow } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { findByTestAttr } from 'utils/testUtils';
import ListItem from '../ListItem';

describe('ListItem', () => {
  const mockWindowOpen = jest.spyOn(window, 'open');
  const mockProps = {
    id: '1',
    linkName: 'Lorem Ipsum',
    linkUrl: 'https://www.loremipsum.com',
    votes: 30,
    upVote: jest.fn(),
    downVote: jest.fn(),
    deleteLink: jest.fn()
  };

  afterEach(() => {
    mockWindowOpen.mockClear();
  });

  test('Renders without crashing and with expected structure', () => {
    const wrapper = shallow(<ListItem {...mockProps} />);
    const deleteButton = findByTestAttr(wrapper, 'deleteButton');
    const pointsWrapper = findByTestAttr(wrapper, 'points');
    const voteButtonsWrapper = findByTestAttr(wrapper, 'voteButtons');
    const upVoteButton = findByTestAttr(wrapper, 'upVoteButton');
    const downVoteButton = findByTestAttr(wrapper, 'downVoteButton');
    const contentWrapper = findByTestAttr(wrapper, 'linkItemContent');

    expect(wrapper.props().className).toEqual('listItem');
    
    expect(pointsWrapper.props().className).toEqual('votes');
    expect(pointsWrapper.text()).toEqual(mockProps.votes + 'POINTS');
    expect(pointsWrapper.find('span')).toHaveLength(1);
    
    expect(deleteButton.props().className).toEqual('delete');
    expect(deleteButton.props().title).toEqual('Delete');
    expect(deleteButton.find(FontAwesomeIcon)).toHaveLength(1);

    expect(contentWrapper.props().className).toEqual('content');
    expect(contentWrapper.find('h3')).toHaveLength(1);
    expect(contentWrapper.find('p')).toHaveLength(1);
    expect(contentWrapper.find('.buttons')).toHaveLength(1);
    expect(contentWrapper.find('h3').text()).toEqual(mockProps.linkName);

    expect(contentWrapper.find('p').props().title).toEqual(mockProps.linkUrl);
    expect(contentWrapper.find('p').text()).toEqual(`(${mockProps.linkUrl}) <FontAwesomeIcon />`);
    expect(contentWrapper.find('p').find(FontAwesomeIcon)).toHaveLength(1);

    expect(voteButtonsWrapper.props().className).toEqual('buttons');
    expect(voteButtonsWrapper.find('button')).toHaveLength(2);
  
    expect(upVoteButton.props().className).toEqual('upVote');
    expect(upVoteButton.props().title).toEqual('Up Vote');
    expect(upVoteButton.text()).toEqual('<FontAwesomeIcon />Up Vote');

    expect(downVoteButton.props().className).toEqual('downVote');
    expect(downVoteButton.props().title).toEqual('Down Vote');
    expect(downVoteButton.text()).toEqual('<FontAwesomeIcon />Down Vote');
  });

  test('Triggering `deleteLink` function', () => {
    const wrapper = shallow(<ListItem {...mockProps} />);
    const deleteButton = findByTestAttr(wrapper, 'deleteButton');
   
    deleteButton.simulate('click');

    expect(mockProps.deleteLink).toBeCalledWith({id: mockProps.id, linkName: mockProps.linkName});
  });

  test('Triggering link `click` event', () => {
    const wrapper = shallow(<ListItem {...mockProps} />);
    
    wrapper.find('p').simulate('click');

    expect(mockWindowOpen).toBeCalledWith(mockProps.linkUrl);
  });

  test('Triggering `upVote` function', () => {
    const wrapper = shallow(<ListItem {...mockProps} />);
    const upVoteButton = findByTestAttr(wrapper, 'upVoteButton');
    upVoteButton.simulate('click');

    expect(mockProps.upVote).toBeCalledWith(mockProps.id);
  });

  test('Triggering `downVote` function', () => {
    const wrapper = shallow(<ListItem {...mockProps} />);
    const downVoteButton = findByTestAttr(wrapper, 'downVoteButton');
    downVoteButton.simulate('click');

    expect(mockProps.downVote).toBeCalledWith(mockProps.id);
  });
});
