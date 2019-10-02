import React from 'react';
import { shallow } from 'enzyme';
import WelcomeComponent from './WelcomeComponent';

it('renders welcome message', () => {
    const wrapper = shallow(<WelcomeComponent />);
    const welcome = <h1>Welcome!</h1>;
    expect(wrapper.contains(welcome)).toEqual(true);
  });



