import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import EventPlannerComponent from './EventPlannerComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import TodoComponent from './TodoComponent.jsx'
import RegisterComponent from './RegisterComponent.jsx'
import CalendarComponent from './CalendarComponent.jsx'
import MarketPlaceComponent from './MarketplaceComponent.jsx'
import AddMarketPlaceItemPanel from './AddMarketPlaceItemPanel.jsx'
import PurchaseMarketPlaceItemComponent from './PurchaseMarketPlaceItemComponent.jsx'
import { shallow } from 'enzyme';
import TodoApp from './TodoApp';

it('renders without crashing', () => {
    shallow(<TodoApp />);
  });