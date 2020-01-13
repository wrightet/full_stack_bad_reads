import { connect } from 'react-redux';

import BookIndex from './book_index';
import { requestAllBooks } from '../../actions/book_actions';

const mSTP = state => ({
    books: Object.values(state.entities.books)
});

const mDTP = dispatch => ({
    requestAllBooks: () => dispatch(requestAllBooks())
})

export default connect(mSTP, mDTP)(BookIndex);