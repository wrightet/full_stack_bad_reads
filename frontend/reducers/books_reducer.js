import {RECEIVE_ALL_BOOKS, RECEIVE_BOOK} from '../actions/book_actions';

const booksReducer = (oldState = {}, action) => {

    Object.freeze(oldState);
  
    let book

    switch (action.type) {
        case RECEIVE_ALL_BOOKS:
            return Object.assign({}, oldState, action.book)
        case RECEIVE_BOOK:
            book = action.payload.books
            return Object.assign({}, oldState, { [book.id]: book});
        default:
            return oldState;
            
    }
}

export default booksReducer;