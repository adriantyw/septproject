import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import RegisterComponent from './RegisterComponent.jsx'
import CalendarComponent from './CalendarComponent.jsx'
import MarketPlaceComponent from './MarketplaceComponent.jsx'
import AddMarketPlaceItemPanel from './AddMarketPlaceItemPanel.jsx'
import PurchaseMarketPlaceItemComponent from './PurchaseMarketPlaceItemComponent.jsx'

class TodoApp extends Component
{
    render()
    {
        return (
            <div className="TodoApp">
                <Router>
                    <>
                        <HeaderComponent />
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <Route path="/register" component={RegisterComponent} />
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} />
                            <AuthenticatedRoute path="/calendar" component={CalendarComponent} />
                            <AuthenticatedRoute path="/marketplace" component={MarketPlaceComponent} />
                            <AuthenticatedRoute path="/additempanel/" component={AddMarketPlaceItemPanel} />
                            <AuthenticatedRoute path="/buyitempanel/:id" component={PurchaseMarketPlaceItemComponent} />
                            <AuthenticatedRoute path="/logout" component={LogoutComponent} />

                            <Route component={ErrorComponent} />
                        </Switch>
                        <FooterComponent />
                    </>
                </Router>
            </div>
        )
    }
}

export default TodoApp