import { combineReducers} from 'redux'

import users from './users_reducer';
import books from './books_reducer';
import reviews from './reviews_reducer';
import shelves from './shelves_reducer';
export default combineReducers({
    users, books, reviews, shelves
});