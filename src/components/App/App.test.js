import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router, Switch, Route, MemoryRouter } from "react-router-dom";
import Home from 'pages/Home';
import AddLink from 'pages/AddLink';
import App from '../App';

describe('AddLinkButton', () => {
  test('Renders without crashing and with expected structure', () => {
    const wrapper = shallow(<App />);
  
    expect(wrapper.find(Router)).toHaveLength(1);
    expect(wrapper.find(Switch)).toHaveLength(1);
    expect(wrapper.find(Route)).toHaveLength(2);
    expect(wrapper.find(Home)).toHaveLength(1);
    expect(wrapper.find(AddLink)).toHaveLength(1);
  });

  test('Renders `Home` page', () => {
    const wrapper = mount(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>);

    expect(wrapper.find(AddLink)).toHaveLength(0);
    expect(wrapper.find(Home)).toHaveLength(1);  
  });
});
