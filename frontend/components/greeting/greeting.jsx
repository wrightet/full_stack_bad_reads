import React from 'react';
import { Link } from 'react-router-dom';

// const handleDropDown = () => {
//     return (<label> Drop Down
//         <select name="profile" id="profile-drop-down">
//             <option disabled selected></option>
//             <option>Welcome, {currentUser.firstName}</option>
//             <option value="" onClick={logout}>Log out</option>
//         </select>
//     </label>
//     )
// }

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
            <ul className="header-left">
                <li id="header-el">Home</li>
                <li id="header-el">My Books</li>
                <li id="header-el">Browse</li>
                <li id="header-el-name"><ul><li>Welcome, {currentUser.firstName}</li>
                <li><button className="logout-button-header" onClick={logout}>Log out</button></li>
                </ul></li>
            </ul>
            
            
        </div>
    )

    return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;