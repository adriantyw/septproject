import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import { shallow } from 'enzyme';
import AuthenticatedRoute from './AuthenticatedRoute';

it('renders without crashing', () => {
    shallow(<AuthenticatedRoute />);
  });