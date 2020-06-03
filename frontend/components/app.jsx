import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import BookIndexContainer from './books/book_index_container';
import GreetingContainer from './greeting/greeting_container';
import BookShowContainer from './books/book_show_container';
import EditReviewContainer from './reviews/edit_review_container';
import CreateReviewContainer from './reviews/create_review_container';
import ShelfShowContainer from './shelves/shelf_show_container';
import Splash from './splash/splash';

const App = () => (
    <div className="App">

        <header className="nav-bar">
            <Link to="/" className="header-link">
                <div className='logo'>
                     <h1 className='bad'>bad</h1><h1 className='reads'>reads</h1>
                </div>
               
            </Link>
            <GreetingContainer/>
            <AuthRoute exact path="/" component={LogInFormContainer} className="login" />
        </header>
      
            <AuthRoute exact path="/" component={SignUpFormContainer} className="signup" />
            <AuthRoute exact path='/' component={Splash} />
            <Switch>
                <ProtectedRoute exact path="/" component={BookIndexContainer}/>
                <ProtectedRoute exact path="/books/:id" component={BookShowContainer}/>
                <ProtectedRoute exact path="/books/:id/review/new" component={CreateReviewContainer}/>
                <ProtectedRoute exact path="/books/review/:id/edit" component={EditReviewContainer}/>
                <ProtectedRoute exact path="/shelves/:id" component={ShelfShowContainer}/>
            </Switch>
        
        <footer>
            {/* <div className='footer-logo-div'>
                <Link to="/" className="header-link">
                    <img src={window.images.logoURL} className="footer-logo" />
                </Link>
            </div> */}
       
            <ul>
                <li><a target="_blank" href="https://www.linkedin.com/in/ethan-wright-91a75270/"><img src={window.images.linkedinURL} /></a></li>
                <li><a target="_blank" href="https://github.com/wrightet?tab=repositories"><img src={window.images.githubURL} /></a></li>
                <li><h6>creator: Ethan Wright</h6></li>
            </ul> 
        </footer>
       
    </div>
);

export default App;
