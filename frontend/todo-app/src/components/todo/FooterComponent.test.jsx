import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.svg';
import AuthenticationService from './AuthenticationService.js'
import { shallow } from 'enzyme';
import FooterComponent from './FooterComponent';

it('renders without crashing', () => {
    shallow(<FooterComponent />);
  });
  