import { connect } from'react-redux';
import ShelfForm from './shleves_form';
import {requestBook} from '../../actions/book_actions';
import {requestAllShelves, createShelf } from '../../actions/shelf_actions';

const mSTP = (state, ownProps) => {
    const book = state.entities.books[ownProps.match.params.id];
    const user = state.entities.users[state.session.id];
    const addedBooks = {};
    console.log(state)
    return ({
        book: book,
        shelves: Object.values(state.entities.shelves),
        addedBooks = addedBooks
    })
}

const mDTP = dispatch => ({
    requestBook: id => dispatch(requestBook(id)),
    requestAllShelves: () => dispatch(requestAllShelves()),
    createShelf: shelf => dispatch(createShelf(shelf))
})

export default connect(mSTP,mDTP)(ShelfForm);