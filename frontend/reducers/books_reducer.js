import {RECEIVE_ALL_BOOKS, RECEIVE_BOOK} from '../actions/book_actions';

const booksReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
 
    switch (action.type) {
        case RECEIVE_ALL_BOOKS:
            return action.books;
        case RECEIVE_BOOK:
            return Object.assign({}, oldState, { [action.book.id]: action.book});
        default:
            return oldState;
            
    }
}

export default booksReducer;