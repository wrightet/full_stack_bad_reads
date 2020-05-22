import * as APIUtil from '../util/library_util';
import { createShelf } from '../util/shelves_util';

export const REMOVE_BOOK_FROM_SHELF = 'REMOVE_BOOK_FROM_SHELF';
export const ADD_BOOK_TO_SHELF = 'ADD_BOOK_TO_SHELF';

const addToShelf = (book) => ({
    type: ADD_BOOK_TO_SHELF,
    book
});

const removeFromShelf = bookId => ({
    type: REMOVE_BOOK_FROM_SHELF,
    bookId
})

// export const placeOnShelf = (book) => dispatch => (
//     APIUtil.placeOnShelf(book).then(shelved => dispatch(addToShelf(shelved)))
// )

// adding book to shelf
export const createLibrary = (library) => dispatch => (
    APIUtil.createLibrary(library).then(book => dispatch(addToShelf(book)))
)

export const updateLibrary = (library_id, library) => (
   APIUtil.updateLibrary(library_id,library)
   .then(book => dispatch(removeFromShelf(book.id)))
   .then(book => dispatch(addToShelf(book)))
)

// equal to removing book from shelf
export const removeLibrary = book => dispatch => (
    APIUtil.removeLibrary(book).then(book => dispatch(removeFromShelf(book.id)))
)