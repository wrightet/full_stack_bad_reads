import React from 'react';
import { connect } from 'react-redux';
import { requestReview, updateReview } from '../../actions/review_actions';
import ReviewForm from './review_form';

class EditReviewForm extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        
        this.props.requestReview(this.props.match.params.bookId, this.props.reviewId)
    }

    render() {
        
        
        const {action, formType, review} = this.props;
        // debugger
        if (!review) return null;
        console.log('review',this.props.review)
        console.log('props',this.props)
        console.log('bookId', review.bookId)
        return (
            <ReviewForm
                action={action}
                formType={formType}
                review={review}
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
    action: (bookId, review) => dispatch(updateReview(bookId, review))
})

export default connect(mSTP, mDTP)(EditReviewForm);