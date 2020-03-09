import { connect } from 'react-redux';
import { createReview, requestAllReviews, requestReview, deleteReview} from '../../actions/review_actions';
import ReviewForm from './review_form';

const mSTP = state => {
    
    return{
    review: {
        rating: 3,
        body: '',
        user_id: state.session.id,
        book_id: state.entities.books.id
    },
    formType: 'Add Review'
}}

const mDTP = dispatch => ({
    action: (bookId, review) => dispatch(createReview(bookId,review)),
    requestAllReviews: bookId => dispatch(requestAllReviews(bookId)),
    requestReview: (bookId, reviewId)=> dispatch(requestReview(bookId, reviewId)),
    deleteReview: (bookId, review) => dispatch(deleteReview(bookId, review))
})

export default connect(mSTP, mDTP)(ReviewForm);