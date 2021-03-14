import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle} from '@fortawesome/free-solid-svg-icons';

const Greeting = ({ currentUser, logout}) => {
    
    const sessionLinks = () => (
       
        <div></div>
    )
        window.currentUser = currentUser
   
      const personalGreeting = () => (
        <div className="greeting-header">
            <ul className="header-left">
                <li className="header-el"><Link to="/">Home</Link></li>
                <li className="header-el"><Link to="/shelves">Shelves</Link></li>
                <li className="header-el-name">
                {/* <FontAwesomeIcon icon={faUserCircle} id='user-icon' /> */}
                    {/* <ul id='user-dropdown' >

                        <li >Welcome, {currentUser.firstName}</li>
                        <li ><button className="logout-button-header" onClick={logout}>Log out</button></li>
                    </ul> */}
                </li>
                {/* <li className="header-el"><Link to={`/shelves/${requestAllShelves()}`}>My Books</Link></li> */}
                {/* <li ><input type="text" className="books-search" placeholder="Placeholder Search Bar"/></li> */}
                <DropDown currentUser={currentUser} logout={logout}/>
            </ul>
            
            
        </div>
    )

    return currentUser ? personalGreeting() : sessionLinks();
    
};

function DropDown ({currentUser, logout}) {
    const [class_name, setClass] = useState('donotshow');
    const openDrop = () => {
        if (class_name === "user-dropdown"){
            setClass("donotshow");
        }
        else
        {
            setClass("user-dropdown")
        }
    };
    return (
        <li className="header-el-name " onClick={openDrop}>
            <FontAwesomeIcon icon={faUserCircle} id='user-icon' />
            <ul id={class_name} >

                <li >Welcome, {currentUser.firstName}</li>
                <li ><button className="logout-button-header" onClick={logout}>Log out</button></li>
            </ul>
        </li>
    )
}
export default Greeting;


