import * as APIUtil from '../util/library_util';

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

export const placeOnShelf = (book) => dispatch => (
    APIUtil.placeOnShelf(book).then(shelved => dispatch(addToShelf(shelved)))
)

export const takeFromShelf = book => dispatch => (
    APIUtil.takeFromShelf(book).then(book => dispatch(removeFromShelf(book.id)))
)