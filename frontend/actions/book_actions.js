import * as APIUtil from '../util/book_util';

export const RECEIVE_ALL_BOOKS = 'RECEIVE_ALL_BOOKS';
export const RECEIVE_BOOK = 'RECEIVE_BOOK';
export const CREATE_BOOK = 'CREATE_BOOK';

const receiveAllBooks = (books) => {
    return {
    type: RECEIVE_ALL_BOOKS,
    books
}};
const receiveBook = (book) => ({
    type: RECEIVE_BOOK,
    book
})
export const requestAllBooks = () => dispatch => {
     return APIUtil.fetchAllBooks().then(books => {
         dispatch(receiveAllBooks(books))
        })
}

export const requestBook = id => dispatch => {
    // debugger
    return APIUtil.fetchBook(id).then(book => {
        // debugger; 
        dispatch(receiveBook(book))});
   
}
export const createBook = book => dispatch => {
    
    return APIUtil.createBook(book).then(book => dispatch(receiveBook(book)));
   
}
export const updateBook = book => dispatch => {
    return APIUtil.updateBook(book).then(book => dispatch(receiveBook(book)));
   
}


  
