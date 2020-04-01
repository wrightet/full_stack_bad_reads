import { connect } from 'react-redux';
import BookIndex from './book_index';
import { requestAllBooks, requestBook } from '../../actions/book_actions';
import {requestAllReviews } from '../../actions/review_actions';

const mSTP = state => ({
    books: Object.values(state.entities.books)
});

const mDTP = dispatch => ({
    requestAllBooks: () => dispatch(requestAllBooks()),
    requestBook: id => dispatch(requestBook(id)),
    requestAllReviews: id => dispatch(requestAllReviews(id))
})

export default connect(mSTP, mDTP)(BookIndex);