import {RECEIVE_ALL_BOOKS, RECEIVE_BOOK} from '../actions/book_actions';

const booksReducer = (oldState = {}, action) => {

    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState)
    let book

    switch (action.type) {
        case RECEIVE_ALL_BOOKS:
            return action.books
        case RECEIVE_BOOK:
            // nextState[action.book.id] = action.book;
            // return nextState;
            return Object.assign({}, oldState, { [action.book.id]: action.book});
        default:
            return oldState;
            
    }
}

export default booksReducer;