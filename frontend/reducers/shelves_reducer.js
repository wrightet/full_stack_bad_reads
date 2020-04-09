import {RECEIVE_ALL_SHELVES, RECEIVE_SHELF, REMOVE_SHELF} from '../actions/shelf_actions';

const shelfReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_ALL_SHELVES:
            return action.shelves;
        case RECEIVE_SHELF:
            return Object.assign({}, oldState, {[action.shelf.id]: action.shelf});
        case REMOVE_SHELF:
            delete Object.assign({}, oldState, [action.shelfId])
            return Object.assign({}, oldState)
        default:
            return oldState;
    }
}

export default shelfReducer;