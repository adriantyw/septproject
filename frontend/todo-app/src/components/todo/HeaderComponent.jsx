import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.svg';
import AuthenticationService from './AuthenticationService.js'


class HeaderComponent extends Component
{
    render()
    {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        //console.log(isUserLoggedIn);

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-custom">
                    <a class="navbar-brand"><img src={logo} className="App-logo" alt="logo" /></a>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/SEPT">Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/eventplanner">Event Planner</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/calendar">Calendar</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/marketplace">Marketplace</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default HeaderComponent