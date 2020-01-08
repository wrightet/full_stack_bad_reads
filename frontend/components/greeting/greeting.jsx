import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout}) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login">Login</Link>
            &nbsp;or&nbsp;
            <Link to="/signup">Sign Up</Link>
        </nav>
    )
        window.currentUser = currentUser
    const personalGreeting = () => (
        <div className="greeting-header">
            
            <h4 className="header-username">Welcome, {currentUser.firstName}</h4>
            <button className="logout-button-header" onClick={logout}>Log out</button>
        </div>
    )

    return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;