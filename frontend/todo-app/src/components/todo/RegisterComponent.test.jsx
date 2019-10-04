import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { shallow } from 'enzyme';
import RegisterComponent from './RegisterComponent';

it('renders without crashing', () => {
    shallow(<RegisterComponent />);
  });

  