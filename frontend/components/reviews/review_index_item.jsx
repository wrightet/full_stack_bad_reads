import React from 'react';
import EditReviewContainer from './edit_review_container';
import {Link} from 'react-router-dom';
import { requestAllReviews } from '../../actions/review_actions';
import { formatDateTime } from '../../util/date_util';
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
                <div className='review-ul'>
                    <div className='review-user'>User: {review.user_id}</div>
                    <div className='review-rating'>Rated it: {review.rating}/ 5</div>
                    <div className='review-date'>{formatDateTime(review.created_at).split('(')[0]}</div>
                </div>
                <ul className='review-body'>
                    <li className='review-li'><span className='review-body-span'>{review.body}</span></li>
                    <li className='review-li'>
                        {this.props.currentUser === review.user_id ? 
                        <div className='review-edit-delete'>
                             <Link to={`/books/review/${review.id}/edit`} className='review-delete'>Edit</Link>
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