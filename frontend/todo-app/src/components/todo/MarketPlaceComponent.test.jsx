import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ItemDataService from '../../api/todo/ItemDataService.js';
import { shallow } from 'enzyme';
import MarketplaceComponent from './MarketplaceComponent';

it('renders without crashing', () => {
    shallow(<MarketplaceComponent />);
  });

  it('renders message', () => {
    const wrapper = shallow(<MarketplaceComponent />);
    const Marketplace = <h2>Marketplace</h2>;
    expect(wrapper.contains(Marketplace)).toEqual(true);
  });
