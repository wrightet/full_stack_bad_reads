import { connect } from'react-redux';
import ShelfForm from './shleves_form';
import {requestBook} from '../../actions/book_actions';
import {requestAllShelves, createShelf } from '../../actions/shelf_actions';
import {placeOnShelf, takeFromShelf} from '../../actions/shelved_book_actions';

const mSTP = (state, ownProps) => {
    const book = state.entities.books[ownProps.match.params.id];
    const user = state.entities.users[state.session.id];
    const addedBooks = {};
    console.log(state)
    return ({
        book: book,
        user: user,
        shelves: Object.values(state.entities.shelves),
        addedBooks = addedBooks
    })
}

const mDTP = dispatch => ({
    requestBook: id => dispatch(requestBook(id)),
    requestAllShelves: () => dispatch(requestAllShelves()),
    createShelf: shelf => dispatch(createShelf(shelf)),
    placeOnShelf: book => dispatch(placeOnShelf(book)),
    takeFromShelf: book => dispatch(takeFromShelf(book))
})

export default connect(mSTP,mDTP)(ShelfForm);