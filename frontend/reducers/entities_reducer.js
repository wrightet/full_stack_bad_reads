import { combineReducers} from 'redux'

import usersReducer from './users_reducer';
import booksReducer from './books_reducer';
import reviewsReducer from './reviews_reducer';
import shelvesReducer from './shelves_reducer';
import librariesReducer from './library_reducer';

export default combineReducers({
    users: usersReducer, 
    books: booksReducer, 
    reviews: reviewsReducer,
    shelves: shelvesReducer,
    libraries: librariesReducer
    
});