import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';
import ReviewForm from './review_form';

const mSTP = state => ({
    review: {
        rating:'',
        body: '',
        user_id: state.session.id,
        book_id: state.entities.books.id
    },
    formType: 'Add Review'
})

const mDTP = dispatch => ({
    action: (bookId, review) => dispatch(createReview(bookId,review))
})

export default connect(mSTP, mDTP)(ReviewForm);