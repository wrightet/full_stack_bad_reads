import React from 'react';
import EditReviewContainer from './edit_review_container'
import {Link} from 'react-router-dom';
import { requestAllReviews } from '../../actions/review_actions';
class ReviewIndexItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            props: this.props.review,
            deleted: false
        };
        this.handleDelete = this.handleDelete.bind(this);
        
    }

    handleDelete(bookId, review){
        this.props.deleteReview(bookId, review)
        // .then(res => this.setState({res: null}))
        window.location.reload() 
        // this.setState({}) 
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
                        {this.props.currentUser === review.user_id ? 
                        <div>
                             <Link to={`/books/review/${review.id}/edit`}>Edit</Link>
                            <button onClick={() => this.handleDelete(this.props.bookId, review)} 
                            className='review-delete'>Delete</button>
                        </div>
                        
                         :''}
                       
                    </li> 
                </ul>
            </div>
        )
    }
    
}

export default ReviewIndexItem;