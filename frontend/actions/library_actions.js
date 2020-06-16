import * as APIUtil from '../util/library_util';
import { createShelf } from '../util/shelves_util';

export const REMOVE_BOOK_FROM_SHELF = 'REMOVE_BOOK_FROM_SHELF';
export const ADD_BOOK_TO_SHELF = 'ADD_BOOK_TO_SHELF';
export const RECEIVE_LIBRARY = 'RECEIVE_LIBRARY'
const addToShelf = (library) => ({
    type: ADD_BOOK_TO_SHELF,
    library
});

const receiveLibrary = libraryId => ({
    type: RECEIVE_LIBRARY,
    libraryId
})

const removeFromShelf = libraryId => ({
    type: REMOVE_BOOK_FROM_SHELF,
    libraryId
})


export const fetchLibrary = (id) => (
    APIUtil.fetchLibrary(id).then(id => dispatch(receiveLibrary(id)))
)

// adding book to shelf
export const createLibrary = (library) => dispatch => (
    APIUtil.createLibrary(library).then(library => {
       
        dispatch(addToShelf(library))
    })
        
)

export const updateLibrary = (library_id, library) => (
   APIUtil.updateLibrary(library_id,library)
   .then(book => dispatch(removeFromShelf(book.id)))
   .then(book => dispatch(addToShelf(book)))
)

// equal to removing book from shelf
export const removeLibrary = libraryId => dispatch => (
    APIUtil.removeShelvedBook(libraryId).then(library => dispatch(removeFromShelf(library.id)))
)