import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import Root from './components/root'
import { requestAllBooks } from './actions/book_actions';
import { fetchAllBooks} from './util/book_util';
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
    window.store = store;
    window.dispatch = store.dispatch;
    window.requestAllBooks = requestAllBooks;
    window.fetchAllBooks = fetchAllBooks;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});