import React from 'react';
import EditReviewContainer from './edit_review_container'
import {Link} from 'react-router-dom';
import { requestAllReviews } from '../../actions/review_actions';
class ReviewIndexItem extends React.Component{
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        
    }

    handleDelete(bookId, review){
        this.props.deleteReview(bookId, review)
        // .then(bookId => requestBook(bookId))
        .then(bookId => this.props.history.push(`/book/${bookId}`))
        
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
                    <li>
                        <Link to={`/books/review/${review.id}/edit`}>Edit</Link>
                        <button onClick={() => this.props.deleteReview(this.props.bookId, review)} 
                        className='review-delete'>Delete</button>
                    </li>
                    
                </ul>
            </div>
        )
    }
    
}

export default ReviewIndexItem;