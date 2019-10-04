import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import AuthenticationService from "./AuthenticationService.js";
import { Link } from 'react-router-dom'
import { shallow } from 'enzyme';
import LoginComponent from './LoginComponent';

it('renders without crashing', () => {
  shallow(<LoginComponent />);
});

it('renders Login message', () => {
    const wrapper = shallow(<LoginComponent />);
    const login = <h1>Login</h1>;
    expect(wrapper.contains(login)).toEqual(true);
  });

  