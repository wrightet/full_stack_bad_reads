import React from 'react';
import EditReviewContainer from './edit_review_container'
import {Link} from 'react-router-dom';
class ReviewIndexItem extends React.Component{
    constructor(props) {
        super(props);
        
    }
   
    render(){
        
        let review = this.props.review;
        if(!review) {return null}
        return (
            <div className='indv-review'>
                <ul>
                    <li>User: {review.user_id}</li>
                    <li>Rating: {review.rating}/ 5</li>
                    <li><span>{review.body}</span></li>
                    <li><Link to={`review/${review.id}/edit`}>Edit</Link>
                    <a href ='' onClick={this.props.deleteReview(this.props.bookId, review)} className='review-delete'>Delete</a></li>
                    
                </ul>
            </div>
        )
    }
    
}

export default ReviewIndexItem;