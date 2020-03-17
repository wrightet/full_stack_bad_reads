import React from 'react';
import { Link } from 'react-router-dom';
class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.user_id = this.props.userId;
        this.book_id = this.props.bookId;
        this.title = this.props.title;
        this.state = this.props.review;
        this.handleSubmit = this.handleSubmit.bind(this);
       
    }

    componentDidMount(){
        this.props.requestAllReviews(this.book_id) 
    }


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
            
            this.setState({
                rating: 3,
                book_id: this.props.bookId,
                user_id: this.user_id,
                body: ''
            })
            this.props.history.push(`/books/${this.props.review.bookId}`)
        }else{
           
            this.props.action(this.props.match.params.id, this.state).then(
                () => this.props.requestAllReviews(this.props.match.params.id)
            )
            // .then(window.location.reload())
            this.setState({
                rating: 3,
                book_id: this.props.match.params.id,
                user_id: this.user_id,
                body: ''
            })
            
            this.props.history.push(`/books/${this.props.match.params.id}`)
            
        }
            
    }
    
    render(){
     if (this.props.formType === 'Edit Review'){
         this.state.book_id = this.book_id
     }
        else { this.state.book_id = this.props.match.params.id} ;
    
        // let title = this.props.requestBook(this.state.book_id);
        // console.log('title',title)
        return(
            <div className='reveiw-form-div'>
                {/* <h1>{this.props.formType}</h1> */}
                {/* <h1>{title}</h1> */}
                <form onSubmit={this.handleSubmit} className='review-form'>
                    <label className='rating-label'> Rating
                        <select value={this.state.rating}  
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
                    <label className='write-review-label'> What do you think?
                        <textarea value={this.state.body} placeholder='Write a review' 
                        onChange={this.update('body')}
                        className='review-text-area'/>
                    </label>
                    <div className='review-submit-cancel'>
                        <input type="submit" value={this.props.formType} className='review-submit'/>
                        <Link to={`/books/${this.state.book_id}`} className='cancel'>Cancel</Link>
                    </div>
                    
                </form>
                
            </div>
        )
    }
    
}

export default ReviewForm;