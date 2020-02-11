import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import Root from './components/root'
import {login, logout} from './util/session_api_util'
import {requestAllReviews, createReview, updateReview} from './actions/review_actions'
import {fetchAllReviews} from './util/review_util';

document.addEventListener('DOMContentLoaded', () => {
    let store;
   
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    } 
    window.getState = store.getState;
    window.login = login;
    window.logout = logout;
    window.requestAllReviews = requestAllReviews();
    window.fetchAllReviews = fetchAllReviews();
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});