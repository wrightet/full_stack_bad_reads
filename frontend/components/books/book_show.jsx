import React from 'react';
import ReviewsContainer from '../reviews/reviews_container';
import CreateReviewContainer from '../reviews/create_review_container'
import { Link, withRouter } from 'react-router-dom';
import ReviewIndexItem from '../reviews/review_index_item';

class BookShow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            props: this.props,
            start: 0,
            end: 6,
            name: 'more'
        };
        this.keyFinder = this.keyFinder.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleForward = this.handleForward.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.showMore = this.showMore.bind(this)
    }

    componentDidMount() {
        this.props.requestBook(this.props.match.params.id)
        this.props.requestAllReviews(this.props.match.params.id) 
    }

    keyFinder(url) {
        let val = url.split('.')[0];
        let keys = Object.keys(window.images)
        let newKeys = keys.map(key => {
            return key.split('URL')[0];
        })
        let values = Object.values(window.images)

        for (let i = 0; i < keys.length; i++) {
            if (val === newKeys[i]) {
                return window.images[keys[i]]
            }
        }
        return window.images.openbookURL;

    }

    handleForward(start, end) {
        let newStart = start - 6;
        let newEnd = end - 6;
        if (newStart < 0) {
            newStart = 0;
            newEnd = 6;
        }

        this.setState({ start: newStart, end: newEnd })

    }

    handleDelete(bookId, review) {
        this.props.deleteReview(bookId, review).then(bookId => requestAllReviews(bookId))

    }

    handleBack(start, end, length) {
        let newStart = start + 6;
        let newEnd = end + 6
        if (newStart >= length) {
            newStart = length - 6;
            newEnd = length;
        }

        this.setState({ start: newStart, end: newEnd })
    }

    showMore(){
      return( this.state.name === 'more' ? this.setState({name: 'less'}) :  this.setState({name: 'more'}))
    }

    render(){
       
        let book = this.props.book;
        let user = this.props.currentUser;
        let start = this.state.start;
        let end = this.state.end;
       
       
        if (!book) {return null;}
       
        else  {

        return (
        <div className="book-content">
           
            <div className="book-show-image">
            <img src={this.keyFinder(book.url)} className='book-show-photo'/>
            </div>
            {/* <ul className='book-content-list'> */}
                {/* <li> */}
                <div className='book-review-combine'>
                    <div className="book-show-content">
                        <h1>{book.title}</h1>
                        <h1>by {book.author}</h1>
                        <h1>{book.genre}</h1>
                        <div className='book-description'>
                            <span className='book-des-start'>{book.description.slice(0, book.description.length/3)}</span>
                            
                                <span className={this.state.name}>{book.description.slice(book.description.length / 3, book.description.length)}</span>
                                <button onClick={() => this.showMore()} className='more-less'>...{this.state.name}</button>
                        </div>      
                         {/* <select name="" id="read-selector" >
                            <option value="haveNotRead">Have Not Read</option>
                            <option value="read">Read</option>
                            <option value="currently_reading">Currently Reading</option>
                            <option value="want_to_read">Want To Read</option>
                        </select>   */}
                    </div> 

                    <div className='review-content'>
                        
                        <h1>Reviews</h1>

                            <CreateReviewContainer bookId={book.id} userId={user} />
                            { book.reviews ? book.reviews.reverse().slice(start,end).map(review => (
                                <ReviewIndexItem bookId={this.props.book.id} 
                                review={review} key={review.id} 
                                deleteReview={this.props.deleteReview}
                                requestAllReviews={this.props.requestAllReviews}
                                requestBook={this.props.requestBook}
                                currentUser={this.props.currentUser}/>
                               
                                
                            )) : "" 
                            } 
                            <div className='review-button-div'>
                                <button onClick={() => this.handleForward(start, end)} className='review-buttons'>Previous</button>
                                <button onClick={() => this.handleBack(start, end, book.reviews.length)} className='review-buttons' >Next</button>
                            </div>
                            
                    </div>
                </div>
                    
                        
                   
                  
                {/* </li> */}
                {/* <li> */}
                                    
                   
           
                {/* </li> */}
                
            {/* </ul> */}
            
        </div>
        )
        } 
    }
}

export default withRouter(BookShow);
