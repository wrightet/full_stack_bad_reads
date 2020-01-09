import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import Root from './components/root'


// document.addEventListener('DOMContentLoaded', () => {
//     const root = document.getElementById('root');
//     const store = configureStore();
//     window.store = store;
//     window.getState = store.getState;
//     window.dispatch = store.dispatch;
//     ReactDOM.render(<Root store={store}/>, root)
// })

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
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});