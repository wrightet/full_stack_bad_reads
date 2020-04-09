import * as APIUtil from '../util/review_util';
import { DELETE_REVIEW } from './review_actions';
export const RECEIVE_ALL_SHELVES = 'RECEIVE_ALL_SHELVES';
export const RECEIVE_SHELF = 'RECEIVE_SHELF';
export const DELETE_SHELF = 'DELETE_SHELF';

const receiveAllShelves = (shelves) => ({
    type: RECEIVE_ALL_SHELVES,
    shelves
});

const receiveShelf = (shelf) => ({
    type: RECEIVE_SHELF,
    shelf
})

const removeShelf = (shelfId) => ({
    type: DELETE_SHELF,
    shelfId

})

export const requestAllShelves = shelfId => dispatch => {
    return APIUtil.fetchAllShelves(shelfId).then(shelves => 
        dispatch(receiveShelves(shelves)))
};

export const requestShelf = shelfId => dispatch => {
    return APIUtil.fetchShelf(shelfId).then(shelf => dispatch(receiveShelf(shelf)))
};

export const createShelf = shelf => dispatch => {
    return APIUtil.createShelf(shelf).then(shelf => dispatch(createShelf(shelf)))
};

export const updateShelf = shelf => dispatch => {
    return APIUtil.updateShelf(shelf).then(shelf => dispatch(updateShelf(shelf)))
}

export const deleteShelf = shelf => dispatch => {
    return APIUtil.deleteShelf(shelf).then(shelf => dispatch(removeShelf(shelf.id)))
}