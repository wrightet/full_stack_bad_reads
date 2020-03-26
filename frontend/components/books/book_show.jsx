import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReviewIndexItem from '../reviews/review_index_item';
import {IndivRating} from '../stars/stars';

class BookShow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            props: this.props,
            start: 0,
            end: 5,
            displayWords: 100,
            more: 'more'
        };
        this.keyFinder = this.keyFinder.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleForward = this.handleForward.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.showMore = this.showMore.bind(this);
        this.avgRating = this.avgRating.bind(this);
    }

    componentDidMount() {
        this.props.requestBook(this.props.match.params.id);
        this.props.requestAllReviews(this.props.match.params.id);
    }


    avgRating(){
        if(this.props.book.reviews){ let count = 0;
        let length = this.props.book.reviews.length;
        this.props.book.reviews.map(review => {
            count += review.rating
        }
            );
            let num = parseFloat(count/length);
            return num.toFixed(2)}
            else{ return null}
       
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

    handleBack(start, end, length) {
        let newStart = start - 5;
        let newEnd = end - 5;
        if (newStart < 0 || newEnd <= 0) {
            newStart = 0;
            newEnd = 5;
        }
        this.setState({ start: newStart, end: newEnd })
    }

    handleDelete(bookId, review) {
        this.props.deleteReview(bookId, review).then(bookId => requestAllReviews(bookId))

    }

    handleForward(start, end, length) {
        let newStart = start + 5;
        let newEnd = end + 5
        if (newStart >= length || newEnd >= length) {
            newStart = length - 5;
            newEnd = length;
            this.setState({ start: newStart, end: newEnd })
        }

        this.setState({ start: newStart, end: newEnd })
    }

    showMore(length){
      this.state.displayWords === 100 ? this.setState({displayWords: length}) :  this.setState({displayWords: 100})
        this.state.more === 'more' ? this.setState({ more: 'less' }) : this.setState({ more: 'more' })
    }

    render(){
       
        let book = this.props.book;
        let user = this.props.user;
        let start = this.state.start;
        let end = this.state.end;
       
        if (!book) {return null;}
       
        else  {
            let words = book.description.split(' ')
        return (
        <div className="book-content">
           
            <div className="book-show-image">
            <img src={this.keyFinder(book.url)} className='book-show-photo'/>
            </div>
           
                <div className='book-review-combine'>
                    <div className="book-show-content">
                        <h1 className='book-title'>{book.title}</h1>
                        <h1 className ='author-name'>by {book.author}</h1>
                        <h1 className='genre'>Genre: {book.genre}</h1>
                        <h1 className='rating-num'>Rating {this.avgRating()}/5</h1>
                        <div>
                            <IndivRating 
                                min={1}
                                max={5}
                                value={Math.round(this.avgRating())}
                            />
                        </div>
                
                        <div className='book-description'>
                            <span className='book-des-start'>{words.slice(0, this.state.displayWords).join(" ")+'.'}</span>
                            
                                {/* <span className={this.state.name}>{words.slice(100, book.description.length).join(' ') + "."}</span> */}
                                <button onClick={() => this.showMore(words.length)} className='more-less'>...{this.state.more}</button>
                        </div>      
                         {/* <select name="" id="read-selector" >
                            <option value="haveNotRead">Have Not Read</option>
                            <option value="read">Read</option>
                            <option value="currently_reading">Currently Reading</option>
                            <option value="want_to_read">Want To Read</option>
                        </select>   */}
                    </div> 
                           {/* the review content div has a flex direction reverse  */}
                    <div className='review-content'>
                        <div className='review-button-div'>
                            <button onClick={() => this.handleBack(start, end, book.reviews.length)} className='review-buttons'>Previous</button>
                            <button onClick={() => this.handleForward(start, end, book.reviews.length)} className='review-buttons' >...Next</button>
                        </div>
              
                        
                            { book.reviews ? book.reviews.map(review => (
                                <ReviewIndexItem bookId={this.props.book.id} 
                                review={review} key={review.id} 
                                deleteReview={this.props.deleteReview}
                                requestAllReviews={this.props.requestAllReviews}
                                requestBook={this.props.requestBook}
                                requestUser={this.props.requestUser}
                                currentUser={this.props.currentUser}
                                user={user}
                                />
                              
                               
                                
                            )) : "" 
                            } 
                        <h1 className='reviews-h1'>Community Reviews</h1>
                        <Link to={`/books/${book.id}/review/new`} className='write-review'>Write a review</Link>
                            
                    </div>
                </div>
            
        </div>
        )
        } 
    }
}

export default withRouter(BookShow);
