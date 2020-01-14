import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout}) => {
    
    const sessionLinks = () => (
       
        <div></div>
    )
        window.currentUser = currentUser
      const personalGreeting = () => (
        <div className="greeting-header">
            <ul className="header-left">
                <li className="header-el"><Link to="/">Home</Link></li>
                <li className="header-el"><Link to="/api/books">My Books</Link></li>
                <li className="header-el">Browse</li>
                <li className="header-el-name"> 
                 User
                    <ul id="user-dropdown" >
                       
                        <li >Welcome, {currentUser.firstName}</li>
                        <li ><button className="logout-button-header" onClick={logout}>Log out</button></li>
                    </ul>
                </li>
            </ul>
            
            
        </div>
    )

    return currentUser ? personalGreeting() : sessionLinks();
    
}

export default Greeting;