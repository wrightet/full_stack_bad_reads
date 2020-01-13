import * as APIUtil from '../util/book_util';

export const RECEIVE_ALL_BOOKS = 'RECEIVE_ALL_BOOKS';
export const RECEIVE_BOOK = 'RECEIVE_BOOK';
export const CREATE_BOOK = 'CREATE_BOOK';
export const requestAllBooks = (books) => dispatch => {
     return APIUtil.fetchAllBooks().then(books => dispatch(receiveAllBooks(books)))
}

export const requestBook = id => dispatch => {
    return APIUtil.fetchBook(id).then(book => dispatch(receiveBook(book)));
   
}
export const createBook = book => dispatch => {
    return APIUtil.createBook(book).then(book => dispatch(receiveBook(book)));
   
}


  
