import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { mount, shallow } from 'enzyme';
import Layout from 'components/Layout';
import AddLinkButton from 'components/AddLinkButton';
import ListItem from 'components/ListItem';
import Modal from 'components/Modal';
import { act } from 'react-dom/test-utils';
import Home from '../Home';

const mockInput = [
  {
    id: 1,
    linkName: 'Lorem',
    linkUrl: 'https://www.lorem.com',
    votes: 5,
    createDate: 11,
    updateDate: 12
  },
  {
    id: 2,
    linkName: 'Ipsum',
    linkUrl: 'https://www.ipsum.com',
    votes: 3,
    createDate: 22,
    updateDate: 23
  },
  {
    id: 3,
    linkName: 'Dolor',
    linkUrl: 'https://www.dolor.com',
    votes: 1,
    createDate: 33,
    updateDate: 34
  },
  {
    id: 4,
    linkName: 'Sit',
    linkUrl: 'https://www.sit.com',
    votes: 1,
    createDate: 44,
    updateDate: 45
  },
  {
    id: 5,
    linkName: 'Amet',
    linkUrl: 'https://www.amet.com',
    votes: 5,
    createDate: 55,
    updateDate: 56
  },
];

// global.localStorage.setItem('links', mockInput);

describe('Home', () => {
  const history = createMemoryHistory();
  
  test('Renders without crash and with expected structure', () => {
    const wrapper = mount(<Router history={ history }><Home /></Router>);

    expect(wrapper.find(Layout)).toHaveLength(1);
    expect(wrapper.find(AddLinkButton)).toHaveLength(1);
  });
});
