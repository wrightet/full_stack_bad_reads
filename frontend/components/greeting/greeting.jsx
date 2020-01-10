import React from 'react';
import { Link } from 'react-router-dom';
// import { FontAweSomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserCircle } from '@fortawesome/free-solid-svg-icons';



const Greeting = ({ currentUser, logout}) => {
    // Element = <FontAweSomeIcon icon={faUserCircle}/>
    let hide = "shown"
    const handleDropDown = () => {
        console.log('hello')
        if( hide === 'hidden'){
            hide = 'shown';

        } else { hide = 'hidden'}
        }
    
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
                <li className="header-el"><Link to="/">Home</Link></li>
                <li className="header-el">My Books</li>
                <li className="header-el">Browse</li>
                <li className="header-el-name"> 
                 User
                    <ul id="user-dropdown" >
                       
                        <li id={hide}>Welcome, {currentUser.firstName}</li>
                        <li id={hide}><button className="logout-button-header" onClick={logout}>Log out</button></li>
                    </ul>
                </li>
            </ul>
            
            
        </div>
    )

    return currentUser ? personalGreeting() : sessionLinks();
    
}

// class Greeting extends React.Component {
//     constructor(props){
//         this.state = this.props;
//         this.hide = "shown"
//         this.handleDropDown = this.handleDropDown.bind(this)
//     }
//     // componentDidMount(){

//     // }
//     // componentWillUnmount(){

//     // }
//     handleDropDown = () => {
//         console.log('hello')
//         if (hide === 'hidden') {
//             hide = 'shown';

//         } else { hide = 'hidden' }
//     }

//     sessionLinks = () => (
//         <nav className="login-signup">
//             <Link to="/login">Login</Link>
//             &nbsp;or&nbsp;
//             <Link to="/signup">Sign Up</Link>
//         </nav>
//     )
//     // window.currentUser = currentUser
//     personalGreeting = () => (
//         <div className="greeting-header">
//             <ul className="header-left">
//                 <li id="header-el"><Link to="/">Home</Link></li>
//                 <li id="header-el">My Books</li>
//                 <li id="header-el">Browse</li>
//                 <li id="header-el-name">
//                     <ul id="user-dropdown" >
//                         <li onClick={handleDropDown}>User</li>
//                         <li id={hide}>Welcome, {currentUser.firstName}</li>
//                         <li id={hide}><button className="logout-button-header" onClick={logout}>Log out</button></li>
//                     </ul>
//                 </li>
//             </ul>


//         </div>
//     )

//     render() {
//         return currentUser ? personalGreeting() : sessionLinks();
//     }

   
// }

export default Greeting;