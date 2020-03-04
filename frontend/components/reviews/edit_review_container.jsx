import React from 'react';
import { connect } from 'react-redux';
import { requestReview, updateReview } from '../../actions/review_actions';
import ReviewForm from './review_form';

class EditReviewForm extends React.Component {
    componentDidMount(){
        this.props.requestReview(this.props.match.params.bookId)
    }

    render(){
        console.log('hi')
        const {action, formType, review} = this.props;

        if (!review) return null;

        return (
            <ReviewForm
                action={action}
                formType={formType}
                review={review}
            />
        )
    }
}

const mSTP = (state, ownProps) => ({
    review: state.entities.reviews[ownProps.match.params.reviewId],
    formType: 'Edit Review'
})

const mDTP = dispatch => ({
    requestReview: bookId => dispatch(requestReview(bookId)),
    action: (bookId, review) => dispatch(updateReview(bookId, review))
})

export default connect(mSTP, mDTP)(EditReviewForm);