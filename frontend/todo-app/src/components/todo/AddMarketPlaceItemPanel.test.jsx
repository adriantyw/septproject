import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { shallow } from 'enzyme';
import AddMarketPlaceItemPanel from './AddMarketPlaceItemPanel';


describe.skip("submitForm", function () {
    it("something", function () {
        throw new Error("fail");
    });
});

it('renders without crashing', () => {
    shallow(<AddMarketPlaceItemPanel />);
  });