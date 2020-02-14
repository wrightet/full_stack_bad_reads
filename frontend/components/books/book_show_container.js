import { connect } from 'react-redux';
import { requestBook, updateBook } from '../../actions/book_actions';
import{ requestReviews, requestAllReviews } from '../../actions/review_actions'
import BookShow from './book_show';

const mSTP = (state,ownProps) => ({
    book: state.entities.books[ownProps.match.params.id]
    
})



const mDTP = dispatch => ({
    requestBook: id => dispatch(requestBook(id)),
    updateBook: book => dispatch(updateBook(book)),
    requestReviews: id => dispatch(requestAllReviews(id))
})

export default connect(mSTP, mDTP)(BookShow);