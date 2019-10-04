import React from 'react';
import { shallow } from 'enzyme';
import LogoutComponent from './LogoutComponent';

it('renders without crashing', () => {
  shallow(<LogoutComponent />);
});

it('renders logout message', () => {
    const wrapper = shallow(<LogoutComponent />);
    const logout = <h1>You are logged out</h1>;
    expect(wrapper.contains(logout)).toEqual(true);
  });