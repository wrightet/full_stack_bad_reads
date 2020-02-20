import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from '../../actions/review_actions';

const mSTP = state => ({
    review: {
        rating: '',
        body: '',
        book_id: state.book_id,
        user_id: state.user_id
    }
})

const mDTP = dispatch => ({
    createReview: (bookId, review) => dispatch(createReview(bookId, review))
})

export default connect(mSTP, mDTP)(ReviewForm);