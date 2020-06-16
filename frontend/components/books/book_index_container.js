import { connect } from 'react-redux';
import BookIndex from './book_index';
import { requestAllBooks, requestBook } from '../../actions/book_actions';
import {requestAllReviews } from '../../actions/review_actions';
import {requestAllShelves,createShelf,deleteShelf,updateShelf } from '../../actions/shelf_actions';
import{createLibrary} from '../../actions/library_actions';

const mSTP = state => ({
    books: Object.values(state.entities.books),
    user: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    requestAllBooks: () => dispatch(requestAllBooks()),
    requestBook: id => dispatch(requestBook(id)),
    requestAllReviews: id => dispatch(requestAllReviews(id)),
    requestAllShelves: () => dispatch(requestAllShelves()),
    createLibrary:library => dispatch(createLibrary(library)),
    createShelf:shelf => dispatch(createShelf(shelf)),
    deleteShelf: shelfId => dispatch(deleteShelf(shelfId)),
    updateShelf: shelf => dispatch(updateShelf(shelf))

})

export default connect(mSTP, mDTP)(BookIndex);