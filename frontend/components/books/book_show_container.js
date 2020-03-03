import { connect } from 'react-redux';
import { requestBook, updateBook } from '../../actions/book_actions';
import{ requestReviews, requestAllReviews, deleteReview } from '../../actions/review_actions'
import BookShow from './book_show';

const mSTP = (state,ownProps) => {
    
    return {
    book: state.entities.books[ownProps.match.params.id],
    currentUser: state.session.id
    
}}



const mDTP = dispatch => ({
    requestBook: id => dispatch(requestBook(id)),
    updateBook: book => dispatch(updateBook(book)),
    requestAllReviews: id => dispatch(requestAllReviews(id)),
    deleteReview: (bookId, review) => dispatch(deleteReview(bookId, review))
})

export default connect(mSTP, mDTP)(BookShow);