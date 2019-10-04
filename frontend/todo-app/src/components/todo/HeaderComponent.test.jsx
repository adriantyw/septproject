import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.svg';
import AuthenticationService from './AuthenticationService.js'
import { shallow } from 'enzyme';
import HeaderComponent from './HeaderComponent';

it('renders without crashing', () => {
    shallow(<HeaderComponent />);
  });
  