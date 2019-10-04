import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.svg';
import AuthenticationService from './AuthenticationService.js'
import { shallow } from 'enzyme';
import EventPlannerComponent from './EventPlannerComponent';

it('renders without crashing', () => {
    shallow(<EventPlannerComponent />);
  });
  