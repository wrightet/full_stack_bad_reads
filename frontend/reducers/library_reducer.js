import { ADD_BOOK_TO_SHELF, REMOVE_BOOK_FROM_SHELF, RECEIVE_LIBRARY} from "../actions/library_actions";

const librariesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case REMOVE_BOOK_FROM_SHELF:
            delete Object.assign({}, oldState,[action.libraryId])
            return Object.assign({}, oldState)
        case RECEIVE_LIBRARY:
            return Object.assign({}, oldState, { [action.library.id]: action.library})
        case ADD_BOOK_TO_SHELF:
          return Object.assign({},oldState,{[action.library.id]: action.library})
        default:
            return oldState;
    }
}

export default librariesReducer;