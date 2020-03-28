import React from 'react';
import { connect } from 'react-redux';
import { requestReview, updateReview, requestAllReviews} from '../../actions/review_actions';
import {requestBook} from '../../actions/book_actions'
import ReviewForm from './review_form';

class EditReviewForm extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        
        this.props.requestReview(this.props.match.params.bookId, this.props.reviewId)
    }

    render() {
        
        
        const {action, formType, review, requestBook, requestAllReviews} = this.props;
       
        if (!review) return null;
 
        return (
            <ReviewForm
                action={action}
                formType={formType}
                review={review}
                requestBook={requestBook}
                requestAllReviews={requestAllReviews}
                history={this.props.history}
                bookId={review.bookId}
            />
        )
    }
}

const mSTP = (state, ownProps) => {
    return {
    review: state.entities.reviews[ownProps.match.params.id],
    reviewId: ownProps.match.params.id,

        formType: 'Edit Review'
    }
}
    


const mDTP = dispatch => ({
    requestReview: (bookId, reviewId) => dispatch(requestReview(bookId, reviewId)),
    requestAllReviews: (bookId) => dispatch(requestAllReviews(bookId)),
    deleteReview: (bookId, review) => dispatch(deleteReview(bookId, review)), 
    requestBook: (bookId) => dispatch(requestBook(bookId)),
    action: (review) => dispatch(updateReview(review))
})

export default connect(mSTP, mDTP)(EditReviewForm);