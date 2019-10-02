import React, { Component } from 'react';
import ItemDataService from '../../api/todo/ItemDataService.js';
import { shallow } from 'enzyme';
import MarketPlacePanel from './MarketPlacePanel';

it('renders without crashing', () => {
    shallow(<MarketPlacePanel />);
  });

  