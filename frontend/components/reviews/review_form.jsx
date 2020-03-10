import React from 'react';
import { updateReview } from '../../util/review_util';
import { Redirect } from 'react-router-dom'

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.user_id = this.props.userId;
        this.book_id = this.props.bookId;
        this.state = this.props.review;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidMount(){
    //     this.props.requestAllReviews(this.book_id) 
    // }


    update(field){
        return e => this.setState({[field]: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        if (this.props.formType === 'Edit Review'){
            this.props.action(this.state)
            .then(
                () => this.props.requestBook(this.props.review.bookId)
            )
            .then(
                book => this.props.requestAllReviews(book.id)
            )
            return(
                <Redirect to={`/books/${this.props.review.bookId}`}/>
            )
                
                 
                
        
        }else{
            this.props.action(this.book_id, this.state).then(
                book => this.props.requestAllReviews(book.id)
            ).then(window.location.reload())
        }
       
   
            
            this.setState({
            rating: 3,
            book_id: this.props.bookId,
            user_id: this.user_id,
            body: ''
        })
        // )
        // e.preventDefault();
        // const review = Object.assign({}, this.state);
        // this.props.deleteReview(this.props.bookId, review).then(() => this.props.requestBook(this.state.book_id));
      
    }
    
    render(){
        this.state.book_id = this.book_id;
        return(
            <div className='reveiw-form-div'>
                <h1>{this.props.formType}</h1>
                <form onSubmit={this.handleSubmit} className='review-form'>
                    <label> Rating
                        <select value={this.state.rating} id="rating-selector" 
                            onChange={this.update('rating')}
                            className='rating-selector'
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>
                    <label> 
                        <textarea value={this.state.body} placeholder='Write a review' 
                        onChange={this.update('body')}
                        className='review-text-area'/>
                    </label>
                    <input type="submit" value={this.props.formType} className='review-submit'/>
                </form>
            </div>
        )
    }
    
}

export default ReviewForm;