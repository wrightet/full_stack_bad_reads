import { connect } from 'react-redux';
import { createReview, requestAllReviews, requestReview, deleteReview} from '../../actions/review_actions';
import { requestBook } from '../../actions/book_actions';
import ReviewForm from './review_form';

const mSTP = state => {
    return{
    review: {
        rating: 3,
        body: '',
        user_id: state.session.id,
        book_id: state.entities.books.id

    },
    books: state.entities.books,
    formType: 'Add Review'
}}

const mDTP = dispatch => ({
    action: (bookId, review) => dispatch(createReview(bookId,review)),
    requestAllReviews: bookId => dispatch(requestAllReviews(bookId)),
    requestReview: (bookId, reviewId)=> dispatch(requestReview(bookId, reviewId)),
    deleteReview: (bookId, review) => dispatch(deleteReview(bookId, review)),
    requestBook: (bookId) => dispatch(requestBook(bookId))
})

export default connect(mSTP, mDTP)(ReviewForm);