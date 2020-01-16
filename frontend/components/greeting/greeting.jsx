import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle} from '@fortawesome/free-solid-svg-icons'
import { faGitHub } from '@fortawesome/free-solid-svg-icons'
const Greeting = ({ currentUser, logout}) => {
    
    const sessionLinks = () => (
       
        <div></div>
    )
        window.currentUser = currentUser
      const personalGreeting = () => (
        <div className="greeting-header">
            <ul className="header-left">
                <li className="header-el"><Link to="/">Home</Link></li>
                {/* <li className="header-el"><Link to="/api/books">Books</Link></li> */}
                <li className="header-el"><a href="https://github.com/wrightet?tab=repositories">Git Hub</a></li>
                <li ><input type="text" className="books-search" placeholder="Placeholder Search Bar"/></li>
                <li className="header-el-name"> 
                      <FontAwesomeIcon icon={faUserCircle} />
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
{/*  */}