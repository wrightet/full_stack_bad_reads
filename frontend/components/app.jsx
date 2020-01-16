import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import BookIndexContainer from './books/book_index_container'
import GreetingContainer from './greeting/greeting_container'

const App = () => (
    <div>

        <header className="nav-bar">
            <Link to="/" className="header-link">
                <img src={window.images.logoURL} className="logo" />
            </Link>
            <GreetingContainer />
            <AuthRoute exact path="/" component={LogInFormContainer} className="login" />
        </header>
        <AuthRoute exact path="/" component={SignUpFormContainer} className="signup" />
        <ProtectedRoute exact path="/" component={BookIndexContainer}/>
       
    </div>
);

export default App;

{/*> <AuthRoute exact path="/signup" component={HomePageSignIn} /> */ }
{/* <img src="assets/logo.png" alt="" className="logo"/> */ }  
{/* <div className="book-fire"><img src="assets/book_fire.gif" alt="" /></div> */}