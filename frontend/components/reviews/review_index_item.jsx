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
        console.log('review-props',props)
        
    }

    componentWillUnmount(){
        console.log('unmount')
        // this.props.requestBook(this.props.bookId)
        // .then(book => this.props.requestAllReviews(book.id))
        // .then(book => this.props.history.push( `books/${book.id}`))
    
      
    }

 
    componentDidMount(){
        console.log('mount')
    }
    handleDelete(bookId, review){
    //    console.log('delete')
        // .then(bookId => requestBook(bookId))
        // .then(bookId => this.props.history.push(`/book/${bookId}`))
        // this.setState({id: null, user_id: this.props.currentUser, rating: 0, body: ''})
        // this.setState({deleted: true})
        this.props.deleteReview(bookId, review)
        window.location.reload()
        
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
                        <button onClick={() => this.handleDelete(this.props.bookId, review)} 
                        className='review-delete'>Delete</button>
                    </li>
                    
                </ul>
            </div>
        )
    }
    
}

export default ReviewIndexItem;