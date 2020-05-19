import { ADD_BOOK_TO_SHELF, REMOVE_BOOK_FROM_SHELF } from "../actions/shelved_book_actions";

const shelvedBooksReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case REMOVE_BOOK_FROM_SHELF:
            delete Object.assign({}, oldState,[action.bookId])
            return Object.assign({}, oldState)
        case ADD_BOOK_TO_SHELF:
          return Object.assign({},oldState,{[action.book.id]: action.book})
        default:
            return oldState;
    }
}

export default shelvedBooksReducer;