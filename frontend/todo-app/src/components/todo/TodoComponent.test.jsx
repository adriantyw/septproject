import React, { Component } from 'react'
import moment from 'moment'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'
import { shallow } from 'enzyme';
import TodoComponent from './TodoComponent';

it.skip('renders without crashing', () => {
    shallow(<TodoComponent />);
  });