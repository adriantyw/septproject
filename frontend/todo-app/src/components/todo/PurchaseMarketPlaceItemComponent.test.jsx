import React from 'react';
import { Link } from 'react-router-dom'
import './style.css'
import ItemDataService from '../../api/todo/ItemDataService.js'
import './MarketPlace.css';
import { shallow } from 'enzyme';
import PurchaseMarketPlaceItemComponent from './PurchaseMarketPlaceItemComponent';

it('renders without crashing', () => {
  shallow(<PurchaseMarketPlaceItemComponent />);
});

it('renders message', () => {
    const wrapper = shallow(<PurchaseMarketPlaceItemComponent />);
    const message = <h2>Purchase Marketplace Item</h2>;
    expect(wrapper.contains(message)).toEqual(true);
  });